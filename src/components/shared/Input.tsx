import React from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  name: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ name, type = "text", placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder || ""}
        {...register(name)}
        className="w-full px-4 py-2 bg-white/20 backdrop-blur-md rounded-md placeholder-white text-white focus:outline-none focus:ring-2 hover:ring-1 focus:ring-white cursor-default"
      />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default Input;
