import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Loader from './Loader'
import HorizontalScrollbar from './HorizontalScrollbar';


const SimilarExercises = ({ targetMuscleExercise, equipmentExercise}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>

      <Typography variant="h3">Exercises that target the same muscle group</Typography>
   
        <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
          {targetMuscleExercise.length ? <HorizontalScrollbar data={targetMuscleExercise}/>: <Loader/>}
        </Stack> 

        <Typography variant="h3">Exercises that use the same equipment </Typography>
   
        <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
          {equipmentExercise.length ? <HorizontalScrollbar data={equipmentExercise}/>: <Loader/>}
        </Stack> 
    </Box>
  )
}

export default SimilarExercises