import { FormProvider, useForm } from "react-hook-form";
import Input from "../shared/Input";
import { loginSchema, signupSchema } from "../../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import LoadingIcon from "../../assets/svg/LoadingIcon";
import { Link, useNavigate } from "react-router-dom";
import { getUser, setIsLoggedIn, saveUser, setCurrentUser } from "../../utils/auth";

type LoginForm = {
  name?: string;
  email: string;
  password: string;
  password_confirm?: string;
};

const FormComponent = ({ type = "login" }: { type?: "login" | "signup" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const methods = useForm<LoginForm>({
    resolver: zodResolver(type === "login" ? loginSchema : signupSchema),
    mode: "onBlur",
  });

  const { handleSubmit } = methods;

  const onSuccess = (mail: string) => {
    setIsLoggedIn(true);
    setCurrentUser(mail);
    navigate("/");
  };

  const onSubmit = async (formData: LoginForm) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://example.org/${type}`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const resData = await response.json();
      // Work with the Res.
      navigate("/");
      console.log(resData);
    } catch (error) {
      // Writing logic in the catch because Dummy API always fails.
      const existingUser = getUser(formData?.email);
      if (type === "signup" && existingUser) {
        setError("User already exists!");
      } else if (type === "signup") {
        saveUser({
          email: formData?.email || "",
          name: formData?.name || "",
          password: formData?.password || "",
        });
        onSuccess(formData.email);
      } else if (type === "login" && existingUser) {
        onSuccess(formData.email);
      } else {
        setError((error as Error)?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="space-y-4">
        {type === "signup" ? <Input name="name" placeholder="Name" type="text" /> : null}
        <Input name="email" placeholder="Email" type="email" />
        <Input name="password" placeholder="Password" type="password" />
        {type === "signup" ? <Input name="confirm_password" placeholder="Re-enter Password" type="password" /> : null}

        {type === "login" ? (
          <div className="flex justify-end text-sm">
            <Link to="#" className="text-white/80 hover:underline" title="This part is under construction!">
              Forgot password?
            </Link>
          </div>
        ) : null}
        <div>
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white font-semibold py-2 rounded-md disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
            disabled={isLoading}
          >
            Sign In
            {isLoading && <LoadingIcon />}
          </button>
          {error && <p className="w-full text-center mt-1 text-sm text-red-400">{error}</p>}
        </div>
      </div>
    </FormProvider>
  );
};

export default FormComponent;
