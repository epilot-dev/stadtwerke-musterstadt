// TypeScript declaration for the custom element

import { useEffect, useRef } from 'react';
import styles from './HomeJourneyComponent.module.scss';

type JourneyWebComponentProps = {
  journeyId: string;
};

const JourneyWebComponent = ({ journeyId }: JourneyWebComponentProps) => {
  const journeyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'object') {
        if (event.data.type === 'EPILOT/JOURNEY_LOADED' && journeyRef?.current) {
          journeyRef.current.classList.add('journey-loaded');
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className={styles.container}>
      <epilot-journey
        journey-id={journeyId}
        mode="inline"
        top-bar="false"
        lang="de"
        is-embedded="true"
        ref={journeyRef}
      />
    </div>
  );
};

export default JourneyWebComponent;
