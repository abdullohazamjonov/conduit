type ButtonProps = {
  label: string,
  variant?: string
}
export default function Button({ label, variant }: ButtonProps) {
  return (
    <button
      className={`${variant === "simple"
        ? "text-gray-400 rounded border border-gray-400 px-3 py-1"
        : "py-3 px-6 bg-green-500 text-white rounded"
        }`}>
      {label}
    </button>
  )
}