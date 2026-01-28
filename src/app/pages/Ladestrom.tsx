import { JourneyPage } from '@/app/components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/journeyPreloader';

export default function Ladestrom() {
  return <JourneyPage journeyId={JOURNEY_IDS.ladestrom} />;
}
