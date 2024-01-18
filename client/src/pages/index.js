import { useLocalStorage } from "@/hooks/useLocalStorage";
import Navbar from "../components/Navbar";
import Cat from "@/components/Cat";
import CatMenu from "@/components/CatMenu";
import Result from "../components/Result"
import { useState, useEffect } from "react";
import { questions } from "../assets/questions";
import { useSharedData } from "@/hooks/context";

export default function Home() {
  const [local, setLocal] = useLocalStorage("data");
  const [show, setShow] = useState(true);
  const [result, setResult] = useState(false)
  const [resultObject, setObject] = useState(null)
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(questions[index].question);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedCat, setSelectedCat] = useState(['gray-pixil-frame-1.png', 'gray-pixil-frame-0.png', 'gray-pixil-frame-2.png']);
  const { setSharedData, sharedData } = useSharedData();
  const [scoreResponse, setResponse] = useState('')
  useEffect(() => {
    localStorage.clear()
  },[])
  const save = (answerId) => {
    setLocal([...local,
      JSON.stringify({ questionId: index, answer: answerId, category: questions[index].category}),
    ]);
    
  };
  
  const handle = (id) => {
    save(id);
    setShow(false);
    setSelectedAnswer(id);
    if (id < 2) {
      setText(questions[index].replies[0])
    } else {
      setText(questions[index].replies[1])
    }
  };

  const handleContinue = () => {
    setShow(true);
    setSelectedAnswer(null);
    if (index < questions.length - 1) {
      setText(questions[index + 1].question);
      setIndex((current) => current + 1);
    } 
    else if (index === questions.length - 1) {
      const data = calculateResults()
      if (data[0] * 2 > 90) {
        setObject('Your score is: ' + data[0] * 2)
        setResponse('Your mental health score reflects a positive and healthy state of mind.')
      } else if (data[0] * 2 > 70) {
        setObject('Your score is: ' + data[0] * 2)
        setResponse("Your mental health score reflects a strong and positive mindset, with some possibility of self-doubt. However, it's clear that you've been steps to improve yourself. Keep embracing those practices! If there's ever anything you'd like to share or discuss, or if you need additional resources for maintaining your well-being, feel free to reach out!")
      } else if (data[0] * 2 > 40) {
        setObject('Your score is: ' + data[0] * 2)
        setResponse("While it's positive that your score falls within the somewhat average score, an average score still should be treated with concern. Remember that mental health is a spectrum, and there's a wide range of support and resources available to help you navigate any challenges you might be facing. Consider reaching out to mental health professionals or support networks that can provide guidance and assistance.")
      } else { 
        setObject('Your score is: ' + data[0] * 2)
        setResponse("Your score denotes that you are experiencing challenges with your mental health. It's important to recognize that you're not alone, and there are resources and support available to help you navigate this difficult time. Remember, sharing your thoughts and feelings with others can be a significant first step toward seeking the assistance you need, and that seeking help is a sign of strength, not weakness.")
      }
      setSharedData(data[1])
      setResult(true)
    } else {
      setShow(false);
    }
  };

  const calculateResults = () => {
    let totalCategories = {'Social': 0, 'Goals': 0, 'Hobbies': 0, 'Spirituality': 0, 'Personal': 0}
    local.forEach(jsonString => {
      const obj = JSON.parse(jsonString);
      if (totalCategories.hasOwnProperty(obj.category)) {
          totalCategories[obj.category] += obj.answer + 1;
      }
    });
    totalCategories = [totalCategories['Social'] + totalCategories['Goals'] + totalCategories['Hobbies'] + totalCategories['Spirituality'] + totalCategories['Personal']
    ,['Social: ' + totalCategories['Social'], 'Goals: ' + totalCategories['Goals'], 'Hobbies: ' + totalCategories['Hobbies'], 'Spirituality: ' + totalCategories['Spirituality'], 'Personal: ' + totalCategories['Personal']]]
    return totalCategories
  }

  return (
    <main className="min--screen bg-brand-background">
      <Navbar />
      <CatMenu setSelectedCat={setSelectedCat}/>
      {result && (
        <div>
          <Result object={resultObject}/>
          <div className='text-brand-primary text-center font-bold text-3xl'>{scoreResponse}</div>
        </div>
      )}
      {!result && (
      <div className="text-brand-primary my-16 text-center font-bold text-3xl">
        <Cat key={[questions[index].id, text, selectedCat]} text={text} imageArray={selectedCat} 
          className="mt-6"/>
      </div>
      )}
      {!show && !result && ( 
        <main className="flex flex-col items-center justify-center">
          <button
            className="bg-brand-primary text-lg px-10 py-3 rounded-lg mb-4 font-bold cursor-pointer hover:bg-brand-background hover:border-brand-background hover:-translate-y-[2px] hover:text-brand-primary duration-150 text-brand-background"
            onClick={handleContinue}
            >Continue</button>
        </main>
      )}
      {show && !result && (
        <main className="flex flex-col items-center justify-center">
          <p className="italic text-xs mb-2 text-brand-primary">Choose one</p>
          <div className="flex justify-between mb-2 w-1/2">
            <span className="text-brand-primary text-1.5xs font-bold">
                  {questions[index].scale[0]}
            </span>
            <span className="text-brand-primary text-1.5xs font-bold">
                {questions[index].scale[1]}
            </span>   
          </div> 
          <div className="w-1/2 text-2xl p-2 text-black bg-brand-secondary rounded-lg flex justify-between items-center">
            <div className="w-full flex justify-between flex-wrap items-center">

              {questions[index].answers.map((el) => (
                <button
                  id="questions"
                  key={el.id}
                  onClick={() => {
                    handle(el.id);
                  }}
                  className={`hover:text-black flex-auto text-brand-primary duration-150 p-2 rounded-lg font-bold cursor-pointer ${
                    selectedAnswer !== null ? 'pointer-events-none opacity-50' : ''
                  }`}
                >
                  {el.text}
                </button>
              ))}
            </div>
          </div>
          
        </main>
      )}
    </main>
  );
}