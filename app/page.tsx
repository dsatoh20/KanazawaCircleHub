'use client';

import { Container, Typography, Box } from "@mui/material";
import SwiperComponent from "./components/ui/Swiper";
import data from '../data/data.json';
import SearchBox from "./components/ui/Search";

const tags = ['公認', '文化系', '体育会系', '兼サー可', '中途歓迎', 'インカレ', 'ボランティア'];

export default function Home() {
  const items:Circle[] = data;
  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
        <SearchBox items={items}/>
      </Container>
      <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
        {tags.map((tag:string, index: number) => (
          <Box maxWidth="sm" key={index} sx={{marginTop: 2}}>
            <Typography variant="h6" gutterBottom>#{tag}</Typography>
            <SwiperComponent items={items.filter(sortedItems => sortedItems.tags.includes(tag))} />
          </Box>
        ))}
      </Container>
    </>
    );
}
