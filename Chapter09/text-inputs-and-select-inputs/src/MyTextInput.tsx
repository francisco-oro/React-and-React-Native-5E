import { TextField } from "@mui/material"
import { useState } from "react";

const MyTextInput = () => {
  const [value, setValue] = useState<string | undefined>("");
  
  return (
    <TextField
    label="Name"
    margin="normal"
    value={value}
    onChange={(e) => {setValue(e.target.value)}}
    /> 
  )
}

export default MyTextInput