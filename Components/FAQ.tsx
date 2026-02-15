import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { FAQs } from "@/constants";

const FAQ = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full order-2 lg:order-1 pb-10 lg:pb-0"
      defaultValue="item-1"
    >
      {FAQs.map((data) => (
        <AccordionItem key={data.value} value={data.value}>
          <AccordionTrigger className="question">
            {data.question}
          </AccordionTrigger>
          <AccordionContent className="answer text-balance">
            <p className="text-darkblue">{data.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
