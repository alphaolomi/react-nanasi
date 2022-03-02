import React from 'react';
import Select from 'react-select';

export type NanasiSelectProps = {
  options: Array<{ value: string; label: string }> | null;
};

// TODO: Add type for onChange
// TODO: Add Tailwind styling options
// TODO: Add option to disable search


/**
 * NanasiSelect
 * @param param0 
 * @returns 
 */
export const NanasiSelect = ({ options }: NanasiSelectProps) => {
  if (!options) {
    return null;
  }
  return <Select options={options} />;
};
