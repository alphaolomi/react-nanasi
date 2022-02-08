import React, { HTMLAttributes, ReactChild } from 'react';

export interface ThingProps extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing = ({ children }: ThingProps) => {
  return <span>{children || `the snozzberries taste like snozzberries`}</span>;
};
