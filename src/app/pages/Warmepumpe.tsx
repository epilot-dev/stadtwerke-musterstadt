import { JourneyPage } from '../components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/journeyPreloader';

export default function Warmepumpe() {
  return <JourneyPage journeyId={JOURNEY_IDS.warmepumpe} />;
}
