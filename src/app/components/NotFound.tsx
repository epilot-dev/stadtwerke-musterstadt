import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Logo } from './Logo';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#deff03]/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center"
      >
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Logo variant="light" className="w-48 opacity-50" />
        </div>

        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mb-8"
        >
          <span className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-7xl font-black text-[#deff03]">404</span>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Seite nicht gefunden</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="h-12 !px-6 rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent hover:text-white cursor-pointer"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Zurück
          </Button>
          <Button
            onClick={() => navigate('/')}
            className="h-12 !px-6 bg-[#deff03] hover:bg-[#cbe600] text-black font-bold rounded-full cursor-pointer"
          >
            <Home className="mr-2 w-5 h-5" />
            Zur Startseite
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
