import { useEffect, useState } from "react"
import { GitHubUser } from "./GitHubUser";
import api from "./api";
import UserInfo from "./UserInfo";

const App = () => {
  const [user, setUser] = useState<GitHubUser>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    api.getProfile("francisco-oro")
    .then((res) => setUser(res.data))
    .finally(() => setLoading(false));  
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !user && <p>User not found</p>}
      {user && <UserInfo user={user} />}
    </div>
  )
}

export default App