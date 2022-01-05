const getOptions = (countries, currentCountry) => {
  const random1 = Math.floor(Math.random() * countries.length);
  const random2 = Math.floor(Math.random() * countries.length);
  const options = [];
  options.push(countries[random1].name);
  options.push(countries[random2].name);
  options.push(currentCountry.name);
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return shuffle(options);
};
export default getOptions;
