

 const sizes = {
  small: '0.5rem',
  medium: '1rem',
  large: '2rem',
  xlarge: '4rem',
  vlarge: '8rem',
} as const;


export type ISizes = keyof typeof sizes;

export default sizes;