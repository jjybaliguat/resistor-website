import { Box } from '@mui/material'
import React, { useState } from 'react'

const ToggleTheme = () => {
  const [dark, setDark] = useState(false)

  const ToggleDark = () => setDark(!dark)

  return (
    <Box
      onClick={ToggleDark}
      sx={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "60px",
        height: "30px",
        bgcolor: dark ? "#000" : "gray.light",
        borderRadius: "15px",
        outline: "1px solid #b3b1b1",
        boxShadow: "5px 6px 10px 2px #b3b1b1",
        cursor: "pointer",
        "&::before": {
          position: "absolute",
          content: "''",
          backgroundColor: "primary.contrastText",
          width: "25px",
          height: "25px",
          height: "25px",
          borderRadius: "50%",
          top: "2px",
          left: dark ? "" : "2px",
          right: dark ? "2px" : "",
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
