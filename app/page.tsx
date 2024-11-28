import { log } from "console";
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
   <h1 className="text-3xl text-anees-200 sm:text-blue-300 md:text-green-300 lg:text-red-300 dark:bg-red-300 dark:text-white bg-black font-bold underline" >hello world</h1>
   <h1 className="text-3xl text-laal-600 bg-black font-bold underline" >this is called red rang</h1>
   <h1 className="discord" >this is called paragraph </h1>
   </>
  );
}
