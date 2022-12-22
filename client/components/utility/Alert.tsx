import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Iprops } from './../../utility/interfaces';

const Alert: React.FC<Iprops> = (props) => {
  const [close, setClose] = useState<boolean>(false);
  function closeAlert() {
    // console.log(e.nativeEvent);
    // e.nativeEvent.path[2].style.display = 'none';
    setClose(true);
  }
  return (
    <>
      {!close && (
        <div
          className={`${props.className} py-1 px-5 rounded relative border my-2 text-center`}
        >
          {props.children}
          {props.type === true && (
            <button onClick={closeAlert}>
              <FaTimes className="absolute top-5 right-5" title="close alert" />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;
