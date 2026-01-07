import Icon, { IconNames } from "@/lib/Icon";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClass?: string;
  icon?: IconNames;
  open?: boolean;
}

export default function AccordionItem({
  title,
  children,
  icon,
  open,
}: AccordionItemProps) {
  return (
    <details
      name="x"
      className="group/acrdn bg-white rounded-lg border border-gray-200 overflow-hidden"
      open={open}
    >
      <summary className="cursor-pointer p-4 hover:bg-gray-50 transition-colors flex items-center justify-between select-none list-none [&::-webkit-details-marker]:hidden">
        <div className="flex items-center gap-3">
          {icon && (
            <Icon
              type="reg"
              className="group-open/acrdn:bg-blue-500"
              name={icon}
            />
          )}
          <p className="text-gray-900 group-open/acrdn:text-blue-600 font-medium">
            {title}
          </p>
        </div>
        <Icon
          name="chevron-left"
          className="transition-transform duration-200 group-open/acrdn:rotate-90 group-open/acrdn:bg-blue-500"
        />
      </summary>
      <div className="grid transition-all duration-300 ease-in-out group-open/acrdn:grid-rows-[1fr] grid-rows-[0fr]">
        <div className="overflow-hidden">
          <div className="p-4 pt-0 text-gray-600">{children}</div>
        </div>
      </div>
    </details>
  );
}
