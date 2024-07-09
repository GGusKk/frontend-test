import Navbar from '../app/component/nav'
import Car from './component/carousel';
import Footer from './component/footer';
export default function Home() {
  return (
    <>
      <br />
      <Navbar />
      <Car />
      {/*<center><h1>ยินดีต้อนรับเข้าสู่เว็บไซด์</h1></center>*/}
            <br/>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/564x/01/42/9e/01429e3cadf06956f5c2e58cb7989c7f.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Card 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/564x/8b/59/05/8b5905112e1b4b94dc8cc35c5cb3535b.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="https://i.pinimg.com/474x/9f/1a/aa/9f1aaa0812182705b97196ece3bcd67a.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}