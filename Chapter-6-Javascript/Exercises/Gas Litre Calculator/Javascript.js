// Function to calculate total cost of petrol
function calculateTotal() {
    // Get the input values from the fields
    const costPerLiter = parseFloat(document.getElementById('cost').value);
    const litersPurchased = parseFloat(document.getElementById('liters').value);
  
    // Calculate the total cost
    const total = costPerLiter * litersPurchased;
  
    // Format the result to 2 decimal places and display it
    document.getElementById('total').textContent = `Total Cost: £${total.toFixed(2)}`;
  }