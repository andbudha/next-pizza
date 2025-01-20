import React from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  checked?: boolean;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
  onCheckBoxClick: (value: string) => void;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  onCheckBoxClick,
  checked,
  name,
}) => {
  const onCheckBoxClickHandler = (value: string) => {
    onCheckBoxClick(value);
  };
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}-${String(value!)}`}
        onClick={() => onCheckBoxClickHandler(value!)}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
