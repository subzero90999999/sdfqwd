import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useNameStore = create(
  persist(
    (set) => ({
      names: [],  
      
       addName: (newName) => 
        set((state) => ({ 
          names: [...state.names, newName] 
        })),
        
       removeName: (index) =>
        set((state) => ({
          names: state.names.filter((_, i) => i !== index)
        })),
    }),
    {
      name: 'names-storage', 
    }
  )
);