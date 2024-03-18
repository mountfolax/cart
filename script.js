document.addEventListener('DOMContentLoaded', function() {
    // Get all quantity input elements
    const quantityInputs = document.querySelectorAll('.cart-page input[type="number"]');

    // Add event listener for quantity change
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            updateSubtotal(input);
            updateTotal();
        });
    });

    // Update subtotal based on quantity
    function updateSubtotal(input) {
        const parentRow = input.closest('tr');
        const price = parseFloat(parentRow.querySelector('.cart-info small').textContent.replace('price: $', ''));
        const quantity = parseInt(input.value);
        const subtotal = price * quantity;
        parentRow.querySelector('.sub').textContent = `$${subtotal.toFixed(2)}`;
    }

    // Update total based on subtotals
    function updateTotal() {
        const subtotals = document.querySelectorAll('.sub');
        let total = 0;
        subtotals.forEach(subtotal => {
            total += parseFloat(subtotal.textContent.replace('$', ''));
        });
        document.querySelector('.totl-price tr:last-child td:last-child').textContent = `$${total.toFixed(2)}`;
    }
});



  
