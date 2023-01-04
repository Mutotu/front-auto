import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PASSWORD } from "../secret";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const MainPage = () => {
  const navigatge = useNavigate();
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(null);
  const handleChange = (event) => {
    setPassword(event.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (PASSWORD === password) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    setPassword("");
  };

  useEffect(() => {
    if (!validPassword) return;
    const timer = setInterval(() => {
      navigatge("/details");
    }, 1200);
    return () => clearInterval(timer);
  }, [validPassword]);

  return (
    <div>
      Main PAge
      <form onSubmit={submitFormHandler}>
        <label>Enter password: </label>
        <input type='text' value={password} onChange={handleChange} />
        <button>OK</button>
      </form>
      {validPassword === false && <p>Please try again</p>}
      {validPassword && <LoadingSpinner />}
    </div>
  );
};

export default MainPage;
