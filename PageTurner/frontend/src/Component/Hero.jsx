import img from "../Images/Bookbg.jpg";
const Hero = () => {
  return (
    <div>
      <img src={img} alt="" className="w-full h-[550px] opacity-80" />
      <h1 className="font-bold font-sans text-center absolute top-10 left-[33%] text-blue-950 text-3xl">
        Welcome to PageTurner Application
      </h1>
      <h1 className="font-bold font-sans text-center absolute bottom-[480px] left-[30%] text-blue-950 text-3xl">
        Enjoy our abandoned collection of books
      </h1>
      <h1 className="font-bold font-sans absolute top-80 left-4 text-blue-950 text-7xl">
        “A reader lives a thousand lives before he dies , The man who never
        reads lives only one.”
      </h1>
    </div>
  );
};

export default Hero;
