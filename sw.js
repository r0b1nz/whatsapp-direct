var FILE_VERSION="?v=1596285289837",CACHE_NAME="whatsapp-direct"+FILE_VERSION;self.addEventListener("install",function(t){var e=["index.html","assets/css/style.css","assets/scripts/sw-install.js","assets/scripts/index.js"];t.waitUntil(caches.open(CACHE_NAME).then(function(t){return t.addAll(e.map(function(t){return t+FILE_VERSION}))}).then(function(){self.skipWaiting()}))}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)}))}),self.addEventListener("activate",function(t){t.waitUntil(caches.keys().then(function(t){return Promise.all(t.filter(function(t){return CACHE_NAME===t}).map(function(t){return caches.delete(t)}))}).then(function(){self.clients.claim()}))});