"use client";

import NameCardComponent from "@/components/v3/name-card";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";

export default function NameCardPage() {
    const supabase = createClientComponentClient();

    useEffect(() => {
        const incrementVisitCount = async () => {
            try {
                // Fetch the current visit record
                const { data: currentVisit, error: fetchError } = await supabase
                    .from('visits')
                    .select('visitsCount')
                    .eq('visitsPage', 'namecard')
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
                        .eq('visitsPage', 'namecard');

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
                            visitsPage: 'projects',
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
            <NameCardComponent />
        </div>
    )
}