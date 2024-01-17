import { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";
import Input from "./Input";
function Data() {
  // let arr = []
  // let arr = ["An item","second item","third item","fourth item","fifth one","sixth item"]
  let [arr1, setArr1] = useState([
    {
      name: "Atul",
      job: "QA Engineer",
    },
    {
      name: "Shruti",
      job: "Software developer",
    },
    {
      name: "Coco",
      job: "Family boy",
    },
  ]);
  //   let arr = ;

  const handelOnChange = (e) => {
    if (e.key === "Enter") {
      let arr3 = {
        name: e.target.value,
        job: "new post",
      };
      setArr1([...arr1, arr3]);
    }
  };
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <Input handelOnChange={handelOnChange}></Input>
        <ErrorMessage arrName={arr1}></ErrorMessage>
        {arr1.map((item, index) => (
          // <h1 color="black">{item}</h1>
          // <ul>
          // <li className="list-group-item">{item}</li>
          // </ul>

          <Card key={index} customerName={item} />
        ))}
      </div>
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
  );
}

export default Data;
