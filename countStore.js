import { create } from "zustand";

const useCountStore = create((set) => ({
  count: 0,

  increBy1: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decreBy1: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  addValueByInput: (val) =>
    set((state) => ({
      count: state.count + val,
    })),
}));
export default useCountStore;
