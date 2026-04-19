import Image from "next/image";
import { type ElementType } from "react";

type TitleMarkSize = "card" | "detail" | "hero";

type SizeConfig = {
  imageWidth: number;
  imageHeight: number;
  imageClassName: string;
  iconClassName: string;
};

const SIZE_MAP: Record<TitleMarkSize, SizeConfig> = {
  card: {
    imageWidth: 40,
    imageHeight: 40,
    imageClassName: "h-10 w-10",
    iconClassName: "h-8 w-8",
  },
  detail: {
    imageWidth: 46,
    imageHeight: 46,
    imageClassName: "h-11 w-11",
    iconClassName: "h-9 w-9",
  },
  hero: {
    imageWidth: 44,
    imageHeight: 44,
    imageClassName: "h-11 w-11",
    iconClassName: "h-10 w-10",
  },
};

interface TitleMarkProps {
  logo?: string;
  title: string;
  icon?: ElementType;
  iconClassName?: string;
  size?: TitleMarkSize;
}

export default function TitleMark({
  logo,
  title,
  icon: Icon,
  iconClassName,
  size = "card",
}: TitleMarkProps) {
  const config = SIZE_MAP[size];

  if (logo) {
    return (
      <Image
        src={logo}
        alt={`${title} logo`}
        width={config.imageWidth}
        height={config.imageHeight}
        className={`${config.imageClassName} shrink-0 rounded-md object-contain`}
        unoptimized
      />
    );
  }

  if (Icon) {
    return (
      <Icon
        className={`${config.iconClassName} shrink-0 ${iconClassName ?? "text-white"}`}
        fill="currentColor"
      />
    );
  }

  return null;
}
