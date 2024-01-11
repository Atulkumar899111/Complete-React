import NewItem from './NewItem';
import React from 'react';
function CompletedList(){
    // let arr = []
    let arr = ["Atul","Shruti","Coco","Mummy"]
    
    
        // if(arr.length === 0){
        //     return <h3>No items found</h3>
        // }
    return <>
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {arr.map((list)=> 
                <NewItem key = {list} alllist = {list}></NewItem>
            )}
        </div>
    </>
}

export default CompletedList;