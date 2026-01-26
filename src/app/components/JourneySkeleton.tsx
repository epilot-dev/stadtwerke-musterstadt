import { Skeleton } from './ui/skeleton';
import styles from './JourneySkeleton.module.scss';

export const JourneySkeleton = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <div className={`${styles.skeletonWrapper} ${isLoaded ? styles.hidden : ''}`}>
      <div className={styles.skeleton}>
        {/* Content */}
        <div className="space-y-8">
          {/* Toggle buttons */}
          <div className="grid grid-cols-2 gap-2 bg-gray-100 p-2 rounded-full mb-6">
            <Skeleton className="h-8 rounded-full" />
            <Skeleton className="h-8 rounded-full bg-transparent" />
          </div>

          {/* First input field */}
          <div className="space-y-3">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>

          {/* Second input field */}
          <div className="space-y-3">
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>

          {/* Button */}
          <Skeleton className="h-12 w-3/4 mx-auto rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
};
