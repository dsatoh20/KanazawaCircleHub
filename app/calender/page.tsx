import { Container } from "@mui/material";
import RootLayout from "../layout";
import MenuAppBar from "../components/layout/AppBar";
import BasicBreadcrumbs from "../components/layout/Footer";

export default function Calender() {
    return (
        <RootLayout>
            <MenuAppBar title="新歓カレンダー" />
            <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2, display: "flex", justifyContent: "center" }}><iframe src="https://calendar.google.com/calendar/embed?src=70ec9252bded01ff4dc5ce38e1c04347877bdbf442b365603d3806b1c5bcd82f%40group.calendar.google.com&ctz=Asia%2FTokyo" width="100%" height="600" ></iframe></Container>
            <BasicBreadcrumbs />
        </RootLayout>
    )
}