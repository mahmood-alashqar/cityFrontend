import React from 'react';



class Movies extends React.Component{

    render(){
        
        return(
            <>
                
            {this.props.moviesData.results.map( data => {
            
            return ( <> 
            
            <p>{data.image_url} 
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