import React, { useEffect } from "react";

function Contact() {

  useEffect(() => {
    window.location.href = "/docs/support";
  }, []);

  return (<div></div>);
}

export default Contact;