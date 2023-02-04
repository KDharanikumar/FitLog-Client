import { FaPhoneVolume } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import BannerImg from "../Components/BannerImg";

const Contact = () => {
  return (
    <section>
      <div className="container-fluid">
        <BannerImg title="CONTACT US" />
        {/* <------CONTACT-ADDRESS-CARD-START------> */}
        <div className="container">
          <div className="row">
            <div className="card fl-contact-addresscard text-center">
              <div className="card-body">
                <icon>
                  <HiLocationMarker />
                </icon>
                <h5>ADDRESS</h5>
                <p>No.22/6, 3 Phase, XXX Street Kancheepuram, Tamilnadu, 631501</p>
              </div>
            </div>

            <div className="card fl-contact-addresscard text-center">
              <div className="card-body">
                <icon>
                  <HiOutlineMail />
                </icon>
                <h5>E-MAIL</h5>
                <p>
                  <a href="mailto:dharani@fitlog.com">dharani@fitlog.com</a>
                </p>
              </div>
            </div>

            <div className="card fl-contact-addresscard text-center">
              <div className="card-body">
                <icon>
                  <FaPhoneVolume />
                </icon>
                <h5>PHONE</h5>
                <p>+91-98430 98430</p>
              </div>
            </div>
          </div>
        </div>
        {/* <------CONTACT-ADDRESS-CARD-START------> */}

        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 map">
              <iframe
                title="starflit"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.9842589636264!2d79.67165648485461!3d12.779533586893974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52dd3ed66d6515%3A0xf74226e526c3d9ee!2sSTARFLIT!5e0!3m2!1sen!2sin!4v1671085393368!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6">
              <form className="fl-contact-form">
                <h3>
                  <u>Get in Touch</u>
                </h3>
                <label className="form-label"></label>
                <input type="Text" className="form-control mb-3" id="exampleInputText" placeholder="Name" />
                <div className="d-flex">
                  <label className="form-label"></label>
                  <input type="tel" className="form-control mb-3 me-5" id="Phone Number" placeholder="Phone Number" />
                  <label className="form-label"></label>
                  <input type="email" className="form-control mb-3" id="exampleInputEmail1" placeholder="E-Mail" />
                </div>
                <div>
                  <textarea class="form-control" id="floatingTextarea" placeholder="Message..."></textarea>
                  <label for="floatingTextarea"></label>
                </div>
                <button type="submit" className="fl-button">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
