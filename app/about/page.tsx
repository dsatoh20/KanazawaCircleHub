import { Typography, Container, Box } from "@mui/material";
import RootLayout from "../layout";
import MenuAppBar from "../components/layout/AppBar";
import BasicBreadcrumbs from "../components/layout/Footer";
import Grid from '@mui/material/Grid2';
import Image from 'next/image'

export default function About() {
    return (
        <RootLayout>
            <MenuAppBar title="金沢サークルハブ" />
            <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
                <Grid container spacing={2}>
                    <Grid size={12}><Box><Image src="/demo.svg" alt="demo" width={500} height={500}/></Box></Grid>
                    <Grid size={12}><Box><Typography variant="h5" sx={{textAlign: "center"}}>金沢・北陸の学生と<br/>コミュニティをつなぐ<br/>&quot;HUB&quot;となる</Typography></Box></Grid>
                </Grid>
            </Container>
            <BasicBreadcrumbs />
        </RootLayout>
    )
}