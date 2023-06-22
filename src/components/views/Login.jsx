import { Button, Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../helpers/queries";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    iniciarSesion(usuario).then((respuesta) => {
      if (respuesta) {
        sessionStorage.setItem("usuario", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        reset();
        navegacion("/administrador");
      } else {
        Swal.fire("Error", "Los Datos Ingresados Son Incorrectors", "error");
      }
    });
  };

  return (
    <section className="mainSection">
      <Container>
        <Card className="my-5">
          <Card.Header as="h5">Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electronico"
                  {...register("email", {
                    required: "El email es un dato obligatorio",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:
                        "El Email debe tener el siguiente formato mail@dominio.com",
                    },
                  })}
                ></Form.Control>
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  {...register("password", {
                    required: "El Password es Obligatorio",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message: "El Password debe tener entre 8 y 16 caracteres",
                    },
                  })}
                ></Form.Control>
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <Button variant="success" type="submit">
                Ingresar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Login;
