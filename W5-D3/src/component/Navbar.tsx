
function Navbar() {
  return (
    <nav className="flex justify-around p-4 bg-slate-200">
        <div><img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt=""/></div>
        <ul className="flex">
            <li>Hoome</li>
            <li>Pages</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar