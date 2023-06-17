import Layout from '@/components/Layout';
import { Box, Container, Stack, Typography } from '@mui/material';
import Head from 'next/head'
import React from 'react'

const Page = () => {
  return (
    <>
        <Head>
            <title>Resistor | Color Chart</title>
        </Head>
        <Container>
            <Box
                sx={{
                    paddingY: "3rem"
                }}
            >
                <Box>
                    <Stack gap={5} alignItems="center">
                        <Typography sx={{fontSize: "1.5rem", textAlign: "center"}}>RESISTOR COLOR CHART</Typography>
                        <Box
                            sx={{
                                height: {md: "500px", xs: "350px"},
                                width: {md: "650px", xs: "325"},
                            }}
                        >
                            <img 
                                src="/static/images/resistorcolorchart.jpg"
                                style={{
                                    height: "100%",
                                    width: "100%"
                                }}
                            />
                        </Box>
                    </Stack>
                </Box>
                <Box 
                    sx={{
                        paddingTop: "2rem"
                    }}
                >
                    <Stack gap={3}>
                        <Typography>
                        <strong>For a 3-Band resistor</strong>, the value of the first two colors are combined literally. 
                        For example, an orange and brown bands, the significant value of orange is 3 and 
                        the brown is 1, then it will be 31. The third band is the multiplier of the combined 
                        value of the two bands. Pay attention to the value of the color band&apos;s multiplier. 
                        For example, the third band is red, the solution will be 31 x 100, the answer will 
                        be 3100 Ω. Lastly, even if it is a 3 band resistor, there&apos;s always a constant 
                        value of a tolerance which is equal to 20%. All in all it will be 3100 Ω 20%
                        </Typography>
                        <Typography>
                        <strong>For a 4-Band resistor</strong>, the value of the first two color bands are combined. For 
                        example, there are Green and Brown bands, the value will become 51. The third band 
                        value will be it&apos;s multiplier, for example the third band is yellow, the solution 
                        will be 51 x 10k, the answer is 510k Ω. The value of the fourth band will be it&apos;s 
                        tolerance, for example, the fourth band is gold which is equal to 5 J. 
                        The final output will be 510k Ω 5%
                        </Typography>
                        <Typography>
                        <strong>For a 5-Band resistor</strong>, the value of the first three color bands are combined. 
                        For example, there are Brown, Black,and Orange which will become 123 as its 
                        equivalent. The fourth band&apos;s value will be it&apos;s multiplier, for example we have 
                        black that is equal to 1. The Fifth band&apos;s value will be it&apos;s tolerance, for example,
                         there is a silver band which is equal to 10. The final answer will be 123 Ω 10%.
                        </Typography>
                        <Typography>
                        <strong>For a 6-Band resistor</strong>, the value of  first three bands are combined. If we have 
                        Orange, Red and Brown, it&apos;s equivalent will be 321. The fourth band&apos;s value will 
                        be the multiplier, if we have brown, then the value is equal to 10. The Fifth band&apos;s 
                        value will be the tolerance, having another brown band, it&apos;s equivalent value will 
                        be 1. The sixth band&apos;s value is the temperature - in kelvin degree coefficient of 
                        a resistor. Having a red band, we will have a temperature coefficient of 50 ppm/K. 
                        The final output will be 3.21k Ω 1% 50ppm/K.
                        </Typography>
                    </Stack>
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
