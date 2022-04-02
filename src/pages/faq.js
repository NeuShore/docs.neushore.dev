import React, { useEffect } from "react";

function Contact() {

  useEffect(() => {
    window.location.href = "/docs/faq";
  }, []);

  return (<div></div>);
}

export default Contact;