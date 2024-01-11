function NewItem(props){
    return <>
    {/* <li className="list-group-item">{alllist}</li> */}
            <div className="col">
                 <div className="card h-100">
                 <img src="..." className="card-img-top" alt="..."/>
                 <div className="card-body">
                     <h5 className="card-title">{props.alllist}</h5>
                     <p className="card-text">This is a wider card with supporting </p>
                 </div>
                 <div className="card-footer">
                     <small className="text-muted">Last updated 3 mins ago</small>
                 </div>
                 </div>
             </div>
    </>
}

export default NewItem;