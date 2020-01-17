import React, { memo } from "react";
import { Form } from "react-bootstrap";
const Select = memo(({ data = [], label, onChange }) => {
  const handleSelect = e => {
    const itemSelected = data[e.target.value];
    if (onChange) {
      onChange(e, itemSelected);
    }
  };
  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Example select</Form.Label>
      <Form.Control as="select" onChange={handleSelect}>
        {data.map((item, index) => (
          <option key={item.id} value={index}>
            {item[label]}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
});
export default Select;
