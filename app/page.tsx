import Link from "next/link";
import modocss from "./page.module.css"
import NavBar from "@/components/navbar";
export default function Home() {
  console.log(modocss);
  let h = 1
  let b = 2
  console.log(`the sum is ${h+b}`) ;
  
  return (
    <>
    <NavBar />
    <Link href="/quote" className="text-3xl text-anees-200 sm:text-blue-300 md:text-green-300 lg:text-red-500 dark:bg-red-300 dark:text-white bg-yellow-200 block text-center font-bold underline">wanna see some motivated quote</Link>
    <Link href="/static" className="text-3xl text-anees-200 sm:text-blue-300 md:text-green-300 lg:text-red-500 dark:bg-red-300 dark:text-white bg-yellow-200 block text-center font-bold underline">wanna see some  quote from static rendering</Link>
    <Link href="/isr" className="text-3xl text-anees-200 sm:text-blue-300 md:text-green-300 lg:text-red-500 dark:bg-red-300 dark:text-white bg-yellow-200 block text-center font-bold underline">wanna see some  quote from ISR  rendering</Link>
    
   <h1 className="text-3xl text-anees-200 sm:text-blue-300 md:text-green-300 lg:text-red-300 dark:bg-red-300 dark:text-white bg-black font-bold underline" >hello world</h1>
   <h1 className="text-3xl text-laal-600 bg-black font-bold underline" >this is called red rang</h1>
   <h1 className="discord" >this is called paragraph </h1>
   <Link href="/notfoundpage ki jalki" className="text-3xl text-anees-200 sm:text-blue-300 md:text-green-300 lg:text-red-500 dark:bg-red-300 dark:text-white bg-yellow-200 block text-center font-bold underline">wanna see some magic 🪄</Link>
   </>
  );
}
