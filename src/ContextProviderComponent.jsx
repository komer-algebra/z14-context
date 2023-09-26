import PropTypes from 'prop-types';
import { createContext } from 'react';

export const ContextName = createContext(['', 0]);

export default function ContextProviderComponent({value, children}) {
  return (
    <ContextName.Provider value={value}>
      {children}
    </ContextName.Provider>
  )
}

ContextProviderComponent.propTypes = {
  value: PropTypes.array.isRequired,
  children: PropTypes.node
}
