import Accordion, { AccordianItem } from "../../utils/Accordion";
import RevealY from "../../utils/RevealY";

export default function FrequentlyQuestions() {
  return (
    <div className="min-h-screen bg-bg-dark px-4 py-8 text-white sm:px-8 md:py-16 lg:py-24 xl:px-14 2xl:px-16">
      <div className="text-4xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        <RevealY>
          <h1 className="">Frequently</h1>
          <h1 className="">Asked Questions</h1>
        </RevealY>
      </div>
      <div className="mt-4 md:mt-8">
        <Accordion>
          <AccordianItem value="1" trigger="How To Get Started?">
            After signing up and submitting your information, we'll match you
            with a suitable load based on your truck type, preferred area, and
            rate preferences.
          </AccordianItem>
          <AccordianItem
            value="2"
            trigger="Why Should I Use a Dispatching Company?"
          >
            A Dispatching company helps streamline your trucking company by
            finding profitable loads, optimizing routes to save time and fuel,
            and ensuring on-time deliveries. They handle communication with
            drivers, coordinate schedules, and manage compliance with
            regulations. we also assist with customer relations, invoicing, and
            quickly resolving any issues or delays, ultimately improving
            efficiency and profitability while allowing you to focus on growing
            your business.
          </AccordianItem>
          <AccordianItem value="3" trigger="How Much Does It Cost?">
            We charge just 5% on the loads we book, regardless of truck type.
          </AccordianItem>
          <AccordianItem value="4" trigger="How Do I Get Paid? ">
            You can receive payment through your factoring company by submitting
            the necessary paperwork, or directly from the brokers via standard
            payment terms or quick pay. We will handle the payment processing
            from the brokers at no extra charge.
          </AccordianItem>
        </Accordion>
      </div>
    </div>
  );
}
