function MovieList(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Desc</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((obj)=>
                <tr><td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.desc}</td></tr>
                )}
            </tbody>
        </table>
        );
}

export default MovieList;