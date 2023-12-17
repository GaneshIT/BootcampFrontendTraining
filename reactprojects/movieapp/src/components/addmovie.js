//class component
import React from "react";
import MovieList from "./movielist";
class AddMovie extends React.Component{
    constructor(){
        super();
        //initialize variables and methods
        this.state={
            movieId:0,
            movieTitle:'',
            movieDesc:'',
            movieType:'',
            moviedata:[]
        }
        this.readTitle=this.readTitle.bind(this);
        this.readDesc=this.readDesc.bind(this);
        this.readType=this.readType.bind(this);
        this.addMovie=this.addMovie.bind(this);
        this.getMovies=this.getMovies.bind(this);
    }
    readTitle(e){
        this.setState({movieTitle:e.target.value})
    }
    readDesc(e){
        this.setState({movieDesc:e.target.value});
    }
    readType(e){
        this.setState({movieType:e.target.value});
       // this.shouldComponentUpdate(false)
    }
    addMovie(){
        var data={
            "title":this.state.movieTitle,
            "desc":this.state.movieDesc,
            "type":this.state.movieType
        }
        console.log(data);
        fetch("http://localhost:3001/movies",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(
            (response)=>{
                alert('Inserted');
                this.getMovies();
             }
        ).catch(
            (error)=>alert(error)
        )

    }
    getMovies(){
        fetch("http://localhost:3001/movies").then(
            (response)=>response.json()
        ).then(
            (result)=>this.setState({moviedata:result})
        ).catch(
            (err)=>alert(err)
        )
    }
    componentDidMount(){
        this.getMovies();
    }
    render(){
        return(
            <div>
                <h4>Add Movie</h4>
                <hr />
                <form>
                    <div>
                        <label>Title</label>
                        <input type="text" value={this.state.movieTitle} onChange={this.readTitle} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" value={this.state.movieDesc} onChange={this.readDesc} />
                    </div>
                    <div>
                        <label>Type</label>
                        <input type="text" value={this.state.movieType} onChange={this.readType} />
                    </div>
                    <input type="button" value="Save" onClick={this.addMovie} />
                    <input type="button" value="Reset" />
                </form>
                <hr />
                    <h2>Movie List</h2>
                    <MovieList data={this.state.moviedata}></MovieList>
                <hr />
            </div>
        );
    }
}

export default AddMovie;