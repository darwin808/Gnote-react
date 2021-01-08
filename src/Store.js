import create from "zustand";

export const [useStore] = create((set) => ({
  currentID: 0,

  setcurrentID: (currentID) => set((x) => ({ ...x, currentID })),
  showname: false,
  setShowname: (showname) => set((x) => ({ ...x, showname })),
  globaltitle: "",
  setglobaltitle: (globaltitle) => set((x) => ({ ...x, globaltitle })),
  globalmsg: "",
  setglobalmsg: (globalmsg) => set((x) => ({ ...x, globalmsg })),

  collection: [],
  setCollection: (collection) => set((x) => ({ ...x, collection })),
}));
