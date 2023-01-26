export default function EmeraldBanner({text}) {
  return (
    <div className="flex justify-center px-1 mt-1">
      <span className="text-sm rounded-full px-2 pt-px text-white bg-emerald-500 border-2 border-emerald-900">
        {text}
      </span>
    </div>
  )
}
