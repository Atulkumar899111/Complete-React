function Form(){
    return <>
        <form className="row g-3">
        <div className="col-auto mx-auto">
                <label for="inputPassword2" className="visually-hidden">Password</label>
                <input type="Text" className="form-control" id="name" placeholder="Text"/>
            </div>
            <div className="col-auto mx-auto">
            <input type="Date" className="form-control" id="name" placeholder="Text"/>
            </div>
            <div className="col-auto mx-auto">
                <button type="submit" className="btn btn-primary mb-3">Add</button>
            </div>
        </form>
    </>
}

export default Form;