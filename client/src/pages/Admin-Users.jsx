import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const { authorizationToken } = useAuth();

    const getAllUserData = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log("users", data);
            if (Array.isArray(data)) { // Check if data is an array
                setUsers(data);
            } else {
                console.error("Data fetched is not an array:", data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUserData();
    }, []);

    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Users Data </h1>
                </div>
                <div className="container  admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUser, index) => (
                                <tr key={index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.phone}</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};