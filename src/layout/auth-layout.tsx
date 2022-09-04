import { Container, Image } from "react-bootstrap";

const AuthLayout = ({ children }: any) => {
  return (
    <div className="hb-auth-page">
      <Container>
        <div className="hb-auth-form">
          <div className="hb-auth-form-logo">
            <Image src="/images/logo.svg" height="60" alt="HimBOX" />
          </div>
          {children}
        </div>
      </Container>
    </div>
  );
}

export default AuthLayout;
