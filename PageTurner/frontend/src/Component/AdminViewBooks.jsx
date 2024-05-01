import axios from "axios";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
const AdminViewBook = () => {
  let [books, setBooks] = useState([]);
  let [force, setForce] = useState(true);
  let data = JSON.parse(localStorage.getItem("Admin"));
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/books/${data.id}`)
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("hii");
      });
  }, [force]);
  let del = (id) => {
    axios
      .delete(`http://localhost:8080/books/${id}`)
      .then((res) => {
        setForce(!false);
      })
      .catch((err) => {});
  };
  let edt = (id) => {
    navigate(`/adminHome/editbook/${id}`);
  };
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
                <button
                  className="btn btn-primary relative bottom-6"
                  onClick={() => {
                    edt(x.id);
                  }}
                >
                  <EditIcon />
                </button>
                <button
                  href={x.url}
                  target="_blank"
                  className="btn btn-primary relative bottom-6"
                  onClick={() => {
                    del(x.id);
                  }}
                >
                  <DeleteForeverIcon />
                </button>
              </td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export default AdminViewBook;
