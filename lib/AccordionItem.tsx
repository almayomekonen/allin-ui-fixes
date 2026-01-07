import Icon, { IconNames } from "@/lib/Icon";

interface AccordionItemProps {
  name: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClass?: string;
  icon?: IconNames;
  open?: boolean;
}

export default function AccordionItem({
  title,
  className,
  children,
  bodyClass,
  icon,
  open,
}: AccordionItemProps) {
  return (
    <details
      name="x"
      className={`group/acrdn border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${
        className || ""
      }`}
      open={open}
    >
      <summary className="cursor-pointer p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-between select-none">
        <div className="flex items-center gap-3">
          {icon && (
            <Icon
              type="reg"
              className="group-open/acrdn:bg-blue-600 dark:group-open/acrdn:bg-blue-400"
              name={icon}
            />
          )}
          <p className="text-black group-open/acrdn:text-blue-600 dark:group-open/acrdn:text-blue-400 font-medium">
            {title}
          </p>
        </div>
        <Icon
          name="chevron-left"
          className="duration-200 group-open/acrdn:rotate-90 group-open/acrdn:bg-blue-600 dark:group-open/acrdn:bg-blue-400"
        />
      </summary>
      <div
        className={`p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 ${
          bodyClass || ""
        }`}
      >
        {children}
      </div>
    </details>
  );
}
