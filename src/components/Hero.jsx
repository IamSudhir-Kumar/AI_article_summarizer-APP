import { AiFillGithub } from 'react-icons/ai';
import logo1 from '../assets/logo.jpg';

const logo2 = logo1;
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo2} alt="sumz_logo" className='object-contain rounded-full h-20 w-20' />
        <p className="font-bold text-2xl">Summarizer</p>
        <button
          type="button"
          onClick={() => window.open("https://github.com/IamSudhir-Kumar")}
          className="black_btn w-28 h-10 flex justify-center items-center space-x-2 hover:space-x-8 font-bold text-xl"
        ><AiFillGithub className='text-2xl'/>Github</button>
      </nav>

      <h1 className="head_text">
        Summarize articles with <br
          className="max-md:hidden" />
        <span className="trust_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Summize, an open source article summarizer that transforms lengthy articles into clear and concise
        summaries
      </h2>

    </header>
  )
}

export default Hero;
