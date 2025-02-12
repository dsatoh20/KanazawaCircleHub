import { Typography, Container } from "@mui/material";
import RootLayout from "../layout";
import MenuAppBar from "../components/layout/AppBar";
import BasicBreadcrumbs from "../components/layout/Footer";

export default function About() {
    return (
        <RootLayout>
            <MenuAppBar title="金沢サークルハブとは?" />
            <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}><Typography>About</Typography></Container>
            <BasicBreadcrumbs />
        </RootLayout>
    )
}