const calculateTotalCost = (cart) => {
    // Initialize the total cost to 0
    let totalCost = 0;

    // Loop through each item in the cart
    for (const item of cart) {
        const unitPrice = item.unitPrice;
        const quantity = item.quantity;

        // Calculate the cost for this item and add it to the total cost
        const itemCost = unitPrice * quantity;
        totalCost += itemCost;
    }

    return totalCost;
};

// Example usage:
const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 }
];

const totalCost = calculateTotalCost(customerCart);
console.log(`Total Cost of Items: $${totalCost}`);
