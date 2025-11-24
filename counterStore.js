import { create } from "zustand";

const useCounterStore = create((set) => ({
  counterArray: [
    // { id: 1, value: 0 },
    // { id: 2, value: 0 },
  ],

  addCounter: () =>
    set((state) => ({
      counterArray: [
        ...state.counterArray,
        { id: state.counterArray.length + 1, value: 0 },
      ],
    })),

  valueIncreBy1: (id) =>
    set((state) => ({
      counterArray: state.counterArray.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      ),
    })),
  deleteCounter: (id) =>
    set((state) => ({
      counterArray: state.counterArray.filter((counter) => counter.id !== id),
    })),

  valueDecreBy1: (id) =>
    set((state) => ({
      counterArray: state.counterArray.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter
      ),
    })),
}));
export default useCounterStore;
