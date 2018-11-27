importScripts("/precache-manifest.caba3fb30dc41d242a7b39e4f80b7e00.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

// 启动后停止旧的sw
workbox.skipWaiting()
workbox.clientsClaim()

// 设置缓存名称前缀
workbox.core.setCacheNameDetails({
  prefix: 'vuecli'
})

// 缓存manifest.json
workbox.routing.registerRoute(
  /\/manifest\.json/,
  workbox.strategies.staleWhileRevalidate()
)

// sw-register网络请求优先
workbox.routing.registerRoute(
  /\/sw-register\.js/,
  workbox.strategies.networkOnly()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
