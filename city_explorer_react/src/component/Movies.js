import React from 'react';
import img from '../Assets/movies.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



class Movies extends React.Component{

    

    render(){
        
        return(
            <>
                
            {this.props.moviesData.map( data => {
            if (data.image_url === 'there is no image' ){
                data.image_url = img;
            }
            return ( <> 
            
            <p>
            <Card style={{ width: '18rem' }}>
            
            <Card.Img variant="top" src={data.image_url} />
            
                {/* <img src= {data.image_url} alt='' /> */}
                <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                {data.overview} 
               </Card.Text>
                        
                        {data.average_votes} 
                        {data.total_votes}
                        {data.popularity}
                        {data.released_on}
                        </Card.Body>
           </Card>
                        </p>
                        </>
                
            ) })}
            </>
        //     
        //     
        //     
        //      
        //      
        //       <Button variant="primary">Go somewhere</Button>
        //  
        )
    }
}

export default Movies ;