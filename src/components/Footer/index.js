import { Box, Button, Stack } from '@mui/material'
import React from 'react'

const Footer = (props) => {
    const {setResistorType} = props
  return (
    <Box
    sx={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        height: "fit-content",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        display: {md: "flex", xs: "none"}
    }}
    >
        <Stack direction="row" gap={5} alignitems= "center">
            <Button
                variant="contained"
                onClick={()=>setResistorType("3 Band Resistor")}
            >
                3 Band Resitor
            </Button>
            <Button
                variant="contained"
                onClick={()=>setResistorType("4 Band Resistor")}
            >
                4 Band Resitor
            </Button>
            <Button
                variant="contained"
                onClick={()=>setResistorType("5 Band Resistor")}
            >
                5 Band Resitor
            </Button>
            <Button
                variant="contained"
                onClick={()=>setResistorType("6 Band Resistor")}
            >
                6 Band Resitor
            </Button>
        </Stack>
    </Box>
  )
}

export default Footer
