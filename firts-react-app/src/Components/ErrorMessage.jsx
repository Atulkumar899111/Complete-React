function ErrorMessage(prop){
return <>
{console.log(prop.arrName.length)}
    {prop.arrName.length === 0 ? <h1>No items</h1>:null}
    </>
}

export default ErrorMessage;