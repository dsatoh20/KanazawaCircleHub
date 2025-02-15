import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import LaunchIcon from '@mui/icons-material/Launch';


export default function Manager() {
  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
        <List
          sx={{ width: '100%' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" sx={{bgcolor: 'primary.light'}}>
              <LaunchIcon sx={{mr:1}}/>外部リンク
            </ListSubheader>
          }
        >
          <ListItemButton component='a' href='https://circlehubinfo.netlify.app/' target='_blank' rel='noopener noreferrer'>
            <ListItemIcon>
              <WebAssetIcon />
            </ListItemIcon>
            <ListItemText primary="サークル運営者向けサイト" />
          </ListItemButton>
          <ListItemButton component='a' href='https://docs.google.com/forms/d/e/1FAIpQLSfKS6W8k96MnR8cCdYF1ZX0PmcJdhw7ahlIIZgOo2NCGeIPWw/viewform?usp=dialog' target='_blank' rel='noopener noreferrer'>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="掲載内容修正依頼フォーム" />
          </ListItemButton>
        </List>
      </Container>      
    </>
  );
}
