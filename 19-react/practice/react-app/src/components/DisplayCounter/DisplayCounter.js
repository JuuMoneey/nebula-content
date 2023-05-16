import React from 'react';

export default function DisplayCounter(props) {
  const {count} = props
  return (
      <p>You clicked {count} times</p>
  );
}
