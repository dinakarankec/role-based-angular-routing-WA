(function() {
    'use strict';

    angular
        .module('contact')
        .service('ContactService', ContactService);

    /**
     * @ngdoc Injector
     * @name ContactService
     * @private
     * @module ModuleName
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    ContactService.$inject = ["$q", "$timeout"];

    /**
     * @ngdoc Service
     * @name ContactService
     * @module ModuleName
     * @requires
     * @description
     * //Description goes here
     * @author Ideas2IT Technologies
     * @copyright
     */
    function ContactService($q, $timeout) {
        var contacts = [{"id":1,"fullName":"Kenneth Smith","email":"ksmith0@youtu.be","phoneNumber":"33-(289)881-8398","city":"Angers"},{"id":2,"fullName":"Harold Garcia","email":"hgarcia1@tinyurl.com","phoneNumber":"234-(324)134-2184","city":"Jega"},{"id":3,"fullName":"Barbara Vasquez","email":"bvasquez2@springer.com","phoneNumber":"46-(619)274-4965","city":"Vetlanda"},{"id":4,"fullName":"Martin Harris","email":"mharris3@youtu.be","phoneNumber":"249-(831)379-7753","city":"El Obeid"},{"id":5,"fullName":"Margaret Richardson","email":"mrichardson4@ucla.edu","phoneNumber":"92-(528)474-0151","city":"Sohbatpur"},{"id":6,"fullName":"Michelle Chapman","email":"mchapman5@flavors.me","phoneNumber":"380-(660)869-3528","city":"Kivsharivka"},{"id":7,"fullName":"Kathryn Harvey","email":"kharvey6@nymag.com","phoneNumber":"389-(453)135-7357","city":"Арачиново"},{"id":8,"fullName":"Ronald Richardson","email":"rrichardson7@craigslist.org","phoneNumber":"86-(699)738-9403","city":"Gangu Chengguanzhen"},{"id":9,"fullName":"Bobby Ramirez","email":"bramirez8@qq.com","phoneNumber":"86-(828)454-6874","city":"Antang"},{"id":10,"fullName":"Christine Williamson","email":"cwilliamson9@sun.com","phoneNumber":"48-(223)636-4253","city":"Sierakowice"},{"id":11,"fullName":"Ralph Ortiz","email":"rortiza@state.tx.us","phoneNumber":"381-(685)862-3382","city":"Srpska Crnja"},{"id":12,"fullName":"Debra Moore","email":"dmooreb@purevolume.com","phoneNumber":"62-(759)399-8970","city":"Sifala"},{"id":13,"fullName":"Juan Ward","email":"jwardc@digg.com","phoneNumber":"7-(120)936-4265","city":"Kireyevsk"},{"id":14,"fullName":"Mary Wright","email":"mwrightd@cocolog-nifty.com","phoneNumber":"63-(452)814-3108","city":"Peña"},{"id":15,"fullName":"Eugene Bishop","email":"ebishope@fc2.com","phoneNumber":"30-(459)877-6939","city":"Próchoma"},{"id":16,"fullName":"Jane Olson","email":"jolsonf@ucla.edu","phoneNumber":"383-(642)958-0392","city":"Klokot"},{"id":17,"fullName":"Denise Alexander","email":"dalexanderg@discuz.net","phoneNumber":"46-(109)195-9048","city":"Vellinge"},{"id":18,"fullName":"Edward Wheeler","email":"ewheelerh@blogspot.com","phoneNumber":"62-(465)310-4502","city":"Simpangpasir"},{"id":19,"fullName":"Michael Foster","email":"mfosteri@cisco.com","phoneNumber":"30-(172)974-8412","city":"Filiatrá"},{"id":20,"fullName":"Peter Ross","email":"prossj@tamu.edu","phoneNumber":"86-(271)793-6149","city":"Hechuan"},{"id":21,"fullName":"Bobby Weaver","email":"bweaverk@abc.net.au","phoneNumber":"86-(243)983-0243","city":"Datong"},{"id":22,"fullName":"Deborah Martinez","email":"dmartinezl@themeforest.net","phoneNumber":"51-(734)726-8454","city":"Llacanora"},{"id":23,"fullName":"Edward Carpenter","email":"ecarpenterm@pcworld.com","phoneNumber":"27-(963)618-1535","city":"Koffiefontein"},{"id":24,"fullName":"Nancy Perez","email":"nperezn@google.es","phoneNumber":"7-(743)426-8576","city":"Mullovka"},{"id":25,"fullName":"Henry Kelley","email":"hkelleyo@hubpages.com","phoneNumber":"54-(244)693-9360","city":"Elena"},{"id":26,"fullName":"Joe Hall","email":"jhallp@dagondesign.com","phoneNumber":"46-(882)273-3216","city":"Göteborg"},{"id":27,"fullName":"Louis Wallace","email":"lwallaceq@thetimes.co.uk","phoneNumber":"62-(466)858-7606","city":"Manggis"},{"id":28,"fullName":"Evelyn Chapman","email":"echapmanr@last.fm","phoneNumber":"66-(825)868-9329","city":"Chok Chai"},{"id":29,"fullName":"Henry Hill","email":"hhills@examiner.com","phoneNumber":"86-(158)536-4940","city":"Hetian"},{"id":30,"fullName":"Ralph Reynolds","email":"rreynoldst@discovery.com","phoneNumber":"86-(247)980-7800","city":"Chengkan"},{"id":31,"fullName":"Joan Ford","email":"jfordu@irs.gov","phoneNumber":"387-(982)909-8484","city":"Orahovica Donja"},{"id":32,"fullName":"Tammy Brown","email":"tbrownv@answers.com","phoneNumber":"86-(371)334-0251","city":"Yeping"},{"id":33,"fullName":"Matthew Snyder","email":"msnyderw@unc.edu","phoneNumber":"86-(246)512-7345","city":"Huanggang"},{"id":34,"fullName":"Jesse Clark","email":"jclarkx@japanpost.jp","phoneNumber":"504-(764)700-1360","city":"El Suyatal"},{"id":35,"fullName":"Joan Freeman","email":"jfreemany@hao123.com","phoneNumber":"52-(906)411-2506","city":"Nicolas Bravo"},{"id":36,"fullName":"Jose Young","email":"jyoungz@nifty.com","phoneNumber":"7-(966)282-2567","city":"Dagestanskiye Ogni"},{"id":37,"fullName":"Janice Arnold","email":"jarnold10@cnbc.com","phoneNumber":"46-(745)182-9327","city":"Mölndal"},{"id":38,"fullName":"Ruth Holmes","email":"rholmes11@yandex.ru","phoneNumber":"86-(929)771-0823","city":"Yunzhong"},{"id":39,"fullName":"Carolyn Garza","email":"cgarza12@istockphoto.com","phoneNumber":"86-(838)472-4430","city":"Xuxiake"},{"id":40,"fullName":"Daniel Matthews","email":"dmatthews13@nature.com","phoneNumber":"86-(699)139-3185","city":"Sigou"},{"id":41,"fullName":"Sean Austin","email":"saustin14@dailymail.co.uk","phoneNumber":"86-(216)243-5103","city":"Jincang"},{"id":42,"fullName":"Bobby Johnston","email":"bjohnston15@liveinternet.ru","phoneNumber":"86-(659)444-2924","city":"Xiawa"},{"id":43,"fullName":"Bobby Vasquez","email":"bvasquez16@e-recht24.de","phoneNumber":"27-(628)768-5193","city":"Germiston"},{"id":44,"fullName":"Diane Romero","email":"dromero17@hostgator.com","phoneNumber":"1-(412)376-4712","city":"Pittsburgh"},{"id":45,"fullName":"Kathryn Barnes","email":"kbarnes18@4shared.com","phoneNumber":"55-(686)721-6399","city":"Cambebba"},{"id":46,"fullName":"Patrick Anderson","email":"panderson19@sbwire.com","phoneNumber":"55-(971)169-2750","city":"Ijuí"},{"id":47,"fullName":"Diane Gutierrez","email":"dgutierrez1a@wunderground.com","phoneNumber":"86-(761)836-7147","city":"Huichang"},{"id":48,"fullName":"Christopher Russell","email":"crussell1b@people.com.cn","phoneNumber":"86-(256)945-0073","city":"Kunyang"},{"id":49,"fullName":"Kathy Baker","email":"kbaker1c@51.la","phoneNumber":"86-(677)183-9886","city":"Xishiqiao"},{"id":50,"fullName":"Charles Tucker","email":"ctucker1d@senate.gov","phoneNumber":"55-(268)227-6970","city":"Campos do Jordão"},{"id":51,"fullName":"Chris Ortiz","email":"cortiz1e@technorati.com","phoneNumber":"86-(932)474-4663","city":"Linshui"},{"id":52,"fullName":"Terry Nelson","email":"tnelson1f@constantcontact.com","phoneNumber":"62-(903)115-8182","city":"Rancaranji"},{"id":53,"fullName":"Eugene Bowman","email":"ebowman1g@nba.com","phoneNumber":"977-(310)796-4558","city":"Sirāhā"},{"id":54,"fullName":"Christina Garrett","email":"cgarrett1h@noaa.gov","phoneNumber":"66-(507)406-3209","city":"Nong Khai"},{"id":55,"fullName":"Laura Ray","email":"lray1i@unblog.fr","phoneNumber":"420-(342)167-4093","city":"Šluknov"},{"id":56,"fullName":"Rebecca Gardner","email":"rgardner1j@mozilla.com","phoneNumber":"351-(400)384-2554","city":"Palmeiros"},{"id":57,"fullName":"Debra Moore","email":"dmoore1k@ebay.co.uk","phoneNumber":"36-(474)824-0945","city":"Miskolc"},{"id":58,"fullName":"Andrew Green","email":"agreen1l@un.org","phoneNumber":"63-(426)138-3218","city":"Malicboy"},{"id":59,"fullName":"Scott Grant","email":"sgrant1m@hubpages.com","phoneNumber":"970-(203)961-8135","city":"‘Ayn al Bayḑā"},{"id":60,"fullName":"Joyce Cole","email":"jcole1n@omniture.com","phoneNumber":"359-(526)155-8358","city":"Belene"},{"id":61,"fullName":"Ernest Fox","email":"efox1o@craigslist.org","phoneNumber":"62-(140)443-5719","city":"Lowotukan"},{"id":62,"fullName":"Jimmy Henderson","email":"jhenderson1p@yolasite.com","phoneNumber":"33-(426)596-9571","city":"Meylan"},{"id":63,"fullName":"Edward Ortiz","email":"eortiz1q@scientificamerican.com","phoneNumber":"62-(174)590-6746","city":"Desa Wetan Ciakar"},{"id":64,"fullName":"Andrew Thompson","email":"athompson1r@princeton.edu","phoneNumber":"60-(569)170-3015","city":"Kota Kinabalu"},{"id":65,"fullName":"Jason Berry","email":"jberry1s@goodreads.com","phoneNumber":"55-(698)564-8343","city":"Nerópolis"},{"id":66,"fullName":"Wanda Allen","email":"wallen1t@dot.gov","phoneNumber":"420-(844)294-0540","city":"Chrást"},{"id":67,"fullName":"Mark Gordon","email":"mgordon1u@cbsnews.com","phoneNumber":"504-(236)319-9147","city":"San José de Comayagua"},{"id":68,"fullName":"Evelyn Hansen","email":"ehansen1v@va.gov","phoneNumber":"86-(541)388-6439","city":"Ertai"},{"id":69,"fullName":"Steve Baker","email":"sbaker1w@sogou.com","phoneNumber":"998-(837)949-9220","city":"Toshbuloq"},{"id":70,"fullName":"Anna Daniels","email":"adaniels1x@t-online.de","phoneNumber":"44-(741)694-7244","city":"Wirral"},{"id":71,"fullName":"Phyllis Jordan","email":"pjordan1y@clickbank.net","phoneNumber":"30-(988)122-5811","city":"Neochórion"},{"id":72,"fullName":"Michael Smith","email":"msmith1z@ft.com","phoneNumber":"86-(244)194-4803","city":"Hualong"},{"id":73,"fullName":"Jonathan Morris","email":"jmorris20@wordpress.com","phoneNumber":"263-(900)854-6063","city":"Shurugwi"},{"id":74,"fullName":"James Kim","email":"jkim21@ezinearticles.com","phoneNumber":"86-(174)637-7819","city":"Licheng"},{"id":75,"fullName":"Arthur Hernandez","email":"ahernandez22@hatena.ne.jp","phoneNumber":"381-(403)896-7127","city":"Adorjan"},{"id":76,"fullName":"Victor Anderson","email":"vanderson23@narod.ru","phoneNumber":"380-(901)845-0676","city":"Sutysky"},{"id":77,"fullName":"Lillian Campbell","email":"lcampbell24@bigcartel.com","phoneNumber":"7-(756)217-0614","city":"Zolotkovo"},{"id":78,"fullName":"Norma Hansen","email":"nhansen25@zdnet.com","phoneNumber":"385-(799)589-3013","city":"Brnaze"},{"id":79,"fullName":"Patricia Brooks","email":"pbrooks26@hugedomains.com","phoneNumber":"86-(471)164-2289","city":"Lianhe"},{"id":80,"fullName":"Stephanie Moore","email":"smoore27@e-recht24.de","phoneNumber":"86-(567)588-9592","city":"Yinchuan"},{"id":81,"fullName":"Earl Schmidt","email":"eschmidt28@vimeo.com","phoneNumber":"62-(331)775-2640","city":"Mari"},{"id":82,"fullName":"Phillip Thomas","email":"pthomas29@squidoo.com","phoneNumber":"27-(463)820-8001","city":"Postmasburg"},{"id":83,"fullName":"Sandra Weaver","email":"sweaver2a@cyberchimps.com","phoneNumber":"46-(188)510-0950","city":"Norrköping"},{"id":84,"fullName":"Donald Hunter","email":"dhunter2b@phpbb.com","phoneNumber":"54-(245)795-4657","city":"Junín"},{"id":85,"fullName":"Nicole Lawson","email":"nlawson2c@dyndns.org","phoneNumber":"51-(936)168-5783","city":"Colcabamba"},{"id":86,"fullName":"Billy Hart","email":"bhart2d@homestead.com","phoneNumber":"86-(799)349-2868","city":"Bacun"},{"id":87,"fullName":"Dorothy Reid","email":"dreid2e@ucoz.ru","phoneNumber":"66-(917)559-1072","city":"Kamphaeng Phet"},{"id":88,"fullName":"Joshua Miller","email":"jmiller2f@devhub.com","phoneNumber":"380-(818)910-2941","city":"Vinnytsya"},{"id":89,"fullName":"Jane Foster","email":"jfoster2g@joomla.org","phoneNumber":"351-(117)487-6597","city":"Vale Covo"},{"id":90,"fullName":"Rebecca Mendoza","email":"rmendoza2h@army.mil","phoneNumber":"62-(365)836-0294","city":"Kota Trieng"},{"id":91,"fullName":"Betty Myers","email":"bmyers2i@hostgator.com","phoneNumber":"86-(274)895-9849","city":"Shengao"},{"id":92,"fullName":"Janet Welch","email":"jwelch2j@un.org","phoneNumber":"62-(665)308-9855","city":"Jajaway"},{"id":93,"fullName":"Susan Porter","email":"sporter2k@cargocollective.com","phoneNumber":"31-(989)155-1055","city":"Alkmaar"},{"id":94,"fullName":"Judy Walker","email":"jwalker2l@edublogs.org","phoneNumber":"55-(459)737-5906","city":"Tietê"},{"id":95,"fullName":"Andrea Warren","email":"awarren2m@pen.io","phoneNumber":"244-(570)239-5182","city":"Camabatela"},{"id":96,"fullName":"Lawrence Taylor","email":"ltaylor2n@techcrunch.com","phoneNumber":"7-(458)801-4592","city":"Zheleznogorsk-Ilimskiy"},{"id":97,"fullName":"Gloria Foster","email":"gfoster2o@unc.edu","phoneNumber":"63-(982)413-9220","city":"Rosario"},{"id":98,"fullName":"Larry Graham","email":"lgraham2p@google.it","phoneNumber":"62-(876)499-1942","city":"Wairinding"},{"id":99,"fullName":"Craig Murray","email":"cmurray2q@wsj.com","phoneNumber":"62-(246)442-5834","city":"Panggulan"},{"id":100,"fullName":"Harry Roberts","email":"hroberts2r@theglobeandmail.com","phoneNumber":"63-(313)291-8892","city":"Mendez-Nuñez"}];

        this.getContacts = function(cb){
          //var defer = $q.defer();
          $timeout(function () {
            cb(contacts);
          }, 2000);
        //  return defer.promise;
        }

        this.getContactById = function(id, cb){
        //  var defer = $q.defer();
          $timeout(function () {
            cb(_.where(contacts, {"id" : id})[0]);
          }, 2000);
        //  return defer.promise;
        }
        return this;
    }
})();