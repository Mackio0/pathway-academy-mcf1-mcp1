import { create } from 'zustand'

const useFormStore = create((set) => ({
  isLogin: true,
  setIsLogin: (value) => set({ isLogin: value }),
  user: null,
  setUser: (userData) => set({ user: userData }),
}))

export default useFormStore
