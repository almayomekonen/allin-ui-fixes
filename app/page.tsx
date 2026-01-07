import AccordionItem from "@/lib/AccordionItem";

export default function page() {
  return (
    <div className="accordion">
      <AccordionItem name="" title="Sample Accordion" icon="chevron-left" open>
        <p>This is the content of the accordion item.</p>
      </AccordionItem>
    </div>
  );
}
