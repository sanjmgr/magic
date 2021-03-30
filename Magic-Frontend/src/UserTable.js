import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import { UserContext } from './context';

const UserTable = () => {
  const users = useContext(UserContext);
  return (
    <Table striped>
      <Table.Header>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.first_name}</Table.Cell>
            <Table.Cell>{user.last_name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default UserTable;
