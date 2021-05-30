import React,{useState} from 'react';
import './Card.css';

function Card(){
    const [data,setData]=useState([]);


    const getData=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/search/movie?api_key=080620961534fa8a26584823babd7594&language=en-US&query=all&page=1&include_adult=false')
        const data1=await response.json();
        setData(data1.results);
       
    }
  
    getData();
    return(
        <>
    
            <div className="container">

                {data.map(datas=>(
                   <div className="align" key={datas.id}>
                        <img className="img"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${datas.poster_path}`}
                        alt={ 'Loading'}/>
                        <div className="content">
                            <h2>{datas.title}</h2>
                            <a href={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${datas.poster_path}`} target="blank">
                                <button>Know More</button>
                            </a>
                        </div>
                    </div>
                    
                ))};
            </div>
            
        </>
    );
};
export default Card;