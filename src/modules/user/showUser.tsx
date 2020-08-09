import React from 'react';
import { useGetUsersQuery } from '../../schema/schema';
const ShowUser: React.FC<{}> = () => {

    const usersQuery = useGetUsersQuery()
    const users = usersQuery.data?.users;
    if(!users){
        return null;
    }
    return <>
        {
            users.map((user) => {
                return <>
                    <p>{user.firstName}</p>
                
                </>
            })
        }
    </>
}

export default ShowUser;