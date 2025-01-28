"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Define types for the fighter and fight data
interface Fighter {
  name: string;
  picture: string;
  country: string;
  record: string;
  link: string;
}

interface Fight {
  weight: string;
  fighterA: Fighter;
  fighterB: Fighter;
}

interface MMAData {
  title: string;
  date: string;
  fights: Fight[];
}

// Define the component props type
interface MMAProps {
  mmaData: MMAData[];
}

export default function MMA({ mmaData }: MMAProps) {
  if (!Array.isArray(mmaData)) {
    console.error("Invalid data passed to MMA component:", mmaData);
    return <p>No data available</p>;
  }

  return (
    <Card className="w-[400px] sm:w-full sm:h-auto sm:pb-6">
      <CardHeader className="border-b mb-4">
        <CardTitle>🌎 Upcoming MMA Fights</CardTitle>
        <CardDescription>Click to expand and contract</CardDescription>
      </CardHeader>
      <CardContent>
        {mmaData.map(({ title, date, fights }, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="flex flex-col text-xl font-extrabold tracking-tight lg:text-xl px-4 pb-6">
                <div className="text-muted-foreground text-lg">{date}</div>
                <div className="sm:text-lg">{title}</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  {fights.map((fight, fightIndex) => (
                    <div key={fightIndex} className="py-6">
                      {/* Weight Division */}
                      <h3 className="font-bold text-lg text-center">
                        {fight.weight} lb Division
                      </h3>
                      <div className="flex justify-center items-center gap-6">
                        {/* Fighter A */}
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <Image
                            src={fight.fighterA.picture}
                            alt={fight.fighterA.name}
                            width={120}
                            height={120}
                            className="rounded-lg"
                          />
                          <a
                            href={fight.fighterA.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline font-bold flex items-center gap-2"
                          >
                            <Image
                              src={fight.fighterA.country}
                              alt={fight.fighterA.name}
                              width={24}
                              height={24}
                              className="rounded-sm"
                            />
                            <span>{fight.fighterA.name}</span>
                          </a>
                          <span className="text-sm font-extrabold tracking-tight text-muted-foreground">
                            ({fight.fighterA.record})
                          </span>
                        </div>

                        <div className="text-4xl font-semibold tracking-tight text-center">
                          vs
                        </div>

                        {/* Fighter B */}
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <Image
                            src={fight.fighterB.picture}
                            alt={fight.fighterB.name}
                            width={120}
                            height={120}
                            className="rounded-lg"
                          />
                          <a
                            href={fight.fighterB.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline font-bold flex items-center gap-2"
                          >
                            <Image
                              src={fight.fighterB.country}
                              alt={fight.fighterB.name}
                              width={24}
                              height={24}
                              className="rounded-sm"
                            />
                            <span>{fight.fighterB.name}</span>
                          </a>
                          <span className="text-sm font-extrabold tracking-tight text-muted-foreground">
                            ({fight.fighterB.record})
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}
