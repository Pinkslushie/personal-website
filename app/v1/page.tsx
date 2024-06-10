"use client";

import Introduction from '@/components/v1/sections/introduction'
import PetAdoptionWebsite from '@/components/v1/sections/petadoptionwebsite'
import FarmingSimulator from '@/components/v1/sections/farmingsimulator'
import ConsoleLineGame from '@/components/v1/sections/consolelinegame'
import AndroidApp from '@/components/v1/sections/androidapp'
import Final from '@/components/v1/sections/final'

export default function V1() {
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
