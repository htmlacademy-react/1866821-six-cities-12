export const bringFirstCharToUpperCase = (inputString: string): string => {
  if (!inputString) {
    return inputString;
  }
  return inputString[0].toUpperCase() + inputString.slice(1);
};
