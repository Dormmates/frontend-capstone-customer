import React, { useState } from "react";
import TextInput from "../../../components/ui/TextInput";
import InputLabel from "../../../components/ui/InputLabel";

const InputCustomerDetails = () => {
  const [customerFormData, setCustomerFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
  });

  const handleChange = (field: keyof typeof customerFormData, value: string) => {
    setCustomerFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputFields = [
    { label: "First Name", key: "firstName", placeholder: "Input First Name" },
    { label: "Last Name", key: "lastName", placeholder: "Input Last Name" },
    { label: "Contact Number", key: "contactNumber", placeholder: "Input Contact Number" },
    { label: "Email Address", key: "email", placeholder: "Input Email Address" },
  ];

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <div className="border-2 border-gray rounded md:max-w-[1000px] p-5">
          <h1 className="text-2xl font-medium mb-4">Customer Details</h1>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            {inputFields.map((field) => (
              <div key={field.key}>
                <InputLabel className="" label={field.label} />
                <TextInput
                  placeholder={field.placeholder}
                  value={customerFormData[field.key as keyof typeof customerFormData]}
                  onChange={(e) => handleChange(field.key as keyof typeof customerFormData, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium">Summary</h2>
        </div>
      </div>
    </>
  );
};

export default InputCustomerDetails;
