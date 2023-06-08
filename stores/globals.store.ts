import { create } from 'zustand'

type GlobalsStore = {
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
}

export const useGlobalsStore = create<GlobalsStore>((set) => ({
  isLoaded: false,
  setIsLoaded: (isLoaded: boolean) => set({ isLoaded }),
}))
