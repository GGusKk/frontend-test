import Navbar from '../component/nav'
import Car from '../component/carousel';
export default function service() {
  return (
    <>
    <br/>
    <Navbar />
    <Car />
    {/*<center><h1>บริการของเรา</h1></center>*/}
    <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/236x/cc/0f/2a/cc0f2a5ebdc6fc32b4ac3fac0eea3567.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/564x/fe/ca/f1/fecaf121fcfd15551c076b77d6ac9616.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/564x/7c/5c/38/7c5c3861eba25d71da8eb4c7fee911d6.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <br/>
    </>
  );
}