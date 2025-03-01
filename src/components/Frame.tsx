import InputField from "./InputField"
import Submit from "./Submit"
import { useState } from "react"


function Frame() {

  const [formData, setFormData] = useState({
    'First Name': '',
    'Last Name': '',
    'Email': '',
  });

  function inputChanged(e:React.ChangeEvent<HTMLInputElement>){
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = {...prev,
        [name]: value
      }
      console.log(newData);
      return newData
    })
  }

  return (
    <div className="w-96 h-96 bg-green-400 mx-auto my-20 rounded-2xl shadow-2xl
    flex flex-col justify-center items-center gap-10

    ">
      <InputField fieldName='First Name' value={formData['First Name']} inputChanged={inputChanged}/>
      <InputField fieldName='Last Name' value={formData['Last Name']} inputChanged={inputChanged}/>
      <InputField fieldName='Email' value={formData['Email']} inputChanged={inputChanged}/>
      <Submit />
    </div>
  )
}

export default Frame