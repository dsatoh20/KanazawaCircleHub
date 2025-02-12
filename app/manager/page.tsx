import React from 'react';
import RootLayout from '../layout';
import MenuAppBar from '../components/layout/AppBar';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import BasicBreadcrumbs from '../components/layout/Footer';


export default function Manager() {
  return (
    <RootLayout>
      <MenuAppBar title='サークル運営者向け'/>
      <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
        <List
          sx={{ width: '100%' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" sx={{bgcolor: 'primary.light'}}>
              外部リンク
            </ListSubheader>
          }
        >
          <ListItemButton component='a' href='https://docs.google.com/forms/d/e/1FAIpQLSe5H195VpuxzRZDslOrlkwgyY9glLlZVlcOtgLA4mAt_H5Zhw/viewform?usp=dialog'>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="新規掲載依頼フォーム" />
          </ListItemButton>
          <ListItemButton component='a' href='https://docs.google.com/forms/d/e/1FAIpQLSfKS6W8k96MnR8cCdYF1ZX0PmcJdhw7ahlIIZgOo2NCGeIPWw/viewform?usp=dialog'>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="掲載内容修正依頼フォーム" />
          </ListItemButton>
        </List>
      </Container>      
      <BasicBreadcrumbs />
    </RootLayout>
  );
}
