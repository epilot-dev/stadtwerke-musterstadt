// TypeScript declaration for the custom element

import { useEffect, useRef, useState } from 'react';
import styles from './HomeJourneyComponent.module.scss';
import { JourneySkeleton } from './JourneySkeleton';

type JourneyWebComponentProps = {
  journeyId: string;
};

const JourneyWebComponent = ({ journeyId }: JourneyWebComponentProps) => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'object') {
        // if (event.data.type === 'EPILOT/JOURNEY_LOADED' && journeyRef?.current) {
        if (event.data.type === 'EPILOT/USER_EVENT/PAGE_VIEW' && journeyRef?.current && !isLoaded) {
          setIsLoaded(true);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isLoaded]);

  return (
    <div className={styles.container}>
      {/* Skeleton loading state */}
      <JourneySkeleton isLoaded={isLoaded} />

      {/* Actual journey component */}
      <div className={`${styles.journeyWrapper} ${isLoaded ? styles.visible : ''}`}>
        <epilot-journey
          journey-id={journeyId}
          mode="inline"
          top-bar="false"
          lang="de"
          is-embedded="true"
          ref={journeyRef}
        />
      </div>
    </div>
  );
};

export default JourneyWebComponent;
