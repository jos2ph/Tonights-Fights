import Layout from "@/components/Layout";
import MMA from "@/components/FightAccordion";
import { Suspense } from "react";

export default async function Home() {
  try {
    const response = await fetch("https://mmafightcardsapi.adaptable.app/", {
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

    return (
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main className="container max-w-screen-xl mx-auto px-4 justify-center min-h-screen">
          <Layout>
            <br />
            <br />
            <h1 className="text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
              Your go-to source
              <br />
              for MMA event
              <br />
              information.
            </h1>
            <p className="leading-16 py-4 text-center text-muted-foreground text-lg">
              Currently displaying One FC, UFC,<br></br>RIZIN and more.
            </p>
            <br />
            <br />
            <div className="flex sm:justify-center items-start gap-3 w-full">
              <Suspense fallback={<div>Loading fights...</div>}>
                <MMA mmaData={mmaData} />
              </Suspense>
            </div>
          </Layout>
        </main>
      </div>
    );
  } catch (error) {
    console.error("Error fetching MMA data:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Error loading data
        </h1>
        <p className="text-gray-200">
          Failed to fetch MMA event information. Please try again later.
        </p>
      </div>
    );
  }
}
