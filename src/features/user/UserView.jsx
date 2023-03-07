import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserView = () => {
    const user = useSelector((state) => state.user);
    const disptach = useDispatch();
    useEffect(() => {
        disptach(fetchUsers());
    }, []);

    return (
        <div>
            <h2>List of Users is- {user.users.length}</h2>
            {user.loading && <div>Loading...</div>}
            {user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {!user.loading && user.users.length ? (
                <ol>
                    {user.users.map(user => (
                        <li key={user.id} >{user.name}</li>
                    ))}
                </ol>
            ) : null}
        </div>
    );
};

export default UserView;