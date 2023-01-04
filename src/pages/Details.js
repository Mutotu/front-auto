import { useState } from "react";
import Form from "../components/UI/Form";

const options = [
  { id: "0", label: "-select-", value: "select" },
  { id: "1", label: "loaction1", value: "loaction1" },

  { id: "12", label: "loaction2", value: "loaction2" },

  { id: "123", label: "loaction3", value: "loaction3" },
];

const Details = () => {
  const [value, setValue] = useState("-");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>Please your location</div>
      <label>
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <div>
        <Form value={value} />
      </div>
    </div>
  );
};

export default Details;
