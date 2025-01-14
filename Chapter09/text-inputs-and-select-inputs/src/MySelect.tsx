import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useState } from 'react'

const MySelect = () => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <FormControl>
      <InputLabel id="select-label">My Select</InputLabel>
      <Select
      labelId='select-label'
      id='select'
      label='My select'
      value={value}
      onChange={(event) => setValue(event.target.value as string)}
      inputProps={{id: "my-select"}}
      >
        <MenuItem value="first">First</MenuItem>        
        <MenuItem value="second">Second</MenuItem>        
        <MenuItem value="third">Third</MenuItem>        
      </Select>
    </FormControl>
  )
}

export default MySelect