import PropTypes from 'prop-types'
export default function Paragraph({korisnost}) {
  return (
    <p>Ovaj paragraph je {korisnost}</p>
  )
}

Paragraph.propTypes = {
  korisnost: PropTypes.string
}
