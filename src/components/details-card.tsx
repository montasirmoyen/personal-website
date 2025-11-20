import React from "react";

export type DetailsCardProps = {
    logoSrc: string;
    alt?: string;
    title: string;
    subtitle?: string;
    location?: string;
    dateRange?: string;
    bullets?: string[];
    website?: string;
    websiteText?: string;
    buttonText?: string;
};

export default function DetailsCard({
    logoSrc,
    alt = "logo",
    title,
    subtitle,
    location,
    dateRange,
    bullets = [],
    website,
    websiteText = "Visit Website",
    buttonText,
}: DetailsCardProps) {

    if (buttonText) {
        websiteText = buttonText;
    }

    return (
        <div className="bg-gradient-to-br from-black/50 via-black/40 to-black/30 w-full flex flex-col md:flex-row items-start gap-4 md:gap-6 px-4 md:px-6 py-4 md:py-6 mt-4 rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-28 md:h-28 rounded-lg overflow-hidden flex items-center justify-center p-1"> {/* bg-gradient-to-b from-black to-white/10 */}
                    <img src={logoSrc} alt={alt} className="w-full h-full object-contain rounded-lg shadow-lg" />
                </div>
            </div>

            <div className="flex-1 text-white">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                    <div>
                        <h2 className="text-xl md:text-3xl font-semibold">{title}</h2>
                        {subtitle && <p className="text-xs md:text-sm text-gray-300 mt-1">{subtitle}</p>}
                    </div>
                    <div className="mt-2 md:mt-0 text-xs md:text-sm text-gray-400">
                        {location && <div>{location}</div>}
                        {dateRange && <div className="mt-1">{dateRange}</div>}
                    </div>
                </div>

                {bullets.length > 0 && (
                    <div className="mt-3 md:mt-4 text-gray-200">
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                            {bullets.map((b, i) => (
                                <li key={i} className="flex items-start gap-2 md:gap-3">
                                    <span className="self-center flex-shrink-0">•</span>
                                    <span className="self-center">{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {website && (
                    <div className="mt-4 md:mt-5 flex items-center gap-4">
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-xs md:text-sm bg-black/25 hover:bg-black/50 text-white px-3 py-1.5 rounded-md transition"
                        >
                            {websiteText}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
