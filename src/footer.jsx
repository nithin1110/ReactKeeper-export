import React from "react";
const currentyear = new Date().getFullYear;
function Footer() {
  return (
    <div className="footer">
      <h3>Copyright @{currentyear}</h3>
    </div>
  );
}
export default Footer;
