import React from 'react'
import { Avatar, Button, Container, H3, Span, Switch, Tooltip, View } from 'strivui'
interface HeaderProps {
  saloonLights: boolean;
  setSaloonLights: (value: boolean) => void;
  setIsTelegraphOpen: (value: boolean) => void;
}
const Header = ({saloonLights, setSaloonLights, setIsTelegraphOpen}: HeaderProps) => {
  return (
        <View className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          saloonLights
            ? "bg-stone-900 "
            : "bg-stone-800 "
        }`}>
        <Container className="max-w-6xl mx-auto flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Avatar className="bg-amber-900 text-amber-200 font-bold border border-amber-600/40">
              🤠
            </Avatar>
            <View>
              <H3 className="font-serif text-lg font-bold text-amber-500 uppercase tracking-widest leading-none">
                Syed Abdullah Ali
              </H3>
              <Span className="text-[10px] font-mono text-stone-400">
                SENIOR SOFTWARE ENGINEER & ARCHITECT
              </Span>
            </View>
          </View>

          <View className="flex flex-row items-center gap-4">
            <Tooltip content="Toggle Range Atmosphere">
              <Switch
                checked={saloonLights}
                onChange={() => setSaloonLights(!saloonLights)}
              />
            </Tooltip>

            <Button
              variant="primary"
              onClick={() => setIsTelegraphOpen(true)}
              className="bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold font-mono uppercase tracking-widest px-4 py-2.5 rounded border border-amber-400/40 transition-all"
            >
              Consult / Hire
            </Button>
          </View>
        </Container>
      </View>
  )
}

export default Header
