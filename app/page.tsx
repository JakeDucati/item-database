import Image from "next/image";


// list item
function ListItem(itemId, itemName) {
    return ( // change color slightly when hovering
        <div className="flex justify-between">
            <div>
                <Image src={"/thumbs/" + {itemId}} width={40} height={40} alt="Image of {itemName}" className="rounded-full" />
                <div>{itemName}</div>
            </div>
            <button>
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
    );
}


// page
export default function Home() {
    return (
        <div id="app">
            <div className="header flex justify-between items-center p-6 m-4 rounded-xl bg-slate-950">
                <h1 className="text-2xl">Stuff-Base</h1>
                <div className="flex items-center">
                    <span>
                        <input type="text" id="searchBox" placeholder="Search" className="outline-none bg-transparent border-b-2 border-slate-50" />
                        <button className="-ml-6">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </span>
                    <button className="text-6xl ml-8">+</button>
                </div>
            </div>

            <div className="p-6 m-4 rounded-xl bg-slate-950">
                <h2 className="text-xl">Stuff</h2>
                <ListItem />
            </div>
        </div>
    );
}