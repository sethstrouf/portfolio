export default function LargeSplitButton({siteUrl, codeUrl}) {
  return (
    <div className='text-white font-bold'>
      <a
        href={siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-l-lg bg-cyan-600 hover:bg-cyan-700"
      >
        View Site
      </a>
      <div className="absolute inline-block">
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border-l border-cyan-700 rounded-r-lg bg-cyan-600 hover:bg-cyan-700"
        >
          <i className="fa-brands fa-github text-md"></i>
        </a>
      </div>
    </div>
  )
}
