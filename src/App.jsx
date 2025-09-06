import React, { useEffect } from 'react';
import Todo from './Todo';
import Counter from './Counter';
import useUsersStore from './store/zustandUsers';

const App = () => {
    const users = useUsersStore(state => state.users);
    const addUser = useUsersStore(state => state.addUser);
    const fetchUsers = useUsersStore(state => state.fetchUsers);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const onBtnClick = () => {
        addUser('new user');
    };

    return (
        <div>
            {/* <Counter /> */}
            {/* <Todo /> */}
            {users.map(user => (
                <div key={user.id}>{user.id}. {user.username}</div>
            ))}
            <button onClick={onBtnClick}>create</button>
        </div>
    );
};

export default App;