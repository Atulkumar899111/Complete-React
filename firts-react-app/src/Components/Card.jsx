function Card(prop) {
  return (
    <>
      {console.log(prop.customerName)}
      <div className="col">
        <div className="card h-100">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{prop.customerName.name}</h5>
            <p className="card-text">{prop.customerName.job}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
