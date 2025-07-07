import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import FormComponent from "../components/auth/FormComponent";

function LoginPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6">LOGIN</h2>

      <FormComponent />

      <div className="text-center mt-6 text-white/60">
        Don't have an account?{" "}
        <Link to="/signup" className="text-white/80 underline inline-block transition-transform duration-200 hover:scale-105">
          Sign up
        </Link>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
