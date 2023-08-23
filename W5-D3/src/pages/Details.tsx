import Navbar from "../component/Navbar"

function Details() {
    return(
    <>
    <Navbar></Navbar>  
        <h1 className="flex text-4xl w-full justify-center h-92 items-center pt-6 pt-6 mt-24 text-cyan-600">تفاصيل المعسكر</h1>
        <div className="w-full h-80 bg-slate-100 mt-5 flex">
            <img src="https://tuwaiq.edu.sa/api/images/pmffdcyd.rdm.jpg?h=500" className="h-full"></img>
            <div className="ml-20 mt-10 flex flex-col">
                <h1 className="text-2xl">تطوير مواقع الويب</h1>
                <p className="text-xl w-4/5 mt-10">يمكنك هذا المعسكر من تطوير وبناء تطبيقات ويب تفاعلية، باستخدام لغة Java تحت إطار Spring boot، حيث تبدأ رحلتك بتعلم أساسيات لغة Java.</p>
                <a href="/signIn" className="text-lg text-teal-500 underline mt-5">التسجيل</a>
            </div>
        </div>
    </>
    )
}

export default Details