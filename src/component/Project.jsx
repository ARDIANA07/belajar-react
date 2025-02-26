import '../App.css';
const Project = () => {
    return (
    <div>
        <h1 className="text-3xl pt-3 font-serif underline">My Project</h1>
        <section className="py-5 px-4">
            <div className="grid grid-cols-3 gap-4">
                <div className="card">
                    <div className="card-body shadow-lg ">
                        <h2 className="text-2xl text-purple-900">Online Store</h2>
                    </div>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, laudantium sed odit, soluta consectetur veniam asperiores doloremque consequuntur assumenda possimus iusto nesciunt hic quos temporibus harum minus dolorum est beatae inventore quasi? Repellat, dolorum voluptatem, quaerat impedit explicabo maxime enim cupiditate pariatur illum nam accusantium aliquid quisquam. Eos, excepturi quos!</p>
                    <button type='button' className='bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-cyan-500 text-white p-2 rounded my-2'>Read More</button>
                </div>
                <div className="card ">
                    <div className="card-body shadow-lg">
                        <h2 className="text-2xl text-purple-900">E-Learning</h2>
                    </div>
                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, laudantium sed odit, soluta consectetur veniam asperiores doloremque consequuntur assumenda possimus iusto nesciunt hic quos temporibus harum minus dolorum est beatae inventore quasi? Repellat, dolorum voluptatem, quaerat impedit explicabo maxime enim cupiditate pariatur illum nam accusantium aliquid quisquam. Eos, excepturi quos!</p>
                    <button type='button' className='bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-cyan-500 text-white p-2 rounded my-2'>Read More</button>
                    </div>
                <div className="card">
                    <div className="card-body shadow-lg">
                        <h2 className="text-2xl text-purple-900">Sistem Pendukung Keputusan</h2>
                    </div>
                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, laudantium sed odit, soluta consectetur veniam asperiores doloremque consequuntur assumenda possimus iusto nesciunt hic quos temporibus harum minus dolorum est beatae inventore quasi? Repellat, dolorum voluptatem, quaerat impedit explicabo maxime enim cupiditate pariatur illum nam accusantium aliquid quisquam. Eos, excepturi quos!</p>
                    <button type='button' className='bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-cyan-500 text-white p-2 rounded my-2'>Read More</button>
                    </div>
            </div>
        </section>
        <section >
        <div className="px-6">
            <h1 className="text-3xl pb-5 font-serif">My Skill</h1>
                <marquee behavior="scroll" direction="">
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-white hover:bg-gradient-to-l to-cyan-500 text-red-500 p-2 rounded-xl w-fit mx-5">
                        Laravel
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-red-500 hover:bg-gradient-to-l to-cyan-500 text-white p-2 rounded-xl w-fit mx-5">
                        CodeIgniter 3
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-cyan-400 text-green-700 p-2 rounded-xl w-fit mx-5">
                        Vue Js
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-cyan-400 text-white p-2 rounded-xl w-fit mx-5">
                        React
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-slate-50 text-blue-700 p-2 rounded-xl w-fit mx-5">
                        Go-Lang
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-white hover:bg-gradient-to-l to-slate-50 text-black p-2 rounded-xl w-fit mx-5">
                        Git
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-slate-50 text-black p-2 rounded-xl w-fit mx-5">
                        MySQL
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-slate-50 text-black p-2 rounded-xl w-fit mx-5">
                        MongoDB
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-orange-500 text-white p-2 rounded-xl w-fit mx-5">
                        Bootstraps
                    </span>
                    <span className="text-3xl pt-3 font-serif bg-gradient-to-r from-indigo-500 hover:text-black hover:bg-gradient-to-l to-orange-500 text-white p-2 rounded-xl w-fit mx-5">
                        Tailwind CSS
                    </span>
                </marquee>
            </div>
        </section>
    </div>
  )
}

export default Project