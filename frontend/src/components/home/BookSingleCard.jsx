import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div key={item._id} className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relativ hover:shadow-xl">
      <div className="flex justify-between gap-3">
        <h4 className="my-2 text-gray-500">{item._id}</h4>
        <h2 className="text-white bg-green-400 rounded-lg px-3 py-2 text-sm">{item.publishYear}</h2>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-green-300 text-2xl" />
        <h2 className="my-1">{item.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BsInfoCircle className="text-green-300 text-2xl" />
        <h2 className="my-1">{item.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow className="text-3xl text-blue-800 hover:text-black cursor-pointer" onClick={() => setShowModal(true)} />
        <Link to={`/books/details/${item._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${item._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && <BookModal item={item} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;
