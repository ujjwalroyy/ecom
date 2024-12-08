import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import DashboardIcon from '@mui/icons-material/Dashboard';

const menu=[
  {name: "Dashboard", Path: "/admin", icon:<DashboardIcon/>},
  {name: "Products", Path: "/admin/products", icon:<DashboardIcon/>},
  {name: "Customers", Path: "/admin/customers", icon:<DashboardIcon/>},
  {name: "Orders", Path: "/admin/orders", icon:<DashboardIcon/>},
  {name: "AddProduct", Path: "/admin/product/create", icon:<DashboardIcon/>},
  {name: "", Path: ""},
]

const Admin = () => {
  const theme=useTheme()
  const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"))
  const [sideBarVisible, setSideBarVisible]=useState(false)
  const navigate = useNavigate()

  const drawer=(
    <Box sx={{
      overflow:"auto",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between"
    }}>
      {isLargeScreen && <Toolbar/>}
      <List>
        {menu.map((item, index) =><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>)}
      </List>
    </Box>
  )
  return (
    <div>
      Admin
    </div>
  )
}

export default Admin
