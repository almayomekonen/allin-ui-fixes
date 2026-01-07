import React from "react";
import { twMerge } from "tailwind-merge";

export default function Icon({
  name,
  type = "lit",
  className = "",
}: IconProps) {
  const src = `https://res.cloudinary.com/dfletli2x/image/upload/icons/${type}/${name}.svg`;

  className = twMerge("bg-gray-800 size-[18.5px] dark:bg-white", className);

  return (
    <div
      className={className}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskType: "alpha",
      }}
    />
  );
}

type IconProps = {
  name: IconNames;
  type?: "lit" | "reg" | "sol";
  className?: React.ComponentProps<"div">["className"];
} & React.ComponentProps<"div">;

export type IconNames = "chevron-left";
