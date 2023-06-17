import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { colors } from '@/utils/colors';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

function ColorDialog(props) {
    const {open, setOpen, onClose} = props

  const handleClose = () => {
    setOpen({isOpen: false, index: open?.index})
    // onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value, open?.index);
    handleClose()
  };

  if(open.index > 1){
    return (
      <Dialog onClose={handleClose} open={open.isOpen}>
      <DialogTitle>Select Color</DialogTitle>
      <List sx={{ pt: 0 }}>
        {colors.map((color, index) => (
          <ListItem disableGutters key={index}>
            <ListItemButton onClick={() => handleListItemClick(color)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <Box sx={{bgcolor: color.color, height: "100%", width: "100%"}}/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={color.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
    )
  }

  return (
    <Dialog onClose={handleClose} open={open.isOpen}>
      <DialogTitle>Select Color</DialogTitle>
      <List sx={{ pt: 0 }}>
        {colors.filter((color)=>color.value !== '-1').map((color, index) => (
          <ListItem disableGutters key={index}>
            <ListItemButton onClick={() => handleListItemClick(color)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <Box sx={{bgcolor: color.color, height: "100%", width: "100%"}}/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={color.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

ColorDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.object.isRequired,
};

export default ColorDialog