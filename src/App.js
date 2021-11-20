import NavBar from './NavBar';
import MainHeader from './MainHeader';
import ContactForm from './ContactForm';
import CardLeft from './CardLeft'
import CardRight from './CardRight';

export default function App() {
  return (
    <div className="min-h-screen m-auto bg-gray-100
                  text-gray-700 text-center typography">

      <header>
        <NavBar />
        
        <div className="my-4 md:flex md:justify-center md:items-center 
                        md:my-12 2xl:my-24">
          <div className="pt-4 md:border-r-4 md:border-green-400 md:w-6/12 
                          md:text-right md:py-12 2xl:py-16">
            <h1 className="name serif text-4xl
                           md:no-underline md:text-5xl md:pr-10
                           xl:text-7xl 2xl:text-9xl">
              <strong>Hi, I'm Seth!</strong>
            </h1>
          </div>
          <div className="pt-1 md:w-6/12 md:text-left">
            <p className="text-xl md:pl-8 md:text-2xl xl:text-4xl 2xl:text-6xl">
              a full-stack web developer
            </p>
          </div>
        </div>
          <p className="md:text-lg xl:text-xl">
            <a href="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing"
                className="py-1 px-4 rounded bg-green-400 hover:bg-green-300  
                          font-bold md:py-2 md:px-6 md:text-xl xl:px-8 2xl:text-3xl">
              Resumé
            </a>
          </p>
      </header>

      <main>
        <MainHeader>About</MainHeader>
        <div className="mx-12 text-left text-sm sm:text-base md:text-lg 
                    lg:text-xl xl:text-2xl 2xl:text-3xl">
          <p>
            My two passions have always been music and programming.
            After 12 years of teaching, I'm transitioning into web development 
            as my career. While I enjoy working in the full stack of
            web development, most of my experience is with Ruby on Rails and 
            React.
          </p>
          <p className="pt-8">
            Outside of work, I enjoy spending time with my wife and two
            cats and watching Husker games with friends. I also love playing
            video games including indies, simulators, and the occasional RTS. 
          </p>
          </div>

        <MainHeader>Projects</MainHeader>
        <div className="flex flex-row flex-wrap py-12 xl:py-24 
                        px-2 gap-y-24 xl:gap-y-36">

          <CardLeft
            image="blog.png"
            alt="Blog project"
            summary="Re-creation of a portfolio/blog built on SquareSpace"
            tech="Ruby on Rails, Authentication &amp; Authorization, AWS Image Hosting"
            pageUrl="https://www.hannahbauer.me"
            codeUrl="https://github.com/sethstrouf/blog"
            optUrl="www.hannahbauer.com">
            Blog
          </CardLeft>

{/*           <CardRight
            image=""
            alt="Weather project"
            summary="A weather app"
            tech="API, JSON"
            pageUrl="#"
            codeUrl="#">
            Weather (Coming Soon)
          </CardRight> */}

          <CardRight
            image="memorycards.png"
            alt="Memory cards project"
            summary="A memory game!"
            tech="React, Vanilla CSS, Vanilla JavaScript"
            pageUrl="https://sethstrouf.github.io/memory-cards/"
            codeUrl="https://github.com/sethstrouf/memory-cards">
            Memory Cards
          </CardRight>

          <CardLeft
            image="calculator.png"
            alt="Calculator project"
            summary="One of my first JS projects"
            tech="Vanilla CSS, Vanilla JavaScript"
            pageUrl="https://sethstrouf.github.io/calculator/"
            codeUrl="https://github.com/sethstrouf/calculator">
            Calculator
          </CardLeft>

          <CardRight
            image="etchasketch.png"
            alt="Etch a sketch project"
            summary="Customizable grid size and colors"
            tech="Vanilla CSS, Vanilla JavaScript"
            pageUrl="https://sethstrouf.github.io/etch-a-sketch/"
            codeUrl="https://github.com/sethstrouf/etch-a-sketch">
            Etch-A-Sketch
          </CardRight>

          <CardLeft
            image="rps.png"
            alt="Rock, Paper, Scissors project"
            summary="You vs. the computer"
            tech="Vanilla CSS, Vanilla JavaScript"
            pageUrl="https://sethstrouf.github.io/rock-paper-scissors/"
            codeUrl="https://github.com/sethstrouf/rock-paper-scissors">
            Rock Paper Scissors
          </CardLeft>
        </div>

        <MainHeader>Contact Me</MainHeader>
          <ContactForm />
        </main>

        <footer>
          <div className="bg-green-700 mt-12 text-gray-50 
                          border-t-4 border-green-400 py-1">
            <p>&copy;2021 Seth Strouf</p>
          </div>
        </footer>
    </div>
  );
}