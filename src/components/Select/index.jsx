import React, { memo } from "react";
import { Form } from "react-bootstrap";
import "./style.scss";
const Select = memo(({ data = [], label, onChange, ...rest }) => {
  const handleSelect = e => {
    const itemSelected = data[e.target.value];
    if (onChange) {
      onChange(e, itemSelected);
    }
  };
  return (
    <Form.Group controlId="exampleForm.ControlSelect1" className="select">
      <Form.Control as="select" onChange={handleSelect} {...rest}>
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
