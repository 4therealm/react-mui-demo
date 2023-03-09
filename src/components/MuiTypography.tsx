import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      {/* by setting the component to h1 we keep the styling and sizing of the h4, but the tag will be h1. this allows it to be used on other pages as a semantic h1 tag */}
      <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
      {/* the gutterBottom gives the text a bottom margin,  value is set to false by default. larger variants have more margin than smaller */}
      
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>
      
      {/* subtitle1 and 2 are varients of h6 */}
      <Typography variant='subtitle1'>subtitle 1</Typography>
      <Typography variant='subtitle2'>subtitle 2</Typography>

      {/* body1 and body2 are variants of h6*/}
      <Typography >body 1: default <br/> ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur quos ut nisi est aliquid tempore totam ad officiis eius omnis iste quis quas modi repellendus, accusamus laboriosam minima ipsam!</Typography>

      <Typography variant='body2'>body 2: <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam doloribus perspiciatis exercitationem perferendis eos neque error quasi placeat consequatur modi nam vel nisi ea facere id, nesciunt libero obcaecati? Quaerat!</Typography>
    </div>

  )
}
