import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';


const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  console.log(bodyPart)
 
  return (
   <Box>
   <HeroBanner />
   <SearchExercise setExercises={setExercises }  
   bodyPart={bodyPart} 
   setBodyPart={setBodyPart}/>
   
   <Exercises setExercises={setExercises } 
    bodyPart={bodyPart} 
    exercises={exercises} />


   </Box>
  )
}

export default Home