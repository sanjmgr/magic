import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let url = 'https://reqres.in/api/users?page=1';
    try {
      let res = await axios.get(url);
      let { data } = res.data;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
