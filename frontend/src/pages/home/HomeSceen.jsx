import { useAuthStore } from "../../store/authUser";

const HomeSceen = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomeSceen;
