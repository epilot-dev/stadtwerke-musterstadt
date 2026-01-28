import { Skeleton } from './ui/skeleton';
import styles from './JourneySkeleton.module.scss';
import { cn } from './ui/utils';

export const JourneySkeleton = ({ isLoaded, isPage }: { isLoaded: boolean; isPage?: boolean }) => {
  if (isPage) {
    return (
      <div className={cn(styles.skeletonWrapper, isLoaded && styles.hidden)}>
        <div className={styles.skeleton}>
          <div className="space-y-8 px-4">
            <div>
              <Skeleton className="h-5 w-1/3 rounded-xl mx-auto mb-3" />
              <Skeleton className="h-3 w-1/4 rounded-xl mx-auto" />
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
  }

  return (
    <div className={cn(styles.skeletonWrapper, isLoaded && styles.hidden)}>
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
