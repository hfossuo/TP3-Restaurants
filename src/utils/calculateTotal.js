const calculateTotal = (items) => {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
};

export default calculateTotal;
