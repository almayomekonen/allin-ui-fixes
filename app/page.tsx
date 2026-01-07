import AccordionItem from "@/lib/AccordionItem";

export default function page() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto space-y-4">
        <AccordionItem title="Sample Accordion">
          <p>This is the content of the accordion item.</p>
        </AccordionItem>
      </div>
    </div>
  );
}
