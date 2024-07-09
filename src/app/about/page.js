import Navbar from '../../app/component/nav'
import Car from '../component/carousel';
export default function about() {
  return (
    <>
    <br/>
    <Navbar/>
    <Car />
    {/*<center><h1>เกื่ยวกับเรา</h1></center>*/}
    <br/>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/236x/36/b6/c1/36b6c12cae112e291186e66adb6105d1.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/236x/d5/81/17/d581174d60bc5d8e49b947e77283d944.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/564x/19/df/ae/19dfaeffc52d6ea7a0e7c0dc186a5816.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
}