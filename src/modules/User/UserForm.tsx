import { useState } from "react";
import { BsGenderAmbiguous } from "react-icons/bs";
import { MdNumbers } from "react-icons/md";

interface Props {
  handleSubmit: (number: string | number, gender: string) => void;
}

const UserForm = ({ handleSubmit }: Props) => {
  const [inputValues, setInputValues] = useState({
    number: "",
    gender: "",
  });
  const disabledValidation = !(inputValues.number && inputValues.gender);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(inputValues.number, inputValues.gender);
  };

  return (
    <form
      className="py-4 px-9 rounded-xl opacity-90 flex items-end text-sm justify-center gap-6 bg-light-brown"
      onSubmit={submit}
    >
      <div className="p-1 rounded-md flex items-center gap-2 bg-white">
        <MdNumbers className="text-yellow-700" size={20} />
        <input
          type="number"
          name="number"
          placeholder="Users"
          value={inputValues.number}
          min="0"
          max="5000"
          className="w-full outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="p-1 rounded-md flex items-center gap-2 bg-white">
        <BsGenderAmbiguous className=" text-yellow-700" size={20} />
        <select
          name="gender"
          value={inputValues.gender}
          className="w-full outline-none"
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            Select a Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option>Male & Female</option>
        </select>
      </div>
      <button
        disabled={disabledValidation}
        className="py-1 px-4 rounded-md disabled:opacity-60 disabled:bg-yellow-800 bg-yellow-500 hover:bg-yellow-600 text-white"
      >
        Generate
      </button>
    </form>
  );
};

export default UserForm;
