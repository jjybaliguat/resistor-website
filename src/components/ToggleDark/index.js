import { Box } from '@mui/material'
import React from 'react'

const ToggleTheme = (props) => {
  const {mode, setMode} = props

  const ToggleDark = () => setMode(!mode)

  return (
    <Box
      onClick={ToggleDark}
      sx={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        width: {md: "60px", xs: "40px"},
        height: {md:"30px", xs: "20px"},
        bgcolor: mode ? "#000" : "grey",
        borderRadius: "15px",
        outline: "1px solid #b3b1b1",
        boxShadow: "1px 3px 10px 3px #b3b1b1",
        cursor: "pointer",
        "&::before": {
          position: "absolute",
          content: "''",
          backgroundColor: "#fff",
          width: {md: "25px", xs: "15px"},
          height: {md: "25px", xs: "15px"},
          borderRadius: "50%",
          top: "2px",
          left: mode ? "" : "2px",
          right: mode ? "2px" : "",
        }
      }}
    >
      {/* <Box 
        sx={{
          position: "absolute",
          top: "2px",
          left: "2px",
          height: "25px",
          width: "25px",
          borderRadius: "50%",
          bgcolor: "primary.contrastText",
          outline: "1px solid #b3b1b1",
        }}
      /> */}
    </Box>
  )
}

export default ToggleTheme
