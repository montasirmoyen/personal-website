import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
    <main>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl font-bold">Montasir Moyen</h1>
        <hr className="mt-4" />
        <p className="text-lg mt-5">Hey.</p>
        <p className="text-lg mt-5">I am Montasir Moyen, a full-stack software developer studying Computer Science at Suffolk University in Boston, Massachusetts.</p>
        <p className="text-lg mt-5">I have worked on various projects that range from websites, video games and iOS applications. 
          Some of my most recent projects were based off my interests as I continued learning more about the respective technologies they required.</p>
        <p className="text-lg mt-5">If you would like to reach out to me, my email is always available.</p>
      </div>
    </main>
  );
}
