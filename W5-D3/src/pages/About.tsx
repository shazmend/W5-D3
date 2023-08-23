import Navbar from '../component/Navbar'

function About() {
  return (
    <>
    <Navbar></Navbar>  
    <h1 className="flex text-4xl w-full justify-center h-92 items-center pt-6">From About</h1> 
    <h1 className="flex text-4xl w-full justify-center h-92 items-center pt-6 text-teal-800 underline"><a href='/about/info'>Info</a></h1>
    </>
  )
}

export default About