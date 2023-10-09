/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b91e3350c0140e95c811a581ac06f2cf"],["/HTML/eluvletter/images/bg.png","c24a438f79f5a1846a4a22cce2913e94"],["/HTML/eluvletter/images/play.png","42530638fb3bd55fab633a5b1272db0c"],["/HTML/eluvletter/images/stamp.png","1a807bc87c8bbe619b624efc3d673224"],["/HTML/eluvletter/images/stitch.png","123bed848c885c324f8fbc250c84f2b1"],["/HTML/eluvletter/index.html","b6a38964451362859ece81116b62384e"],["/HTML/eluvletter/js/bgm.js","796d88911a1c5790d915da286d028a03"],["/HTML/eluvletter/js/jquery-1.11.2.min.js","5790ead7ad3ba27397aedfa3d263b867"],["/HTML/eluvletter/js/letter.js","3a87f1fff6dbea033625d72dd8615f4f"],["/HTML/eluvletter/js/modernizr.js","7a9ad736fcbd8d99ac7cb282e48f492d"],["/HTML/eluvletter/js/sakura.js","4c2573faf3bd40e22871d01c9271683e"],["/HTML/eluvletter/js/typed.js","4071315a426fe5ae42086be1050038ea"],["/HTML/eluvletter/stylesheets/font/rP2Hp2yn6lkG50LoCZOIHQ.woff2","496a19db9637d6acd0fc59a04635e888"],["/HTML/eluvletter/stylesheets/style.css","8d833cc3b8d56c4ae044b7d5ca459f39"],["/archives/2023/08/index.html","e7577e2085c68760ae17d50c69a66811"],["/archives/2023/09/index.html","2854c79a8d87c3ce83b1a9d7c6848ad7"],["/archives/2023/10/index.html","0a477bde52b9963cc8dcb2d8c26b6a78"],["/archives/2023/index.html","d75201c26600813c7cdb7bdec2ea6cf5"],["/archives/2023/page/2/index.html","0383d5cfa8515a81480fef3aad928ada"],["/archives/index.html","89649046484d5e9bfa84fe9eeead1163"],["/archives/page/2/index.html","1a524341f6a7a264592a6612a0ee9b42"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Anime/index.html","a9eaca9feafa171613978c6a17225ef9"],["/categories/Fix/index.html","5afce5f3e1767eaa5bc8d7ca41c4a6fe"],["/categories/Hexo/index.html","8e1a2ef064cd4dfa6b5f0fb932809ae4"],["/categories/Installing/index.html","248519d8029b56e180d08eb5aeadefa9"],["/categories/JavaWeb/index.html","5079962bf964adca23a015c35adedb3c"],["/categories/Learning/index.html","52b583fe9a3d51280f6c20f79c455dcf"],["/categories/Tools/index.html","ae76d4d18a4ccd43f28e1fafbc6e3fe3"],["/categories/index.html","49630b0bd46545fff8b1b612751a1df6"],["/css/font.css","240bc856a7002c8d74922181da74abe6"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","2cc4f93dc7ea6797e42f248bbaa929ed"],["/css/modify.css","fda69a7ccb21f6516565d3710a28eea6"],["/css/var.css","658702e1c6963bf3e9b5c867c488a9a7"],["/gallery/index.html","67d6adc36fd2257bcb83f0c602956162"],["/gallery/index/BocchiTheRock/image1.jpg","456364cc252e7d1f84da43b17b653c1b"],["/gallery/index/BocchiTheRock/image10.jpg","a1667f0433a5159081539e87883228ad"],["/gallery/index/BocchiTheRock/image11.jpg","0af6bb0c3787f1f6764e6ea754920a62"],["/gallery/index/BocchiTheRock/image12.jpg","ab2847e7dcc0b139c34e603f4069633d"],["/gallery/index/BocchiTheRock/image13.jpg","d29b830d7ce65f34c320b3334eb10070"],["/gallery/index/BocchiTheRock/image15.jpg","a76634eb9ad1fa9dfda3c561e93fae88"],["/gallery/index/BocchiTheRock/image16.jpg","67d056d2df0d9e7918a1f919e613ef38"],["/gallery/index/BocchiTheRock/image17.jpg","970a0e91fbfdfa8345a07739a82ed7a9"],["/gallery/index/BocchiTheRock/image18.jpg","a2b146facad9b1e34d9cbd5d36b5d75d"],["/gallery/index/BocchiTheRock/image2.jpg","f11c146dec8f596e36cc5bf435938125"],["/gallery/index/BocchiTheRock/image20.jpg","9639851d4a7507a949dd97525a354ba0"],["/gallery/index/BocchiTheRock/image21.jpg","fadbc93222a96563fac58d0976caa451"],["/gallery/index/BocchiTheRock/image23.jpg","75840acbb472ed66c4c852bef2b91ba0"],["/gallery/index/BocchiTheRock/image24.jpg","d23d2f0b426a1060140d97357b26a73b"],["/gallery/index/BocchiTheRock/image25.jpg","931525237b6f641ced67a516c0f76891"],["/gallery/index/BocchiTheRock/image26.jpg","964d7c6da1e31dfb7b3c0412f52c1981"],["/gallery/index/BocchiTheRock/image27.jpg","c506e224d2f3a1eb7a32ddde771aa52d"],["/gallery/index/BocchiTheRock/image28.jpg","96748c0ba75d559f72fdacec7a244766"],["/gallery/index/BocchiTheRock/image29.jpg","98fb001c38bb8edc4b0de746e5ab4f0d"],["/gallery/index/BocchiTheRock/image3.jpg","b3cc8d06434c27fd5c96bac97c15948d"],["/gallery/index/BocchiTheRock/image30.jpg","d8ede3878cd230dc8e582b2887f62616"],["/gallery/index/BocchiTheRock/image4.jpg","01f5fb97f9696765e305741ca400d5f7"],["/gallery/index/BocchiTheRock/image5.jpg","3645bb46f4c0b475ff2c35c62a4f834c"],["/gallery/index/BocchiTheRock/image6.jpg","80dff736a53a4abc8411936b8ea015ef"],["/gallery/index/BocchiTheRock/image7.jpg","67d056d2df0d9e7918a1f919e613ef38"],["/gallery/index/BocchiTheRock/image8.jpg","dce1a56aee24a52150a7ad363bbb8a2d"],["/gallery/index/BocchiTheRock/image9.jpg","71a1e76a1c430e55fb7547b5fe81e159"],["/gallery/index/BocchiTheRock/index.html","67a9f592d8e96a38e2f115a66a2227fa"],["/gallery/index/lin/img_lin1.png","565bdf19953c1b767330a750e23c44db"],["/gallery/index/lin/img_lin10.png","b3cd385d58b373fec72e7c9e9f033915"],["/gallery/index/lin/img_lin11.png","4af51f4f3b0366ce36e0cd9857a49f54"],["/gallery/index/lin/img_lin12.png","ab49a59aaf92e57a4516cf8c2e08fc63"],["/gallery/index/lin/img_lin13.png","715868a4d3203a8c2abf04937bc23abf"],["/gallery/index/lin/img_lin14.png","797d3e61e1a2f32c2619e5ea3e6ebe96"],["/gallery/index/lin/img_lin15.png","dfac8e1366489890846ec4b5deb61d00"],["/gallery/index/lin/img_lin16.png","cfe6314b81dc3aa8b8dfc524371b6ccd"],["/gallery/index/lin/img_lin17.png","fc60c201ccca019e14e75a23db117c99"],["/gallery/index/lin/img_lin18.png","5fc1d4bfd90dc1138efeedabcd2ec05b"],["/gallery/index/lin/img_lin19.png","d57f8971729d7b94fdb89d986edc72f7"],["/gallery/index/lin/img_lin2.png","8082123f7909a41707c5ef54b10e04e7"],["/gallery/index/lin/img_lin20.png","eb0e4911ca9510424d8b51966cd9fb3c"],["/gallery/index/lin/img_lin21.png","98eeb6ac110cb6611a1abad3512558a0"],["/gallery/index/lin/img_lin22.png","ad4ac1d79773c15eabd08dfdd385bda7"],["/gallery/index/lin/img_lin23.png","d2e1a08d85b5080193da3fa50022d6c7"],["/gallery/index/lin/img_lin24.png","b203fa0fec2f7a66fb35c3e2fd0ccd16"],["/gallery/index/lin/img_lin25.png","405befa7fd592b2e14c821252f9a0402"],["/gallery/index/lin/img_lin26.png","2fc66dc286c6da81d8d0bc8ff40ce113"],["/gallery/index/lin/img_lin27.png","8d5c674aa40f5bdad1d1913ce6dacaac"],["/gallery/index/lin/img_lin28.png","a803810396b60b68c79f31acd3c0e6b0"],["/gallery/index/lin/img_lin29.png","154627973cfbced50ba2464688596013"],["/gallery/index/lin/img_lin30.png","af25588139fd33bb508a4c3689fdb6cc"],["/gallery/index/lin/img_lin31.png","650db1abf5d6141214300333b2d21ac6"],["/gallery/index/lin/img_lin32.png","9f276cb0dffa42b468b9eabe646cf3a3"],["/gallery/index/lin/img_lin5.png","a69072dd637a082bc73a421c4ec2432b"],["/gallery/index/lin/img_lin9.png","f2da67efa56107c745fc6376e2fee0d5"],["/gallery/index/lin/index.html","82816176355ecf1df6ae3d94f7644e61"],["/gallery/index/monogatari/image1.jpg","11ce1c277e2e36130462ce8c443afd06"],["/gallery/index/monogatari/image10.jpg","1018b10ce513050d033c8dbb1f02a72d"],["/gallery/index/monogatari/image11.jpg","397ee27ad0b87b6eca4766d7f9c4ca60"],["/gallery/index/monogatari/image12.jpg","52d53c0521872dd2dec19bfd00a3715f"],["/gallery/index/monogatari/image13.jpg","8486f8025df7a87389da56a1f496ae5b"],["/gallery/index/monogatari/image14.jpg","e9c27d95f6151ec4e1b8e69161a846f2"],["/gallery/index/monogatari/image15.jpg","d91ee8c74fd0c570ea7921cc096cfe1a"],["/gallery/index/monogatari/image16.jpg","10fa5a886ea58e5437c492af55474f07"],["/gallery/index/monogatari/image17.jpg","1d42d21ec56bb2ca05eb987208716ec2"],["/gallery/index/monogatari/image18.jpg","f85b350fe51248b6c16d77126deb040c"],["/gallery/index/monogatari/image19.jpg","af504c0c26ee802bb32af521a449f02a"],["/gallery/index/monogatari/image2.jpg","6c31f04ff20a44b852bd4236f771e42b"],["/gallery/index/monogatari/image20.jpg","5161bcfc4e777daf1b79ef25ab019cea"],["/gallery/index/monogatari/image21.jpg","01457edd1709ccbbd3721385507adcc9"],["/gallery/index/monogatari/image22.jpg","3567a317d6a5ed8f5ca09e07fc9d045c"],["/gallery/index/monogatari/image23.jpg","cd8245a7fd075f3c515fabba93d27bd9"],["/gallery/index/monogatari/image24.jpg","376d1d9524f7212d5908fc9493ad35ea"],["/gallery/index/monogatari/image25.jpg","4943a35865a12cd1ba969fed8a35acf3"],["/gallery/index/monogatari/image26.jpg","c24e761b8fd21a4aba9653bfee13a02c"],["/gallery/index/monogatari/image27.jpg","972fadd501b51ee35a5313e4cf9a71e5"],["/gallery/index/monogatari/image28.jpg","c7e24ff53665780c7ac9923ee979fc7e"],["/gallery/index/monogatari/image29.jpg","c9eba77abf125e465c386ee54c7c97de"],["/gallery/index/monogatari/image30.jpg","4daa2f5467b942c115b41eee85592b22"],["/gallery/index/monogatari/image31.jpg","4e3078efef11bb62f718b950aa5277d1"],["/gallery/index/monogatari/image32.jpg","23b2a588d73981a8120e9637d8c08172"],["/gallery/index/monogatari/image33.jpg","1a8f53f0a5b8afedc3695d12c0a0c88d"],["/gallery/index/monogatari/image34.jpg","8a6e01f87e13ccd0921c5c8a7f3c78c5"],["/gallery/index/monogatari/image35.jpg","512e0e6db00947639ab1e0e5e7d547e4"],["/gallery/index/monogatari/image36.jpg","d8873f5dc06c803b684ae9003cf24f1e"],["/gallery/index/monogatari/image37.jpg","aa7c57503b30a049733bf383d911030e"],["/gallery/index/monogatari/image38.jpg","d48c0715acb2a4728c61ffb8b61e9a7b"],["/gallery/index/monogatari/image39.jpg","ca5d82702c8e96b51de467968a1da9c2"],["/gallery/index/monogatari/image4.jpg","3c0e07d50936f828f0bf7d90dc98e60b"],["/gallery/index/monogatari/image40.jpg","88f5ef91fa11b287e07eecab46a60461"],["/gallery/index/monogatari/image41.jpg","5cf2610df878f4bc841fbf88ece3b593"],["/gallery/index/monogatari/image42.jpg","b105b7b27ce2938f25958e3bf6fe230f"],["/gallery/index/monogatari/image43.jpg","9906a4ed1fc3f11b42628712c4a795f0"],["/gallery/index/monogatari/image44.jpg","c669c7ad35607869577547a97a9edca0"],["/gallery/index/monogatari/image45.jpg","604bf065864b266e3182264848e0325b"],["/gallery/index/monogatari/image46.jpg","1f21cb74fdcd919cbc6599f928141057"],["/gallery/index/monogatari/image47.jpg","04f63d1d2d282abe3fd1386daeb24094"],["/gallery/index/monogatari/image48.jpg","15a1c6e6f98aeaa23f3c4ca6e5d5c47d"],["/gallery/index/monogatari/image49.jpg","93535c2f239c76079a9b284932e13293"],["/gallery/index/monogatari/image5.jpg","c144bc89ae29d8d8e6efbb5f2f2dea1e"],["/gallery/index/monogatari/image50.jpg","ef9dba38ea2f64b9c8523d1ba56701ec"],["/gallery/index/monogatari/image52.jpg","f56d7ca7db53c55922590f469dbf9fe8"],["/gallery/index/monogatari/image53.jpg","982d0be8f72317e085a08429dfa7e518"],["/gallery/index/monogatari/image54.jpg","50eebf1b8cf48ec4e00219d3450fbe8d"],["/gallery/index/monogatari/image55.jpg","63b561267b39c534720f96883a371aa4"],["/gallery/index/monogatari/image6.jpg","9b1b0243bee12b25c9bcb2254ed58257"],["/gallery/index/monogatari/image7.jpg","a5228cbd6c53f5802fe706caff91a0b0"],["/gallery/index/monogatari/image8.jpg","e9ca4e77e43a2c4448cdee516304c426"],["/gallery/index/monogatari/image9.jpg","27bf2a69469fd4f57914e4dd3133b4e7"],["/gallery/index/monogatari/index.html","4f15eac31dfea1ed05e074a0b554c71d"],["/gallery/index/violet/image1.jpg","b06c94f4e6c2320494b58e081191d0e5"],["/gallery/index/violet/image10.jpg","0b7329cd0f456e965f21b32a321e60d4"],["/gallery/index/violet/image11.jpg","318fed60054f38912dc2d0e7c80fc07f"],["/gallery/index/violet/image12.jpg","577ccb006d5995312f383ca2fac890e4"],["/gallery/index/violet/image13.jpg","590c442d461415fc6e44767958e85fa1"],["/gallery/index/violet/image14.jpg","4c136ef95a8759342b5b02dd40f6d93f"],["/gallery/index/violet/image15.jpg","8a0d01c060b87d5c88cd4747de89a8bf"],["/gallery/index/violet/image16.jpg","ef8eabad1f90ef7af28f9d225597e692"],["/gallery/index/violet/image17.jpg","56131748a74ad92913666bce8bc418c9"],["/gallery/index/violet/image18.jpg","ca96ee13be14efbf2ac4895fb7a5e383"],["/gallery/index/violet/image2.jpg","743d4c9a8a8d3ba938239752dd8c4f25"],["/gallery/index/violet/image3.jpg","da0f2cad05ca77766afb52067aa6758f"],["/gallery/index/violet/image4.jpg","e048c7b1accffdcf25d092531b6d5620"],["/gallery/index/violet/image5.jpg","83e0fca6941f685bf5f7078a908bc444"],["/gallery/index/violet/image6.jpg","b16d5f6153f4685b6d7261549869c563"],["/gallery/index/violet/image7.jpg","0ea1d19ed0a46fd20040c8f4473f9e18"],["/gallery/index/violet/image9.jpg","fc39bd8fb5b2efd2608878c35625f374"],["/gallery/index/violet/index.html","32680d0c2ba549ac68b4e1baca37b504"],["/img/404.jpg","e3abd2ad61d7a277ff3272f7301dac54"],["/img/background.jpg","6e5b23de4bc9223252f215f4a5cd5790"],["/img/background1.png","57ff4c6530a2ff5dcf69c8ba89540fa3"],["/img/bilibili.svg","d333e1259b8c63556f52101242377a09"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/firtPage.jpg","1dfc7588747f229c2ff87857033fd3c8"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gallery/pic1.png","5297da19fc5467213bdafa281cc159ee"],["/img/gallery/pic2.png","4f42ad6493368a89010ebdcccb708ed5"],["/img/gallery/pic3.png","980e60dd2467b68880a8b0c777ffd8d0"],["/img/helloWorld.jpg","ab18739cdc46560b90f28d36359e56c6"],["/img/myPic.png","94fdc1b6b337d4cb5e7f5494aa37ec2f"],["/img/paw-solid.svg","714c2af624a0163605262fa362f175d0"],["/img/postsImage/helloworld1.jpg","50e9be5a08f17a2527d2440572d6281e"],["/img/qq.png","e74ee8b66037b186f02b3f623e65e17f"],["/img/threewood.jpg","8f90046c38f687a89f2a31de534ba0b4"],["/img/wechat.png","0ba3708b4fd576092ae87605f124c44b"],["/index.html","a776a63aef2298805592f34fdc7646da"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","661d354c55abf20c41b3c7e0281f58c6"],["/live2d-widget/README.en.html","4b26bfa90839695f7649777a52d398d7"],["/live2d-widget/README.html","9001b3b373608ba45a15bac2520669eb"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","39f8cfbd4925131d44874d3d137c793f"],["/live2d-widget/demo/demo.html","87b9f57b8a8f905f167991c7a33184d7"],["/live2d-widget/demo/login.html","0f10afabe0311239c281a7e9a91f1b0b"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","0e2bc901bdc83513d46e092a81f100f6"],["/live2d_api/README.html","2173d7909fd75eb1627ebdb4579f9fdb"],["/live2d_api/model/katou/moc/katou.2048/texture_00.png","e1a5a197f26d806de326d20474eb4928"],["/live2d_api/model/rem/11.jpg","ca04cd60a4f26d8e965a1acde0edcdda"],["/live2d_api/model/rem/remu2048/texture_00.png","33cba5fe5fba9efce4d3026f3843586c"],["/live2d_api/model/sagiri/sagiri.2048/texture_00.png","8520262e2fe96f1bc2da8c8045f3b40f"],["/live2d_api/model/sagiri/sagiri.2048/texture_01.png","b370aac78b7904f4f1cc048ab3339faa"],["/live2d_api/model/violet/14.jpg","65837c79f3bcfe24441c850e721c65d3"],["/live2d_api/model/violet/Violet.1024/texture_00.png","00c034d08af4966cf79d634b9c0cb060"],["/live2d_api/model/xiaomai/13.jpg","6fcf123674cf28b91837605f7a835c84"],["/live2d_api/model/xiaomai/umaru2048/texture_00.png","8a1e1ca78e58bdd75415f817d00a01ab"],["/page/2/index.html","fb8e0d72fae3a5a6a6708338b6a9e47f"],["/post/16107.html","baf157120d2ff8fa01639575db7a2ed8"],["/post/1c335eca.html","9590c4950bf1b71bf57e2bd59fec825c"],["/post/1c335eca/1.png","5956b14c0436ce00409f2bff475451ef"],["/post/1c335eca/2.png","f6d51fc050fc3c4227d09649811134ec"],["/post/1c335eca/3.png","d197c7fa19317ee147a8d8362211cddf"],["/post/1c335eca/4.png","6c212e74e59a8d5b5e82ba7b21da290c"],["/post/1c335eca/5.png","6dfad7d371e88bd8648780d2b203e8d0"],["/post/2189035.html","5ee3a3c89a9c3ac06ab7a1baa0795cb6"],["/post/30cf19b2.html","56603754caa210c87f473ebf6f37c71b"],["/post/33228.html","ea7b332a45f3cd80093c06902266be54"],["/post/33228/pic1.png","5297da19fc5467213bdafa281cc159ee"],["/post/33228/pic2.png","4f42ad6493368a89010ebdcccb708ed5"],["/post/33228/pic3.png","980e60dd2467b68880a8b0c777ffd8d0"],["/post/3ad31586.html","af1a1003e941b26160ee2bbb5d923f4e"],["/post/3ad31586/image-20221017094402319.png","91d080836dc816aff02148465a1c6eb2"],["/post/3ad31586/image-20221017094510482.png","ade3d0179ba7c0785051bbc9df782c35"],["/post/3ad31586/image-20221017095239911.png","2002d544ceabb38ca1d72a551d54849c"],["/post/607d6c62.html","b972e482cbb2fcca2d04fbcd01b4fe58"],["/post/607d6c62/1566627767390.png","4c2eb459bd1ed21a66439853490cc885"],["/post/607d6c62/1569293793902.png","4813cf4537e870d6ef6b7085ac452c1a"],["/post/607d6c62/1571983065236.png","709b7e839472adc21fb22864a8393273"],["/post/607d6c62/1571987252740.png","8a054969f737e6dcaf4266c2fc142536"],["/post/607d6c62/1571988966446.png","3c53bddf993a58b54346064c41f307e3"],["/post/607d6c62/1571990833074.png","2dbe61995549f3d1d2e982e820e3850f"],["/post/607d6c62/1571991253594.png","be1c8ab96f585561bcc20a9ff5044c97"],["/post/607d6c62/1571992521110.png","fbc7905bf7aaa1bb78b18f7ffb90cf54"],["/post/607d6c62/1571993045835.png","027f0ef60dce00fda2ddbdd09353bb01"],["/post/607d6c62/1571993852280.png","2dd068c083ea126cf6425438dd90242b"],["/post/607d6c62/1572001054551.png","41c993fb8762fa69d132268642deba04"],["/post/607d6c62/1572161580344.png","54c6039b502562a1053922941ed6e7e6"],["/post/607d6c62/1572162890143.png","dc0fc1501e12a924407328c687597cf4"],["/post/607d6c62/1572162906623.png","0cbde89f852b4e2a757e132b2a17c6fd"],["/post/607d6c62/1572163001232.png","a45c79aff8d9333294c353e2a271fc20"],["/post/607d6c62/1572163015102.png","50b406a9830014de078944bba7ad85a6"],["/post/607d6c62/1572164475555.png","844d1c0a79eb399e4e955df25835863c"],["/post/607d6c62/1572164583708.png","77a711ab4778f3bda5f80e4a4acea829"],["/post/607d6c62/1572165109016.png","3959e864550fde0d0a2c999a74ac7e53"],["/post/607d6c62/1572165471421.png","8499ba516eaa8465220fc02dca0e4beb"],["/post/607d6c62/1572165676716.png","13a1c446b3ae0cba86db3d5f9b3d105e"],["/post/607d6c62/1572167540734.png","1d4c4246179afdf0842b6d8c0c29a58b"],["/post/607d6c62/1572167842481.png","e880d45f5cda99b888172f8c35413728"],["/post/607d6c62/1572168088571.png","0baff6e10cb3dbf7a702d785947b5dcb"],["/post/607d6c62/1572169387835.png","541b93ea39b0fdac5616b38ce6a0d7bc"],["/post/607d6c62/1572171034508.png","8127b1d8adb4f2c37fadfc549a720564"],["/post/607d6c62/1572171572963.png","356f11ec934e6b671eb5141667d0f0f2"],["/post/607d6c62/1572172137494.png","348db28de385529e1e1bf627c19755c1"],["/post/607d6c62/1572173978185.png","2825480f6268c5db76d9065e0e8aab71"],["/post/607d6c62/1572174740013.png","4dec6b8eeedc3f5cd4ffcec75b2a9b2e"],["/post/607d6c62/1572178038216.png","5344f4f8aaa51299ded7ceb93012f56e"],["/post/607d6c62/1572178189980.png","0c81ecb2a656e5b66e948d7e9442dad9"],["/post/607d6c62/1572179237392.png","64cbe5d591c6a536bb91b3a0ada9dc73"],["/post/607d6c62/1572179420706.png","46e83f9c01c33d10020357eed4c6ffe6"],["/post/607d6c62/1572180057481.png","43a726d51a50338607839a4dd8549921"],["/post/607d6c62/1572180623156.png","a6d3be62c4c76a873d630de389c3f797"],["/post/607d6c62/1572181403239.png","87228de0dc617634d2a81a6281785bd1"],["/post/607d6c62/1572182565594.png","6fae9df2f323847ed990d28ab7f82d42"],["/post/607d6c62/1572182613625.png","8d5cfe511b9ad205c922accaad4cafbe"],["/post/607d6c62/1572182727568.png","a9a37718028bd2e9d18ca69f59392d66"],["/post/607d6c62/1572183670465.png","b8cdbc6ecf2028d8a0b01175118b3253"],["/post/607d6c62/1572183849972.png","20703c833beb75b879c82d708a13d0dd"],["/post/607d6c62/1572184005061.png","56fa7c9d5d7ea7b3ca2ed4ec6a969a3b"],["/post/607d6c62/1572184030612.png","323bb9ce3315d31d67d86f0b706faa3c"],["/post/607d6c62/1572184109746.png","4eecb51f12c41ab831a06847e0d335f3"],["/post/607d6c62/1572267659865.png","ed97fb8a917a0e09b45f0ebdbd736b68"],["/post/607d6c62/1572268091948.png","0798896087156f6808b57b0dd165aa49"],["/post/607d6c62/1572274044100.png","f32705e18819c914154acc930b5eb3c8"],["/post/607d6c62/1572274100802.png","774f46823d0413507f71e45b235bb746"],["/post/607d6c62/1572274406371.png","3396ca7677babae15d30dc98d350ee92"],["/post/607d6c62/1572275202869.png","bdb58ffe8b530e3fb59958a348ca34e0"],["/post/607d6c62/1572275492670.png","f1e5da7df5766f3dd8a51e7cff5f30c6"],["/post/607d6c62/1572275546739.png","5d240d8b20648732f51a6f94e9f60e02"],["/post/607d6c62/1572275860071.png","e69fa27f976cf682134774a0ed5523ab"],["/post/607d6c62/1572275958701.png","4466b393a0ae53492f074fb4aa27ebb9"],["/post/607d6c62/1572277139243.png","638494e76714412dab1970be97e5a9bc"],["/post/607d6c62/1572277483698.png","a31419877c99170558be501138377f5c"],["/post/607d6c62/1572520139221.png","8b7ab0b425e19bdca912ca2c8b34eb7a"],["/post/607d6c62/1572520293700.png","c1f1ff134b672440bac86a610831c232"],["/post/607d6c62/1572520396806.png","20f73e23fadcbcea449f561dd75daaf8"],["/post/607d6c62/1572522118610.png","84292197552d2c758f120d44d15e6b0a"],["/post/607d6c62/1572522795805.png","c3e310167306e6040c01755a1b9f0680"],["/post/607d6c62/1572522822946.png","fcbb887eb42234110283a7eeca31c2cf"],["/post/607d6c62/1572523045267.png","e4f5c5a47d485380278c550f4ae3df38"],["/post/607d6c62/1572523819666.png","18892be85c538a65d11967b537d4b8a3"],["/post/607d6c62/1572523928774.png","436d2545306be06f604b3cca844efca8"],["/post/607d6c62/1572523968992.png","be3feb6207d855c4bad1279feb7cd237"],["/post/607d6c62/1572525575923.png","8160d5de90d97601f56d28ee0e2647c3"],["/post/607d6c62/1572526097257.png","1aef979532218bda97a0a527e12aca29"],["/post/607d6c62/1572526136074.png","0995d7e5c05455e50016882db4a9310b"],["/post/607d6c62/1572527621076.png","a8a694c2e887976095ec0885a33a4908"],["/post/607d6c62/1572535798760.png","5c648920e7af0c0a05bf3c84e9d67cde"],["/post/607d6c62/1572535921581.png","f6fa27401a94f940d1ec114c5ee5fee7"],["/post/607d6c62/1572536029899.png","c5ede5a4af1cf2bca918a0a82a655b71"],["/post/607d6c62/224637.png","d8803a6bb2fcdfb43d549bc7e6885a6a"],["/post/607d6c62/Linux timeline.png","758e784cb800b9b927e9452ccbecb45c"],["/post/607d6c62/git.png","4439ba8cc8d011231ee03e8afd39d3a9"],["/post/607d6c62/gitlogo.png","e2fd3b99d03afd2c69189c17ee1962f1"],["/post/607d6c62/git流程.png","7a161708b96523bd382e30115d61ca71"],["/post/607d6c62/git流程_详解.png","65c49a1581071ec430bf5b22c99d70a5"],["/post/607d6c62/svn.jpg","933ec1b54d12414996b28009d780cbe5"],["/post/607d6c62/工具差异.png","4c8d1c819fa9735bc60b5bc8568807ea"],["/post/6af6e090.html","38f197f033b7f5049457b6838473b0f8"],["/post/6af6e090/pic1.png","3053eaeaf763a4f9c56cb8e16fc99195"],["/post/6af6e090/pic2.png","f9aa34136b48bfad312e58200f6c9616"],["/post/6af6e090/pic3.png","2485d3dec7ce078c841e18fff630b83c"],["/post/6af6e090/pic4.png","929a1ec519198bb09eaf68d863c48c05"],["/post/6af6e090/pic5.png","3d1e5495606ccbb6106096b74ed2b600"],["/post/6af6e090/pic6.png","02f356067279ebe4a4124b9f5da2b047"],["/post/6af6e090/pic7.png","a4abd988d7510baed5835eb0c2de67ff"],["/post/6af6e090/pic8.png","aa3f8ce68e3b8d8266782f1fb5891c0b"],["/post/78f44c2e.html","07edd2046f9b59acc85e7d033e44a445"],["/post/78f44c2e/pic1.png","b627853b3ad143bef22b222c64a827b2"],["/post/78f44c2e/pic2.png","1b9fa8e3f7460ff7765b915f26a19af9"],["/post/78f44c2e/pic3.png","bb59576aaa01e8a71e381d310536c910"],["/post/78f44c2e/pic4.png","2facd14e914e838f20ea7d3808cebaad"],["/post/78f44c2e/pic5.png","6273263123736bc66fce6e7b45d813d7"],["/post/78f44c2e/pic6.png","588daf559a0f54964245da713c1c3759"],["/post/8b222f25.html","88553d56ce3ff34ffe2e90adf728ce08"],["/post/8b222f25/20200103175529269.png","ee194e26092c8d7820c63fe4b6ebd0ee"],["/post/8b222f25/image-20220522161950526.png","047faf76b8f96aea9dd462487b8b4c51"],["/post/8b222f25/image-20220522162046996.png","47722b64b528dad60d9427eabc092870"],["/post/8b222f25/image-20220522162201640.png","a0992b75000281b569c71c98597d1f87"],["/post/8b222f25/image-20220522162315843.png","5224780a773fb7d62ef8777a07172d86"],["/post/8b222f25/image-20220522162354893.png","269e83761660baed396b6e24bcd1eac3"],["/post/8b222f25/image-20220522162528751.png","6c7c6eabed5f56dafdf809dcc0abd8cd"],["/post/8b222f25/image-20220522162606538.png","c98e73adf2572cdcd4cfd93c3c4fe453"],["/post/8b222f25/image-20220522162623828.png","c443d28d62d8e0606cacab925d7a96ed"],["/post/8b222f25/image-20220522162633671.png","b6f403c4c954740b2fa550577b2399d8"],["/post/8b222f25/image-20220522163326948.png","3e1eb96717d37b5ac447581ecffca7fa"],["/post/8b222f25/image-20220522163647817.png","bf0ee423a32f5c5b6dacc831091f6552"],["/post/8b222f25/image-20220522163955686.png","77962737357cefd249425a56036698cb"],["/post/8b222f25/image-20220522164124410.png","9e25a8ac448dfa7ea3567b901ea9ff82"],["/post/8b222f25/image-20220522164137867.png","57ff89495f153ea1c0311985efe35420"],["/post/8b222f25/image-20220522164226989.png","96adf6cdd4d8bdd07ad4013dbab204a4"],["/post/8b222f25/image-20220522164445770.png","a15662d5bcd5afe4a1f2ad0dee5f613d"],["/post/8b222f25/image-20220522164542982.png","22297306d8a68db18d628783fcd648a4"],["/post/8b222f25/image-20220522164651541.png","4a76bf5019e11ba0d5878a2f273c320e"],["/post/8b222f25/image-20220522164744329.png","18381187a620d2a47213470ce8dedcab"],["/post/8b222f25/image-20220522164918079.png","4d85d9b1bdabe83cb84f818d17ea7c8f"],["/post/8b222f25/image-20220522165310796.png","00bdb73adb0202ff4717f80439e87e02"],["/post/8b222f25/image-20220522165758191.png","f9611a7b3f5baed78f3326d6d5ffe5ef"],["/post/8b222f25/image-20220522183524341.png","cb9fdeb8c548cc873f3924f2d0263e51"],["/post/8b222f25/image-20220522183626103.png","dd3124c19e1a259af59f9afdfb23bf2e"],["/post/8b222f25/image-20220522183633805.png","32f7d0e3d4c3c9ce9ee4aa9a98349fac"],["/post/8b222f25/image-20220522183703756.png","55a2b1ac4cdbffd3f93a571fbb71914e"],["/post/8b222f25/image-20220522183845187.png","0cf5c86e71d040860280ea13885c5bca"],["/post/8b222f25/image-20220522183954255.png","cba1352dd9c284320399b095ac8e54ac"],["/post/8b222f25/image-20220522184107715.png","a40f58b13a7287cecedb445ef8065d56"],["/post/8b222f25/image-20220812153551951.png","4b9cc5fd68bb7fdf44fe769da75db778"],["/post/8b222f25/image-20220812153723201.png","d53af763ca884e4a499639b55812b38e"],["/post/8b222f25/image-20220816101449558.png","e8d80e81790a1ca4a815f010eb6c2b12"],["/post/8b222f25/image-20220913194205681.png","dcdadcd71e890e38fa0e0a3b200c84da"],["/post/8b222f25/image-20220913194235945.png","b2fbe6ad159cb72e2180e0406555b251"],["/post/8b222f25/image-20220913194303018.png","8f156813c22e9cdbab2a9263c529184a"],["/post/8b222f25/image-20220913194549794.png","8e22288244fc586169df56e1a38f7c1f"],["/post/8b222f25/image-20230306101339092.png","22bbc053bba217013501300291cd826c"],["/post/ad031ca3.html","9c266a291db4d9363609acae360b1c8a"],["/post/afa3c662.html","51e95a8c9e1cd92d78d264c667778422"],["/post/afa3c662/pic1.png","381d20f862dffa746d500a49b8006d8f"],["/post/afa3c662/pic10.png","a6468e4d144a657ec0ad9e22431748c3"],["/post/afa3c662/pic11.png","3c67e176256cf1ec50adcbb70bf78d6c"],["/post/afa3c662/pic12.png","4ae5a5d3849d55330cb37472f29275ed"],["/post/afa3c662/pic13.png","d94468a3ec73838df326bfd8bf2e3833"],["/post/afa3c662/pic14.png","c95ff1e56184a40903b799478c1fb185"],["/post/afa3c662/pic15.png","8ef8962fb82a4bdea27c1a86b068c992"],["/post/afa3c662/pic16.png","993f4ac7ab463020952cafd50f492fac"],["/post/afa3c662/pic17.png","d6cc8084581bde0394e76c8df180df32"],["/post/afa3c662/pic18.png","eb4ed600536197ec335273e73c574810"],["/post/afa3c662/pic19.png","78ef0a4b3ef3f78cb2520457c2e28332"],["/post/afa3c662/pic2.png","170cfcf9ccc64ff7be3e9e91146ec9e2"],["/post/afa3c662/pic20.png","b134c24c60ee32ba70a1f8f270e42390"],["/post/afa3c662/pic21.png","10fe22c2961483e702686406a7a7e1f9"],["/post/afa3c662/pic22.png","43129b76b86b120e24868c817c854703"],["/post/afa3c662/pic23.png","a186e3eed5fae3cd2b1d9fe06aa46d5c"],["/post/afa3c662/pic24.png","c0068779dea1dbb7659930899a7c2cfb"],["/post/afa3c662/pic25.png","eafdd12b73fb2c551209084f60e9eec5"],["/post/afa3c662/pic26.png","af79f0751a1d607dddb3e4ed1fae13a4"],["/post/afa3c662/pic27.png","8e77e88f34c87db64dad0744e7259e4f"],["/post/afa3c662/pic28.png","2e713984f4287a7276afd81392da65e4"],["/post/afa3c662/pic29.png","05116b26c4f5ef9518ceedac7c16f740"],["/post/afa3c662/pic3.png","6e45a5be31cd55f2c0a3388bb9901cfb"],["/post/afa3c662/pic30.png","e0ae7d4bde330c2bf5261e89c87ca96c"],["/post/afa3c662/pic31.png","15e3d351bae2095f8d0bc4fe7653861b"],["/post/afa3c662/pic32.png","81ed2c4b8fbd2df51165296664ad2f45"],["/post/afa3c662/pic33.png","617fbe6f2ab757649fa2ec5604ced800"],["/post/afa3c662/pic34.png","b985b5d3d86b6f1c2130f8223795772f"],["/post/afa3c662/pic35.png","f95618293c4f50bff4bdc40a6e8b3e0a"],["/post/afa3c662/pic36.png","86d37c4bf2d3e7689b19945e3619248b"],["/post/afa3c662/pic37.png","2aeb1785cc84ca0e653fca90d267d1a1"],["/post/afa3c662/pic38.png","509dff3d8a46a0a69c1712b396f847eb"],["/post/afa3c662/pic39.png","15fce78fd9b04a0dd67d5dc0eb199546"],["/post/afa3c662/pic4.png","6ca3189b9f44adbc9fc83916a9f9a465"],["/post/afa3c662/pic40.png","4ca807b168aeb3503cb434e77c3c1efb"],["/post/afa3c662/pic41.png","c9b2042cb601e931949b45988d8c75ac"],["/post/afa3c662/pic42.png","a89634b38dba7d0d1df5eb1712c37196"],["/post/afa3c662/pic43.png","32fa99b7732fb759f4a1b9edd5d285c6"],["/post/afa3c662/pic44.png","23ca27a4b0427efb9e6567cf611b418d"],["/post/afa3c662/pic45.png","4f0112429ca9dd9fa947ba6a6d7d4748"],["/post/afa3c662/pic46.png","dd68688c66edb5e4bd1febf258b77563"],["/post/afa3c662/pic47.png","6052af1c5584ee1ccc4c0b4f5a1d2e53"],["/post/afa3c662/pic48.png","4d715b788d2d877f5725cb4562a8de3f"],["/post/afa3c662/pic49.png","6df6de1126150cfea63b226760b89113"],["/post/afa3c662/pic5.png","127eabafc1464eabbe05d4fa634b1d6b"],["/post/afa3c662/pic50.png","197c2f0adb9317e6cc4045dbaf9b3103"],["/post/afa3c662/pic51.png","64b049efef0398c5966ece7bda1d1d2e"],["/post/afa3c662/pic52.png","296a5fedebca1f7b6ed2d4222fe1b852"],["/post/afa3c662/pic53.png","fd6146f9ad3bc6e03b94fb28b6f92fd9"],["/post/afa3c662/pic54.png","8db4724681cbb007865abf974d0b052e"],["/post/afa3c662/pic55.png","5273311c18479e0020d565f09954023b"],["/post/afa3c662/pic56.png","75c3da4505031018b589fc57af97196e"],["/post/afa3c662/pic57.png","6914e2554bbfae685935b9a7dc46fc3f"],["/post/afa3c662/pic58.png","9785fa9ccae79ec3fbfa579daeec0a8f"],["/post/afa3c662/pic59.png","ca2a43175265d8194d369bc7e4a4b2cc"],["/post/afa3c662/pic6.png","e913231538c06ffaaab1fc2e5044aaa0"],["/post/afa3c662/pic60.png","2380f62440d5a68f6b25a32a17896bac"],["/post/afa3c662/pic61.png","f44e0e78d3de1a5fef3bc54ce79004d2"],["/post/afa3c662/pic62.png","6b84f0a54155d49d3407cee4584485b0"],["/post/afa3c662/pic63.png","e14f09c702088770e115051818b9e9b1"],["/post/afa3c662/pic64.png","108ee6f1fb85f76dffd7e5192a6f3048"],["/post/afa3c662/pic65.png","15bc6d0425e01e1852e6ee8b6cc05482"],["/post/afa3c662/pic66.png","a822c395111c79758f7dc38d520ce2d5"],["/post/afa3c662/pic67.png","0958ae3eda291a27e85a39f2b7e71bee"],["/post/afa3c662/pic68.png","c6fff5ae487236e496afabc76ce6defa"],["/post/afa3c662/pic69.png","72b1065d002c62a5e00046ee6cffeb8f"],["/post/afa3c662/pic7.png","a983fccd4e75df3fe016b9528502fe02"],["/post/afa3c662/pic70.png","1567e13576191887c73ee409649acfce"],["/post/afa3c662/pic71.png","0e4014d04b1122f87499e26634294937"],["/post/afa3c662/pic72.png","a4127ce02a7fb8d10b01ec7b2f8bacae"],["/post/afa3c662/pic73.png","63de6dd43e613e1b30e687d5e6c95ebc"],["/post/afa3c662/pic74.png","c13e9ecbacbefc9d962f7ea143f80962"],["/post/afa3c662/pic75.png","b2875d20012a4903300068637f3ae715"],["/post/afa3c662/pic76.png","22982289e07b5ee678b2fe5997687b7b"],["/post/afa3c662/pic77.png","4952e925ee9e83f5736b04e5c3fa4df6"],["/post/afa3c662/pic78.png","60150fe0085ac7e73796d7a8504f30c9"],["/post/afa3c662/pic79.png","b610eea9314d317977809be5181a6a1b"],["/post/afa3c662/pic8.png","3eb71af452a5c0c257611fdfb2139b48"],["/post/afa3c662/pic80.png","d910f01b200fd74419316d58315d7515"],["/post/afa3c662/pic81.png","b5e1216f513381bdce8c776c821099c5"],["/post/afa3c662/pic82.png","edd4ffb2d5cdc073e1503a2aedcf038f"],["/post/afa3c662/pic83.png","59d2ffff4e7f4c244e5b35d5a02ccad9"],["/post/afa3c662/pic84.png","5ca354e8f8d22412142398cb7d92d55b"],["/post/afa3c662/pic85.png","7ba54eda208867d3c9ac96389a751d40"],["/post/afa3c662/pic86.png","be51ba23d4ec2a1811a8626f12e52d29"],["/post/afa3c662/pic87.png","879f194f410f82448146a8f9eda57739"],["/post/afa3c662/pic88.png","10656d4bcb02df2db5f0933cb23d30e9"],["/post/afa3c662/pic89.png","94803e23b1c316690b3576023b363636"],["/post/afa3c662/pic9.png","af158429ea149017eab82cfe244fbf7b"],["/post/afa3c662/pic90.png","b80fd62096e9edd2ed22e0960a932331"],["/post/afa3c662/pic91.png","54c748329a72e8cd9258d5373f8aa40a"],["/post/afa3c662/pic92.png","7dc12a60907af1ec8b89abb24ba4d528"],["/post/afa3c662/pic93.png","a1e033cdb56dc414db4c35dbf2b3aa1d"],["/post/afa3c662/pic94.png","849915a1180f5f6413d5a564f1ca49b9"],["/post/c6fb831a.html","7508dabdd6c8661515eb410a21258b52"],["/post/e6195049.html","79b11d596db6e413333d825c294cd114"],["/sw-register.js","796c584e6d1ef5796e5733c74d7ef09b"],["/tags/ButterFly/index.html","a15f2fdc6fdb3116c7ae6e631922df99"],["/tags/CSS/index.html","7b3b1373db76249978e1972dacdb2233"],["/tags/Git/index.html","c2d1dba00429f746c4af10eca406b9a6"],["/tags/HTML/index.html","8514f5d53da3f58b3782ec99b4343d5c"],["/tags/Hexo/index.html","d1c3a5f932f0d32275882d3011824571"],["/tags/JDBC/index.html","2222163309267e763c3f14f11fb83840"],["/tags/Java/index.html","e080d6497f75c71b658442438a056162"],["/tags/JavaScript/index.html","dff5b02ce0ef3a326c4a42a76413a5da"],["/tags/JavaWeb/index.html","6879a2213c955979c50ac79608a6e1b9"],["/tags/Maven/index.html","93788bceaeffe356260672cd120b9d43"],["/tags/MySQL/index.html","031f6b3a52257dd3397f77411050a37b"],["/tags/Mybatis/index.html","fbcd0a208f4e06258a526f1394959c16"],["/tags/SpringBoot/index.html","b19a6ad72fda3788fda93992a2cf88e1"],["/tags/VSCode/index.html","f3ca163fabae07adf3815a95aa27c308"],["/tags/Vue/index.html","adaf834f93d5c4646c4a60eb87bb8670"],["/tags/Yaml/index.html","7c2ce2fbbd9d6dcd1ca257ec98ca5fc0"],["/tags/Yml/index.html","dd0def45db5dbe7a8cf9cbc20f8cccfd"],["/tags/anime/index.html","064d3c460347f1e27321a7d9968fc559"],["/tags/hello-world/index.html","659401a5980314e1490480476c7c4a09"],["/tags/index.html","d7d54406d38326dbc966daae08d45146"]];
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
