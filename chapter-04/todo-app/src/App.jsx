import { useState } from "react";
import Clock from "./components/Clock";

function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const AddToList = () => {
        list.push(item);
        setList([...list]);
    };

    const RemoveItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="mb-10 text-2xl">
                {item ? item : `React hook Todo App`}
            </h1>
            <h2 className="mb-10 text-2xl">{list.length}</h2>

            <ul>
                {list.length !== 0 ? (
                    list.map((elemnt, index) => {
                        return (
                            <div
                                key={index}
                                className="flex gap-2 align-middle items-center mb-3"
                            >
                                <li>{elemnt}</li>
                                <button
                                    onClick={() => {
                                        RemoveItem(index);
                                    }}
                                    className=" bg-slate-200 text-slate-900 py-2 px-5"
                                >
                                    Remove
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <li></li>
                )}
            </ul>

            <div className="">
                <input
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="Item"
                    className="bg-slate-100 text-lg py-2 px-4 border rounded border-gray-300 w-1/5 h-14"
                    type="text"
                    name=""
                    id=""
                />
                <button
                    onClick={AddToList}
                    className="ms-3 mt-4 bg-sky-700 text-white py-3 px-5 rounded uppercase font-bold leading-5 h-14"
                >
                    Add Item
                </button>
            </div>
            <div className="mt-8">
                <Clock local="bn-BD" />
            </div>
        </div>
    );
}

export default App;
