
function Navbar() {
  return (
    <nav className="flex justify-between p-4 justify-center items-center bg-violet-800 ">
        <div><img className="w-60 pl-5" src="https://tuwaiq.edu.sa/img/logos/logo.svg" alt=""/></div>
        <ul className="flex gap-12 text-lg text-white pr-8 flex-row-reverse">
            <li><a href="/" className="hover:text-cyan-600">الرئيسية</a></li>
            <li><a href="/signIn" className="hover:text-cyan-600">التسجيل</a></li>
        </ul>
    </nav>
  )
}

export default Navbar