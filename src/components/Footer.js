const navigation = {
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sethstrouf',
      icon: () => (
        <i className="fa-brands fa-linkedin text-xl"></i>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/sethstrouf?tab=repositories',
      icon: () => (
        <i className="fa-brands fa-github text-xl"></i>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/moose2006lp',
      icon: () => (
        <i className="fa-brands fa-youtube text-xl"></i>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl overflow-hidden lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-6 mb-2 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Seth Strouf
        </p>
      </div>
    </footer>
  )
}
