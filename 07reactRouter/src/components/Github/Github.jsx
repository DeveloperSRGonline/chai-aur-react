import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData(); // Data is automatically injected here

  return (
    <div className="text-center m-4 text-white flex flex-col items-center justify-center gap-10 p-4 text-3xl mt-15">
      <img className="rounded-full border-4 gradient border-[#DB5746]" src={data?.avatar_url} alt="Git picture" width={200} />
      <h1 className="font-bold text-6xl text-[#DB5746]">{data?.login}</h1>
      <h1 className="font-bold text-3xl text-black">
        <span className="font-normal font-sans">Followers:</span>{" "}
        <span className="text-[#DB5746]">{data?.followers}</span>
      </h1>
    </div>
  );
};

export default Github;