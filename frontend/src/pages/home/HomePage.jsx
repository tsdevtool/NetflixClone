import AuthScreen from "./AuthScreen";
import HomeSceen from "./HomeSceen";

const HomePage = () => {
  const user = false;
  return <div>{user ? <HomeSceen /> : <AuthScreen />}</div>;
};

export default HomePage;
