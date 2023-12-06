import { useState } from "react";

export function useFormData() {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData(
          {
              ...formData, 
              [e.target.id]: e.target.value 
          }
        )
    }

    return { formData, handleChange }
}