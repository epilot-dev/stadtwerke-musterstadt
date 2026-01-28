// TypeScript declaration for the custom element

import { useEffect, useRef, useState } from 'react';
import styles from './JourneyComponent.module.scss';
import { JourneySkeleton } from './JourneySkeleton';
import { cn } from './ui/utils';

type JourneyWebComponentProps = {
  journeyId: string;
  mode?: 'inline' | 'full-screen';
  className?: string;
  isPage?: boolean;
};

const journeyEvents = {
  inline: 'EPILOT/USER_EVENT/PAGE_VIEW',
  'full-screen': 'EPILOT/JOURNEY_LOADED',
};

const JourneyWebComponent = ({
  journeyId,
  mode = 'inline',
  className,
  isPage,
}: JourneyWebComponentProps) => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'object') {
        // Only works for inline journeys. If not inline, use
        if (event.data.type === journeyEvents[mode] && journeyRef?.current && !isLoaded) {
          setTimeout(() => setIsLoaded(true), 500);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isLoaded, mode]);

  return (
    <div className={cn(styles.container, className)}>
      {/* Skeleton loading state */}
      <JourneySkeleton isLoaded={isLoaded} isPage={isPage} />

      {/* Actual journey component */}
      <div className={`${styles.journeyWrapper} ${isLoaded ? styles.visible : ''}`}>
        <epilot-journey
          journey-id={journeyId}
          mode={mode}
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
