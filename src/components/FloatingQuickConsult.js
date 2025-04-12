// components/FloatingQuickConsult.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import QuickConsult from './quick-consult/QuickConsult';

const FloatingQuickConsult = () => {
  const [showQuickConsult, setShowQuickConsult] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowQuickConsult(true)}
        className="fixed bottom-6 right-6 md:hidden z-40 
                   bg-purple-600 text-white p-4 rounded-full 
                   shadow-lg hover:bg-purple-700 transition-colors"
      >
        <Sparkles className="w-6 h-6" />
        
      </motion.button>

      <AnimatePresence>
        {showQuickConsult && (
          <QuickConsult onClose={() => setShowQuickConsult(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingQuickConsult;