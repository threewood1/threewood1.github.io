/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b142d589178bfab5ab71d082c6056634"],["/archives/2023/08/index.html","72a99853597f18d7d093d407f82aaf3f"],["/archives/2023/09/index.html","0076f6f842883435d1d9b73df0dc295e"],["/archives/2023/index.html","5d95925dabb8cb47330be9229e4d4d76"],["/archives/2023/page/2/index.html","a8115e7d61b09d81a115926ea586feb1"],["/archives/index.html","b5a35c0f2fef0e70fe81bfdd7efc8ad7"],["/archives/page/2/index.html","c829435ae5161bde0469c528cf40a07a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/Anime/index.html","119678e52c90de800863bda1b00205d4"],["/categories/Hexo/index.html","9ba0230578b7f26bba26ac3a7c9ab238"],["/categories/Installing/index.html","cdb0892a06712775e48427706abd0a45"],["/categories/JavaWeb/index.html","265aa97335098f62f3d1c67b11c34b1e"],["/categories/Learning/index.html","52289626d5d95bfee29befeee08e5ed1"],["/categories/index.html","5af0d6ef3e351ea90f74b728ef7b8379"],["/css/font.css","840072be87cd6b28e58c17ce5871cb94"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","4f1a369ecfa9fa3502885ddd5adeeab6"],["/css/modify.css","621ed94479da57fedee71e6870d8422f"],["/css/var.css","fc92a6be4766c681d399bd4df684b05a"],["/gallery/index.html","93c5ed102fc9dbaa15850222e31a0a87"],["/gallery/index/BocchiTheRock/image1.jpg","456364cc252e7d1f84da43b17b653c1b"],["/gallery/index/BocchiTheRock/image10.jpg","a1667f0433a5159081539e87883228ad"],["/gallery/index/BocchiTheRock/image11.jpg","0af6bb0c3787f1f6764e6ea754920a62"],["/gallery/index/BocchiTheRock/image12.jpg","ab2847e7dcc0b139c34e603f4069633d"],["/gallery/index/BocchiTheRock/image13.jpg","d29b830d7ce65f34c320b3334eb10070"],["/gallery/index/BocchiTheRock/image15.jpg","a76634eb9ad1fa9dfda3c561e93fae88"],["/gallery/index/BocchiTheRock/image16.jpg","67d056d2df0d9e7918a1f919e613ef38"],["/gallery/index/BocchiTheRock/image17.jpg","970a0e91fbfdfa8345a07739a82ed7a9"],["/gallery/index/BocchiTheRock/image18.jpg","a2b146facad9b1e34d9cbd5d36b5d75d"],["/gallery/index/BocchiTheRock/image2.jpg","f11c146dec8f596e36cc5bf435938125"],["/gallery/index/BocchiTheRock/image20.jpg","9639851d4a7507a949dd97525a354ba0"],["/gallery/index/BocchiTheRock/image21.jpg","fadbc93222a96563fac58d0976caa451"],["/gallery/index/BocchiTheRock/image23.jpg","75840acbb472ed66c4c852bef2b91ba0"],["/gallery/index/BocchiTheRock/image24.jpg","d23d2f0b426a1060140d97357b26a73b"],["/gallery/index/BocchiTheRock/image25.jpg","931525237b6f641ced67a516c0f76891"],["/gallery/index/BocchiTheRock/image26.jpg","964d7c6da1e31dfb7b3c0412f52c1981"],["/gallery/index/BocchiTheRock/image27.jpg","c506e224d2f3a1eb7a32ddde771aa52d"],["/gallery/index/BocchiTheRock/image28.jpg","96748c0ba75d559f72fdacec7a244766"],["/gallery/index/BocchiTheRock/image29.jpg","98fb001c38bb8edc4b0de746e5ab4f0d"],["/gallery/index/BocchiTheRock/image3.jpg","b3cc8d06434c27fd5c96bac97c15948d"],["/gallery/index/BocchiTheRock/image30.jpg","d8ede3878cd230dc8e582b2887f62616"],["/gallery/index/BocchiTheRock/image4.jpg","01f5fb97f9696765e305741ca400d5f7"],["/gallery/index/BocchiTheRock/image5.jpg","3645bb46f4c0b475ff2c35c62a4f834c"],["/gallery/index/BocchiTheRock/image6.jpg","80dff736a53a4abc8411936b8ea015ef"],["/gallery/index/BocchiTheRock/image7.jpg","67d056d2df0d9e7918a1f919e613ef38"],["/gallery/index/BocchiTheRock/image8.jpg","dce1a56aee24a52150a7ad363bbb8a2d"],["/gallery/index/BocchiTheRock/image9.jpg","71a1e76a1c430e55fb7547b5fe81e159"],["/gallery/index/BocchiTheRock/index.html","5c3979bf3ce43477a9d0856d71a3a109"],["/gallery/index/lin/img_lin1.png","565bdf19953c1b767330a750e23c44db"],["/gallery/index/lin/img_lin10.png","b3cd385d58b373fec72e7c9e9f033915"],["/gallery/index/lin/img_lin11.png","4af51f4f3b0366ce36e0cd9857a49f54"],["/gallery/index/lin/img_lin12.png","ab49a59aaf92e57a4516cf8c2e08fc63"],["/gallery/index/lin/img_lin13.png","715868a4d3203a8c2abf04937bc23abf"],["/gallery/index/lin/img_lin14.png","797d3e61e1a2f32c2619e5ea3e6ebe96"],["/gallery/index/lin/img_lin15.png","dfac8e1366489890846ec4b5deb61d00"],["/gallery/index/lin/img_lin16.png","cfe6314b81dc3aa8b8dfc524371b6ccd"],["/gallery/index/lin/img_lin17.png","fc60c201ccca019e14e75a23db117c99"],["/gallery/index/lin/img_lin18.png","5fc1d4bfd90dc1138efeedabcd2ec05b"],["/gallery/index/lin/img_lin19.png","d57f8971729d7b94fdb89d986edc72f7"],["/gallery/index/lin/img_lin2.png","8082123f7909a41707c5ef54b10e04e7"],["/gallery/index/lin/img_lin20.png","eb0e4911ca9510424d8b51966cd9fb3c"],["/gallery/index/lin/img_lin21.png","98eeb6ac110cb6611a1abad3512558a0"],["/gallery/index/lin/img_lin22.png","ad4ac1d79773c15eabd08dfdd385bda7"],["/gallery/index/lin/img_lin23.png","d2e1a08d85b5080193da3fa50022d6c7"],["/gallery/index/lin/img_lin24.png","b203fa0fec2f7a66fb35c3e2fd0ccd16"],["/gallery/index/lin/img_lin25.png","405befa7fd592b2e14c821252f9a0402"],["/gallery/index/lin/img_lin26.png","2fc66dc286c6da81d8d0bc8ff40ce113"],["/gallery/index/lin/img_lin27.png","8d5c674aa40f5bdad1d1913ce6dacaac"],["/gallery/index/lin/img_lin28.png","a803810396b60b68c79f31acd3c0e6b0"],["/gallery/index/lin/img_lin29.png","154627973cfbced50ba2464688596013"],["/gallery/index/lin/img_lin30.png","af25588139fd33bb508a4c3689fdb6cc"],["/gallery/index/lin/img_lin31.png","650db1abf5d6141214300333b2d21ac6"],["/gallery/index/lin/img_lin32.png","9f276cb0dffa42b468b9eabe646cf3a3"],["/gallery/index/lin/img_lin5.png","a69072dd637a082bc73a421c4ec2432b"],["/gallery/index/lin/img_lin9.png","f2da67efa56107c745fc6376e2fee0d5"],["/gallery/index/lin/index.html","4cfd405e049f23c0e4404e9ab905a1e8"],["/gallery/index/monogatari/image1.jpg","f716d1858d51af2a2fa13e0d55f8908d"],["/gallery/index/monogatari/image10.jpg","1018b10ce513050d033c8dbb1f02a72d"],["/gallery/index/monogatari/image11.jpg","397ee27ad0b87b6eca4766d7f9c4ca60"],["/gallery/index/monogatari/image12.jpg","52d53c0521872dd2dec19bfd00a3715f"],["/gallery/index/monogatari/image13.jpg","8486f8025df7a87389da56a1f496ae5b"],["/gallery/index/monogatari/image14.jpg","e9c27d95f6151ec4e1b8e69161a846f2"],["/gallery/index/monogatari/image15.jpg","d91ee8c74fd0c570ea7921cc096cfe1a"],["/gallery/index/monogatari/image16.jpg","10fa5a886ea58e5437c492af55474f07"],["/gallery/index/monogatari/image17.jpg","1d42d21ec56bb2ca05eb987208716ec2"],["/gallery/index/monogatari/image18.jpg","f85b350fe51248b6c16d77126deb040c"],["/gallery/index/monogatari/image19.jpg","af504c0c26ee802bb32af521a449f02a"],["/gallery/index/monogatari/image2.jpg","6c31f04ff20a44b852bd4236f771e42b"],["/gallery/index/monogatari/image20.jpg","5161bcfc4e777daf1b79ef25ab019cea"],["/gallery/index/monogatari/image21.jpg","01457edd1709ccbbd3721385507adcc9"],["/gallery/index/monogatari/image22.jpg","3567a317d6a5ed8f5ca09e07fc9d045c"],["/gallery/index/monogatari/image23.jpg","cd8245a7fd075f3c515fabba93d27bd9"],["/gallery/index/monogatari/image24.jpg","376d1d9524f7212d5908fc9493ad35ea"],["/gallery/index/monogatari/image25.jpg","4943a35865a12cd1ba969fed8a35acf3"],["/gallery/index/monogatari/image26.jpg","c24e761b8fd21a4aba9653bfee13a02c"],["/gallery/index/monogatari/image27.jpg","972fadd501b51ee35a5313e4cf9a71e5"],["/gallery/index/monogatari/image28.jpg","c7e24ff53665780c7ac9923ee979fc7e"],["/gallery/index/monogatari/image29.jpg","c9eba77abf125e465c386ee54c7c97de"],["/gallery/index/monogatari/image30.jpg","4daa2f5467b942c115b41eee85592b22"],["/gallery/index/monogatari/image31.jpg","4e3078efef11bb62f718b950aa5277d1"],["/gallery/index/monogatari/image32.jpg","23b2a588d73981a8120e9637d8c08172"],["/gallery/index/monogatari/image33.jpg","1a8f53f0a5b8afedc3695d12c0a0c88d"],["/gallery/index/monogatari/image34.jpg","8a6e01f87e13ccd0921c5c8a7f3c78c5"],["/gallery/index/monogatari/image35.jpg","512e0e6db00947639ab1e0e5e7d547e4"],["/gallery/index/monogatari/image36.jpg","d8873f5dc06c803b684ae9003cf24f1e"],["/gallery/index/monogatari/image37.jpg","aa7c57503b30a049733bf383d911030e"],["/gallery/index/monogatari/image38.jpg","d48c0715acb2a4728c61ffb8b61e9a7b"],["/gallery/index/monogatari/image39.jpg","ca5d82702c8e96b51de467968a1da9c2"],["/gallery/index/monogatari/image4.jpg","3c0e07d50936f828f0bf7d90dc98e60b"],["/gallery/index/monogatari/image40.jpg","88f5ef91fa11b287e07eecab46a60461"],["/gallery/index/monogatari/image41.jpg","5cf2610df878f4bc841fbf88ece3b593"],["/gallery/index/monogatari/image42.jpg","b105b7b27ce2938f25958e3bf6fe230f"],["/gallery/index/monogatari/image43.jpg","9906a4ed1fc3f11b42628712c4a795f0"],["/gallery/index/monogatari/image44.jpg","c669c7ad35607869577547a97a9edca0"],["/gallery/index/monogatari/image45.jpg","604bf065864b266e3182264848e0325b"],["/gallery/index/monogatari/image46.jpg","1f21cb74fdcd919cbc6599f928141057"],["/gallery/index/monogatari/image47.jpg","04f63d1d2d282abe3fd1386daeb24094"],["/gallery/index/monogatari/image48.jpg","15a1c6e6f98aeaa23f3c4ca6e5d5c47d"],["/gallery/index/monogatari/image49.jpg","96da5a8456b1dd17e1844f1917ac7d1e"],["/gallery/index/monogatari/image5.jpg","64799db03c701f92b074f3fc6dc0e385"],["/gallery/index/monogatari/image50.jpg","ef9dba38ea2f64b9c8523d1ba56701ec"],["/gallery/index/monogatari/image52.jpg","f56d7ca7db53c55922590f469dbf9fe8"],["/gallery/index/monogatari/image53.jpg","982d0be8f72317e085a08429dfa7e518"],["/gallery/index/monogatari/image54.jpg","50eebf1b8cf48ec4e00219d3450fbe8d"],["/gallery/index/monogatari/image55.jpg","63b561267b39c534720f96883a371aa4"],["/gallery/index/monogatari/image7.jpg","a5228cbd6c53f5802fe706caff91a0b0"],["/gallery/index/monogatari/image8.jpg","e9ca4e77e43a2c4448cdee516304c426"],["/gallery/index/monogatari/image9.jpg","27bf2a69469fd4f57914e4dd3133b4e7"],["/gallery/index/monogatari/index.html","e6cd99705d994c22bccaeceddacfc2c4"],["/gallery/index/violet/image1.jpg","b06c94f4e6c2320494b58e081191d0e5"],["/gallery/index/violet/image10.jpg","0b7329cd0f456e965f21b32a321e60d4"],["/gallery/index/violet/image11.jpg","318fed60054f38912dc2d0e7c80fc07f"],["/gallery/index/violet/image12.jpg","577ccb006d5995312f383ca2fac890e4"],["/gallery/index/violet/image13.jpg","590c442d461415fc6e44767958e85fa1"],["/gallery/index/violet/image14.jpg","4c136ef95a8759342b5b02dd40f6d93f"],["/gallery/index/violet/image15.jpg","8a0d01c060b87d5c88cd4747de89a8bf"],["/gallery/index/violet/image16.jpg","ef8eabad1f90ef7af28f9d225597e692"],["/gallery/index/violet/image17.jpg","56131748a74ad92913666bce8bc418c9"],["/gallery/index/violet/image18.jpg","ca96ee13be14efbf2ac4895fb7a5e383"],["/gallery/index/violet/image2.jpg","743d4c9a8a8d3ba938239752dd8c4f25"],["/gallery/index/violet/image3.jpg","da0f2cad05ca77766afb52067aa6758f"],["/gallery/index/violet/image4.jpg","e048c7b1accffdcf25d092531b6d5620"],["/gallery/index/violet/image5.jpg","af58483a239c40468411457b21cdd930"],["/gallery/index/violet/image6.jpg","b16d5f6153f4685b6d7261549869c563"],["/gallery/index/violet/image7.jpg","0ea1d19ed0a46fd20040c8f4473f9e18"],["/gallery/index/violet/image9.jpg","fc39bd8fb5b2efd2608878c35625f374"],["/gallery/index/violet/index.html","58bad6b0dda78792d3f320c2de95bf18"],["/img/404.jpg","e3abd2ad61d7a277ff3272f7301dac54"],["/img/background.jpg","6e5b23de4bc9223252f215f4a5cd5790"],["/img/background1.png","57ff4c6530a2ff5dcf69c8ba89540fa3"],["/img/bilibili.svg","d333e1259b8c63556f52101242377a09"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/firtPage.jpg","1dfc7588747f229c2ff87857033fd3c8"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gallery/pic1.png","5297da19fc5467213bdafa281cc159ee"],["/img/gallery/pic2.png","4f42ad6493368a89010ebdcccb708ed5"],["/img/gallery/pic3.png","980e60dd2467b68880a8b0c777ffd8d0"],["/img/helloWorld.jpg","ab18739cdc46560b90f28d36359e56c6"],["/img/myPic.png","94fdc1b6b337d4cb5e7f5494aa37ec2f"],["/img/paw-solid.svg","714c2af624a0163605262fa362f175d0"],["/img/postsImage/helloworld1.jpg","50e9be5a08f17a2527d2440572d6281e"],["/img/qq.png","e74ee8b66037b186f02b3f623e65e17f"],["/img/threewood.jpg","8f90046c38f687a89f2a31de534ba0b4"],["/img/wechat.png","0ba3708b4fd576092ae87605f124c44b"],["/index.html","c8784bcc3db9c6cb8dfbf0bf96806b47"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","268a19312119ab0616436d49c481cc51"],["/live2d-widget/README.en.html","4b26bfa90839695f7649777a52d398d7"],["/live2d-widget/README.html","9001b3b373608ba45a15bac2520669eb"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","39f8cfbd4925131d44874d3d137c793f"],["/live2d-widget/demo/demo.html","141482d5569a35aec669d6b111908c58"],["/live2d-widget/demo/login.html","bf42aaf8b22335b60412591922b85210"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","327f309d88198834dd4bd2fe6a606dc5"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","0e2bc901bdc83513d46e092a81f100f6"],["/live2d_api/README.html","2173d7909fd75eb1627ebdb4579f9fdb"],["/live2d_api/model/katou/moc/katou.2048/texture_00.png","e1a5a197f26d806de326d20474eb4928"],["/live2d_api/model/rem/11.jpg","ca04cd60a4f26d8e965a1acde0edcdda"],["/live2d_api/model/rem/remu2048/texture_00.png","33cba5fe5fba9efce4d3026f3843586c"],["/live2d_api/model/sagiri/sagiri.2048/texture_00.png","8520262e2fe96f1bc2da8c8045f3b40f"],["/live2d_api/model/sagiri/sagiri.2048/texture_01.png","b370aac78b7904f4f1cc048ab3339faa"],["/live2d_api/model/violet/14.jpg","65837c79f3bcfe24441c850e721c65d3"],["/live2d_api/model/violet/Violet.1024/texture_00.png","00c034d08af4966cf79d634b9c0cb060"],["/live2d_api/model/xiaomai/13.jpg","6fcf123674cf28b91837605f7a835c84"],["/live2d_api/model/xiaomai/umaru2048/texture_00.png","8a1e1ca78e58bdd75415f817d00a01ab"],["/page/2/index.html","7ab3cdb46ecf16d37e5759cc8d94852f"],["/post/16107.html","6fc653f5d66675e8f4afa87ccd8ffb5e"],["/post/1c335eca.html","9c0177195fdb1f72c0a4339025a9ccb4"],["/post/1c335eca/1.png","5956b14c0436ce00409f2bff475451ef"],["/post/1c335eca/2.png","f6d51fc050fc3c4227d09649811134ec"],["/post/1c335eca/3.png","d197c7fa19317ee147a8d8362211cddf"],["/post/1c335eca/4.png","6c212e74e59a8d5b5e82ba7b21da290c"],["/post/1c335eca/5.png","6dfad7d371e88bd8648780d2b203e8d0"],["/post/2189035.html","925fd29444f97d9658b8a3cceee9b360"],["/post/30cf19b2.html","30b98a7075f62e50d209f94cb76f38f6"],["/post/33228.html","d0a60e6b15c90eda4456aec068c0496a"],["/post/33228/pic1.png","5297da19fc5467213bdafa281cc159ee"],["/post/33228/pic2.png","4f42ad6493368a89010ebdcccb708ed5"],["/post/33228/pic3.png","980e60dd2467b68880a8b0c777ffd8d0"],["/post/3ad31586.html","e70147288d49b85170d67a5bd6825bf3"],["/post/3ad31586/image-20221017094402319.png","91d080836dc816aff02148465a1c6eb2"],["/post/3ad31586/image-20221017094510482.png","ade3d0179ba7c0785051bbc9df782c35"],["/post/3ad31586/image-20221017095239911.png","2002d544ceabb38ca1d72a551d54849c"],["/post/6af6e090.html","4c4f7779d9e4e0ed05413f59f5d6c548"],["/post/6af6e090/pic1.png","3053eaeaf763a4f9c56cb8e16fc99195"],["/post/6af6e090/pic2.png","f9aa34136b48bfad312e58200f6c9616"],["/post/6af6e090/pic3.png","2485d3dec7ce078c841e18fff630b83c"],["/post/6af6e090/pic4.png","929a1ec519198bb09eaf68d863c48c05"],["/post/6af6e090/pic5.png","3d1e5495606ccbb6106096b74ed2b600"],["/post/6af6e090/pic6.png","02f356067279ebe4a4124b9f5da2b047"],["/post/6af6e090/pic7.png","a4abd988d7510baed5835eb0c2de67ff"],["/post/6af6e090/pic8.png","aa3f8ce68e3b8d8266782f1fb5891c0b"],["/post/8b222f25.html","e952882621a9677ac0a6d2d935dda7dd"],["/post/8b222f25/20200103175529269.png","ee194e26092c8d7820c63fe4b6ebd0ee"],["/post/8b222f25/image-20220522161950526.png","047faf76b8f96aea9dd462487b8b4c51"],["/post/8b222f25/image-20220522162046996.png","47722b64b528dad60d9427eabc092870"],["/post/8b222f25/image-20220522162201640.png","a0992b75000281b569c71c98597d1f87"],["/post/8b222f25/image-20220522162315843.png","5224780a773fb7d62ef8777a07172d86"],["/post/8b222f25/image-20220522162354893.png","269e83761660baed396b6e24bcd1eac3"],["/post/8b222f25/image-20220522162528751.png","6c7c6eabed5f56dafdf809dcc0abd8cd"],["/post/8b222f25/image-20220522162606538.png","c98e73adf2572cdcd4cfd93c3c4fe453"],["/post/8b222f25/image-20220522162623828.png","c443d28d62d8e0606cacab925d7a96ed"],["/post/8b222f25/image-20220522162633671.png","b6f403c4c954740b2fa550577b2399d8"],["/post/8b222f25/image-20220522163326948.png","3e1eb96717d37b5ac447581ecffca7fa"],["/post/8b222f25/image-20220522163647817.png","bf0ee423a32f5c5b6dacc831091f6552"],["/post/8b222f25/image-20220522163955686.png","77962737357cefd249425a56036698cb"],["/post/8b222f25/image-20220522164124410.png","9e25a8ac448dfa7ea3567b901ea9ff82"],["/post/8b222f25/image-20220522164137867.png","57ff89495f153ea1c0311985efe35420"],["/post/8b222f25/image-20220522164226989.png","96adf6cdd4d8bdd07ad4013dbab204a4"],["/post/8b222f25/image-20220522164445770.png","a15662d5bcd5afe4a1f2ad0dee5f613d"],["/post/8b222f25/image-20220522164542982.png","22297306d8a68db18d628783fcd648a4"],["/post/8b222f25/image-20220522164651541.png","4a76bf5019e11ba0d5878a2f273c320e"],["/post/8b222f25/image-20220522164744329.png","18381187a620d2a47213470ce8dedcab"],["/post/8b222f25/image-20220522164918079.png","4d85d9b1bdabe83cb84f818d17ea7c8f"],["/post/8b222f25/image-20220522165310796.png","00bdb73adb0202ff4717f80439e87e02"],["/post/8b222f25/image-20220522165758191.png","f9611a7b3f5baed78f3326d6d5ffe5ef"],["/post/8b222f25/image-20220522183524341.png","cb9fdeb8c548cc873f3924f2d0263e51"],["/post/8b222f25/image-20220522183626103.png","dd3124c19e1a259af59f9afdfb23bf2e"],["/post/8b222f25/image-20220522183633805.png","32f7d0e3d4c3c9ce9ee4aa9a98349fac"],["/post/8b222f25/image-20220522183703756.png","55a2b1ac4cdbffd3f93a571fbb71914e"],["/post/8b222f25/image-20220522183845187.png","0cf5c86e71d040860280ea13885c5bca"],["/post/8b222f25/image-20220522183954255.png","cba1352dd9c284320399b095ac8e54ac"],["/post/8b222f25/image-20220522184107715.png","a40f58b13a7287cecedb445ef8065d56"],["/post/8b222f25/image-20220812153551951.png","4b9cc5fd68bb7fdf44fe769da75db778"],["/post/8b222f25/image-20220812153723201.png","d53af763ca884e4a499639b55812b38e"],["/post/8b222f25/image-20220816101449558.png","e8d80e81790a1ca4a815f010eb6c2b12"],["/post/8b222f25/image-20220913194205681.png","dcdadcd71e890e38fa0e0a3b200c84da"],["/post/8b222f25/image-20220913194235945.png","b2fbe6ad159cb72e2180e0406555b251"],["/post/8b222f25/image-20220913194303018.png","8f156813c22e9cdbab2a9263c529184a"],["/post/8b222f25/image-20220913194549794.png","8e22288244fc586169df56e1a38f7c1f"],["/post/8b222f25/image-20230306101339092.png","22bbc053bba217013501300291cd826c"],["/post/ad031ca3.html","eb7372feb76bc6dd780ad69086574fc4"],["/post/afa3c662.html","285c573593d53fc269c389973d34e7e7"],["/post/afa3c662/pic1.png","381d20f862dffa746d500a49b8006d8f"],["/post/afa3c662/pic10.png","a6468e4d144a657ec0ad9e22431748c3"],["/post/afa3c662/pic11.png","3c67e176256cf1ec50adcbb70bf78d6c"],["/post/afa3c662/pic12.png","4ae5a5d3849d55330cb37472f29275ed"],["/post/afa3c662/pic13.png","d94468a3ec73838df326bfd8bf2e3833"],["/post/afa3c662/pic14.png","c95ff1e56184a40903b799478c1fb185"],["/post/afa3c662/pic15.png","8ef8962fb82a4bdea27c1a86b068c992"],["/post/afa3c662/pic16.png","993f4ac7ab463020952cafd50f492fac"],["/post/afa3c662/pic17.png","d6cc8084581bde0394e76c8df180df32"],["/post/afa3c662/pic18.png","eb4ed600536197ec335273e73c574810"],["/post/afa3c662/pic19.png","78ef0a4b3ef3f78cb2520457c2e28332"],["/post/afa3c662/pic2.png","170cfcf9ccc64ff7be3e9e91146ec9e2"],["/post/afa3c662/pic20.png","b134c24c60ee32ba70a1f8f270e42390"],["/post/afa3c662/pic21.png","10fe22c2961483e702686406a7a7e1f9"],["/post/afa3c662/pic22.png","43129b76b86b120e24868c817c854703"],["/post/afa3c662/pic23.png","a186e3eed5fae3cd2b1d9fe06aa46d5c"],["/post/afa3c662/pic24.png","c0068779dea1dbb7659930899a7c2cfb"],["/post/afa3c662/pic25.png","eafdd12b73fb2c551209084f60e9eec5"],["/post/afa3c662/pic26.png","af79f0751a1d607dddb3e4ed1fae13a4"],["/post/afa3c662/pic27.png","8e77e88f34c87db64dad0744e7259e4f"],["/post/afa3c662/pic28.png","2e713984f4287a7276afd81392da65e4"],["/post/afa3c662/pic29.png","05116b26c4f5ef9518ceedac7c16f740"],["/post/afa3c662/pic3.png","6e45a5be31cd55f2c0a3388bb9901cfb"],["/post/afa3c662/pic30.png","e0ae7d4bde330c2bf5261e89c87ca96c"],["/post/afa3c662/pic31.png","15e3d351bae2095f8d0bc4fe7653861b"],["/post/afa3c662/pic32.png","81ed2c4b8fbd2df51165296664ad2f45"],["/post/afa3c662/pic33.png","617fbe6f2ab757649fa2ec5604ced800"],["/post/afa3c662/pic34.png","b985b5d3d86b6f1c2130f8223795772f"],["/post/afa3c662/pic35.png","f95618293c4f50bff4bdc40a6e8b3e0a"],["/post/afa3c662/pic36.png","86d37c4bf2d3e7689b19945e3619248b"],["/post/afa3c662/pic37.png","2aeb1785cc84ca0e653fca90d267d1a1"],["/post/afa3c662/pic38.png","509dff3d8a46a0a69c1712b396f847eb"],["/post/afa3c662/pic39.png","15fce78fd9b04a0dd67d5dc0eb199546"],["/post/afa3c662/pic4.png","6ca3189b9f44adbc9fc83916a9f9a465"],["/post/afa3c662/pic40.png","4ca807b168aeb3503cb434e77c3c1efb"],["/post/afa3c662/pic41.png","c9b2042cb601e931949b45988d8c75ac"],["/post/afa3c662/pic42.png","a89634b38dba7d0d1df5eb1712c37196"],["/post/afa3c662/pic43.png","32fa99b7732fb759f4a1b9edd5d285c6"],["/post/afa3c662/pic44.png","23ca27a4b0427efb9e6567cf611b418d"],["/post/afa3c662/pic45.png","4f0112429ca9dd9fa947ba6a6d7d4748"],["/post/afa3c662/pic46.png","dd68688c66edb5e4bd1febf258b77563"],["/post/afa3c662/pic47.png","6052af1c5584ee1ccc4c0b4f5a1d2e53"],["/post/afa3c662/pic48.png","4d715b788d2d877f5725cb4562a8de3f"],["/post/afa3c662/pic49.png","6df6de1126150cfea63b226760b89113"],["/post/afa3c662/pic5.png","127eabafc1464eabbe05d4fa634b1d6b"],["/post/afa3c662/pic50.png","197c2f0adb9317e6cc4045dbaf9b3103"],["/post/afa3c662/pic51.png","64b049efef0398c5966ece7bda1d1d2e"],["/post/afa3c662/pic52.png","296a5fedebca1f7b6ed2d4222fe1b852"],["/post/afa3c662/pic53.png","fd6146f9ad3bc6e03b94fb28b6f92fd9"],["/post/afa3c662/pic54.png","8db4724681cbb007865abf974d0b052e"],["/post/afa3c662/pic55.png","5273311c18479e0020d565f09954023b"],["/post/afa3c662/pic6.png","e913231538c06ffaaab1fc2e5044aaa0"],["/post/afa3c662/pic7.png","a983fccd4e75df3fe016b9528502fe02"],["/post/afa3c662/pic8.png","3eb71af452a5c0c257611fdfb2139b48"],["/post/afa3c662/pic9.png","af158429ea149017eab82cfe244fbf7b"],["/post/c6fb831a.html","dd2d7825a462e960df2cae9d608c9e60"],["/sw-register.js","638fca54935a5fd3df0e9ea99e5fca38"],["/tags/ButterFly/index.html","e3037f473b9ab79e8eb23b3a40c6b645"],["/tags/CSS/index.html","3dc2ed7488a6aa0853e30fcc0dea4060"],["/tags/HTML/index.html","e3ba32aad83d7d858e6431c23b74f028"],["/tags/Hexo/index.html","6f60436b4d7843686d15a8b577211b1a"],["/tags/JDBC/index.html","15c9567c51dd18df7be8efa4e2c88151"],["/tags/Java/index.html","7b198f5b17ee27dfe45dc52468f5ed9d"],["/tags/JavaScript/index.html","7498eaa4e342b040c98a42e31fec0de0"],["/tags/JavaWeb/index.html","3740f1c23c9a582603a058756b23c4aa"],["/tags/Maven/index.html","0edf27f72f4d900c43d1df9d7b336a8e"],["/tags/MySQL/index.html","7a6fd25a3c7e22273e8cb51206193264"],["/tags/Mybatis/index.html","4c73f98e2f46c3e0765665a34f832257"],["/tags/SpringBoot/index.html","fa491441d2db46e898868f374a2bbfb0"],["/tags/VSCode/index.html","680a6d470170c1881d30f773ee55ec93"],["/tags/Vue/index.html","af0867f83f5511934d6b32f73b1f1f06"],["/tags/anime/index.html","2cb3e243d3a7fa0c19d7c6641002924d"],["/tags/hello-world/index.html","fb5332d9c71458aa54a629355a7f31ad"],["/tags/index.html","6f3afa6bb73127406ad1deede0862dc6"]];
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
