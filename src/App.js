import NavBar from './NavBar';
import MainHeader from './MainHeader';
import ContactForm from './ContactForm';
import CardLeft from './CardLeft'
import CardRight from './CardRight';
import Pdf from './Resume.pdf';


export default function App() {
  return (
    <div className="min-h-screen m-auto bg-gray-100 text-gray-700 text-center 
                    typography md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">

      <header>
        <NavBar />
        <div className="my-4 md:flex md:justify-center md:items-center 
                        md:my-12 2xl:my-24">
          <div className="pt-4 md:border-r-4 md:border-green-400 md:w-6/12 
                          md:text-right md:py-12 2xl:py-24">
            <h1 className="name serif text-4xl
                           md:no-underline md:pr-10 md:text-5xl lg:text-6xl
                           xl:text-7xl 2xl:text-9xl">
              <strong>Hi, I'm Seth!</strong>
            </h1>
          </div>
          <div className="pt-1 md:w-6/12 md:text-left">
            <p className="text-xl md:pl-8 md:text-2xl lg:3xl 
                          xl:text-4xl 2xl:text-6xl">
              a full-stack web developer
            </p>
          </div>
        </div>
          <p>
            <a href={Pdf}
                className="rounded bg-green-400 hover:bg-green-300 focused 
                          font-bold py-1 px-4 md:py-2 md:px-6 xl:px-8 text-gray-800">
              Resumé
            </a>
          </p>
      </header>

      <main>
        <MainHeader>About</MainHeader>
        <div className="mt-12 mx-12 md:mx-16 xl:mx-24 text-left">
          <p>
            My two passions have always been music and programming.
            After 12 years of teaching, I'm transitioning to web development 
            as my career. I enjoy working in the full stack of
            web development and have most experience with Ruby on Rails and 
            React.
          </p>
          <p className="mt-8">
            Outside of work, I enjoy time with my wife and two
            cats and Husker games with friends. I also enjoy
            gaming&#8212;mostly indies, simulators, and the occasional
            RTS&#8212;and maintain a&nbsp; 
              <a href="https://www.youtube.com/moose2006lp" 
                 className="hover:text-gray-500 focused underline">
                YouTube channel
              </a> 
              &nbsp;recording tutorials and Let's Plays.
          </p>
          </div>

        <MainHeader>Projects</MainHeader>
        <div className="flex flex-col mt-12 xl:mt-24
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