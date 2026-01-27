import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/app/pages/Home';
import Okostrom from '@/app/pages/Okostrom';
import Gas from '@/app/pages/Gas';
import Warmestrom from '@/app/pages/Warmestrom';
import Warmepumpe from '@/app/pages/Warmepumpe';
import Fernwarme from '@/app/pages/Fernwarme';
import Ladestrom from '@/app/pages/Ladestrom';
import Wallbox from '@/app/pages/Wallbox';
import Photovoltaik from '@/app/pages/Photovoltaik';
import Balkonkraftwerke from '@/app/pages/Balkonkraftwerke';
import { ServicePage } from '@/app/pages/ServicePage';
import Netz from '@/app/pages/Netz';
import StromEinspeiser from '@/app/pages/netz/StromEinspeiser';
import WasserAnschluss from '@/app/pages/netz/WasserAnschluss';
import FernwarmeCheck from '@/app/pages/netz/FernwarmeCheck';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/okostrom',
    Component: Okostrom,
  },
  {
    path: '/gas',
    Component: Gas,
  },
  {
    path: '/warmestrom',
    Component: Warmestrom,
  },
  {
    path: '/warmepumpe',
    Component: Warmepumpe,
  },
  {
    path: '/fernwarme',
    Component: Fernwarme,
  },
  {
    path: '/ladestrom',
    Component: Ladestrom,
  },
  {
    path: '/wallbox',
    Component: Wallbox,
  },
  {
    path: '/photovoltaik',
    Component: Photovoltaik,
  },
  {
    path: '/balkonkraftwerke',
    Component: Balkonkraftwerke,
  },
  {
    path: '/service',
    Component: ServicePage,
  },
  {
    path: '/netz',
    Component: Netz,
  },
  {
    path: '/netz/strom/einspeiser',
    Component: StromEinspeiser,
  },
  {
    path: '/netz/wasser/anschluss',
    Component: WasserAnschluss,
  },
  {
    path: '/netz/fernwarme/check',
    Component: FernwarmeCheck,
  },
]);
