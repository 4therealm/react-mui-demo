import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Stack } from '@mui/material'
export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        <ImageListItem key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ImageListItemBar
            title="ImageList"
            subtitle={<span>Subtitle</span>}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ImageList`}
              >
                {/* <InfoIcon /> */}
              </IconButton>
            }
          />
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
            </Stack>
  )
}
