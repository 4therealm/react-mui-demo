import React from 'react'
import { Select, MenuItem, FormControl, InputLabel, Stack } from '@mui/material'
export const MuiSelect = () => {
  return (
    <Stack spacing={4} direction='column'>
      <FormControl variant='standard'>  
      
        <InputLabel id='demo-simple-select-label'>Standard</InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select'>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='filled'>
        <InputLabel id='demo-simple-select-filled-label'>Filled</InputLabel>
        <Select labelId='demo-simple-select-filled-label' id='demo-simple-select-filled'>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='outlined'>
        <InputLabel id='demo-simple-select-outlined-label'>Outlined</InputLabel>

        <Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined'>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>



      )
}
