'use client'
 
import { log } from 'console'
import { usePathname } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const pathname = usePathname()
  console.log(pathname) ; 
  return <p>Current pathname: {pathname}</p>
}