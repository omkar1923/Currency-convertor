const form = document.getElementById('conversion-form');
const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/6ed7a2e5ea7482bbd523a5ff/latest/${fromCurrency}`);
    const data = await response.json();
    const conversionRate = data.conversion_rates[toCurrency];
    const result = (amount * conversionRate).toFixed(2);
    resultDiv.textContent = `Result: ${amount} ${fromCurrency} = ${result} ${toCurrency}`;
  } catch (error) {
    resultDiv.textContent = `Error: ${error.message}`;
  }
});
