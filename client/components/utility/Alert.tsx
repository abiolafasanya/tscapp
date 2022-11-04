import React from 'react';
import { Iprops } from './../../utility/interfaces';

const Alert: React.FC<Iprops> = (props) => {
  return (
    <>
      <div
        className={`${props.className} py-1 px-5 rounded relative border my-2  text-center mx-auto`}
      >
        {props.children}
      </div>
    </>
  );
};

export default Alert;
