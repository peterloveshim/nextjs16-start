import { create } from "zustand";
import { TMenuItem } from "../types";

type MenuStore = {
  menus: TMenuItem[];
  total: number;
  updateCount: (idx: number, count: number) => void;
  incrementCount: (idx: number) => void;
  decrementCount: (idx: number) => void;
  calculateTotal: () => void;
  resetMenu: () => void;
};

const initialMenus: TMenuItem[] = [
  { idx: 1, name: "menu1", price: 6000, count: 0 },
  { idx: 2, name: "menu2", price: 6000, count: 0 },
  { idx: 3, name: "menu3", price: 6000, count: 0 },
  { idx: 4, name: "menu4", price: 1000, count: 0 },
  { idx: 5, name: "menu5", price: 4000, count: 0 },
];

export const useMenuStore = create<MenuStore>((set, get) => ({
  menus: initialMenus,
  total: initialMenus.reduce((sum, menu) => sum + menu.price * menu.count, 0),

  updateCount: (idx, count) => {
    set((state) => ({
      menus: state.menus.map((menu) =>
        menu.idx === idx ? { ...menu, count } : menu
      ),
    }));
    get().calculateTotal();
  },

  incrementCount: (idx) => {
    set((state) => ({
      menus: state.menus.map((menu) =>
        menu.idx === idx ? { ...menu, count: menu.count + 1 } : menu
      ),
    }));
    get().calculateTotal();
  },

  decrementCount: (idx) => {
    set((state) => ({
      menus: state.menus.map((menu) =>
        menu.idx === idx && menu.count > 0
          ? { ...menu, count: menu.count - 1 }
          : menu
      ),
    }));
    get().calculateTotal();
  },

  calculateTotal: () => {
    const total = get().menus.reduce(
      (sum, menu) => sum + menu.price * menu.count,
      0
    );
    set({ total });
  },

  resetMenu: () => {
    set({ menus: initialMenus });
    get().calculateTotal();
  },
}));
