import { JourneyPage } from '@/app/components/JourneyPage';
import { JOURNEY_IDS } from '@/lib/journeyPreloader';

export default function Kuendigung() {
  return <JourneyPage journeyId={JOURNEY_IDS.kuendigung} />;
}
