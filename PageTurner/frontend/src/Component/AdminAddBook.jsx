import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
const AdminAddBook = () => {
  let data = JSON.parse(localStorage.getItem("Admin"));
  let [name, setname] = useState("");
  let [author, setauthor] = useState("");
  let [category, setCategory] = useState("");
  let [description, setDescrition] = useState("");
  let [price, setprice] = useState("");
  let [isbn, setISBN] = useState("");
  let [img_url, setimageUrl] = useState("");
  let [url, setbookUrl] = useState("");
  let bookdata = {
    name,
    author,
    category,
    description,
    price,
    isbn,
    img_url,
    url,
  };
  let check = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/books/${data.id}`, bookdata)
      .then((res) => {
        alert("Book added");
      })
      .catch((err) => {
        alert("Can't Add book");
      });
  };
  return (
    <div className=" flex justify-center my-16">
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 items-center border-2 border-yellow-400 rounded-md px-4 py-4 text-center">
        <h1 className="font-bold font-serif text-blue-950">Add Book</h1>{" "}
        <hr className="bg-blue-950" />
        <form onSubmit={check}>
          <input
            type="text"
            placeholder="Enter Book Name"
            className=" px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Author Name"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={author}
            onChange={(e) => {
              setauthor(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Catagory"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Description"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={description}
            onChange={(e) => {
              setDescrition(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="number"
            placeholder="Enter price"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter ISBN NO."
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={isbn}
            onChange={(e) => {
              setISBN(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter book image url"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={img_url}
            onChange={(e) => {
              setimageUrl(e.target.value);
            }}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Enter Book Url"
            className="px-1 py-0.5 rounded-md my-1 w-full md:w-52 outline-none focus:outline-1 focus:outline-blue-950 placeholder:text-blue-950"
            required
            value={url}
            onChange={(e) => {
              setbookUrl(e.target.value);
            }}
          />{" "}
          <br />
          <button className="px-1 py-0.5 rounded-md text-blue-950 border-2 border-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif my-1">
            Register
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default AdminAddBook;
