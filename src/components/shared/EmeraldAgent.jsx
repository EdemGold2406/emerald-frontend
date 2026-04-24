import React, { useState } from 'react';

const EmeraldAgent = ({ isOpen, setIsOpen }) => {
  // Dormant code: We will link this to the LLM backend later
  return (
    <>
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white dark:bg-darkSurface border dark:border-darkBorder rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-fade-in">
          <div className="bg-emeraldGreen p-4 text-white flex justify-between items-center">
            <h3 className="font-bold text-sm uppercase">Emerald (Dormant)</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">✕</button>
          </div>
          <div className="flex-1 p-4 bg-gray-50 dark:bg-darkBase text-gray-400 text-sm">
            Agent is currently disconnected. Finish Admin CRUD modules to activate.
          </div>
        </div>
      )}
    </>
  );
};

export default EmeraldAgent;
