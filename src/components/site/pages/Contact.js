const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="py-2 location">
            <strong>Address :</strong>
            <br />
            MAI NATURAL FOODS
            <br />
            Door No. 1/69 Dindigul To Karur Main Road,
            <br />
            Vellianai,
            <br />
            Karur - 639118
            <br /> Tamilnadu, India.
          </div>
          <div className="py-2 contact_person">
            <strong>Contact Person :</strong>
            <br />
            Mr. Karuppusamy
            <br />
            Director-Sales &amp; Marketing
          </div>
          <div className="py-2 call">
            <strong>Mobile No:</strong> <br />
            <a href="tel:+917878383861">+91-9786184559</a>
          </div>
          <div className="py-2 mail">
            <strong>E-mail:</strong>
            <br />
            <a href="mailto:info@mainaturalfoods.com">
              info@mainaturalfoods.com
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="inq">
            <h3> Enquiry Form </h3>
            <p>Send In Your Queries And We Will Reply As Soon As We Can.</p>
          </div>
          <div>
            <div
              role="form"
              className="py-2 wpcf7"
              id="wpcf7-f334-p22-o1"
              dir="ltr"
              lang="en-US"
            >
              <div className="screen-reader-response"></div>
              <form
                action="#"
                method="post"
                className="wpcf7-form"
                novalidate="novalidate"
              >
                <div>
                  <input type="hidden" name="_wpcf7" value="334" />
                  <input type="hidden" name="_wpcf7_version" value="5.0.5" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input
                    type="hidden"
                    name="_wpcf7_unit_tag"
                    value="wpcf7-f334-p22-o1"
                  />
                  <input
                    type="hidden"
                    name="_wpcf7_container_post"
                    value="22"
                  />
                </div>
                <div className="contact-frm1">
                  <div className="py-2 frm-right">
                    <span className="fname">
                      <input
                        type="text"
                        name="fname"
                        size="40"
                        className="form-control"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name *"
                        value=""
                      />
                    </span>
                  </div>
                  <div className="py-2 frm-right">
                    <span className="email">
                      <input
                        type="email"
                        name="email"
                        size="40"
                        className="form-control"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Email *"
                        value=""
                      />
                    </span>
                  </div>
                  <div className="py-2 frm-right">
                    <span className="sub">
                      <input
                        type="text"
                        name="sub"
                        size="40"
                        className="form-control"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Subject *"
                        value=""
                      />
                    </span>
                  </div>
                  <div className="py-2 frm-right">
                    <span className="msg">
                      <textarea
                        name="msg"
                        cols="30"
                        rows="3"
                        className="form-control"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Your Message *"
                      ></textarea>
                    </span>
                  </div>
                  <div className="py-2 frm-right">
                    <input
                      type="submit"
                      className="btn btn-submit btn-primary"
                      id="btn-send"
                      value="Send"
                    />
                    <span className="ajax-loader"></span>
                  </div>
                </div>
                <div className="wpcf7-response-output wpcf7-display-none"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
