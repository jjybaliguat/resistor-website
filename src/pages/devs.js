import Layout from '@/components/Layout';
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react'
import { useSelector } from 'react-redux';

const Page = () => {
    const mode = useSelector(store=>store.homepage?.darkTheme)
  return (
    <>
        <Head>
            <title>Resistor | Devs</title>
        </Head>
        <Container>
            <Box
            sx={{
                minHeight: "100vh",
                height: "fit-content",
                paddingBottom: "3rem",
                width: "100%",
                paddingTop: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Box
                    sx={{
                        outline: mode ? "2px solid #fff" : "2px solid #03a9f4",
                        padding: {md: "1rem 7rem", xs: "0.5rem 3rem"},
                        borderRadius: "10px",
                        marginBottom: "3rem"
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "800",
                            color: "primary.main"
                        }}
                    >TEAM STRUCTURE</Typography>
                </Box>
                <Box 
                    sx={{
                        marginBottom: "5rem"
                    }}
                >
                    <Stack alignItems="center" gap={1}>
                        <Avatar 
                        alt="Atip Pic" 
                        src="/static/images/atip.png"
                        sx={{ 
                            width: 100, 
                            height: 100,
                            outline: "3px solid #03a9f4",
                        }}
                        />
                        <Typography sx={{fontSize: "1.5rem"}}>RUBEN NAVALES ATIP</Typography>
                        <Typography sx={{fontSize: "1rem"}}>PROJECT MANAGER</Typography>
                    </Stack>
                </Box>
                <Box 
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Grid container>
                        <Grid item
                            md={6}
                            xs={12}
                            sx={{
                                marginBottom: "5rem"
                            }}
                        >
                            <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Stack direction="row" alignItems="center" gap={2}>
                                    <Avatar 
                                    alt="Atip Pic" 
                                    src="/static/images/rhea.png"
                                    sx={{ 
                                        width: 100, 
                                        height: 100,
                                        outline: "3px solid #03a9f4",
                                    }}
                                    />
                                    <Stack alignItems="center" gap={1}>
                                        <Typography sx={{fontSize: "1.5rem"}}>RHEA JANE GAMPOSILAO</Typography>
                                        <Typography sx={{fontSize: "1rem"}}>BUSINESS ANALYST</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item
                            md={6}
                            xs={12}
                            sx={{
                                marginBottom: "5rem"
                            }}
                        >
                            <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Stack direction="row" alignItems="center" gap={2}>
                                    <Stack gap={1} alignItems="center">
                                        <Typography sx={{fontSize: "1.5rem"}}>JELO DEL MUNDO</Typography>
                                        <Typography sx={{fontSize: "1rem"}}>SOFTWARE ARCHITECH/DESIGNER</Typography>
                                    </Stack>
                                    <Avatar 
                                    alt="Atip Pic" 
                                    src="/static/images/jelo.png"
                                    sx={{ 
                                        width: 100, 
                                        height: 100,
                                        outline: "3px solid #03a9f4",
                                    }}
                                    />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item
                            md={6}
                            xs={12}
                            sx={{
                                marginBottom: "5rem"
                            }}
                        >
                            <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Stack direction="row" alignItems="center" gap={2}>
                                    <Avatar 
                                    alt="Atip Pic" 
                                    src="/static/images/alvarado.jpg"
                                    sx={{ 
                                        width: 100, 
                                        height: 100,
                                        outline: "3px solid #03a9f4",
                                    }}
                                    />
                                    <Stack alignItems="center" gap={1}>
                                        <Typography sx={{fontSize: "1.5rem"}}>CHRISTIAN JAY ALVARADO</Typography>
                                        <Typography sx={{fontSize: "1rem"}}>DEVELOPER/CODER</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item
                            md={6}
                            xs={12}
                            sx={{
                                marginBottom: "5rem"
                            }}
                        >
                            <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <Stack direction="row" alignItems="center" gap={2}>
                                    <Stack gap={1} alignItems="center">
                                        <Typography sx={{fontSize: "1.5rem"}}>JERALBRIX MADRID</Typography>
                                        <Typography sx={{fontSize: "1rem"}}>TESTER</Typography>
                                    </Stack>
                                    <Avatar 
                                    alt="Atip Pic" 
                                    src="/static/images/madrid.png"
                                    sx={{ 
                                        width: 100, 
                                        height: 100,
                                        outline: "3px solid #03a9f4",
                                    }}
                                    />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </>
  )
}

Page.getLayout = (page) => (
    <Layout>
      {page}
    </Layout>
  );
  
  export default Page

