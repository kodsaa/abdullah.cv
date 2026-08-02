// ==============================================
// 1. WATER RIPPLE LOGIC (OPTIMIZED & THROTTLED)
// ==============================================
export class Ripple {
  x: number;
  y: number;
  circleSize: number;
  maxSize: number;
  opacity: number;
  speed: number;
  opacityStep: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.circleSize = 4;
    this.maxSize = 100;
    this.opacity = 1;
    this.speed = 2;
    this.opacityStep = this.speed / (this.maxSize - 2);
  }

  update(): void {
    this.circleSize += this.speed;
    this.opacity -= this.opacityStep;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.opacity <= 0) return;
    ctx.beginPath();
    ctx.strokeStyle = `rgba(148, 217, 255, ${Math.max(0, this.opacity)})`;
    ctx.lineWidth = 1.5;
    ctx.arc(this.x, this.y, this.circleSize, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

// ==============================================
// 2. THUNDER LIGHTNING LOGIC
// ==============================================
interface LightningSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export class Lightning {
  startX: number;
  startY: number;
  segments: LightningSegment[];
  opacity: number;

  constructor(width: number, height: number) {
    this.startX = Math.random() * width;
    this.startY = 0;
    this.segments = [];
    this.opacity = 1;

    let currX = this.startX;
    let currY = this.startY;

    while (currY < height * 0.8) {
      const nextX = currX + (Math.random() - 0.5) * 60;
      const nextY = currY + Math.random() * 35 + 10;
      this.segments.push({ x1: currX, y1: currY, x2: nextX, y2: nextY });
      currX = nextX;
      currY = nextY;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = `rgba(210, 230, 255, ${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#ffffff";
    for (const seg of this.segments) {
      ctx.moveTo(seg.x1, seg.y1);
      ctx.lineTo(seg.x2, seg.y2);
    }
    ctx.stroke();
    ctx.restore();
    this.opacity -= 0.06;
  }
}

// ==============================================
// 3. FIREFLIES LOGIC
// ==============================================
export class Firefly {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  alphaSpeed: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 2 + 1;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.alpha = Math.random();
    this.alphaSpeed = 0.015 * (Math.random() > 0.5 ? 1 : -1);
  }

  update(width: number, height: number): void {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha += this.alphaSpeed;

    if (this.alpha <= 0.1 || this.alpha >= 1) this.alphaSpeed *= -1;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 230, 100, ${this.alpha})`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#ffea00";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// ==============================================
// 4. CONSTELLATION / PARTICLES LOGIC
// ==============================================
export class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() - 0.5) * 1.2;
    this.radius = 2;
  }

  update(width: number, height: number): void {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ==============================================
// 5. MATRIX RAIN LOGIC (TRANSPARENT TRAIL)
// ==============================================
const chars = "0123456789ABCDEF⚛︎⟨⟩λπµ";

interface TrailItem {
  char: string;
  y: number;
}

export class MatrixDrop {
  x: number;
  canvasHeight: number;
  fontSize: number;
  y: number;
  speed: number;
  trail: TrailItem[];
  maxTrailLength: number;

  constructor(x: number, canvasHeight: number) {
    this.x = x;
    this.canvasHeight = canvasHeight;
    this.fontSize = 14;
    this.y = Math.random() * -100;
    this.speed = Math.random() * 3 + 2;
    this.trail = [];
    this.maxTrailLength = Math.floor(Math.random() * 10) + 8;
  }

  update(): void {
    const char = chars[Math.floor(Math.random() * chars.length)];
    this.trail.unshift({ char, y: this.y });

    if (this.trail.length > this.maxTrailLength) {
      this.trail.pop();
    }

    this.y += this.fontSize;

    if (this.y > this.canvasHeight && Math.random() > 0.975) {
      this.y = 0;
      this.trail = [];
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.trail.length; i++) {
      const item = this.trail[i];
      const opacity = 1 - i / this.trail.length;

      if (i === 0) {
        ctx.fillStyle = `rgba(220, 255, 220, ${opacity})`;
      } else {
        ctx.fillStyle = `rgba(0, 255, 102, ${opacity * 0.8})`;
      }

      ctx.fillText(item.char, this.x, item.y);
    }
  }
}

export function createMatrixSystem(width: number, height: number): MatrixDrop[] {
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);
  const drops: MatrixDrop[] = [];

  for (let i = 0; i < columns; i++) {
    drops.push(new MatrixDrop(i * fontSize, height));
  }

  return drops;
}