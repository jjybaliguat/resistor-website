import { Box, Button, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ColorDialog from '../Dialogs/colorDialog'

const Resistor1 = (props) => {
    const {...others} = props
    const [open, setOpen] = useState({isOpen: false, index: 0})
    const [resistorValue, setResistorValue] = useState({
        resistance: 0,
        tolerance: 0
    })

    // useEffect(()=> {
    //     resetValues()
    // }, [])

    const [colors, setColors] = useState([
        {
            color: "",
            value: "",
            multiply: 1,
            position: "15%"
        },
        {
            color: "",
            value: "",
            multiply: 1,
            position: "45%"
        },
        {
            color: "",
            value: "",
            multiply: 1,
            position: "75%"
        },
    ])

    useEffect(()=> {
        let resistance = 0
        let tolerance = 20
        console.log(colors);

        let count = 0

        colors.map((color)=>{
            if(color.value == ''){
                if(count > 0){
                    count--
                }
            }else{
                count++
            }
        })
        console.log(count)
        if(count > 2){
            resistance = Number(colors[0].value + colors[1].value) * Number(colors[2].multiply)
            if(resistance >= 1000){
                resistance = resistance/1000
                setResistorValue({
                    resistance: `${resistance}k`,
                    tolerance
                })
            }else{
                setResistorValue({
                    resistance,
                    tolerance
                })
            }
        }else{
            setResistorValue({
                resistance: 0,
                tolerance: 0
            })
        }
    }, [colors])

    const onClose = (color, index) => {
        let newColor = [...colors]
        if(newColor.length){
            newColor[index].color = color.color
            newColor[index].value = color.value
            newColor[index].multiply = color.multiply
            setColors(newColor)
        }
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

export default Resistor1
