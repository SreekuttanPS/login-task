import { Link } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import FormComponent from "../components/auth/FormComponent";

function SignupPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6">LOGIN</h2>

      <FormComponent type="signup" />

      <div className="text-center mt-6 text-white/60">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-white/80 underline inline-block transition-transform duration-200 hover:scale-105"
        >
          Log in
        </Link>
      </div>
    </AuthLayout>
  );
}

export default SignupPage;
