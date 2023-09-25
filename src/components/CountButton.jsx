import PropTypes, { string } from 'prop-types'
export default function CountButton({count, setCount, korisnost}) {
  return (
    <button onClick={setCount}>Ovaj count-button još isto {korisnost}: {count}</button>
  )
}

CountButton.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
  korisnost: string
}
