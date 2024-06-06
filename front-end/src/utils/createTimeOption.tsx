export const renderOptions = () => {
  const options = [];
  for (let i = 0; i < 60; i++) {
    const value = i < 10 ? `0${i}` : i;
    options.push(
      <option key={value} value={value}>
        {value}
      </option>,
    );
  }
  return options;
};
