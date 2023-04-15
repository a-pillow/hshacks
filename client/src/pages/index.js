import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Navbar from '../components/Navbar';
import Cat from '@/components/Cat';

import { questions } from '@/assets/questions';

export default function Home() {

  const [local, setLocal] = useLocalStorage("data");
  const [question, setQuestion] = useState(0);

  return (
    <main className=" min-h-screen bg-brand-background">
      <Navbar />
      <div className="text-brand-primary w-full mb-16 text-center font-bold text-3xl">
        <Cat text={questions[question].question}/>
      </div>
      <main className="flex justify-center">
        <div className="w-1/2 bg-brand-primary">
          dasd
        </div>
      </main>
    </main>
  )
}
