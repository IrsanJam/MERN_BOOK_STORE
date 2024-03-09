import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookCard from "../components/home/BookCard";
import BookTable from "../components/home/BookTable";
import { BASE_URL } from "../../config";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const baseUrl = BASE_URL;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-green-400 text-slate-50 font-semibold hover:bg-green-600 px-4 py-1 rounded-lg" onClick={() => setShowType("table")}>
          Table
        </button>
        <button className="bg-green-400 text-slate-50 font-semibold hover:bg-green-600 px-4 py-1 rounded-lg" onClick={() => setShowType("card")}>
          Card
        </button>
      </div>
      <div className="flex justify-between px-5 items-center">
        <div className="flex gap-4">
          <h1 className="text-3xl font-bold my-8">Books List</h1>
          <img width="48" height="48" src="https://img.icons8.com/doodle/48/books.png" alt="books" className="py-6" />
        </div>

        <Link to="/books/create">
          <MdOutlineAddBox className="text-green-500 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === "table" ? <BookTable books={books} /> : <BookCard books={books} />}
    </div>
  );
};

export default Home;
