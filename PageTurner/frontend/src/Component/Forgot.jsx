const Forgot = () => {
  return (
    <div className="flex flex-col md:flex-row mx-1 my-10">
      <h1 className="absolute top-0 left-0 font-serif font-bold lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-yellow-400">
        Reset Password
      </h1>
      <div className="border-y-2 rounded-full mx-2 border-blue-950 px-4 py-2 w-full">
        <h1 className="inline font-bold font-serif text-yellow-400 ">
          Enter email to verify :{" "}
        </h1>
        <input
          type="email"
          required
          placeholder="abc@gmail.com"
          className="outline-none bg-transparent w-full md:w-1/2 font-serif text-blue-950"
        />{" "}
        <button className=" px-1 rounded-md text-blue-950 font-medium hover:bg-blue-950 hover:text-white font-serif">
          Verify
        </button>
      </div>
    </div>
  );
};

export default Forgot;
