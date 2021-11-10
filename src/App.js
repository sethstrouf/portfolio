import NavBar from './NavBar';

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
          <h1 className="pt-4 text-4xl
                         md:p-8 md:my-8 md:text-5xl md:border-r-4 md:border-green-400
                         xl:text-6xl"><strong>Hi, I'm Seth!</strong></h1>
            <p className="pt-1 text-xl
                          md:p-8 md:text-2xl
                          xl:text-3xl"><em>a full-stack web developer</em></p>
        </div>
{/* ADD BUTTON STYLING?? */}
            <p className="pt-4 underline hover:text-gray-600
                          md:text-lg 
                          xl:text-xl">
              <a href="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing">
                View my resume
              </a>
            </p>
      </header>

      <main className="pt-6">
        Main body
      </main>
      
    </div>
  );
}