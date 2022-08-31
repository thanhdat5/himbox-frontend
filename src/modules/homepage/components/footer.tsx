import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HIMBOX_ACCESS_TOKEN, ROUTES } from "../../../constants";

const PublicFooter = () => {
    const logged = localStorage.getItem(HIMBOX_ACCESS_TOKEN);
    return <footer className="hb-footer">
        <Container>
            <Row>
                <Col lg="4" className="mb-lg-0 mb-4">
                    <div className="hb-footer-logo">
                        <Image src="/images/logo-f.png" alt="HimBOX" />
                    </div>
                    <div className="hb-footer-text">HIMBOX - A DECENTRALIZED FINANCE PLATFORM ON POLKADOT</div>
                    <div className="hb-footer-socials">
                        <a target="_blank" href="#" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 416.32"
                                role="img">
                                <path fill="currentColor"
                                    d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92">
                                </path>
                            </svg>
                        </a>
                        <a target="_blank" href="https://t.me/HimBoxglobal" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48"
                                fill="none">
                                <path
                                    d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                                    fill="currentColor" />
                            </svg>
                        </a>
                        <a target="_blank" href="#" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 310 310">
                                <path fill="currentColor" id="XMLID_823_"
                                    d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938   C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527   C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991   c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764   c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861   C204.394,157.263,202.325,160.684,199.021,162.41z" />
                            </svg>
                        </a>
                    </div>
                </Col>
                <Col lg="8">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="hb-footer-block">
                                <div className="hb-footer-block-title">General</div>
                                <ul className="hb-footer-menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li>{logged ? <Link to={ROUTES.DASHBOARD}>Dashboard</Link> : <Link to={ROUTES.SIGN_UP}>Create an account</Link>}</li>
                                    <li><a href="#">Buy DOT</a></li>
                                    <li><a href="#">Contact </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="hb-footer-block">
                                <div className="hb-footer-block-title">Community</div>
                                <ul className="hb-footer-menu">
                                    <li><a target="_blank" rel="noreferrer" href="#">Twitter</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://t.me/HimBoxglobal">Telegram</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="#">Youtube</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="hb-footer-block">
                                <div className="hb-footer-block-title">Other</div>
                                <ul className="hb-footer-menu">
                                    <li><a target="_blank" rel="noreferrer"
                                        href="https://docs.google.com/document/d/19M9eHR2qlxAKFDOoo6NJY_KW348oJghFL2Aq25jZhyI/edit?usp=sharing">Privacy
                                        policy</a></li>
                                    <li><a target="_blank" rel="noreferrer"
                                        href="https://docs.google.com/document/d/1KY8CuRzBhQl_SFwR4O9ewwWX3ZlEjIw0jOl9540tkh4/edit?usp=sharing">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="hb-footer-copyright">
            <Container>
                @2022, made with passion by HIMBOX foundation
            </Container>
        </div>
    </footer>
}
export default PublicFooter