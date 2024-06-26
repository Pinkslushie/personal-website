"use client";

import Intro from '@/components/v2/sections/intro';
import NavigationBar from '@/components/v2/navigation/navbar';
import MessageBoard from '@/components/v2/sections/messagesboard';
import Projects from '@/components/v2/sections/projects';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId ?? '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="bg-slate-100 font-roboto">
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
