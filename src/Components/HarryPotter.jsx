import React, { Component } from "react";

class HarryPotter extends Component{
    


    fetchList = (Lista)=>{
fetch("http://www.omdbapi.com/?apikey=5c486e2c&s="+Lista)
.then(response=>{
    if(response.ok){
        return response.json();
    }
})
.then(obj=>{
   const newList = obj.Search.slice()
   newList.splice(-4)
    this.setState({list: newList})
    
  
    
})

}

state = {
     list : []
}


componentDidMount() {
    this.fetchList(this.props.Lista);
}


render(){

return(

<>
<h3>Saga di {this.props.Lista}</h3>
<div
          className="row  row-cols-1 row-cols-sm-2  row-cols-lg-3 row-cols-xl-6 mb-3 bg-dark "
        >
            
{this.state.list.map(ogg => (
    <div className="col" key={ogg.imdbID}>
        <img className="img-fluid" src={ogg.Poster} alt="movie picture" />
    </div>
))}
</div>
</>


)

    

}
    

}

export default HarryPotter