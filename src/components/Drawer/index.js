import { Box, Drawer, Stack, Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { NavItem } from './nav-item'
import ToggleTheme from '../ToggleDark'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkTheme } from '@/redux/homepageAction'

const menuItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Color Chart",
        href: "/color-chart"
    },
    {
        title: "The Devs",
        href: "/devs"
    },
]

const SideMenu = (props) => {
    const {hideNav, setHideNav} = props
    const isDarkMode = useSelector(store=>store.homepage?.darkTheme)
    const dispatch = useDispatch()

  return (
    <>
        <Drawer
            anchor="left"
            open={hideNav}
            onClose={()=>setHideNav(!hideNav)}
            PaperProps={{
                sx: {
                  width: 200
                }
              }}
          >
            <Box sx={{ 
                flexGrow: 1,
                paddingY: 5,
                backgroundColor: 'primary',
                 }}>
            {
                menuItems.map((item, index)=> {
                    return (
                        <NavItem key={index}
                            // icon={<DashboardIcon fontSize="small" />}
                            href={item.href}
                            title={item.title}
                        />
                    )
                })
            }
            </Box>
            <Stack direction='row' alignItems="center" gap={1}
            sx={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
            }}>
                
                <Switch
                    checked={isDarkMode}
                    onChange={()=>dispatch(toggleDarkTheme())}
                />
                <span>{isDarkMode ? "DarkMode" : "LightMode"}</span>
            </Stack>
            {/* <ToggleTheme mode={mode} setMode={setMode}/> */}
        </Drawer>
    </>
  )
}

export default SideMenu
