import { FormControlLabel } from "@mui/material"
import { useState } from "react"

const Checkboxes = () => {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <div>
      <FormControlLabel
        label={`Checkbox ${checkbox ? "(checked)" : ""}`}
        
      />
    </div>
  )
}

export default Checkboxes