import { useEffect, useState } from "react";
import type { User } from "../types/authTypes";
import { getCurrentUser, getIsLoggedIn, getUser, setIsLoggedIn } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = getIsLoggedIn();
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      const userMail = getCurrentUser();
      const userData = getUser(userMail || "");
      setUser(userData);
    }
  }, [navigate]);

  const onLogOut = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-sm text-white">
        <h2 className="text-2xl font-bold mb-6">Welcome {user?.name || ""}</h2>
        <div className="flex flex-col">
          <div>✅ Library: React</div>
          <div>✅ TypeScript: Yes</div>
          <div>✅ Styling: Tailwind CSS</div>
          <div>✅ Responsive: Yes</div>
          <div>✅ Validation: React Hook Form + Zod</div>
          <div>✅ API Call: fetch to dummy endpoint</div>
          <div>✅ State: local state and local storage</div>
          <div>✅ Protected Routes: Yes</div>
          <div>✅ Save user locally: Yes</div>
        </div>
        <button
          onClick={onLogOut}
          className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 rounded-md disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;
