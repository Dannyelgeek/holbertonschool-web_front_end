function processPayment(amount) {
    console.log('Collecting payment of ' + amount);
}

function porcessOrder(orderId, amount) {
    console.log(orderId + ' is being processed');

    processPayment(amount);

    console.log(orderId + ' has been fully processed');
}
function main() {
    console.log('Processing orders');

    porcessOrder(12321, 10.99);
    porcessOrder(12322, 12.99);
    porcessOrder(12323, 15.0);

    console.log('All the orders have been processed');
}

main();
