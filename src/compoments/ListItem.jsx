import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Checkbox from '@mui/material/Checkbox';

function ListItems({ todo }) {
  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.isCompleted}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': todo.id }}
          />
        </ListItemIcon>
        <ListItemText id={todo.id} primary={todo.name} />
      </ListItemButton>
    </ListItem>
  );
}

export default ListItems;