import Massagebubble from "./massage";
import Usersection from "./user";
import { Send } from "lucide-react";

function Massage() {
    return (

        <div className="h-screen w-full flex flex-col">

            <div className=" py-3 border-b border-b-white/10">

                <Usersection />
            </div>

            <div className="h-full overflow-auto p-3">
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
                <Massagebubble />
            </div>

            <div className="w-full p-3 flex gap-2">
                <input type="text" placeholder="type here....."
                    className="input input-primary w-full" />

                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-600 transition">
                    <span>Send</span>
                    <Send size={15} />
                </button>


            </div>

        </div>
    )

}

export default Massage;