import React from "react";

export type DetailsCardProps = {
    logoSrc: string;
    alt?: string;
    title: string;
    subtitle?: string;
    location?: string;
    dateRange?: string;
    bullets?: string[];
    buttons?: Record<string, string>;
    languages?: string[];
};

interface LanguageInfo {
    bg: string;
    border: string;
    image: string;
}

const languageColors: Record<string, LanguageInfo> = {
    'React': { bg: 'bg-blue-500/25', border: 'border-blue-500/50', image: 'react.png' },
    'TypeScript': { bg: 'bg-blue-500/25', border: 'border-blue-500/50', image: 'typescript.png' },
    'Firebase': { bg: 'bg-yellow-500/25', border: 'border-yellow-500/50', image: 'firebase.png' },
    'Lua': { bg: 'bg-blue-500/25', border: 'border-blue-500/50', image: 'lua.png' },
    'JavaScript': { bg: 'bg-yellow-400/25', border: 'border-yellow-400/50', image: 'javascript.png' },
    'RBLX Studio': { bg: 'bg-black-500/25', border: 'border-white/50', image: 'rblxstudio.png' },
    'Node.js': { bg: 'bg-green-600/25', border: 'border-green-600/50', image: 'nodejs.png' },
    'MongoDB': { bg: 'bg-green-600/25', border: 'border-green-600/50', image: 'mongodb.png' },
    'JSON': { bg: 'bg-gray-500/25', border: 'border-gray-500/50', image: 'json.png' },
    'Stripe': { bg: 'bg-purple-500/25', border: 'border-purple-500/50', image: 'stripe.png' },
};

export default function DetailsCard({
    logoSrc,
    alt = "logo",
    title,
    subtitle,
    location,
    dateRange,
    bullets = [],
    buttons,
    languages
}: DetailsCardProps) {

    return (
        <div className="bg-gradient-to-br from-black/50 via-black/40 to-black/30 w-full flex flex-col md:flex-row items-start gap-4 md:gap-6 px-4 md:px-6 py-4 md:py-6 mt-4 rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-28 md:h-28 rounded-lg overflow-hidden flex items-center justify-center p-1"> {/* bg-gradient-to-b from-black to-white/10 */}
                    <img src={logoSrc} alt={alt} className="w-full h-full object-contain rounded-xl" />
                </div>
            </div>

            <div className="flex-1 text-white">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="flex-1">
                        <h2 className="text-xl md:text-3xl font-semibold">{title}</h2>
                        {subtitle && <p className="text-xs md:text-sm text-gray-300 mt-1">{subtitle}</p>}
                        {languages && languages.length > 0 && (
                            <div className="mt-2 flex items-center gap-2 flex-wrap">
                                {languages.map((lang) => {
                                    const info = languageColors[lang]
                                    if (!info) return null;
                                    return (
                                        <div key={lang} className="flex items-center gap-1">
                                            <img src={`/${info.image}`} alt={`${lang} logo`} className="w-4 h-4" />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="mt-2 md:mt-0 text-xs md:text-sm text-gray-400 md:text-right">
                        {location && <div>{location}</div>}
                        {dateRange && <div className="mt-1">{dateRange}</div>}
                    </div>
                </div>

                {bullets.length > 0 && (
                    <div className="mt-4 md:mt-5 text-gray-200">
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

                {buttons && Object.keys(buttons).length > 0 && (
                    <div className="mt-4 md:mt-5 flex items-center gap-4 flex-wrap">
                        {Object.entries(buttons).map(([label, url]) => (
                            <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/10 hover:border-white/25 rounded-xl inline-block text-xs md:text-sm bg-black/25 text-white px-3 py-1.5 transition"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
