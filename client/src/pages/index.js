import { useLocalStorage } from '@/hooks/useLocalStorage';
import Navbar from '../components/Navbar';
import Cat from '@/components/Cat';
import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web'

import { questions } from '@/assets/questions';

export default function Home() {

  const [local, setLocal] = useLocalStorage("data");
  const [question, setQuestion] = useState(0);
  const [show, setShow] = useState(false);

  const [springs, api] = useSpring(() => ({
    from: { opacity: 100, y: 0 },
    config: {
      duration: 500
    }
  }))

  const handle = () => {
    setShow(false);
    setQuestion(question + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4000)
  }, [show])


  return (
    <main className=" min-h-screen bg-brand-background">
      <Navbar />
      <div className="text-brand-primary w-full mb-16 text-center font-bold text-3xl">
        <Cat text={questions[question].question}/>
      </div>
      {show ? (
        <>
          <main className="flex flex-col items-center justify-center">
            <p className="italic text-xs mb-2 text-brand-primary">Choose one</p>
            <div className="w-1/2 text-2xl p-2 text-black bg-brand-secondary rounded-lg">
              {questions[question].answers.map((e) => (
                <animated.p style={{...springs}} onClick={handle} className="hover:text-black hover:translate-x-1 text-brand-primary duration-150 p-2 rounded-lg mb-4 font-bold cursor-pointer ">
                  {e}
                </animated.p>
              ))}
            </div>
          </main>
        </>
      ) : (
        <>
        </>
      )}
    </main>
  )
}
