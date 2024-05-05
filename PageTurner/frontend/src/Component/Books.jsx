import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Books = () => {
  let [books, setBooks] = useState([]);
  let navigate = useNavigate();
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "b") {
      document.getElementById("ip").focus();
    }
  });

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
          <div>
            <div>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
