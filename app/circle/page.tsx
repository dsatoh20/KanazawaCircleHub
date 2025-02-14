'use client';

import { Typography, Container, Chip, Box, List, ListItem, ListItemText, Table, TableHead, TableRow, TableCell, TableBody, Stack } from "@mui/material";
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
        belonging: {
            [key: string]: string;
        };
        foundingYear: string;
};
function Circle() {
    const searchParams = useSearchParams();
    const item:Circle | undefined = data.find(item => item.circleName == searchParams.get("circleName"));
    if (!item) {
        return redirect('/');
    };


    function SocialLinks(links: LinksProps) {
        return (
        <ul>
            <li>Instagram: {links.Instagram}</li>
            <li>X: {links.X}</li>
            <li>LINE: {links.LINE}</li>
            <li>Website: {links.Website}</li>
        </ul>
        )
    };
    function MemberComposition(composition: MemberProps) {
        return (<>
            <ListItemText secondary={`総勢${composition.totalMembers}名`} />
            <Stack spacing={2} mt={1}>
                <Box maxWidth={400}>
                    <ListItemText secondary="ジェンダー構成" />
                    <Table sx={{width: 200}}>
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
                <Box sx={{maxWidth: "90%"}}>
                    <ListItemText secondary="学年構成" />
                    <Table sx={{width: '100%'}}>
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
                <Box sx={{maxWidth: "90%"}}>
                    <ListItemText secondary="所属学域構成"/>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>人間社会学域</TableCell>
                                <TableCell>理工学域</TableCell>
                                <TableCell>医薬保健学域</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{composition.belonging["人間社会学域"]}</TableCell>
                                <TableCell>{composition.belonging["理工学域"]}</TableCell>
                                <TableCell>{composition.belonging["医薬保健学域"]}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>
            </Stack>
        </>)
    };

    return (
        <>
                {item && <>
                <Typography variant="h5" m={2} sx={{display:"flex", justifyContent: "center"}}>{item.circleName}</Typography>
                <Container maxWidth="sm" sx={{ marginTop: 2, marginBottom: 2 }}>
                    <Typography variant="body2" mb={2} sx={{display: "flex",justifyContent: "flex-end"}}>最終更新: {item.lastUpdate}</Typography>
                    <Box>
                    <Swiper
                        spaceBetween={1}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        {item.tags.map((tag:string, index:number) => (
                            <SwiperSlide key={index}>
                                <Chip size="small" label={tag} sx={{bgcolor: 'primary.light', width:'100%'}}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </Box>
                    <Typography variant="h6" mt={2}>基本情報</Typography>
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
                        <ListItem>
                            <ListItemText primary="部飯" secondary={item.activityDetails.meal} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="活動実績" secondary={item.activityDetails.record} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="部費" secondary={item.activityDetails.membershipFee} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="初期費用" secondary={item.activityDetails.initialCost} />
                        </ListItem>
                    </List>
                    <Typography variant="h6" mt={1}>内部の声</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="◎魅力" secondary={item.activityDetails.feelingPositive} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="△ここはちょっと..." secondary={item.activityDetails.feelingNegative} />
                        </ListItem>
                    </List>
                    <Typography variant="h6" mt={1}>新歓日程</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="" secondary={item.recruitmentInfo.welcomeSchedule}/>
                        </ListItem>
                        <Typography variant="h6" mt={1}>連絡先</Typography>
                        <ListItem>
                            <ListItemText primary="" secondary={SocialLinks(item.externalLinks)}/>
                        </ListItem>
                    </List>
                    
                </Container>
                </>}
        </>
    );
};

export default function CirclePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Circle />
        </Suspense>
    )
}