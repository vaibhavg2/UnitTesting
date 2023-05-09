import React, { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState<string[]>([]);
  const [error, setError] = useState<string | null>();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data.map((user: { name: string }) => user.name)))
      .catch(() => setError("Error fetching users"));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {user.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
