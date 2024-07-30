import Navbar from '@/components/Navbar';
import { useSharedData } from '@/hooks/context';
export default function Statistics() {

  const { sharedData } = useSharedData()
  return (
    <main className='min--screen bg-brand-background h-full'>
        <Navbar />
        {(sharedData == null) && (
        <div className="w-full h-full flex justify-center items-center text-brand-primary text-center font-bold">No data currently</div>
        )}
        {sharedData && (
        <div className='w-full justify-center items-center flex flex-col h-3/4 text-5xl text-brand-primary'>
          {sharedData.split(',').map((el, index) => (
            <div key={index} className="mb-[30px]">{el}</div>
          ))}
        </div>
      )}
    </main>
  );
}
