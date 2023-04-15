import { useLocalStorage } from "@/hooks/useLocalStorage";
import { questions } from "@/assets/questions";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Statistics() {
    const [value, setValue] = useLocalStorage("data");

    return (
        <main className=" min-h-screen bg-brand-background">
            <Navbar />
                    <div className="text-lg m-16 text-brand-primary">
                        <div className="w-full text-2xl justify-between flex mb-4">
                            <h1>
                                Question
                            </h1>
                            <h1 className="font-bold">
                                Your answer
                            </h1>
                        </div>
                        {questions.map((q) => (
                                <div className="flex bg-brand-secondary py-4 px-2 rounded-lg mb-2 justify-between w-full text-xl">
                                    <p>
                                        {q.question}
                                    </p>
                                </div>
                        ))}
                    </div>
         </main>
    )
}