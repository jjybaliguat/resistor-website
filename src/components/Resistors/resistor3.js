import { Box, Button, Stack } from '@mui/material'
import React, { useState } from 'react'
import ColorDialog from '../Dialogs/colorDialog'

const Resistor3 = (props) => {
    const {ResetValues, height, width} = props
    const [open, setOpen] = useState({isOpen: false, index: 0})

    // useEffect(()=> {
    //     ResetValues()
    // }, [])

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
    <Box
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        className="container"
    >
        <Box
            sx={{
                position: "relative",
                bgcolor: "grey",
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
    </>
  )
}

export default Resistor3
