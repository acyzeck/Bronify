import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <section className="bg-zinc-900 ">
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
            <p className="text-sm font-medium text-purple-400">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">We can’t find that page</h1>
            <p className="mt-4 text-gray-400">Sorry, the page you are looking for doesn't exist or has been moved.</p>

            <div className="flex items-center mt-6 gap-x-3">
                <button className="cursor-pointer flex items-center justify-center w-1/2 px-5 py-2 text-sm transition-colors duration-200 border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-800 bg-gray-900 text-gray-200 border-gray-700" onClick={() => navigate(-1)}>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>Go back</span>
                </button>

                <button className="cursor-pointer w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto hover:bg-purple-500 bg-purple-600" onClick={() => navigate('/')}>
                    Take me home
                </button>
            </div>
        </div>
    </div>
</section>
  )
}

export default NotFound