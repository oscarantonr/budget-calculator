import React, {useState} from 'react'

const Numberfield = ({onValueChange}) => {
const [value, setValue] = useState('');

const handleInputChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);

        onValueChange(newValue);
    }

  return (
    <input type="number"
    value={value}
    onChange={handleInputChange}
    />
  )
}

export default Numberfield