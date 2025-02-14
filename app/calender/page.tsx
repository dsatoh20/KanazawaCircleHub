import { Container, Typography } from "@mui/material";

export default function Calender() {
    return (
        <>
            <Typography variant="h6" m={2} sx={{display:"flex", justifyContent: "center"}}>新歓カレンダー</Typography>
            <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2, display: "flex", justifyContent: "center" }}>
                <iframe src="https://calendar.google.com/calendar/embed?src=70ec9252bded01ff4dc5ce38e1c04347877bdbf442b365603d3806b1c5bcd82f%40group.calendar.google.com&ctz=Asia%2FTokyo" width="100%" height="600" ></iframe>
            </Container>
        </>
    )
}