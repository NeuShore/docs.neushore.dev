import React, { useEffect } from "react";

function Contact() {

  useEffect(() => {
    window.location.href = "/docs/getting-started";
  }, []);

  return (<div></div>);
}

export default Contact;