import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRouts from "./routes/Mainrouts";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { asyncLoadProduct } from "./store/actions/productActions";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncCurrentUser())
    dispatch(asyncLoadProduct())
  },[]);
  return (
    <div>
      <Nav/>
      <MainRouts />
    </div>
  );
}

export default App;
