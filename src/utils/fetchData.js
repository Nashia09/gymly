export const exerciseOptions = {
        method: 'GET',
      //  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key':'b040c03499mshecdf9af52634d5fp1b1a05jsnacc2fdbbc6cb'
        
          
        }
    };

    
export const youtubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'b040c03499mshecdf9af52634d5fp1b1a05jsnacc2fdbbc6cb',
  }
};

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
     const data = await response.json();
   
     return data;
}

