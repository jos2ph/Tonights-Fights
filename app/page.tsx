import Layout from "@/components/Layout";
import Component from "@/components/Visual";
import MMA from "@/components/FightAccordion";
import React from "react";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col px-8 align-center justify-center min-h-screen">
        <Layout>
          <br />
          <br />
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            TonightsFights is your <br />
            go-to source for MMA
            <br />
            event information.
          </h1>
          <p className="leading-16 py-4 pr-96 text-xl">
            {" "}
            Add ptag here. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Consectetur aut quod debitis cum vero natus cumque velit
            dignissimos.
          </p>
          <br />
          <br />
          {/* Flex container for side-by-side layout */}
          <div className="flex sm:justify-center items-start gap-3">
            <MMA />
            {/* Upcoming Fights Accordion wrapped in a card */}
            <div className="w-full sm:w-1/2">
              <Component />
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}
