const temperatureConverter = {
    toCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    },
    toFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }
  };
  const tempF = 100;
  console.log(`${tempF}F is ${temperatureConverter.toCelsius(tempF)}C`);
  const tempC = 37.8;
  console.log(`${tempC}C is ${temperatureConverter.toFahrenheit(tempC)}F`);
  