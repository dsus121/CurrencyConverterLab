# CurrencyConverterLab

# Requirements
App Functionality:
The app should allow users to:
Select a base currency (e.g., USD, EUR, GBP)
- the currency list must come from the api not be hardcoded
- Select a target currency
- Enter an amount in the base currency
- See the converted amount in the target currency

# API Integration:
Use a currency exchange rate API to fetch real-time exchange rates. 

### Recommended APIs:
https://rapidapi.com/Dezento/api/currency-converter-pro1

Handle API requests and responses properly, including loading states and error handling.

# UI Design:
Keep the design simple and user-friendly.
- Include dropdowns for currency selection.
- An input field for the amount.
- A button to trigger the conversion.
Display the converted amount clearly.
State Management:
Use React’s useState and useEffect and useReducer hooks.
Manage user input, selected currencies, conversion results, and API data.

5.Extra (Optional):
Add a feature to swap base and target currencies.
Allow users to see historical exchange rates.

