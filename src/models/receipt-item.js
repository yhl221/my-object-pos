class ReceiptItem {
  constructor(cartItem, subtotal, saved) {
    this.cartItem = cartItem;
    this.subtotal = subtotal;
    this.saved = saved;
  }
}

module.exports = ReceiptItem;
