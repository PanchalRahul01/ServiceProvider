import UserService from './Services/UserService.jsx';
import React, { useState, useEffect } from "react";

function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await UserService.getAllUsers();
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            setError("Failed to load users");
            setLoading(false);
        }
    };

    if (loading) return <h3>Loading users...</h3>;
    if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>User List</h2>

            {users.length === 0 ? (
                <p>No users available</p>
            ) : (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>

                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserList;
