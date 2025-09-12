"use client"

import Link from 'next/link'
import { useState } from 'react'

const LinkButton = ({ href, children, className, onClick }: { href: string, children: React.ReactNode, className?: string, onClick?: () => void }) => {
  return (
    <Link href={href} className={`group max-xl:text-sm text-white relative uppercase font-light ${className}`} onClick={onClick}>
      {children}
      <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-center"></span>
    </Link>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className='hidden fixed top-0 left-0 w-full z-[59] lg:flex! bg-gradient-to-b from-black/75 via-black/60 text-white to-transparent justify-between items-center p-4'>
        <LinkButton href="/" className='text-xl!'>EB Agency</LinkButton>
        <div className='flex gap-8'>
          <LinkButton href="/biens">Biens</LinkButton>
          <LinkButton href="/qui-sommes-nous">à Propos</LinkButton>
          <LinkButton href="/services">Services</LinkButton>
          
        </div>
        <Link href="/contact" className='bg-primary text-white px-4 py-2 uppercase font-light'>Contact</Link>
      </nav>
      <div className={`lg:hidden! duration-200 transition-all fixed top-0 right-0 left-0 py-2 px-4 flex justify-between items-center w-full z-[50] ${isOpen ? 'bg-transparent' : 'bg-black/80 backdrop-blur-sm'}`}>
      {!isOpen && (
        <LinkButton href="/" className='text-xl!' onClick={() => setIsOpen(false)} >EB Agency</LinkButton>
      )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 z-50 flex flex-col justify-center items-center gap-1 group ml-auto"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>
      <aside
        className={`lg:hidden! text-white flex flex-col justify-between p-4 z-[49] fixed top-0 left-0 w-screen bg-black/92 backdrop-blur-sm overflow-hidden transition-all duration-500 ease-in-out 
                ${isOpen ? 'h-screen py-6' : 'h-0 py-0'}`}
      >
        <LinkButton href="/" className='text-xl! text-center pt-5 pb-12' onClick={() => setIsOpen(false)} >EB Agency</LinkButton>
        <div className='flex flex-col gap-4'>
          <LinkButton href="/biens" className="py-2" onClick={() => setIsOpen(false)} >Biens</LinkButton>
          <LinkButton href="/qui-sommes-nous" className="py-2" onClick={() => setIsOpen(false)} >à Propos</LinkButton>
          <LinkButton href="/services" className="py-2" onClick={() => setIsOpen(false)} >Services</LinkButton>
          
        </div>
        <Link href="/contact" className='bg-primary text-white mt-8 px-4 py-2 uppercase font-light' onClick={() => setIsOpen(false)} >Contact</Link>
      </aside>
    </>
  )
}
