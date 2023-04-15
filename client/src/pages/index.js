import { useLocalStorage } from '@/hooks/useLocalStorage';
import Navbar from '../components/Navbar';
import Cat from '@/components/Cat';
import { useState, useEffect } from 'react';
import { questions } from '../assets/questions'

export default function Home() {

  const [local, setLocal] = useLocalStorage("data");
  const [show, setShow] = useState(true);
  const [index, setIndex] = useState(0);

  const save = (answerId) => {
    setLocal([...local, JSON.stringify({ questionId: index, answer: answerId})])
  }

  const handle = (id) => {
    save(id);
    if (index >= questions.length - 1) {
      setShow(false);
      return;
    } else {
      setIndex(current => current + 1);
    }

  }

  return (
    <main className=" min-h-screen bg-brand-background">
      <Navbar />
      <div className="text-brand-primary w-full mb-16 text-center font-bold text-3xl">
        <Cat key={questions[index].id} text={questions[index].question} />
      </div>
      {show ? (
          <main className="flex flex-col items-center justify-center">
            <p className="italic text-xs mb-2 text-brand-primary">Choose one</p>
            <div className="w-1/2 text-2xl p-2 text-black bg-brand-secondary rounded-lg">
              {questions[index].answers.map((el) => (
                <button key={el.id} onClick={() => handle(el.id)} className="hover:text-black w-full hover:-translate-y-1 text-brand-primary duration-150 p-2 rounded-lg mb-4 font-bold cursor-pointer ">
                  {el.text}
                </button>
              ))}
            </div>
          </main>
      ) : (
        <>
        </>
      )}
    </main>
  )
}
