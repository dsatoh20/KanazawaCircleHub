'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from 'next/link';
import Image from 'next/image';


export default function MenuAppBar() {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: 'primary.main'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <Box sx={{display: 'flex', textAlign: 'center'}}>
              <Image src='/logo.svg' alt='logo' width={30} height={30} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 1 }}>
                金沢サークルハブ
              </Typography>
            </Box>
            
          </Link>
            <div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link href="/">サークル一覧</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href="/about">金沢サークルハブとは？</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href="/calender">新歓カレンダー</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href="/manager">サークル運営者向け</Link></MenuItem>
                <MenuItem onClick={handleClose}><a href='https://docs.google.com/forms/d/1XgikhuDE0JQoBhm0a7QN3_60IQzY9ZHGJ0H_3LxaLqQ' target='_blank' rel='noopener noreferrer'>お問い合わせ</a></MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
