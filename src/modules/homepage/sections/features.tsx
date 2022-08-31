import { Container, Row, Col } from "react-bootstrap";
import Section from "../components/section";

const PublicFeatures = () => {
    return <Section className="hb-features" id="Features">
        <Container>
            <h2 data-aos="fade-up" className="hb-section-title">WHAT ARE THE FEATURES OF HIMBOX?</h2>
            <Row className="gx-xl-5">
                <Col lg="6">
                    <div data-aos="fade-up" className="hb-feature-card active">
                        <div className="hb-feature-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52px" height="52px" viewBox="0 0 52 52"
                                x="0px" y="0px" >
                                <path fill="currentColor"
                                    d="M31.6,21.6c-1.2,0-2.2-1-2.2-2.2V5.5c0-1.2,1-2.2,2.2-2.2h14.2c1.2,0,2.2,1,2.2,2.2v13.9  c0,1.2-1,2.2-2.2,2.2H31.6z" />
                                <path fill="currentColor"
                                    d="M37.7,29.8l-8.2,8.9c-0.5,0.5-0.5,1.3,0,1.9l8.2,8.9c0.5,0.6,1.5,0.6,2,0l8.2-8.9c0.5-0.5,0.5-1.3,0-1.9  l-8.2-8.9C39.2,29.2,38.3,29.2,37.7,29.8z" />
                                <circle fill="currentColor" cx="13" cy="39.4" r="9.3" />
                                <path fill="currentColor"
                                    d="M4.8,6.5l7.2-4.1c0.7-0.4,1.5-0.4,2.1,0l7.1,4.1c0.7,0.4,1.1,1.1,1.1,1.9v8.2c0,0.8-0.4,1.5-1.1,1.9  l-7.1,4.1c-0.7,0.4-1.5,0.4-2.1,0l-7.2-4.1c-0.7-0.4-1.1-1.1-1.1-1.9V8.4C3.7,7.6,4.1,6.9,4.8,6.5z" />
                            </svg>
                        </div>
                        <div className="hb-feature-card-body">
                            <div className="hb-feature-card-title">ALL-IN-ONE</div>
                            <div className="hb-feature-card-description">The integration of features into one platform
                                makes it easy for users to access and use services in the cryptocurrency space. With
                                HIMBOX, we aim to build a friendly, complete, and effective DEFI platform for the
                                community that loves Polkadot and cryptocurrency.</div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="hb-feature-card">
                        <div className="hb-feature-card-icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="hotjar"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                    d="M414.9 161.5C340.2 29 121.1 0 121.1 0S222.2 110.4 93 197.7C11.3 252.8-21 324.4 14 402.6c26.8 59.9 83.5 84.3 144.6 93.4-29.2-55.1-6.6-122.4-4.1-129.6 57.1 86.4 165 0 110.8-93.9 71 15.4 81.6 138.6 27.1 215.5 80.5-25.3 134.1-88.9 148.8-145.6 15.5-59.3 3.7-127.9-26.3-180.9z">
                                </path>
                            </svg>
                        </div>
                        <div className="hb-feature-card-body">
                            <div className="hb-feature-card-title">STAKING</div>
                            <div className="hb-feature-card-description">Staking tokens helps investors increase profits
                                from holding coins/tokens. As part of the Polkadot ecosystem, HIMBOX enables DOT
                                holders to increase their numbers in a simple and eco-friendly way.</div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="hb-feature-card">
                        <div className="hb-feature-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                version="1.1" id="Capa_1" x="0px" y="0px" width="32.602px" height="32.602px"
                                viewBox="0 0 32.602 32.602" >
                                <path fill="currentColor"
                                    d="M11.531,17.138l1.153-2.621l10.271-1.677l5.139,6.289v-1.362h4.508v12.16h-4.508v-1.782l-5.66-2.306L8.387,27.618   l-7.442-3.981l0.104-1.36L0,21.226l0.733-4.298l9.119,2.937l7.232-1.992v-0.521L11.531,17.138z M9.67,14.65l-0.232,1.188   c-0.217,1.112-2.236,1.323-4.117,0.96c-1.881-0.367-3.672-1.321-3.455-2.437l0.205-1.044h0.002   c0.263-1.075,2.248-1.277,4.105-0.915c1.777,0.347,3.475,1.219,3.471,2.254L9.67,14.65z M2.932,13.531   c-0.047,0.24,0.861,1.025,2.754,1.395c1.893,0.37,3.031-0.018,3.076-0.258c0.047-0.24-0.859-1.026-2.754-1.396   C4.115,12.904,2.979,13.29,2.932,13.531z M12.371,12.123l-0.979,0.716c-0.914,0.673-2.541-0.541-3.676-2.085   C6.583,9.208,5.912,7.292,6.828,6.621l0.857-0.63l0.002,0.002c0.922-0.614,2.521,0.586,3.639,2.11   c1.072,1.46,1.728,3.251,1.023,4.011L12.371,12.123z M8.176,6.733C7.981,6.878,8.114,8.07,9.256,9.626   c1.141,1.556,2.238,2.041,2.436,1.896c0.198-0.145,0.063-1.338-1.078-2.894C9.473,7.073,8.373,6.588,8.176,6.733z M15.934,10.463   l-1.207-0.094c-1.133-0.088-1.574-2.068-1.426-3.979c0.148-1.91,0.891-3.8,2.023-3.712l1.061,0.083l-0.002,0.002   c1.101,0.136,1.528,2.088,1.381,3.974c-0.139,1.806-0.812,3.591-1.84,3.708L15.934,10.463z M16.272,3.641   c-0.244-0.019-0.922,0.973-1.07,2.896c-0.147,1.923,0.367,3.008,0.609,3.026c0.244,0.02,0.92-0.972,1.07-2.896   C17.03,4.744,16.516,3.66,16.272,3.641z" />
                            </svg>
                        </div>
                        <div className="hb-feature-card-body">
                            <div className="hb-feature-card-title">YIELD FARMING</div>
                            <div className="hb-feature-card-description">Become a farmer in the crypto field by adding
                                the DOT/HIM pair to increase farming yields and get bountiful crops.</div>
                        </div>
                    </div>
                </Col>

                <Col lg="6">
                    <div data-aos="fade-up" className="hb-feature-card">
                        <div className="hb-feature-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
                                <g id="Layer_1" />
                                <g id="Layer_2">
                                    <g>
                                        <line fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16"
                                            x2="16" y1="10" y2="12" />
                                        <line fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16"
                                            x2="16" y1="20" y2="22" />
                                        <path
                                            d="    M14,20h3c1.1,0,2-0.9,2-2s-0.9-2-2-2h-2c-1.1,0-2-0.9-2-2s0.9-2,2-2h3"
                                            fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                                        <path d="    M16,6c5.5,0,10,4.5,10,10s-4.5,10-10,10S6,21.5,6,16v-3"
                                            fill="none" stroke="currentColor" strokeLinecap="round"
                                            strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                                        <polyline fill="none" points="    10,17 6,13 2,17   " stroke="currentColor"
                                            strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                            strokeWidth="2" />
                                        <path d="    M16,2c7.7,0,14,6.3,14,14s-6.3,14-14,14" fill="none"
                                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeMiterlimit="10" strokeWidth="2" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="hb-feature-card-body">
                            <div className="hb-feature-card-title">LENDING/BORROWING</div>
                            <div className="hb-feature-card-description">In the near future, we will launch a
                                lending/borrowing platform on HIMBOX.</div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="hb-feature-card">
                        <div className="hb-feature-card-icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket"
                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                data-fa-i2svg="">
                                <path fill="currentColor"
                                    d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z">
                                </path>
                            </svg>
                        </div>
                        <div className="hb-feature-card-body">
                            <div className="hb-feature-card-title">DISCOVER</div>
                            <div className="hb-feature-card-description">As a gateway to connect and help users discover
                                projects, products, and Dapps in the Polkadot ecosystem. Just enter keywords and get
                                results quickly.</div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="hb-feature-card">
                        <div className="hb-feature-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.467 511.467">
                                <path fill="currentColor"
                                    d="M170.315,191.742c-35.285,0-64,28.715-64,64s28.715,64,64,64s64-28.715,64-64S205.601,191.742,170.315,191.742z" />
                                <path fill="currentColor"
                                    d="M319.649,191.742c-35.285,0-64,28.715-64,64s28.715,64,64,64s64-28.715,64-64S354.934,191.742,319.649,191.742z" />
                                <path fill="currentColor"
                                    d="M95.96,130.784c-10.112-6.059-23.211-2.773-29.269,7.317l-64,106.667c-0.512,0.853-0.597,1.835-0.981,2.731     c-0.576,1.387-1.195,2.731-1.493,4.203c-0.256,1.365-0.213,2.667-0.213,4.032c0,1.365-0.043,2.688,0.213,4.053     c0.299,1.472,0.917,2.795,1.493,4.203c0.384,0.896,0.469,1.877,0.981,2.731l64,106.667c3.989,6.677,11.051,10.347,18.304,10.347     c3.733,0,7.531-0.96,10.965-3.029c10.112-6.059,13.376-19.179,7.317-29.269l-57.408-95.701l57.408-95.68     C109.336,149.941,106.072,136.842,95.96,130.784z" />
                                <path fill="currentColor"
                                    d="M511.433,252.736c-0.384-2.752-1.344-5.419-2.773-7.851c-0.043-0.043-0.021-0.085-0.043-0.128l-64-106.667     c-6.08-10.091-19.157-13.376-29.291-7.317c-10.091,6.08-13.376,19.179-7.296,29.291l56.619,94.357l-55.403,73.856     c-7.083,9.429-5.163,22.805,4.267,29.867c3.84,2.88,8.32,4.267,12.779,4.267c6.507,0,12.907-2.944,17.088-8.533l64-85.333     c0.021-0.043,0.021-0.085,0.043-0.107c1.6-2.155,2.731-4.587,3.413-7.147c0.512-1.899,0.469-3.819,0.469-5.76     C511.284,254.592,511.561,253.674,511.433,252.736z" />
                            </svg>
                        </div>
                        <div className="hb-feature-card-body">
                            <div className="hb-feature-card-title">AND MORE...</div>
                            <div className="hb-feature-card-description">Other products and applications will be
                                deployed according to the roadmap, such as NFT gifts, NFT marketplace, GameFi, Asset
                                management, etc. The aim is to increase the experience and the number of users,
                                making HIMBOX the top DEFI platform in the polkadot ecosystem.</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Section>
}
export default PublicFeatures