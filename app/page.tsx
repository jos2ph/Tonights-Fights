import Layout from "@/components/Layout";
import Boxing from "@/components/BoxingAccordion";
import { Suspense } from "react";

export default async function Home() {
  try {
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
    const boxingData = boxingResponseData;

    return (
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main className="container max-w-screen-xl mx-auto px-4 justify-center min-h-screen">
          <Layout>
            <br />
            <br />
            <h1 className="text-4xl font-extrabold tracking-tight text-center lg:text-5xl">
              Your go-to source
              <br />
              for Boxing
              <br />
              event information.
            </h1>
            <p className="leading-16 py-4 text-center text-muted-foreground text-lg">
              Your #1 source for the latest
              <br />
              fight card information.
            </p>
            <br />
            <br />

            {/* Flex container for centering the Boxing Section */}
            <div className="flex justify-center items-center w-full">
              {/* Boxing Section */}
              <div className="w-full sm:w-1/2">
                {boxingData && boxingData.length > 0 ? (
                  <Suspense fallback={<div>Loading boxing fights...</div>}>
                    <Boxing boxingData={boxingData} />
                  </Suspense>
                ) : (
                  <div className="text-center text-red-500">No boxing data available at this time.</div>
                )}
              </div>
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
          Failed to fetch boxing event information. Please try again later.
        </p>
      </div>
    );
  }
}
