import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <footer id="contact-us">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contact-form">
                  <form id="contact" action="" method="post">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            required=""
                            // style="background-color: rgba(250, 250, 250, 0.3);"
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            placeholder="E-Mail Address"
                            required=""
                            // style="background-color: rgba(250, 250, 250, 0.3);"
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows="6"
                            id="message"
                            placeholder="Your Message"
                            required=""
                            // style="background-color: rgba(250, 250, 250, 0.3);"
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button"
                          >
                            Send Message Now
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="right-content col-lg-6 col-md-12 col-sm-12">
                <h2>
                  More About <em>Geekz Den</em>
                </h2>
                <p>
                  Looking for IT Services? We can help, leave your contacts and
                  we will be in touch shortly
                  <br />
                  <br />
                  {/* If you need this contact form to send email to your inbox, you
                  may follow our */}
                  {/* <a rel="nofollow" href="# " target="_parent">
                    contact
                  </a>
                  page for more detail. */}
                  +91 7006984072
                  <br /> g33kzd3n@gmail.com
                  <br />
                  <br /> Srinagar, Jammu and Kashmir, India 190002
                </p>
                <ul className="social">
                  <li>
                    <a href="https://fb.com/templatemo">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/7006984072">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  Copyright &copy; {new Date().getFullYear()} |{" "}
                  <a rel="nofollow" href="https://geekzden.in">
                    {" "}
                    G33kz D3n
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Contact;
