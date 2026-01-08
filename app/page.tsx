"use client";

import AccordionItem from "@/lib/AccordionItem";

export default function SelfEdit({}) {
  return (
    <div>
      <div className="accordion border rounded-lg my-6  bg-white">
        <AccordionItem title="מבצעים שחלפו">
          <p>טקסט</p>
        </AccordionItem>
      </div>
    </div>
  );
}
