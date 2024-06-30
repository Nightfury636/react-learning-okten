
import React, { useState, useEffect } from 'react';
import { fetchUserPosts } from './userService;';
import Users from './Users';
import './App.css';

const App: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [posts, setPosts] = useState<Array<{ id: number, title: string }>>([]);

  useEffect(() => {
    if (selectedUserId !== null) {
      fetchUserPosts(selectedUserId).then(setPosts);
    }
  }, [selectedUserId]);

  return (
      <div className="App">
        <h1>Users</h1>
        <Users onSelectUser={setSelectedUserId} />
        {selectedUserId !== null && (
            <div className="posts-container">
              <h2>Posts by User {selectedUserId}</h2>
              <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            </div>
        )}
      </div>
  );
};

export default App;
