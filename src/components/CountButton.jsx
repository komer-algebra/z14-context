import PropTypes, { string } from 'prop-types';
export default function CountButton({count, incCount, korisnost}) {
  return (
    <button onClick={incCount}>Ovaj count-button je isto {korisnost}: {count}</button>
  );
}

CountButton.propTypes = {
  count: PropTypes.number,
  incCount: PropTypes.func,
  korisnost: string
}
