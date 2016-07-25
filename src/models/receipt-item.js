class ReceiptItem {
  constructor(cartItem, subtotal, saved) {
    this.cartItem = cartItem;
    this.subtotal = subtotal;
    this.saved = saved;
  }

  static buildReceiptItems(cartItems, allPromotions) {
    const discount = (count, price, promotionType)=> {
      let subtotal = count * price;
      let saved = 0;

      if (promotionType === 'BUY_TWO_GET_ONE_FREE') {
        saved = parseInt(count / 3) * price;
      }

      subtotal -= saved;

      return {saved, subtotal};
    };

    const findPromotionType = (barcode, promotions)=> {
      const promotion = promotions.find(promotion => promotion.barcodes.some(b => b === barcode));

      return promotion ? promotion.type : undefined;
    };

    return cartItems.map(cartItem => {

      const promotionType = findPromotionType(cartItem.getBarcode(), allPromotions);

      const {saved, subtotal} = discount(cartItem.count, cartItem.getPrice(), promotionType);

      return new ReceiptItem(cartItem, subtotal, saved);
    })
  }
}

module.exports = ReceiptItem;
