import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#343a40",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    position: "static",
    left: 0,
    bottom: 0,
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <h2>Mehr Erfolg durch enge Vernetzung:</h2>
        <p>
          Die Ärzte des Gamma Knife Zentrums Bochum arbeiten eng mit den
          Fachkollegen der Universitätskliniken für Neurologie und
          Neurochirurgie, des Instituts für Radiologie, Neuroradiologie und
          Nuklearmedizin und des Onkologischen Zentrums des
          Knappschaftskrankenhauses Bochum sowie der Klinik für Strahlentherapie
          und Radioonkologie des Marien Hospitals Herne / Universitätsklinikum
          der Ruhr-Universität Bochum zusammen.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
