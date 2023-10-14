_paq.push(['requireCookieConsent']);

var consent = __md_get("__consent");

if (consent && consent.custom) {
  _paq.push(['setCookieConsentGiven']);
} else {
  _paq.push(['forgetCookieConsentGiven']);
}