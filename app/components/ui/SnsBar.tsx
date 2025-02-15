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
        <Grid container spacing={0} direction="row" width={"100%"} sx={{mb: 2}}>
            {links.Instagram && <Grid><IconButton style={{color: '#e1306c'}} ><a href={links.Instagram} target="_blank" rel="noopener noreferrer"><InstagramIcon/></a></IconButton></Grid>}
            {links.X && <Grid><IconButton ><a href={links.X} target="_blank" rel="noopener noreferrer"><XIcon/></a></IconButton></Grid>}
            {links.Facebook && <Grid><IconButton style={{color: '#1877F2'}}><a href={links.Facebook} target="_blank" rel="noopener noreferrer"><FacebookIcon/></a></IconButton></Grid>}
            {links.LINE && <Grid><IconButton><a href={links.LINE} target="_blank" rel="noopener noreferrer"><Image src="/LINE_Brand_icon.png" alt='LINElogo' width={24} height={24}/></a></IconButton></Grid>}
            {links.YouTube && <Grid><IconButton style={{color:'#ff0000'}}><a href={links.YouTube} target="_blank" rel="noopener noreferrer"><YouTubeIcon/></a></IconButton></Grid>}
            {links.Website && <Grid><IconButton style={{color: '#231f20'}}><a href={links.Website} target="_blank" rel="noopener noreferrer"><WebIcon/></a></IconButton></Grid>}
        </Grid>
        </>
    )
}