'use client'

import { useTheme } from 'next-themes'

const ToggleButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 text-white dark:text-gray-800 px-8 py-2 rounded-lg"
    >
      Toggle Mode
    </button>
  )
}

export default ToggleButton
