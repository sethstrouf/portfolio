import NavBar from './NavBar';
import MainHeader from './MainHeader';
import ContactForm from './ContactForm';

export default function App() {
  return (
    <div className="min-h-screen m-auto bg-gray-50
                  text-gray-800 text-center">
      <header>
        <NavBar
          listStyle="bg-green-700 border-b-4 border-green-400 
                     flex justify-end items-center py-1 px-2 text-base
                     md:text-lg md:px-3
                     xl:text-xl xl:px-4" 
          itemStyle="space-x-1 text-gray-50 hover:text-green-300" />
        <div className="md:flex md:justify-center md:items-center">
          <h1 className="name pt-4 text-4xl
                         md:p-8 md:my-8 md:no-underline md:text-5xl md:border-r-4 md:border-green-400
                         xl:text-6xl"><strong>Hi, I'm Seth!</strong></h1>
            <p className="pt-1 text-xl
                          md:p-8 md:text-2xl
                          xl:text-3xl"><em>a full-stack web developer</em></p>
        </div>
            <p className="pt-8
                          md:text-lg
                          xl:text-xl">
              <a href="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing"
                 className="py-1 px-6 rounded bg-pink-100 border-4 border-pink-700 border-double hover:bg-pink-200">
                View my resume!
              </a>
            </p>
      </header>

      <main className="pt-6">
        <MainHeader>About Me</MainHeader>
        <p className="mx-12 my-6 text-left">After 12 years of teaching music, I'm following my other lifelong 
          passion of programming! I enjoy working in the full stack of
          web development and have most experience with Ruby on Rails and 
          React. I welcome all professional opportunities and challenges!
        </p>

        <MainHeader>Projects</MainHeader>

        <MainHeader>Contact Me</MainHeader>
        <ContactForm />

        </main>
      
    </div>
  );
}