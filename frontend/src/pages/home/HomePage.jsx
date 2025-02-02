import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeSceen from "./HomeSceen";

const HomePage = () => {
  const { user } = useAuthStore();
  return <div>{user ? <HomeSceen /> : <AuthScreen />}</div>;
};

export default HomePage;
