import Layout from "@/components/Layout";
import MMA from "@/components/FightAccordion";
import Boxing from "@/components/BoxingAccordion";
import { Suspense } from "react";

export default async function Home() {
  try {
    const response = await fetch("https://mma-fights-api-production.up.railway.app/", {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    const mmaData = responseData.data;

    const boxingResponse = await fetch("https://boxing-fights-api-production.up.railway.app", {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!boxingResponse.ok) {
      throw new Error(`HTTP error! status: ${boxingResponse.status}`);
    }

    const boxingResponseData = await boxingResponse.json();

    const boxingData = boxingResponseData.map(event => ({
      ...event,
      fights: event.fights.map(fight => ({
        ...fight,
        details: fight 
      }))
    }));


    return (
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main className="container max-w-screen-xl mx-auto px-4 justify-center min-h-screen">
          <Layout>
            <br />
            <br />
            <h1 className="text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
              Your go-to source
              <br />
              for MMA and Boxing event
              <br />
              information.
            </h1>
            <p className="leading-16 py-4 text-center text-muted-foreground text-lg">
              Currently displaying One FC, UFC, RIZIN, and more for MMA,
              <br />
              and boxing events as well.
            </p>
            <br />
            <br />
            
            {/* MMA Section */}
            <div className="flex justify-center items-center gap-3 w-full px-4 sm:px-0">
              <Suspense fallback={<div>Loading fights...</div>}>
                <MMA mmaData={mmaData} />
              </Suspense>
            </div>
            
            <br />
            <br />
            
            {/* Boxing Section */}
            <div className="flex justify-center items-center gap-3 w-full px-4 sm:px-0">
              {boxingData && boxingData.length > 0 ? (
                <Suspense fallback={<div>Loading fights...</div>}>
                  <Boxing boxingData={boxingData} />
                </Suspense>
              ) : (
                <div className="text-center text-red-500">No boxing data available at this time.</div>
              )}
            </div>
          </Layout>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Error loading data
        </h1>
        <p className="text-gray-200">
          Failed to fetch MMA or boxing event information. Please try again later.
        </p>
      </div>
    );
  }
}
