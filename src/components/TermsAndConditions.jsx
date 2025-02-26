import React from "react";
import "./TermsAndConditions.css";

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms & Conditions 📜</h1>
      <div className="terms-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to UWC India! These terms and conditions outline the rules
            and regulations for the use of our services. By using our platform,
            you agree to comply with these terms.
          </p>
        </section>

        <section>
          <h2>2. Services Provided</h2>
          <p>
            UWC India connects construction workers with contractors and
            clients. We provide skilled workers such as masons, electricians,
            plumbers, and others for various construction-related tasks. Our
            services also include door-to-door service to make the process easy
            and convenient for you.
          </p>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>
            Users must ensure that the information they provide on the platform
            is accurate and up-to-date. Users are also responsible for ensuring
            that they are complying with local laws while using our services.
          </p>
        </section>

        <section>
          <h2>4. Payment Terms</h2>
          <p>
            1.⁠ ⁠We don't have any kind of refund policy all sales are final{" "}
            <br />
            2.⁠ ⁠Our pricing range starts from Rs. 2000
          </p>
        </section>

        <section>
          <h2>5. Privacy and Data Protection</h2>
          <p>
            We are committed to protecting your privacy. We collect personal
            information only for the purpose of providing services. Your data
            will not be shared with third parties without your consent, except
            as required by law.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            UWC India is not responsible for any direct or indirect damages
            resulting from the use of our services, including but not limited to
            financial losses, property damage, or personal injury.
          </p>
        </section>

        <section>
          <h2>7. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of India. Any disputes arising from the use
            of our services will be resolved under Indian law.
          </p>
        </section>

        <section>
          <h2>8. Changes to the Terms</h2>
          <p>
            UWC India reserves the right to modify these terms at any time. We
            will notify users of any significant changes. Continued use of the
            platform after changes signifies acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about these terms, feel free
            to contact us at{" "}
            <a href="mailto:support@uwcindia.in">support@uwcindia.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions;
