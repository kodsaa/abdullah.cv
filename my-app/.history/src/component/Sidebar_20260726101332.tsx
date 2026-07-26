"use client";

import { useEffect } from "react";
import {
  Button,
  Card,
  H3,
  Span,
  Switch,
  Text,
  View,
  Select,
} from "strivui";

interface SidebarProps {
  open: boolean;
  onClose: () => void;

  season: string;
  setSeason: (value: string) => void;

  timeOfDay: string;
  setTimeOfDay: (value: string) => void;

  saloonLights: boolean;
  setSaloonLights: (value: boolean) => void;

  theme: string;
  setTheme: (value: string) => void;

  music: boolean;
  setMusic: (value: boolean) => void;

  effects: boolean;
  setEffects: (value: boolean) => void;
}

// Reusable label + select block, so every setting row shares the
// exact same spacing/typography instead of being hand-repeated three times.
const SettingSelect = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) => (
  <View className="mt-7 first:mt-0">
    <Text className="mb-2.5 text-xs font-medium uppercase tracking-wider text-stone-500">
      {label}
    </Text>

    <Select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-white/5
        px-4
        py-2.5
        text-sm
        text-stone-100
        transition-colors
        duration-200
        hover:border-amber-500/40
        focus:border-amber-500
        focus:outline-none
        focus:ring-2
        focus:ring-amber-500/20
      "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  </View>
);

// Reusable label + toggle row.
const SettingToggle = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <View
    className="
      -mx-2.5
      flex
      flex-row
      items-center
      justify-between
      rounded-xl
      px-2.5
      py-2
      transition-colors
      duration-200
      hover:bg-white/5
    "
  >
    <Text className="text-sm text-stone-200">{label}</Text>
    <Switch checked={checked} onChange={onChange} />
  </View>
);

const Sidebar = ({
  open,
  onClose,
  season,
  setSeason,
  timeOfDay,
  setTimeOfDay,
  saloonLights,
  setSaloonLights,
  theme,
  setTheme,
  music,
  setMusic,
  effects,
  setEffects,
}: SidebarProps) => {
  // Escape closes the panel, and background scroll is locked while it's
  // open — small details that make an overlay feel deliberate rather
  // than bolted on.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop — click outside the panel to close it */}
      <View
        onClick={onClose}
        aria-hidden="true"
        className={`
          fixed
          inset-0
          z-[998]
          bg-black/60
          backdrop-blur-sm
          transition-opacity
          duration-500
          ease-out
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      <View
        role="dialog"
        aria-modal="true"
        aria-label="Settings"
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[360px]
          max-w-full
          z-[999]
          transition-all
          duration-500
          ease-out
          ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <Card
          className="
            flex
            h-full
            flex-col
            rounded-none
            border-l
            border-white/10
            bg-black/80
            backdrop-blur-3xl
          "
        >
          {/* Header — pinned, never scrolls */}
          <View
            className="
              flex
              flex-row
              items-center
              justify-between
              border-b
              border-white/10
              px-8
              py-6
            "
          >
            <View>
              <H3 className="text-2xl text-amber-400">⚙ Settings</H3>
              <Span className="text-xs uppercase tracking-widest text-stone-500">
                Personalize Experience
              </Span>
            </View>

            <Button
              onClick={onClose}
              aria-label="Close settings"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-stone-800
                text-stone-300
                transition-all
                duration-300
                ease-out
                hover:rotate-90
                hover:bg-stone-700
                hover:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-amber-500/40
              "
            >
              ✕
            </Button>
          </View>

          {/* Body — the only part that scrolls if content overflows */}
          <View className="flex-1 overflow-y-auto px-8 py-8">
            <SettingSelect
              label="Theme"
              value={theme}
              onChange={setTheme}
              options={[
                { value: "dark", label: "🌙 Dark" },
                { value: "light", label: "☀ Light" },
                { value: "system", label: "💻 System" },
              ]}
            />

            <SettingSelect
              label="Time of Day"
              value={timeOfDay}
              onChange={setTimeOfDay}
              options={[
                { value: "sunrise", label: "🌅 Sunrise" },
                { value: "day", label: "☀ Day" },
                { value: "evening", label: "🌇 Evening" },
                { value: "night", label: "🌙 Night" },
              ]}
            />

            <SettingSelect
              label="Season"
              value={season}
              onChange={setSeason}
              options={[
                { value: "summer", label: "☀ Summer" },
                { value: "winter", label: "❄ Winter" },
                { value: "rain", label: "🌧 Rain" },
                { value: "autumn", label: "🍂 Autumn" },
              ]}
            />

            <View className="mt-8 flex flex-col gap-1 border-t border-white/10 pt-7">
              <SettingToggle
                label="💡 Saloon Lights"
                checked={saloonLights}
                onChange={() => setSaloonLights(!saloonLights)}
              />
              <SettingToggle
                label="🎵 Background Music"
                checked={music}
                onChange={() => setMusic(!music)}
              />
              <SettingToggle
                label="✨ Visual Effects"
                checked={effects}
                onChange={() => setEffects(!effects)}
              />
            </View>
          </View>

          {/* Footer — pinned, never scrolls */}
          <View className="border-t border-white/10 px-8 py-6">
            <Button
              onClick={onClose}
              className="
                w-full
                rounded-xl
                bg-amber-500
                py-3
                font-medium
                text-black
                transition-all
                duration-200
                ease-out
                hover:bg-amber-400
                active:scale-[0.98]
                focus:outline-none
                focus:ring-2
                focus:ring-amber-500/40
              "
            >
              Save Settings
            </Button>
          </View>
        </Card>
      </View>
    </>
  );
};

export default Sidebar;