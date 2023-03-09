import React from 'react'
import { TextField, Stack } from '@mui/material'

export const MuiTextfield = () => {
  return (
    <Stack spacing={4} direction='column'>
    <Stack spacing={4}>
        <h4>default</h4>
      <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' />
        <TextField label='Filled' variant='filled' />
        <TextField label='Outlined' variant='outlined' />
      </Stack>
        <h4>disabled</h4>
      <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' disabled />
        <TextField label='Filled' variant='filled' disabled />
        <TextField label='Outlined' variant='outlined' disabled />
      </Stack>
        <h4>error</h4>
      <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' error />
        <TextField label='Filled' variant='filled' error />
        <TextField label='Outlined' variant='outlined' error />
      </Stack>
        <h4>helper text</h4>
      <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' helperText='Helper text' />
        <TextField label='Filled' variant='filled' helperText='Helper text' />
        <TextField label='Outlined' variant='outlined' helperText='Helper text' />
      </Stack>
        <h4>helper text and error</h4>
      <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' helperText='Helper text' error />
        <TextField label='Filled' variant='filled' helperText='Helper text' error />
        <TextField label='Outlined' variant='outlined' helperText='Helper text' error />
      </Stack>
    </Stack>

    <h3>form props</h3>
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' required />
        <TextField label='Filled' variant='filled' required />
        <TextField label='Outlined' variant='outlined' required />
        </Stack>
        <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' required error />
        <TextField label='Filled' variant='filled' required error />
        <TextField label='Outlined' variant='outlined' required error />
        </Stack>
        <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' required helperText='Helper text' />
        <TextField label='Filled' variant='filled' required helperText='Helper text' />
        <TextField label='Outlined' variant='outlined' required helperText='Helper text' />
        </Stack>
        <Stack spacing={2} direction='row'>
        <TextField label='Standard' variant='standard' required helperText='Helper text' error />
        <TextField label='Filled' variant='filled' required helperText='Helper text' error />
        <TextField label='Outlined' variant='outlined' required helperText='Helper text' error />
        </Stack>
  </Stack>
  </Stack>
  )

}

