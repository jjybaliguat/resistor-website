import { Box, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import ColorDialog from '../Dialogs/colorDialog'

const Resistor = (props) => {
    const {height, width} = props


  return (
    <>
    <Box
        className="container"
    >
        <Box
            sx={{
                position: "relative",
                bgcolor: "grey",
                height: height,
                width: width
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    height: "500%",
                    width: "20%",
                    borderRadius: "20px",
                    bgcolor: "#815C00 ",
                    left: "50px",
                    transform: 'translateY(-39%)',
                    zIndex: "9"
                }}
                className="container"
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
                    bgcolor: "#815C00",
                    left: "0",
                    right: "0",
                    marginRight: "auto",
                    marginLeft: "auto",
                    transform: 'translateY(-33%)',
                    zIndex: "8",
                }}
                className="container"
            >
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    borderRadius: "20px",
                    height: "500%",
                    width: "20%",
                    bgcolor: "#815C00",
                    right: "50px",
                    transform: 'translateY(-39%)',
                    zIndex: "9"
                }}
                className="container"
            />
        </Box>
    </Box>
    </>
  )
}

export default Resistor
