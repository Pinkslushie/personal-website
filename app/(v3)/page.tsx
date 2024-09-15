"use client";

import { useEffect } from 'react';
import HomepageV3 from '@/components/v3/homepage';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Home() {
  const supabase = createClientComponentClient();

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Smooth scroll for anchor links
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

    // Increment visit count in Supabase
    const incrementVisitCount = async () => {
      try {
        // Fetch the current visit record
        const { data: currentVisit, error: fetchError } = await supabase
          .from('visits')
          .select('visitsCount')
          .eq('visitsPage', 'homepage')
          .single();

        if (fetchError && fetchError.code !== 'PGRST100') {
          // console.error('Error fetching visit count:', fetchError);
          return;
        }

        // Determine the new visit count
        const newVisitCount = currentVisit ? currentVisit.visitsCount + 1 : 1;

        if (currentVisit) {
          // Update the existing record
          const { error: updateError } = await supabase
            .from('visits')
            .update({
              visitsCount: newVisitCount,
              visitsLastUpdated: new Date().toISOString()  // Update timestamp to now
            })
            .eq('visitsPage', 'homepage');

          if (updateError) {
            // console.error('Error updating visit count:', updateError);
          } else {
            // console.log('Visit count and timestamp updated successfully');
          }
        } else {
          // Insert a new record
          const { error: insertError } = await supabase
            .from('visits')
            .insert({
              visitsPage: 'homepage',
              visitsCount: newVisitCount,
              visitsLastUpdated: new Date().toISOString()  // Set timestamp to now
            });

          if (insertError) {
            // console.error('Error inserting visit count:', insertError);
          } else {
            // console.log('Visit count and timestamp inserted successfully');
          }
        }
      } catch (error) {
        // console.error('Unexpected error:', error);
      }
    };

    incrementVisitCount();
  }, []);

  return (
    <div>
      <HomepageV3 />
    </div>
  )
}
