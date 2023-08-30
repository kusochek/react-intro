import * as React from 'react';
import List from '@mui/material/List';
import ListItem from './ListItem';

function Lists(props) {

  return (
    <List component="nav" aria-label="main mailbox folders">
      {props.todoList.map((todo) => <ListItem todo={todo} />)}
    </List>
  );
}

export default Lists;