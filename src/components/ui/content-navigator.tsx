"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface NavigatorItem {
  slug: string;
  title: string;
  date: string;
  image?: string;
  description?: string;
}

interface ContentNavigatorProps {
  previous: NavigatorItem | null;
  next: NavigatorItem | null;
  /** Base URL path, e.g. "/blog" or "/projects" */
  basePath: string;
  /** Singular label for the content type, e.g. "blog" or "project" */
  itemLabel: string;
  /** Tailwind color class for the "Next" label. Defaults to "text-primary" */
  nextLabelColor?: string;
}

export function ContentNavigator({
  previous,
  next,
  basePath,
  itemLabel,
  nextLabelColor = "text-primary",
}: ContentNavigatorProps) {
  if (!previous && !next) return null;

  return (
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
      {previous ? (
        <HoverCard openDelay={10} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Link
              href={`${basePath}/${previous.slug}`}
              className="group rounded-xl border border-white/15 bg-linear-to-br from-white/8 to-white/3 p-4 hover:border-white/35 hover:from-white/12 hover:to-white/6 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="mt-1 rounded-full border border-white/20 p-1.5 text-gray-200 group-hover:text-white group-hover:border-white/40 transition-colors">
                  <ArrowLeft size={16} />
                </span>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-300/90 mb-1">Previous</p>
                  <p className="text-base font-semibold text-white leading-tight">{previous.title}</p>
                  <p className="text-sm text-gray-400 mt-1">{previous.date}</p>
                </div>
              </div>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent side="left" sideOffset={30} className="flex w-64 flex-col gap-0.5">
            {previous.image && (
              <Image
                src={previous.image}
                alt={previous.title}
                width={256}
                height={144}
                className="rounded-md mb-2 w-full object-cover"
                unoptimized
              />
            )}
            <div className="font-semibold text-white">{previous.title}</div>
            <div className="text-sm text-gray-300">{previous.description}</div>
            <div className="text-xs text-gray-400 mt-2">{previous.date}</div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <div className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-gray-500">
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">End</p>
            <p className="text-base font-semibold text-white leading-tight">Latest</p>
            <p className="text-sm text-gray-400 mt-1">You are on the latest {itemLabel}</p>
          </div>
        </div>
      )}

      {next ? (
        <HoverCard openDelay={10} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Link
              href={`${basePath}/${next.slug}`}
              className="group rounded-xl border border-white/15 bg-linear-to-br from-white/8 to-white/3 p-4 hover:border-white/35 hover:from-white/12 hover:to-white/6 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={`text-xs uppercase tracking-[0.2em] ${nextLabelColor} mb-1`}>Next</p>
                  <p className="text-base font-semibold text-white leading-tight">{next.title}</p>
                  <p className="text-sm text-gray-400 mt-1">{next.date}</p>
                </div>
                <span className="mt-1 rounded-full border border-white/20 p-1.5 text-gray-200 group-hover:text-white group-hover:border-white/40 transition-colors">
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent side="right" sideOffset={30} className="flex w-64 flex-col gap-0.5">
            {next.image && (
              <Image
                src={next.image}
                alt={next.title}
                width={256}
                height={144}
                className="rounded-md mb-2 w-full object-cover"
                unoptimized
              />
            )}
            <div className="font-semibold text-white">{next.title}</div>
            <div className="text-sm text-gray-300">{next.description}</div>
            <div className="text-xs text-gray-400 mt-2">{next.date}</div>
          </HoverCardContent>
        </HoverCard>
      ) : (
        <div className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-gray-500">
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">End</p>
            <p className="text-base font-semibold text-white leading-tight">Oldest</p>
            <p className="text-sm text-gray-400 mt-1">You are on the oldest {itemLabel}</p>
          </div>
        </div>
      )}
    </div>
  );
}
