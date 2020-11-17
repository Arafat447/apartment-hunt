import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import UserDashbaord from '../../components/UserDashboard/UserDashbaord';

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://creative-agency-as.herokuapp.com/isAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsAdmin(true);
                }
            })
    }, [loggedInUser.email])

    return (
        <div>
            {
                isAdmin ?
                <AdminDashboard />
                : 
                <UserDashbaord />
            }
        </div>
    );
};

export default Dashboard;