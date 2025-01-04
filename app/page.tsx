import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { Progress } from "@/components/ui/progress";
import React from "react";
import cardData from "./data/card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Layout>
          <br />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            TonightsFights.Net
          </h1>
          <h1>Progress Bar:</h1>
          <Progress value={66} />
          <br />
          <h2>Upcoming Fights:</h2>
          {cardData.map(({ title, date, link, fights }, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>
                  {title}
                  <br />
                  {date}
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Event Link: {link}
                    </a>
                  </p>
                  <div className="space-y-4">
                    {fights.map((fight, fightIndex) => (
                      <div key={fightIndex} className="border-b py-2">
                        <h3 className="font-semibold text-lg">
                          {fight.weight} lbs
                        </h3>
                        <div className="flex justify-between items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Image
                              src={fight.fighterA.picture}
                              alt={fight.fighterA.name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <a
                              href={fight.fighterA.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              {fight.fighterA.name} ({fight.fighterA.record})
                            </a>
                          </div>
                          <span className="text-lg">vs</span>
                          <div className="flex items-center gap-2">
                            <Image
                              src={fight.fighterB.picture}
                              alt={fight.fighterB.name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                            <a
                              href={fight.fighterB.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              {fight.fighterB.name} ({fight.fighterB.record})
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </Layout>
      </main>
    </div>
  );
}
