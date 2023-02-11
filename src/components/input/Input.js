import React from "react";

const Input = ({
  id = "",
  name = "",
  payload = {},
  setPayload = () => {},
  error = "",
  setError = () => {},
  type = "text",
}) => {
  return (
    <>
      <input
        onChange={(e) =>
          setPayload((prev) => ({ ...prev, [name]: e.target.value }))
        }
        name={name}
        id={id}
        value={payload[name]}
        type={type}
        onFocus={() => setError((prev) => ({ ...prev, [name]: "" }))}
        className="p-1 rounded-md border  focus-within:border-[#e77600]  border-gray-400 outline-none focus-within:shadow-amazonInput duration-100"
      />
      {error.length > 0 && (
        <p className="flex mt-2 text-xs font-medium text-red-700 gap-x-2">
          <span className="italic font-bold">!</span>
          <span>{error}</span>
        </p>
      )}
    </>
  );
};

export default Input;
