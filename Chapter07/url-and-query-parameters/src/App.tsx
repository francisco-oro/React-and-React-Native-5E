import { Link } from 'react-router-dom';

const param = "From param";
const query = new URLSearchParams({msg: "From Query"});
const App = () => {
  return (
    <section>
      <p>
        <Link to={`echo/${param}`}>Echo param</Link>
      </p>
      <p>
        <Link to={`echo?${query.toString()}`}>Echo query </Link>
      </p>
    </section>
  )
}
  
export default App