import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> Maow</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">หน้าแรก</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/about">เกี่ยวกับเรา</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/service">บริการของเรา</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/contact">ติดต่อเรา</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-sign-in" /> Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-sign-out" /> Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
