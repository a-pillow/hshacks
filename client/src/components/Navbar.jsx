
export default function Navbar() {

    return (
        <nav className="w-full py-2 px-12 mb-6 flex justify-between items-center">
            <h1 className="text-3xl text-brand-primary font-bold border-2 border-brand-primary px-2 py-1 cursor-pointer hover:bg-brand-primary hover:text-brand-background hover:border-brand-primary hover:-translate-y-[2px] hover:drop-shadow-lg duration-150 rounded-lg">
                pawsitive
            </h1>
            <div className="text-brand-primary">
                <a className="px-4 py-1 mx-2 hover:border-brand-primary border-b-2 border-brand-background duration-150 cursor-pointer ">
                    Home
                </a>
                <a className="px-4 py-1 mx-2 hover:border-brand-primary border-b-2 border-brand-background duration-150 cursor-pointer ">
                    Help
                </a>
                <a className="px-4 py-1 mx-2 hover:border-brand-primary border-b-2 border-brand-background duration-150 cursor-pointer ">
                    Statistics
                </a>
            </div>
            <button className="text-lg font-bold border-2 bg-brand-primary px-4 py-1 rounded-lg hover:bg-brand-background hover:border-brand-background hover:-translate-y-[2px] hover:drop-shadow-lg hover:text-brand-primary duration-150  text-brand-background">
                About 
            </button>
        </nav>
    )
}