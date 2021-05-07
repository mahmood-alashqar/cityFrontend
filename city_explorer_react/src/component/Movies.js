import React from 'react';



class Movies extends React.Component{

    render(){
        
        return(
            <>
                
            {this.props.moviesData.map( data => {
            
            return ( <> 
            
            <p>
                <img src= {data.image_url} alt='' />
                
                        {data.title} 
                        {data.overview} 
                        {data.average_votes} 
                        {data.total_votes}
                        {data.popularity}
                        {data.released_on}
                        </p>
                        </>
                
            ) })}
            </>
        )
    }
}

export default Movies ;