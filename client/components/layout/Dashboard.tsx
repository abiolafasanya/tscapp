import React, { useState } from 'react';
import Sidebar from '../utility/Sidebar';
import { FaBell, FaCaretDown, FaFacebookMessenger } from 'react-icons/fa';
import { sideBarMenu, sideFooter } from '../../data/index';
import { Iprops, Menu, SideMenu } from '../../utility/interfaces';
import { MdChat } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

export interface DashMenu extends SideMenu {
  header?: Menu[];
}

const Dashboard: React.FC<Iprops & DashMenu> = (props) => {
  const [open, setOpen] = useState(false);
  const [caret, setCaret] = useState(false);
  function toggle() {
    setOpen(!open);
  }
  return (
    <div>
      <div className="flex bg-[#eee]">
        <Sidebar
          footer={sideFooter}
          menu={sideBarMenu}
          className={`${
            open ? 'w-72' : 'w-20'
          } duration-300 fixed bg-white  h-full min-h-screen`}
          action={toggle}
        />
        <main className={`${open ? 'ml-72' : 'ml-20'} duration-300 w-full`}>
          <header className="flex w-full">
            <div className="w-50 ml-auto p-5 flex items-center space-x-5">
              <MdChat />
              <span className="relative rounded-full p-2 bg-white">
                {' '}
                <FaBell />
                <span className="absolute bg-red-500 text-red-50 text-[0.7rem] top-0 right-2 px-[0.05rem]">
                  1
                </span>
              </span>
              <h5>Abiola Fasanya</h5>
              {/* <Image src="" /> */}
              <span className="rounded-full px-3 py-2 border text-center bg-white">
                AF
              </span>
              <span className="relative z-50">
                <FaCaretDown
                  onMouseDown={() => setCaret(false)}
                  // onMouseEnter={() => setCaret(true)}
                  onKeyDown={() => setCaret(false)}
                  onBlur={() => setCaret(false)}
                  onClick={() => setCaret(!caret)}
                />
                {caret && (
                  <div className="absolute border bg-white w-48 rounded shadow-sm sm:-right-4 sm:top-8 md:top-8 md:right-0">
                    <ul onMouseLeave={() => setCaret(false)}>
                      {
                        // props.header !== undefined &&
                        props.header?.map((header, id) => (
                          <>
                            <Link href={header.link} className="text-sm">
                              <li
                                key={id}
                                className="px-5 py-2 hover:bg-gray-100"
                              >
                                {header.name}
                              </li>
                            </Link>
                            <hr />
                          </>
                        ))
                      }
                    </ul>
                  </div>
                )}
              </span>
            </div>
          </header>
          <section className="mx-auto">{props.children}</section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
