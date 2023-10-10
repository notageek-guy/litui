import { useState, useCallback } from "react";

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return [value, toggleValue];
};

export default useToggle;
