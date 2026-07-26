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
  return (
    <View
      className={`
        fixed
        top-0
        right-0
        h-screen
        max-w-full
        z-50
        transition-all
        duration-700
        h-screen
        ${
          open
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }
      `}
    >
      <Card
        className="
          h-full
          rounded-none
          border-l
          border-white/10
          bg-black
          backdrop-blur-3xl
          p-8
          flex
          flex-col
                  overflow-y-auto

        "
      >
        {/* Header */}

        <View className="flex flex-row items-center justify-between">

          <View>

            <H3 className="text-2xl text-amber-400">
              ⚙ Settings
            </H3>

            <Span className="text-xs text-stone-500 uppercase tracking-widest">
              Personalize Experience
            </Span>

          </View>

          <Button
            onClick={onClose}
            className="rounded-full w-10 h-10 bg-stone-800"
          >
            ✕
          </Button>

        </View>

        {/* Theme */}

        <View className="mt-10">

          <Text className="mb-3 text-stone-400">
            Theme
          </Text>

          <Select
            value={theme}
            onChange={setTheme}
            options={[
              { label: "🌙 Dark", value: "dark" },
              { label: "☀ Light", value: "light" },
              { label: "💻 System", value: "system" },
            ]}
          />

        </View>

        {/* Time */}

        <View >

          <Text className="mb-3 text-stone-400">
            Time of Day
          </Text>

          <Select
            value={timeOfDay}
            onChange={setTimeOfDay}
            options={[
              { label: "🌅 Sunrise", value: "sunrise" },
              { label: "☀ Day", value: "day" },
              { label: "🌇 Evening", value: "evening" },
              { label: "🌙 Night", value: "night" },
            ]}
          />

        </View>

        {/* Season */}

        <View >

          <Text className="mb-3 text-stone-400">
            Season
          </Text>

          <Select
            value={season}
            onChange={setSeason}
            options={[
              { label: "☀ Summer", value: "summer" },
              { label: "❄ Winter", value: "winter" },
              { label: "🌧 Rain", value: "rain" },
              { label: "🍂 Autumn", value: "autumn" },
            ]}
          />

        </View>

        {/* Switches */}

        <View className="mt-10 flex flex-col gap-6 ">

          <View className="flex flex-row justify-between items-center">

            <Text className="text-amber-300">✨ Visual Effects</Text>

            <Switch
              checked={effects}
              onChange={() => setEffects(!effects)}
            />

          </View>

        </View>

        {/* Footer */}

        <View className="mt-auto pt-12">

          <Button
            className="
              w-full
              bg-amber-500
              text-black
              rounded-xl
              py-3
            "
            onClick={onClose}
          >
            Save Settings
          </Button>

        </View>

      </Card>
    </View>
  );
};

export default Sidebar;