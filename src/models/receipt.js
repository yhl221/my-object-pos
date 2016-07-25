class Receipt {

  constructor(receiptItems = []) {
    let total = 0;
    let savedTotal = 0;

    for (const receiptItem of receiptItems) {
      total += receiptItem.subtotal;
      savedTotal += receiptItem.saved;
    }
    this.receiptItems = receiptItems;
    this.total = total;
    this.savedTotal = savedTotal;
  }

  buildReceiptText() {

    const formatMoney = (money)=> {
      return money.toFixed(2);
    };

    let receiptItemsText = this.receiptItems.map(receiptItem => {
        const cartItem = receiptItem.cartItem;
        return `名称：${cartItem.getName()}，\
数量：${receiptItem.getCount()}${cartItem.getUnit()}，\
单价：${formatMoney(cartItem.getPrice())}(元)，\
小计：${formatMoney(receiptItem.subtotal)}(元)`;
      })
      .join('\n');

    return `***<没钱赚商店>收据***
${receiptItemsText}
----------------------
总计：${formatMoney(this.total)}(元)
节省：${formatMoney(this.savedTotal)}(元)
**********************`;
  };
}

module.exports = Receipt;
