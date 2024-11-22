const convertButton = document.querySelector(".convert-button")

function convertValues(){
  const inputCurrencyValue = document.querySelector(".input-currency").value
  
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //valor em real
  const currencyValueConverted = document.querySelector(".currency-value") //outras moedas 


  const dolarToday = 5.81

  const convertedValue = inputCurrencyValue / dolarToday

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency:"USD"
  }).format(convertedValue)

}

convertButton.addEventListener("click", convertValues)