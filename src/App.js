import NavBar from './NavBar';

export default function App() {
  return (
    <div className="min-h-screen m-auto bg-gray-50
                  text-gray-800 text-center">
      <header>
        <NavBar
          listStyle="bg-green-700 border-b-4 border-green-400 
                     flex justify-end items-center py-1 px-2 text-base
                     lg:text-lg lg:px-3
                     2xl:text-xl 2xl:px-4" 
          itemStyle="space-x-1 text-gray-50 hover:text-green-300" />
        <div className="p-10 bg-gradient-to-b from-green-300 via-indigo-200 to-gray-50">
          <h1 className="text-4xl"><strong>Hi, I'm Seth,</strong></h1>
          <p className="text-xl py-1"><em>a full-stack web developer!</em></p>
          <p className="pt-2 text-sm underline hover:text-gray-500">
            <a href="https://drive.google.com/file/d/1ge77AXAoAvWQNTWVLrRyusPm516Vs70E/view?usp=sharing">
              View my resume
            </a>
          </p>
        </div>
      </header>

      <main className="pt-6">
        Main body
      </main>
      
    </div>
  );
}