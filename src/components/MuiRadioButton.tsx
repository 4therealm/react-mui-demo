import React from 'react'
import {Stack, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material'

export const MuiRadioButton = () => {
  return (
    <Stack spacing={4} direction='column'>
      <FormControl>
        <FormLabel>Default</FormLabel>
        <RadioGroup>
          <FormControlLabel value='one' control={<Radio />} label='One' />
          <FormControlLabel value='two' control={<Radio />} label='Two' />
          <FormControlLabel value='three' control={<Radio />} label='Three' />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Disabled</FormLabel>
        <RadioGroup>
          <FormControlLabel value='one' control={<Radio />} label='One' disabled />
          <FormControlLabel value='two' control={<Radio />} label='Two' disabled />
          <FormControlLabel value='three' control={<Radio />} label='Three' disabled />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Row</FormLabel>
        <RadioGroup row>
          <FormControlLabel value='one' control={<Radio />} label='One' />
          <FormControlLabel value='two' control={<Radio />} label='Two' />
          <FormControlLabel value='three' control={<Radio />} label='Three' />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Row Disabled</FormLabel>
        <RadioGroup row>
          <FormControlLabel value='one' control={<Radio />} label='One' disabled />
          <FormControlLabel value='two' control={<Radio />} label='Two' disabled />
          <FormControlLabel value='three' control={<Radio />} label='Three' disabled />
        </RadioGroup>
      </FormControl>
    </Stack>
    
   

  )
}
