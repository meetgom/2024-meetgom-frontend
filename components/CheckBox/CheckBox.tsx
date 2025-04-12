interface CheckboxProps {
  label: string
  checked: boolean
  onChange: () => void
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => (
  <label className="flex items-center gap-2 cursor-pointer w-fit">
    <div className="relative w-4 h-4">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-4 h-4 border border-gray-300 rounded peer-checked:bg-blue-500 transition-colors"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100">
        <div className="w-0.5 h-0.5 bg-white"></div>
      </div>
    </div>
    <span>{label}</span>
  </label>
)

export default Checkbox
