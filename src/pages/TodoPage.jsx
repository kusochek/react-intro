import * as React from 'react';
import Box from '@mui/material/Box';
import Lists from '../compoments/List';

const todoListA = [
  {
    id: 1,
    name: 'Name 1',
    isCompleted: false,
  },
  {
    id: 2,
    name: 'Name 2',
    isCompleted: false,
  },
  {
    id: 3,
    name: 'Name 3',
    isCompleted: true,
  },
];

function TodoPage() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Lists todoList={todoListA} value={1} />
    </Box>
  );
}

export default TodoPage;