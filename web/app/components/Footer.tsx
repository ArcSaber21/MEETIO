import { Heart } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className="relative z-10 text-center py-6 text-xs text-zinc-500 bg-black border-t border-white/10">
      &copy; {new Date().getFullYear()} MEETIO
    </div>
  )
}

export default Footer
