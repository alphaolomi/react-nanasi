import React from 'react';
/**
 * ButtonProps
 * label: string
 */
export type ButtonProp = {
  label: string;
};

/**
 * Button component
 *
 * @param {React.PropsWithChildren<{}>} props
 * @returns JSX.Element
 */
export const Button = ({ label }: ButtonProp): JSX.Element => {
  return <button type="button">{label}</button>;
};
