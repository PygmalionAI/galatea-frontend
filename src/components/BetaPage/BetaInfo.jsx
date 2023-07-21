import { motion } from 'framer-motion';
import { styles } from '../../styles';
import firebase from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';

const BetaInfo = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[25%] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#D021A1]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-ga-white`}>Welcome</h1>
          <p className={`${styles.heroSubText} mt-2 text-ga-white-darker`}>Your account has been created successfully. <br className="sm:block hidden"/> To participate in our closed beta program, <br className="sm:block hidden"/> please join the PygmalionAI <span className="text-[#1A78D6]"><a href="https://discord.gg/pygmalionai" target="_blank" className="underline-animation after:bg-blue-500">Discord.</a></span> <br className="sm:block hidden"/> <br className="sm:block hidden"/>Thank you!</p>
        </div>
      </div>
    </section>
  )
}

export default BetaInfo