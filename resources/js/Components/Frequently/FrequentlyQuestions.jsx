import React from "react";
import Accordion, { AccordianItem } from "../../utils/Accordion";
import RevealY from "../../utils/RevealY";

export default function FrequentlyQuestions() {
  return (
    <div className="min-h-screen bg-bg-dark px-4 pt-8 text-white sm:px-8 md:pt-16 lg:pt-20 xl:px-14 2xl:px-16">
      <div className="text-4xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        <RevealY>
          <h1 className="">Frequently</h1>
          <h1 className="">Asked Questions</h1>
        </RevealY>
      </div>
      <div className="mt-4 md:mt-8">
        <Accordion>
          <AccordianItem
            value="1"
            trigger="What will dispatcher services do for my business? "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            maiores provident non nobis sed ratione laboriosam, impedit nam quam
            fugit er
          </AccordianItem>
          <AccordianItem
            value="2"
            trigger="What are the benefits of using a dispatcher?"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            maiores provident non nobis sed ratione laboriosam, impedit nam quam
            fugit error, dolores praesentium. Fugit illum modi, tempore non
            molestiae nesciunt. Officiis dicta modi voluptatem blanditiis
            dolore. Neque
          </AccordianItem>
          <AccordianItem
            value="3"
            trigger="Important Notice Regarding Scamming and Our Commitment to Professionalism"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            maiores provident non nobis sed ratione laboriosam, impedit nam quam
            fugit error,
          </AccordianItem>
          <AccordianItem value="4" trigger="Disclaimers ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            maiores provident non nobis sed ratione laboriosam, impedit nam quam
            fugit error,
          </AccordianItem>
          <AccordianItem value="8" trigger="How much does it cost">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            maiores provident non nobis sed ratione laboriosam, impedit nam quam
            fugit error, dolores praesentium. Fugit illum modi, tempore non
            molestia
          </AccordianItem>
          <AccordianItem
            value="9"
            trigger="Does De helps with Invoicing and How Do I get paid?"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            maiores provident non nobis sed ratione laboriosam, impedit nam quam
            fugit error, dolores praesentium. Fugit illum modi, tempore non
            molestiae nesciunt. Officiis dicta modi voluptatem blanditiis
            dolore.
          </AccordianItem>
        </Accordion>
      </div>
    </div>
  );
}
