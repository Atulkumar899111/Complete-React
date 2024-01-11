// import Card from "./Card";

function Data(){
    let arr = ["An item","second item","third item","fourth item","fifth one","sixth item"]
    return<>
        {arr.map((item)=>{
            console.log(item);
            // <h1 color="black">{item}</h1>
            <ul>
            <li className="list-group-item">{item}</li>
            </ul>
        })}
        {/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}
            {/* {arr.map((item)=>{

                
                 <div className="col">
                 <div className="card h-100">
                 <img src="..." className="card-img-top" alt="..."/>
                 <div className="card-body">
                     <h5 className="card-title">{item}</h5>
                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                 </div>
                 <div className="card-footer">
                     <small className="text-muted">Last updated 3 mins ago</small>
                 </div>
                 </div>
             </div>   
            <h1>{item}</h1>
            })} */}

            
        
        {/* </div> */}

            
            
            
    </>
}

export default Data;