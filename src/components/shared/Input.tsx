import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import OpenEye from "../../assets/svg/OpenEye";
import ClosedEye from "../../assets/svg/ClosedEye";

type InputProps = {
  name: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ name, type = "text", placeholder }) => {
  const [inputType, setInputType] = useState(type);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const onEyeToggle = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  const error = errors[name]?.message as string | undefined;
  return (
    <div className="mb-4">
      <div className={type === "password" ? "flex" : ""}>
        <input
          type={inputType}
          placeholder={placeholder || ""}
          {...register(name)}
          className="w-full px-4 py-2 bg-white/20 backdrop-blur-md rounded-md placeholder-white text-white focus:outline-none focus:ring-2 hover:ring-1 focus:ring-white cursor-default"
        />
        {type === "password" ? (
          <button onClick={onEyeToggle} className="flex items-center justify-center cursor-pointer ms-2 rounded-md px-2 py-2 bg-white/20 backdrop-blur-md">
            {inputType === "password" ? <ClosedEye /> : <OpenEye />}
          </button>
        ) : null}
      </div>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default Input;
