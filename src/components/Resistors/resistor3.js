import { Box, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import ColorDialog from '../Dialogs/colorDialog'

const Resistor3 = (props) => {
    const {...others} = props
    const [open, setOpen] = useState({isOpen: false, index: 0})
    const [resistorValue, setResistorValue] = useState({
        resistance: 0,
        tolerance: 0
    })

    const [colors, setColors] = useState([
        {
            color: "",
            value: "",
            position: "10%"
        },
        {
            color: "",
            value: "",
            position: "25%"
        },
        {
            color: "",
            value: "",
            position: "40%"
        },
        {
            color: "",
            value: "",
            position: "55%"
        },
        {
            color: "",
            value: "",
            position: "75%"
        },
    ])

    const onClose = (color, index) => {
        console.log(color)
        let newColor = [...colors] 
        newColor[index].color = color?.color
        newColor[index].value = color?.value
        setColors(newColor)
        console.log(colors);
    }


    return (
        <>
        <ColorDialog
            open={open}
            setOpen={setOpen}
            onClose={onClose}
        />
        <Stack gap={5}>
            <Stack direction="row" justifyContent="center" gap={3}
                sx={{
                    marginBottom: "3rem",
                }}
            >
                <Box
                    sx={{
                    height: "fit-content",
                    // bgcolor: "primary.contrastText",
                    width: {md: "200px", xs: "150px"},
                    // width: "fit-content",
                    // position: "absolute",
                    // top: "2rem",
                    // left: "3rem",
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: {md: "1.2rem", xs: "1rem"},
                    }}
                    className="container resistance"
                >
                    {`${resistorValue?.resistance} ohm Resistance`}
                </Box>
                <Box
                    sx={{
                    height: "fit-content",
                    // bgcolor: "primary.contrastText",
                    // top: "2rem",
                    // width: "fit-content",
                    width: {md: "200px", xs: "150px"},
                    // position: "absolute",
                    // right: "3rem",
                    padding: "10px",
                    borderRadius: "5px",
                    fontSize: {md: "1.2rem", xs: "1rem"},
                    }}
                    className="container tolerance"
                >
                {`${resistorValue.tolerance}% Tolerance`}
                </Box>
            </Stack>
            <Box
                className="container"
            >
                <Box
                    sx={{
                        position: "relative",
                        bgcolor: "grey",
                        ...others
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
                        <Stack gap={{md: 2, xs: 1}} direction="row"
                            sx={{
                                position: "relative",
                                height: "100%",
                                width: "85%",
                                bgcolor: "#815C00",
                            }}
                        >
                            {
                            colors.map((color, index)=>{
                                return (
                                    <Box key={index}
                                        sx={{
                                            position: "absolute",
                                            left: color.position,
                                            width: {md: "30px", xs: "20px"},
                                            height: "100%",
                                            bgcolor: colors[index].color,
                                            cursor: "pointer",
                                            outline: "1px solid grey",
                                            borderRadius: "3px"
                                        }}
                                        onClick={()=>setOpen({isOpen: true, index: index})}
                                    />
                                )
                            }) 
                            }
                        </Stack>
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
        </Stack>
        </>
      )
}

export default Resistor3
