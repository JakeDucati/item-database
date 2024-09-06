import Image from "next/image";

function itemWindow() {
    
}

const ListItem: React.FC<{ itemId: string; itemName: string }> = ({ itemId, itemName }) => {
    return (
        <div onClick={itemWindow(itemId)} className="flex justify-between items-center p-2 hover:bg-slate-800 duration-200 rounded cursor-pointer">
            <div className="flex items-center">
                <Image src={"/thumbs/" + {itemId}} width={40} height={40} alt="Thumbnail" className="rounded-full mr-4" />
                <div>{itemName}</div>
            </div>
            <button>
                <span className="material-symbols-outlined">delete</span>
            </button>
        </div>
    );
};


// page
export default function Home() {
    return (
        <div id="app" className="h-screen flex flex-col">
            <div className="p-6 mt-4 ml-4 mr-4 rounded-xl bg-slate-950">
                <h1 className="text-2xl">Stuff-Base</h1>
            </div>
            <div className="flex-grow p-6 m-4 rounded-xl bg-slate-950 flex flex-col overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl">Stuff</h2>
                    <div className="flex items-center">
                        <input type="text" id="searchBox" placeholder="Search" className="outline-none bg-transparent border-b-2 border-slate-50" />
                        <button className="text-6xl ml-8">+</button>
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto flex flex-col">
                    <ListItem itemId="73786325786" itemName="Fridge" />
                </div>
            </div>
        </div>
    );
}
