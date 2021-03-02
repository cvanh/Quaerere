const Quaerere = "Quaerere"
const assets = [
  "/",
  "/index.html",
  "/assest/js/app.js",
  "/assest/js/fetch.js",
  // "/assest/js/style.css",
  "/assest/css/style.css",
  "/dist/acount.html",
  "/dist/edit.html",
  "/dist/flashing.html",
  "/dist/store.html",
  "/dist/read.html",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(Quaerere).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })