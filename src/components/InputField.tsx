interface InputFieldProps {
    fieldName: string;
    value: string;
    inputChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ fieldName, value, inputChanged }: InputFieldProps) {
  return (
    <input type="text" name={fieldName} value={value}
    className="bg-white w-72 h-14 rounded-sm px-5
    outline-none" 
    placeholder={fieldName}
    onChange={inputChanged}
    />
  )
}

export default InputField