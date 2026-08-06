import type { ReactNode } from "react";
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

  children:ReactNode
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
  children
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
        w-80
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
          theme_sidebar_bg
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
            className="rounded-full w-10 h-10 bg-white/10 theme_paragraph theme_border"
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
  triggerClassName="bg-black-200 text-amber-50 border border-black-200 hover:border-black-300 rounded-md"
  dropdownClassName="bg-stone-900 border border-stone-900 rounded-md shadow-lg"
  optionClassName="hover:bg-amber-500 text-amber-100 hover:text-stone-800  "
  selectedOptionClassName="bg-white/10 text-amber-50 rounded-md"
  options={[
    { label: "Obsidian", value: "obsidian" },
    { label: "Midnight", value: "midnight" },
    { label: "Carbon", value: "carbon" },
    { label: "Titanium", value: "titanium" },
    { label: "Steel", value: "steel" },
    { label: "Quartz", value: "quartz" },
    { label: "Sandstone", value: "sandstone" },
    { label: "Aurora", value: "aurora" },
    { label: "Nebula", value: "nebula" },
    { label: "Solarized", value: "solarized" },
    { label: "High Contrast", value: "contrast" },
    { label: "System Default", value: "system" },
  ]}
/>
        </View>

        {/* Time */}

   <View>
  <Text className="mb-3 text-stone-400">
    Language
  </Text>

  <Select
value={timeOfDay}
onChange={setTimeOfDay}
  triggerClassName="bg-black-200 text-amber-50 border border-black-200 hover:border-black-300 rounded-md"
  dropdownClassName="bg-stone-900 border border-stone-900 rounded-md shadow-lg"
  optionClassName="hover:bg-amber-500 text-amber-100 hover:text-stone-800  "
  selectedOptionClassName="bg-white/10 text-amber-50 rounded-md"
    options={[
      { label: "🇺🇸 English", value: "en" },
      { label: "🇵🇰 اردو (Urdu)", value: "ur" },
      { label: "🇸🇦 العربية (Arabic)", value: "ar" },
      { label: "🇮🇳 हिन्दी (Hindi)", value: "hi" },
    ]}
  />
</View>
        {/* Season */}

        {/* Switches */}

        <View className="mt-10 ">

            <Text className="text-stone-400 ">Effects</Text>


            {/* <Text className="text-stone-400 m-0 p-0 "> Water Effects</Text>

            <Switch
              checked={effects}
              onChange={() => setEffects(!effects)}
            /> */}
            {children}

        </View>

        {/* Footer */}

        <View className="mt-auto pt-12">

          <Button
            className="
              w-full
              theme_button-highlight
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