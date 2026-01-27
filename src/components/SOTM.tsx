const songOfTheMonth = {
    title: "VIVID VICE",
    artist: "Who-ya Extended",
    year: 2021,
    albumCover: "https://upload.wikimedia.org/wikipedia/en/7/7f/Vivid_Vice_-_cover.png",
    spotifyLink:
        "https://open.spotify.com/track/4R6yPy83vDEZtwJsBavUfo?si=1e22c07324e64552",
};

const spotifyImage = "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png";
const vinylDiskBase = "https://www.urpressing.com/wp-content/uploads/2025/07/O-1_Black_P8722-e1754590337855-900x900.png";

export default function SOTM() {
    return (
        <a
            href={songOfTheMonth.spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
        >
            <div className="relative h-[320px] w-full max-w-[720px] overflow-hidden rounded-2xl bg-black shadow-xl">
                {/* Background */}
                <div
                    className="absolute inset-0 opacity-85 bg-cover bg-center blur-lg transition-all"
                    style={{ backgroundImage: `url(${songOfTheMonth.albumCover})` }}
                />
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                        <img src={spotifyImage} alt="Spotify" className="h-6 w-6" />
                        <div>
                            <p className="text-sm uppercase tracking-wide text-white/75">
                                My Song of the Month
                            </p>
                            <p className="text-lg font-medium text-white">
                                <span className="font-semibold">
                                    {songOfTheMonth.title}
                                </span>
                                {" "}
                                by
                                {" "}
                                <span className="font-semibold">
                                    {songOfTheMonth.artist}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Vinyl + Cover */}
                    <div className="relative mx-auto h-[150px] w-[150px]">
                        {/* Vinyl */}
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-10">
                            <div className="relative h-full w-full">
                                <img
                                    src={vinylDiskBase}
                                    alt="Vinyl"
                                    className="absolute h-full w-full rounded-full"
                                />

                                {/* Center label */}
                                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
                                    <img
                                        src={songOfTheMonth.albumCover}
                                        alt="Album"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Album cover */}
                        <div className="absolute left-1/2 top-1/3 z-10 h-[200px] w-[200px] -translate-x-1/2 overflow-hidden rounded-md shadow-2xl transition-transform duration-500 group-hover:translate-y-5">
                            <img
                                src={songOfTheMonth.albumCover}
                                alt="Album cover"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}