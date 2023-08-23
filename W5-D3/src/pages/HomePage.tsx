import Navbar from "../component/Navbar"
import Card from "./Card"

function HomePage() {
  return (
    <>
    <Navbar></Navbar>  
        <h1 className="flex text-4xl w-full justify-center h-92 items-center pt-6 mt-24 text-cyan-600">المعسكرات</h1> 
        <div className='flex justify-evenly w-full'>
          <a href="/home/details"><Card cardSrc="https://pbs.twimg.com/media/F2jQimBXAAEjBY0?format=jpg&name=small" cardTitle='تطوير مواقع الويب' ></Card></a>
          <a href="/home/details"><Card cardSrc="https://pbs.twimg.com/media/F2jQimBXAAEjBY0?format=jpg&name=small"cardTitle='تطوير مواقع الويب' ></Card></a>
          <a href="/home/details"><Card cardSrc="https://pbs.twimg.com/media/F2jQimBXAAEjBY0?format=jpg&name=small" cardTitle='تطوير مواقع الويب' ></Card></a>
        </div>
    </>
  )
}

export default HomePage