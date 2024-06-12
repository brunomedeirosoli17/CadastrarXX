import create from 'zustand';
import { User } from '../types/User';

interface UserState {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));
