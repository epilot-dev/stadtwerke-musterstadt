import { JourneyPage } from '@/app/components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/journeyPreloader';

export default function Glasfaser() {
  return <JourneyPage journeyId={JOURNEY_IDS.glasfaser} />;
}
