import React, { useState } from 'react';
import { Iprops, SideMenu } from './../../utility/interfaces';
import { FaArrowCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar: React.FC<Iprops & SideMenu> = (props) => {
  const [open, setOpen] = useState(true);
  const { menu } = props;
  function toggleIcon(e: any) {
    setOpen(!open);
    e();
  }
  return (
    <div className={props.className}>
      <section className="relative">
        <header className="md:p-5 p-3">
          <h1 className={`font-semibold ${open ? 'text-2xl' : 'text-lg p-2'}`}>
            {open ? 'TSCAPP' : 'TA'}
          </h1>
          <button
            className="absolute right-[-15px] cursor-pointer"
            onClick={() => toggleIcon(props.action)}
          >
            {open ? (
              <FaArrowAltCircleLeft className="text-[28px] duration-500 transition-all" />
            ) : (
              <FaArrowCircleRight className="text-[28px] duration-500 transition-all" />
            )}
          </button>
        </header>
        <main>
          <ul className="p-5 flex flex-col space-y-5">
            {menu.map((menu, id) => (
              <Link href={menu.link} key={id}>
                <li className="flex space-x-4 items-center hover:bg-gray-300 p-2 rounded">
                  <menu.icon
                    className={`${open ? 'text-[20px]' : 'text-[28px]'}`}
                  />
                  {open && <span>{menu.name}</span>}
                </li>
              </Link>
            ))}
          </ul>
          <div className="border my-4"></div>
        </main>
        <footer className="md:p-5 p-3">Footer Area</footer>
      </section>
    </div>
  );
};

export default Sidebar;
