"use client";

import Intro from '@/components/v2/sections/intro';
import NavigationBar from '@/components/v2/navigation/navbar';
import MessageBoard from '@/components/v2/sections/messagesboard';
import Projects from '@/components/v2/sections/projects';

export default function v2() {
    return (
        <div className="bg-slate-100 font-roboto">
            {/* <Head>
        <title>BoneetoFlakes</title>
        <meta name="description" content="This is a description of my page." />
        <meta name="keywords" content="my, page, keywords" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="My Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
            <NavigationBar />
            <div id="section1">
                <Intro />
            </div>

            <div id="section2">
                <Projects />
            </div>

            <div id="section3">
                <MessageBoard />
            </div>
        </div>
    )
}