// See documentation on https://github.com/frankrousseau/americano#routes

Receipts = require('./receipts');
ReceiptDetails = require('./receiptdetails');

module.exports = {
  'receiptdetails': {
		get: ReceiptDetails.list
   }, 
  'receiptdetails/new': {
    get: ReceiptDetails.list
  },
  'test': {
		get: ReceiptDetails.test
  },
  'receipt/list': {
		get: Receipts.list
	},
	'receipt': {
		get: ReceiptDetails.test
	},
};