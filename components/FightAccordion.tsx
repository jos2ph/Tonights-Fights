import * as React from "react";
import cardData from "@/app/data/mmaData";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

export function MMA() {
  return (
    <Card className="w-[400px] sm:w-full sm:h-auto">
      <CardHeader>
        <CardTitle>Upcoming Fights</CardTitle>
        <CardDescription>Click to expand and contract.</CardDescription>
      </CardHeader>
      <CardContent>
        {cardData.map(({ title, date, link, fights }, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-extrabold tracking-tight lg:text-xl">
                {title}
                <br />
                {date}
              </AccordionTrigger>
              <AccordionContent className="px-8">
                <div className="space-y-4">
                  {fights.map((fight, fightIndex) => (
                    <div key={fightIndex} className="py-2">
                      <h3 className="font-semibold text-lg">
                        {fight.weight} lb Division
                      </h3>
                      <div className="flex justify-between items-center gap-4">
                        {/* Fighter A */}
                        <div className="flex items-center gap-2">
                          <Image
                            src={fight.fighterA.picture}
                            alt={fight.fighterA.name}
                            width={81}
                            height={81}
                            className="rounded-lg"
                          />
                          <a
                            href={fight.fighterA.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                          >
                            <Image
                              src={fight.fighterA.country}
                              alt={fight.fighterA.name}
                              width={24}
                              height={24}
                              className="rounded-sm"
                            />
                            {fight.fighterA.name} <br />({fight.fighterA.record}
                            )
                          </a>
                        </div>

                        <span className="text-lg">vs</span>

                        {/* Fighter B */}
                        <div className="flex items-center gap-2">
                          <Image
                            src={fight.fighterB.picture}
                            alt={fight.fighterB.name}
                            width={81}
                            height={81}
                            className="rounded-lg"
                          />
                          <a
                            href={fight.fighterB.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                          >
                            <Image
                              src={fight.fighterB.country}
                              alt={fight.fighterB.name}
                              width={24}
                              height={24}
                              className="rounded-sm"
                            />
                            {fight.fighterB.name} <br />({fight.fighterB.record}
                            )
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
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}

export default MMA;
