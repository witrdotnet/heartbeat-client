// required variables: matomoEnabled, matomoUrl, matomoSiteId

if (matomoEnabled) {
  console.log("init matomo { matomoEnabled: " + matomoEnabled + ", matomoUrl: " + matomoUrl + ", matomoSiteId: " + matomoSiteId + " }");
  var _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u=matomoUrl;
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', matomoSiteId]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
} else {
  console.log("matomo disabled");
}
