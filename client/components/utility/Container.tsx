import React from 'react';
import { Iprops } from './../../utility/interfaces';

// interface Iprops extends React.PropsWithChildren {
//   className: any;
// }

const Container: React.FC<Iprops> = (props: any) => {
  return (
    <div className={props.className + ' mycontainer'}>{props.children}</div>
  );
};

export default Container;
