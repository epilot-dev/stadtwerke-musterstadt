import { JourneyPage } from '@/app/components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/journeyPreloader';

export default function Warmelosungen() {
  return <JourneyPage journeyId={JOURNEY_IDS.warmelosungen} />;
}
