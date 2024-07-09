import Navbar from '../../app/component/nav'
import Car from '../component/carousel';
export default function contact() {
  return (
    <>
    <br/>
    <Navbar />
    <Car />
    {/*<center><h1>ติดต่อเรา</h1></center>*/}
    <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/236x/42/b1/c5/42b1c5e70ea0a8dfce2eedad7400a1e0.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/236x/70/59/15/70591528bc518310337eca4636267012.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/236x/16/f2/ea/16f2eac8398c76ee3da82729f6b08aa3.jpg" alt="Card image cap" />
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