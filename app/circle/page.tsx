'use client';

import { Typography, Container, Chip, Box, List, ListItem, ListItemText, Table, TableHead, TableRow, TableCell, TableBody, Stack, Accordion, AccordionSummary, AccordionDetails, Fab } from "@mui/material";
import data from '../../data/data.json';
import { redirect, useSearchParams } from 'next/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Suspense } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SnsBar from "../components/ui/SnsBar";
import LaunchIcon from '@mui/icons-material/Launch';


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
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        slidesPerView={"auto"}
                        >
                        {item.tags.map((tag:string, index:number) => (
                            <SwiperSlide key={index} style={{width: 'auto'}}>
                                <Chip size="small" label={tag} sx={{bgcolor: 'primary.light'}}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </Box>
                    <Typography component='h6' mt={2}>外部リンク一覧</Typography>
                    <SnsBar links={item.externalLinks}/>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                        ><Typography component="span">基本情報</Typography></AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography component="span">活動内容</Typography></AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography component='span'>内部の声</Typography></AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <ListItemText primary="◎魅力" secondary={item.activityDetails.feelingPositive} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="△ここはちょっと..." secondary={item.activityDetails.feelingNegative} />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />}><Typography component='span'>新歓スケジュール</Typography></AccordionSummary>
                        <AccordionDetails>
                            <List>
                                <ListItem>
                                    <ListItemText primary="" secondary={item.recruitmentInfo.welcomeSchedule}/>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Container>
                <Fab variant="extended" color="secondary" style={{position: "fixed", bottom: '101px', right: 5, margin: 5}}><a href={item.externalLinks.weighted} target="_blank" rel="noopener noreferrer"><LaunchIcon sx={{mr:1}}/>{item.circleName}公式サイトへ</a></Fab>
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