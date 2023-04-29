import { useLocalStorage } from "@/hooks/useLocalStorage";
import Navbar from "../components/Navbar";
import Summons from "../components/Summons";
import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function Gacha() {
  return (
    <main className=" min--screen bg-brand-background">
      <Navbar />
      <div className="text-brand-primary w-full mb-16 text-center font-bold text-3xl">
        <Summons />
      </div>
    </main>
  );
}

//I think this was John's thing. Was it?
