'use client';

import { Typography, Container, Chip, Box, List, ListItem, ListItemText, Table, TableHead, TableRow, TableCell, TableBody, Stack } from "@mui/material";
import RootLayout from "../layout";
import MenuAppBar from "../components/layout/AppBar";
import BasicBreadcrumbs from "../components/layout/Footer";
import data from '../../data/data.json';
import { redirect, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Suspense } from 'react';

interface LinksProps {
    Instagram?: string;
    LINE?: string;
    X?: string;
    Website?: string;
};
interface MemberProps {
    totalMembers: string;
        gradeLevels: {
            [key: string]: string;
        };
        gender: {
            Male: string;
            Female: string;
        };
        foundingYear: string;
};
export default function Circle() {
    const searchParams = useSearchParams();
    const item = data.find(item => item.circleName == searchParams.get("circleName"));

    if (!item) {
        // circleNameが存在しない場合、トップページへリディレクトする
        return redirect("/")
    }

    function SocialLinks(links: LinksProps) {
        return (
        <ul>
            <li>Instagram: {links.Instagram}</li>
            <li>X: {links.X}</li>
            <li>LINE: {links.LINE}</li>
            <li>Website: {links.Website}</li>
        </ul>
        )
    }
    function MemberComposition(composition: MemberProps) {
        return (<>
            <Typography variant="body2">総勢{composition.totalMembers}名</Typography>
            <Stack spacing={2}>
                <Box>
                    <Typography variant="body1">ジェンダー構成</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>男性</TableCell>
                                <TableCell>女性</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{composition.gender.Male}</TableCell>
                                <TableCell>{composition.gender.Female}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
                <Box>
                    <Typography variant="body1">学年構成</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>1年</TableCell>
                                <TableCell>2年</TableCell>
                                <TableCell>3年</TableCell>
                                <TableCell>4年</TableCell>
                                <TableCell>5年</TableCell>
                                <TableCell>6年</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{composition.gradeLevels['1st']}</TableCell>
                                <TableCell>{composition.gradeLevels['2nd']}</TableCell>
                                <TableCell>{composition.gradeLevels['3rd']}</TableCell>
                                <TableCell>{composition.gradeLevels['4th']}</TableCell>
                                <TableCell>{composition.gradeLevels['5th']}</TableCell>
                                <TableCell>{composition.gradeLevels['6th']}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Stack>
        </>)
    }

    return (
        <RootLayout>
            <MenuAppBar title={item.circleName} />
            <Suspense fallback={<div>Loading...</div>}>
            <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
                <Typography variant="body2" mb={2} sx={{display: "flex",justifyContent: "flex-end"}}>最終更新: {item.lastUpdate}</Typography>
                <Box>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {item.tags.map((tag:string, index:number) => (
                        <SwiperSlide key={index}>
                            <Chip size="small" label={tag} sx={{bgcolor: 'primary.light'}}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </Box>
                <Typography variant="h6" mt={1}>基本情報</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="結成年" secondary={item.memberComposition.foundingYear}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="所属" secondary={item.affiliation}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="メンバー構成" secondary={MemberComposition(item.memberComposition)}/>
                    </ListItem>
                    
                </List>
                <Typography variant="h6" mt={1}>活動内容</Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="概要" secondary={item.activityDetails.summary}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="活動場所" secondary={item.activityDetails.location}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="活動頻度" secondary={item.activityDetails.frequency}/>
                    </ListItem>
                </List>
                <Typography variant="h6" mt={1}>新歓日程</Typography>
                <ListItem>
                    <ListItemText primary="" secondary={item.recruitmentInfo.welcomeSchedule}/>
                </ListItem>
                <Typography variant="h6" mt={1}>連絡先</Typography>
                <ListItem>
                    <ListItemText primary="" secondary={SocialLinks(item.externalLinks)}/>
                </ListItem>
            </Container>
            </Suspense>
            <BasicBreadcrumbs />
        </RootLayout>
    )
}