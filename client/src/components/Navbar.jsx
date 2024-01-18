  import { Router, useRouter } from "next/router";
  export default function Navbar() {
    const router = useRouter();
    return (
      <nav className="w-full py-2 px-12 mb-6 flex justify-between items-center">
        <a
          href="/"
          className="text-3xl text-brand-primary font-bold border-2 border-brand-primary px-2 py-1 cursor-pointer hover:bg-brand-primary hover:text-brand-background hover:border-brand-primary hover:-translate-y-[2px] hover:drop-shadow-lg duration-150 rounded-lg"
        >
          pawsitive
        </a>
        <div className="text-brand-primary"> 
          <a
            href="/statistics"
            className="px-4 py-1 mx-2 hover:border-brand-primary border-b-2 border-brand-background duration-150 cursor-pointer "
          >
            My Statistics
          </a>
          <a
            href="/gacha"
            className="px-4 py-1 mx-2 hover:border-brand-primary border-b-2 border-brand-background duration-150 cursor-pointer "
          >
            Gacha
          </a>
        </div>
        <button
          onClick={() => router.push("/")}
          className="text-lg font-bold border-2 bg-brand-primary px-4 py-1 rounded-lg hover:bg-brand-background hover:border-brand-background hover:-translate-y-[2px] hover:drop-shadow-lg hover:text-brand-primary duration-150  text-brand-background"
        >
          Home
        </button>
      </nav>
    );
  }
