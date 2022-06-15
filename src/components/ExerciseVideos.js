import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({ exerciseVideos, name}) => {



  if(!exerciseVideos.length) return 'Loading...';
  return (
   <Box sx={{ mt: { lg: '200px', xs: '20px'}}} p="20px">
    <Typography variant="h4" mb="33px">
      Watch  <span style={{ color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercises videos
    </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" 
      sx={{
          flexDirection: { lg: 'row'},
          gap: { lg: '110px', xs: '0'}
      }}>
           {exerciseVideos?.slice(0, 6).map((item, index) =>
               <a 
               key={index}
               className="exercise-video"
               href={`htpps://www.youtube.com/watch?v=${item.video.videoId}`}
               target="_blank"
               rel="noreferrer">
                <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                  <Box >

                    <Typography variant="h5" color="#000">
                      {item.video.title}
                    </Typography>
                    <Typography variant="h5" color="#000">
                      {item.video.channelName}
                    </Typography>
                  </Box>

               </a>

               
           )}
      </Stack>
  </Box>
  )
}

export default ExerciseVideos