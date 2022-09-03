import { useState } from "react"
import { Container, Row, Col, FormGroup, FormLabel, FormControl, Button, Form } from "react-bootstrap"
import { MESSAGES } from "../../../constants";
import { validateEmail } from "../../../utils/helpers";
import { SUPPORT_EMAIL } from "../../../_config";
import Section from "../components/section"
const PublicContact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<any>(null);

    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (name.trim().length === 0) {
            setErrors({ name: MESSAGES.REQUIRED_MESSAGE });
            return;
        }
        if (!validateEmail(email)) {
            setErrors({ email: MESSAGES.EMAIL_INVALID });
            return;
        }
        if (message.trim().length === 0) {
            setErrors({ msg: MESSAGES.REQUIRED_MESSAGE });
            return;
        }
        window.open(`mailto:${SUPPORT_EMAIL}?subject=From: ${name}'s Feedback&body=${message}`);
    }

    return <Section className="hb-contact pb-5" id="Contact">
        <Container>
            <Row className="justify-content-between align-items-center">
                <Col lg="5" className="text-center">
                    <div className="hb-contact-block">
                        <ul className="hb-contact-list">
                            <li>
                                <a href={`mailto:${SUPPORT_EMAIL}`}>
                                    <span className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 455.862 455.862">
                                            <path fill="currentColor" d="M441.088,63.154H14.774C6.615,63.154,0,69.77,0,77.93v300.003c0,8.16,6.615,14.775,14.774,14.775h426.313    c8.16,0,14.775-6.614,14.775-14.775V77.93C455.862,69.77,449.248,63.154,441.088,63.154z M403.394,316.659    c6.256,5.43,6.926,14.903,1.497,21.16c-5.43,6.254-14.901,6.928-21.161,1.496c-3.876-3.364-101.683-88.252-105.452-91.523    l-40.515,35.164c-2.82,2.448-6.326,3.672-9.832,3.672s-7.012-1.224-9.832-3.672l-40.515-35.164    c-3.77,3.272-101.576,88.159-105.452,91.523c-6.257,5.43-15.731,4.761-21.161-1.496c-5.43-6.257-4.76-15.73,1.497-21.16    L154.7,227.93L52.468,139.203c-6.256-5.43-6.926-14.903-1.497-21.16c5.431-6.256,14.904-6.928,21.161-1.496    c5.07,4.4,146.594,127.231,155.799,135.22c7.972-6.919,150.305-130.451,155.799-135.22c6.256-5.431,15.731-4.762,21.161,1.496    c5.43,6.257,4.76,15.731-1.497,21.16L301.162,227.93L403.394,316.659z" />
                                        </svg>
                                    </span>
                                    <div className="contact-text">
                                        <span>{SUPPORT_EMAIL}</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://t.me/HimBoxglobal" rel="noreferrer">
                                    <span className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48" fill="none"><path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="currentColor"></path></svg>
                                    </span>
                                    <div className="contact-text">
                                        <span>Join us on Telegram</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://twitter.com/himboxglobal" rel="noreferrer">
                                    <span className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 416.32" role="img"><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></svg>
                                    </span>
                                    <div className="contact-text">
                                        <span>Follow us on twitter</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="hb-circle-animation"></div>
                    </div>
                </Col>
                <Col lg="6">
                    <h2 className="hb-section-title">Contact Us</h2>
                    <div className="hb-section-description">
                        We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.
                    </div>
                    <div className="hb-section-body">
                        <Form onSubmit={handleSubmitForm}>
                            <Row>
                                <Col md="6">
                                    <FormGroup className="mb-3">
                                        <FormLabel>Your Name</FormLabel>
                                        <FormControl
                                            value={name}
                                            onChange={(e: any) => setName(e.target.value)}
                                            type='text'
                                            placeholder="Enter your name"
                                        />
                                        {errors?.name && <Form.Text className="text-error">{errors?.name}</Form.Text>}
                                    </FormGroup>
                                </Col>
                                <Col md="6">
                                    <FormGroup className="mb-3">
                                        <FormLabel>Your Email</FormLabel>
                                        <FormControl
                                            value={email}
                                            onChange={(e: any) => setEmail(e.target.value)}
                                            type='email'
                                            placeholder="Enter a valid email address"
                                        />
                                        {errors?.email && <Form.Text className="text-error">{errors?.email}</Form.Text>}
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup className="mb-4" data-aos="fade-up">
                                <FormLabel>Your Message</FormLabel>
                                <FormControl
                                    value={message}
                                    onChange={(e: any) => setMessage(e.target.value)}
                                    rows={4}
                                    as="textarea"
                                    placeholder="Leave your question or comment here"
                                />
                                {errors?.msg && <Form.Text className="text-error">{errors?.msg}</Form.Text>}
                            </FormGroup>
                            <Row>
                                <Col md="5" className="text-right">
                                    <Button type="submit" className="btn btn-round btn-primary">Send Message</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </Section>
}
export default PublicContact