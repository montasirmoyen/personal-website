export default function TopBarBackground({ imageUrl, transparency = 10 }: { imageUrl?: string; transparency?: number }) {
    return (
        <div className="absolute inset-0 z-[-1] h-[450px] w-full pointer-events-none overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url("${imageUrl || "/sea-wave.jpg"}")`,
                    maskImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) ${transparency}%, rgba(0,0,0,0.2) ${transparency + 10}%, rgba(0,0,0,0) 100%)`,
                    WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) ${transparency}%, rgba(0,0,0,0.2) ${transparency + 10}%, rgba(0,0,0,0) 100%)`,
                }}
            />
        </div>
    );
}