import React, { useState } from "react";

import { Input } from "./styles";

function TextArea({setFormFields}) {
const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields((prev) => {
        return {...prev, [name]: value}
    })
}
  return <Input name="feedback" placeholder="Descreva sua experência." value={setFormFields.feedback} onChange={handleChange} />;
}

export default TextArea;
