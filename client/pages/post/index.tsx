import React, { useContext, useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, ContentState } from 'draft-js';
import htmlToDrafts from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import Dashboard from '../../components/layout/Dashboard';
import Container from '../../components/utility/Container';
import { sideBarMenu, sideFooter } from '../../data/index';
import Axios from '../../api/axios';
import Link from 'next/link';

const htmlToDraft = typeof window === 'object' && require('html-to-draftjs');

const index = () => {
  const [id, setId] = useState<any>('');
  const [posts, setPosts] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  useEffect(() => {
    // let _id = window.location.pathname.split('/')[2];
    readPost();
    // eslint-disable-next-line
  }, []);

  async function readPost() {
    try {
      const { data, status } = await Axios.get('/posts');
      if (status === 404 || status === 400) {
        console.log('need work to fix this');
      }
      const serverData = data.post;
      setPosts(serverData);
      console.log(status, data.post);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dashboard menu={sideBarMenu} footer={sideFooter}>
      <Container className={'bg-[#eee] p-5 min-h-screen'}>
        <section className="p-5 max-w-6xl">
          {posts &&
            posts.map((post) => (
              <div className="card" key={post._id}>
                <h1 className="card-header text-2xl">{post?.title}</h1>
                <div className="card-body">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                <div className="card-footer">
                  <span className='block italic text-sm'>Posted by <b>{post.author.username}</b> on {new Date(post.createdAt).toLocaleString()}</span>
                  <Link
                    href={`/post/${post._id}`}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Read More...
                  </Link>
                  {/* <Link href={`/post/${post._id}`}>Edit</Link> */}
                </div>
              </div>
            ))}
        </section>
      </Container>
    </Dashboard>
  );
};

export default index;
