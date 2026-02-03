import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export function Root() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
