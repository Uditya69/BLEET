import { ToastContainer} from "react-toastify";
import HomeScreen from "./homescreen/page";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  return (
    <main className="">
      <ToastContainer />
      <HomeScreen />
    </main>
  );
}
