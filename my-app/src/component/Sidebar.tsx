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
import { useTranslation } from "react-i18next";

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
  const { t,i18n } = useTranslation();
  const isRTL = ["ar", "ur"].includes(i18n.language);

  return (

    <View
   className={`
  fixed
  top-0
  ${isRTL ? "left-0" : "right-0"}
  h-screen
  w-80
  max-w-full
  z-50
  transition-all
  duration-700
  ${
    open
      ? "translate-x-0 opacity-100"
      : isRTL
      ? "-translate-x-full opacity-0 pointer-events-none"
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

            <H3 className="text-2xl theme-sidebar-heading">
              ⚙ {t("settings")}
            </H3>

            <Span className="text-xs theme_paragraph_secondary  uppercase tracking-widest">
              {t("personalizeExperience")}
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

          <Text className="mb-3 theme_paragraph_secondary">
            {t("theme")}
          </Text>

          <Select
  value={theme}
  onChange={setTheme}
  
  triggerClassName="theme-select-container"
  dropdownClassName="theme-select-container-dropdown"
  optionClassName="theme-option-select"
  selectedOptionClassName="theme-select-list  overflow-hidden"
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
  <Text className="mb-3 theme_paragraph_secondary ">
    {t("language")}
  </Text>

  <Select
value={timeOfDay}
onChange={setTimeOfDay}
    triggerClassName="theme-select-container"
  dropdownClassName="theme-select-container-dropdown"
  optionClassName="theme-option-select"
  selectedOptionClassName="theme-select-list  overflow-hidden"
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

            <Text className="theme_paragraph_secondary ">{t("effects")}</Text>


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
         {t("saveSettings")}
          </Button>

        </View>

      </Card>
    </View>
  );
};

export default Sidebar;