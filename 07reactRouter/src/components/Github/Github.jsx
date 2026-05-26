import { useEffect, useState } from "react";

const Github = () => {
    const [data, setData] = useState(null);

    // mujhe pata hai ki jab bhi component load ho tab kuchh karna hai toh uesEffect ka use karna padega
    useEffect(()=>{
        fetch('https://api.github.com/users/DeveloperSRGonline')
        .then(res => res.json())
        .then(data => {
            console.log(data.followers);
            setData(data)
        })
    },[])
  return (
    <div className="text-center m-4 text-white flex flex-col items-center justify-center gap-10 p-4 text-3xl mt-15">
      <img className="rounded-full border-4 gradient border-[#DB5746]" src={data?.avatar_url} alt="Git picture" width={200} />
      <h1 className="font-bold text-6xl text-[#DB5746]">{data ? data.login : 'Loading...'}</h1>
      <h1 className="font-bold text-3xl text-black"><span className="font-normal font-sans">Followers:</span> <span className="text-[#DB5746]">{data ? data.followers : 'Loading...'}</span></h1>
    </div>
  );
};

export default Github;
