import PropTypes from 'prop-types';
export default function Paragraph({korisnost, children}) {
  return (
    <>
      <p>Ovaj paragraph je {korisnost}</p>
      {children}
    </>
  );
}

Paragraph.propTypes = {
  korisnost: PropTypes.string
}
