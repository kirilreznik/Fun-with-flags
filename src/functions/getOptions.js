const getOptions = (countries, currentCountry) => {
  if (countries) {
    const random1 = Math.floor(Math.random() * countries.length);
    const random2 = Math.floor(Math.random() * countries.length);
    const options = [];
    if (random1 === random2) {
      const random1 = Math.floor(Math.random() * countries.length);
    } else {
      options.push(countries[random1].name);
      options.push(countries[random2].name);
      options.push(currentCountry.name);
    }

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
    if (random1 === random2) {
      getOptions();
    } else {
      return shuffle(options);
    }
  }
};
export default getOptions;
