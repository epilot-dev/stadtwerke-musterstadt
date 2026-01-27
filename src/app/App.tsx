import { RouterProvider } from 'react-router-dom';
import { PasskeyGate } from './components/PasskeyGate';

import { router } from './routes';

export default function App() {
  return (
    <PasskeyGate>
      <RouterProvider router={router} />
    </PasskeyGate>
  );
}
