var RTLServerURL = '';
var serverToken = 'SHAHANA';
var rtlConfig = {};
var selectNodeImplementation = 'LND';

class CONSTANTS {
  static get SPINNER() { return '<div class="text-center mt-5"><div id="loadingImage" class="spinner-grow text-primary" role="status"></div><br><span id="spinnerMessage">Fetching Payment...</span></div>'; }
  static get SPINNER_BTN() { return '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span><span id="spinnerBtnMsg">Sending Payment...</span>'; }
  static get REGEX() { return /^https?:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)*$/; }
  static get AUTH_URL() { return '/rtl/api/authenticate'; }
  static get RTL_CONF_URL() { return '/rtl/api/conf/rtlconf'; }
  static get UPDATE_SEL_NODE_URL() { return '/rtl/api/conf/updateSelNode'; }
  static get API_URL() {
    return {
      LND: {
        GET_INFO: '/rtl/api/lnd/getinfo',
        GET_PAYMENT_DETAILS: '/rtl/api/lnd/payreq',
        SEND_PAYMENT: '/rtl/api/lnd/channels/transactions'
      },
      CL: {
        GET_INFO: '/rtl/api/cl/getinfo',
        GET_PAYMENT_DETAILS: '/rtl/api/cl/payments',
        SEND_PAYMENT: '/rtl/api/cl/payments'
      }
    };
  };
}
