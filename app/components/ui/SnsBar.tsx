import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WebIcon from '@mui/icons-material/Web';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { IconButton } from '@mui/material';

interface LinksProps {
    Instagram?: string;
    LINE?: string;
    X?: string;
    Website?: string;
    Facebook?: string;
    YouTube?: string;
};

export default function SnsBar({links}: {links: LinksProps}) {
    return (
        <>
        <Grid container spacing={0} direction="row" width={"100%"} sx={{mt: 2, mb: 2}}>
            {links.Instagram && <Grid><IconButton href={links.Instagram} style={{color: '#e1306c'}} ><InstagramIcon/></IconButton></Grid>}
            {links.X && <Grid><IconButton href={links.X} ><XIcon/></IconButton></Grid>}
            {links.Facebook && <Grid><IconButton href={links.Facebook} style={{color: '#1877F2'}}><FacebookIcon/></IconButton></Grid>}
            {links.LINE && <Grid><IconButton href={links.LINE}><Image src="/LINE_Brand_icon.png" alt='LINElogo' width={24} height={24}/></IconButton></Grid>}
            {links.YouTube && <Grid><IconButton href={links.YouTube} style={{color:'#ff0000'}}><YouTubeIcon/></IconButton></Grid>}
            {links.Website && <Grid><IconButton href={links.Website} style={{color: '#231f20'}}><WebIcon/></IconButton></Grid>}
        </Grid>
        </>
    )
}