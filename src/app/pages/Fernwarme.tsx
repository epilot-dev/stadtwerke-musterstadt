import { JourneyPage } from '@/app/components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/journeyPreloader';

export default function Fernwarme() {
  return <JourneyPage journeyId={JOURNEY_IDS.fernwarme} />;
}
