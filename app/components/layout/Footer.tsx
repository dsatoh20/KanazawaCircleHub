'use client';

import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

export default function BasicBreadcrumbs() {
  return (
    <Box sx={{bgcolor: "primary.dark", p:3}}>
      <Breadcrumbs aria-label="breadcrumb" sx={{color: "primary.light"}}>
        <Link 
            underline="hover" 
            color='primary.light'
            href="https://docs.google.com/forms/u/1/d/1XgikhuDE0JQoBhm0a7QN3_60IQzY9ZHGJ0H_3LxaLqQ/">
          お問い合わせ
        </Link>
        <Link
          underline="hover"
          color='primary.light'
          href="/manager"
        >
          運営者向け
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
