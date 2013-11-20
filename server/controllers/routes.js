// See documentation on https://github.com/frankrousseau/americano#routes

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
  }
};