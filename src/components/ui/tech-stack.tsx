import Image from 'next/image';
import Link from 'next/link';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { getTechIcon, getTechDoc } from '@/lib/projects';

interface TechStackProps {
    technologies: string[];
    hover?: boolean;
}

export default function TechStack({ technologies }: TechStackProps, { hover = true }: { hover?: boolean } = {}) {
    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech: string) => {
                const iconPath = getTechIcon(tech);
                const docUrl = getTechDoc(tech);

                if (docUrl && hover) {
                    return (
                        <Tooltip key={tech}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={docUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 text-gray-300 flex items-center gap-1.5 hover:bg-white hover:text-black transition-colors"
                                >
                                    {iconPath && (
                                        <Image
                                            src={iconPath}
                                            alt={tech}
                                            width={14}
                                            height={14}
                                            className="object-contain"
                                            unoptimized
                                        />
                                    )}
                                    {tech}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>View {tech} Documentation</TooltipContent>
                        </Tooltip>
                    );
                }

                return (
                    <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5"
                    >
                        {iconPath && (
                            <Image
                                src={iconPath}
                                alt={tech}
                                width={14}
                                height={14}
                                className="object-contain"
                                unoptimized
                            />
                        )}
                        {tech}
                    </span>
                );
            })}
        </div>
    );
}