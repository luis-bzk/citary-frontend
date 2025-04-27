import { create } from 'zustand';

interface UIState {
  sidebarIsCollapsed: boolean;
  sidebarToggleCollapse: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarIsCollapsed: false,
  sidebarToggleCollapse: () => set((state) => ({ sidebarIsCollapsed: !state.sidebarIsCollapsed })),
}));
