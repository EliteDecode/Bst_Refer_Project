const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        backgroundColor: "#000066",
        color: "#ffffff",
        padding: "10px",
        textAlign: "center",
      }}>
      <p>© {currentYear} Babtech School of Technology</p>
    </div>
  );
};

export default Footer;
