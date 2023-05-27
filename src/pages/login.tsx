import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../services/firebase';
import { VFC } from 'react';
import { useRouter } from 'next/router';


const Login: VFC<{ setIsAuth: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsAuth }) => {
  const router = useRouter();

  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider)
      .then((result) => {
        // ローカルストレージに保存をする→これをすることでリロードのしても情報を保持することができる
        localStorage.setItem('isAuth', 'true');
        // App.jsで立てたisAuthがtrueになり認証されたことになる
        setIsAuth(true);
        // ログイン後にTOPへリダイレクトする
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col z-10 text-white mb-3">
      <p className='text-center py-5'>ログインして始める</p>
      <button onClick={loginInWithGoogle} className='py-5 text-white'><span className='bg-[#3E5060] inline-block backdrop-blur py-3 px-8 rounded-[5px]'>Googleでログイン</span></button>
    </div>
  );
};

export default Login;
