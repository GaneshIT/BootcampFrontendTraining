//class component
import React from "react";

class AddMovie extends React.Component{
    constructor(){
        super();
        //initialize variables and methods
        this.state={
            movieId:0,
            movieTitle:'',
            movieDesc:'',
            movieType:''
        }
        this.readTitle=this.readTitle.bind(this);
        this.readDesc=this.readDesc.bind(this);
        this.readType=this.readType.bind(this);
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
    componentDidMount(){
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
                    <input type="button" value="Save" />
                    <input type="button" value="Reset" />
                </form>
                <div>
                    {this.state.movieTitle+","+
                    this.state.movieDesc+","+
                    this.state.movieType}
                </div>
                <hr />
            </div>
        );
    }
}

export default AddMovie;