import React, { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";

class HarryPotter extends Component{
    


    fetchList = (Lista)=>{
        this.setState({Loading:true})
fetch("http://www.omdbapi.com/?apikey=5c486e2c&s="+Lista)
.then(response=>{
    if(response.ok){
        
        return response.json();
    }
})
.then(obj=>{
   const newList = obj.Search.slice()
   newList.splice(-4)
    this.setState({list: newList,Loading:false})
    
  
    
})

.catch(err=>{
    console.log("errore caricamento componenti")
    this.setState({Error:true})
})

}

state = {
     list : [],
     Loading: false,
     Error:false
}


componentDidMount() {
    this.fetchList(this.props.Lista);
}


render(){

return(

<>
<h3 className="mb-4">Saga di {this.props.Lista}</h3>
{this.state.Loading ? (<div className="text-center"><Spinner variant="light" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner></div>): null}

{this.state.Error ? ( 
<Alert variant="danger" dismissible>
        <Alert.Heading>Ops! c'è stato un problema nel caricamento dei componenti!</Alert.Heading>
        <p>
         ci scusiamo per il disagio :(
        </p>
        {this.setState({Loading:false})}
      </Alert>) : null}
<div
          className="row  row-cols-1 row-cols-sm-2  row-cols-lg-3  row-cols-xl-6 mb-3  "
        >
            
{this.state.list.map(ogg => (
    <div className="col mb-lg-4 text-center mb-3" key={ogg.imdbID}>
        <img id="img-list" className="img-fluid" src={ogg.Poster} alt="movie picture" />
    </div>
))}
</div>
</>


)

    

}
    

}

export default HarryPotter