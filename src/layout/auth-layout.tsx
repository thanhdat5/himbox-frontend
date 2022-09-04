import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }: any) => {
  return (
    <div className="hb-auth-page">
      <Container>
        <div className="hb-auth-form">
          <Link to='/' className="hb-auth-form-logo d-block mb-4">
            <Image src="/images/logo.svg" height="60" alt="HimBOX" />
          </Link>
          {children}
        </div>
      </Container>
    </div>
  );
}

export default AuthLayout;
