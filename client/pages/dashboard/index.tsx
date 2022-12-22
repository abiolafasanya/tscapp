import React, { useState, useEffect } from 'react';
import {
  FaSchool,
  FaUser,
  FaBell,
  FaTasks,
  FaInfoCircle,
} from 'react-icons/fa';
import { GoInfo } from 'react-icons/go';
import Dashboard from '../../components/layout/Dashboard';
import Container from '../../components/utility/Container';
import { sideBarMenu, sideFooter, headMenu } from './../../data/index';
import { MdArticle } from 'react-icons/md';
import Alert from '../../components/utility/Alert';

const index = () => {
  const [alert, setAlert] = useState<boolean>(false);

  useEffect(() => {
    setAlert(false);
    setTimeout(() => {
      setAlert(true);
    }, 5000);
  }, []);

  return (
    <Dashboard menu={sideBarMenu} footer={sideFooter} header={headMenu}>
      {alert && (
        <Alert
          type={true}
          className="md:max-w-5xl mx-auto bg-blue-300 border border-blue-500 text-blue-800"
        >
          <h1 className="text-lg font-bold text-center my-2 flex items-center justify-center">
            <FaInfoCircle className="mr-2" /> Announcement
          </h1>
          <p className="text-base py-3">
            A new Assignment has been droped on the portal kindly visit the
            assignment area to find your course assignment
          </p>
        </Alert>
      )}
      <Container className="px-5 py-1">
        <h2 className="text-2xl font-semibold py-4">Dashboard</h2>
        <section className="flex md:flex-row flex-col">
          <div className="card flex space-x-4 items-center p-5 rounded border">
            <FaSchool className="text-[48px] text-gray-800" />
            <div>
              <h5>Total courses</h5>
              <h2 className="text-2xl font-bold rounded-full p-1 text-center mx-auto border-gray-800 border-2 w-[48px] border-dark">
                20
              </h2>
            </div>
          </div>
          <div className="card flex space-x-4 items-center p-5 rounded border">
            <MdArticle className="text-[48px] text-gray-800" />
            <div>
              <h5>Total courses</h5>
              <h2 className="text-2xl font-bold rounded-full p-1 text-center mx-auto border-gray-800 border-2 w-[48px] border-dark">
                20
              </h2>
            </div>
          </div>
          <div className="card flex space-x-4 items-center p-5 rounded border">
            <FaTasks className="text-[48px] text-gray-800" />
            <div>
              <h5>Total Tasks</h5>
              <h2 className="text-2xl font-bold rounded-full p-1 text-center mx-auto border-gray-800 border-2 w-[48px] border-dark">
                20
              </h2>
            </div>
          </div>
          <div className="card flex space-x-4 items-center p-5 rounded border">
            <GoInfo className="text-[48px] text-gray-800" />
            <div>
              <h5>Announcement</h5>
              <h2 className="text-2xl font-bold rounded-full p-1 text-center mx-auto border-gray-800 border-2 w-[48px] border-dark">
                20
              </h2>
            </div>
          </div>
        </section>
      </Container>
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-5 p-5">
        <div className="shadow-md bg-white rounded p-5">
          <h1 className="text-2xl">Title of info</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quas,
            iure unde reprehenderit quod placeat assumenda? Rerum ea accusamus
            unde.
          </p>
        </div>
        <div className="shadow-md bg-white rounded p-5">
          <h1 className="text-2xl">Title of info</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quas,
            iure unde reprehenderit quod placeat assumenda? Rerum ea accusamus
            unde.
          </p>
        </div>
        <div className="shadow-md bg-white rounded p-5">
          <h1 className="text-2xl">Title of info</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quas,
            iure unde reprehenderit quod placeat assumenda? Rerum ea accusamus
            unde.
          </p>
        </div>
        <div className="shadow-md bg-white rounded p-5">
          <h1 className="text-2xl">Title of info</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quas,
            iure unde reprehenderit quod placeat assumenda? Rerum ea accusamus
            unde.
          </p>
        </div>
        <div className="shadow-md bg-white rounded p-5">
          <h1 className="text-2xl">Title of info</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quas,
            iure unde reprehenderit quod placeat assumenda? Rerum ea accusamus
            unde.
          </p>
        </div>
        <div className="shadow-md bg-white rounded p-5">
          <h1 className="text-2xl">Title of info</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quas,
            iure unde reprehenderit quod placeat assumenda? Rerum ea accusamus
            unde.
          </p>
        </div>
        <div className="shadow-md bg-white rounded p-5">
          <h1 className="text-2xl">Title of info</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quas,
            iure unde reprehenderit quod placeat assumenda? Rerum ea accusamus
            unde.
          </p>
        </div>
      </Container>
    </Dashboard>
  );
};

export default index;
