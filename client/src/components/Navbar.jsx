
export default function Navbar() {

    return (
        <nav className="w-full py-2 px-12 flex justify-between items-center">
            <h1 className="text-3xl font-bold border-2 border-brand-primary px-2 py-1 rounded-lg">
                pawsitive
            </h1>
            <div>
                Hello
            </div>
            <button className="text-lg font-bold border-2 bg-brand-primary px-2 py-1 rounded-lg text-brand-background">
                About 
            </button>
        </nav>
    )
}