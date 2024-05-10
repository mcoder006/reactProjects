import { useState } from "react";

interface UserData {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  followers: number;
  location: string;
  created_at: string;
  updated_at: string;
}

const ProfileFinder = () => {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<UserData[] | null>([]);

  async function handleUserData() {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`) 
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }

  const handleSubmit = () => {
    handleUserData();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#130f4e] text-white flex-col">
      <div className="h-fit w-[90vw] md:w-2/3 mx-auto flex justify-center items-center flex-col space-y-4">
        <div className="mb-4">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="p-2 outline-none text-black rounded-l "
            type="text"
            placeholder="Enter your GitHub username"
          />
          <button
            className="px-4 py-2 bg-green-500 rounded-r"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>

        {data.message === "Not Found" ? (
          "User Not Found"
        ) : loading ? (
          "Loading..."
        ) : (
          <ProfileData data={data} />
        )}
      </div>
    </div>
  );
};

export default ProfileFinder;


const ProfileData = ( { data } : UserData ) => {
    return (
      <div>
          <div className="flex flex-col space-y-4">
            <img
              className="h-12 mt-4 w-12 rounded-full block mx-auto"
              src={data.avatar_url}
              alt="Profile"
            />
            <h1>
              UserName :{" "}
              <a className="underline" href={data.html_url}>
                {data.login}
              </a>
            </h1>
            <h2>Name : {data.name}</h2>
            <h1>Company : {data.company}</h1>
            <h1>Followers : {data.followers}</h1>
            <h1>Location : {data.location}</h1>
            <h2>Joined at : {data.created_at}</h2>
            <h2>Updated at : {data.updated_at}</h2>
          </div>
      </div>
    );
}
