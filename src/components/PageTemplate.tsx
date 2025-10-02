import React from "react";

type PageTemplateProps = {
  backgroundImage: string;
  children: React.ReactNode;
};

export default function PageTemplate({ backgroundImage, children }: PageTemplateProps) {
  return (
    <main
      className="min-h-screen bg-black bg-cover bg-center text-white flex items-center justify-center"
      style={{
      backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-black/75 backdrop-blur-sm max-w-4xl w-full h-screen flex flex-col px-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Montasir Moyen</h1>
        <div className="flex space-x-4">
        <a href="mailto:rmm05890@su.suffolk.edu" className="inline-block">
          <img src="/email.png" alt="Email" className="w-8 h-8" />
        </a>
        <a href="https://github.com/montasirmoyen" target="#" className="inline-block">
          <img src="/github.png" alt="GitHub" className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com/in/montasirmoyen" target="#" className="inline-block">
          <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        </div>
      </div>
      <hr
        className="mt-5"
        style={{ borderColor: "white", borderWidth: "1px", borderStyle: "solid" }}
      />
      {children}
      </div>
    </main>
  );
}
