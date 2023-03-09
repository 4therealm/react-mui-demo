import React from 'react'
import { Box, Stack, Divider, Grid } from '@mui/material'

export const MuiLayout = () => {
  return (

    <Stack direction='column' spacing={4}>
      {/* //Stack is a flexbox container that arranges its children in a column or row */}
      <Stack sx={{ border: '1px solid' }} direction='row' spacing={8} divider={<Divider orientation='vertical' flexItem />}>

        {/* // you can use the component prop to change the underlying element
    // using Box over div gives Box access to sx prop
    //a css utility that allows you to style your components */}
        <Box sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          width: '100px',
          height: '100px',
          '&:hover': {
            backgroundColor: 'primary.dark'
          }


        }}>Codevolution</Box>


        <Box display='flex' justifyContent='center' alignItems='center' height='100px' width='100px' bgcolor='primary.main' p={2} >
          <Box component='span' sx={{
            backgroundColor: 'white',
            color: 'primary.main',
            padding: '10px',
            borderRadius: '5px',
            width: '100px',
            height: '100px',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}>Codevolution</Box>
        </Box>

      </Stack>
      <Grid container
        rowSpacing={2}
        columnSpacing={1}
        sx={{ border: '1px solid' }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          sx={{ border: '1px solid' }}>
          <Box sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            width: '100px',
            height: '100px',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}>Codevolution</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ border: '1px solid' }}>
          <Box sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            width: '100px',
            height: '100px',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}>Codevolution</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ border: '1px solid' }}>
          <Box sx={{
            backgroundColor: 'primary.main',
            color: 'white',

            padding: '10px',
            borderRadius: '5px',
            width: '100px',
            height: '100px',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}>Codevolution</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ border: '1px solid' }}>
          <Box sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            width: '100px',
            height: '100px',
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}>Codevolution</Box>
        </Grid>
      </Grid>

    </Stack>
  )
}
