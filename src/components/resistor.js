import { Box, Button } from '@mui/material'
import React from 'react'

const Resistor = (props) => {

  return (
    <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <Box
            sx={{
                position: "relative",
                bgcolor: "gray.light",
                ...props,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    height: "500%",
                    width: "20%",
                    borderRadius: "20px",
                    bgcolor: "#815C00 ",
                    left: "60px",
                    transform: 'translateY(-39%)',
                    zIndex: "9"
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    height: "400%",
                    width: "50%",
                    borderRadius: "5px",
                    bgcolor: "#815C00 ",
                    left: "0",
                    right: "0",
                    marginRight: "auto",
                    marginLeft: "auto",
                    transform: 'translateY(-33%)',
                    zIndex: "8",
                }}
            >
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    borderRadius: "20px",
                    height: "500%",
                    width: "20%",
                    bgcolor: "#815C00",
                    right: "60px",
                    transform: 'translateY(-39%)',
                    zIndex: "9"
                }}
            />
        </Box>
    </Box>
  )
}

export default Resistor
