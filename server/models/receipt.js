americano = require('americano');

module.exports = Receipt = americano.getModel('receipt', {
 'origin': String,
 'receiptId': Number,
 'transactionCode': Number,
 'transaction': String,
 'transactionId': Number,
 'timestamp': Date,
 'checkoutId': Number,
 'checkoutReceiptId': Number,
 'cashierId': Number,
 'articlesCount': Number,
 'amount': Number,
 'total': Number,
 'loyaltyBalance': Number,
 'convertedPoints': Number,
 'acquiredPoints': Number,
 'intermarcheShopId': Number,
 'paidAmound': Number,
 'isOnline': Boolean,
 'snippet': String
 });

Receipt.all = function(callback) {
    Receipt.request(
        "all", 
        {},
        function(err, instances) {
            callback(null, instances);
        }
    );
};

