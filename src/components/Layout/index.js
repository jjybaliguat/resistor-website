import { Box, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import Footer from '@/components/Footer';
import ToggleTheme from '@/components/ToggleDark';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SideMenu from '@/components/Drawer';

const Layout = (props) => {
    const [hideNav, setHideNav] = useState(false)
    const { children } = props;

  return (
    <>
    <Box
        sx={{
          position: "relative",
        }}
      >
        <SideMenu
          hideNav={hideNav}
          setHideNav={setHideNav}
        />
        <Button
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            cursor: "pointer",
            color: "black"
          }}
          onClick={()=>setHideNav(!hideNav)}
        >
          <MenuIcon
          color="primary" 
          sx={{
            fontSize: "2rem",
          }}
           />
        </Button>
        <Paper sx={{height: "fit-content"}}>
            {children}
        </Paper>
    </Box>
    </>
  )
}

export default Layout
