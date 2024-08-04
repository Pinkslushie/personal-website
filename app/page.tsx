"use client";

import { useEffect } from 'react';
import HomepageV3 from '@/components/v3/homepage';

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
    <div>
      <HomepageV3 />
    </div>
  )
}
