import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [complete, setComplete] = useState([]);

  const AddItem = () => {
    if (!item) return;
    const newItem = { item, packed: false, id: Date.now() };
    console.log(newItem);
    list.push(newItem);
    setList([...list]);
    setItem("");
  };

  const removeItem = (deleteId) => {
    setList((list) => list.filter((item) => item.id !== deleteId));
  };

  const toggleItemCompleteIncomplete = (itemId) => {
    const ci = list.find((p) => p.id == itemId);
    complete.push(ci);
    setComplete([...complete]);
    setList((list) => list.filter((item) => item.id !== itemId));
  };

  return (
    <div className="container">
      <h1 className="text-center pt-3 pb-3 text-2xl font-semibold">&nbsp;</h1>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white shadow rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Item
            </label>
            <input
              className="shadow appearance-none border placeholder:text-xs rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your item here"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="inline-flex rounded-sm items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            onClick={AddItem}
          >
            Add Item
          </button>
        </div>
        <div className="flex gap-4">
          {list.length != 0 ? (
            <div className="rounded overflow-hidden shadow-lg flex-initial basis-2/4 p-3 border border-gray-200">
              <div className="font-bold text-xl text-center mb-2 p-4">
                To Do List
              </div>

              <table className="table table-fixed w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {list.map((i, index) => {
                    return (
                      <tr className="text-gray-700" key={index}>
                        <td
                          className={`px-4 py-3 border ${
                            i.packed ? "text-green-800" : ""
                          }`}
                          key={i.id}
                        >
                          {i.packed && <span>&#9989; </span>}
                          {i.item}
                        </td>
                        <td className="px-4 py-3 border">
                          <div className="flex flex-row ">
                            <div className="px-2">
                              <button
                                onClick={() => {
                                  toggleItemCompleteIncomplete(i.id);
                                }}
                                className="items-center rounded-sm bg-green-600 p-2 font-sans text-xs text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                              >
                                {i.packed ? "Incomplete" : "Complete"}
                              </button>
                            </div>
                            <div className="px-2">
                              <button
                                className="items-center rounded-sm bg-red-600 p-2 font-sans text-xs text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true"
                                onClick={() => {
                                  removeItem(i.id);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
          {complete.length != 0 ? (
            <div className="rounded overflow-hidden shadow-lg flex-initial basis-2/4 p-3 border border-gray-200">
              <div className="font-bold text-xl text-center mb-2 p-4">
                Competed To Do List
              </div>

              <table className="table table-fixed w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {complete.map((i, index) => {
                    return (
                      <tr className="text-gray-700" key={index}>
                        <td
                          className={`px-4 py-3 border ${
                            i.packed ? "text-green-800" : ""
                          }`}
                          key={i.id}
                        >
                          {i.packed && <span>&#9989; </span>}
                          {i.item}
                        </td>
                        <td className="px-4 py-3 border">
                          <div className="flex flex-row ">
                            <div className="px-2">
                              <span>&#9989; </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
