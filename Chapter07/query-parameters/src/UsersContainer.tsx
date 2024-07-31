import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { fetchUsers, SortOrder } from './api';
import Users from './Users';

const UsersContainer = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [search] = useSearchParams();

  useEffect(() => { 
    const order = search.get("order") as SortOrder;

    fetchUsers(order).then((users) => {
      setUsers(users)
    });
  }, [search]);


  return (
    <Users users={users}/>
  )
}

export default UsersContainer