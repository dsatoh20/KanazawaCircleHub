import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

interface ImgMediaCardProps {
    item: Circle;
};

export default function ImgMediaCard({item}: ImgMediaCardProps) {
  return (
    <Link href={`/circle?circleName=${item.circleName}`}>
        <Card sx={{ maxWidth: 345}}>
        <CardMedia
            component="img"
            alt={item.circleName}
            image={item.profileImage}
            sx={{height: 70}}
        />
        <CardContent>
            <Typography gutterBottom variant="body1" component="div" noWrap>
            {item.circleName}
            </Typography>
            <Typography 
                variant="body2" 
                sx={{ 
                    color: 'text.secondary',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis' 
                }} 
                >
            {item.activityDetails.summary}
            </Typography>
        </CardContent>
        <CardActions>
            <Swiper
                spaceBetween={1}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {item.tags.map((tag:string, index:number) => (
                    <SwiperSlide key={index}>
                        <Chip size="small" label={tag} sx={{bgcolor: 'primary.light', width:'100%'}}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </CardActions>
        </Card>
    </Link>

  );
}
