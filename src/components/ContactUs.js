import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const ContactUs = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    massage: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handelSubmet = async (e) => {
    e.preventDefault();
    setButtonText("...Sending");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, massage: "Massage sent succefully" });
    } else {
      setStatus({ success: false, massage: "Error sending massage" });
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handelSubmet}>
              <Row>
                <Col md={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col md={6} className='px-1'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("last name", e.target.value)}
                  />
                </Col>
                <Col md={6} className='px-1'>
                  <input
                    type='email'
                    placeholder='Email Address'
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col md={6} className='px-1'>
                  <input
                    type='tel'
                    value={formDetails.phone}
                    placeholder='Phone No.'
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <col>
                  <textarea
                    row='6'
                    value={formDetails.massage}
                    placeholder='Massage'
                    onChange={(e) => onFormUpdate("massage", e.target.value)}
                  />
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </col>
                {status.massage && (
                  <col>
                    <p
                      className={
                        status.massage === false ? "danger" : "success"
                      }>
                      {status.massage}
                    </p>
                  </col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
