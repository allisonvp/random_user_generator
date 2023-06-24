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
      className="py-4 px-9 rounded-xl opacity-90 flex items-end text-sm justify-center gap-6 bg-brown-200 mobile:flex-col mobile:items-start mobile:gap-3 mobile:text-xs"
      onSubmit={submit}
    >
      <div className="p-1 rounded-md flex items-center gap-2 bg-white mobile:w-full">
        <MdNumbers className="text-brown-500" size={20} />
        <input
          type="number"
          name="number"
          placeholder="Users"
          value={inputValues.number}
          min="0"
          max="5000"
          className="w-full outline-none placeholder:text-brown-500"
          onChange={handleChange}
        />
      </div>
      <div className="p-1 rounded-md flex items-center gap-2 bg-white">
        <BsGenderAmbiguous className="text-brown-500" size={20} />
        <select
          name="gender"
          value={inputValues.gender}
          className="w-full outline-none "
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
        className="py-1 px-4 rounded-md disabled:opacity-50 disabled:bg-brown-400 bg-brown-500 opacity-80 hover:bg-brown-400 text-white mobile:w-full"
      >
        Generate
      </button>
    </form>
  );
};

export default UserForm;
