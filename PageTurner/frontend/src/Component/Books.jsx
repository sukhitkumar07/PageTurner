import axios from "axios";
import { useEffect, useState } from "react";
const Books = () => {
  let [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("cant fetch data");
      });
  }, []);
  return (
    <div>
      {books.map((x) => {
        return (
          <table className="m-2 font-serif">
            <tr className="p-2 flex flex-row items-end ring-2 ring-blue-950 rounded-md">
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
                <p className="line-clamp-3">{x.descricption}</p>
              </td>
              <td className="w-28 ">
                <a
                  href={x.url}
                  target="_blank"
                  className="btn btn-primary relative bottom-6"
                >
                  View Books
                </a>
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default Books;
