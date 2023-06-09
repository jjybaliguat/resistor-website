import { Box, Drawer } from '@mui/material'
import React from 'react'
import { NavItem } from './nav-item'

const menuItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Identifier",
        href: "/identifier"
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

  return (
    <>
        <Drawer
            anchor="left"
            open={hideNav}
            onClose={()=>setHideNav(!hideNav)}
            PaperProps={{
                sx: {
                //   backgroundColor: 'background.dark',
                  color: '#FFFFFF',
                  width: 280
                }
              }}
          >
            <Box sx={{ flexGrow: 1 }}>
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
        </Drawer>
    </>
  )
}

export default SideMenu
