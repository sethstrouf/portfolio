import WeatherScreenshot from "../assets/weather.png"
import MemoryCardsScreenshot from "../assets/memorycards.png"
import CalculatorScreenshot from "../assets/calculator.png"

const projects = [
  {
    title: 'Weather App',
    href: 'https://sethstrouf.github.io/weather/',
    description: 'React, TailwindCSS, API from weatherapi.com',
    imageUrl: WeatherScreenshot,
    viewButton: () => (
      <div className="mt-6 mb-8">
        <a
          href="https://sethstrouf.github.io/weather/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-l-lg bg-cyan-600 border-r-2 border-cyan-700 px-2 py-0.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-cyan-600 hover:bg-cyan-700 hover:ring-cyan-700"
        >
          View Site
        </a>
        <a
          href="https://github.com/sethstrouf/weather"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-r-lg bg-cyan-600 px-2 pb-1 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-cyan-600 hover:bg-cyan-700 hover:ring-cyan-700"
        >
          <i className="fa-brands fa-github text-xl"></i>
        </a>
      </div>
    ),
  },
  {
    title: 'Memory Cards',
    href: 'https://sethstrouf.github.io/memory-cards/',
    description: 'React, Vanilla CSS',
    imageUrl: MemoryCardsScreenshot,
    viewButton: () => (
      <div className="mt-6 mb-8">
        <a
          href="https://sethstrouf.github.io/memory-cards/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-l-lg bg-cyan-600 border-r-2 border-cyan-700 px-2 py-0.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-cyan-600 hover:bg-cyan-700 hover:ring-cyan-700"
        >
          View Site
        </a>
        <a
          href="https://github.com/sethstrouf/memory-cards"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-r-lg bg-cyan-600 px-2 pb-1 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-cyan-600 hover:bg-cyan-700 hover:ring-cyan-700"
        >
          <i className="fa-brands fa-github text-xl"></i>
        </a>
      </div>
    ),
  },
  {
    title: 'Calculator',
    href: 'https://sethstrouf.github.io/calculator/',
    description: 'Vanilla Javascript, Vanilla CSS',
    imageUrl: CalculatorScreenshot,
    viewButton: () => (
      <div className="mt-6 mb-8">
        <a
          href="https://sethstrouf.github.io/calculator/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-l-lg bg-cyan-600 border-r-2 border-cyan-700 px-2 py-0.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-cyan-600 hover:bg-cyan-700 hover:ring-cyan-700"
        >
          View Site
        </a>
        <a
          href="https://github.com/sethstrouf/calculator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-r-lg bg-cyan-600 px-2 pb-1 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-cyan-600 hover:bg-cyan-700 hover:ring-cyan-700"
        >
          <i className="fa-brands fa-github text-xl"></i>
        </a>
      </div>
    ),
  },
]

export default function ThreeColumnCard() {
  return (
    <div id="other-projects" className="relative bg-gray-900 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-gray-800 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Other Projects</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {projects.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-gray-50 p-6">
                <div className="flex-1">
                  <a href={post.href} className="mt-2 block" target="_blank" rel="noopener noreferrer">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex mx-auto items-center">
                  <post.viewButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
