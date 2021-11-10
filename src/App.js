import NavBar from './NavBar';

export default function App() {
  return (
    <div className="min-h-screen m-auto bg-gray-50 text-gray-800 text-center">
      <header>
        <NavBar
          listStyle="bg-green-700 border-b-4 border-green-400 
                     flex justify-end items-center py-1 px-2 text-base
                     lg:text-lg lg:px-3
                     2xl:text-xl 2xl:px-4" 
          itemStyle="space-x-1 text-gray-50 hover:text-green-300" />
        <h1>Hi, I'm Seth,</h1>
        <p>a full-stack web developer!</p>
      </header>

      <main>
        Main body
      </main>
      
    </div>
  );
}