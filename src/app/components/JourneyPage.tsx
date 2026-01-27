import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

interface JourneyPageProps {
  title: string;
}

export function JourneyPage({ title }: JourneyPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#deff03] selection:text-black flex flex-col">
      <Navbar />
      <main className="h-[1200px] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">{title}</h1>
        <div className="text-center">
          <p className="text-4xl text-gray-400">Embed journey here</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
