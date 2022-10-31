'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7cf6dd973b52a4658016bd182cb397cd",
"index.html": "3757fe4575d35e9e57a352e602b58306",
"/": "3757fe4575d35e9e57a352e602b58306",
"main.dart.js": "e409067d8fd9d195742ab0a268f02d2b",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"favicon.png": "c9438dc891a5251b9238683d8079d480",
"icons/Icon-192.png": "8afc3ad5daaff766f4164e32c524620f",
"icons/Icon-maskable-192.png": "8afc3ad5daaff766f4164e32c524620f",
"icons/Icon-maskable-512.png": "e78569fd64de05350ee5924740a1226d",
"icons/Icon-512.png": "e78569fd64de05350ee5924740a1226d",
"manifest.json": "99a065f7f9f25ffff4a63a565663e757",
".git/REBASE_HEAD": "5222e7f9c4a176c439568a7e673ed7e4",
".git/ORIG_HEAD": "5222e7f9c4a176c439568a7e673ed7e4",
".git/config": "eb0b64940cab2d15131442102de3fcca",
".git/objects/50/ff335f51a08f561787ba78785162d601b189d7": "aa96eacf67edeaef82fee0fbe92977e7",
".git/objects/3b/5c2a4ff4382f809798a854cc61d4c28085daf4": "7b313b077c64fd0ca36beeb95e2b6fb5",
".git/objects/05/9c70dbfe622982fb86e7b267ddf30b361c629e": "0f9ad1abf2bacd081c7950ab030e48d7",
".git/objects/a3/e5130fe2120dabda4f6f8ff03672ab3b778f51": "f0c22583f571312e1040be444c6b617b",
".git/objects/b5/4dc14f78e878ce34da4470249cc4d3adf5cb96": "6ac2c58f353d2c61c847f6af3380935d",
".git/objects/d6/02e4ecbb763ac95ff6fc4563a39e0fb3580998": "373a25407be43b7fad518dedebc96dd6",
".git/objects/d8/e13bc7297e678a99cc77cf0f58c2f2ec3ebfb4": "f0fd013bce6b4f0a601bbc55d93b16b1",
".git/objects/c0/481e91a62208b2793126d2feedda8767c5ed3c": "533113f1bbfc384d8c01d33a041abece",
".git/objects/18/b47b748e4ae0f9a79df36619cf65cd7e5ee93d": "9dec881c0c5ef3dd6eb84493b52151c0",
".git/objects/4b/76f93b31f08a0f0bc145924ed4e1a7a6852b03": "35eb6c667d0da369c9a98f69260cf854",
".git/objects/29/d8a07b76b2be0dee82faa2ecde217412fd22c8": "f5a03d8329eaa38388e2a42789b65806",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/0492d4ed51294bb10d2e333e6680951b77860a": "845d411fc04b1c9e474ac5913aaf8e6a",
".git/objects/45/a728863811365f454682e6ae7184be4ac7d8d4": "a5aa3e16c3072a60f9fccb339144f076",
".git/objects/1f/1461c2ff82c455e01b0d4981326f38ae1e7720": "fadce6285bbae5ba6ae81769641de49b",
".git/objects/80/809b08f70a660f94183eb7131caf19930c2f55": "3edca09b1fccc6f415d3a40f665bd0e3",
".git/objects/74/dac8e70dcb9050f9215962378cdc26a65cb331": "d2598d3ae6f633202bde9c1129e13302",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/7b/3779c43ba272f41c4715387eb104f74fdbc7d0": "668d01a90d711cba75e38d2b9f588bf3",
".git/objects/8a/e87d4d2b2a407323576011041dd1890413a561": "f2e3abdb7093b5d08ba20d7932a296b8",
".git/objects/10/576cd0cb71d7736f85ca76006e90262cb31fc7": "fb85de61f3079cf3cf1650721d63dcac",
".git/objects/86/73af9a491c89aea9200b1902780cfdf9e03c9d": "295a22971a4fea9d3ac3147c35bbeb09",
".git/objects/44/505a804f497c4ae49e9f09abbe1cb4df40368f": "1a7b186405e19cfb07a73097e4d901f6",
".git/objects/2a/f5c8cda614eb7872951bf6e911cd54ab952f59": "3ef9a29719c318c614c33e5d17bc2afa",
".git/objects/96/8a621053d0b91f2d7e8c61472fa9aa35fcbf14": "c11d97cd7edc3418cff86f9d4f2900cf",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/8387c105a734210a523f5f620c5c881a0236e8": "c9ba33f7f082f1921f450cef8b111fda",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/37/e6a3f0cfa61601eb6379d5ee3f01194b7d2654": "0dcce0284dc88555f57b58070cd3b38b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0a/c584d8e8bbea1dab378aa8ac54c344933eb3b2": "a5069b4ad14e947eea1c3595a82b7709",
".git/objects/bf/55cf7e66137d07f3ba5c4e6cb4b4777ee5001c": "c7c61e88cbfb48a1a68f31aca31880c6",
".git/objects/ba/c4a146d05fbe003b1f3a198e927c597480ebcc": "c0fd5fe3ece3c76478e95b738d27cc37",
".git/objects/d2/f4643a5016be2fdfad6aa9bc8f0750c8c64a93": "a0e7834d8f879a5038032a883a3b62c5",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/800345ba9410149a2b816c662e51e361acac13": "429305f7a9765e2dd2348f77e328be8d",
".git/objects/c4/a6118df6408fb3b565c1a6ef5a1a311a03f1b4": "db96ca9dc65e7e71bb8276c495b4f122",
".git/objects/e1/bf1947ebb7c36186c1eb04948d7eacf6abd563": "db690c4c77886be82b9bea9f42032901",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/77/f2c283244c7220ea00de671ac1abe0a4478bba": "8a32d111b0e3ea2f8260aac5e2cfc13d",
".git/objects/1e/cee559c94305bac1d9b9ac74cf7d2f434caeab": "44bcf0c317cfffe7e5af1901feeefbd9",
".git/objects/84/1dfbd2f706f373c29ceac46a7c665848e96a3a": "9573fe04075acbec10e55d4a8966ac04",
".git/objects/1d/2f8eef4a2014daa64d7de4b890b0f9513fbe0a": "803478a972720fb757229f7e4eac399e",
".git/objects/76/2db76d93b346149566cb75a2d4d5d473bdf5c1": "edaf710a12e8823fb6820251bd6ad741",
".git/objects/2e/b3f3d65953f16fc6e86e882c2fbd31908f85d3": "8a1ee4ad50cb9989cc7e290f344848c4",
".git/HEAD": "66b4bb030dbe5187351c68b0ac79d88c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a00ebb4eb10f765a20bce9d032b4fab1",
".git/logs/refs/heads/main": "1c9ad30b913da4006aec25fcc298c903",
".git/logs/refs/remotes/origin/main": "23e8580740872e9f2a49b228d8153ce0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5222e7f9c4a176c439568a7e673ed7e4",
".git/refs/remotes/origin/main": "5222e7f9c4a176c439568a7e673ed7e4",
".git/index": "2d79692af0607b3ff12f34c185b8280b",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "4eeabd2b0045e7341be87667ce2acc5b",
".git/rebase-merge/git-rebase-todo.backup": "5f44109d3f3c5cc2e8c2f5276ab46960",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/orig-head": "5222e7f9c4a176c439568a7e673ed7e4",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "1b5d5c2e9a536ae341963f54aa519b39",
".git/rebase-merge/onto": "4b3b7612f04474a4e4d9040aedd665b5",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/done": "15d24754a37c85b99f143d564c860c89",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "5222e7f9c4a176c439568a7e673ed7e4",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/author-script": "61a66ead7620ea06bbb18d1868287061",
"assets/AssetManifest.json": "fb24f6bbabf776dfbd78448b3ed02dfd",
"assets/NOTICES": "33a8bc9b3b26d6584abe57025fddea3f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/icon.jpeg": "8f048911c7af3efa2f69eabe119239ee",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
