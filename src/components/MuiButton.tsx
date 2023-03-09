import React from 'react'
import { Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
export const MuiButton = () => {
  return (
    <div>
      <Stack direction='column' spacing={4}>
          <h4>direction: column</h4>
        <Stack direction='column' spacing={2}>
          {/* variant is used to change the style of the button */}
          {/* the contained variant used to grab users attention, for primary applications in your app. register login  */}
          <Button variant='contained'>Contained</Button>
          {/*used for secondary application. cancel or go back  */}
          <Button variant='outlined'>Outlined</Button>
          {/* text variant is used when you want to grab less attention, card footer or information popup */}
          <Button variant='text'>Text</Button>
        </Stack>

          <h4>direction: row</h4>
        <Stack direction='row' spacing={2}>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Outlined</Button>
          {/* adding href changes the element to an anchor tag */}
          <Button variant='text' href='https://google.com'>Text</Button>
        </Stack>
        
          <h4>color: default</h4>
        <Stack direction='row' spacing={2}>
          <Button variant='contained' color='primary'>Primary</Button>
          <Button variant='contained' color='secondary'>Secondary</Button>
          <Button variant='contained' color='error'>Error</Button>
          <Button variant='contained' color='info'>Info</Button>
          <Button variant='contained' color='success'>Success</Button>
          <Button variant='contained' color='warning'>Warning</Button>
        </Stack>
        <Stack direction='row' spacing={2}>
          <Button variant='outlined' color='primary'>Primary</Button>
          <Button variant='outlined' color='secondary'>Secondary</Button>
          <Button variant='outlined' color='error'>Error</Button>
          <Button variant='outlined' color='info'>Info</Button>
          <Button variant='outlined' color='success'>Success</Button>
          <Button variant='outlined' color='warning'>Warning</Button>
        </Stack>
        <Stack direction='row' spacing={2}>
          <Button variant='text' color='primary'>Primary</Button>
          <Button variant='text' color='secondary'>Secondary</Button>
          <Button variant='text' color='error'>Error</Button>
          <Button variant='text' color='info'>Info</Button>
          <Button variant='text' color='success'>Success</Button>
          <Button variant='text' color='warning'>Warning</Button>
        </Stack>
          <h4>button size</h4>
        <Stack display='block' direction='row' spacing={2} >
          {/* display flex is default value, it affects size of button. so block is important */}
          <Button variant='contained' color='primary' size='small'>Small</Button>
          <Button variant='contained' color='primary' size='medium'>Medium</Button>
          <Button variant='contained' color='primary' size='large'>Large</Button>
          </Stack>

          <h4>sendIcon</h4>
          <Stack direction='row' spacing={2}>
            <Button variant='contained' color='primary' endIcon={<SendIcon />}>Send</Button>
            <Button variant='contained' color='primary' startIcon={<SendIcon />}>Send</Button>
            <IconButton color='success' aria-label='send message' size='large'>
            <SendIcon />
            </IconButton>
            <IconButton color='primary' aria-label='send message' size='small'>
            <SendIcon />
            </IconButton>
           </Stack>

           <h4>without button groups</h4>
            <Stack direction='row'>
              <Button variant='contained' color='primary'>left</Button>
              <Button variant='contained' color='primary'>center</Button>
              <Button variant='contained' color='primary'>right</Button>
            </Stack>
            {/* when using button groups the variant should be specified on the button group, and not the individual buttons */}
           <h4>with button groups</h4>
            <Stack direction='row' spacing={2}>
              <ButtonGroup variant='contained' color='primary'>
              <Button  color='primary'>left</Button>
              <Button  color='primary'>center</Button>
              <Button  color='primary'>right</Button>
              </ButtonGroup>

              <ButtonGroup variant='outlined' color='primary'>
              <Button  color='primary'>left</Button>
              <Button  color='primary'>center</Button>
              <Button  color='primary'>right</Button>
              </ButtonGroup>

              <ButtonGroup variant='text' color='primary'>
              <Button  color='primary'>left</Button>
              <Button  color='primary'>center</Button>
              <Button  color='primary'>right</Button>
              </ButtonGroup>
            </Stack>
           <h4>with button groups orientation: vertical</h4>
            <Stack direction='row' spacing={2}>
              <ButtonGroup orientation='vertical' variant='contained' color='primary'>
              <Button  color='primary'>left</Button>
              <Button  color='primary'>center</Button>
              <Button  color='primary'>right</Button>
              </ButtonGroup>

              <ButtonGroup orientation='vertical' variant='outlined' color='primary'>
              <Button  color='primary'>left</Button>
              <Button  color='primary'>center</Button>
              <Button  color='primary'>right</Button>
              </ButtonGroup>

              <ButtonGroup orientation='vertical' variant='text' color='primary'>
              <Button  color='primary'>left</Button>
              <Button  color='primary'>center</Button>
              <Button  color='primary'>right</Button>
              </ButtonGroup>
            </Stack>
      </Stack>
    </div>
  )
}
