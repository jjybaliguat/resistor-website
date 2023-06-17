import { setResistorIndex } from '@/redux/homepageAction'
import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Footer = (props) => {
    const {ResistorMenuBtns} = props
    const dispatch = useDispatch()
    const resistorIndex = useSelector(store=>store.homepage?.resistorIndex)

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
    }}
    >
        <Stack direction="row" gap={{md: 5, xs: 1}} alignitems= "center">
            {
                ResistorMenuBtns.map((item, index)=> {
                    return (
                        <Button key={index}
                            color="primary"
                            sx={{
                                padding: {xs: "2px", md: "0.5rem"},
                                fontSize: {xs: "14px", md: "1rem"}
                            }}
                            variant={resistorIndex == index? "contained" : "outlined"}
                            onClick={()=>dispatch(setResistorIndex(index))}
                        >
                            {item.title}
                        </Button>
                    )
                })
            }
        </Stack>
    </Box>
  )
}

export default Footer
