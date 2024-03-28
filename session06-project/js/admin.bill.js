// Assume this function fetches bill data from an API
function fetchBills() {
    // Fetch bills data from API
    // For now, let's assume it returns a sample array of bills
    return [
        { id: 1, customer: 'John Doe', total: 100 },
        { id: 2, customer: 'Jane Smith', total: 200 },
        { id: 3, customer: 'Alice Johnson', total: 150 }
    ];
}

function displayBills() {
    const bills = fetchBills();

    const billContainer = document.querySelector('.bill-container');

    // Clear previous content
    billContainer.innerHTML = '';

    bills.forEach(bill => {
        const billElement = document.createElement('div');
        billElement.classList.add('bill');
        billElement.innerHTML = `
            <div class="bill-id">ID: ${bill.id}</div>
            <div class="bill-customer">Customer: ${bill.customer}</div>
            <div class="bill-total">Total: ${bill.total}</div>
        `;
        billContainer.appendChild(billElement);
    });
}

// Display bills when the page loads
window.addEventListener('DOMContentLoaded', displayBills);
