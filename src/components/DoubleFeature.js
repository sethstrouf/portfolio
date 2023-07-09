import SongsembleScreenshot from '../assets/songsemble.png'
import BlogScreenshot from '../assets/blogv2.png'
import RedBanner from './RedBanner'
import BlueBanner from './BlueBanner'
import IndigoBanner from './IndigoBanner'
import EmeraldBanner from './EmeraldBanner'
import LargeSplitButton from './LargeSplitButton'

export default function DoubleFeature() {
  return (
    <div className="relative overflow-hidden bg-gray-50 pt-16 pb-32">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div id="first-feature" className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  <a
                    href="https://www.songsemble.com/signin?email=guest_user@mail.com&password=testPassword123!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="serif hover:text-gray-700"
                  >
                    Songsemble
                  </a>
                </h2>
                <div className="mt-4 flex justify-center flex-wrap">
                  <RedBanner text="Rails" />
                  <BlueBanner text="React" />
                  <IndigoBanner text="Typescript" />
                  <EmeraldBanner text="RSpec" />
                </div>
                <p className="mt-4 text-lg text-gray-600">
                  A music library management application that allows users to connect with
                  colleagues to share libraries.
                </p>
                <div className='mt-8 mb-10 mr-12'>
                  <LargeSplitButton siteUrl={"https://www.songsemble.com/signin?email=guest_user@mail.com&password=testPassword123!"} codeUrl={"https://github.com/sethstrouf/music-library-api"} />
                </div>
                <div className="mt-4 border-t">
                  <p className='mt-4 text-base text-gray-500'>JWT Authentication, Zustand for state management, SSL with Cloudflare, Amazon S3 Storage, SendGrid Mailers, Github Actions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={SongsembleScreenshot}
                alt="Songsemble project"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="second-feature" className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  <a
                    href="https://www.hannahbauer.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="serif hover:text-gray-700"
                  >
                    Blog
                  </a>
                </h2>
                <div className="mt-4 flex justify-center flex-wrap">
                  <RedBanner text="Rails" />
                  <BlueBanner text="Svelte" />
                </div>
                <p className="mt-4 text-lg text-gray-600">
                  A blog originally made using Squarespace re-created using Svelte and Rails.
                </p>
                <div className='mt-8 mb-10 mr-12'>
                  <LargeSplitButton siteUrl={"https://www.hannahbauer.me"} codeUrl={"https://github.com/sethstrouf/blog-v2-backend"} />
                </div>
                <div className="mt-4 border-t">
                  <p className='mt-4 text-base text-gray-500'>Devise Authentication, SSL with Cloudflare, Amazon S3 Storage, Web Scraping</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={BlogScreenshot}
                alt="Blog project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
