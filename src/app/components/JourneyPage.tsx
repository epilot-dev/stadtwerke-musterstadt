import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import JourneyWebComponent from './JourneyComponent';
import { cn } from './ui/utils';

interface JourneyPageProps {
  title: string;
  journeyId?: string;
  mode?: 'inline' | 'full-screen';
}

export function JourneyPage({ title, journeyId, mode }: JourneyPageProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#deff03] selection:text-black flex flex-col">
      <Navbar />
      <main className={cn('flex flex-col items-center justify-center', !journeyId && 'h-[700px]')}>
        <div className="mt-12 mb-4">
          <h1 className="text-5xl font-bold text-gray-900">{title}</h1>
        </div>

        {journeyId ? (
          <div className="w-full max-w-7xl bg-white rounded-3xl  mx-auto my-16">
            <JourneyWebComponent journeyId={journeyId} mode={mode} />
          </div>
        ) : (
          <div className="text-center">
            <p className="text-4xl text-gray-400">Embed journey here</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
