"use client";
export default function CustomButton() {
    return(
            <button className="bg-red-600 rounded-xl text-xl px-2 hover:bg-amber-700 duration-300" onClick={()=>console.log(`toto company`)}>Click here</button>
    );
}