"use client"

import React, { useState } from "react";

export default function Home() {
  const TITLE = "IndrehusDev </>";

  return (
    <main className="bg-gradient-to-br from-gray-900 via-gradient-mid to-gradient-start min-h-screen flex justify-center backdrop-filter backdrop-blur-3xl">
      <h1 className="font-mono text-6xl mt-80 font-bold">{TITLE}</h1>
    </main>
  );
}
