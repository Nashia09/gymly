import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';


const ExerciseDetail = () => {

  const [ exerciseVideos, setExerciseVideos ] = useState([])
 const [exerciseDetail, setExerciseDetail] = useState({});
 const [ targetMuscleExercise, setTargetMuscleExercises] = useState([]);
 const [ equipmentExercise, setEquipmentExercises] = useState([]); 

const { id } = useParams();
  
  useEffect(() => {
    
    const fetchExercisesData = async () => {
            const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
             const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions)
               
             setExerciseDetail(exerciseDetailData);

             const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
               
      const targetMuscleExerciseData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExerciseData);


      const equipmentExerciseData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExerciseData);
  
    }
    fetchExercisesData();

    }, [id])
  return (
    <Box>
        <Detail  exerciseDetails={exerciseDetail}/>
        <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
        <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise} />
    </Box>
  )
}

export default ExerciseDetail