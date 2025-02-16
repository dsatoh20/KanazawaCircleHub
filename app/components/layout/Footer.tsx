'use client';

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

export default function BasicBreadcrumbs() {
  return (
    <Box sx={{bgcolor: "primary.dark", p:3, justifyContent: 'center', position: 'sticky', top: '100vh'}}>
      <Breadcrumbs aria-label="breadcrumb" sx={{color: "primary.light", display: "flex", justifyContent: 'center'}}>
        <Link 
            underline="hover" 
            color='primary.light'
            >
          <a href="https://docs.google.com/forms/u/1/d/1XgikhuDE0JQoBhm0a7QN3_60IQzY9ZHGJ0H_3LxaLqQ/" target='_blank' rel='noopener noreferrer'>お問い合わせ</a>
        </Link>
        <Link
          underline="hover"
          color='primary.light'
          href="/calender"
        >
          カレンダー
        </Link>
        <Link 
            underline='hover'
            color='primary.light'
            href='/'
            >トップへ戻る</Link>
      </Breadcrumbs>
    </Box>
  );
}
