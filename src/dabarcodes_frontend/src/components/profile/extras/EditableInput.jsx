const EditableInput = ({
  label,
  name,
  value,
  editable,
  onChange,
  type,
  options,
}) => {
  const renderInput = () => {
    if (type === "select" && options) {
      return (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={!editable}
          className={`w-[184px] border rounded-md px-3 py-2 text-sm focus:outline-none ${
            editable
              ? "focus:ring-2 focus:ring-blue-500 border-gray-300"
              : "cursor-not-allowed border-transparent bg-gray-100"
          }`}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={!editable}
          className={`w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            editable
              ? "border-gray-300"
              : "border-transparent bg-gray-100 cursor-not-allowed"
          }`}
        />
      );
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold mb-1" htmlFor={name}>
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

export default EditableInput;
