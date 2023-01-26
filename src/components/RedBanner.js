export default function RedBanner({text}) {
  return (
    <div className="flex justify-center px-1 mt-1">
      <span className="text-sm rounded-full px-2 pt-px text-white bg-red-500 border-2 border-red-900">
        {text}
      </span>
    </div>
  )
}
