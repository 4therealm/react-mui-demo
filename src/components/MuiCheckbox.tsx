import React,{ useState } from 'react'
import { Checkbox, FormControlLabel, Box } from '@mui/material'
export const MuiCheckbox = () => {
const [checked, setChecked] = useState(false)
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked(event.target.checked)
}


  return (
    <Box>
      <Box>
        <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}/>} label='Default' defaultChecked />
        <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}  />} label='Checked'  />
        <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange}  indeterminate />} label='Indeterminate' />
        <FormControlLabel control={<Checkbox  disabled />} label='Disabled' />
        <FormControlLabel control={<Checkbox  disabled indeterminate />} label='Disabled indeterminate' />
        </Box>
        {/* <Box>
        <FormControlLabel control={<Checkbox defaultChecked color='primary' />} label='Primary' />
        <FormControlLabel control={<Checkbox defaultChecked color='primary' indeterminate />} label='Primary indeterminate' />
        <FormControlLabel control={<Checkbox defaultChecked color='primary' disabled />} label='Primary disabled' />
        <FormControlLabel control={<Checkbox defaultChecked color='primary' disabled indeterminate />} label='Primary disabled indeterminate' />
        </Box>
        <Box>
        <FormControlLabel control={<Checkbox defaultChecked color='secondary' />} label='Secondary' />
        <FormControlLabel control={<Checkbox defaultChecked color='secondary' indeterminate />} label='Secondary indeterminate' />
        <FormControlLabel control={<Checkbox defaultChecked color='secondary' disabled />} label='Secondary disabled' />
        <FormControlLabel control={<Checkbox defaultChecked color='secondary' disabled indeterminate />} label='Secondary disabled indeterminate' />
        </Box>
        <Box>
        <FormControlLabel control={<Checkbox defaultChecked size='small' />} label='Small' />
        <FormControlLabel control={<Checkbox defaultChecked size='small' indeterminate />} label='Small indeterminate' />
        <FormControlLabel control={<Checkbox defaultChecked size='small' disabled />} label='Small disabled' />
        <FormControlLabel control={<Checkbox defaultChecked size='small' disabled indeterminate />} label='Small disabled indeterminate' />
        </Box> */}
      </Box>

  )
}
