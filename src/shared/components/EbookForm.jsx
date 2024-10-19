import { useState } from "react"

export const EbookForm = () => {

    // Form handlers
    const [formData, setFormData] = useState({
        "mail":"",
        
    });

    const handleChange = (event) => {

        const {name, value } = event.target;
        setFormData( (prevState) => ({ ...prevState, mail: value}));
        console.log(value)
    }



  return (
    <form action="" >
        <label htmlFor="mail">Email Address</label>
        <input type="text" name="mail" onChange={ handleChange }/>
    </form>
  )
}
