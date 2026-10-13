'use strict';
/* 動画リサイズは roguepink.github.io/resize/ に まとめた(2026-10-13)。
   前にホーム画面に入れた人のために、覚えた古い版を全部消して、自分(この登録)も外し、開いている画面を新しいアドレスへ移す。 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((cs) => cs.forEach((c) => c.navigate('https://roguepink.github.io/resize/#video').catch(() => {})))
  );
});
