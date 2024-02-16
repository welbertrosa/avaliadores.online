
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.pt-BR.8b66fe4f5a4cf3fabb2b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/616.baseline.pt-BR.068e7eb8ca4e48645f82.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/848.baseline.pt-BR.5c8a15be8f3714369b93.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/40.baseline.pt-BR.5a1f952dd0bc705a05bc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.5f444c20e38f47aaf56f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/240.baseline.pt-BR.9b24600641cb32831349.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.baseline.pt-BR.df5bf22ee90bdb044bb4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/472.baseline.pt-BR.78481792f5bbdd87330c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/44.baseline.pt-BR.aeece22cba81624a0248.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.pt-BR.54a97ce84f50dd0a9d38.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/616.baseline.pt-BR.04270ad3b1335258182d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.bd7e1a04a0d2456be516.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/904.baseline.pt-BR.2b60ccea73a26508dcab.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/457.baseline.pt-BR.827248b7e0b6e6af28fb.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  