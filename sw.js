/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ba6a6c8a2eb63ba3e1511c6ece1c98e1"],["/archives/2023/08/index.html","3cd150bda658dc0ee88cbbb689a02480"],["/archives/2023/index.html","bb28a67c873258c3885baf94f982c402"],["/archives/index.html","fc34675d26d39dcdea298a27471a29d3"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Anime/index.html","238da4b78ef4e1fce3f50c9d0ea00c29"],["/categories/Hexo/index.html","badbc187296cb2fa2b6bc8f34b7e2cf8"],["/categories/Learning/index.html","0d83bc432d963e3b1376a1560a70be6c"],["/categories/index.html","782528ee438796601e774cdf3461e1b8"],["/css/font.css","7676b7227833c06d162656a0cccb4904"],["/css/index.css","22e953892be470d51be28c2386f9a36b"],["/css/modify.css","8f4abc3c363c9e34b8b58fb959d99f1d"],["/css/var.css","96e1324b4beba818ec0bcf57e5c479b8"],["/gallery/BocchiTheRock/image1.jpg","456364cc252e7d1f84da43b17b653c1b"],["/gallery/BocchiTheRock/image10.jpg","a1667f0433a5159081539e87883228ad"],["/gallery/BocchiTheRock/image11.jpg","0af6bb0c3787f1f6764e6ea754920a62"],["/gallery/BocchiTheRock/image12.jpg","ab2847e7dcc0b139c34e603f4069633d"],["/gallery/BocchiTheRock/image13.jpg","d29b830d7ce65f34c320b3334eb10070"],["/gallery/BocchiTheRock/image15.jpg","a76634eb9ad1fa9dfda3c561e93fae88"],["/gallery/BocchiTheRock/image16.jpg","67d056d2df0d9e7918a1f919e613ef38"],["/gallery/BocchiTheRock/image17.jpg","970a0e91fbfdfa8345a07739a82ed7a9"],["/gallery/BocchiTheRock/image18.jpg","a2b146facad9b1e34d9cbd5d36b5d75d"],["/gallery/BocchiTheRock/image2.jpg","f11c146dec8f596e36cc5bf435938125"],["/gallery/BocchiTheRock/image20.jpg","9639851d4a7507a949dd97525a354ba0"],["/gallery/BocchiTheRock/image21.jpg","fadbc93222a96563fac58d0976caa451"],["/gallery/BocchiTheRock/image23.jpg","75840acbb472ed66c4c852bef2b91ba0"],["/gallery/BocchiTheRock/image24.jpg","d23d2f0b426a1060140d97357b26a73b"],["/gallery/BocchiTheRock/image25.jpg","931525237b6f641ced67a516c0f76891"],["/gallery/BocchiTheRock/image26.jpg","964d7c6da1e31dfb7b3c0412f52c1981"],["/gallery/BocchiTheRock/image27.jpg","c506e224d2f3a1eb7a32ddde771aa52d"],["/gallery/BocchiTheRock/image28.jpg","96748c0ba75d559f72fdacec7a244766"],["/gallery/BocchiTheRock/image29.jpg","98fb001c38bb8edc4b0de746e5ab4f0d"],["/gallery/BocchiTheRock/image3.jpg","b3cc8d06434c27fd5c96bac97c15948d"],["/gallery/BocchiTheRock/image30.jpg","d8ede3878cd230dc8e582b2887f62616"],["/gallery/BocchiTheRock/image4.jpg","01f5fb97f9696765e305741ca400d5f7"],["/gallery/BocchiTheRock/image5.jpg","3645bb46f4c0b475ff2c35c62a4f834c"],["/gallery/BocchiTheRock/image6.jpg","80dff736a53a4abc8411936b8ea015ef"],["/gallery/BocchiTheRock/image7.jpg","67d056d2df0d9e7918a1f919e613ef38"],["/gallery/BocchiTheRock/image8.jpg","dce1a56aee24a52150a7ad363bbb8a2d"],["/gallery/BocchiTheRock/image9.jpg","71a1e76a1c430e55fb7547b5fe81e159"],["/gallery/BocchiTheRock/index.html","46738e5cf23570e4a0640e51652eeedd"],["/gallery/index.html","948eddc59a2aad3ea6ee9657a0bdd696"],["/gallery/monogatari/image1.jpg","f716d1858d51af2a2fa13e0d55f8908d"],["/gallery/monogatari/image10.jpg","1018b10ce513050d033c8dbb1f02a72d"],["/gallery/monogatari/image11.jpg","397ee27ad0b87b6eca4766d7f9c4ca60"],["/gallery/monogatari/image12.jpg","52d53c0521872dd2dec19bfd00a3715f"],["/gallery/monogatari/image13.jpg","8486f8025df7a87389da56a1f496ae5b"],["/gallery/monogatari/image14.jpg","e9c27d95f6151ec4e1b8e69161a846f2"],["/gallery/monogatari/image15.jpg","d91ee8c74fd0c570ea7921cc096cfe1a"],["/gallery/monogatari/image16.jpg","10fa5a886ea58e5437c492af55474f07"],["/gallery/monogatari/image17.jpg","1d42d21ec56bb2ca05eb987208716ec2"],["/gallery/monogatari/image18.jpg","f85b350fe51248b6c16d77126deb040c"],["/gallery/monogatari/image19.jpg","af504c0c26ee802bb32af521a449f02a"],["/gallery/monogatari/image2.jpg","6c31f04ff20a44b852bd4236f771e42b"],["/gallery/monogatari/image20.jpg","5161bcfc4e777daf1b79ef25ab019cea"],["/gallery/monogatari/image21.jpg","01457edd1709ccbbd3721385507adcc9"],["/gallery/monogatari/image22.jpg","3567a317d6a5ed8f5ca09e07fc9d045c"],["/gallery/monogatari/image23.jpg","cd8245a7fd075f3c515fabba93d27bd9"],["/gallery/monogatari/image24.jpg","376d1d9524f7212d5908fc9493ad35ea"],["/gallery/monogatari/image25.jpg","4943a35865a12cd1ba969fed8a35acf3"],["/gallery/monogatari/image26.jpg","c24e761b8fd21a4aba9653bfee13a02c"],["/gallery/monogatari/image27.jpg","972fadd501b51ee35a5313e4cf9a71e5"],["/gallery/monogatari/image28.jpg","c7e24ff53665780c7ac9923ee979fc7e"],["/gallery/monogatari/image29.jpg","c9eba77abf125e465c386ee54c7c97de"],["/gallery/monogatari/image30.jpg","4daa2f5467b942c115b41eee85592b22"],["/gallery/monogatari/image31.jpg","4e3078efef11bb62f718b950aa5277d1"],["/gallery/monogatari/image32.jpg","23b2a588d73981a8120e9637d8c08172"],["/gallery/monogatari/image33.jpg","1a8f53f0a5b8afedc3695d12c0a0c88d"],["/gallery/monogatari/image34.jpg","8a6e01f87e13ccd0921c5c8a7f3c78c5"],["/gallery/monogatari/image35.jpg","512e0e6db00947639ab1e0e5e7d547e4"],["/gallery/monogatari/image36.jpg","d8873f5dc06c803b684ae9003cf24f1e"],["/gallery/monogatari/image37.jpg","aa7c57503b30a049733bf383d911030e"],["/gallery/monogatari/image38.jpg","d48c0715acb2a4728c61ffb8b61e9a7b"],["/gallery/monogatari/image39.jpg","ca5d82702c8e96b51de467968a1da9c2"],["/gallery/monogatari/image4.jpg","3c0e07d50936f828f0bf7d90dc98e60b"],["/gallery/monogatari/image40.jpg","88f5ef91fa11b287e07eecab46a60461"],["/gallery/monogatari/image41.jpg","5cf2610df878f4bc841fbf88ece3b593"],["/gallery/monogatari/image42.jpg","b105b7b27ce2938f25958e3bf6fe230f"],["/gallery/monogatari/image43.jpg","9906a4ed1fc3f11b42628712c4a795f0"],["/gallery/monogatari/image44.jpg","c669c7ad35607869577547a97a9edca0"],["/gallery/monogatari/image45.jpg","604bf065864b266e3182264848e0325b"],["/gallery/monogatari/image46.jpg","1f21cb74fdcd919cbc6599f928141057"],["/gallery/monogatari/image47.jpg","04f63d1d2d282abe3fd1386daeb24094"],["/gallery/monogatari/image48.jpg","15a1c6e6f98aeaa23f3c4ca6e5d5c47d"],["/gallery/monogatari/image49.jpg","96da5a8456b1dd17e1844f1917ac7d1e"],["/gallery/monogatari/image5.jpg","64799db03c701f92b074f3fc6dc0e385"],["/gallery/monogatari/image50.jpg","ef9dba38ea2f64b9c8523d1ba56701ec"],["/gallery/monogatari/image52.jpg","f56d7ca7db53c55922590f469dbf9fe8"],["/gallery/monogatari/image53.jpg","982d0be8f72317e085a08429dfa7e518"],["/gallery/monogatari/image54.jpg","50eebf1b8cf48ec4e00219d3450fbe8d"],["/gallery/monogatari/image55.jpg","63b561267b39c534720f96883a371aa4"],["/gallery/monogatari/image7.jpg","a5228cbd6c53f5802fe706caff91a0b0"],["/gallery/monogatari/image8.jpg","e9ca4e77e43a2c4448cdee516304c426"],["/gallery/monogatari/image9.jpg","27bf2a69469fd4f57914e4dd3133b4e7"],["/gallery/monogatari/index.html","074a193adb3a6d244c398cb03a1cb39f"],["/gallery/violet/image1.jpg","b06c94f4e6c2320494b58e081191d0e5"],["/gallery/violet/image10.jpg","0b7329cd0f456e965f21b32a321e60d4"],["/gallery/violet/image11.jpg","318fed60054f38912dc2d0e7c80fc07f"],["/gallery/violet/image12.jpg","577ccb006d5995312f383ca2fac890e4"],["/gallery/violet/image13.jpg","590c442d461415fc6e44767958e85fa1"],["/gallery/violet/image14.jpg","4c136ef95a8759342b5b02dd40f6d93f"],["/gallery/violet/image15.jpg","8a0d01c060b87d5c88cd4747de89a8bf"],["/gallery/violet/image16.jpg","ef8eabad1f90ef7af28f9d225597e692"],["/gallery/violet/image17.jpg","56131748a74ad92913666bce8bc418c9"],["/gallery/violet/image18.jpg","ca96ee13be14efbf2ac4895fb7a5e383"],["/gallery/violet/image2.jpg","743d4c9a8a8d3ba938239752dd8c4f25"],["/gallery/violet/image3.jpg","da0f2cad05ca77766afb52067aa6758f"],["/gallery/violet/image4.jpg","e048c7b1accffdcf25d092531b6d5620"],["/gallery/violet/image5.jpg","af58483a239c40468411457b21cdd930"],["/gallery/violet/image6.jpg","b16d5f6153f4685b6d7261549869c563"],["/gallery/violet/image7.jpg","0ea1d19ed0a46fd20040c8f4473f9e18"],["/gallery/violet/image9.jpg","fc39bd8fb5b2efd2608878c35625f374"],["/gallery/violet/index.html","1c3071e9d46e3fa2cee1150505b7fcec"],["/img/404.jpg","e3abd2ad61d7a277ff3272f7301dac54"],["/img/background.jpg","6e5b23de4bc9223252f215f4a5cd5790"],["/img/background1.png","57ff4c6530a2ff5dcf69c8ba89540fa3"],["/img/bilibili.svg","d333e1259b8c63556f52101242377a09"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/firtPage.jpg","1dfc7588747f229c2ff87857033fd3c8"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gallery/pic1.png","5297da19fc5467213bdafa281cc159ee"],["/img/gallery/pic2.png","4f42ad6493368a89010ebdcccb708ed5"],["/img/gallery/pic3.png","980e60dd2467b68880a8b0c777ffd8d0"],["/img/helloWorld.jpg","ab18739cdc46560b90f28d36359e56c6"],["/img/myPic.png","94fdc1b6b337d4cb5e7f5494aa37ec2f"],["/img/paw-solid.svg","714c2af624a0163605262fa362f175d0"],["/img/postsImage/helloworld1.jpg","50e9be5a08f17a2527d2440572d6281e"],["/img/qq.png","e74ee8b66037b186f02b3f623e65e17f"],["/img/threewood.jpg","8f90046c38f687a89f2a31de534ba0b4"],["/img/wechat.png","0ba3708b4fd576092ae87605f124c44b"],["/index.html","d96d1c257cab34664524d5ac77936615"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/link/index.html","9e821c1aedce6c98818497f2e4dd875e"],["/live2d-widget/README.en.html","4b26bfa90839695f7649777a52d398d7"],["/live2d-widget/README.html","9001b3b373608ba45a15bac2520669eb"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","39f8cfbd4925131d44874d3d137c793f"],["/live2d-widget/demo/demo.html","141482d5569a35aec669d6b111908c58"],["/live2d-widget/demo/login.html","bf42aaf8b22335b60412591922b85210"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","0e2bc901bdc83513d46e092a81f100f6"],["/live2d_api/README.html","2173d7909fd75eb1627ebdb4579f9fdb"],["/live2d_api/model/katou/moc/katou.2048/texture_00.png","e1a5a197f26d806de326d20474eb4928"],["/live2d_api/model/rem/11.jpg","ca04cd60a4f26d8e965a1acde0edcdda"],["/live2d_api/model/rem/remu2048/texture_00.png","33cba5fe5fba9efce4d3026f3843586c"],["/live2d_api/model/sagiri/sagiri.2048/texture_00.png","8520262e2fe96f1bc2da8c8045f3b40f"],["/live2d_api/model/sagiri/sagiri.2048/texture_01.png","b370aac78b7904f4f1cc048ab3339faa"],["/live2d_api/model/violet/14.jpg","65837c79f3bcfe24441c850e721c65d3"],["/live2d_api/model/violet/Violet.1024/texture_00.png","00c034d08af4966cf79d634b9c0cb060"],["/live2d_api/model/xiaomai/13.jpg","6fcf123674cf28b91837605f7a835c84"],["/live2d_api/model/xiaomai/umaru2048/texture_00.png","8a1e1ca78e58bdd75415f817d00a01ab"],["/post/16107.html","d3d0b732054825f6cf1dee22188fda1d"],["/post/1c335eca.html","a5cd0804e14af1892c8c89f48973123b"],["/post/1c335eca/1.png","5956b14c0436ce00409f2bff475451ef"],["/post/1c335eca/2.png","f6d51fc050fc3c4227d09649811134ec"],["/post/1c335eca/3.png","d197c7fa19317ee147a8d8362211cddf"],["/post/1c335eca/4.png","6c212e74e59a8d5b5e82ba7b21da290c"],["/post/1c335eca/5.png","6dfad7d371e88bd8648780d2b203e8d0"],["/post/2189035.html","3931f1615d050e1c2d247c22e8d23d1a"],["/post/33228.html","efe4288c853459e4572726498e315ea6"],["/post/c6fb831a.html","5e65cfe2494621d8e165d03034b76af8"],["/sw-register.js","4f7e6fe13bbdd993a6a8cc3f12f77277"],["/tags/ButterFly/index.html","99d6a801dd582c6f4b284b4f08d327f9"],["/tags/Hexo/index.html","8179f4e21654f5e02731bf804e6b6ddc"],["/tags/JDBC/index.html","9a0c78f9768424598296888df11b4460"],["/tags/Learning/index.html","85635202ed889635506cd313d49326fd"],["/tags/MySQL/index.html","994e02f6344eaa93372617e88f514962"],["/tags/anime/index.html","da235dbfab28bdc0817fe7b005cfea9d"],["/tags/hello-world/index.html","c401294f919e9806df08dffc52a5f4b7"],["/tags/index.html","fe09e1ba8f81dda62d51df553f2ea592"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
