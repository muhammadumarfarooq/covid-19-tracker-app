import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import cn from 'classnames';
import './styles/input-select.css';

const InputSelect = ({ className, label, value, isDisabled, children, handleChange, name, id }) => {
  /*
  * FOLLOWING SHOULD COME THROUGH PROPS
  * label
  * state
  * onChange handler
  * an array of all options
  * className
  * */
  
  return (
    <FormControl className={cn("input-select", { className })}>
      <InputLabel htmlFor={id}>
        <p className="input-select--text">{label}</p>
      </InputLabel>
      <Select
        IconComponent={KeyboardArrowDownIcon}
        className={className}
        native
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
        inputProps={{
          name,
          id,
        }}
      >
        {children}
      </Select>
    </FormControl>
  );
};


InputSelect.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InputSelect;




