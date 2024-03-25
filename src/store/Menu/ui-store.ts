import { create } from 'zustand';

interface State {
  isSideMenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;

}

//función booleana para abrir y cerrar menú
export const useUIStore = create<State>()((set) => ({
  isSideMenuOpen: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));