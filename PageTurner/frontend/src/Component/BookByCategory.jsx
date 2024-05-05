import { useState } from "react";
const BookByCategory = () => {
  let [data, setdata] = useState([]);
  let search = () => {
    let name = document.getElementById("ip").value;
  };
  return (
    <div>
      <div>
        <tr className=" p-2 flex flex-row justify-center items-center rounded-md">
          <td>
            <input
              type="text"
              id="ip"
              placeholder="Enter ctrl + b to find book by category "
              className="w-[320px] h-9 mx-4 outline-none border-y-2 border-blue-950 rounded-lg px-4 "
            />
          </td>
          <td>
            <button
              onClick={search}
              className="btn bg-blue-950 text-amber-100 hover:text-amber-100 hover:bg-blue-800 font-medium"
            >
              Search
            </button>
          </td>
        </tr>
      </div>
      {data.map((x) => {
        return (
          <table className="m-2 font-serif">
            <tr className="p-2 flex flex-row items-end  hover:shadow-lg hover:shadow-gray-600 rounded-md">
              <td className="mr-6 ">
                <img
                  src={x.img_url}
                  alt=""
                  className="w-32 rounded-lg ring-2 ring-blue-950"
                />
              </td>
              <td className=" w-[412px] p-2 ">
                <h1>
                  <b>Name : </b> {x.name}
                </h1>
                <h1>
                  <b>Author : </b> {x.author}
                </h1>

                <h1>
                  <b>Category : </b> {x.category}
                </h1>
                <h1>
                  <b>price : </b> {x.price}
                </h1>
              </td>
              <td className=" w-[600px]">
                <h1 className="font-bold underline">Description : </h1>
                <p className="line-clamp-3">{x.description}</p>
              </td>
              <td className="w-28 ">
                <a
                  href={x.url}
                  target="_blank"
                  className="btn btn-info relative bottom-6"
                >
                  View Book
                </a>
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default BookByCategory;
