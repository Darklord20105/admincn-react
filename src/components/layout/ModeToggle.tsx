import { useTheme } from '../ThemeProvider'
import { MoonStarIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ModeToggle = () => {
  const { toggleTheme } = useTheme()

  return (
    <Button variant='ghost' size='icon' className='relative' onClick={toggleTheme}>
      <MoonStarIcon className='scale-100 dark:scale-0' />
      <SunIcon className='absolute scale-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

export default ModeToggle