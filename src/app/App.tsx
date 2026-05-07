import { RouterProvider } from 'react-router';
import { router } from './routes';

// Mpraeso Community Website - Main Application
export default function App() {
  return <RouterProvider router={router} />;
}