'use client';

import { createContext, useContext, useState } from 'react';
import QuickConsult from '@/components/quick-consult/QuickConsult';

const QuickConsultContext = createContext();

export function QuickConsultProvider({ children }) {
  const [showQuickConsult, setShowQuickConsult] = useState(false);

  return (
    <QuickConsultContext.Provider value={{ showQuickConsult, setShowQuickConsult }}>
      {children}
      {showQuickConsult && (
        <QuickConsult onClose={() => setShowQuickConsult(false)} />
      )}
    </QuickConsultContext.Provider>
  );
}

export function useQuickConsult() {
  return useContext(QuickConsultContext);
}