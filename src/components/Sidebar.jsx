import { ChevronFirst } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
            <div className="p-4 pb-2 flex justify-between items-center">
                <img src="public/vite.svg" className="w-32" alt="" />    
                <button>
                    <ChevronFirst/>
                </button>
            </div>
        </nav>
    </aside>
  )
}