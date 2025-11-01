import React from "react";

type BackgroundProps = {
  backgroundImage: string;
  children: React.ReactNode;
};

export default function Background({ backgroundImage, children }: BackgroundProps) {
  return (
    <main
      className="bg-black bg-cover bg-center text-white flex items-center justify-center flex-1"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="bg-black/60 backdrop-blur-lg max-w-5xl w-full flex flex-col px-5 py-5 rounded-xl">
        {children}
      </div>
    </main>
  );
}
