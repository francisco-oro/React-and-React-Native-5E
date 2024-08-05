import { useEffect, useState } from "react"
import { GitHubUser } from "./GitHubUser"
import UserInfo from "./UserInfo";

const App = () => {
  const [user, setUser] = useState<GitHubUser>();
  const[isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);    
    fetch("https://api.github.com/users/francisco-oro")
      .then(res => res.json())
      .then((data: GitHubUser) => {
        setUser(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !user && <p>No user found.</p>}
      {user && <UserInfo user={user} />}
    </div>
  )
}

export default App