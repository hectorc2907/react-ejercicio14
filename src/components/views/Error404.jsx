import { Button } from "react-bootstrap";
import error from "../../assets/error-404.png";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="mainSection">
      <div className="d-flex justify-content-center align-items-center flex-column pt-5">
        <img src={error} alt="error 404" className="img-fluid pb-5"></img>
        <div>
          <NavLink end className={"btn btn-primary"} to='/'>Volver al Inicio</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Error404;
