import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";

const BookModal = ({ item, onClose }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 bottom-0 z-50 flex justify-center items-center w-full" onClick={onClose}>
      <div onClick={(event) => event.stopPropagation()} className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative">
        <AiOutlineClose className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer" onClick={onClose} />
        <div className="flex justify-start flex-col gap-3">
          <h2 className="text-white bg-red-300 rounded-lg px-3 py-2 text-sm w-[10%]">{item.publishYear}</h2>
          <h4 className="my-2 text-gray-500">{item._id}</h4>
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BsInfoCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{item.author}</h2>
        </div>
        <p className="mt-4 font-semibold">Anything You want to show</p>
        <p className="my-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia recusandae nihil iste provident nesciunt quibusdam labore porro nostrum amet facilis, accusantium dolorum qui veritatis hic ratione dolor tenetur possimus impedit
          illum molestiae. Reprehenderit, voluptates? Sint placeat delectus excepturi enim et.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
