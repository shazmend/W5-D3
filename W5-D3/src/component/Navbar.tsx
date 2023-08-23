
function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-slate-200 w-full justify-center items-center ">
        <div><img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt=""/></div>
        <ul className="flex gap-5 text-lg ">
            <li><a href="/" className="hover:text-cyan-600">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-600">About</a></li>
            <li><a href="#" className="hover:text-cyan-600">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar