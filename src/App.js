import NavBar from './NavBar';
import MainHeader from './MainHeader';
import ContactForm from './ContactForm';
import Card from './Card';

export default function App() {
  return (
    <div className="min-h-screen m-auto bg-gray-50
                  text-gray-700 text-center">

      <header>
        <NavBar itemStyle="text-gray-50 hover:text-green-200" />
        
        <div className="my-4 md:flex md:justify-center md:items-center 
                        md:my-12 2xl:my-12">
          <div className="pt-4 md:border-r-4 md:border-green-400 md:w-6/12 
                          md:text-right md:py-12 2xl:py-16">
            <h1 className="name text-4xl
                           md:no-underline md:text-5xl md:pr-10
                           xl:text-6xl">
              <strong>Hi, I'm Seth!</strong>
            </h1>
          </div>
          <div className="pt-1 md:w-6/12 md:text-left">
            <p className="text-xl md:pl-8 md:text-2xl xl:text-3xl">
              <em>a full-stack web developer</em>
            </p>
          </div>
        </div>
          <p className="md:text-lg xl:text-xl">
            <a href="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing"
                className="py-0.5 px-4 md:px-6 xl:px-8 rounded bg-pink-100 border-4 
                         border-pink-700 border-double hover:bg-pink-200">
              View my resume!
            </a>
          </p>
      </header>

      <main>
        <MainHeader>About Me</MainHeader>
          <p className="mx-12 text-left">
            After a decade of teaching music, I'm following my other lifelong 
            passion of programming! I enjoy working in the full stack of
            web development and have most experience with Ruby on Rails and 
            React. I welcome all professional opportunities and challenges!
          </p>

        <MainHeader>Projects</MainHeader>
        <div className="flex flex-row flex-wrap gap-y-12 gap-x-12 px-12">
          <Card
            image="blog.png"
            alt="Blog project"
            summary="A recreation of my wife's blog"
            tech="Ruby on Rails, CSS/SASS, Authentication and 
                  Authorization, AWS Image Hosting, SendGrid Mailing, Faker Gem"
            pageUrl="https://www.hannahbauer.me"
            codeUrl="https://github.com/sethstrouf/blog">
            Blog
          </Card>

          <Card
            image=""
            alt="Weather project"
            summary="A weather app using an API"
            tech="CSS, API, JSON"
            pageUrl="https://www.hannahbauer.me"
            codeUrl="https://github.com/sethstrouf/blog">
            Weather API
          </Card>

          <Card
            image="memorycards.png"
            alt="Memory cards project"
            summary="A memory game!"
            tech="React, Vanilla CSS, Vanilla JavaScript"
            pageUrl="https://sethstrouf.github.io/memory-cards/"
            codeUrl="https://github.com/sethstrouf/memory-cards">
            Memory Cards
          </Card>

          <Card
            image="calculator.png"
            alt="Calculator project"
            summary="One of my first JS projects"
            tech="Vanilla CSS, Vanilla JavaScript"
            pageUrl="https://sethstrouf.github.io/calculator/"
            codeUrl="https://github.com/sethstrouf/calculator">
            Calculator
          </Card>

          <Card
            image="etchasketch.png"
            alt="Etch a sketch project"
            summary="Customizable grid size and colors"
            tech="Vanilla CSS, Vanilla JavaScript"
            pageUrl="https://sethstrouf.github.io/etch-a-sketch/"
            codeUrl="https://github.com/sethstrouf/etch-a-sketch">
            Etch-A-Sketch
          </Card>

          <Card
            image="rps.png"
            alt="Rock, Paper, Scissors project"
            summary="You vs. the computer"
            tech="Vanilla CSS, Vanilla JavaScript"
            pageUrl="https://sethstrouf.github.io/rock-paper-scissors/"
            codeUrl="https://github.com/sethstrouf/rock-paper-scissors">
            Rock Paper Scissors
          </Card>
        </div>

        <MainHeader>Contact Me</MainHeader>
          <ContactForm />
        </main>
    </div>
  );
}