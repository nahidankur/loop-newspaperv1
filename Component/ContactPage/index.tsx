import c from "./index.module.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsDot, BsFillTelephoneFill, BsGlobe } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <>
      <div style={{ marginTop: "100px" }}></div>
      <div className="section-space">
        <div className="custom_container">
          <div className={c.innerNav}>
            <div className={c.inner1}>
              {" "}
              Home <AiOutlineDoubleRight />
            </div>
            <div className={c.inner1}> Contact</div>
          </div>

          <div className="row">

          <div className="col-lg-6">
              <div className={c.rightContainer}>
                <div className={c.contactFormContainer}>
                  <div className={c.contactTitle}>Leave a Message</div>

                  <form>
                    <div className={c.inputDiv}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        required
                      />
                    </div>
                    <div className={c.inputDiv}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        required
                      />
                    </div>
                    <div className={c.inputDiv}>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject*"
                        required
                      />
                    </div>
                    <div className={c.textarea}>
                      <textarea
                        name="message"
                        placeholder="Your Message*"
                        required
                      />
                    </div>

                    <div className={c.sBtn}>
                      <button type="submit">SUBMIT NOW</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={c.lConatiner}>
                <div className={c.shead}>
                  {" "}
                  <BsDot className={c.dot} /> HOW MAY WE HELP YOU
                </div>
                <div className={c.heading}>Office Information</div>

                <p className={c.cText}>
                  Mhen an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into remaining essentially
                  unchanged.
                </p>

                <div className={c.iConSection}>
                  <div className={c.iconPair}>
                    <div className={c.iconItems}>
                      <span className={c.iconContainer}>
                        <HiLocationMarker className={c.lIcon} />
                      </span>
                      29 Street, Melbourne City, Australia.
                    </div>
                    <div className={c.iconItems}>
                      <span className={c.iconContainer}>
                        <MdEmail className={c.lIcon} />
                      </span>
                      infonouka@gmail.com{" "}
                    </div>
                  </div>

                  <div className={c.iconPair2}>
                    <div className={c.iconItems}>
                      <span className={c.iconContainer}>
                        <BsFillTelephoneFill className={c.lIcon} />
                      </span>
                      +123-88-956-000
                    </div>
                    <div className={c.iconItems}>
                      <span className={c.iconContainer}>
                        <BsGlobe className={c.lIcon} />
                      </span>
                      www.samplesite.com{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={c.mapContainer}>
            <iframe
              className={c.gmap}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11311.364843882935!2d-106.20605138208258!3d40.8854097070405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1692787040172!5m2!1sbn!2sbd"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
