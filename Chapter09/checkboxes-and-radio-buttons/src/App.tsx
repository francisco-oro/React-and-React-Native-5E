import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

const Checkboxes = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("First");

  return (
    <div>
      <FormControlLabel
        label={`Checkbox ${checkbox ? "(checked)" : ""}`}
        control={
          <Checkbox
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)} 
          />
        }
      />
      <FormControl component={"fieldset"}>
        <FormLabel component={"legend"}>{radio}</FormLabel>
        <RadioGroup value={radio} onChange={(e) => setRadio(e.target.value)}>
          <FormControlLabel value="First" control={<Radio />} label="First" />
          <FormControlLabel value="Second" control={<Radio />} label="Second" />
          <FormControlLabel value="Third" control={<Radio />} label="Third" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default Checkboxes