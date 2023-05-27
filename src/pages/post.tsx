import { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { useRouter } from 'next/router';

const CreatePost = ({ isAuth }: { isAuth: boolean }) => {
  const [title, setTitle] = useState<string>('');
  const [postText, setPostText] = useState<string>('');

  const router = useRouter();

  const createPost = async () => {
    try {
      await addDoc(collection(db, 'posts'), {
        title: title,
        postText: postText,
        timestamp: serverTimestamp()
        // author: {
        //   username: auth.currentUser.displayName,
        //   id: auth.currentUser.uid
        // }
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     router.push('/login');
  //   }
  // }, [isAuth]);

  return (
    <div className="createPostPage pt-10 overflow-hidden">
      <div className="postContainer text-white border-[#66B2FF] bg-[#3E5060] max-w-[620px] m-auto border box-border shadow-md mb-10 rounded-[12px] p-10 pb-8">
        <h1 className='mb-5 text-2xl text-center'>今日はどんな日だった？</h1>
        <div className="inputPost mb-3">
          <div className='block text-sm font-medium text-white'>タイトル</div>
          <input
            className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none text-slate-700'
            type="text"
            placeholder="タイトルを記入"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputPost mb-5">
          <div className='block text-sm font-medium text-white'>投稿</div>
          <textarea
            className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none min-h-1/2 text-slate-700'
            placeholder="投稿内容を記入"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button className="inline-block postButton text-slate-700 py-3 px-5 bg-white rounded-[4px]" onClick={createPost}>
            投稿する
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
