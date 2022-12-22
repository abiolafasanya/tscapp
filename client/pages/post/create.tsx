import React, { useContext, useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Dashboard from '../../components/layout/Dashboard';
import Container from '../../components/utility/Container';
import { sideBarMenu, sideFooter } from '../../data/index';
import Axios from '../../api/axios';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { EditorProps } from 'react-draft-wysiwyg';
import { FaArrowRight } from 'react-icons/fa';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Alert from '../../components/utility/Alert';

const animatedComponents = makeAnimated();

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const index = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const [id, setId] = useState<any>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
  const [category, setCategory] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [saving, setSaving] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const optionsCat = [
    { value: 'announcement', label: 'Announcement' },
    { value: 'course', label: 'Course' },
    { value: 'general', label: 'General' },
  ];

  async function createPost(e: any) {
    e.preventDefault();
    console.log('access Token: ', localStorage.getItem('accessToken'));
    let formData = { title, content, tags, category };
    try {
      const { data, status } = await Axios.post('/post', formData);
      console.log(status, data);
      if (status === 400 || status === 401) {
        setSuccess(false);
        setError(true);
        setMessage(data.message);
        console.log(data.message);
      }
      if (status === 200 || status === 201) {
        setSuccess(data.success);
        setError(false);
        setMessage(data.message);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dashboard menu={sideBarMenu} footer={sideFooter}>
      <Container className={'bg-[#eee] p-5 min-h-screen'}>
        <h2 className="text-2xl">Post</h2>
        <div className="text-gray-500">
          <span>Create Post </span>
          <span>
            <FaArrowRight className="inline text-gray-500 text-xs" />{' '}
          </span>
          <span>Create Post </span>
        </div>

        <section className="p-5 max-w-6xl mt-4 bg-white rounded-sm shadow-sm border">
          {success && (
            <Alert className="bg-green-300 border-green-500 text-green-800">
              <p className="py-2 font-semibold">{message}</p>
            </Alert>
          )}
          <form onSubmit={createPost}>
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName border"
                editorClassName="editorClassName p-3"
                placeholder="Write something"
                onEditorStateChange={(newState) => {
                  setEditorState(newState);
                  setContent(
                    draftToHtml(convertToRaw(newState.getCurrentContent()))
                  );
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                inputId="category"
                defaultValue={[optionsCat[2]]}
                isMulti
                name="colors"
                onChange={(e) => setCategory(e.map((item) => item.value))}
                options={optionsCat}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tags">Tags</label>
              <CreatableSelect
                inputId="tags"
                isClearable
                isMulti
                onChange={(e) => setTags(e.map((item: any) => item.value))}
              />
            </div>
            <div className="form-group">
              <div className="flex items-center space-x-12">
                <div className="flex space-x-2 items-center">
                  <input type="checkbox" id="commenting" />
                  <label htmlFor="commenting">Commenting</label>
                </div>
                <div className="flex space-x-2 items-center">
                  <input type="checkbox" id="publish" />
                  <label htmlFor="publish">Publish</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button className="btn bg-blue-500 text-blue-50 hover:bg-blue-600">
                Create Post
              </button>
            </div>
          </form>
        </section>
      </Container>
    </Dashboard>
  );
};

export default index;
