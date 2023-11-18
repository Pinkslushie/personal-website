"use client";

import Introduction from '@/components/sections/introduction'
import PetAdoptionWebsite from '@/components/sections/petadoptionwebsite'
import FarmingSimulator from '@/components/sections/farmingsimulator'
import ConsoleLineGame from '@/components/sections/consolelinegame'
import AndroidApp from '@/components/sections/androidapp'
import Final from '@/components/sections/final'

export default function Home() {
  return (
    <div>
      <Introduction />

      <PetAdoptionWebsite />

      <FarmingSimulator />

      <AndroidApp />

      <ConsoleLineGame />

      <Final />
    </div>
  )
}
