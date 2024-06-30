import React from 'react';

interface UserProps {
    user: {
        id: number;
        firstName: string;
        lastName: string;
    };
    onSelectUser: (userId: number) => void;
}

const User: React.FC<UserProps> = ({ user, onSelectUser }) => {
    return (
        <div className={"user-card"}>
            <p>{user.firstName} {user.lastName}</p>
            <button onClick={() => onSelectUser(user.id)}>View Posts</button>
        </div>
    );
};

export default User;
