// display error message react component
import './ErrorMessage.css';
import React from 'react';
import useNftStore from '../../store/nfts';

const ErrorMessage = () => {
  const { error } = useNftStore((state) => ({ error: state.error}));
  if (!error) {
    return null;
  }
  return (
    <div className="error-message">
      <p>ERROR: {error}</p>
    </div>
  );
};

export default ErrorMessage;