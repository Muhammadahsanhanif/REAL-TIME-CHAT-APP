import { Search, SearchIcon } from "lucide-react";
import Usersection from "./user";

function Usersidebar() {
    return (
        <div className="max-w-[20rem] w-full h-screen flex flex-col border-r-white/10">

            <h1 className="bg-black px-2 py-1 mx-3 rounded-lg mt-3 text-[#7480ff] text-xl font-semibold">GUP SHUP </h1>

        <div className="p-3">
            <label className="input input-bordered flex-item-center gap-2">
                <input type="text " class= "grow" placeholder="search"/>
                <SearchIcon/>
            </label>
        </div>

        <div className="h-full overflow-y-auto py-5">
            <Usersection/>
            <Usersection/>
            <Usersection/>
           
        </div>
        <div className="flex items-center justify-between px-3 py-2">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 ring-offset-2 w-10 rounded-full ring">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <button className="btn btn-primary btn-sm px-4">Logout</button>
    </div>
    </div>
    )
    
}

export default Usersidebar;