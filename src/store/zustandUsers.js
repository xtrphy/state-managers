import { create } from "zustand";

const useUsersStore = create((set) => ({
    users: [],
    isLoading: false,
    errors: [],
    addUser: (username) => set(state => (
        {
            users: [
                ...state.users,
                { id: Date.now(), username }
            ]
        }
    )),
    fetchUsers: async () => {
        const result = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await result.json();
        set({ users: json })
    },
}));

export default useUsersStore;