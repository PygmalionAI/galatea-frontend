import { useState } from "react";

const TextInput = ({
  fieldName,
  label,
  helperText,
  placeholder,
  isMultiline,
  type,
  required,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const renderedPlaceholder =
    placeholder !== undefined ? placeholder : "Type something here...";

  return (
    <div>
      {label && (
        <label htmlFor={fieldName}>
          <div className={helperText ? "" : "pb-1"}>{label}</div>
          {helperText && (
            <p className="mt-[-0.125rem] pb-1 text-sm text-ga-white-darker">
              {helperText}
            </p>
          )}
        </label>
      )}
      {!isMultiline ? (
        <input
          id={fieldName}
          name={fieldName}
          type={type || "text"}
          required={required}
          placeholder={renderedPlaceholder}
          className="focusable-field w-full rounded-xl px-4 py-2"
          value={inputValue}
          onChange={handleChange}
        />
      ) : (
        <textarea
          id={fieldName}
          name={fieldName}
          required={required}
          placeholder={renderedPlaceholder}
          className="focusable-field w-full rounded-xl px-4 py-2 !text-ga-white-default"
          value={inputValue}
          onChange={handleChange}
          style={{ height: "auto" }}
          rows={1}
          onInput={(e) => {
            const ele = e.target;
            ele.style.height = "";
            ele.style.height = `${ele.scrollHeight}px`;
          }}
        />
      )}
    </div>
  );
};

export default TextInput;
