export default function Banner({text, color}) {
  return (
    <div className="flex justify-center px-1 mt-1">
      <span className={`text-sm rounded-full px-2 pb-0.5 text-white bg-${color}-500 border-2 border-${color}-900`}>
        {text}
      </span>
    </div>
  )
}
