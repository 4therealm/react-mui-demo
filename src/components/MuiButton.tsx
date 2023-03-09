import React from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

// import FormatPaintIcon from '@mui/icons-material/FormatPaint';

// import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
// import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
// import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
// import FormatClearIcon from '@mui/icons-material/FormatClear';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import FormatSizeIcon from '@mui/icons-material/FormatSize';
// import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
// import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
// import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';




export const MuiButton = () => {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['bold', 'italic', 'underline']);
  const [list, setList] = React.useState(() => ['numbered', 'bulleted', 'indent']);
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats);
  };
  const handleAlignmentChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };
  const handleListChange = (_event: React.MouseEvent<HTMLElement>, updatedList: string[]) => {
    setList(updatedList);
  };
  

  return (
    <Stack direction='column' spacing={4}>
      <Stack direction='column' spacing={4}>
        {/* ------------------------------------1 */}
        <h4>1 direction: column</h4>
        <Stack direction='column' spacing={2}>
          {/* variant is used to change the style of the button */}
          {/* the contained variant used to grab users attention, for primary applications in your app. register login  */}
          <Button variant='contained'>Contained</Button>
          {/*used for secondary application. cancel or go back  */}
          <Button variant='outlined'>Outlined</Button>
          {/* text variant is used when you want to grab less attention, card footer or information popup */}
          <Button variant='text'>Text</Button>
        </Stack>
        {/* --------------------------------------------2 */}
        <h4>2 direction: row</h4>
        <Stack direction='row' spacing={2}>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Outlined</Button>
          {/* adding href changes the element to an anchor tag */}
          <Button variant='text' href='https://google.com'>Text</Button>
        </Stack>
        {/* --------------------------------------------3 */}

        <h4>3 color: default</h4>
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
        {/* --------------------------------------------4 */}
        <h4>4 button size</h4>
        <Stack display='block' direction='row' spacing={2} >
          {/* display flex is default value, it affects size of button. so block is important */}
          <Button variant='contained' color='primary' size='small'>Small</Button>
          <Button variant='contained' color='primary' size='medium'>Medium</Button>
          <Button variant='contained' color='primary' size='large'>Large</Button>
        </Stack>

        {/* --------------------------------------------5 */}
        <h4>5 sendIcon</h4>
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
        {/* --------------------------------------------6 */}
        <h4>6 without button groups</h4>
        <Stack direction='row'>
          <Button variant='contained' color='primary'>left</Button>
          <Button variant='contained' color='primary'>center</Button>
          <Button variant='contained' color='primary'>right</Button>
        </Stack>
        {/* when using button groups the variant should be specified on the button group, and not the individual buttons */}
        {/* --------------------------------------------7 */}
        <h4>7 with button groups</h4>
        <Stack direction='row' spacing={2}>
          <ButtonGroup variant='contained' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup variant='outlined' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup variant='text' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>
        </Stack>
        {/* --------------------------------------------8 */}
        <h4>8 with button groups orientation: vertical</h4>
        <Stack direction='row' spacing={2}>
          <ButtonGroup aria-label='alignment button group' orientation='vertical' variant='contained' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label='alignment button group' orientation='vertical' variant='outlined' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label='alignment button group' orientation='vertical' variant='text' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>
        </Stack>
        {/* --------------------------------------------9 */}
        <h4>9 with button groups orientation: vertical and size</h4>
        <Stack direction='row' spacing={2}>
          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='small' variant='contained' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='medium' variant='contained' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='large' variant='contained' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>
        </Stack>
        {/* --------------------------------------------10 */}
        <h4>10 with button groups orientation: vertical and size</h4>
        <Stack direction='row' spacing={2}>
          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='small' variant='text' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='medium' variant='text' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='large' variant='text' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>
        </Stack>

        <h4>11 with button groups orientation: vertical and size</h4>
        <Stack direction='row' spacing={2}>
          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='small' variant='outlined' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='medium' variant='outlined' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>

          <ButtonGroup aria-label='alignment button group' orientation='vertical' size='large' variant='outlined' color='primary'>
            <Button color='primary'>left</Button>
            <Button color='primary'>center</Button>
            <Button color='primary'>right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>

      <h4>12 with toggle buttons</h4>
      <Stack direction='row' spacing={2}>
        <h5>text formatting</h5>
        <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        </Stack>

        <Stack direction='row' spacing={2}>
          <h5>text alignment</h5>
          <ToggleButtonGroup aria-label='text alignment' value={alignment} onChange={handleAlignmentChange} exclusive>
            <ToggleButton value='left' aria-label='left aligned'>
              <FormatAlignLeftIcon />
            </ToggleButton>
            <ToggleButton value='center' aria-label='centered'>
              <FormatAlignCenterIcon />
            </ToggleButton>
            <ToggleButton value='right' aria-label='right aligned'>
              <FormatAlignRightIcon />
            </ToggleButton>
            <ToggleButton value='justify' aria-label='justified' disabled>
              <FormatAlignJustifyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          </Stack>
          <Stack direction='row' spacing={2}>
            <h5>list styles</h5>
            <ToggleButtonGroup aria-label='list icon' value={list} onChange={handleListChange} exclusive>
              <ToggleButton value='left' aria-label='left aligned'>
                <FormatListBulletedIcon />
              </ToggleButton>
              <ToggleButton value='center' aria-label='centered'>
                <FormatListNumberedIcon />
              </ToggleButton>
              <ToggleButton value='right' aria-label='right aligned'>
                <FormatListNumberedRtlIcon />
              </ToggleButton>
              <ToggleButton value='justify' aria-label='justified' disabled>
                <FormatListNumberedRtlIcon />
              </ToggleButton>
            </ToggleButtonGroup>
            </Stack>

    </Stack>
  )
}
// https://www.youtube.com/watch?v=gsa2d8mLxB0&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=5