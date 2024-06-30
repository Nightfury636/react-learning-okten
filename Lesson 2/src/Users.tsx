import React, { useState, useEffect } from 'react';
import { fetchUsers } from './userService;';
import User from './User';

interface UserProps {
    onSelectUser: (userId: number) => void;
}

const Users: React.FC<UserProps> = ({ onSelectUser }) => {
    const [users, setUsers] = useState<Array<{ id: number, firstName: string, lastName: string }>>([]);

    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    return (
        <div className={"user-container"}>
            {users.map(user => (
                <User key={user.id} user={user} onSelectUser={onSelectUser} />
            ))}
        </div>
    );
};

export default Users;
