import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from './../../components/utility/Sidebar';
import Container from '../../components/utility/Container';
import { FaBell } from 'react-icons/fa';
import { sideBarMenu } from '../../data/index';

const index = () => {
  const [open, setOpen] = useState(true);
  function toggle() {
    setOpen(!open);
  }
  return (
    <div>
      <div className="flex bg-[#eee]">
        <Sidebar
          menu={sideBarMenu}
          className={`${
            open ? 'w-72' : 'w-20'
          } duration-300 fixed bg-white  h-screen`}
          action={toggle}
        />
        <main className={`${open ? 'ml-72' : 'ml-20'} duration-300`}>
          <header className="flex w-100">
            <div className="w-50 ml-auto p-5 flex items-center space-x-5">
              <span className="rounded-full p-2 bg-white">
                {' '}
                <FaBell />
              </span>
              <h5>Abiola Fasanya</h5>
            </div>
          </header>
          <section className="">
            <Container className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>

              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
              <div className="shadow-md bg-white rounded p-5">
                <h1 className="text-2xl">Title of info</h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quas, iure unde reprehenderit quod placeat assumenda? Rerum ea
                  accusamus unde.
                </p>
              </div>
            </Container>
          </section>
        </main>
      </div>
    </div>
  );
};

export default index;
