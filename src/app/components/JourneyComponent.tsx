// TypeScript declaration for the custom element

import { useEffect, useRef, useState } from 'react';
import styles from './JourneyComponent.module.scss';
import { JourneySkeleton } from './JourneySkeleton';
import { cn } from './ui/utils';

type JourneyWebComponentProps = {
  journeyId: string;
  mode?: 'inline' | 'full-screen';
  className?: string;
};

const JourneyWebComponent = ({
  journeyId,
  mode = 'inline',
  className,
}: JourneyWebComponentProps) => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'object') {
        if (event.data.type === 'EPILOT/USER_EVENT/PAGE_VIEW' && journeyRef?.current && !isLoaded) {
          setTimeout(() => setIsLoaded(true), 500);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [isLoaded]);

  return (
    <div className={cn(styles.container, className)}>
      {/* Skeleton loading state */}
      <JourneySkeleton isLoaded={isLoaded} />

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
