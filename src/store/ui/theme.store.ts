import { applyTheme } from '@/utils';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<UIState>()(
  persist(
    (set, get) => ({
      darkMode: false,
      toggleDarkMode: () => {
        const next = !get().darkMode;
        applyTheme(next); // aplica clase
        set({ darkMode: next });
      },
    }),
    {
      name: 'theme-store',
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyTheme(state.darkMode); // aplica clase al iniciar
        }
      },
    }
  )
);
