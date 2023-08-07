import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Contact.css";
const Contact = () => {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("Submitted");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwGmuK37nQdBDBXDbuUuZPKUcN3mS7OnEerTI5PXMW8LmSSqEZLXUZ0MXI1WPmmUQuE/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      alert("Form has been Submitted")
      // e.preventDefault();
      // location.reload();
      window.location.reload();
  }
  return (
    <section id="contact">
      <section>
        <div class="section-header">
          <div class="container">
            <h2>Contact Me</h2>
            <p>Contact Me for Developing a Full Stack Software</p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-home"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Address</h4>
                  <p>
                    Mumbai
                    <br /> India
                    <br />
                    400101
                  </p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-phone"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p>9167973699</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class={faEnvelope}></i>
                </div>

                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>manavajmera03@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form method="POST" className="form" onSubmit={(e) => Submit(e)}>
                <h2>Send Message</h2>
                <div class="input-box">
                  <input type="text" required="true" name="Name" placeholder="Name" />
                  {/* <span>Full Name</span> */}
                </div>

                <div class="input-box">
                  <input type="email" required="true" name="Email" placeholder="Email"/>
                  {/* <span>Email</span> */}
                </div>

                <div class="input-box">
                  <textarea required="true" name="Message" placeholder="Message"></textarea>
                  {/* <span>Type your Message...</span> */}
                </div>

                <div class="input-box">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
