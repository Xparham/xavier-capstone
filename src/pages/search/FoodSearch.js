import { MainNav, Footer } from "../../components/ui";

export const FoodSearch =() => (
   <>
      <MainNav/>
      <form className="flex justify-center items-center px-12 p-6 border-b-2 border-black bg-green-800 space-x-8">
         <p className="text-white"><strong>Look For Nearest Pantries, Banks, Organizations etc.</strong></p>
         <input className="w-72 py-2" type="text" placeholder="City, State, Zip-Code, etc."></input>
         <button className="border-2 border-white text-white p-2 cursor-pointer bg-green-600 hover:bg-blue-600">Search</button>
      </form>
      <Footer/>
   </>
)