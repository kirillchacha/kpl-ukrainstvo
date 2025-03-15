(() => {
    var __webpack_modules__ = {
        436: module => {
            (function(factory) {
                if (true && module.exports) module.exports = factory(); else window.intlTelInput = factory();
            })((() => {
                var factoryOutput = (() => {
                    var __defProp = Object.defineProperty;
                    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
                    var __getOwnPropNames = Object.getOwnPropertyNames;
                    var __hasOwnProp = Object.prototype.hasOwnProperty;
                    var __export = (target, all) => {
                        for (var name in all) __defProp(target, name, {
                            get: all[name],
                            enumerable: true
                        });
                    };
                    var __copyProps = (to, from, except, desc) => {
                        if (from && typeof from === "object" || typeof from === "function") for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                            get: () => from[key],
                            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                        });
                        return to;
                    };
                    var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
                        value: true
                    }), mod);
                    var intl_tel_input_exports = {};
                    __export(intl_tel_input_exports, {
                        Iti: () => Iti,
                        default: () => intl_tel_input_default
                    });
                    var rawCountryData = [ [ "af", "93" ], [ "ax", "358", 1 ], [ "al", "355" ], [ "dz", "213" ], [ "as", "1", 5, [ "684" ] ], [ "ad", "376" ], [ "ao", "244" ], [ "ai", "1", 6, [ "264" ] ], [ "ag", "1", 7, [ "268" ] ], [ "ar", "54" ], [ "am", "374" ], [ "aw", "297" ], [ "ac", "247" ], [ "au", "61", 0, null, "0" ], [ "at", "43" ], [ "az", "994" ], [ "bs", "1", 8, [ "242" ] ], [ "bh", "973" ], [ "bd", "880" ], [ "bb", "1", 9, [ "246" ] ], [ "by", "375" ], [ "be", "32" ], [ "bz", "501" ], [ "bj", "229" ], [ "bm", "1", 10, [ "441" ] ], [ "bt", "975" ], [ "bo", "591" ], [ "ba", "387" ], [ "bw", "267" ], [ "br", "55" ], [ "io", "246" ], [ "vg", "1", 11, [ "284" ] ], [ "bn", "673" ], [ "bg", "359" ], [ "bf", "226" ], [ "bi", "257" ], [ "kh", "855" ], [ "cm", "237" ], [ "ca", "1", 1, [ "204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905" ] ], [ "cv", "238" ], [ "bq", "599", 1, [ "3", "4", "7" ] ], [ "ky", "1", 12, [ "345" ] ], [ "cf", "236" ], [ "td", "235" ], [ "cl", "56" ], [ "cn", "86" ], [ "cx", "61", 2, [ "89164" ], "0" ], [ "cc", "61", 1, [ "89162" ], "0" ], [ "co", "57" ], [ "km", "269" ], [ "cg", "242" ], [ "cd", "243" ], [ "ck", "682" ], [ "cr", "506" ], [ "ci", "225" ], [ "hr", "385" ], [ "cu", "53" ], [ "cw", "599", 0 ], [ "cy", "357" ], [ "cz", "420" ], [ "dk", "45" ], [ "dj", "253" ], [ "dm", "1", 13, [ "767" ] ], [ "do", "1", 2, [ "809", "829", "849" ] ], [ "ec", "593" ], [ "eg", "20" ], [ "sv", "503" ], [ "gq", "240" ], [ "er", "291" ], [ "ee", "372" ], [ "sz", "268" ], [ "et", "251" ], [ "fk", "500" ], [ "fo", "298" ], [ "fj", "679" ], [ "fi", "358", 0 ], [ "fr", "33" ], [ "gf", "594" ], [ "pf", "689" ], [ "ga", "241" ], [ "gm", "220" ], [ "ge", "995" ], [ "de", "49" ], [ "gh", "233" ], [ "gi", "350" ], [ "gr", "30" ], [ "gl", "299" ], [ "gd", "1", 14, [ "473" ] ], [ "gp", "590", 0 ], [ "gu", "1", 15, [ "671" ] ], [ "gt", "502" ], [ "gg", "44", 1, [ "1481", "7781", "7839", "7911" ], "0" ], [ "gn", "224" ], [ "gw", "245" ], [ "gy", "592" ], [ "ht", "509" ], [ "hn", "504" ], [ "hk", "852" ], [ "hu", "36" ], [ "is", "354" ], [ "in", "91" ], [ "id", "62" ], [ "ir", "98" ], [ "iq", "964" ], [ "ie", "353" ], [ "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ], "0" ], [ "il", "972" ], [ "it", "39", 0 ], [ "jm", "1", 4, [ "876", "658" ] ], [ "jp", "81" ], [ "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ], "0" ], [ "jo", "962" ], [ "kz", "7", 1, [ "33", "7" ], "8" ], [ "ke", "254" ], [ "ki", "686" ], [ "xk", "383" ], [ "kw", "965" ], [ "kg", "996" ], [ "la", "856" ], [ "lv", "371" ], [ "lb", "961" ], [ "ls", "266" ], [ "lr", "231" ], [ "ly", "218" ], [ "li", "423" ], [ "lt", "370" ], [ "lu", "352" ], [ "mo", "853" ], [ "mg", "261" ], [ "mw", "265" ], [ "my", "60" ], [ "mv", "960" ], [ "ml", "223" ], [ "mt", "356" ], [ "mh", "692" ], [ "mq", "596" ], [ "mr", "222" ], [ "mu", "230" ], [ "yt", "262", 1, [ "269", "639" ], "0" ], [ "mx", "52" ], [ "fm", "691" ], [ "md", "373" ], [ "mc", "377" ], [ "mn", "976" ], [ "me", "382" ], [ "ms", "1", 16, [ "664" ] ], [ "ma", "212", 0, null, "0" ], [ "mz", "258" ], [ "mm", "95" ], [ "na", "264" ], [ "nr", "674" ], [ "np", "977" ], [ "nl", "31" ], [ "nc", "687" ], [ "nz", "64" ], [ "ni", "505" ], [ "ne", "227" ], [ "ng", "234" ], [ "nu", "683" ], [ "nf", "672" ], [ "kp", "850" ], [ "mk", "389" ], [ "mp", "1", 17, [ "670" ] ], [ "no", "47", 0 ], [ "om", "968" ], [ "pk", "92" ], [ "pw", "680" ], [ "ps", "970" ], [ "pa", "507" ], [ "pg", "675" ], [ "py", "595" ], [ "pe", "51" ], [ "ph", "63" ], [ "pl", "48" ], [ "pt", "351" ], [ "pr", "1", 3, [ "787", "939" ] ], [ "qa", "974" ], [ "re", "262", 0, null, "0" ], [ "ro", "40" ], [ "ru", "7", 0, null, "8" ], [ "rw", "250" ], [ "ws", "685" ], [ "sm", "378" ], [ "st", "239" ], [ "sa", "966" ], [ "sn", "221" ], [ "rs", "381" ], [ "sc", "248" ], [ "sl", "232" ], [ "sg", "65" ], [ "sx", "1", 21, [ "721" ] ], [ "sk", "421" ], [ "si", "386" ], [ "sb", "677" ], [ "so", "252" ], [ "za", "27" ], [ "kr", "82" ], [ "ss", "211" ], [ "es", "34" ], [ "lk", "94" ], [ "bl", "590", 1 ], [ "sh", "290" ], [ "kn", "1", 18, [ "869" ] ], [ "lc", "1", 19, [ "758" ] ], [ "mf", "590", 2 ], [ "pm", "508" ], [ "vc", "1", 20, [ "784" ] ], [ "sd", "249" ], [ "sr", "597" ], [ "sj", "47", 1, [ "79" ] ], [ "se", "46" ], [ "ch", "41" ], [ "sy", "963" ], [ "tw", "886" ], [ "tj", "992" ], [ "tz", "255" ], [ "th", "66" ], [ "tl", "670" ], [ "tg", "228" ], [ "tk", "690" ], [ "to", "676" ], [ "tt", "1", 22, [ "868" ] ], [ "tn", "216" ], [ "tr", "90" ], [ "tm", "993" ], [ "tc", "1", 23, [ "649" ] ], [ "tv", "688" ], [ "ug", "256" ], [ "ua", "380" ], [ "ae", "971" ], [ "gb", "44", 0, null, "0" ], [ "us", "1", 0 ], [ "uy", "598" ], [ "vi", "1", 24, [ "340" ] ], [ "uz", "998" ], [ "vu", "678" ], [ "va", "39", 1, [ "06698" ] ], [ "ve", "58" ], [ "vn", "84" ], [ "wf", "681" ], [ "eh", "212", 1, [ "5288", "5289" ], "0" ], [ "ye", "967" ], [ "zm", "260" ], [ "zw", "263" ] ];
                    var allCountries = [];
                    for (let i = 0; i < rawCountryData.length; i++) {
                        const c = rawCountryData[i];
                        allCountries[i] = {
                            name: "",
                            iso2: c[0],
                            dialCode: c[1],
                            priority: c[2] || 0,
                            areaCodes: c[3] || null,
                            nodeById: {},
                            nationalPrefix: c[4] || null
                        };
                    }
                    var data_default = allCountries;
                    var countryTranslations = {
                        ad: "Andorra",
                        ae: "United Arab Emirates",
                        af: "Afghanistan",
                        ag: "Antigua & Barbuda",
                        ai: "Anguilla",
                        al: "Albania",
                        am: "Armenia",
                        ao: "Angola",
                        ar: "Argentina",
                        as: "American Samoa",
                        at: "Austria",
                        au: "Australia",
                        aw: "Aruba",
                        ax: "Åland Islands",
                        az: "Azerbaijan",
                        ba: "Bosnia & Herzegovina",
                        bb: "Barbados",
                        bd: "Bangladesh",
                        be: "Belgium",
                        bf: "Burkina Faso",
                        bg: "Bulgaria",
                        bh: "Bahrain",
                        bi: "Burundi",
                        bj: "Benin",
                        bl: "St. Barthélemy",
                        bm: "Bermuda",
                        bn: "Brunei",
                        bo: "Bolivia",
                        bq: "Caribbean Netherlands",
                        br: "Brazil",
                        bs: "Bahamas",
                        bt: "Bhutan",
                        bw: "Botswana",
                        by: "Belarus",
                        bz: "Belize",
                        ca: "Canada",
                        cc: "Cocos (Keeling) Islands",
                        cd: "Congo - Kinshasa",
                        cf: "Central African Republic",
                        cg: "Congo - Brazzaville",
                        ch: "Switzerland",
                        ci: "Côte d’Ivoire",
                        ck: "Cook Islands",
                        cl: "Chile",
                        cm: "Cameroon",
                        cn: "China",
                        co: "Colombia",
                        cr: "Costa Rica",
                        cu: "Cuba",
                        cv: "Cape Verde",
                        cw: "Curaçao",
                        cx: "Christmas Island",
                        cy: "Cyprus",
                        cz: "Czechia",
                        de: "Germany",
                        dj: "Djibouti",
                        dk: "Denmark",
                        dm: "Dominica",
                        do: "Dominican Republic",
                        dz: "Algeria",
                        ec: "Ecuador",
                        ee: "Estonia",
                        eg: "Egypt",
                        eh: "Western Sahara",
                        er: "Eritrea",
                        es: "Spain",
                        et: "Ethiopia",
                        fi: "Finland",
                        fj: "Fiji",
                        fk: "Falkland Islands",
                        fm: "Micronesia",
                        fo: "Faroe Islands",
                        fr: "France",
                        ga: "Gabon",
                        gb: "United Kingdom",
                        gd: "Grenada",
                        ge: "Georgia",
                        gf: "French Guiana",
                        gg: "Guernsey",
                        gh: "Ghana",
                        gi: "Gibraltar",
                        gl: "Greenland",
                        gm: "Gambia",
                        gn: "Guinea",
                        gp: "Guadeloupe",
                        gq: "Equatorial Guinea",
                        gr: "Greece",
                        gt: "Guatemala",
                        gu: "Guam",
                        gw: "Guinea-Bissau",
                        gy: "Guyana",
                        hk: "Hong Kong SAR China",
                        hn: "Honduras",
                        hr: "Croatia",
                        ht: "Haiti",
                        hu: "Hungary",
                        id: "Indonesia",
                        ie: "Ireland",
                        il: "Israel",
                        im: "Isle of Man",
                        in: "India",
                        io: "British Indian Ocean Territory",
                        iq: "Iraq",
                        ir: "Iran",
                        is: "Iceland",
                        it: "Italy",
                        je: "Jersey",
                        jm: "Jamaica",
                        jo: "Jordan",
                        jp: "Japan",
                        ke: "Kenya",
                        kg: "Kyrgyzstan",
                        kh: "Cambodia",
                        ki: "Kiribati",
                        km: "Comoros",
                        kn: "St. Kitts & Nevis",
                        kp: "North Korea",
                        kr: "South Korea",
                        kw: "Kuwait",
                        ky: "Cayman Islands",
                        kz: "Kazakhstan",
                        la: "Laos",
                        lb: "Lebanon",
                        lc: "St. Lucia",
                        li: "Liechtenstein",
                        lk: "Sri Lanka",
                        lr: "Liberia",
                        ls: "Lesotho",
                        lt: "Lithuania",
                        lu: "Luxembourg",
                        lv: "Latvia",
                        ly: "Libya",
                        ma: "Morocco",
                        mc: "Monaco",
                        md: "Moldova",
                        me: "Montenegro",
                        mf: "St. Martin",
                        mg: "Madagascar",
                        mh: "Marshall Islands",
                        mk: "North Macedonia",
                        ml: "Mali",
                        mm: "Myanmar (Burma)",
                        mn: "Mongolia",
                        mo: "Macao SAR China",
                        mp: "Northern Mariana Islands",
                        mq: "Martinique",
                        mr: "Mauritania",
                        ms: "Montserrat",
                        mt: "Malta",
                        mu: "Mauritius",
                        mv: "Maldives",
                        mw: "Malawi",
                        mx: "Mexico",
                        my: "Malaysia",
                        mz: "Mozambique",
                        na: "Namibia",
                        nc: "New Caledonia",
                        ne: "Niger",
                        nf: "Norfolk Island",
                        ng: "Nigeria",
                        ni: "Nicaragua",
                        nl: "Netherlands",
                        no: "Norway",
                        np: "Nepal",
                        nr: "Nauru",
                        nu: "Niue",
                        nz: "New Zealand",
                        om: "Oman",
                        pa: "Panama",
                        pe: "Peru",
                        pf: "French Polynesia",
                        pg: "Papua New Guinea",
                        ph: "Philippines",
                        pk: "Pakistan",
                        pl: "Poland",
                        pm: "St. Pierre & Miquelon",
                        pr: "Puerto Rico",
                        ps: "Palestinian Territories",
                        pt: "Portugal",
                        pw: "Palau",
                        py: "Paraguay",
                        qa: "Qatar",
                        re: "Réunion",
                        ro: "Romania",
                        rs: "Serbia",
                        ru: "Russia",
                        rw: "Rwanda",
                        sa: "Saudi Arabia",
                        sb: "Solomon Islands",
                        sc: "Seychelles",
                        sd: "Sudan",
                        se: "Sweden",
                        sg: "Singapore",
                        sh: "St. Helena",
                        si: "Slovenia",
                        sj: "Svalbard & Jan Mayen",
                        sk: "Slovakia",
                        sl: "Sierra Leone",
                        sm: "San Marino",
                        sn: "Senegal",
                        so: "Somalia",
                        sr: "Suriname",
                        ss: "South Sudan",
                        st: "São Tomé & Príncipe",
                        sv: "El Salvador",
                        sx: "Sint Maarten",
                        sy: "Syria",
                        sz: "Eswatini",
                        tc: "Turks & Caicos Islands",
                        td: "Chad",
                        tg: "Togo",
                        th: "Thailand",
                        tj: "Tajikistan",
                        tk: "Tokelau",
                        tl: "Timor-Leste",
                        tm: "Turkmenistan",
                        tn: "Tunisia",
                        to: "Tonga",
                        tr: "Turkey",
                        tt: "Trinidad & Tobago",
                        tv: "Tuvalu",
                        tw: "Taiwan",
                        tz: "Tanzania",
                        ua: "Ukraine",
                        ug: "Uganda",
                        us: "United States",
                        uy: "Uruguay",
                        uz: "Uzbekistan",
                        va: "Vatican City",
                        vc: "St. Vincent & Grenadines",
                        ve: "Venezuela",
                        vg: "British Virgin Islands",
                        vi: "U.S. Virgin Islands",
                        vn: "Vietnam",
                        vu: "Vanuatu",
                        wf: "Wallis & Futuna",
                        ws: "Samoa",
                        ye: "Yemen",
                        yt: "Mayotte",
                        za: "South Africa",
                        zm: "Zambia",
                        zw: "Zimbabwe"
                    };
                    var countries_default = countryTranslations;
                    var interfaceTranslations = {
                        selectedCountryAriaLabel: "Selected country",
                        noCountrySelected: "No country selected",
                        countryListAriaLabel: "List of countries",
                        searchPlaceholder: "Search",
                        zeroSearchResults: "No results found",
                        oneSearchResult: "1 result found",
                        multipleSearchResults: "${count} results found",
                        ac: "Ascension Island",
                        xk: "Kosovo"
                    };
                    var interface_default = interfaceTranslations;
                    var allTranslations = {
                        ...countries_default,
                        ...interface_default
                    };
                    var en_default = allTranslations;
                    for (let i = 0; i < data_default.length; i++) data_default[i].name = en_default[data_default[i].iso2];
                    var id = 0;
                    var defaults = {
                        allowDropdown: true,
                        autoPlaceholder: "polite",
                        containerClass: "",
                        countryOrder: null,
                        countrySearch: true,
                        customPlaceholder: null,
                        dropdownContainer: null,
                        excludeCountries: [],
                        fixDropdownWidth: true,
                        formatAsYouType: true,
                        formatOnDisplay: true,
                        geoIpLookup: null,
                        hiddenInput: null,
                        i18n: {},
                        initialCountry: "",
                        loadUtils: null,
                        nationalMode: true,
                        onlyCountries: [],
                        placeholderNumberType: "MOBILE",
                        showFlags: true,
                        separateDialCode: false,
                        strictMode: false,
                        useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500 : false,
                        validationNumberTypes: [ "MOBILE" ]
                    };
                    var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
                    var getNumeric = s => s.replace(/\D/g, "");
                    var normaliseString = (s = "") => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                    var isRegionlessNanp = number => {
                        const numeric = getNumeric(number);
                        if (numeric.charAt(0) === "1") {
                            const areaCode = numeric.substr(1, 3);
                            return regionlessNanpNumbers.includes(areaCode);
                        }
                        return false;
                    };
                    var translateCursorPosition = (relevantChars, formattedValue, prevCaretPos, isDeleteForwards) => {
                        if (prevCaretPos === 0 && !isDeleteForwards) return 0;
                        let count = 0;
                        for (let i = 0; i < formattedValue.length; i++) {
                            if (/[+0-9]/.test(formattedValue[i])) count++;
                            if (count === relevantChars && !isDeleteForwards) return i + 1;
                            if (isDeleteForwards && count === relevantChars + 1) return i;
                        }
                        return formattedValue.length;
                    };
                    var createEl = (name, attrs, container) => {
                        const el = document.createElement(name);
                        if (attrs) Object.entries(attrs).forEach((([key, value]) => el.setAttribute(key, value)));
                        if (container) container.appendChild(el);
                        return el;
                    };
                    var forEachInstance = (method, ...args) => {
                        const {instances} = intlTelInput;
                        Object.values(instances).forEach((instance => instance[method](...args)));
                    };
                    var Iti = class {
                        constructor(input, customOptions = {}) {
                            this.id = id++;
                            this.telInput = input;
                            this.highlightedItem = null;
                            this.options = Object.assign({}, defaults, customOptions);
                            this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
                        }
                        _init() {
                            if (this.options.useFullscreenPopup) this.options.fixDropdownWidth = false;
                            if (this.options.onlyCountries.length === 1) this.options.initialCountry = this.options.onlyCountries[0];
                            if (this.options.separateDialCode) this.options.nationalMode = false;
                            if (this.options.allowDropdown && !this.options.showFlags && !this.options.separateDialCode) this.options.nationalMode = false;
                            if (this.options.useFullscreenPopup && !this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                            this.isAndroid = typeof navigator !== "undefined" ? /Android/i.test(navigator.userAgent) : false;
                            this.isRTL = !!this.telInput.closest("[dir=rtl]");
                            const showOnDefaultSide = this.options.allowDropdown || this.options.separateDialCode;
                            this.showSelectedCountryOnLeft = this.isRTL ? !showOnDefaultSide : showOnDefaultSide;
                            if (this.options.separateDialCode) if (this.isRTL) this.originalPaddingRight = this.telInput.style.paddingRight; else this.originalPaddingLeft = this.telInput.style.paddingLeft;
                            this.options.i18n = {
                                ...en_default,
                                ...this.options.i18n
                            };
                            const autoCountryPromise = new Promise(((resolve, reject) => {
                                this.resolveAutoCountryPromise = resolve;
                                this.rejectAutoCountryPromise = reject;
                            }));
                            const utilsScriptPromise = new Promise(((resolve, reject) => {
                                this.resolveUtilsScriptPromise = resolve;
                                this.rejectUtilsScriptPromise = reject;
                            }));
                            this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                            this.selectedCountryData = {};
                            this._processCountryData();
                            this._generateMarkup();
                            this._setInitialState();
                            this._initListeners();
                            this._initRequests();
                        }
                        _processCountryData() {
                            this._processAllCountries();
                            this._processDialCodes();
                            this._translateCountryNames();
                            this._sortCountries();
                        }
                        _sortCountries() {
                            if (this.options.countryOrder) this.options.countryOrder = this.options.countryOrder.map((country => country.toLowerCase()));
                            this.countries.sort(((a, b) => {
                                const {countryOrder} = this.options;
                                if (countryOrder) {
                                    const aIndex = countryOrder.indexOf(a.iso2);
                                    const bIndex = countryOrder.indexOf(b.iso2);
                                    const aIndexExists = aIndex > -1;
                                    const bIndexExists = bIndex > -1;
                                    if (aIndexExists || bIndexExists) {
                                        if (aIndexExists && bIndexExists) return aIndex - bIndex;
                                        return aIndexExists ? -1 : 1;
                                    }
                                }
                                return a.name.localeCompare(b.name);
                            }));
                        }
                        _addToDialCodeMap(iso2, dialCode, priority) {
                            if (dialCode.length > this.dialCodeMaxLen) this.dialCodeMaxLen = dialCode.length;
                            if (!this.dialCodeToIso2Map.hasOwnProperty(dialCode)) this.dialCodeToIso2Map[dialCode] = [];
                            for (let i = 0; i < this.dialCodeToIso2Map[dialCode].length; i++) if (this.dialCodeToIso2Map[dialCode][i] === iso2) return;
                            const index = priority !== void 0 ? priority : this.dialCodeToIso2Map[dialCode].length;
                            this.dialCodeToIso2Map[dialCode][index] = iso2;
                        }
                        _processAllCountries() {
                            const {onlyCountries, excludeCountries} = this.options;
                            if (onlyCountries.length) {
                                const lowerCaseOnlyCountries = onlyCountries.map((country => country.toLowerCase()));
                                this.countries = data_default.filter((country => lowerCaseOnlyCountries.includes(country.iso2)));
                            } else if (excludeCountries.length) {
                                const lowerCaseExcludeCountries = excludeCountries.map((country => country.toLowerCase()));
                                this.countries = data_default.filter((country => !lowerCaseExcludeCountries.includes(country.iso2)));
                            } else this.countries = data_default;
                        }
                        _translateCountryNames() {
                            for (let i = 0; i < this.countries.length; i++) {
                                const iso2 = this.countries[i].iso2.toLowerCase();
                                if (this.options.i18n.hasOwnProperty(iso2)) this.countries[i].name = this.options.i18n[iso2];
                            }
                        }
                        _processDialCodes() {
                            this.dialCodes = {};
                            this.dialCodeMaxLen = 0;
                            this.dialCodeToIso2Map = {};
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                                this._addToDialCodeMap(c.iso2, c.dialCode, c.priority);
                            }
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                if (c.areaCodes) {
                                    const rootIso2Code = this.dialCodeToIso2Map[c.dialCode][0];
                                    for (let j = 0; j < c.areaCodes.length; j++) {
                                        const areaCode = c.areaCodes[j];
                                        for (let k = 1; k < areaCode.length; k++) {
                                            const partialAreaCode = areaCode.substr(0, k);
                                            const partialDialCode = c.dialCode + partialAreaCode;
                                            this._addToDialCodeMap(rootIso2Code, partialDialCode);
                                            this._addToDialCodeMap(c.iso2, partialDialCode);
                                        }
                                        this._addToDialCodeMap(c.iso2, c.dialCode + areaCode);
                                    }
                                }
                            }
                        }
                        _generateMarkup() {
                            this.telInput.classList.add("iti__tel-input");
                            if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) this.telInput.setAttribute("autocomplete", "off");
                            const {allowDropdown, separateDialCode, showFlags, containerClass, hiddenInput, dropdownContainer, fixDropdownWidth, useFullscreenPopup, countrySearch, i18n} = this.options;
                            let parentClass = "iti";
                            if (allowDropdown) parentClass += " iti--allow-dropdown";
                            if (showFlags) parentClass += " iti--show-flags";
                            if (containerClass) parentClass += ` ${containerClass}`;
                            if (!useFullscreenPopup) parentClass += " iti--inline-dropdown";
                            const wrapper = createEl("div", {
                                class: parentClass
                            });
                            this.telInput.parentNode?.insertBefore(wrapper, this.telInput);
                            if (allowDropdown || showFlags || separateDialCode) {
                                this.countryContainer = createEl("div", {
                                    class: "iti__country-container"
                                }, wrapper);
                                if (this.showSelectedCountryOnLeft) this.countryContainer.style.left = "0px"; else this.countryContainer.style.right = "0px";
                                if (allowDropdown) {
                                    this.selectedCountry = createEl("button", {
                                        type: "button",
                                        class: "iti__selected-country",
                                        "aria-expanded": "false",
                                        "aria-label": this.options.i18n.selectedCountryAriaLabel,
                                        "aria-haspopup": "true",
                                        "aria-controls": `iti-${this.id}__dropdown-content`,
                                        role: "combobox"
                                    }, this.countryContainer);
                                    if (this.telInput.disabled) this.selectedCountry.setAttribute("disabled", "true");
                                } else this.selectedCountry = createEl("div", {
                                    class: "iti__selected-country"
                                }, this.countryContainer);
                                const selectedCountryPrimary = createEl("div", {
                                    class: "iti__selected-country-primary"
                                }, this.selectedCountry);
                                this.selectedCountryInner = createEl("div", {
                                    class: "iti__flag"
                                }, selectedCountryPrimary);
                                this.selectedCountryA11yText = createEl("span", {
                                    class: "iti__a11y-text"
                                }, this.selectedCountryInner);
                                if (allowDropdown) this.dropdownArrow = createEl("div", {
                                    class: "iti__arrow",
                                    "aria-hidden": "true"
                                }, selectedCountryPrimary);
                                if (separateDialCode) this.selectedDialCode = createEl("div", {
                                    class: "iti__selected-dial-code"
                                }, this.selectedCountry);
                                if (allowDropdown) {
                                    const extraClasses = fixDropdownWidth ? "" : "iti--flexible-dropdown-width";
                                    this.dropdownContent = createEl("div", {
                                        id: `iti-${this.id}__dropdown-content`,
                                        class: `iti__dropdown-content iti__hide ${extraClasses}`
                                    });
                                    if (countrySearch) {
                                        this.searchInput = createEl("input", {
                                            type: "text",
                                            class: "iti__search-input",
                                            placeholder: i18n.searchPlaceholder,
                                            role: "combobox",
                                            "aria-expanded": "true",
                                            "aria-label": i18n.searchPlaceholder,
                                            "aria-controls": `iti-${this.id}__country-listbox`,
                                            "aria-autocomplete": "list",
                                            autocomplete: "off"
                                        }, this.dropdownContent);
                                        this.searchResultsA11yText = createEl("span", {
                                            class: "iti__a11y-text"
                                        }, this.dropdownContent);
                                    }
                                    this.countryList = createEl("ul", {
                                        class: "iti__country-list",
                                        id: `iti-${this.id}__country-listbox`,
                                        role: "listbox",
                                        "aria-label": i18n.countryListAriaLabel
                                    }, this.dropdownContent);
                                    this._appendListItems();
                                    if (countrySearch) this._updateSearchResultsText();
                                    if (dropdownContainer) {
                                        let dropdownClasses = "iti iti--container";
                                        if (useFullscreenPopup) dropdownClasses += " iti--fullscreen-popup"; else dropdownClasses += " iti--inline-dropdown";
                                        this.dropdown = createEl("div", {
                                            class: dropdownClasses
                                        });
                                        this.dropdown.appendChild(this.dropdownContent);
                                    } else this.countryContainer.appendChild(this.dropdownContent);
                                }
                            }
                            wrapper.appendChild(this.telInput);
                            this._updateInputPadding();
                            if (hiddenInput) {
                                const telInputName = this.telInput.getAttribute("name") || "";
                                const names = hiddenInput(telInputName);
                                if (names.phone) {
                                    const existingInput = this.telInput.form?.querySelector(`input[name="${names.phone}"]`);
                                    if (existingInput) this.hiddenInput = existingInput; else {
                                        this.hiddenInput = createEl("input", {
                                            type: "hidden",
                                            name: names.phone
                                        });
                                        wrapper.appendChild(this.hiddenInput);
                                    }
                                }
                                if (names.country) {
                                    const existingInput = this.telInput.form?.querySelector(`input[name="${names.country}"]`);
                                    if (existingInput) this.hiddenInputCountry = existingInput; else {
                                        this.hiddenInputCountry = createEl("input", {
                                            type: "hidden",
                                            name: names.country
                                        });
                                        wrapper.appendChild(this.hiddenInputCountry);
                                    }
                                }
                            }
                        }
                        _appendListItems() {
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                const extraClass = i === 0 ? "iti__highlight" : "";
                                const listItem = createEl("li", {
                                    id: `iti-${this.id}__item-${c.iso2}`,
                                    class: `iti__country ${extraClass}`,
                                    tabindex: "-1",
                                    role: "option",
                                    "data-dial-code": c.dialCode,
                                    "data-country-code": c.iso2,
                                    "aria-selected": "false"
                                }, this.countryList);
                                c.nodeById[this.id] = listItem;
                                let content = "";
                                if (this.options.showFlags) content += `<div class='iti__flag iti__${c.iso2}'></div>`;
                                content += `<span class='iti__country-name'>${c.name}</span>`;
                                content += `<span class='iti__dial-code'>+${c.dialCode}</span>`;
                                listItem.insertAdjacentHTML("beforeend", content);
                            }
                        }
                        _setInitialState(overrideAutoCountry = false) {
                            const attributeValue = this.telInput.getAttribute("value");
                            const inputValue = this.telInput.value;
                            const useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                            const val = useAttribute ? attributeValue : inputValue;
                            const dialCode = this._getDialCode(val);
                            const isRegionlessNanpNumber = isRegionlessNanp(val);
                            const {initialCountry, geoIpLookup} = this.options;
                            const isAutoCountry = initialCountry === "auto" && geoIpLookup;
                            if (dialCode && !isRegionlessNanpNumber) this._updateCountryFromNumber(val); else if (!isAutoCountry || overrideAutoCountry) {
                                const lowerInitialCountry = initialCountry ? initialCountry.toLowerCase() : "";
                                const isValidInitialCountry = lowerInitialCountry && this._getCountryData(lowerInitialCountry, true);
                                if (isValidInitialCountry) this._setCountry(lowerInitialCountry); else if (dialCode && isRegionlessNanpNumber) this._setCountry("us"); else this._setCountry();
                            }
                            if (val) this._updateValFromNumber(val);
                        }
                        _initListeners() {
                            this._initTelInputListeners();
                            if (this.options.allowDropdown) this._initDropdownListeners();
                            if ((this.hiddenInput || this.hiddenInputCountry) && this.telInput.form) this._initHiddenInputListener();
                        }
                        _initHiddenInputListener() {
                            this._handleHiddenInputSubmit = () => {
                                if (this.hiddenInput) this.hiddenInput.value = this.getNumber();
                                if (this.hiddenInputCountry) this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "";
                            };
                            this.telInput.form?.addEventListener("submit", this._handleHiddenInputSubmit);
                        }
                        _initDropdownListeners() {
                            this._handleLabelClick = e => {
                                if (this.dropdownContent.classList.contains("iti__hide")) this.telInput.focus(); else e.preventDefault();
                            };
                            const label = this.telInput.closest("label");
                            if (label) label.addEventListener("click", this._handleLabelClick);
                            this._handleClickSelectedCountry = () => {
                                if (this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly) this._openDropdown();
                            };
                            this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry);
                            this._handleCountryContainerKeydown = e => {
                                const isDropdownHidden = this.dropdownContent.classList.contains("iti__hide");
                                if (isDropdownHidden && [ "ArrowUp", "ArrowDown", " ", "Enter" ].includes(e.key)) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this._openDropdown();
                                }
                                if (e.key === "Tab") this._closeDropdown();
                            };
                            this.countryContainer.addEventListener("keydown", this._handleCountryContainerKeydown);
                        }
                        _initRequests() {
                            let {loadUtils, initialCountry, geoIpLookup} = this.options;
                            if (loadUtils && !intlTelInput.utils) {
                                this._handlePageLoad = () => {
                                    window.removeEventListener("load", this._handlePageLoad);
                                    intlTelInput.attachUtils(loadUtils)?.catch((() => {}));
                                };
                                if (intlTelInput.documentReady()) this._handlePageLoad(); else window.addEventListener("load", this._handlePageLoad);
                            } else this.resolveUtilsScriptPromise();
                            const isAutoCountry = initialCountry === "auto" && geoIpLookup;
                            if (isAutoCountry && !this.selectedCountryData.iso2) this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                        }
                        _loadAutoCountry() {
                            if (intlTelInput.autoCountry) this.handleAutoCountry(); else if (!intlTelInput.startedLoadingAutoCountry) {
                                intlTelInput.startedLoadingAutoCountry = true;
                                if (typeof this.options.geoIpLookup === "function") this.options.geoIpLookup(((iso2 = "") => {
                                    const iso2Lower = iso2.toLowerCase();
                                    const isValidIso2 = iso2Lower && this._getCountryData(iso2Lower, true);
                                    if (isValidIso2) {
                                        intlTelInput.autoCountry = iso2Lower;
                                        setTimeout((() => forEachInstance("handleAutoCountry")));
                                    } else {
                                        this._setInitialState(true);
                                        forEachInstance("rejectAutoCountryPromise");
                                    }
                                }), (() => {
                                    this._setInitialState(true);
                                    forEachInstance("rejectAutoCountryPromise");
                                }));
                            }
                        }
                        _openDropdownWithPlus() {
                            this._openDropdown();
                            this.searchInput.value = "+";
                            this._filterCountries("", true);
                        }
                        _initTelInputListeners() {
                            const {strictMode, formatAsYouType, separateDialCode, formatOnDisplay, allowDropdown, countrySearch} = this.options;
                            let userOverrideFormatting = false;
                            if (/\p{L}/u.test(this.telInput.value)) userOverrideFormatting = true;
                            this._handleInputEvent = e => {
                                if (this.isAndroid && e?.data === "+" && separateDialCode && allowDropdown && countrySearch) {
                                    const currentCaretPos = this.telInput.selectionStart || 0;
                                    const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos - 1);
                                    const valueAfterCaret = this.telInput.value.substring(currentCaretPos);
                                    this.telInput.value = valueBeforeCaret + valueAfterCaret;
                                    this._openDropdownWithPlus();
                                    return;
                                }
                                if (this._updateCountryFromNumber(this.telInput.value)) this._triggerCountryChange();
                                const isFormattingChar = e?.data && /[^+0-9]/.test(e.data);
                                const isPaste = e?.inputType === "insertFromPaste" && this.telInput.value;
                                if (isFormattingChar || isPaste && !strictMode) userOverrideFormatting = true; else if (!/[^+0-9]/.test(this.telInput.value)) userOverrideFormatting = false;
                                const disableFormatOnSetNumber = e?.detail && e.detail["isSetNumber"] && !formatOnDisplay;
                                if (formatAsYouType && !userOverrideFormatting && !disableFormatOnSetNumber) {
                                    const currentCaretPos = this.telInput.selectionStart || 0;
                                    const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos);
                                    const relevantCharsBeforeCaret = valueBeforeCaret.replace(/[^+0-9]/g, "").length;
                                    const isDeleteForwards = e?.inputType === "deleteContentForward";
                                    const formattedValue = this._formatNumberAsYouType();
                                    const newCaretPos = translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
                                    this.telInput.value = formattedValue;
                                    this.telInput.setSelectionRange(newCaretPos, newCaretPos);
                                }
                            };
                            this.telInput.addEventListener("input", this._handleInputEvent);
                            if (strictMode || separateDialCode) {
                                this._handleKeydownEvent = e => {
                                    if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
                                        if (separateDialCode && allowDropdown && countrySearch && e.key === "+") {
                                            e.preventDefault();
                                            this._openDropdownWithPlus();
                                            return;
                                        }
                                        if (strictMode) {
                                            const value = this.telInput.value;
                                            const alreadyHasPlus = value.charAt(0) === "+";
                                            const isInitialPlus = !alreadyHasPlus && this.telInput.selectionStart === 0 && e.key === "+";
                                            const isNumeric = /^[0-9]$/.test(e.key);
                                            const isAllowedChar = separateDialCode ? isNumeric : isInitialPlus || isNumeric;
                                            const newValue = value.slice(0, this.telInput.selectionStart) + e.key + value.slice(this.telInput.selectionEnd);
                                            const newFullNumber = this._getFullNumber(newValue);
                                            const coreNumber = intlTelInput.utils.getCoreNumber(newFullNumber, this.selectedCountryData.iso2);
                                            const hasExceededMaxLength = this.maxCoreNumberLength && coreNumber.length > this.maxCoreNumberLength;
                                            let isChangingDialCode = false;
                                            if (alreadyHasPlus) {
                                                const currentCountry = this.selectedCountryData.iso2;
                                                const newCountry = this._getCountryFromNumber(newFullNumber);
                                                isChangingDialCode = newCountry !== currentCountry;
                                            }
                                            if (!isAllowedChar || hasExceededMaxLength && !isChangingDialCode && !isInitialPlus) e.preventDefault();
                                        }
                                    }
                                };
                                this.telInput.addEventListener("keydown", this._handleKeydownEvent);
                            }
                        }
                        _cap(number) {
                            const max = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
                            return max && number.length > max ? number.substr(0, max) : number;
                        }
                        _trigger(name, detailProps = {}) {
                            const e = new CustomEvent(name, {
                                bubbles: true,
                                cancelable: true,
                                detail: detailProps
                            });
                            this.telInput.dispatchEvent(e);
                        }
                        _openDropdown() {
                            const {fixDropdownWidth, countrySearch} = this.options;
                            if (fixDropdownWidth) this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`;
                            this.dropdownContent.classList.remove("iti__hide");
                            this.selectedCountry.setAttribute("aria-expanded", "true");
                            this._setDropdownPosition();
                            if (countrySearch) {
                                const firstCountryItem = this.countryList.firstElementChild;
                                if (firstCountryItem) {
                                    this._highlightListItem(firstCountryItem, false);
                                    this.countryList.scrollTop = 0;
                                }
                                this.searchInput.focus();
                            }
                            this._bindDropdownListeners();
                            this.dropdownArrow.classList.add("iti__arrow--up");
                            this._trigger("open:countrydropdown");
                        }
                        _setDropdownPosition() {
                            if (this.options.dropdownContainer) this.options.dropdownContainer.appendChild(this.dropdown);
                            if (!this.options.useFullscreenPopup) {
                                const inputPosRelativeToVP = this.telInput.getBoundingClientRect();
                                const inputHeight = this.telInput.offsetHeight;
                                if (this.options.dropdownContainer) {
                                    this.dropdown.style.top = `${inputPosRelativeToVP.top + inputHeight}px`;
                                    this.dropdown.style.left = `${inputPosRelativeToVP.left}px`;
                                    this._handleWindowScroll = () => this._closeDropdown();
                                    window.addEventListener("scroll", this._handleWindowScroll);
                                }
                            }
                        }
                        _bindDropdownListeners() {
                            this._handleMouseoverCountryList = e => {
                                const listItem = e.target?.closest(".iti__country");
                                if (listItem) this._highlightListItem(listItem, false);
                            };
                            this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                            this._handleClickCountryList = e => {
                                const listItem = e.target?.closest(".iti__country");
                                if (listItem) this._selectListItem(listItem);
                            };
                            this.countryList.addEventListener("click", this._handleClickCountryList);
                            let isOpening = true;
                            this._handleClickOffToClose = () => {
                                if (!isOpening) this._closeDropdown();
                                isOpening = false;
                            };
                            document.documentElement.addEventListener("click", this._handleClickOffToClose);
                            let query = "";
                            let queryTimer = null;
                            this._handleKeydownOnDropdown = e => {
                                if ([ "ArrowUp", "ArrowDown", "Enter", "Escape" ].includes(e.key)) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (e.key === "ArrowUp" || e.key === "ArrowDown") this._handleUpDownKey(e.key); else if (e.key === "Enter") this._handleEnterKey(); else if (e.key === "Escape") this._closeDropdown();
                                }
                                if (!this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                                    e.stopPropagation();
                                    if (queryTimer) clearTimeout(queryTimer);
                                    query += e.key.toLowerCase();
                                    this._searchForCountry(query);
                                    queryTimer = setTimeout((() => {
                                        query = "";
                                    }), 1e3);
                                }
                            };
                            document.addEventListener("keydown", this._handleKeydownOnDropdown);
                            if (this.options.countrySearch) {
                                const doFilter = () => {
                                    const inputQuery = this.searchInput.value.trim();
                                    if (inputQuery) this._filterCountries(inputQuery); else this._filterCountries("", true);
                                };
                                let keyupTimer = null;
                                this._handleSearchChange = () => {
                                    if (keyupTimer) clearTimeout(keyupTimer);
                                    keyupTimer = setTimeout((() => {
                                        doFilter();
                                        keyupTimer = null;
                                    }), 100);
                                };
                                this.searchInput.addEventListener("input", this._handleSearchChange);
                                this.searchInput.addEventListener("click", (e => e.stopPropagation()));
                            }
                        }
                        _searchForCountry(query) {
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                const startsWith = c.name.substr(0, query.length).toLowerCase() === query;
                                if (startsWith) {
                                    const listItem = c.nodeById[this.id];
                                    this._highlightListItem(listItem, false);
                                    this._scrollTo(listItem);
                                    break;
                                }
                            }
                        }
                        _filterCountries(query, isReset = false) {
                            let noCountriesAddedYet = true;
                            this.countryList.innerHTML = "";
                            const normalisedQuery = normaliseString(query);
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                const normalisedCountryName = normaliseString(c.name);
                                const countryInitials = c.name.split(/[^a-zA-ZÀ-ÿа-яА-Я]/).map((word => word[0])).join("").toLowerCase();
                                const fullDialCode = `+${c.dialCode}`;
                                if (isReset || normalisedCountryName.includes(normalisedQuery) || fullDialCode.includes(normalisedQuery) || c.iso2.includes(normalisedQuery) || countryInitials.includes(normalisedQuery)) {
                                    const listItem = c.nodeById[this.id];
                                    if (listItem) this.countryList.appendChild(listItem);
                                    if (noCountriesAddedYet) {
                                        this._highlightListItem(listItem, false);
                                        noCountriesAddedYet = false;
                                    }
                                }
                            }
                            if (noCountriesAddedYet) this._highlightListItem(null, false);
                            this.countryList.scrollTop = 0;
                            this._updateSearchResultsText();
                        }
                        _updateSearchResultsText() {
                            const {i18n} = this.options;
                            const count = this.countryList.childElementCount;
                            let searchText;
                            if (count === 0) searchText = i18n.zeroSearchResults; else if (count === 1) searchText = i18n.oneSearchResult; else searchText = i18n.multipleSearchResults.replace("${count}", count.toString());
                            this.searchResultsA11yText.textContent = searchText;
                        }
                        _handleUpDownKey(key) {
                            let next = key === "ArrowUp" ? this.highlightedItem?.previousElementSibling : this.highlightedItem?.nextElementSibling;
                            if (!next && this.countryList.childElementCount > 1) next = key === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild;
                            if (next) {
                                this._scrollTo(next);
                                this._highlightListItem(next, false);
                            }
                        }
                        _handleEnterKey() {
                            if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                        }
                        _updateValFromNumber(fullNumber) {
                            let number = fullNumber;
                            if (this.options.formatOnDisplay && intlTelInput.utils && this.selectedCountryData) {
                                const useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.separateDialCode;
                                const {NATIONAL, INTERNATIONAL} = intlTelInput.utils.numberFormat;
                                const format = useNational ? NATIONAL : INTERNATIONAL;
                                number = intlTelInput.utils.formatNumber(number, this.selectedCountryData.iso2, format);
                            }
                            number = this._beforeSetNumber(number);
                            this.telInput.value = number;
                        }
                        _updateCountryFromNumber(fullNumber) {
                            const iso2 = this._getCountryFromNumber(fullNumber);
                            if (iso2 !== null) return this._setCountry(iso2);
                            return false;
                        }
                        _ensureHasDialCode(number) {
                            const {dialCode, nationalPrefix} = this.selectedCountryData;
                            const alreadyHasPlus = number.charAt(0) === "+";
                            if (alreadyHasPlus || !dialCode) return number;
                            const hasPrefix = nationalPrefix && number.charAt(0) === nationalPrefix && !this.options.separateDialCode;
                            const cleanNumber = hasPrefix ? number.substring(1) : number;
                            return `+${dialCode}${cleanNumber}`;
                        }
                        _getCountryFromNumber(fullNumber) {
                            const plusIndex = fullNumber.indexOf("+");
                            let number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
                            const selectedIso2 = this.selectedCountryData.iso2;
                            const selectedDialCode = this.selectedCountryData.dialCode;
                            number = this._ensureHasDialCode(number);
                            const dialCodeMatch = this._getDialCode(number, true);
                            const numeric = getNumeric(number);
                            if (dialCodeMatch) {
                                const dialCodeMatchNumeric = getNumeric(dialCodeMatch);
                                const iso2Codes = this.dialCodeToIso2Map[dialCodeMatchNumeric];
                                if (!selectedIso2 && this.defaultCountry && iso2Codes.includes(this.defaultCountry)) return this.defaultCountry;
                                const alreadySelected = selectedIso2 && iso2Codes.includes(selectedIso2) && (numeric.length === dialCodeMatchNumeric.length || !this.selectedCountryData.areaCodes);
                                const isRegionlessNanpNumber = selectedDialCode === "1" && isRegionlessNanp(numeric);
                                if (!isRegionlessNanpNumber && !alreadySelected) for (let j = 0; j < iso2Codes.length; j++) if (iso2Codes[j]) return iso2Codes[j];
                            } else if (number.charAt(0) === "+" && numeric.length) return ""; else if ((!number || number === "+") && !this.selectedCountryData.iso2) return this.defaultCountry;
                            return null;
                        }
                        _highlightListItem(listItem, shouldFocus) {
                            const prevItem = this.highlightedItem;
                            if (prevItem) {
                                prevItem.classList.remove("iti__highlight");
                                prevItem.setAttribute("aria-selected", "false");
                            }
                            this.highlightedItem = listItem;
                            if (this.highlightedItem) {
                                this.highlightedItem.classList.add("iti__highlight");
                                this.highlightedItem.setAttribute("aria-selected", "true");
                                const activeDescendant = this.highlightedItem.getAttribute("id") || "";
                                this.selectedCountry.setAttribute("aria-activedescendant", activeDescendant);
                                if (this.options.countrySearch) this.searchInput.setAttribute("aria-activedescendant", activeDescendant);
                            }
                            if (shouldFocus) this.highlightedItem.focus();
                        }
                        _getCountryData(iso2, allowFail) {
                            for (let i = 0; i < this.countries.length; i++) if (this.countries[i].iso2 === iso2) return this.countries[i];
                            if (allowFail) return null;
                            throw new Error(`No country data for '${iso2}'`);
                        }
                        _setCountry(iso2) {
                            const {separateDialCode, showFlags, i18n} = this.options;
                            const prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                            this.selectedCountryData = iso2 ? this._getCountryData(iso2, false) || {} : {};
                            if (this.selectedCountryData.iso2) this.defaultCountry = this.selectedCountryData.iso2;
                            if (this.selectedCountryInner) {
                                let flagClass = "";
                                let a11yText = "";
                                if (iso2 && showFlags) {
                                    flagClass = `iti__flag iti__${iso2}`;
                                    a11yText = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`;
                                } else {
                                    flagClass = "iti__flag iti__globe";
                                    a11yText = i18n.noCountrySelected;
                                }
                                this.selectedCountryInner.className = flagClass;
                                this.selectedCountryA11yText.textContent = a11yText;
                            }
                            this._setSelectedCountryTitleAttribute(iso2, separateDialCode);
                            if (separateDialCode) {
                                const dialCode = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                                this.selectedDialCode.innerHTML = dialCode;
                                this._updateInputPadding();
                            }
                            this._updatePlaceholder();
                            this._updateMaxLength();
                            return prevCountry.iso2 !== iso2;
                        }
                        _updateInputPadding() {
                            if (this.selectedCountry) {
                                const selectedCountryWidth = this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth();
                                const inputPadding = selectedCountryWidth + 6;
                                if (this.showSelectedCountryOnLeft) this.telInput.style.paddingLeft = `${inputPadding}px`; else this.telInput.style.paddingRight = `${inputPadding}px`;
                            }
                        }
                        _updateMaxLength() {
                            const {strictMode, placeholderNumberType, validationNumberTypes} = this.options;
                            const {iso2} = this.selectedCountryData;
                            if (strictMode && intlTelInput.utils) if (iso2) {
                                const numberType = intlTelInput.utils.numberType[placeholderNumberType];
                                let exampleNumber = intlTelInput.utils.getExampleNumber(iso2, false, numberType, true);
                                let validNumber = exampleNumber;
                                while (intlTelInput.utils.isPossibleNumber(exampleNumber, iso2, validationNumberTypes)) {
                                    validNumber = exampleNumber;
                                    exampleNumber += "0";
                                }
                                const coreNumber = intlTelInput.utils.getCoreNumber(validNumber, iso2);
                                this.maxCoreNumberLength = coreNumber.length;
                                if (iso2 === "by") this.maxCoreNumberLength = coreNumber.length + 1;
                            } else this.maxCoreNumberLength = null;
                        }
                        _setSelectedCountryTitleAttribute(iso2 = null, separateDialCode) {
                            if (!this.selectedCountry) return;
                            let title;
                            if (iso2 && !separateDialCode) title = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`; else if (iso2) title = this.selectedCountryData.name; else title = "Unknown";
                            this.selectedCountry.setAttribute("title", title);
                        }
                        _getHiddenSelectedCountryWidth() {
                            if (this.telInput.parentNode) {
                                const containerClone = this.telInput.parentNode.cloneNode(false);
                                containerClone.style.visibility = "hidden";
                                document.body.appendChild(containerClone);
                                const countryContainerClone = this.countryContainer.cloneNode();
                                containerClone.appendChild(countryContainerClone);
                                const selectedCountryClone = this.selectedCountry.cloneNode(true);
                                countryContainerClone.appendChild(selectedCountryClone);
                                const width = selectedCountryClone.offsetWidth;
                                document.body.removeChild(containerClone);
                                return width;
                            }
                            return 0;
                        }
                        _updatePlaceholder() {
                            const {autoPlaceholder, placeholderNumberType, nationalMode, customPlaceholder} = this.options;
                            const shouldSetPlaceholder = autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && autoPlaceholder === "polite";
                            if (intlTelInput.utils && shouldSetPlaceholder) {
                                const numberType = intlTelInput.utils.numberType[placeholderNumberType];
                                let placeholder = this.selectedCountryData.iso2 ? intlTelInput.utils.getExampleNumber(this.selectedCountryData.iso2, nationalMode, numberType) : "";
                                placeholder = this._beforeSetNumber(placeholder);
                                if (typeof customPlaceholder === "function") placeholder = customPlaceholder(placeholder, this.selectedCountryData);
                                this.telInput.setAttribute("placeholder", placeholder);
                            }
                        }
                        _selectListItem(listItem) {
                            const countryChanged = this._setCountry(listItem.getAttribute("data-country-code"));
                            this._closeDropdown();
                            this._updateDialCode(listItem.getAttribute("data-dial-code"));
                            this.telInput.focus();
                            if (countryChanged) this._triggerCountryChange();
                        }
                        _closeDropdown() {
                            this.dropdownContent.classList.add("iti__hide");
                            this.selectedCountry.setAttribute("aria-expanded", "false");
                            this.selectedCountry.removeAttribute("aria-activedescendant");
                            if (this.highlightedItem) this.highlightedItem.setAttribute("aria-selected", "false");
                            if (this.options.countrySearch) this.searchInput.removeAttribute("aria-activedescendant");
                            this.dropdownArrow.classList.remove("iti__arrow--up");
                            document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                            if (this.options.countrySearch) this.searchInput.removeEventListener("input", this._handleSearchChange);
                            document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                            this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                            this.countryList.removeEventListener("click", this._handleClickCountryList);
                            if (this.options.dropdownContainer) {
                                if (!this.options.useFullscreenPopup) window.removeEventListener("scroll", this._handleWindowScroll);
                                if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                            }
                            if (this._handlePageLoad) window.removeEventListener("load", this._handlePageLoad);
                            this._trigger("close:countrydropdown");
                        }
                        _scrollTo(element) {
                            const container = this.countryList;
                            const scrollTop = document.documentElement.scrollTop;
                            const containerHeight = container.offsetHeight;
                            const containerTop = container.getBoundingClientRect().top + scrollTop;
                            const containerBottom = containerTop + containerHeight;
                            const elementHeight = element.offsetHeight;
                            const elementTop = element.getBoundingClientRect().top + scrollTop;
                            const elementBottom = elementTop + elementHeight;
                            const newScrollTop = elementTop - containerTop + container.scrollTop;
                            if (elementTop < containerTop) container.scrollTop = newScrollTop; else if (elementBottom > containerBottom) {
                                const heightDifference = containerHeight - elementHeight;
                                container.scrollTop = newScrollTop - heightDifference;
                            }
                        }
                        _updateDialCode(newDialCodeBare) {
                            const inputVal = this.telInput.value;
                            const newDialCode = `+${newDialCodeBare}`;
                            let newNumber;
                            if (inputVal.charAt(0) === "+") {
                                const prevDialCode = this._getDialCode(inputVal);
                                if (prevDialCode) newNumber = inputVal.replace(prevDialCode, newDialCode); else newNumber = newDialCode;
                                this.telInput.value = newNumber;
                            }
                        }
                        _getDialCode(number, includeAreaCode) {
                            let dialCode = "";
                            if (number.charAt(0) === "+") {
                                let numericChars = "";
                                for (let i = 0; i < number.length; i++) {
                                    const c = number.charAt(i);
                                    if (!isNaN(parseInt(c, 10))) {
                                        numericChars += c;
                                        if (includeAreaCode) {
                                            if (this.dialCodeToIso2Map[numericChars]) dialCode = number.substr(0, i + 1);
                                        } else if (this.dialCodes[numericChars]) {
                                            dialCode = number.substr(0, i + 1);
                                            break;
                                        }
                                        if (numericChars.length === this.dialCodeMaxLen) break;
                                    }
                                }
                            }
                            return dialCode;
                        }
                        _getFullNumber(overrideVal) {
                            const val = overrideVal || this.telInput.value.trim();
                            const {dialCode} = this.selectedCountryData;
                            let prefix;
                            const numericVal = getNumeric(val);
                            if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) prefix = `+${dialCode}`; else prefix = "";
                            return prefix + val;
                        }
                        _beforeSetNumber(fullNumber) {
                            let number = fullNumber;
                            if (this.options.separateDialCode) {
                                let dialCode = this._getDialCode(number);
                                if (dialCode) {
                                    dialCode = `+${this.selectedCountryData.dialCode}`;
                                    const start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                                    number = number.substr(start);
                                }
                            }
                            return this._cap(number);
                        }
                        _triggerCountryChange() {
                            this._trigger("countrychange");
                        }
                        _formatNumberAsYouType() {
                            const val = this._getFullNumber();
                            const result = intlTelInput.utils ? intlTelInput.utils.formatNumberAsYouType(val, this.selectedCountryData.iso2) : val;
                            const {dialCode} = this.selectedCountryData;
                            if (this.options.separateDialCode && this.telInput.value.charAt(0) !== "+" && result.includes(`+${dialCode}`)) {
                                const afterDialCode = result.split(`+${dialCode}`)[1] || "";
                                return afterDialCode.trim();
                            }
                            return result;
                        }
                        handleAutoCountry() {
                            if (this.options.initialCountry === "auto" && intlTelInput.autoCountry) {
                                this.defaultCountry = intlTelInput.autoCountry;
                                const hasSelectedCountryOrGlobe = this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains("iti__globe");
                                if (!hasSelectedCountryOrGlobe) this.setCountry(this.defaultCountry);
                                this.resolveAutoCountryPromise();
                            }
                        }
                        handleUtils() {
                            if (intlTelInput.utils) {
                                if (this.telInput.value) this._updateValFromNumber(this.telInput.value);
                                if (this.selectedCountryData.iso2) {
                                    this._updatePlaceholder();
                                    this._updateMaxLength();
                                }
                            }
                            this.resolveUtilsScriptPromise();
                        }
                        destroy() {
                            const {allowDropdown, separateDialCode} = this.options;
                            if (allowDropdown) {
                                this._closeDropdown();
                                this.selectedCountry.removeEventListener("click", this._handleClickSelectedCountry);
                                this.countryContainer.removeEventListener("keydown", this._handleCountryContainerKeydown);
                                const label = this.telInput.closest("label");
                                if (label) label.removeEventListener("click", this._handleLabelClick);
                            }
                            const {form} = this.telInput;
                            if (this._handleHiddenInputSubmit && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                            this.telInput.removeEventListener("input", this._handleInputEvent);
                            if (this._handleKeydownEvent) this.telInput.removeEventListener("keydown", this._handleKeydownEvent);
                            this.telInput.removeAttribute("data-intl-tel-input-id");
                            if (separateDialCode) if (this.isRTL) this.telInput.style.paddingRight = this.originalPaddingRight; else this.telInput.style.paddingLeft = this.originalPaddingLeft;
                            const wrapper = this.telInput.parentNode;
                            wrapper?.parentNode?.insertBefore(this.telInput, wrapper);
                            wrapper?.parentNode?.removeChild(wrapper);
                            delete intlTelInput.instances[this.id];
                        }
                        getExtension() {
                            if (intlTelInput.utils) return intlTelInput.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                            return "";
                        }
                        getNumber(format) {
                            if (intlTelInput.utils) {
                                const {iso2} = this.selectedCountryData;
                                return intlTelInput.utils.formatNumber(this._getFullNumber(), iso2, format);
                            }
                            return "";
                        }
                        getNumberType() {
                            if (intlTelInput.utils) return intlTelInput.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                            return -99;
                        }
                        getSelectedCountryData() {
                            return this.selectedCountryData;
                        }
                        getValidationError() {
                            if (intlTelInput.utils) {
                                const {iso2} = this.selectedCountryData;
                                return intlTelInput.utils.getValidationError(this._getFullNumber(), iso2);
                            }
                            return -99;
                        }
                        isValidNumber() {
                            if (!this.selectedCountryData.iso2) return false;
                            const val = this._getFullNumber();
                            const alphaCharPosition = val.search(/\p{L}/u);
                            if (alphaCharPosition > -1) {
                                const beforeAlphaChar = val.substring(0, alphaCharPosition);
                                const beforeAlphaIsValid = this._utilsIsPossibleNumber(beforeAlphaChar);
                                const isValid = this._utilsIsPossibleNumber(val);
                                return beforeAlphaIsValid && isValid;
                            }
                            return this._utilsIsPossibleNumber(val);
                        }
                        _utilsIsPossibleNumber(val) {
                            return intlTelInput.utils ? intlTelInput.utils.isPossibleNumber(val, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null;
                        }
                        isValidNumberPrecise() {
                            if (!this.selectedCountryData.iso2) return false;
                            const val = this._getFullNumber();
                            const alphaCharPosition = val.search(/\p{L}/u);
                            if (alphaCharPosition > -1) {
                                const beforeAlphaChar = val.substring(0, alphaCharPosition);
                                const beforeAlphaIsValid = this._utilsIsValidNumber(beforeAlphaChar);
                                const isValid = this._utilsIsValidNumber(val);
                                return beforeAlphaIsValid && isValid;
                            }
                            return this._utilsIsValidNumber(val);
                        }
                        _utilsIsValidNumber(val) {
                            return intlTelInput.utils ? intlTelInput.utils.isValidNumber(val, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null;
                        }
                        setCountry(iso2) {
                            const iso2Lower = iso2?.toLowerCase();
                            const currentCountry = this.selectedCountryData.iso2;
                            const isCountryChange = iso2 && iso2Lower !== currentCountry || !iso2 && currentCountry;
                            if (isCountryChange) {
                                this._setCountry(iso2Lower);
                                this._updateDialCode(this.selectedCountryData.dialCode);
                                this._triggerCountryChange();
                            }
                        }
                        setNumber(number) {
                            const countryChanged = this._updateCountryFromNumber(number);
                            this._updateValFromNumber(number);
                            if (countryChanged) this._triggerCountryChange();
                            this._trigger("input", {
                                isSetNumber: true
                            });
                        }
                        setPlaceholderNumberType(type) {
                            this.options.placeholderNumberType = type;
                            this._updatePlaceholder();
                        }
                        setDisabled(disabled) {
                            this.telInput.disabled = disabled;
                            if (disabled) this.selectedCountry.setAttribute("disabled", "true"); else this.selectedCountry.removeAttribute("disabled");
                        }
                    };
                    var attachUtils = source => {
                        if (!intlTelInput.utils && !intlTelInput.startedLoadingUtilsScript) {
                            let loadCall;
                            if (typeof source === "function") try {
                                loadCall = Promise.resolve(source());
                            } catch (error) {
                                return Promise.reject(error);
                            } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof source}`));
                            intlTelInput.startedLoadingUtilsScript = true;
                            return loadCall.then((module => {
                                const utils = module?.default;
                                if (!utils || typeof utils !== "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                                intlTelInput.utils = utils;
                                forEachInstance("handleUtils");
                                return true;
                            })).catch((error => {
                                forEachInstance("rejectUtilsScriptPromise", error);
                                throw error;
                            }));
                        }
                        return null;
                    };
                    var intlTelInput = Object.assign(((input, options) => {
                        const iti = new Iti(input, options);
                        iti._init();
                        input.setAttribute("data-intl-tel-input-id", iti.id.toString());
                        intlTelInput.instances[iti.id] = iti;
                        return iti;
                    }), {
                        defaults,
                        documentReady: () => document.readyState === "complete",
                        getCountryData: () => data_default,
                        getInstance: input => {
                            const id2 = input.getAttribute("data-intl-tel-input-id");
                            return id2 ? intlTelInput.instances[id2] : null;
                        },
                        instances: {},
                        attachUtils,
                        startedLoadingUtilsScript: false,
                        startedLoadingAutoCountry: false,
                        version: "25.3.0"
                    });
                    var intl_tel_input_default = intlTelInput;
                    return __toCommonJS(intl_tel_input_exports);
                })();
                return factoryOutput.default;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
            let arrow = document.querySelectorAll(".menu__arrow-submenu, .menu-footer__arrow-submenu");
            for (let i = 0; i < arrow.length; i++) {
                let thisLink = arrow[i].previousElementSibling;
                let subMenu = arrow[i].nextElementSibling;
                let thisArrow = arrow[i];
                thisLink.classList.add("parent-header");
                arrow[i].addEventListener("click", (function() {
                    subMenu.classList.toggle("open-submenu");
                    thisArrow.classList.toggle("active-submenu");
                }));
            }
        }
        function addLoadedClass() {
            if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    lockPaddingElements.forEach((lockPaddingElement => {
                        lockPaddingElement.style.paddingRight = "";
                    }));
                    document.body.style.paddingRight = "";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = lockPaddingValue;
                }));
                document.body.style.paddingRight = lockPaddingValue;
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                document.addEventListener("click", setSpollerAction);
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerItems = spollersBlock.querySelectorAll("details");
                    if (spollerItems.length) spollerItems.forEach((spollerItem => {
                        let spollerTitle = spollerItem.querySelector("summary");
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerItem.hasAttribute("data-open")) {
                                spollerItem.open = false;
                                spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.classList.add("_spoller-active");
                                spollerItem.open = true;
                            }
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.classList.remove("_spoller-active");
                            spollerItem.open = true;
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    }));
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("summary") && el.closest("[data-spollers]")) {
                        e.preventDefault();
                        if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                            const spollerTitle = el.closest("summary");
                            const spollerBlock = spollerTitle.closest("details");
                            const spollersBlock = spollerTitle.closest("[data-spollers]");
                            const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                            const scrollSpoller = spollerBlock.hasAttribute("data-spoller-scroll");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            if (!spollersBlock.querySelectorAll("._slide").length) {
                                if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                                !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                    spollerBlock.open = false;
                                }), spollerSpeed);
                                spollerTitle.classList.toggle("_spoller-active");
                                spollerBlock.classList.toggle("_spoller-active");
                                _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                                if (scrollSpoller && spollerTitle.classList.contains("_spoller-active")) {
                                    const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
                                    const scrollSpollerOffset = +scrollSpollerValue ? +scrollSpollerValue : 0;
                                    const scrollSpollerNoHeader = spollerBlock.hasAttribute("data-spoller-scroll-noheader") ? document.querySelector(".header").offsetHeight : 0;
                                    window.scrollTo({
                                        top: spollerBlock.offsetTop - (scrollSpollerOffset + scrollSpollerNoHeader),
                                        behavior: "smooth"
                                    });
                                }
                            }
                        }
                    }
                    if (!el.closest("[data-spollers]")) {
                        const spollersClose = document.querySelectorAll("[data-spoller-close]");
                        if (spollersClose.length) spollersClose.forEach((spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerCloseBlock = spollerClose.parentNode;
                            if (spollersBlock.classList.contains("_spoller-init")) {
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                spollerClose.classList.remove("_spoller-active");
                                spollerCloseBlock.classList.remove("_spoller-active");
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                                setTimeout((() => {
                                    spollerCloseBlock.open = false;
                                }), spollerSpeed);
                            }
                        }));
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                    if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                        setTimeout((() => {
                            spollerActiveBlock.open = false;
                        }), spollerSpeed);
                    }
                }
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) tabsContent.forEach(((tabsContentItem, index) => {
                    tabsTitles[index].setAttribute("data-tabs-title", "");
                    tabsContentItem.setAttribute("data-tabs-item", "");
                    if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                    tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                }));
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function functions_menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Прокинувся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Відкрив попап`);
                    } else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрив попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ? buttons.getAttribute(this.options.youtubeAttribute) : null;
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        modules_flsModules.popup = new Popup({});
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? functions_menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                    targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null;
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null;
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        this.removeSuccess(formRequiredItem);
                        error++;
                    } else {
                        this.removeError(formRequiredItem);
                        this.addSuccess(formRequiredItem);
                    }
                } else if (formRequiredItem.tagName === "SELECT" && !formRequiredItem.value) {
                    this.addError(formRequiredItem);
                    this.removeSuccess(formRequiredItem);
                    error++;
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    this.removeSuccess(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    this.removeSuccess(formRequiredItem);
                    error++;
                } else {
                    this.removeError(formRequiredItem);
                    this.addSuccess(formRequiredItem);
                }
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            addSuccess(formRequiredItem) {
                formRequiredItem.classList.add("_form-success");
                formRequiredItem.parentElement.classList.add("_form-success");
            },
            removeSuccess(formRequiredItem) {
                formRequiredItem.classList.remove("_form-success");
                formRequiredItem.parentElement.classList.remove("_form-success");
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (modules_flsModules.select) {
                        let selects = form.querySelectorAll("div.select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            modules_flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Помилка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoblock_gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (modules_flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? modules_flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форму відправлено!`);
            }
            function formLogging(message) {
                FLS(`[Форми]: ${message}`);
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true,
                    speed: 150
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, немає жодного select");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
                this.config.speed = +originalSelect.dataset.speed;
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                    setTimeout((() => {
                        selectItem.style.zIndex = "";
                    }), originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3;
                this.setOptionsPosition(selectItem);
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                setTimeout((() => {
                    if (!selectOptions.classList.contains("_slide")) {
                        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                        _slideToggle(selectOptions, originalSelect.dataset.speed);
                        if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) selectItem.style.zIndex = selectOpenzIndex; else setTimeout((() => {
                            selectItem.style.zIndex = "";
                        }), originalSelect.dataset.speed);
                    }
                }), 0);
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += `</div>`;
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            setOptionsPosition(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
                const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
                const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
                if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
                    selectOptions.hidden = false;
                    const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
                    const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
                    const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
                    selectOptions.hidden = true;
                    const selectItemHeight = selectItem.offsetHeight;
                    const selectItemPos = selectItem.getBoundingClientRect().top;
                    const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
                    const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
                    if (selectItemResult < 0) {
                        const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                        if (newMaxHeightValue < 100) {
                            selectItem.classList.add("select--show-top");
                            selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                        } else {
                            selectItem.classList.remove("select--show-top");
                            selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
                        }
                    }
                } else setTimeout((() => {
                    selectItem.classList.remove("select--show-top");
                    selectItemScroll.style.maxHeight = customMaxHeightValue;
                }), +originalSelect.dataset.speed);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
                if (!selectOptions.classList.contains("_slide")) {
                    if (originalSelect.multiple) {
                        optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                        const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                        originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                            originalSelectSelectedItem.removeAttribute("selected");
                        }));
                        const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                        selectSelectedItems.forEach((selectSelectedItems => {
                            originalSelect.querySelector(`option[value = "${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                        }));
                    } else {
                        if (!originalSelect.hasAttribute("data-show-selected")) setTimeout((() => {
                            if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                            optionItem.hidden = true;
                        }), this.config.speed);
                        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                        this.selectAction(selectItem);
                    }
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setSelectChange(originalSelect);
                }
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? FLS(`[select]: ${message} `) : null;
            }
        }
        modules_flsModules.select = new SelectConstructor({});
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_getSlideTransformEl(slideEl) {
            return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            const window = ssr_window_esm_getWindow();
            const children = [ ...element.children ];
            if (window.HTMLSlotElement && element instanceof HTMLSlotElement) children.push(...element.assignedElements());
            if (!selector) return children;
            return children.filter((el => el.matches(selector)));
        }
        function elementIsChildOfSlot(el, slot) {
            const elementsQueue = [ slot ];
            while (elementsQueue.length > 0) {
                const elementToCheck = elementsQueue.shift();
                if (el === elementToCheck) return true;
                elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot?.children || [], ...elementToCheck.assignedElements?.() || []);
            }
        }
        function elementIsChildOf(el, parent) {
            const window = ssr_window_esm_getWindow();
            let isChild = parent.contains(el);
            if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
                const children = [ ...parent.assignedElements() ];
                isChild = children.includes(el);
                if (!isChild) isChild = elementIsChildOfSlot(el, parent);
            }
            return isChild;
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        function utils_makeElementsArray(el) {
            return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
        }
        function utils_getRotateFix(swiper) {
            return v => {
                if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) return v + .001;
                return v;
            };
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            const device = getDevice();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
            const isSafariBrowser = isSafari();
            const need3dFix = isSafariBrowser || isWebView && device.ios;
            return {
                isSafari: needPerspectiveFix || isSafariBrowser,
                needPerspectiveFix,
                need3dFix,
                isWebView
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
                if (allSlidesSize + offsetSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        const toggleSlideClasses$1 = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                }
                toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
                toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        const toggleSlideClasses = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.find((slideEl => slideEl.column === activeIndex));
                nextSlide = slides.find((slideEl => slideEl.column === activeIndex + 1));
                prevSlide = slides.find((slideEl => slideEl.column === activeIndex - 1));
            } else activeSlide = slides[activeIndex];
            if (activeSlide) if (!gridEnabled) {
                nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
            }
            slides.forEach((slideEl => {
                toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
                toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
                toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
            }));
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.find((slideEl => slideEl.column === activeIndex));
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        swiper.animating = false;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            const isInitialVirtual = isVirtual && initial;
            if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)).column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)).column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            if (swiper.destroyed) return;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.find((el => el.classList.contains(params.slideActiveClass)))); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].find((t => t.identifier === data.touchId));
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== "mouse") document.activeElement.blur();
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true,
                        detail: {
                            bySwiperTouchMove: true
                        }
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].find((t => t.identifier === data.touchId));
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!el || typeof el === "string") return;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const document = ssr_window_esm_getDocument();
            const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
            const breakpointContainer = [ "window", "container" ].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
            const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasGrabCursor = swiper.params.grabCursor;
            const isGrabCursor = breakpointParams.grabCursor;
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor(); else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            if (!el || typeof el === "string") return;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.find((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)));
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    if (el && typeof el !== "string") el.removeAttribute("style");
                    if (wrapperEl) wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    if (swiper.el && typeof swiper.el !== "string") swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); else if (res && res.length === 1) res = res[0];
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const targetEl = e.target;
                let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
                if (swiper.isElement && !targetIsButton) {
                    const path = e.path || e.composedPath && e.composedPath();
                    if (path) targetIsButton = path.find((pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl)));
                }
                if (swiper.params.navigation.hideOnClick && !targetIsButton) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function effect_target_effectTarget(effectParams, slideEl) {
            const transformEl = utils_getSlideTransformEl(slideEl);
            if (transformEl !== slideEl) {
                transformEl.style.backfaceVisibility = "hidden";
                transformEl.style["-webkit-backface-visibility"] = "hidden";
            }
            return transformEl;
        }
        function create_shadow_createShadow(suffix, slideEl, side) {
            const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
            const shadowContainer = utils_getSlideTransformEl(slideEl);
            let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
            if (!shadowEl) {
                shadowEl = utils_createElement("div", shadowClass.split(" "));
                shadowContainer.append(shadowEl);
            }
            return shadowEl;
        }
        function effect_init_effectInit(params) {
            const {effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams} = params;
            on("beforeInit", (() => {
                if (swiper.params.effect !== effect) return;
                swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
                if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            }));
            on("setTranslate", (() => {
                if (swiper.params.effect !== effect) return;
                setTranslate();
            }));
            on("setTransition", ((_s, duration) => {
                if (swiper.params.effect !== effect) return;
                setTransition(duration);
            }));
            on("transitionEnd", (() => {
                if (swiper.params.effect !== effect) return;
                if (recreateShadows) {
                    if (!getEffectParams || !getEffectParams().slideShadows) return;
                    swiper.slides.forEach((slideEl => {
                        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => shadowEl.remove()));
                    }));
                    recreateShadows();
                }
            }));
            let requireUpdateOnVirtual;
            on("virtualUpdate", (() => {
                if (swiper.params.effect !== effect) return;
                if (!swiper.slides.length) requireUpdateOnVirtual = true;
                requestAnimationFrame((() => {
                    if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                        setTranslate();
                        requireUpdateOnVirtual = false;
                    }
                }));
            }));
        }
        function EffectCoverflow(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: true
                }
            });
            const setTranslate = () => {
                const {width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid} = swiper;
                const params = swiper.params.coverflowEffect;
                const isHorizontal = swiper.isHorizontal();
                const transform = swiper.translate;
                const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
                const rotate = isHorizontal ? params.rotate : -params.rotate;
                const translate = params.depth;
                const r = utils_getRotateFix(swiper);
                for (let i = 0, length = slides.length; i < length; i += 1) {
                    const slideEl = slides[i];
                    const slideSize = slidesSizesGrid[i];
                    const slideOffset = slideEl.swiperSlideOffset;
                    const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                    const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
                    let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                    let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                    let translateZ = -translate * Math.abs(offsetMultiplier);
                    let stretch = params.stretch;
                    if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
                    let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                    let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                    let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
                    if (Math.abs(translateX) < .001) translateX = 0;
                    if (Math.abs(translateY) < .001) translateY = 0;
                    if (Math.abs(translateZ) < .001) translateZ = 0;
                    if (Math.abs(rotateY) < .001) rotateY = 0;
                    if (Math.abs(rotateX) < .001) rotateX = 0;
                    if (Math.abs(scale) < .001) scale = 0;
                    const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
                    const targetEl = effect_target_effectTarget(params, slideEl);
                    targetEl.style.transform = slideTransform;
                    slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                    if (params.slideShadows) {
                        let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
                        let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
                        if (!shadowBeforeEl) shadowBeforeEl = create_shadow_createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
                        if (!shadowAfterEl) shadowAfterEl = create_shadow_createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
                        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                    }
                }
            };
            const setTransition = duration => {
                const transformElements = swiper.slides.map((slideEl => utils_getSlideTransformEl(slideEl)));
                transformElements.forEach((el => {
                    el.style.transitionDuration = `${duration}ms`;
                    el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl => {
                        shadowEl.style.transitionDuration = `${duration}ms`;
                    }));
                }));
            };
            effect_init_effectInit({
                effect: "coverflow",
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    watchSlidesProgress: true
                })
            });
        }
        const countryTranslations = {
            ad: "أندورا",
            ae: "الإمارات العربية المتحدة",
            af: "أفغانستان",
            ag: "أنتيغوا وبربودا",
            ai: "أنغويلا",
            al: "ألبانيا",
            am: "أرمينيا",
            ao: "أنغولا",
            ar: "الأرجنتين",
            as: "ساموا الأمريكية",
            at: "النمسا",
            au: "أستراليا",
            aw: "أروبا",
            ax: "جزر آلاند",
            az: "أذربيجان",
            ba: "البوسنة والهرسك",
            bb: "بربادوس",
            bd: "بنغلاديش",
            be: "بلجيكا",
            bf: "بوركينا فاسو",
            bg: "بلغاريا",
            bh: "البحرين",
            bi: "بوروندي",
            bj: "بنين",
            bl: "سان بارتليمي",
            bm: "برمودا",
            bn: "بروناي",
            bo: "بوليفيا",
            bq: "هولندا الكاريبية",
            br: "البرازيل",
            bs: "جزر البهاما",
            bt: "بوتان",
            bw: "بوتسوانا",
            by: "بيلاروس",
            bz: "بليز",
            ca: "كندا",
            cc: "جزر كوكوس (كيلينغ)",
            cd: "الكونغو - كينشاسا",
            cf: "جمهورية أفريقيا الوسطى",
            cg: "الكونغو - برازافيل",
            ch: "سويسرا",
            ci: "ساحل العاج",
            ck: "جزر كوك",
            cl: "تشيلي",
            cm: "الكاميرون",
            cn: "الصين",
            co: "كولومبيا",
            cr: "كوستاريكا",
            cu: "كوبا",
            cv: "الرأس الأخضر",
            cw: "كوراساو",
            cx: "جزيرة كريسماس",
            cy: "قبرص",
            cz: "التشيك",
            de: "ألمانيا",
            dj: "جيبوتي",
            dk: "الدانمرك",
            dm: "دومينيكا",
            do: "جمهورية الدومينيكان",
            dz: "الجزائر",
            ec: "الإكوادور",
            ee: "إستونيا",
            eg: "مصر",
            eh: "الصحراء الغربية",
            er: "إريتريا",
            es: "إسبانيا",
            et: "إثيوبيا",
            fi: "فنلندا",
            fj: "فيجي",
            fk: "جزر فوكلاند",
            fm: "ميكرونيزيا",
            fo: "جزر فارو",
            fr: "فرنسا",
            ga: "الغابون",
            gb: "المملكة المتحدة",
            gd: "غرينادا",
            ge: "جورجيا",
            gf: "غويانا الفرنسية",
            gg: "غيرنزي",
            gh: "غانا",
            gi: "جبل طارق",
            gl: "غرينلاند",
            gm: "غامبيا",
            gn: "غينيا",
            gp: "غوادلوب",
            gq: "غينيا الاستوائية",
            gr: "اليونان",
            gt: "غواتيمالا",
            gu: "غوام",
            gw: "غينيا بيساو",
            gy: "غيانا",
            hk: "هونغ كونغ الصينية (منطقة إدارية خاصة)",
            hn: "هندوراس",
            hr: "كرواتيا",
            ht: "هايتي",
            hu: "هنغاريا",
            id: "إندونيسيا",
            ie: "أيرلندا",
            il: "إسرائيل",
            im: "جزيرة مان",
            in: "الهند",
            io: "الإقليم البريطاني في المحيط الهندي",
            iq: "العراق",
            ir: "إيران",
            is: "آيسلندا",
            it: "إيطاليا",
            je: "جيرسي",
            jm: "جامايكا",
            jo: "الأردن",
            jp: "اليابان",
            ke: "كينيا",
            kg: "قيرغيزستان",
            kh: "كمبوديا",
            ki: "كيريباتي",
            km: "جزر القمر",
            kn: "سانت كيتس ونيفيس",
            kp: "كوريا الشمالية",
            kr: "كوريا الجنوبية",
            kw: "الكويت",
            ky: "جزر كايمان",
            kz: "كازاخستان",
            la: "لاوس",
            lb: "لبنان",
            lc: "سانت لوسيا",
            li: "ليختنشتاين",
            lk: "سريلانكا",
            lr: "ليبيريا",
            ls: "ليسوتو",
            lt: "ليتوانيا",
            lu: "لوكسمبورغ",
            lv: "لاتفيا",
            ly: "ليبيا",
            ma: "المغرب",
            mc: "موناكو",
            md: "مولدوفا",
            me: "الجبل الأسود",
            mf: "سان مارتن",
            mg: "مدغشقر",
            mh: "جزر مارشال",
            mk: "مقدونيا الشمالية",
            ml: "مالي",
            mm: "ميانمار (بورما)",
            mn: "منغوليا",
            mo: "منطقة ماكاو الإدارية الخاصة",
            mp: "جزر ماريانا الشمالية",
            mq: "جزر المارتينيك",
            mr: "موريتانيا",
            ms: "مونتسرات",
            mt: "مالطا",
            mu: "موريشيوس",
            mv: "جزر المالديف",
            mw: "ملاوي",
            mx: "المكسيك",
            my: "ماليزيا",
            mz: "موزمبيق",
            na: "ناميبيا",
            nc: "كاليدونيا الجديدة",
            ne: "النيجر",
            nf: "جزيرة نورفولك",
            ng: "نيجيريا",
            ni: "نيكاراغوا",
            nl: "هولندا",
            no: "النرويج",
            np: "نيبال",
            nr: "ناورو",
            nu: "نيوي",
            nz: "نيوزيلندا",
            om: "عُمان",
            pa: "بنما",
            pe: "بيرو",
            pf: "بولينيزيا الفرنسية",
            pg: "بابوا غينيا الجديدة",
            ph: "الفلبين",
            pk: "باكستان",
            pl: "بولندا",
            pm: "سان بيير ومكويلون",
            pr: "بورتوريكو",
            ps: "الأراضي الفلسطينية",
            pt: "البرتغال",
            pw: "بالاو",
            py: "باراغواي",
            qa: "قطر",
            re: "روينيون",
            ro: "رومانيا",
            rs: "صربيا",
            ru: "روسيا",
            rw: "رواندا",
            sa: "المملكة العربية السعودية",
            sb: "جزر سليمان",
            sc: "سيشل",
            sd: "السودان",
            se: "السويد",
            sg: "سنغافورة",
            sh: "سانت هيلينا",
            si: "سلوفينيا",
            sj: "سفالبارد وجان ماين",
            sk: "سلوفاكيا",
            sl: "سيراليون",
            sm: "سان مارينو",
            sn: "السنغال",
            so: "الصومال",
            sr: "سورينام",
            ss: "جنوب السودان",
            st: "ساو تومي وبرينسيبي",
            sv: "السلفادور",
            sx: "سانت مارتن",
            sy: "سوريا",
            sz: "إسواتيني",
            tc: "جزر توركس وكايكوس",
            td: "تشاد",
            tg: "توغو",
            th: "تايلاند",
            tj: "طاجيكستان",
            tk: "توكيلو",
            tl: "تيمور - ليشتي",
            tm: "تركمانستان",
            tn: "تونس",
            to: "تونغا",
            tr: "تركيا",
            tt: "ترينيداد وتوباغو",
            tv: "توفالو",
            tw: "تايوان",
            tz: "تنزانيا",
            ua: "أوكرانيا",
            ug: "أوغندا",
            us: "الولايات المتحدة",
            uy: "أورغواي",
            uz: "أوزبكستان",
            va: "الفاتيكان",
            vc: "سانت فنسنت وجزر غرينادين",
            ve: "فنزويلا",
            vg: "جزر فيرجن البريطانية",
            vi: "جزر فيرجن التابعة للولايات المتحدة",
            vn: "فيتنام",
            vu: "فانواتو",
            wf: "جزر والس وفوتونا",
            ws: "ساموا",
            ye: "اليمن",
            yt: "مايوت",
            za: "جنوب أفريقيا",
            zm: "زامبيا",
            zw: "زيمبابوي"
        };
        const countries = countryTranslations;
        const interfaceTranslations = {
            selectedCountryAriaLabel: "البلد المحدد",
            noCountrySelected: "لم يتم تحديد أي بلد",
            countryListAriaLabel: "قائمة الدول",
            searchPlaceholder: "يبحث",
            zeroSearchResults: "لم يتم العثور على نتائج",
            oneSearchResult: "تم العثور على نتيجة واحدة",
            multipleSearchResults: "تم العثور على ${count} من النتائج",
            ac: "جزيرة الصعود",
            xk: "كوسوفو"
        };
        const ar_interface = interfaceTranslations;
        const countries_countryTranslations = {
            ad: "Андора",
            ae: "Обединени арабски емирства",
            af: "Афганистан",
            ag: "Антигуа и Барбуда",
            ai: "Ангуила",
            al: "Албания",
            am: "Армения",
            ao: "Ангола",
            ar: "Аржентина",
            as: "Американска Самоа",
            at: "Австрия",
            au: "Австралия",
            aw: "Аруба",
            ax: "Оландски острови",
            az: "Азербайджан",
            ba: "Босна и Херцеговина",
            bb: "Барбадос",
            bd: "Бангладеш",
            be: "Белгия",
            bf: "Буркина Фасо",
            bg: "България",
            bh: "Бахрейн",
            bi: "Бурунди",
            bj: "Бенин",
            bl: "Сен Бартелеми",
            bm: "Бермудски острови",
            bn: "Бруней Даруссалам",
            bo: "Боливия",
            bq: "Карибска Нидерландия",
            br: "Бразилия",
            bs: "Бахамски острови",
            bt: "Бутан",
            bw: "Ботсвана",
            by: "Беларус",
            bz: "Белиз",
            ca: "Канада",
            cc: "Кокосови острови (острови Кийлинг)",
            cd: "Конго (Киншаса)",
            cf: "Централноафриканска република",
            cg: "Конго (Бразавил)",
            ch: "Швейцария",
            ci: "Кот д’Ивоар",
            ck: "острови Кук",
            cl: "Чили",
            cm: "Камерун",
            cn: "Китай",
            co: "Колумбия",
            cr: "Коста Рика",
            cu: "Куба",
            cv: "Кабо Верде",
            cw: "Кюрасао",
            cx: "остров Рождество",
            cy: "Кипър",
            cz: "Чехия",
            de: "Германия",
            dj: "Джибути",
            dk: "Дания",
            dm: "Доминика",
            do: "Доминиканска република",
            dz: "Алжир",
            ec: "Еквадор",
            ee: "Естония",
            eg: "Египет",
            eh: "Западна Сахара",
            er: "Еритрея",
            es: "Испания",
            et: "Етиопия",
            fi: "Финландия",
            fj: "Фиджи",
            fk: "Фолкландски острови",
            fm: "Микронезия",
            fo: "Фарьорски острови",
            fr: "Франция",
            ga: "Габон",
            gb: "Обединеното кралство",
            gd: "Гренада",
            ge: "Грузия",
            gf: "Френска Гвиана",
            gg: "Гърнзи",
            gh: "Гана",
            gi: "Гибралтар",
            gl: "Гренландия",
            gm: "Гамбия",
            gn: "Гвинея",
            gp: "Гваделупа",
            gq: "Екваториална Гвинея",
            gr: "Гърция",
            gt: "Гватемала",
            gu: "Гуам",
            gw: "Гвинея-Бисау",
            gy: "Гаяна",
            hk: "Хонконг, САР на Китай",
            hn: "Хондурас",
            hr: "Хърватия",
            ht: "Хаити",
            hu: "Унгария",
            id: "Индонезия",
            ie: "Ирландия",
            il: "Израел",
            im: "остров Ман",
            in: "Индия",
            io: "Британска територия в Индийския океан",
            iq: "Ирак",
            ir: "Иран",
            is: "Исландия",
            it: "Италия",
            je: "Джърси",
            jm: "Ямайка",
            jo: "Йордания",
            jp: "Япония",
            ke: "Кения",
            kg: "Киргизстан",
            kh: "Камбоджа",
            ki: "Кирибати",
            km: "Коморски острови",
            kn: "Сейнт Китс и Невис",
            kp: "Северна Корея",
            kr: "Южна Корея",
            kw: "Кувейт",
            ky: "Кайманови острови",
            kz: "Казахстан",
            la: "Лаос",
            lb: "Ливан",
            lc: "Сейнт Лусия",
            li: "Лихтенщайн",
            lk: "Шри Ланка",
            lr: "Либерия",
            ls: "Лесото",
            lt: "Литва",
            lu: "Люксембург",
            lv: "Латвия",
            ly: "Либия",
            ma: "Мароко",
            mc: "Монако",
            md: "Молдова",
            me: "Черна гора",
            mf: "Сен Мартен",
            mg: "Мадагаскар",
            mh: "Маршалови острови",
            mk: "Северна Македония",
            ml: "Мали",
            mm: "Мианмар (Бирма)",
            mn: "Монголия",
            mo: "Макао, САР на Китай",
            mp: "Северни Мариански острови",
            mq: "Мартиника",
            mr: "Мавритания",
            ms: "Монтсерат",
            mt: "Малта",
            mu: "Мавриций",
            mv: "Малдиви",
            mw: "Малави",
            mx: "Мексико",
            my: "Малайзия",
            mz: "Мозамбик",
            na: "Намибия",
            nc: "Нова Каледония",
            ne: "Нигер",
            nf: "остров Норфолк",
            ng: "Нигерия",
            ni: "Никарагуа",
            nl: "Нидерландия",
            no: "Норвегия",
            np: "Непал",
            nr: "Науру",
            nu: "Ниуе",
            nz: "Нова Зеландия",
            om: "Оман",
            pa: "Панама",
            pe: "Перу",
            pf: "Френска Полинезия",
            pg: "Папуа-Нова Гвинея",
            ph: "Филипини",
            pk: "Пакистан",
            pl: "Полша",
            pm: "Сен Пиер и Микелон",
            pr: "Пуерто Рико",
            ps: "Палестински територии",
            pt: "Португалия",
            pw: "Палау",
            py: "Парагвай",
            qa: "Катар",
            re: "Реюнион",
            ro: "Румъния",
            rs: "Сърбия",
            ru: "Русия",
            rw: "Руанда",
            sa: "Саудитска Арабия",
            sb: "Соломонови острови",
            sc: "Сейшели",
            sd: "Судан",
            se: "Швеция",
            sg: "Сингапур",
            sh: "Света Елена",
            si: "Словения",
            sj: "Свалбард и Ян Майен",
            sk: "Словакия",
            sl: "Сиера Леоне",
            sm: "Сан Марино",
            sn: "Сенегал",
            so: "Сомалия",
            sr: "Суринам",
            ss: "Южен Судан",
            st: "Сао Томе и Принсипи",
            sv: "Салвадор",
            sx: "Синт Мартен",
            sy: "Сирия",
            sz: "Есватини",
            tc: "острови Търкс и Кайкос",
            td: "Чад",
            tg: "Того",
            th: "Тайланд",
            tj: "Таджикистан",
            tk: "Токелау",
            tl: "Източен Тимор",
            tm: "Туркменистан",
            tn: "Тунис",
            to: "Тонга",
            tr: "Турция",
            tt: "Тринидад и Тобаго",
            tv: "Тувалу",
            tw: "Тайван",
            tz: "Танзания",
            ua: "Украйна",
            ug: "Уганда",
            us: "Съединени щати",
            uy: "Уругвай",
            uz: "Узбекистан",
            va: "Ватикан",
            vc: "Сейнт Винсънт и Гренадини",
            ve: "Венецуела",
            vg: "Британски Вирджински острови",
            vi: "Американски Вирджински острови",
            vn: "Виетнам",
            vu: "Вануату",
            wf: "Уолис и Футуна",
            ws: "Самоа",
            ye: "Йемен",
            yt: "Майот",
            za: "Южна Африка",
            zm: "Замбия",
            zw: "Зимбабве"
        };
        const bg_countries = countries_countryTranslations;
        const interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Избрана държава",
            noCountrySelected: "Няма избрана държава",
            countryListAriaLabel: "Списък на страните",
            searchPlaceholder: "Търсене",
            zeroSearchResults: "Няма намерени резултати",
            oneSearchResult: "Намерен е 1 резултат",
            multipleSearchResults: "${count} намерени резултата",
            ac: "Остров Възнесение",
            xk: "Косово"
        };
        const bg_interface = interface_interfaceTranslations;
        const bn_countries_countryTranslations = {
            ad: "আন্ডোরা",
            ae: "সংযুক্ত আরব আমিরাত",
            af: "আফগানিস্তান",
            ag: "অ্যান্টিগুয়া ও বারবুডা",
            ai: "এ্যাঙ্গুইলা",
            al: "আলবেনিয়া",
            am: "আর্মেনিয়া",
            ao: "অ্যাঙ্গোলা",
            ar: "আর্জেন্টিনা",
            as: "আমেরিকান সামোয়া",
            at: "অস্ট্রিয়া",
            au: "অস্ট্রেলিয়া",
            aw: "আরুবা",
            ax: "আলান্ড দ্বীপপুঞ্জ",
            az: "আজারবাইজান",
            ba: "বসনিয়া ও হার্জেগোভিনা",
            bb: "বারবাদোস",
            bd: "বাংলাদেশ",
            be: "বেলজিয়াম",
            bf: "বুরকিনা ফাসো",
            bg: "বুলগেরিয়া",
            bh: "বাহরাইন",
            bi: "বুরুন্ডি",
            bj: "বেনিন",
            bl: "সেন্ট বারথেলিমি",
            bm: "বারমুডা",
            bn: "ব্রুনেই",
            bo: "বলিভিয়া",
            bq: "ক্যারিবিয়ান নেদারল্যান্ডস",
            br: "ব্রাজিল",
            bs: "বাহামা দ্বীপপুঞ্জ",
            bt: "ভুটান",
            bw: "বতসোয়ানা",
            by: "বেলারুশ",
            bz: "বেলিজ",
            ca: "কানাডা",
            cc: "কোকোস (কিলিং) দ্বীপপুঞ্জ",
            cd: "কঙ্গো-কিনশাসা",
            cf: "মধ্য আফ্রিকার প্রজাতন্ত্র",
            cg: "কঙ্গো - ব্রাজাভিল",
            ch: "সুইজারল্যান্ড",
            ci: "কোত দিভোয়ার",
            ck: "কুক দ্বীপপুঞ্জ",
            cl: "চিলি",
            cm: "ক্যামেরুন",
            cn: "চীন",
            co: "কলম্বিয়া",
            cr: "কোস্টারিকা",
            cu: "কিউবা",
            cv: "কেপভার্দে",
            cw: "কুরাসাও",
            cx: "ক্রিসমাস দ্বীপ",
            cy: "সাইপ্রাস",
            cz: "চেচিয়া",
            de: "জার্মানি",
            dj: "জিবুতি",
            dk: "ডেনমার্ক",
            dm: "ডোমিনিকা",
            do: "ডোমেনিকান প্রজাতন্ত্র",
            dz: "আলজেরিয়া",
            ec: "ইকুয়েডর",
            ee: "এস্তোনিয়া",
            eg: "মিশর",
            eh: "পশ্চিম সাহারা",
            er: "ইরিত্রিয়া",
            es: "স্পেন",
            et: "ইথিওপিয়া",
            fi: "ফিনল্যান্ড",
            fj: "ফিজি",
            fk: "ফকল্যান্ড দ্বীপপুঞ্জ",
            fm: "মাইক্রোনেশিয়া",
            fo: "ফ্যারও দ্বীপপুঞ্জ",
            fr: "ফ্রান্স",
            ga: "গ্যাবন",
            gb: "যুক্তরাজ্য",
            gd: "গ্রেনাডা",
            ge: "জর্জিয়া",
            gf: "ফরাসী গায়ানা",
            gg: "গুয়ার্নসি",
            gh: "ঘানা",
            gi: "জিব্রাল্টার",
            gl: "গ্রীনল্যান্ড",
            gm: "গাম্বিয়া",
            gn: "গিনি",
            gp: "গুয়াদেলৌপ",
            gq: "নিরক্ষীয় গিনি",
            gr: "গ্রীস",
            gt: "গুয়াতেমালা",
            gu: "গুয়াম",
            gw: "গিনি-বিসাউ",
            gy: "গিয়ানা",
            hk: "হংকং এসএআর চীনা",
            hn: "হন্ডুরাস",
            hr: "ক্রোয়েশিয়া",
            ht: "হাইতি",
            hu: "হাঙ্গেরি",
            id: "ইন্দোনেশিয়া",
            ie: "আয়ারল্যান্ড",
            il: "ইজরায়েল",
            im: "আইল অফ ম্যান",
            in: "ভারত",
            io: "ব্রিটিশ ভারত মহাসাগরীয় অঞ্চল",
            iq: "ইরাক",
            ir: "ইরান",
            is: "আইসল্যান্ড",
            it: "ইতালি",
            je: "জার্সি",
            jm: "জামাইকা",
            jo: "জর্ডন",
            jp: "জাপান",
            ke: "কেনিয়া",
            kg: "কিরগিজিস্তান",
            kh: "কম্বোডিয়া",
            ki: "কিরিবাতি",
            km: "কমোরোস",
            kn: "সেন্ট কিটস ও নেভিস",
            kp: "উত্তর কোরিয়া",
            kr: "দক্ষিণ কোরিয়া",
            kw: "কুয়েত",
            ky: "কেম্যান দ্বীপপুঞ্জ",
            kz: "কাজাখস্তান",
            la: "লাওস",
            lb: "লেবানন",
            lc: "সেন্ট লুসিয়া",
            li: "লিচেনস্টেইন",
            lk: "শ্রীলঙ্কা",
            lr: "লাইবেরিয়া",
            ls: "লেসোথো",
            lt: "লিথুয়ানিয়া",
            lu: "লাক্সেমবার্গ",
            lv: "লাত্ভিয়া",
            ly: "লিবিয়া",
            ma: "মোরক্কো",
            mc: "মোনাকো",
            md: "মলডোভা",
            me: "মন্টিনিগ্রো",
            mf: "সেন্ট মার্টিন",
            mg: "মাদাগাস্কার",
            mh: "মার্শাল দ্বীপপুঞ্জ",
            mk: "উত্তর ম্যাসেডোনিয়া",
            ml: "মালি",
            mm: "মায়ানমার (বার্মা)",
            mn: "মঙ্গোলিয়া",
            mo: "ম্যাকাও এসএআর চীনা",
            mp: "উত্তরাঞ্চলীয় মারিয়ানা দ্বীপপুঞ্জ",
            mq: "মার্টিনিক",
            mr: "মরিতানিয়া",
            ms: "মন্টসেরাট",
            mt: "মাল্টা",
            mu: "মরিশাস",
            mv: "মালদ্বীপ",
            mw: "মালাউই",
            mx: "মেক্সিকো",
            my: "মালয়েশিয়া",
            mz: "মোজাম্বিক",
            na: "নামিবিয়া",
            nc: "নিউ ক্যালেডোনিয়া",
            ne: "নাইজার",
            nf: "নরফোক দ্বীপ",
            ng: "নাইজেরিয়া",
            ni: "নিকারাগুয়া",
            nl: "নেদারল্যান্ডস",
            no: "নরওয়ে",
            np: "নেপাল",
            nr: "নাউরু",
            nu: "নিউয়ে",
            nz: "নিউজিল্যান্ড",
            om: "ওমান",
            pa: "পানামা",
            pe: "পেরু",
            pf: "ফরাসী পলিনেশিয়া",
            pg: "পাপুয়া নিউ গিনি",
            ph: "ফিলিপাইন",
            pk: "পাকিস্তান",
            pl: "পোল্যান্ড",
            pm: "সেন্ট পিয়ের ও মিকুয়েলন",
            pr: "পুয়ের্তো রিকো",
            ps: "প্যালেস্টাইনের অঞ্চলসমূহ",
            pt: "পর্তুগাল",
            pw: "পালাউ",
            py: "প্যারাগুয়ে",
            qa: "কাতার",
            re: "রিইউনিয়ন",
            ro: "রোমানিয়া",
            rs: "সার্বিয়া",
            ru: "রাশিয়া",
            rw: "রুয়ান্ডা",
            sa: "সৌদি আরব",
            sb: "সলোমন দ্বীপপুঞ্জ",
            sc: "সিসিলি",
            sd: "সুদান",
            se: "সুইডেন",
            sg: "সিঙ্গাপুর",
            sh: "সেন্ট হেলেনা",
            si: "স্লোভানিয়া",
            sj: "স্বালবার্ড ও জান মেয়েন",
            sk: "স্লোভাকিয়া",
            sl: "সিয়েরা লিওন",
            sm: "সান মারিনো",
            sn: "সেনেগাল",
            so: "সোমালিয়া",
            sr: "সুরিনাম",
            ss: "দক্ষিণ সুদান",
            st: "সাওটোমা ও প্রিন্সিপি",
            sv: "এল সালভেদর",
            sx: "সিন্ট মার্টেন",
            sy: "সিরিয়া",
            sz: "ইসওয়াতিনি",
            tc: "তুর্কস ও কাইকোস দ্বীপপুঞ্জ",
            td: "চাদ",
            tg: "টোগো",
            th: "থাইল্যান্ড",
            tj: "তাজিকিস্তান",
            tk: "টোকেলাউ",
            tl: "তিমুর-লেস্তে",
            tm: "তুর্কমেনিস্তান",
            tn: "তিউনিসিয়া",
            to: "টোঙ্গা",
            tr: "তুরস্ক",
            tt: "ত্রিনিনাদ ও টোব্যাগো",
            tv: "টুভালু",
            tw: "তাইওয়ান",
            tz: "তাঞ্জানিয়া",
            ua: "ইউক্রেন",
            ug: "উগান্ডা",
            us: "মার্কিন যুক্তরাষ্ট্র",
            uy: "উরুগুয়ে",
            uz: "উজবেকিস্তান",
            va: "ভ্যাটিকান সিটি",
            vc: "সেন্ট ভিনসেন্ট ও গ্রেনাডিনস",
            ve: "ভেনেজুয়েলা",
            vg: "ব্রিটিশ ভার্জিন দ্বীপপুঞ্জ",
            vi: "মার্কিন যুক্তরাষ্ট্রের ভার্জিন দ্বীপপুঞ্জ",
            vn: "ভিয়েতনাম",
            vu: "ভানুয়াটু",
            wf: "ওয়ালিস ও ফুটুনা",
            ws: "সামোয়া",
            ye: "ইয়েমেন",
            yt: "মায়োত্তে",
            za: "দক্ষিণ আফ্রিকা",
            zm: "জাম্বিয়া",
            zw: "জিম্বাবোয়ে"
        };
        const bn_countries = bn_countries_countryTranslations;
        const bn_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "নির্বাচিত দেশ",
            noCountrySelected: "কোনো দেশ নির্বাচন করা হয়নি",
            countryListAriaLabel: "দেশের তালিকা",
            searchPlaceholder: "অনুসন্ধান করুন",
            zeroSearchResults: "কোন ফলাফল পাওয়া যায়নি",
            oneSearchResult: "1টি ফলাফল পাওয়া গেছে",
            multipleSearchResults: "${count} ফলাফল পাওয়া গেছে",
            ac: "অ্যাসেনশন দ্বীপ",
            xk: "কসোভো"
        };
        const bn_interface = bn_interface_interfaceTranslations;
        const bs_countries_countryTranslations = {
            ad: "Andora",
            ae: "Ujedinjeni Arapski Emirati",
            af: "Afganistan",
            ag: "Antigva i Barbuda",
            ai: "Angvila",
            al: "Albanija",
            am: "Armenija",
            ao: "Angola",
            ar: "Argentina",
            as: "Američka Samoa",
            at: "Austrija",
            au: "Australija",
            aw: "Aruba",
            ax: "Olandska ostrva",
            az: "Azerbejdžan",
            ba: "Bosna i Hercegovina",
            bb: "Barbados",
            bd: "Bangladeš",
            be: "Belgija",
            bf: "Burkina Faso",
            bg: "Bugarska",
            bh: "Bahrein",
            bi: "Burundi",
            bj: "Benin",
            bl: "Sveti Bartolomej",
            bm: "Bermuda",
            bn: "Brunej",
            bo: "Bolivija",
            bq: "Karipska Holandija",
            br: "Brazil",
            bs: "Bahami",
            bt: "Butan",
            bw: "Bocvana",
            by: "Bjelorusija",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kokosova (Keelingova) ostrva",
            cd: "Demokratska Republika Kongo",
            cf: "Centralnoafrička Republika",
            cg: "Kongo",
            ch: "Švicarska",
            ci: "Obala Slonovače",
            ck: "Kukova ostrva",
            cl: "Čile",
            cm: "Kamerun",
            cn: "Kina",
            co: "Kolumbija",
            cr: "Kostarika",
            cu: "Kuba",
            cv: "Kape Verde",
            cw: "Kurasao",
            cx: "Božićno ostrvo",
            cy: "Kipar",
            cz: "Češka",
            de: "Njemačka",
            dj: "Džibuti",
            dk: "Danska",
            dm: "Dominika",
            do: "Dominikanska Republika",
            dz: "Alžir",
            ec: "Ekvador",
            ee: "Estonija",
            eg: "Egipat",
            eh: "Zapadna Sahara",
            er: "Eritreja",
            es: "Španija",
            et: "Etiopija",
            fi: "Finska",
            fj: "Fidži",
            fk: "Folklandska ostrva",
            fm: "Mikronezija",
            fo: "Farska ostrva",
            fr: "Francuska",
            ga: "Gabon",
            gb: "Ujedinjeno Kraljevstvo",
            gd: "Grenada",
            ge: "Gruzija",
            gf: "Francuska Gvajana",
            gg: "Gernzi",
            gh: "Gana",
            gi: "Gibraltar",
            gl: "Grenland",
            gm: "Gambija",
            gn: "Gvineja",
            gp: "Gvadalupe",
            gq: "Ekvatorijalna Gvineja",
            gr: "Grčka",
            gt: "Gvatemala",
            gu: "Guam",
            gw: "Gvineja-Bisao",
            gy: "Gvajana",
            hk: "Hong Kong (SAR Kina)",
            hn: "Honduras",
            hr: "Hrvatska",
            ht: "Haiti",
            hu: "Mađarska",
            id: "Indonezija",
            ie: "Irska",
            il: "Izrael",
            im: "Ostrvo Man",
            in: "Indija",
            io: "Britanska Teritorija u Indijskom Okeanu",
            iq: "Irak",
            ir: "Iran",
            is: "Island",
            it: "Italija",
            je: "Jersey",
            jm: "Jamajka",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenija",
            kg: "Kirgistan",
            kh: "Kambodža",
            ki: "Kiribati",
            km: "Komori",
            kn: "Sveti Kits i Nevis",
            kp: "Sjeverna Koreja",
            kr: "Južna Koreja",
            kw: "Kuvajt",
            ky: "Kajmanska ostrva",
            kz: "Kazahstan",
            la: "Laos",
            lb: "Liban",
            lc: "Sveta Lucija",
            li: "Lihtenštajn",
            lk: "Šri Lanka",
            lr: "Liberija",
            ls: "Lesoto",
            lt: "Litvanija",
            lu: "Luksemburg",
            lv: "Latvija",
            ly: "Libija",
            ma: "Maroko",
            mc: "Monako",
            md: "Moldavija",
            me: "Crna Gora",
            mf: "Sveti Martin",
            mg: "Madagaskar",
            mh: "Maršalova ostrva",
            mk: "Sjeverna Makedonija",
            ml: "Mali",
            mm: "Mjanmar",
            mn: "Mongolija",
            mo: "Makao (SAR Kina)",
            mp: "Sjeverna Marijanska ostrva",
            mq: "Martinik",
            mr: "Mauritanija",
            ms: "Monserat",
            mt: "Malta",
            mu: "Mauricijus",
            mv: "Maldivi",
            mw: "Malavi",
            mx: "Meksiko",
            my: "Malezija",
            mz: "Mozambik",
            na: "Namibija",
            nc: "Nova Kaledonija",
            ne: "Niger",
            nf: "Ostrvo Norfolk",
            ng: "Nigerija",
            ni: "Nikaragva",
            nl: "Holandija",
            no: "Norveška",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Novi Zeland",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Francuska Polinezija",
            pg: "Papua Nova Gvineja",
            ph: "Filipini",
            pk: "Pakistan",
            pl: "Poljska",
            pm: "Sveti Petar i Mikelon",
            pr: "Porto Riko",
            ps: "Palestinska Teritorija",
            pt: "Portugal",
            pw: "Palau",
            py: "Paragvaj",
            qa: "Katar",
            re: "Reunion",
            ro: "Rumunija",
            rs: "Srbija",
            ru: "Rusija",
            rw: "Ruanda",
            sa: "Saudijska Arabija",
            sb: "Solomonska Ostrva",
            sc: "Sejšeli",
            sd: "Sudan",
            se: "Švedska",
            sg: "Singapur",
            sh: "Sveta Helena",
            si: "Slovenija",
            sj: "Svalbard i Jan Majen",
            sk: "Slovačka",
            sl: "Sijera Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalija",
            sr: "Surinam",
            ss: "Južni Sudan",
            st: "Sao Tome i Principe",
            sv: "Salvador",
            sx: "Sint Marten",
            sy: "Sirija",
            sz: "Esvatini",
            tc: "Ostrva Turks i Kaikos",
            td: "Čad",
            tg: "Togo",
            th: "Tajland",
            tj: "Tadžikistan",
            tk: "Tokelau",
            tl: "Istočni Timor",
            tm: "Turkmenistan",
            tn: "Tunis",
            to: "Tonga",
            tr: "Turska",
            tt: "Trinidad i Tobago",
            tv: "Tuvalu",
            tw: "Tajvan",
            tz: "Tanzanija",
            ua: "Ukrajina",
            ug: "Uganda",
            us: "Sjedinjene Države",
            uy: "Urugvaj",
            uz: "Uzbekistan",
            va: "Vatikan",
            vc: "Sveti Vinsent i Grenadin",
            ve: "Venecuela",
            vg: "Britanska Djevičanska ostrva",
            vi: "Američka Djevičanska ostrva",
            vn: "Vijetnam",
            vu: "Vanuatu",
            wf: "Ostrva Valis i Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Majote",
            za: "Južnoafrička Republika",
            zm: "Zambija",
            zw: "Zimbabve"
        };
        const bs_countries = bs_countries_countryTranslations;
        const bs_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Odabrana zemlja",
            noCountrySelected: "Zemlja nije odabrana",
            countryListAriaLabel: "Lista zemalja",
            searchPlaceholder: "Pretraži",
            zeroSearchResults: "Nema pronađenih rezultata",
            oneSearchResult: "Pronađen 1 rezultat",
            multipleSearchResults: "${count} rezultata pronađeno",
            ac: "Ascension",
            xk: "Kosovo"
        };
        const bs_interface = bs_interface_interfaceTranslations;
        const ca_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Emirats Àrabs Units",
            af: "Afganistan",
            ag: "Antigua i Barbuda",
            ai: "Anguilla",
            al: "Albània",
            am: "Armènia",
            ao: "Angola",
            ar: "Argentina",
            as: "Samoa Nord-americana",
            at: "Àustria",
            au: "Austràlia",
            aw: "Aruba",
            ax: "Illes Åland",
            az: "Azerbaidjan",
            ba: "Bòsnia i Hercegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Bèlgica",
            bf: "Burkina Faso",
            bg: "Bulgària",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benín",
            bl: "Saint Barthélemy",
            bm: "Bermudes",
            bn: "Brunei",
            bo: "Bolívia",
            bq: "Carib Neerlandès",
            br: "Brasil",
            bs: "Bahames",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarús",
            bz: "Belize",
            ca: "Canadà",
            cc: "Illes Cocos",
            cd: "Congo - Kinshasa",
            cf: "República Centreafricana",
            cg: "Congo - Brazzaville",
            ch: "Suïssa",
            ci: "Côte d’Ivoire",
            ck: "Illes Cook",
            cl: "Xile",
            cm: "Camerun",
            cn: "Xina",
            co: "Colòmbia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cap Verd",
            cw: "Curaçao",
            cx: "Illa Christmas",
            cy: "Xipre",
            cz: "Txèquia",
            de: "Alemanya",
            dj: "Djibouti",
            dk: "Dinamarca",
            dm: "Dominica",
            do: "República Dominicana",
            dz: "Algèria",
            ec: "Equador",
            ee: "Estònia",
            eg: "Egipte",
            eh: "Sàhara Occidental",
            er: "Eritrea",
            es: "Espanya",
            et: "Etiòpia",
            fi: "Finlàndia",
            fj: "Fiji",
            fk: "Illes Malvines",
            fm: "Micronèsia",
            fo: "Illes Fèroe",
            fr: "França",
            ga: "Gabon",
            gb: "Regne Unit",
            gd: "Grenada",
            ge: "Geòrgia",
            gf: "Guaiana Francesa",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Groenlàndia",
            gm: "Gàmbia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Guinea Equatorial",
            gr: "Grècia",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea Bissau",
            gy: "Guyana",
            hk: "Hong Kong (RAE Xina)",
            hn: "Hondures",
            hr: "Croàcia",
            ht: "Haití",
            hu: "Hongria",
            id: "Indonèsia",
            ie: "Irlanda",
            il: "Israel",
            im: "Illa de Man",
            in: "Índia",
            io: "Territori Britànic de l’Oceà Índic",
            iq: "Iraq",
            ir: "Iran",
            is: "Islàndia",
            it: "Itàlia",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordània",
            jp: "Japó",
            ke: "Kenya",
            kg: "Kirguizistan",
            kh: "Cambodja",
            ki: "Kiribati",
            km: "Comores",
            kn: "Saint Christopher i Nevis",
            kp: "Corea del Nord",
            kr: "Corea del Sud",
            kw: "Kuwait",
            ky: "Illes Caiman",
            kz: "Kazakhstan",
            la: "Laos",
            lb: "Líban",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Libèria",
            ls: "Lesotho",
            lt: "Lituània",
            lu: "Luxemburg",
            lv: "Letònia",
            ly: "Líbia",
            ma: "Marroc",
            mc: "Mònaco",
            md: "Moldàvia",
            me: "Montenegro",
            mf: "Saint Martin",
            mg: "Madagascar",
            mh: "Illes Marshall",
            mk: "Macedònia del Nord",
            ml: "Mali",
            mm: "Myanmar (Birmània)",
            mn: "Mongòlia",
            mo: "Macau (RAE Xina)",
            mp: "Illes Mariannes del Nord",
            mq: "Martinica",
            mr: "Mauritània",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Maurici",
            mv: "Maldives",
            mw: "Malawi",
            mx: "Mèxic",
            my: "Malàisia",
            mz: "Moçambic",
            na: "Namíbia",
            nc: "Nova Caledònia",
            ne: "Níger",
            nf: "Norfolk",
            ng: "Nigèria",
            ni: "Nicaragua",
            nl: "Països Baixos",
            no: "Noruega",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nova Zelanda",
            om: "Oman",
            pa: "Panamà",
            pe: "Perú",
            pf: "Polinèsia Francesa",
            pg: "Papua Nova Guinea",
            ph: "Filipines",
            pk: "Pakistan",
            pl: "Polònia",
            pm: "Saint-Pierre-et-Miquelon",
            pr: "Puerto Rico",
            ps: "Territoris palestins",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguai",
            qa: "Qatar",
            re: "Illa de la Reunió",
            ro: "Romania",
            rs: "Sèrbia",
            ru: "Rússia",
            rw: "Ruanda",
            sa: "Aràbia Saudita",
            sb: "Illes Salomó",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Suècia",
            sg: "Singapur",
            sh: "Saint Helena",
            si: "Eslovènia",
            sj: "Svalbard i Jan Mayen",
            sk: "Eslovàquia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somàlia",
            sr: "Surinam",
            ss: "Sudan del Sud",
            st: "São Tomé i Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Síria",
            sz: "eSwatini",
            tc: "Illes Turks i Caicos",
            td: "Txad",
            tg: "Togo",
            th: "Tailàndia",
            tj: "Tadjikistan",
            tk: "Tokelau",
            tl: "Timor Oriental",
            tm: "Turkmenistan",
            tn: "Tunísia",
            to: "Tonga",
            tr: "Turquia",
            tt: "Trinitat i Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzània",
            ua: "Ucraïna",
            ug: "Uganda",
            us: "Estats Units",
            uy: "Uruguai",
            uz: "Uzbekistan",
            va: "Ciutat del Vaticà",
            vc: "Saint Vincent i les Grenadines",
            ve: "Veneçuela",
            vg: "Illes Verges Britàniques",
            vi: "Illes Verges Nord-americanes",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis i Futuna",
            ws: "Samoa",
            ye: "Iemen",
            yt: "Mayotte",
            za: "República de Sud-àfrica",
            zm: "Zàmbia",
            zw: "Zimbàbue"
        };
        const ca_countries = ca_countries_countryTranslations;
        const ca_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "País seleccionat",
            noCountrySelected: "No s'ha seleccionat cap país",
            countryListAriaLabel: "Llista de països",
            searchPlaceholder: "Cerca",
            zeroSearchResults: "Sense resultats",
            oneSearchResult: "1 resultat trobat",
            multipleSearchResults: "${count} resultats trobats",
            ac: "Illa de l'Ascensió",
            xk: "Kosovo"
        };
        const ca_interface = ca_interface_interfaceTranslations;
        const cs_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Spojené arabské emiráty",
            af: "Afghánistán",
            ag: "Antigua a Barbuda",
            ai: "Anguilla",
            al: "Albánie",
            am: "Arménie",
            ao: "Angola",
            ar: "Argentina",
            as: "Americká Samoa",
            at: "Rakousko",
            au: "Austrálie",
            aw: "Aruba",
            ax: "Ålandy",
            az: "Ázerbájdžán",
            ba: "Bosna a Hercegovina",
            bb: "Barbados",
            bd: "Bangladéš",
            be: "Belgie",
            bf: "Burkina Faso",
            bg: "Bulharsko",
            bh: "Bahrajn",
            bi: "Burundi",
            bj: "Benin",
            bl: "Svatý Bartoloměj",
            bm: "Bermudy",
            bn: "Brunej",
            bo: "Bolívie",
            bq: "Karibské Nizozemsko",
            br: "Brazílie",
            bs: "Bahamy",
            bt: "Bhútán",
            bw: "Botswana",
            by: "Bělorusko",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kokosové ostrovy",
            cd: "Kongo – Kinshasa",
            cf: "Středoafrická republika",
            cg: "Kongo – Brazzaville",
            ch: "Švýcarsko",
            ci: "Pobřeží slonoviny",
            ck: "Cookovy ostrovy",
            cl: "Chile",
            cm: "Kamerun",
            cn: "Čína",
            co: "Kolumbie",
            cr: "Kostarika",
            cu: "Kuba",
            cv: "Kapverdy",
            cw: "Curaçao",
            cx: "Vánoční ostrov",
            cy: "Kypr",
            cz: "Česko",
            de: "Německo",
            dj: "Džibutsko",
            dk: "Dánsko",
            dm: "Dominika",
            do: "Dominikánská republika",
            dz: "Alžírsko",
            ec: "Ekvádor",
            ee: "Estonsko",
            eg: "Egypt",
            eh: "Západní Sahara",
            er: "Eritrea",
            es: "Španělsko",
            et: "Etiopie",
            fi: "Finsko",
            fj: "Fidži",
            fk: "Falklandské ostrovy",
            fm: "Mikronésie",
            fo: "Faerské ostrovy",
            fr: "Francie",
            ga: "Gabon",
            gb: "Spojené království",
            gd: "Grenada",
            ge: "Gruzie",
            gf: "Francouzská Guyana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Grónsko",
            gm: "Gambie",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Rovníková Guinea",
            gr: "Řecko",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hongkong – ZAO Číny",
            hn: "Honduras",
            hr: "Chorvatsko",
            ht: "Haiti",
            hu: "Maďarsko",
            id: "Indonésie",
            ie: "Irsko",
            il: "Izrael",
            im: "Ostrov Man",
            in: "Indie",
            io: "Britské indickooceánské území",
            iq: "Irák",
            ir: "Írán",
            is: "Island",
            it: "Itálie",
            je: "Jersey",
            jm: "Jamajka",
            jo: "Jordánsko",
            jp: "Japonsko",
            ke: "Keňa",
            kg: "Kyrgyzstán",
            kh: "Kambodža",
            ki: "Kiribati",
            km: "Komory",
            kn: "Svatý Kryštof a Nevis",
            kp: "Severní Korea",
            kr: "Jižní Korea",
            kw: "Kuvajt",
            ky: "Kajmanské ostrovy",
            kz: "Kazachstán",
            la: "Laos",
            lb: "Libanon",
            lc: "Svatá Lucie",
            li: "Lichtenštejnsko",
            lk: "Srí Lanka",
            lr: "Libérie",
            ls: "Lesotho",
            lt: "Litva",
            lu: "Lucembursko",
            lv: "Lotyšsko",
            ly: "Libye",
            ma: "Maroko",
            mc: "Monako",
            md: "Moldavsko",
            me: "Černá Hora",
            mf: "Svatý Martin (Francie)",
            mg: "Madagaskar",
            mh: "Marshallovy ostrovy",
            mk: "Severní Makedonie",
            ml: "Mali",
            mm: "Myanmar (Barma)",
            mn: "Mongolsko",
            mo: "Macao – ZAO Číny",
            mp: "Severní Mariany",
            mq: "Martinik",
            mr: "Mauritánie",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauricius",
            mv: "Maledivy",
            mw: "Malawi",
            mx: "Mexiko",
            my: "Malajsie",
            mz: "Mosambik",
            na: "Namibie",
            nc: "Nová Kaledonie",
            ne: "Niger",
            nf: "Norfolk",
            ng: "Nigérie",
            ni: "Nikaragua",
            nl: "Nizozemsko",
            no: "Norsko",
            np: "Nepál",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nový Zéland",
            om: "Omán",
            pa: "Panama",
            pe: "Peru",
            pf: "Francouzská Polynésie",
            pg: "Papua-Nová Guinea",
            ph: "Filipíny",
            pk: "Pákistán",
            pl: "Polsko",
            pm: "Saint-Pierre a Miquelon",
            pr: "Portoriko",
            ps: "Palestinská území",
            pt: "Portugalsko",
            pw: "Palau",
            py: "Paraguay",
            qa: "Katar",
            re: "Réunion",
            ro: "Rumunsko",
            rs: "Srbsko",
            ru: "Rusko",
            rw: "Rwanda",
            sa: "Saúdská Arábie",
            sb: "Šalamounovy ostrovy",
            sc: "Seychely",
            sd: "Súdán",
            se: "Švédsko",
            sg: "Singapur",
            sh: "Svatá Helena",
            si: "Slovinsko",
            sj: "Špicberky a Jan Mayen",
            sk: "Slovensko",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somálsko",
            sr: "Surinam",
            ss: "Jižní Súdán",
            st: "Svatý Tomáš a Princův ostrov",
            sv: "Salvador",
            sx: "Svatý Martin (Nizozemsko)",
            sy: "Sýrie",
            sz: "Svazijsko",
            tc: "Turks a Caicos",
            td: "Čad",
            tg: "Togo",
            th: "Thajsko",
            tj: "Tádžikistán",
            tk: "Tokelau",
            tl: "Východní Timor",
            tm: "Turkmenistán",
            tn: "Tunisko",
            to: "Tonga",
            tr: "Turecko",
            tt: "Trinidad a Tobago",
            tv: "Tuvalu",
            tw: "Tchaj-wan",
            tz: "Tanzanie",
            ua: "Ukrajina",
            ug: "Uganda",
            us: "Spojené státy",
            uy: "Uruguay",
            uz: "Uzbekistán",
            va: "Vatikán",
            vc: "Svatý Vincenc a Grenadiny",
            ve: "Venezuela",
            vg: "Britské Panenské ostrovy",
            vi: "Americké Panenské ostrovy",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis a Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Jihoafrická republika",
            zm: "Zambie",
            zw: "Zimbabwe"
        };
        const cs_countries = cs_countries_countryTranslations;
        const cs_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Vybraná země",
            noCountrySelected: "Není vybrána žádná země",
            countryListAriaLabel: "Seznam zemí",
            searchPlaceholder: "Vyhledat",
            zeroSearchResults: "Nebyly nalezeny žádné výsledky",
            oneSearchResult: "1 výsledek nalezen",
            multipleSearchResults: "${count} výsledků nalezeno",
            ac: "Ascension",
            xk: "Kosovo"
        };
        const cs_interface = cs_interface_interfaceTranslations;
        const da_countries_countryTranslations = {
            ad: "Andorra",
            ae: "De Forenede Arabiske Emirater",
            af: "Afghanistan",
            ag: "Antigua og Barbuda",
            ai: "Anguilla",
            al: "Albanien",
            am: "Armenien",
            ao: "Angola",
            ar: "Argentina",
            as: "Amerikansk Samoa",
            at: "Østrig",
            au: "Australien",
            aw: "Aruba",
            ax: "Åland",
            az: "Aserbajdsjan",
            ba: "Bosnien-Hercegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgien",
            bf: "Burkina Faso",
            bg: "Bulgarien",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "De tidligere Nederlandske Antiller",
            br: "Brasilien",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Hviderusland",
            bz: "Belize",
            ca: "Canada",
            cc: "Cocosøerne",
            cd: "Congo-Kinshasa",
            cf: "Den Centralafrikanske Republik",
            cg: "Congo-Brazzaville",
            ch: "Schweiz",
            ci: "Elfenbenskysten",
            ck: "Cookøerne",
            cl: "Chile",
            cm: "Cameroun",
            cn: "Kina",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Kap Verde",
            cw: "Curaçao",
            cx: "Juleøen",
            cy: "Cypern",
            cz: "Tjekkiet",
            de: "Tyskland",
            dj: "Djibouti",
            dk: "Danmark",
            dm: "Dominica",
            do: "Den Dominikanske Republik",
            dz: "Algeriet",
            ec: "Ecuador",
            ee: "Estland",
            eg: "Egypten",
            eh: "Vestsahara",
            er: "Eritrea",
            es: "Spanien",
            et: "Etiopien",
            fi: "Finland",
            fj: "Fiji",
            fk: "Falklandsøerne",
            fm: "Mikronesien",
            fo: "Færøerne",
            fr: "Frankrig",
            ga: "Gabon",
            gb: "Storbritannien",
            gd: "Grenada",
            ge: "Georgien",
            gf: "Fransk Guyana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Grønland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Ækvatorialguinea",
            gr: "Grækenland",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "SAR Hongkong",
            hn: "Honduras",
            hr: "Kroatien",
            ht: "Haiti",
            hu: "Ungarn",
            id: "Indonesien",
            ie: "Irland",
            il: "Israel",
            im: "Isle of Man",
            in: "Indien",
            io: "Det Britiske Territorium i Det Indiske Ocean",
            iq: "Irak",
            ir: "Iran",
            is: "Island",
            it: "Italien",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenya",
            kg: "Kirgisistan",
            kh: "Cambodja",
            ki: "Kiribati",
            km: "Comorerne",
            kn: "Saint Kitts og Nevis",
            kp: "Nordkorea",
            kr: "Sydkorea",
            kw: "Kuwait",
            ky: "Caymanøerne",
            kz: "Kasakhstan",
            la: "Laos",
            lb: "Libanon",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Litauen",
            lu: "Luxembourg",
            lv: "Letland",
            ly: "Libyen",
            ma: "Marokko",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "Saint Martin",
            mg: "Madagaskar",
            mh: "Marshalløerne",
            mk: "Nordmakedonien",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongoliet",
            mo: "SAR Macao",
            mp: "Nordmarianerne",
            mq: "Martinique",
            mr: "Mauretanien",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldiverne",
            mw: "Malawi",
            mx: "Mexico",
            my: "Malaysia",
            mz: "Mozambique",
            na: "Namibia",
            nc: "Ny Kaledonien",
            ne: "Niger",
            nf: "Norfolk Island",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Holland",
            no: "Norge",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "New Zealand",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Fransk Polynesien",
            pg: "Papua Ny Guinea",
            ph: "Filippinerne",
            pk: "Pakistan",
            pl: "Polen",
            pm: "Saint Pierre og Miquelon",
            pr: "Puerto Rico",
            ps: "De palæstinensiske områder",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Rumænien",
            rs: "Serbien",
            ru: "Rusland",
            rw: "Rwanda",
            sa: "Saudi-Arabien",
            sb: "Salomonøerne",
            sc: "Seychellerne",
            sd: "Sudan",
            se: "Sverige",
            sg: "Singapore",
            sh: "St. Helena",
            si: "Slovenien",
            sj: "Svalbard og Jan Mayen",
            sk: "Slovakiet",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Surinam",
            ss: "Sydsudan",
            st: "São Tomé og Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syrien",
            sz: "Eswatini",
            tc: "Turks- og Caicosøerne",
            td: "Tchad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tadsjikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunesien",
            to: "Tonga",
            tr: "Tyrkiet",
            tt: "Trinidad og Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ukraine",
            ug: "Uganda",
            us: "USA",
            uy: "Uruguay",
            uz: "Usbekistan",
            va: "Vatikanstaten",
            vc: "Saint Vincent og Grenadinerne",
            ve: "Venezuela",
            vg: "De Britiske Jomfruøer",
            vi: "De Amerikanske Jomfruøer",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis og Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "Sydafrika",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const da_countries = da_countries_countryTranslations;
        const da_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Valgt land",
            noCountrySelected: "Intet land er valgt",
            countryListAriaLabel: "Liste over lande",
            searchPlaceholder: "Søg",
            zeroSearchResults: "Ingen resultater fundet",
            oneSearchResult: "1 resultat fundet",
            multipleSearchResults: "${count} resultater fundet",
            ac: "Ascension",
            xk: "Kosovo"
        };
        const da_interface = da_interface_interfaceTranslations;
        const de_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Vereinigte Arabische Emirate",
            af: "Afghanistan",
            ag: "Antigua und Barbuda",
            ai: "Anguilla",
            al: "Albanien",
            am: "Armenien",
            ao: "Angola",
            ar: "Argentinien",
            as: "Amerikanisch-Samoa",
            at: "Österreich",
            au: "Australien",
            aw: "Aruba",
            ax: "Ålandinseln",
            az: "Aserbaidschan",
            ba: "Bosnien und Herzegowina",
            bb: "Barbados",
            bd: "Bangladesch",
            be: "Belgien",
            bf: "Burkina Faso",
            bg: "Bulgarien",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "St. Barthélemy",
            bm: "Bermuda",
            bn: "Brunei Darussalam",
            bo: "Bolivien",
            bq: "Bonaire, Sint Eustatius und Saba",
            br: "Brasilien",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botsuana",
            by: "Belarus",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kokosinseln",
            cd: "Kongo-Kinshasa",
            cf: "Zentralafrikanische Republik",
            cg: "Kongo-Brazzaville",
            ch: "Schweiz",
            ci: "Côte d’Ivoire",
            ck: "Cookinseln",
            cl: "Chile",
            cm: "Kamerun",
            cn: "China",
            co: "Kolumbien",
            cr: "Costa Rica",
            cu: "Kuba",
            cv: "Cabo Verde",
            cw: "Curaçao",
            cx: "Weihnachtsinsel",
            cy: "Zypern",
            cz: "Tschechien",
            de: "Deutschland",
            dj: "Dschibuti",
            dk: "Dänemark",
            dm: "Dominica",
            do: "Dominikanische Republik",
            dz: "Algerien",
            ec: "Ecuador",
            ee: "Estland",
            eg: "Ägypten",
            eh: "Westsahara",
            er: "Eritrea",
            es: "Spanien",
            et: "Äthiopien",
            fi: "Finnland",
            fj: "Fidschi",
            fk: "Falklandinseln",
            fm: "Mikronesien",
            fo: "Färöer",
            fr: "Frankreich",
            ga: "Gabun",
            gb: "Vereinigtes Königreich",
            gd: "Grenada",
            ge: "Georgien",
            gf: "Französisch-Guayana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Grönland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Äquatorialguinea",
            gr: "Griechenland",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Sonderverwaltungsregion Hongkong",
            hn: "Honduras",
            hr: "Kroatien",
            ht: "Haiti",
            hu: "Ungarn",
            id: "Indonesien",
            ie: "Irland",
            il: "Israel",
            im: "Isle of Man",
            in: "Indien",
            io: "Britisches Territorium im Indischen Ozean",
            iq: "Irak",
            ir: "Iran",
            is: "Island",
            it: "Italien",
            je: "Jersey",
            jm: "Jamaika",
            jo: "Jordanien",
            jp: "Japan",
            ke: "Kenia",
            kg: "Kirgisistan",
            kh: "Kambodscha",
            ki: "Kiribati",
            km: "Komoren",
            kn: "St. Kitts und Nevis",
            kp: "Nordkorea",
            kr: "Südkorea",
            kw: "Kuwait",
            ky: "Kaimaninseln",
            kz: "Kasachstan",
            la: "Laos",
            lb: "Libanon",
            lc: "St. Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Litauen",
            lu: "Luxemburg",
            lv: "Lettland",
            ly: "Libyen",
            ma: "Marokko",
            mc: "Monaco",
            md: "Republik Moldau",
            me: "Montenegro",
            mf: "St. Martin",
            mg: "Madagaskar",
            mh: "Marshallinseln",
            mk: "Nordmazedonien",
            ml: "Mali",
            mm: "Myanmar",
            mn: "Mongolei",
            mo: "Sonderverwaltungsregion Macau",
            mp: "Nördliche Marianen",
            mq: "Martinique",
            mr: "Mauretanien",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Malediven",
            mw: "Malawi",
            mx: "Mexiko",
            my: "Malaysia",
            mz: "Mosambik",
            na: "Namibia",
            nc: "Neukaledonien",
            ne: "Niger",
            nf: "Norfolkinsel",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Niederlande",
            no: "Norwegen",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Neuseeland",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Französisch-Polynesien",
            pg: "Papua-Neuguinea",
            ph: "Philippinen",
            pk: "Pakistan",
            pl: "Polen",
            pm: "St. Pierre und Miquelon",
            pr: "Puerto Rico",
            ps: "Palästinensische Autonomiegebiete",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Katar",
            re: "Réunion",
            ro: "Rumänien",
            rs: "Serbien",
            ru: "Russland",
            rw: "Ruanda",
            sa: "Saudi-Arabien",
            sb: "Salomonen",
            sc: "Seychellen",
            sd: "Sudan",
            se: "Schweden",
            sg: "Singapur",
            sh: "St. Helena",
            si: "Slowenien",
            sj: "Spitzbergen und Jan Mayen",
            sk: "Slowakei",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "Südsudan",
            st: "São Tomé und Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syrien",
            sz: "Eswatini",
            tc: "Turks- und Caicosinseln",
            td: "Tschad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tadschikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunesien",
            to: "Tonga",
            tr: "Türkei",
            tt: "Trinidad und Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tansania",
            ua: "Ukraine",
            ug: "Uganda",
            us: "Vereinigte Staaten",
            uy: "Uruguay",
            uz: "Usbekistan",
            va: "Vatikanstadt",
            vc: "St. Vincent und die Grenadinen",
            ve: "Venezuela",
            vg: "Britische Jungferninseln",
            vi: "Amerikanische Jungferninseln",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis und Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Südafrika",
            zm: "Sambia",
            zw: "Simbabwe"
        };
        const de_countries = de_countries_countryTranslations;
        const de_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Ausgewähltes Land",
            noCountrySelected: "Kein Land ausgewählt",
            countryListAriaLabel: "Liste der Länder",
            searchPlaceholder: "Suchen",
            zeroSearchResults: "Keine Suchergebnisse",
            oneSearchResult: "1 Suchergebnis",
            multipleSearchResults: "${count} Suchergebnisse",
            ac: "Ascension-Insel",
            xk: "Kosovo"
        };
        const de_interface = de_interface_interfaceTranslations;
        const el_countries_countryTranslations = {
            ad: "Ανδόρα",
            ae: "Ηνωμένα Αραβικά Εμιράτα",
            af: "Αφγανιστάν",
            ag: "Αντίγκουα και Μπαρμπούντα",
            ai: "Ανγκουίλα",
            al: "Αλβανία",
            am: "Αρμενία",
            ao: "Αγκόλα",
            ar: "Αργεντινή",
            as: "Αμερικανική Σαμόα",
            at: "Αυστρία",
            au: "Αυστραλία",
            aw: "Αρούμπα",
            ax: "Νήσοι Όλαντ",
            az: "Αζερμπαϊτζάν",
            ba: "Βοσνία - Ερζεγοβίνη",
            bb: "Μπαρμπέιντος",
            bd: "Μπανγκλαντές",
            be: "Βέλγιο",
            bf: "Μπουρκίνα Φάσο",
            bg: "Βουλγαρία",
            bh: "Μπαχρέιν",
            bi: "Μπουρούντι",
            bj: "Μπενίν",
            bl: "Άγιος Βαρθολομαίος",
            bm: "Βερμούδες",
            bn: "Μπρουνέι",
            bo: "Βολιβία",
            bq: "Ολλανδία Καραϊβικής",
            br: "Βραζιλία",
            bs: "Μπαχάμες",
            bt: "Μπουτάν",
            bw: "Μποτσουάνα",
            by: "Λευκορωσία",
            bz: "Μπελίζ",
            ca: "Καναδάς",
            cc: "Νήσοι Κόκος (Κίλινγκ)",
            cd: "Κονγκό - Κινσάσα",
            cf: "Κεντροαφρικανική Δημοκρατία",
            cg: "Κονγκό - Μπραζαβίλ",
            ch: "Ελβετία",
            ci: "Ακτή Ελεφαντοστού",
            ck: "Νήσοι Κουκ",
            cl: "Χιλή",
            cm: "Καμερούν",
            cn: "Κίνα",
            co: "Κολομβία",
            cr: "Κόστα Ρίκα",
            cu: "Κούβα",
            cv: "Πράσινο Ακρωτήριο",
            cw: "Κουρασάο",
            cx: "Νήσος των Χριστουγέννων",
            cy: "Κύπρος",
            cz: "Τσεχία",
            de: "Γερμανία",
            dj: "Τζιμπουτί",
            dk: "Δανία",
            dm: "Ντομίνικα",
            do: "Δομινικανή Δημοκρατία",
            dz: "Αλγερία",
            ec: "Ισημερινός",
            ee: "Εσθονία",
            eg: "Αίγυπτος",
            eh: "Δυτική Σαχάρα",
            er: "Ερυθραία",
            es: "Ισπανία",
            et: "Αιθιοπία",
            fi: "Φινλανδία",
            fj: "Φίτζι",
            fk: "Νήσοι Φόκλαντ",
            fm: "Μικρονησία",
            fo: "Νήσοι Φερόες",
            fr: "Γαλλία",
            ga: "Γκαμπόν",
            gb: "Ηνωμένο Βασίλειο",
            gd: "Γρενάδα",
            ge: "Γεωργία",
            gf: "Γαλλική Γουιάνα",
            gg: "Γκέρνζι",
            gh: "Γκάνα",
            gi: "Γιβραλτάρ",
            gl: "Γροιλανδία",
            gm: "Γκάμπια",
            gn: "Γουινέα",
            gp: "Γουαδελούπη",
            gq: "Ισημερινή Γουινέα",
            gr: "Ελλάδα",
            gt: "Γουατεμάλα",
            gu: "Γκουάμ",
            gw: "Γουινέα Μπισάου",
            gy: "Γουιάνα",
            hk: "Χονγκ Κονγκ ΕΔΠ Κίνας",
            hn: "Ονδούρα",
            hr: "Κροατία",
            ht: "Αϊτή",
            hu: "Ουγγαρία",
            id: "Ινδονησία",
            ie: "Ιρλανδία",
            il: "Ισραήλ",
            im: "Νήσος του Μαν",
            in: "Ινδία",
            io: "Βρετανικά Εδάφη Ινδικού Ωκεανού",
            iq: "Ιράκ",
            ir: "Ιράν",
            is: "Ισλανδία",
            it: "Ιταλία",
            je: "Τζέρζι",
            jm: "Τζαμάικα",
            jo: "Ιορδανία",
            jp: "Ιαπωνία",
            ke: "Κένυα",
            kg: "Κιργιστάν",
            kh: "Καμπότζη",
            ki: "Κιριμπάτι",
            km: "Κομόρες",
            kn: "Σεν Κιτς και Νέβις",
            kp: "Βόρεια Κορέα",
            kr: "Νότια Κορέα",
            kw: "Κουβέιτ",
            ky: "Νήσοι Κέιμαν",
            kz: "Καζακστάν",
            la: "Λάος",
            lb: "Λίβανος",
            lc: "Αγία Λουκία",
            li: "Λιχτενστάιν",
            lk: "Σρι Λάνκα",
            lr: "Λιβερία",
            ls: "Λεσότο",
            lt: "Λιθουανία",
            lu: "Λουξεμβούργο",
            lv: "Λετονία",
            ly: "Λιβύη",
            ma: "Μαρόκο",
            mc: "Μονακό",
            md: "Μολδαβία",
            me: "Μαυροβούνιο",
            mf: "Άγιος Μαρτίνος (Γαλλικό τμήμα)",
            mg: "Μαδαγασκάρη",
            mh: "Νήσοι Μάρσαλ",
            mk: "Βόρεια Μακεδονία",
            ml: "Μάλι",
            mm: "Μιανμάρ (Βιρμανία)",
            mn: "Μογγολία",
            mo: "Μακάο ΕΔΠ Κίνας",
            mp: "Νήσοι Βόρειες Μαριάνες",
            mq: "Μαρτινίκα",
            mr: "Μαυριτανία",
            ms: "Μονσεράτ",
            mt: "Μάλτα",
            mu: "Μαυρίκιος",
            mv: "Μαλδίβες",
            mw: "Μαλάουι",
            mx: "Μεξικό",
            my: "Μαλαισία",
            mz: "Μοζαμβίκη",
            na: "Ναμίμπια",
            nc: "Νέα Καληδονία",
            ne: "Νίγηρας",
            nf: "Νήσος Νόρφολκ",
            ng: "Νιγηρία",
            ni: "Νικαράγουα",
            nl: "Ολλανδία",
            no: "Νορβηγία",
            np: "Νεπάλ",
            nr: "Ναουρού",
            nu: "Νιούε",
            nz: "Νέα Ζηλανδία",
            om: "Ομάν",
            pa: "Παναμάς",
            pe: "Περού",
            pf: "Γαλλική Πολυνησία",
            pg: "Παπούα Νέα Γουινέα",
            ph: "Φιλιππίνες",
            pk: "Πακιστάν",
            pl: "Πολωνία",
            pm: "Σεν Πιερ και Μικελόν",
            pr: "Πουέρτο Ρίκο",
            ps: "Παλαιστινιακά Εδάφη",
            pt: "Πορτογαλία",
            pw: "Παλάου",
            py: "Παραγουάη",
            qa: "Κατάρ",
            re: "Ρεϊνιόν",
            ro: "Ρουμανία",
            rs: "Σερβία",
            ru: "Ρωσία",
            rw: "Ρουάντα",
            sa: "Σαουδική Αραβία",
            sb: "Νήσοι Σολομώντος",
            sc: "Σεϋχέλλες",
            sd: "Σουδάν",
            se: "Σουηδία",
            sg: "Σιγκαπούρη",
            sh: "Αγία Ελένη",
            si: "Σλοβενία",
            sj: "Σβάλμπαρντ και Γιαν Μαγιέν",
            sk: "Σλοβακία",
            sl: "Σιέρα Λεόνε",
            sm: "Άγιος Μαρίνος",
            sn: "Σενεγάλη",
            so: "Σομαλία",
            sr: "Σουρινάμ",
            ss: "Νότιο Σουδάν",
            st: "Σάο Τομέ και Πρίνσιπε",
            sv: "Ελ Σαλβαδόρ",
            sx: "Άγιος Μαρτίνος (Ολλανδικό τμήμα)",
            sy: "Συρία",
            sz: "Σουαζιλάνδη",
            tc: "Νήσοι Τερκς και Κάικος",
            td: "Τσαντ",
            tg: "Τόγκο",
            th: "Ταϊλάνδη",
            tj: "Τατζικιστάν",
            tk: "Τοκελάου",
            tl: "Τιμόρ-Λέστε",
            tm: "Τουρκμενιστάν",
            tn: "Τυνησία",
            to: "Τόνγκα",
            tr: "Τουρκία",
            tt: "Τρινιντάντ και Τομπάγκο",
            tv: "Τουβαλού",
            tw: "Ταϊβάν",
            tz: "Τανζανία",
            ua: "Ουκρανία",
            ug: "Ουγκάντα",
            us: "Ηνωμένες Πολιτείες",
            uy: "Ουρουγουάη",
            uz: "Ουζμπεκιστάν",
            va: "Βατικανό",
            vc: "Άγιος Βικέντιος και Γρεναδίνες",
            ve: "Βενεζουέλα",
            vg: "Βρετανικές Παρθένες Νήσοι",
            vi: "Αμερικανικές Παρθένες Νήσοι",
            vn: "Βιετνάμ",
            vu: "Βανουάτου",
            wf: "Γουάλις και Φουτούνα",
            ws: "Σαμόα",
            ye: "Υεμένη",
            yt: "Μαγιότ",
            za: "Νότια Αφρική",
            zm: "Ζάμπια",
            zw: "Ζιμπάμπουε"
        };
        const el_countries = el_countries_countryTranslations;
        const el_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Επιλεγμένη χώρα",
            noCountrySelected: "Δεν έχει επιλεγεί χώρα",
            countryListAriaLabel: "Κατάλογος χωρών",
            searchPlaceholder: "Αναζήτηση",
            zeroSearchResults: "Δεν βρέθηκαν αποτελέσματα",
            oneSearchResult: "Βρέθηκε 1 αποτέλεσμα",
            multipleSearchResults: "Βρέθηκαν ${count} αποτελέσματα",
            ac: "Νησί της Ανάληψης",
            xk: "Κοσσυφοπέδιο"
        };
        const el_interface = el_interface_interfaceTranslations;
        const en_countries_countryTranslations = {
            ad: "Andorra",
            ae: "United Arab Emirates",
            af: "Afghanistan",
            ag: "Antigua & Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "American Samoa",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "Åland Islands",
            az: "Azerbaijan",
            ba: "Bosnia & Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgium",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "St. Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Caribbean Netherlands",
            br: "Brazil",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Canada",
            cc: "Cocos (Keeling) Islands",
            cd: "Congo - Kinshasa",
            cf: "Central African Republic",
            cg: "Congo - Brazzaville",
            ch: "Switzerland",
            ci: "Côte d’Ivoire",
            ck: "Cook Islands",
            cl: "Chile",
            cm: "Cameroon",
            cn: "China",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cape Verde",
            cw: "Curaçao",
            cx: "Christmas Island",
            cy: "Cyprus",
            cz: "Czechia",
            de: "Germany",
            dj: "Djibouti",
            dk: "Denmark",
            dm: "Dominica",
            do: "Dominican Republic",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Egypt",
            eh: "Western Sahara",
            er: "Eritrea",
            es: "Spain",
            et: "Ethiopia",
            fi: "Finland",
            fj: "Fiji",
            fk: "Falkland Islands",
            fm: "Micronesia",
            fo: "Faroe Islands",
            fr: "France",
            ga: "Gabon",
            gb: "United Kingdom",
            gd: "Grenada",
            ge: "Georgia",
            gf: "French Guiana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Greenland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Equatorial Guinea",
            gr: "Greece",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hong Kong SAR China",
            hn: "Honduras",
            hr: "Croatia",
            ht: "Haiti",
            hu: "Hungary",
            id: "Indonesia",
            ie: "Ireland",
            il: "Israel",
            im: "Isle of Man",
            in: "India",
            io: "British Indian Ocean Territory",
            iq: "Iraq",
            ir: "Iran",
            is: "Iceland",
            it: "Italy",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenya",
            kg: "Kyrgyzstan",
            kh: "Cambodia",
            ki: "Kiribati",
            km: "Comoros",
            kn: "St. Kitts & Nevis",
            kp: "North Korea",
            kr: "South Korea",
            kw: "Kuwait",
            ky: "Cayman Islands",
            kz: "Kazakhstan",
            la: "Laos",
            lb: "Lebanon",
            lc: "St. Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Lithuania",
            lu: "Luxembourg",
            lv: "Latvia",
            ly: "Libya",
            ma: "Morocco",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "St. Martin",
            mg: "Madagascar",
            mh: "Marshall Islands",
            mk: "North Macedonia",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongolia",
            mo: "Macao SAR China",
            mp: "Northern Mariana Islands",
            mq: "Martinique",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldives",
            mw: "Malawi",
            mx: "Mexico",
            my: "Malaysia",
            mz: "Mozambique",
            na: "Namibia",
            nc: "New Caledonia",
            ne: "Niger",
            nf: "Norfolk Island",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Netherlands",
            no: "Norway",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "New Zealand",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "French Polynesia",
            pg: "Papua New Guinea",
            ph: "Philippines",
            pk: "Pakistan",
            pl: "Poland",
            pm: "St. Pierre & Miquelon",
            pr: "Puerto Rico",
            ps: "Palestinian Territories",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Romania",
            rs: "Serbia",
            ru: "Russia",
            rw: "Rwanda",
            sa: "Saudi Arabia",
            sb: "Solomon Islands",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Sweden",
            sg: "Singapore",
            sh: "St. Helena",
            si: "Slovenia",
            sj: "Svalbard & Jan Mayen",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "South Sudan",
            st: "São Tomé & Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syria",
            sz: "Eswatini",
            tc: "Turks & Caicos Islands",
            td: "Chad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tajikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turkey",
            tt: "Trinidad & Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ukraine",
            ug: "Uganda",
            us: "United States",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Vatican City",
            vc: "St. Vincent & Grenadines",
            ve: "Venezuela",
            vg: "British Virgin Islands",
            vi: "U.S. Virgin Islands",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis & Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "South Africa",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const en_countries = en_countries_countryTranslations;
        const en_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Selected country",
            noCountrySelected: "No country selected",
            countryListAriaLabel: "List of countries",
            searchPlaceholder: "Search",
            zeroSearchResults: "No results found",
            oneSearchResult: "1 result found",
            multipleSearchResults: "${count} results found",
            ac: "Ascension Island",
            xk: "Kosovo"
        };
        const en_interface = en_interface_interfaceTranslations;
        const es_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Emiratos Árabes Unidos",
            af: "Afganistán",
            ag: "Antigua y Barbuda",
            ai: "Anguila",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "Samoa Americana",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "Islas Åland",
            az: "Azerbaiyán",
            ba: "Bosnia y Herzegovina",
            bb: "Barbados",
            bd: "Bangladés",
            be: "Bélgica",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Baréin",
            bi: "Burundi",
            bj: "Benín",
            bl: "San Bartolomé",
            bm: "Bermudas",
            bn: "Brunéi",
            bo: "Bolivia",
            bq: "Caribe neerlandés",
            br: "Brasil",
            bs: "Bahamas",
            bt: "Bután",
            bw: "Botsuana",
            by: "Bielorrusia",
            bz: "Belice",
            ca: "Canadá",
            cc: "Islas Cocos",
            cd: "República Democrática del Congo",
            cf: "República Centroafricana",
            cg: "Congo",
            ch: "Suiza",
            ci: "Côte d’Ivoire",
            ck: "Islas Cook",
            cl: "Chile",
            cm: "Camerún",
            cn: "China",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cabo Verde",
            cw: "Curazao",
            cx: "Isla de Navidad",
            cy: "Chipre",
            cz: "Chequia",
            de: "Alemania",
            dj: "Yibuti",
            dk: "Dinamarca",
            dm: "Dominica",
            do: "República Dominicana",
            dz: "Argelia",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Egipto",
            eh: "Sáhara Occidental",
            er: "Eritrea",
            es: "España",
            et: "Etiopía",
            fi: "Finlandia",
            fj: "Fiyi",
            fk: "Islas Malvinas",
            fm: "Micronesia",
            fo: "Islas Feroe",
            fr: "Francia",
            ga: "Gabón",
            gb: "Reino Unido",
            gd: "Granada",
            ge: "Georgia",
            gf: "Guayana Francesa",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Groenlandia",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadalupe",
            gq: "Guinea Ecuatorial",
            gr: "Grecia",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bisáu",
            gy: "Guyana",
            hk: "RAE de Hong Kong (China)",
            hn: "Honduras",
            hr: "Croacia",
            ht: "Haití",
            hu: "Hungría",
            id: "Indonesia",
            ie: "Irlanda",
            il: "Israel",
            im: "Isla de Man",
            in: "India",
            io: "Territorio Británico del Océano Índico",
            iq: "Irak",
            ir: "Irán",
            is: "Islandia",
            it: "Italia",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordania",
            jp: "Japón",
            ke: "Kenia",
            kg: "Kirguistán",
            kh: "Camboya",
            ki: "Kiribati",
            km: "Comoras",
            kn: "San Cristóbal y Nieves",
            kp: "Corea del Norte",
            kr: "Corea del Sur",
            kw: "Kuwait",
            ky: "Islas Caimán",
            kz: "Kazajistán",
            la: "Laos",
            lb: "Líbano",
            lc: "Santa Lucía",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesoto",
            lt: "Lituania",
            lu: "Luxemburgo",
            lv: "Letonia",
            ly: "Libia",
            ma: "Marruecos",
            mc: "Mónaco",
            md: "Moldavia",
            me: "Montenegro",
            mf: "San Martín",
            mg: "Madagascar",
            mh: "Islas Marshall",
            mk: "Macedonia del Norte",
            ml: "Mali",
            mm: "Myanmar (Birmania)",
            mn: "Mongolia",
            mo: "RAE de Macao (China)",
            mp: "Islas Marianas del Norte",
            mq: "Martinica",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauricio",
            mv: "Maldivas",
            mw: "Malaui",
            mx: "México",
            my: "Malasia",
            mz: "Mozambique",
            na: "Namibia",
            nc: "Nueva Caledonia",
            ne: "Níger",
            nf: "Isla Norfolk",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Países Bajos",
            no: "Noruega",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nueva Zelanda",
            om: "Omán",
            pa: "Panamá",
            pe: "Perú",
            pf: "Polinesia Francesa",
            pg: "Papúa Nueva Guinea",
            ph: "Filipinas",
            pk: "Pakistán",
            pl: "Polonia",
            pm: "San Pedro y Miquelón",
            pr: "Puerto Rico",
            ps: "Territorios Palestinos",
            pt: "Portugal",
            pw: "Palaos",
            py: "Paraguay",
            qa: "Catar",
            re: "Reunión",
            ro: "Rumanía",
            rs: "Serbia",
            ru: "Rusia",
            rw: "Ruanda",
            sa: "Arabia Saudí",
            sb: "Islas Salomón",
            sc: "Seychelles",
            sd: "Sudán",
            se: "Suecia",
            sg: "Singapur",
            sh: "Santa Elena",
            si: "Eslovenia",
            sj: "Svalbard y Jan Mayen",
            sk: "Eslovaquia",
            sl: "Sierra Leona",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Surinam",
            ss: "Sudán del Sur",
            st: "Santo Tomé y Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Siria",
            sz: "Esuatini",
            tc: "Islas Turcas y Caicos",
            td: "Chad",
            tg: "Togo",
            th: "Tailandia",
            tj: "Tayikistán",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistán",
            tn: "Túnez",
            to: "Tonga",
            tr: "Turquía",
            tt: "Trinidad y Tobago",
            tv: "Tuvalu",
            tw: "Taiwán",
            tz: "Tanzania",
            ua: "Ucrania",
            ug: "Uganda",
            us: "Estados Unidos",
            uy: "Uruguay",
            uz: "Uzbekistán",
            va: "Ciudad del Vaticano",
            vc: "San Vicente y las Granadinas",
            ve: "Venezuela",
            vg: "Islas Vírgenes Británicas",
            vi: "Islas Vírgenes de EE. UU.",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis y Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "Sudáfrica",
            zm: "Zambia",
            zw: "Zimbabue"
        };
        const es_countries = es_countries_countryTranslations;
        const es_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "País seleccionado",
            noCountrySelected: "Ningún país seleccionado",
            countryListAriaLabel: "Lista de países",
            searchPlaceholder: "Buscar",
            zeroSearchResults: "No se han encontrado resultados",
            oneSearchResult: "1 resultado encontrado",
            multipleSearchResults: "${count} resultados encontrados",
            ac: "isla Ascencion",
            xk: "Kosovo"
        };
        const es_interface = es_interface_interfaceTranslations;
        const fa_countries_countryTranslations = {
            ad: "آندورا",
            ae: "امارات متحدهٔ عربی",
            af: "افغانستان",
            ag: "آنتیگوا و باربودا",
            ai: "آنگویلا",
            al: "آلبانی",
            am: "ارمنستان",
            ao: "آنگولا",
            ar: "آرژانتین",
            as: "ساموآی امریکا",
            at: "اتریش",
            au: "استرالیا",
            aw: "آروبا",
            ax: "جزایر آلاند",
            az: "جمهوری آذربایجان",
            ba: "بوسنی و هرزگوین",
            bb: "باربادوس",
            bd: "بنگلادش",
            be: "بلژیک",
            bf: "بورکینافاسو",
            bg: "بلغارستان",
            bh: "بحرین",
            bi: "بوروندی",
            bj: "بنین",
            bl: "سن بارتلمی",
            bm: "برمودا",
            bn: "برونئی",
            bo: "بولیوی",
            bq: "جزایر کارائیب هلند",
            br: "برزیل",
            bs: "باهاما",
            bt: "بوتان",
            bw: "بوتسوانا",
            by: "بلاروس",
            bz: "بلیز",
            ca: "کانادا",
            cc: "جزایر کوکوس",
            cd: "کنگو - کینشاسا",
            cf: "جمهوری افریقای مرکزی",
            cg: "کنگو - برازویل",
            ch: "سوئیس",
            ci: "ساحل عاج",
            ck: "جزایر کوک",
            cl: "شیلی",
            cm: "کامرون",
            cn: "چین",
            co: "کلمبیا",
            cr: "کاستاریکا",
            cu: "کوبا",
            cv: "کیپ‌ورد",
            cw: "کوراسائو",
            cx: "جزیرهٔ کریسمس",
            cy: "قبرس",
            cz: "چک",
            de: "آلمان",
            dj: "جیبوتی",
            dk: "دانمارک",
            dm: "دومینیکا",
            do: "جمهوری دومینیکن",
            dz: "الجزایر",
            ec: "اکوادور",
            ee: "استونی",
            eg: "مصر",
            eh: "صحرای غربی",
            er: "اریتره",
            es: "اسپانیا",
            et: "اتیوپی",
            fi: "فنلاند",
            fj: "فیجی",
            fk: "جزایر فالکلند",
            fm: "میکرونزی",
            fo: "جزایر فارو",
            fr: "فرانسه",
            ga: "گابن",
            gb: "بریتانیا",
            gd: "گرنادا",
            ge: "گرجستان",
            gf: "گویان فرانسه",
            gg: "گرنزی",
            gh: "غنا",
            gi: "جبل‌الطارق",
            gl: "گرینلند",
            gm: "گامبیا",
            gn: "گینه",
            gp: "گوادلوپ",
            gq: "گینهٔ استوایی",
            gr: "یونان",
            gt: "گواتمالا",
            gu: "گوام",
            gw: "گینهٔ بیسائو",
            gy: "گویان",
            hk: "هنگ‌کنگ، منطقهٔ ویژهٔ اداری چین",
            hn: "هندوراس",
            hr: "کرواسی",
            ht: "هائیتی",
            hu: "مجارستان",
            id: "اندونزی",
            ie: "ایرلند",
            il: "اسرائیل",
            im: "جزیرهٔ من",
            in: "هند",
            io: "قلمرو بریتانیا در اقیانوس هند",
            iq: "عراق",
            ir: "ایران",
            is: "ایسلند",
            it: "ایتالیا",
            je: "جرزی",
            jm: "جامائیکا",
            jo: "اردن",
            jp: "ژاپن",
            ke: "کنیا",
            kg: "قرقیزستان",
            kh: "کامبوج",
            ki: "کیریباتی",
            km: "کومور",
            kn: "سنت کیتس و نویس",
            kp: "کرهٔ شمالی",
            kr: "کرهٔ جنوبی",
            kw: "کویت",
            ky: "جزایر کِیمن",
            kz: "قزاقستان",
            la: "لائوس",
            lb: "لبنان",
            lc: "سنت لوسیا",
            li: "لیختن‌اشتاین",
            lk: "سری‌لانکا",
            lr: "لیبریا",
            ls: "لسوتو",
            lt: "لیتوانی",
            lu: "لوکزامبورگ",
            lv: "لتونی",
            ly: "لیبی",
            ma: "مراکش",
            mc: "موناکو",
            md: "مولداوی",
            me: "مونته‌نگرو",
            mf: "سنت مارتین",
            mg: "ماداگاسکار",
            mh: "جزایر مارشال",
            mk: "مقدونیهٔ شمالی",
            ml: "مالی",
            mm: "میانمار (برمه)",
            mn: "مغولستان",
            mo: "ماکائو، منطقهٔ ویژهٔ اداری چین",
            mp: "جزایر ماریانای شمالی",
            mq: "مارتینیک",
            mr: "موریتانی",
            ms: "مونت‌سرات",
            mt: "مالت",
            mu: "موریس",
            mv: "مالدیو",
            mw: "مالاوی",
            mx: "مکزیک",
            my: "مالزی",
            mz: "موزامبیک",
            na: "نامیبیا",
            nc: "کالدونیای جدید",
            ne: "نیجر",
            nf: "جزیرهٔ نورفولک",
            ng: "نیجریه",
            ni: "نیکاراگوئه",
            nl: "هلند",
            no: "نروژ",
            np: "نپال",
            nr: "نائورو",
            nu: "نیوئه",
            nz: "نیوزیلند",
            om: "عمان",
            pa: "پاناما",
            pe: "پرو",
            pf: "پلی‌نزی فرانسه",
            pg: "پاپوا گینهٔ نو",
            ph: "فیلیپین",
            pk: "پاکستان",
            pl: "لهستان",
            pm: "سن پیر و میکلن",
            pr: "پورتوریکو",
            ps: "سرزمین‌های فلسطینی",
            pt: "پرتغال",
            pw: "پالائو",
            py: "پاراگوئه",
            qa: "قطر",
            re: "رئونیون",
            ro: "رومانی",
            rs: "صربستان",
            ru: "روسیه",
            rw: "رواندا",
            sa: "عربستان سعودی",
            sb: "جزایر سلیمان",
            sc: "سیشل",
            sd: "سودان",
            se: "سوئد",
            sg: "سنگاپور",
            sh: "سنت هلن",
            si: "اسلوونی",
            sj: "سوالبارد و یان ماین",
            sk: "اسلواکی",
            sl: "سیرالئون",
            sm: "سان‌مارینو",
            sn: "سنگال",
            so: "سومالی",
            sr: "سورینام",
            ss: "سودان جنوبی",
            st: "سائوتومه و پرینسیپ",
            sv: "السالوادور",
            sx: "سنت مارتن",
            sy: "سوریه",
            sz: "اسواتینی",
            tc: "جزایر تورکس و کایکوس",
            td: "چاد",
            tg: "توگو",
            th: "تایلند",
            tj: "تاجیکستان",
            tk: "توکلائو",
            tl: "تیمور-لسته",
            tm: "ترکمنستان",
            tn: "تونس",
            to: "تونگا",
            tr: "ترکیه",
            tt: "ترینیداد و توباگو",
            tv: "تووالو",
            tw: "تایوان",
            tz: "تانزانیا",
            ua: "اوکراین",
            ug: "اوگاندا",
            us: "ایالات متحده",
            uy: "اروگوئه",
            uz: "ازبکستان",
            va: "واتیکان",
            vc: "سنت وینسنت و گرنادین",
            ve: "ونزوئلا",
            vg: "جزایر ویرجین بریتانیا",
            vi: "جزایر ویرجین ایالات متحده",
            vn: "ویتنام",
            vu: "وانواتو",
            wf: "والیس و فوتونا",
            ws: "ساموآ",
            ye: "یمن",
            yt: "مایوت",
            za: "افریقای جنوبی",
            zm: "زامبیا",
            zw: "زیمبابوه"
        };
        const fa_countries = fa_countries_countryTranslations;
        const fa_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "کشور انتخاب شده",
            noCountrySelected: "هیچ کشوری انتخاب نشده است",
            countryListAriaLabel: "لیست کشورها",
            searchPlaceholder: "جستجو",
            zeroSearchResults: "هیچ نتیجه‌ای یافت نشد",
            oneSearchResult: "1 نتیجه یافت شد",
            multipleSearchResults: "${count} نتیجه یافت شد",
            ac: "جزیره اسنشن",
            xk: "کوزوو"
        };
        const fa_interface = fa_interface_interfaceTranslations;
        const fi_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Arabiemiirikunnat",
            af: "Afganistan",
            ag: "Antigua ja Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentiina",
            as: "Amerikan Samoa",
            at: "Itävalta",
            au: "Australia",
            aw: "Aruba",
            ax: "Ahvenanmaa",
            az: "Azerbaidžan",
            ba: "Bosnia ja Hertsegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgia",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint-Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Karibian Alankomaat",
            br: "Brasilia",
            bs: "Bahama",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Valko-Venäjä",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kookossaaret (Keelingsaaret)",
            cd: "Kongon demokraattinen tasavalta",
            cf: "Keski-Afrikan tasavalta",
            cg: "Kongon tasavalta",
            ch: "Sveitsi",
            ci: "Norsunluurannikko",
            ck: "Cookinsaaret",
            cl: "Chile",
            cm: "Kamerun",
            cn: "Kiina",
            co: "Kolumbia",
            cr: "Costa Rica",
            cu: "Kuuba",
            cv: "Kap Verde",
            cw: "Curaçao",
            cx: "Joulusaari",
            cy: "Kypros",
            cz: "Tšekki",
            de: "Saksa",
            dj: "Djibouti",
            dk: "Tanska",
            dm: "Dominica",
            do: "Dominikaaninen tasavalta",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Viro",
            eg: "Egypti",
            eh: "Länsi-Sahara",
            er: "Eritrea",
            es: "Espanja",
            et: "Etiopia",
            fi: "Suomi",
            fj: "Fidži",
            fk: "Falklandinsaaret",
            fm: "Mikronesian liittovaltio",
            fo: "Färsaaret",
            fr: "Ranska",
            ga: "Gabon",
            gb: "Iso-Britannia",
            gd: "Grenada",
            ge: "Georgia",
            gf: "Ranskan Guayana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Grönlanti",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Päiväntasaajan Guinea",
            gr: "Kreikka",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hongkong – Kiinan e.h.a.",
            hn: "Honduras",
            hr: "Kroatia",
            ht: "Haiti",
            hu: "Unkari",
            id: "Indonesia",
            ie: "Irlanti",
            il: "Israel",
            im: "Mansaari",
            in: "Intia",
            io: "Brittiläinen Intian valtameren alue",
            iq: "Irak",
            ir: "Iran",
            is: "Islanti",
            it: "Italia",
            je: "Jersey",
            jm: "Jamaika",
            jo: "Jordania",
            jp: "Japani",
            ke: "Kenia",
            kg: "Kirgisia",
            kh: "Kambodža",
            ki: "Kiribati",
            km: "Komorit",
            kn: "Saint Kitts ja Nevis",
            kp: "Pohjois-Korea",
            kr: "Etelä-Korea",
            kw: "Kuwait",
            ky: "Caymansaaret",
            kz: "Kazakstan",
            la: "Laos",
            lb: "Libanon",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Liettua",
            lu: "Luxemburg",
            lv: "Latvia",
            ly: "Libya",
            ma: "Marokko",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "Saint-Martin",
            mg: "Madagaskar",
            mh: "Marshallinsaaret",
            mk: "Pohjois-Makedonia",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongolia",
            mo: "Macao – Kiinan e.h.a.",
            mp: "Pohjois-Mariaanit",
            mq: "Martinique",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Malediivit",
            mw: "Malawi",
            mx: "Meksiko",
            my: "Malesia",
            mz: "Mosambik",
            na: "Namibia",
            nc: "Uusi-Kaledonia",
            ne: "Niger",
            nf: "Norfolkinsaari",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Alankomaat",
            no: "Norja",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Uusi-Seelanti",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Ranskan Polynesia",
            pg: "Papua-Uusi-Guinea",
            ph: "Filippiinit",
            pk: "Pakistan",
            pl: "Puola",
            pm: "Saint-Pierre ja Miquelon",
            pr: "Puerto Rico",
            ps: "Palestiinalaisalueet",
            pt: "Portugali",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Romania",
            rs: "Serbia",
            ru: "Venäjä",
            rw: "Ruanda",
            sa: "Saudi-Arabia",
            sb: "Salomonsaaret",
            sc: "Seychellit",
            sd: "Sudan",
            se: "Ruotsi",
            sg: "Singapore",
            sh: "Saint Helena",
            si: "Slovenia",
            sj: "Huippuvuoret ja Jan Mayen",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "Etelä-Sudan",
            st: "São Tomé ja Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syyria",
            sz: "Swazimaa",
            tc: "Turks- ja Caicossaaret",
            td: "Tšad",
            tg: "Togo",
            th: "Thaimaa",
            tj: "Tadžikistan",
            tk: "Tokelau",
            tl: "Itä-Timor",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turkki",
            tt: "Trinidad ja Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tansania",
            ua: "Ukraina",
            ug: "Uganda",
            us: "Yhdysvallat",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Vatikaani",
            vc: "Saint Vincent ja Grenadiinit",
            ve: "Venezuela",
            vg: "Brittiläiset Neitsytsaaret",
            vi: "Yhdysvaltain Neitsytsaaret",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis ja Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Etelä-Afrikka",
            zm: "Sambia",
            zw: "Zimbabwe"
        };
        const fi_countries = fi_countries_countryTranslations;
        const fi_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Valittu maa",
            noCountrySelected: "Maata ei ole valittu",
            countryListAriaLabel: "Luettelo maista",
            searchPlaceholder: "Haku",
            zeroSearchResults: "Ei tuloksia",
            oneSearchResult: "1 tulos löytyi",
            multipleSearchResults: "${count} tulosta löytyi",
            ac: "Ascension",
            xk: "Kosovo"
        };
        const fi_interface = fi_interface_interfaceTranslations;
        const fr_countries_countryTranslations = {
            ad: "Andorre",
            ae: "Émirats arabes unis",
            af: "Afghanistan",
            ag: "Antigua-et-Barbuda",
            ai: "Anguilla",
            al: "Albanie",
            am: "Arménie",
            ao: "Angola",
            ar: "Argentine",
            as: "Samoa américaines",
            at: "Autriche",
            au: "Australie",
            aw: "Aruba",
            ax: "Îles Åland",
            az: "Azerbaïdjan",
            ba: "Bosnie-Herzégovine",
            bb: "Barbade",
            bd: "Bangladesh",
            be: "Belgique",
            bf: "Burkina Faso",
            bg: "Bulgarie",
            bh: "Bahreïn",
            bi: "Burundi",
            bj: "Bénin",
            bl: "Saint-Barthélemy",
            bm: "Bermudes",
            bn: "Brunéi Darussalam",
            bo: "Bolivie",
            bq: "Pays-Bas caribéens",
            br: "Brésil",
            bs: "Bahamas",
            bt: "Bhoutan",
            bw: "Botswana",
            by: "Biélorussie",
            bz: "Belize",
            ca: "Canada",
            cc: "Îles Cocos",
            cd: "Congo-Kinshasa",
            cf: "République centrafricaine",
            cg: "Congo-Brazzaville",
            ch: "Suisse",
            ci: "Côte d’Ivoire",
            ck: "Îles Cook",
            cl: "Chili",
            cm: "Cameroun",
            cn: "Chine",
            co: "Colombie",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cap-Vert",
            cw: "Curaçao",
            cx: "Île Christmas",
            cy: "Chypre",
            cz: "Tchéquie",
            de: "Allemagne",
            dj: "Djibouti",
            dk: "Danemark",
            dm: "Dominique",
            do: "République dominicaine",
            dz: "Algérie",
            ec: "Équateur",
            ee: "Estonie",
            eg: "Égypte",
            eh: "Sahara occidental",
            er: "Érythrée",
            es: "Espagne",
            et: "Éthiopie",
            fi: "Finlande",
            fj: "Fidji",
            fk: "Îles Malouines",
            fm: "États fédérés de Micronésie",
            fo: "Îles Féroé",
            fr: "France",
            ga: "Gabon",
            gb: "Royaume-Uni",
            gd: "Grenade",
            ge: "Géorgie",
            gf: "Guyane française",
            gg: "Guernesey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Groenland",
            gm: "Gambie",
            gn: "Guinée",
            gp: "Guadeloupe",
            gq: "Guinée équatoriale",
            gr: "Grèce",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinée-Bissau",
            gy: "Guyana",
            hk: "R.A.S. chinoise de Hong Kong",
            hn: "Honduras",
            hr: "Croatie",
            ht: "Haïti",
            hu: "Hongrie",
            id: "Indonésie",
            ie: "Irlande",
            il: "Israël",
            im: "Île de Man",
            in: "Inde",
            io: "Territoire britannique de l’océan Indien",
            iq: "Irak",
            ir: "Iran",
            is: "Islande",
            it: "Italie",
            je: "Jersey",
            jm: "Jamaïque",
            jo: "Jordanie",
            jp: "Japon",
            ke: "Kenya",
            kg: "Kirghizistan",
            kh: "Cambodge",
            ki: "Kiribati",
            km: "Comores",
            kn: "Saint-Christophe-et-Niévès",
            kp: "Corée du Nord",
            kr: "Corée du Sud",
            kw: "Koweït",
            ky: "Îles Caïmans",
            kz: "Kazakhstan",
            la: "Laos",
            lb: "Liban",
            lc: "Sainte-Lucie",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Libéria",
            ls: "Lesotho",
            lt: "Lituanie",
            lu: "Luxembourg",
            lv: "Lettonie",
            ly: "Libye",
            ma: "Maroc",
            mc: "Monaco",
            md: "Moldavie",
            me: "Monténégro",
            mf: "Saint-Martin",
            mg: "Madagascar",
            mh: "Îles Marshall",
            mk: "Macédoine du Nord",
            ml: "Mali",
            mm: "Myanmar (Birmanie)",
            mn: "Mongolie",
            mo: "R.A.S. chinoise de Macao",
            mp: "Îles Mariannes du Nord",
            mq: "Martinique",
            mr: "Mauritanie",
            ms: "Montserrat",
            mt: "Malte",
            mu: "Maurice",
            mv: "Maldives",
            mw: "Malawi",
            mx: "Mexique",
            my: "Malaisie",
            mz: "Mozambique",
            na: "Namibie",
            nc: "Nouvelle-Calédonie",
            ne: "Niger",
            nf: "Île Norfolk",
            ng: "Nigéria",
            ni: "Nicaragua",
            nl: "Pays-Bas",
            no: "Norvège",
            np: "Népal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nouvelle-Zélande",
            om: "Oman",
            pa: "Panama",
            pe: "Pérou",
            pf: "Polynésie française",
            pg: "Papouasie-Nouvelle-Guinée",
            ph: "Philippines",
            pk: "Pakistan",
            pl: "Pologne",
            pm: "Saint-Pierre-et-Miquelon",
            pr: "Porto Rico",
            ps: "Territoires palestiniens",
            pt: "Portugal",
            pw: "Palaos",
            py: "Paraguay",
            qa: "Qatar",
            re: "La Réunion",
            ro: "Roumanie",
            rs: "Serbie",
            ru: "Russie",
            rw: "Rwanda",
            sa: "Arabie saoudite",
            sb: "Îles Salomon",
            sc: "Seychelles",
            sd: "Soudan",
            se: "Suède",
            sg: "Singapour",
            sh: "Sainte-Hélène",
            si: "Slovénie",
            sj: "Svalbard et Jan Mayen",
            sk: "Slovaquie",
            sl: "Sierra Leone",
            sm: "Saint-Marin",
            sn: "Sénégal",
            so: "Somalie",
            sr: "Suriname",
            ss: "Soudan du Sud",
            st: "Sao Tomé-et-Principe",
            sv: "Salvador",
            sx: "Saint-Martin (partie néerlandaise)",
            sy: "Syrie",
            sz: "Eswatini",
            tc: "Îles Turques-et-Caïques",
            td: "Tchad",
            tg: "Togo",
            th: "Thaïlande",
            tj: "Tadjikistan",
            tk: "Tokelau",
            tl: "Timor oriental",
            tm: "Turkménistan",
            tn: "Tunisie",
            to: "Tonga",
            tr: "Turquie",
            tt: "Trinité-et-Tobago",
            tv: "Tuvalu",
            tw: "Taïwan",
            tz: "Tanzanie",
            ua: "Ukraine",
            ug: "Ouganda",
            us: "États-Unis",
            uy: "Uruguay",
            uz: "Ouzbékistan",
            va: "État de la Cité du Vatican",
            vc: "Saint-Vincent-et-les-Grenadines",
            ve: "Venezuela",
            vg: "Îles Vierges britanniques",
            vi: "Îles Vierges des États-Unis",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis-et-Futuna",
            ws: "Samoa",
            ye: "Yémen",
            yt: "Mayotte",
            za: "Afrique du Sud",
            zm: "Zambie",
            zw: "Zimbabwe"
        };
        const fr_countries = fr_countries_countryTranslations;
        const fr_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Pays sélectionné",
            noCountrySelected: "Aucun pays sélectionné",
            countryListAriaLabel: "Liste des pays",
            searchPlaceholder: "Recherche",
            zeroSearchResults: "Aucun résultat trouvé",
            oneSearchResult: "1 résultat trouvé",
            multipleSearchResults: "${count} résultats trouvés",
            ac: "Île de l'Ascension",
            xk: "Kosovo"
        };
        const fr_interface = fr_interface_interfaceTranslations;
        const hi_countries_countryTranslations = {
            ad: "एंडोरा",
            ae: "संयुक्त अरब अमीरात",
            af: "अफ़गानिस्तान",
            ag: "एंटिगुआ और बरबुडा",
            ai: "एंग्विला",
            al: "अल्बानिया",
            am: "आर्मेनिया",
            ao: "अंगोला",
            ar: "अर्जेंटीना",
            as: "अमेरिकी समोआ",
            at: "ऑस्ट्रिया",
            au: "ऑस्ट्रेलिया",
            aw: "अरूबा",
            ax: "एलैंड द्वीपसमूह",
            az: "अज़रबैजान",
            ba: "बोस्निया और हर्ज़ेगोविना",
            bb: "बारबाडोस",
            bd: "बांग्लादेश",
            be: "बेल्जियम",
            bf: "बुर्किना फ़ासो",
            bg: "बुल्गारिया",
            bh: "बहरीन",
            bi: "बुरुंडी",
            bj: "बेनिन",
            bl: "सेंट बार्थेलेमी",
            bm: "बरमूडा",
            bn: "ब्रूनेई",
            bo: "बोलीविया",
            bq: "कैरिबियन नीदरलैंड",
            br: "ब्राज़ील",
            bs: "बहामास",
            bt: "भूटान",
            bw: "बोत्स्वाना",
            by: "बेलारूस",
            bz: "बेलीज़",
            ca: "कनाडा",
            cc: "कोकोस (कीलिंग) द्वीपसमूह",
            cd: "कांगो - किंशासा",
            cf: "मध्य अफ़्रीकी गणराज्य",
            cg: "कांगो – ब्राज़ाविल",
            ch: "स्विट्ज़रलैंड",
            ci: "कोट डी आइवर",
            ck: "कुक द्वीपसमूह",
            cl: "चिली",
            cm: "कैमरून",
            cn: "चीन",
            co: "कोलंबिया",
            cr: "कोस्टारिका",
            cu: "क्यूबा",
            cv: "केप वर्ड",
            cw: "क्यूरासाओ",
            cx: "क्रिसमस द्वीप",
            cy: "साइप्रस",
            cz: "चेकिया",
            de: "जर्मनी",
            dj: "जिबूती",
            dk: "डेनमार्क",
            dm: "डोमिनिका",
            do: "डोमिनिकन गणराज्य",
            dz: "अल्जीरिया",
            ec: "इक्वाडोर",
            ee: "एस्टोनिया",
            eg: "मिस्र",
            eh: "पश्चिमी सहारा",
            er: "इरिट्रिया",
            es: "स्पेन",
            et: "इथियोपिया",
            fi: "फ़िनलैंड",
            fj: "फ़िजी",
            fk: "फ़ॉकलैंड द्वीपसमूह",
            fm: "माइक्रोनेशिया",
            fo: "फ़ेरो द्वीपसमूह",
            fr: "फ़्रांस",
            ga: "गैबॉन",
            gb: "यूनाइटेड किंगडम",
            gd: "ग्रेनाडा",
            ge: "जॉर्जिया",
            gf: "फ़्रेंच गुयाना",
            gg: "गर्नसी",
            gh: "घाना",
            gi: "जिब्राल्टर",
            gl: "ग्रीनलैंड",
            gm: "गाम्बिया",
            gn: "गिनी",
            gp: "ग्वाडेलूप",
            gq: "इक्वेटोरियल गिनी",
            gr: "यूनान",
            gt: "ग्वाटेमाला",
            gu: "गुआम",
            gw: "गिनी-बिसाउ",
            gy: "गुयाना",
            hk: "हाँग काँग (चीन विशेष प्रशासनिक क्षेत्र)",
            hn: "होंडूरास",
            hr: "क्रोएशिया",
            ht: "हैती",
            hu: "हंगरी",
            id: "इंडोनेशिया",
            ie: "आयरलैंड",
            il: "इज़राइल",
            im: "आइल ऑफ़ मैन",
            in: "भारत",
            io: "ब्रिटिश हिंद महासागरीय क्षेत्र",
            iq: "इराक",
            ir: "ईरान",
            is: "आइसलैंड",
            it: "इटली",
            je: "जर्सी",
            jm: "जमैका",
            jo: "जॉर्डन",
            jp: "जापान",
            ke: "केन्या",
            kg: "किर्गिज़स्तान",
            kh: "कंबोडिया",
            ki: "किरिबाती",
            km: "कोमोरोस",
            kn: "सेंट किट्स और नेविस",
            kp: "उत्तर कोरिया",
            kr: "दक्षिण कोरिया",
            kw: "कुवैत",
            ky: "कैमेन द्वीपसमूह",
            kz: "कज़ाखस्तान",
            la: "लाओस",
            lb: "लेबनान",
            lc: "सेंट लूसिया",
            li: "लिचेंस्टीन",
            lk: "श्रीलंका",
            lr: "लाइबेरिया",
            ls: "लेसोथो",
            lt: "लिथुआनिया",
            lu: "लग्ज़मबर्ग",
            lv: "लातविया",
            ly: "लीबिया",
            ma: "मोरक्को",
            mc: "मोनाको",
            md: "मॉल्डोवा",
            me: "मोंटेनेग्रो",
            mf: "सेंट मार्टिन",
            mg: "मेडागास्कर",
            mh: "मार्शल द्वीपसमूह",
            mk: "उत्तरी मकदूनिया",
            ml: "माली",
            mm: "म्यांमार (बर्मा)",
            mn: "मंगोलिया",
            mo: "मकाऊ (विशेष प्रशासनिक क्षेत्र चीन)",
            mp: "उत्तरी मारियाना द्वीपसमूह",
            mq: "मार्टीनिक",
            mr: "मॉरिटानिया",
            ms: "मोंटसेरात",
            mt: "माल्टा",
            mu: "मॉरीशस",
            mv: "मालदीव",
            mw: "मलावी",
            mx: "मैक्सिको",
            my: "मलेशिया",
            mz: "मोज़ांबिक",
            na: "नामीबिया",
            nc: "न्यू कैलेडोनिया",
            ne: "नाइजर",
            nf: "नॉरफ़ॉक द्वीप",
            ng: "नाइजीरिया",
            ni: "निकारागुआ",
            nl: "नीदरलैंड",
            no: "नॉर्वे",
            np: "नेपाल",
            nr: "नाउरु",
            nu: "नीयू",
            nz: "न्यूज़ीलैंड",
            om: "ओमान",
            pa: "पनामा",
            pe: "पेरू",
            pf: "फ़्रेंच पोलिनेशिया",
            pg: "पापुआ न्यू गिनी",
            ph: "फ़िलिपींस",
            pk: "पाकिस्तान",
            pl: "पोलैंड",
            pm: "सेंट पिएरे और मिक्वेलान",
            pr: "पोर्टो रिको",
            ps: "फ़िलिस्तीनी क्षेत्र",
            pt: "पुर्तगाल",
            pw: "पलाऊ",
            py: "पराग्वे",
            qa: "क़तर",
            re: "रियूनियन",
            ro: "रोमानिया",
            rs: "सर्बिया",
            ru: "रूस",
            rw: "रवांडा",
            sa: "सऊदी अरब",
            sb: "सोलोमन द्वीपसमूह",
            sc: "सेशेल्स",
            sd: "सूडान",
            se: "स्वीडन",
            sg: "सिंगापुर",
            sh: "सेंट हेलेना",
            si: "स्लोवेनिया",
            sj: "स्वालबार्ड और जान मायेन",
            sk: "स्लोवाकिया",
            sl: "सिएरा लियोन",
            sm: "सैन मेरीनो",
            sn: "सेनेगल",
            so: "सोमालिया",
            sr: "सूरीनाम",
            ss: "दक्षिण सूडान",
            st: "साओ टोम और प्रिंसिपे",
            sv: "अल सल्वाडोर",
            sx: "सिंट मार्टिन",
            sy: "सीरिया",
            sz: "स्वाज़ीलैंड",
            tc: "तुर्क और कैकोज़ द्वीपसमूह",
            td: "चाड",
            tg: "टोगो",
            th: "थाईलैंड",
            tj: "ताज़िकिस्तान",
            tk: "तोकेलाउ",
            tl: "तिमोर-लेस्त",
            tm: "तुर्कमेनिस्तान",
            tn: "ट्यूनीशिया",
            to: "टोंगा",
            tr: "तुर्की",
            tt: "त्रिनिदाद और टोबैगो",
            tv: "तुवालू",
            tw: "ताइवान",
            tz: "तंज़ानिया",
            ua: "यूक्रेन",
            ug: "युगांडा",
            us: "संयुक्त राज्य",
            uy: "उरूग्वे",
            uz: "उज़्बेकिस्तान",
            va: "वेटिकन सिटी",
            vc: "सेंट विंसेंट और ग्रेनाडाइंस",
            ve: "वेनेज़ुएला",
            vg: "ब्रिटिश वर्जिन द्वीपसमूह",
            vi: "यू॰एस॰ वर्जिन द्वीपसमूह",
            vn: "वियतनाम",
            vu: "वनुआतू",
            wf: "वालिस और फ़्यूचूना",
            ws: "समोआ",
            ye: "यमन",
            yt: "मायोते",
            za: "दक्षिण अफ़्रीका",
            zm: "ज़ाम्बिया",
            zw: "ज़िम्बाब्वे"
        };
        const hi_countries = hi_countries_countryTranslations;
        const hi_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "चयनित देश",
            noCountrySelected: "कोई देश चयनित नहीं",
            countryListAriaLabel: "देशों की सूची",
            searchPlaceholder: "खोज",
            zeroSearchResults: "कोई परिणाम नहीं मिला",
            oneSearchResult: "1 परिणाम मिला",
            multipleSearchResults: "${count} परिणाम मिले",
            ac: "असेंशन द्वीप",
            xk: "कोसोवो"
        };
        const hi_interface = hi_interface_interfaceTranslations;
        const hr_countries_countryTranslations = {
            ad: "Andora",
            ae: "Ujedinjeni Arapski Emirati",
            af: "Afganistan",
            ag: "Antigva i Barbuda",
            ai: "Angvila",
            al: "Albanija",
            am: "Armenija",
            ao: "Angola",
            ar: "Argentina",
            as: "Američka Samoa",
            at: "Austrija",
            au: "Australija",
            aw: "Aruba",
            ax: "Ålandski otoci",
            az: "Azerbajdžan",
            ba: "Bosna i Hercegovina",
            bb: "Barbados",
            bd: "Bangladeš",
            be: "Belgija",
            bf: "Burkina Faso",
            bg: "Bugarska",
            bh: "Bahrein",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint Barthélemy",
            bm: "Bermudi",
            bn: "Brunej",
            bo: "Bolivija",
            bq: "Karipski otoci Nizozemske",
            br: "Brazil",
            bs: "Bahami",
            bt: "Butan",
            bw: "Bocvana",
            by: "Bjelorusija",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kokosovi (Keelingovi) otoci",
            cd: "Kongo - Kinshasa",
            cf: "Srednjoafrička Republika",
            cg: "Kongo - Brazzaville",
            ch: "Švicarska",
            ci: "Obala Bjelokosti",
            ck: "Cookovi Otoci",
            cl: "Čile",
            cm: "Kamerun",
            cn: "Kina",
            co: "Kolumbija",
            cr: "Kostarika",
            cu: "Kuba",
            cv: "Zelenortska Republika",
            cw: "Curaçao",
            cx: "Božićni otok",
            cy: "Cipar",
            cz: "Češka",
            de: "Njemačka",
            dj: "Džibuti",
            dk: "Danska",
            dm: "Dominika",
            do: "Dominikanska Republika",
            dz: "Alžir",
            ec: "Ekvador",
            ee: "Estonija",
            eg: "Egipat",
            eh: "Zapadna Sahara",
            er: "Eritreja",
            es: "Španjolska",
            et: "Etiopija",
            fi: "Finska",
            fj: "Fidži",
            fk: "Falklandski otoci",
            fm: "Mikronezija",
            fo: "Farski otoci",
            fr: "Francuska",
            ga: "Gabon",
            gb: "Ujedinjeno Kraljevstvo",
            gd: "Grenada",
            ge: "Gruzija",
            gf: "Francuska Gijana",
            gg: "Guernsey",
            gh: "Gana",
            gi: "Gibraltar",
            gl: "Grenland",
            gm: "Gambija",
            gn: "Gvineja",
            gp: "Guadalupe",
            gq: "Ekvatorska Gvineja",
            gr: "Grčka",
            gt: "Gvatemala",
            gu: "Guam",
            gw: "Gvineja Bisau",
            gy: "Gvajana",
            hk: "PUP Hong Kong Kina",
            hn: "Honduras",
            hr: "Hrvatska",
            ht: "Haiti",
            hu: "Mađarska",
            id: "Indonezija",
            ie: "Irska",
            il: "Izrael",
            im: "Otok Man",
            in: "Indija",
            io: "Britanski Indijskooceanski teritorij",
            iq: "Irak",
            ir: "Iran",
            is: "Island",
            it: "Italija",
            je: "Jersey",
            jm: "Jamajka",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenija",
            kg: "Kirgistan",
            kh: "Kambodža",
            ki: "Kiribati",
            km: "Komori",
            kn: "Sveti Kristofor i Nevis",
            kp: "Sjeverna Koreja",
            kr: "Južna Koreja",
            kw: "Kuvajt",
            ky: "Kajmanski otoci",
            kz: "Kazahstan",
            la: "Laos",
            lb: "Libanon",
            lc: "Sveta Lucija",
            li: "Lihtenštajn",
            lk: "Šri Lanka",
            lr: "Liberija",
            ls: "Lesoto",
            lt: "Litva",
            lu: "Luksemburg",
            lv: "Latvija",
            ly: "Libija",
            ma: "Maroko",
            mc: "Monako",
            md: "Moldavija",
            me: "Crna Gora",
            mf: "Saint Martin",
            mg: "Madagaskar",
            mh: "Maršalovi Otoci",
            mk: "Sjeverna Makedonija",
            ml: "Mali",
            mm: "Mjanmar (Burma)",
            mn: "Mongolija",
            mo: "PUP Makao Kina",
            mp: "Sjevernomarijanski otoci",
            mq: "Martinique",
            mr: "Mauretanija",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauricijus",
            mv: "Maldivi",
            mw: "Malavi",
            mx: "Meksiko",
            my: "Malezija",
            mz: "Mozambik",
            na: "Namibija",
            nc: "Nova Kaledonija",
            ne: "Niger",
            nf: "Otok Norfolk",
            ng: "Nigerija",
            ni: "Nikaragva",
            nl: "Nizozemska",
            no: "Norveška",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Novi Zeland",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Francuska Polinezija",
            pg: "Papua Nova Gvineja",
            ph: "Filipini",
            pk: "Pakistan",
            pl: "Poljska",
            pm: "Saint-Pierre-et-Miquelon",
            pr: "Portoriko",
            ps: "Palestinsko područje",
            pt: "Portugal",
            pw: "Palau",
            py: "Paragvaj",
            qa: "Katar",
            re: "Réunion",
            ro: "Rumunjska",
            rs: "Srbija",
            ru: "Rusija",
            rw: "Ruanda",
            sa: "Saudijska Arabija",
            sb: "Salomonski Otoci",
            sc: "Sejšeli",
            sd: "Sudan",
            se: "Švedska",
            sg: "Singapur",
            sh: "Sveta Helena",
            si: "Slovenija",
            sj: "Svalbard i Jan Mayen",
            sk: "Slovačka",
            sl: "Sijera Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalija",
            sr: "Surinam",
            ss: "Južni Sudan",
            st: "Sveti Toma i Princip",
            sv: "Salvador",
            sx: "Sint Maarten",
            sy: "Sirija",
            sz: "Esvatini",
            tc: "Otoci Turks i Caicos",
            td: "Čad",
            tg: "Togo",
            th: "Tajland",
            tj: "Tadžikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunis",
            to: "Tonga",
            tr: "Turska",
            tt: "Trinidad i Tobago",
            tv: "Tuvalu",
            tw: "Tajvan",
            tz: "Tanzanija",
            ua: "Ukrajina",
            ug: "Uganda",
            us: "Sjedinjene Američke Države",
            uy: "Urugvaj",
            uz: "Uzbekistan",
            va: "Vatikanski Grad",
            vc: "Sveti Vincent i Grenadini",
            ve: "Venezuela",
            vg: "Britanski Djevičanski otoci",
            vi: "Američki Djevičanski otoci",
            vn: "Vijetnam",
            vu: "Vanuatu",
            wf: "Wallis i Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Južnoafrička Republika",
            zm: "Zambija",
            zw: "Zimbabve"
        };
        const hr_countries = hr_countries_countryTranslations;
        const hr_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Odabrana zemlja",
            noCountrySelected: "Zemlja nije odabrana",
            countryListAriaLabel: "Lista zemalja",
            searchPlaceholder: "Pretraži",
            zeroSearchResults: "Nema pronađenih rezultata",
            oneSearchResult: "Pronađen 1 rezultat",
            multipleSearchResults: "${count} rezultata pronađeno",
            ac: "Ascension",
            xk: "Kosovo"
        };
        const hr_interface = hr_interface_interfaceTranslations;
        const hu_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Egyesült Arab Emírségek",
            af: "Afganisztán",
            ag: "Antigua és Barbuda",
            ai: "Anguilla",
            al: "Albánia",
            am: "Örményország",
            ao: "Angola",
            ar: "Argentína",
            as: "Amerikai Szamoa",
            at: "Ausztria",
            au: "Ausztrália",
            aw: "Aruba",
            ax: "Åland-szigetek",
            az: "Azerbajdzsán",
            ba: "Bosznia-Hercegovina",
            bb: "Barbados",
            bd: "Banglades",
            be: "Belgium",
            bf: "Burkina Faso",
            bg: "Bulgária",
            bh: "Bahrein",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint-Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolívia",
            bq: "Holland Karib-térség",
            br: "Brazília",
            bs: "Bahama-szigetek",
            bt: "Bhután",
            bw: "Botswana",
            by: "Belarusz",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kókusz (Keeling)-szigetek",
            cd: "Kongó - Kinshasa",
            cf: "Közép-afrikai Köztársaság",
            cg: "Kongó - Brazzaville",
            ch: "Svájc",
            ci: "Elefántcsontpart",
            ck: "Cook-szigetek",
            cl: "Chile",
            cm: "Kamerun",
            cn: "Kína",
            co: "Kolumbia",
            cr: "Costa Rica",
            cu: "Kuba",
            cv: "Zöld-foki Köztársaság",
            cw: "Curaçao",
            cx: "Karácsony-sziget",
            cy: "Ciprus",
            cz: "Csehország",
            de: "Németország",
            dj: "Dzsibuti",
            dk: "Dánia",
            dm: "Dominika",
            do: "Dominikai Köztársaság",
            dz: "Algéria",
            ec: "Ecuador",
            ee: "Észtország",
            eg: "Egyiptom",
            eh: "Nyugat-Szahara",
            er: "Eritrea",
            es: "Spanyolország",
            et: "Etiópia",
            fi: "Finnország",
            fj: "Fidzsi",
            fk: "Falkland-szigetek",
            fm: "Mikronézia",
            fo: "Feröer szigetek",
            fr: "Franciaország",
            ga: "Gabon",
            gb: "Egyesült Királyság",
            gd: "Grenada",
            ge: "Grúzia",
            gf: "Francia Guyana",
            gg: "Guernsey",
            gh: "Ghána",
            gi: "Gibraltár",
            gl: "Grönland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Egyenlítői-Guinea",
            gr: "Görögország",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Bissau-Guinea",
            gy: "Guyana",
            hk: "Hongkong KKT",
            hn: "Honduras",
            hr: "Horvátország",
            ht: "Haiti",
            hu: "Magyarország",
            id: "Indonézia",
            ie: "Írország",
            il: "Izrael",
            im: "Man-sziget",
            in: "India",
            io: "Brit Indiai-óceáni Terület",
            iq: "Irak",
            ir: "Irán",
            is: "Izland",
            it: "Olaszország",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordánia",
            jp: "Japán",
            ke: "Kenya",
            kg: "Kirgizisztán",
            kh: "Kambodzsa",
            ki: "Kiribati",
            km: "Comore-szigetek",
            kn: "Saint Kitts és Nevis",
            kp: "Észak-Korea",
            kr: "Dél-Korea",
            kw: "Kuvait",
            ky: "Kajmán-szigetek",
            kz: "Kazahsztán",
            la: "Laosz",
            lb: "Libanon",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Srí Lanka",
            lr: "Libéria",
            ls: "Lesotho",
            lt: "Litvánia",
            lu: "Luxemburg",
            lv: "Lettország",
            ly: "Líbia",
            ma: "Marokkó",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegró",
            mf: "Saint Martin",
            mg: "Madagaszkár",
            mh: "Marshall-szigetek",
            mk: "Észak-Macedónia",
            ml: "Mali",
            mm: "Mianmar",
            mn: "Mongólia",
            mo: "Makaó KKT",
            mp: "Északi Mariana-szigetek",
            mq: "Martinique",
            mr: "Mauritánia",
            ms: "Montserrat",
            mt: "Málta",
            mu: "Mauritius",
            mv: "Maldív-szigetek",
            mw: "Malawi",
            mx: "Mexikó",
            my: "Malajzia",
            mz: "Mozambik",
            na: "Namíbia",
            nc: "Új-Kaledónia",
            ne: "Niger",
            nf: "Norfolk-sziget",
            ng: "Nigéria",
            ni: "Nicaragua",
            nl: "Hollandia",
            no: "Norvégia",
            np: "Nepál",
            nr: "Nauru",
            nu: "Niue",
            nz: "Új-Zéland",
            om: "Omán",
            pa: "Panama",
            pe: "Peru",
            pf: "Francia Polinézia",
            pg: "Pápua Új-Guinea",
            ph: "Fülöp-szigetek",
            pk: "Pakisztán",
            pl: "Lengyelország",
            pm: "Saint-Pierre és Miquelon",
            pr: "Puerto Rico",
            ps: "Palesztin Terület",
            pt: "Portugália",
            pw: "Palau",
            py: "Paraguay",
            qa: "Katar",
            re: "Réunion",
            ro: "Románia",
            rs: "Szerbia",
            ru: "Oroszország",
            rw: "Ruanda",
            sa: "Szaúd-Arábia",
            sb: "Salamon-szigetek",
            sc: "Seychelle-szigetek",
            sd: "Szudán",
            se: "Svédország",
            sg: "Szingapúr",
            sh: "Szent Ilona",
            si: "Szlovénia",
            sj: "Svalbard és Jan Mayen",
            sk: "Szlovákia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Szenegál",
            so: "Szomália",
            sr: "Suriname",
            ss: "Dél-Szudán",
            st: "São Tomé és Príncipe",
            sv: "Salvador",
            sx: "Sint Maarten",
            sy: "Szíria",
            sz: "Szváziföld",
            tc: "Turks- és Caicos-szigetek",
            td: "Csád",
            tg: "Togo",
            th: "Thaiföld",
            tj: "Tádzsikisztán",
            tk: "Tokelau",
            tl: "Kelet-Timor",
            tm: "Türkmenisztán",
            tn: "Tunézia",
            to: "Tonga",
            tr: "Törökország",
            tt: "Trinidad és Tobago",
            tv: "Tuvalu",
            tw: "Tajvan",
            tz: "Tanzánia",
            ua: "Ukrajna",
            ug: "Uganda",
            us: "Egyesült Államok",
            uy: "Uruguay",
            uz: "Üzbegisztán",
            va: "Vatikán",
            vc: "Saint Vincent és a Grenadine-szigetek",
            ve: "Venezuela",
            vg: "Brit Virgin-szigetek",
            vi: "Amerikai Virgin-szigetek",
            vn: "Vietnám",
            vu: "Vanuatu",
            wf: "Wallis és Futuna",
            ws: "Szamoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Dél-afrikai Köztársaság",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const hu_countries = hu_countries_countryTranslations;
        const hu_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Kiválasztott ország",
            noCountrySelected: "Nincs ország kiválasztva",
            countryListAriaLabel: "Országok listája",
            searchPlaceholder: "Keresés",
            zeroSearchResults: "Nincs találat",
            oneSearchResult: "1 találat",
            multipleSearchResults: "${count} találat",
            ac: "Ascension-sziget",
            xk: "Koszovó"
        };
        const hu_interface = hu_interface_interfaceTranslations;
        const id_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Uni Emirat Arab",
            af: "Afganistan",
            ag: "Antigua dan Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "Samoa Amerika",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "Kepulauan Aland",
            az: "Azerbaijan",
            ba: "Bosnia dan Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgia",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Belanda Karibia",
            br: "Brasil",
            bs: "Bahama",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kepulauan Cocos (Keeling)",
            cd: "Kongo - Kinshasa",
            cf: "Republik Afrika Tengah",
            cg: "Kongo - Brazzaville",
            ch: "Swiss",
            ci: "Côte d’Ivoire",
            ck: "Kepulauan Cook",
            cl: "Cile",
            cm: "Kamerun",
            cn: "Tiongkok",
            co: "Kolombia",
            cr: "Kosta Rika",
            cu: "Kuba",
            cv: "Tanjung Verde",
            cw: "Curaçao",
            cx: "Pulau Natal",
            cy: "Siprus",
            cz: "Ceko",
            de: "Jerman",
            dj: "Jibuti",
            dk: "Denmark",
            dm: "Dominika",
            do: "Republik Dominika",
            dz: "Aljazair",
            ec: "Ekuador",
            ee: "Estonia",
            eg: "Mesir",
            eh: "Sahara Barat",
            er: "Eritrea",
            es: "Spanyol",
            et: "Etiopia",
            fi: "Finlandia",
            fj: "Fiji",
            fk: "Kepulauan Falkland",
            fm: "Mikronesia",
            fo: "Kepulauan Faroe",
            fr: "Prancis",
            ga: "Gabon",
            gb: "Inggris Raya",
            gd: "Grenada",
            ge: "Georgia",
            gf: "Guyana Prancis",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Grinlandia",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Guinea Ekuatorial",
            gr: "Yunani",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hong Kong DAK Tiongkok",
            hn: "Honduras",
            hr: "Kroasia",
            ht: "Haiti",
            hu: "Hungaria",
            id: "Indonesia",
            ie: "Irlandia",
            il: "Israel",
            im: "Pulau Man",
            in: "India",
            io: "Wilayah Inggris di Samudra Hindia",
            iq: "Irak",
            ir: "Iran",
            is: "Islandia",
            it: "Italia",
            je: "Jersey",
            jm: "Jamaika",
            jo: "Yordania",
            jp: "Jepang",
            ke: "Kenya",
            kg: "Kirgistan",
            kh: "Kamboja",
            ki: "Kiribati",
            km: "Komoro",
            kn: "Saint Kitts dan Nevis",
            kp: "Korea Utara",
            kr: "Korea Selatan",
            kw: "Kuwait",
            ky: "Kepulauan Cayman",
            kz: "Kazakstan",
            la: "Laos",
            lb: "Lebanon",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Lituania",
            lu: "Luksemburg",
            lv: "Latvia",
            ly: "Libia",
            ma: "Maroko",
            mc: "Monako",
            md: "Moldova",
            me: "Montenegro",
            mf: "Saint Martin",
            mg: "Madagaskar",
            mh: "Kepulauan Marshall",
            mk: "Makedonia Utara",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongolia",
            mo: "Makau DAK Tiongkok",
            mp: "Kepulauan Mariana Utara",
            mq: "Martinik",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maladewa",
            mw: "Malawi",
            mx: "Meksiko",
            my: "Malaysia",
            mz: "Mozambik",
            na: "Namibia",
            nc: "Kaledonia Baru",
            ne: "Niger",
            nf: "Kepulauan Norfolk",
            ng: "Nigeria",
            ni: "Nikaragua",
            nl: "Belanda",
            no: "Norwegia",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Selandia Baru",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Polinesia Prancis",
            pg: "Papua Nugini",
            ph: "Filipina",
            pk: "Pakistan",
            pl: "Polandia",
            pm: "Saint Pierre dan Miquelon",
            pr: "Puerto Riko",
            ps: "Wilayah Palestina",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Rumania",
            rs: "Serbia",
            ru: "Rusia",
            rw: "Rwanda",
            sa: "Arab Saudi",
            sb: "Kepulauan Solomon",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Swedia",
            sg: "Singapura",
            sh: "Saint Helena",
            si: "Slovenia",
            sj: "Kepulauan Svalbard dan Jan Mayen",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "Sudan Selatan",
            st: "Sao Tome dan Principe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Suriah",
            sz: "eSwatini",
            tc: "Kepulauan Turks dan Caicos",
            td: "Cad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tajikistan",
            tk: "Tokelau",
            tl: "Timor Leste",
            tm: "Turkimenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turki",
            tt: "Trinidad dan Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ukraina",
            ug: "Uganda",
            us: "Amerika Serikat",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Vatikan",
            vc: "Saint Vincent dan Grenadine",
            ve: "Venezuela",
            vg: "Kepulauan Virgin Britania Raya",
            vi: "Kepulauan Virgin Amerika Serikat",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Kepulauan Wallis dan Futuna",
            ws: "Samoa",
            ye: "Yaman",
            yt: "Mayotte",
            za: "Afrika Selatan",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const id_countries = id_countries_countryTranslations;
        const id_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Negara yang dipilih",
            noCountrySelected: "Tidak ada negara yang dipilih",
            countryListAriaLabel: "Daftar negara",
            searchPlaceholder: "Mencari",
            zeroSearchResults: "Tidak ada hasil yang ditemukan",
            oneSearchResult: "1 hasil ditemukan",
            multipleSearchResults: "${count} hasil ditemukan",
            ac: "Pulau Kenaikan",
            xk: "Kosovo"
        };
        const id_interface = id_interface_interfaceTranslations;
        const it_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Emirati Arabi Uniti",
            af: "Afghanistan",
            ag: "Antigua e Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "Samoa americane",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "Isole Åland",
            az: "Azerbaigian",
            ba: "Bosnia ed Erzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgio",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrein",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint-Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Caraibi olandesi",
            br: "Brasile",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Bielorussia",
            bz: "Belize",
            ca: "Canada",
            cc: "Isole Cocos (Keeling)",
            cd: "Congo - Kinshasa",
            cf: "Repubblica Centrafricana",
            cg: "Congo-Brazzaville",
            ch: "Svizzera",
            ci: "Costa d’Avorio",
            ck: "Isole Cook",
            cl: "Cile",
            cm: "Camerun",
            cn: "Cina",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Capo Verde",
            cw: "Curaçao",
            cx: "Isola Christmas",
            cy: "Cipro",
            cz: "Cechia",
            de: "Germania",
            dj: "Gibuti",
            dk: "Danimarca",
            dm: "Dominica",
            do: "Repubblica Dominicana",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Egitto",
            eh: "Sahara occidentale",
            er: "Eritrea",
            es: "Spagna",
            et: "Etiopia",
            fi: "Finlandia",
            fj: "Figi",
            fk: "Isole Falkland",
            fm: "Micronesia",
            fo: "Isole Fær Øer",
            fr: "Francia",
            ga: "Gabon",
            gb: "Regno Unito",
            gd: "Grenada",
            ge: "Georgia",
            gf: "Guyana francese",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibilterra",
            gl: "Groenlandia",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadalupa",
            gq: "Guinea Equatoriale",
            gr: "Grecia",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "RAS di Hong Kong",
            hn: "Honduras",
            hr: "Croazia",
            ht: "Haiti",
            hu: "Ungheria",
            id: "Indonesia",
            ie: "Irlanda",
            il: "Israele",
            im: "Isola di Man",
            in: "India",
            io: "Territorio britannico dell’Oceano Indiano",
            iq: "Iraq",
            ir: "Iran",
            is: "Islanda",
            it: "Italia",
            je: "Jersey",
            jm: "Giamaica",
            jo: "Giordania",
            jp: "Giappone",
            ke: "Kenya",
            kg: "Kirghizistan",
            kh: "Cambogia",
            ki: "Kiribati",
            km: "Comore",
            kn: "Saint Kitts e Nevis",
            kp: "Corea del Nord",
            kr: "Corea del Sud",
            kw: "Kuwait",
            ky: "Isole Cayman",
            kz: "Kazakistan",
            la: "Laos",
            lb: "Libano",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Lituania",
            lu: "Lussemburgo",
            lv: "Lettonia",
            ly: "Libia",
            ma: "Marocco",
            mc: "Monaco",
            md: "Moldavia",
            me: "Montenegro",
            mf: "Saint Martin",
            mg: "Madagascar",
            mh: "Isole Marshall",
            mk: "Macedonia del Nord",
            ml: "Mali",
            mm: "Myanmar (Birmania)",
            mn: "Mongolia",
            mo: "RAS di Macao",
            mp: "Isole Marianne settentrionali",
            mq: "Martinica",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldive",
            mw: "Malawi",
            mx: "Messico",
            my: "Malaysia",
            mz: "Mozambico",
            na: "Namibia",
            nc: "Nuova Caledonia",
            ne: "Niger",
            nf: "Isola Norfolk",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Paesi Bassi",
            no: "Norvegia",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nuova Zelanda",
            om: "Oman",
            pa: "Panamá",
            pe: "Perù",
            pf: "Polinesia francese",
            pg: "Papua Nuova Guinea",
            ph: "Filippine",
            pk: "Pakistan",
            pl: "Polonia",
            pm: "Saint-Pierre e Miquelon",
            pr: "Portorico",
            ps: "Territori palestinesi",
            pt: "Portogallo",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Riunione",
            ro: "Romania",
            rs: "Serbia",
            ru: "Russia",
            rw: "Ruanda",
            sa: "Arabia Saudita",
            sb: "Isole Salomone",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Svezia",
            sg: "Singapore",
            sh: "Sant’Elena",
            si: "Slovenia",
            sj: "Svalbard e Jan Mayen",
            sk: "Slovacchia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "Sud Sudan",
            st: "São Tomé e Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Siria",
            sz: "Swaziland",
            tc: "Isole Turks e Caicos",
            td: "Ciad",
            tg: "Togo",
            th: "Thailandia",
            tj: "Tagikistan",
            tk: "Tokelau",
            tl: "Timor Est",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turchia",
            tt: "Trinidad e Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ucraina",
            ug: "Uganda",
            us: "Stati Uniti",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Città del Vaticano",
            vc: "Saint Vincent e Grenadine",
            ve: "Venezuela",
            vg: "Isole Vergini Britanniche",
            vi: "Isole Vergini Americane",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis e Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "Sudafrica",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const it_countries = it_countries_countryTranslations;
        const it_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Paese selezionato",
            noCountrySelected: "Nessun paese selezionato",
            countryListAriaLabel: "Elenco dei paesi",
            searchPlaceholder: "Ricerca",
            zeroSearchResults: "Nessun risultato trovato",
            oneSearchResult: "1 risultato trovato",
            multipleSearchResults: "${count} risultati trovati",
            ac: "Isola di Ascensione",
            xk: "Kosovo"
        };
        const it_interface = it_interface_interfaceTranslations;
        const ja_countries_countryTranslations = {
            ad: "アンドラ",
            ae: "アラブ首長国連邦",
            af: "アフガニスタン",
            ag: "アンティグア・バーブーダ",
            ai: "アンギラ",
            al: "アルバニア",
            am: "アルメニア",
            ao: "アンゴラ",
            ar: "アルゼンチン",
            as: "米領サモア",
            at: "オーストリア",
            au: "オーストラリア",
            aw: "アルバ",
            ax: "オーランド諸島",
            az: "アゼルバイジャン",
            ba: "ボスニア・ヘルツェゴビナ",
            bb: "バルバドス",
            bd: "バングラデシュ",
            be: "ベルギー",
            bf: "ブルキナファソ",
            bg: "ブルガリア",
            bh: "バーレーン",
            bi: "ブルンジ",
            bj: "ベナン",
            bl: "サン・バルテルミー",
            bm: "バミューダ",
            bn: "ブルネイ",
            bo: "ボリビア",
            bq: "オランダ領カリブ",
            br: "ブラジル",
            bs: "バハマ",
            bt: "ブータン",
            bw: "ボツワナ",
            by: "ベラルーシ",
            bz: "ベリーズ",
            ca: "カナダ",
            cc: "ココス(キーリング)諸島",
            cd: "コンゴ民主共和国(キンシャサ)",
            cf: "中央アフリカ共和国",
            cg: "コンゴ共和国(ブラザビル)",
            ch: "スイス",
            ci: "コートジボワール",
            ck: "クック諸島",
            cl: "チリ",
            cm: "カメルーン",
            cn: "中国",
            co: "コロンビア",
            cr: "コスタリカ",
            cu: "キューバ",
            cv: "カーボベルデ",
            cw: "キュラソー",
            cx: "クリスマス島",
            cy: "キプロス",
            cz: "チェコ",
            de: "ドイツ",
            dj: "ジブチ",
            dk: "デンマーク",
            dm: "ドミニカ国",
            do: "ドミニカ共和国",
            dz: "アルジェリア",
            ec: "エクアドル",
            ee: "エストニア",
            eg: "エジプト",
            eh: "西サハラ",
            er: "エリトリア",
            es: "スペイン",
            et: "エチオピア",
            fi: "フィンランド",
            fj: "フィジー",
            fk: "フォークランド諸島",
            fm: "ミクロネシア連邦",
            fo: "フェロー諸島",
            fr: "フランス",
            ga: "ガボン",
            gb: "イギリス",
            gd: "グレナダ",
            ge: "ジョージア",
            gf: "仏領ギアナ",
            gg: "ガーンジー",
            gh: "ガーナ",
            gi: "ジブラルタル",
            gl: "グリーンランド",
            gm: "ガンビア",
            gn: "ギニア",
            gp: "グアドループ",
            gq: "赤道ギニア",
            gr: "ギリシャ",
            gt: "グアテマラ",
            gu: "グアム",
            gw: "ギニアビサウ",
            gy: "ガイアナ",
            hk: "中華人民共和国香港特別行政区",
            hn: "ホンジュラス",
            hr: "クロアチア",
            ht: "ハイチ",
            hu: "ハンガリー",
            id: "インドネシア",
            ie: "アイルランド",
            il: "イスラエル",
            im: "マン島",
            in: "インド",
            io: "英領インド洋地域",
            iq: "イラク",
            ir: "イラン",
            is: "アイスランド",
            it: "イタリア",
            je: "ジャージー",
            jm: "ジャマイカ",
            jo: "ヨルダン",
            jp: "日本",
            ke: "ケニア",
            kg: "キルギス",
            kh: "カンボジア",
            ki: "キリバス",
            km: "コモロ",
            kn: "セントクリストファー・ネーヴィス",
            kp: "北朝鮮",
            kr: "韓国",
            kw: "クウェート",
            ky: "ケイマン諸島",
            kz: "カザフスタン",
            la: "ラオス",
            lb: "レバノン",
            lc: "セントルシア",
            li: "リヒテンシュタイン",
            lk: "スリランカ",
            lr: "リベリア",
            ls: "レソト",
            lt: "リトアニア",
            lu: "ルクセンブルク",
            lv: "ラトビア",
            ly: "リビア",
            ma: "モロッコ",
            mc: "モナコ",
            md: "モルドバ",
            me: "モンテネグロ",
            mf: "サン・マルタン",
            mg: "マダガスカル",
            mh: "マーシャル諸島",
            mk: "北マケドニア",
            ml: "マリ",
            mm: "ミャンマー (ビルマ)",
            mn: "モンゴル",
            mo: "中華人民共和国マカオ特別行政区",
            mp: "北マリアナ諸島",
            mq: "マルティニーク",
            mr: "モーリタニア",
            ms: "モントセラト",
            mt: "マルタ",
            mu: "モーリシャス",
            mv: "モルディブ",
            mw: "マラウイ",
            mx: "メキシコ",
            my: "マレーシア",
            mz: "モザンビーク",
            na: "ナミビア",
            nc: "ニューカレドニア",
            ne: "ニジェール",
            nf: "ノーフォーク島",
            ng: "ナイジェリア",
            ni: "ニカラグア",
            nl: "オランダ",
            no: "ノルウェー",
            np: "ネパール",
            nr: "ナウル",
            nu: "ニウエ",
            nz: "ニュージーランド",
            om: "オマーン",
            pa: "パナマ",
            pe: "ペルー",
            pf: "仏領ポリネシア",
            pg: "パプアニューギニア",
            ph: "フィリピン",
            pk: "パキスタン",
            pl: "ポーランド",
            pm: "サンピエール島・ミクロン島",
            pr: "プエルトリコ",
            ps: "パレスチナ自治区",
            pt: "ポルトガル",
            pw: "パラオ",
            py: "パラグアイ",
            qa: "カタール",
            re: "レユニオン",
            ro: "ルーマニア",
            rs: "セルビア",
            ru: "ロシア",
            rw: "ルワンダ",
            sa: "サウジアラビア",
            sb: "ソロモン諸島",
            sc: "セーシェル",
            sd: "スーダン",
            se: "スウェーデン",
            sg: "シンガポール",
            sh: "セントヘレナ",
            si: "スロベニア",
            sj: "スバールバル諸島・ヤンマイエン島",
            sk: "スロバキア",
            sl: "シエラレオネ",
            sm: "サンマリノ",
            sn: "セネガル",
            so: "ソマリア",
            sr: "スリナム",
            ss: "南スーダン",
            st: "サントメ・プリンシペ",
            sv: "エルサルバドル",
            sx: "シント・マールテン",
            sy: "シリア",
            sz: "エスワティニ",
            tc: "タークス・カイコス諸島",
            td: "チャド",
            tg: "トーゴ",
            th: "タイ",
            tj: "タジキスタン",
            tk: "トケラウ",
            tl: "東ティモール",
            tm: "トルクメニスタン",
            tn: "チュニジア",
            to: "トンガ",
            tr: "トルコ",
            tt: "トリニダード・トバゴ",
            tv: "ツバル",
            tw: "台湾",
            tz: "タンザニア",
            ua: "ウクライナ",
            ug: "ウガンダ",
            us: "アメリカ合衆国",
            uy: "ウルグアイ",
            uz: "ウズベキスタン",
            va: "バチカン市国",
            vc: "セントビンセント及びグレナディーン諸島",
            ve: "ベネズエラ",
            vg: "英領ヴァージン諸島",
            vi: "米領ヴァージン諸島",
            vn: "ベトナム",
            vu: "バヌアツ",
            wf: "ウォリス・フツナ",
            ws: "サモア",
            ye: "イエメン",
            yt: "マヨット",
            za: "南アフリカ",
            zm: "ザンビア",
            zw: "ジンバブエ"
        };
        const ja_countries = ja_countries_countryTranslations;
        const ja_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "選択した国",
            noCountrySelected: "国が選択されていません",
            countryListAriaLabel: "国のリスト",
            searchPlaceholder: "検索",
            zeroSearchResults: "結果が見つかりません",
            oneSearchResult: "1 件の結果が見つかりました",
            multipleSearchResults: "${count} 件の結果が見つかりました",
            ac: "アセンション島",
            xk: "コソボ"
        };
        const ja_interface = ja_interface_interfaceTranslations;
        const ko_countries_countryTranslations = {
            ad: "안도라",
            ae: "아랍에미리트",
            af: "아프가니스탄",
            ag: "앤티가 바부다",
            ai: "앵귈라",
            al: "알바니아",
            am: "아르메니아",
            ao: "앙골라",
            ar: "아르헨티나",
            as: "아메리칸 사모아",
            at: "오스트리아",
            au: "오스트레일리아",
            aw: "아루바",
            ax: "올란드 제도",
            az: "아제르바이잔",
            ba: "보스니아 헤르체고비나",
            bb: "바베이도스",
            bd: "방글라데시",
            be: "벨기에",
            bf: "부르키나파소",
            bg: "불가리아",
            bh: "바레인",
            bi: "부룬디",
            bj: "베냉",
            bl: "생바르텔레미",
            bm: "버뮤다",
            bn: "브루나이",
            bo: "볼리비아",
            bq: "네덜란드령 카리브",
            br: "브라질",
            bs: "바하마",
            bt: "부탄",
            bw: "보츠와나",
            by: "벨라루스",
            bz: "벨리즈",
            ca: "캐나다",
            cc: "코코스 제도",
            cd: "콩고-킨샤사",
            cf: "중앙 아프리카 공화국",
            cg: "콩고-브라자빌",
            ch: "스위스",
            ci: "코트디부아르",
            ck: "쿡 제도",
            cl: "칠레",
            cm: "카메룬",
            cn: "중국",
            co: "콜롬비아",
            cr: "코스타리카",
            cu: "쿠바",
            cv: "카보베르데",
            cw: "퀴라소",
            cx: "크리스마스섬",
            cy: "키프로스",
            cz: "체코",
            de: "독일",
            dj: "지부티",
            dk: "덴마크",
            dm: "도미니카",
            do: "도미니카 공화국",
            dz: "알제리",
            ec: "에콰도르",
            ee: "에스토니아",
            eg: "이집트",
            eh: "서사하라",
            er: "에리트리아",
            es: "스페인",
            et: "에티오피아",
            fi: "핀란드",
            fj: "피지",
            fk: "포클랜드 제도",
            fm: "미크로네시아",
            fo: "페로 제도",
            fr: "프랑스",
            ga: "가봉",
            gb: "영국",
            gd: "그레나다",
            ge: "조지아",
            gf: "프랑스령 기아나",
            gg: "건지",
            gh: "가나",
            gi: "지브롤터",
            gl: "그린란드",
            gm: "감비아",
            gn: "기니",
            gp: "과들루프",
            gq: "적도 기니",
            gr: "그리스",
            gt: "과테말라",
            gu: "괌",
            gw: "기니비사우",
            gy: "가이아나",
            hk: "홍콩(중국 특별행정구)",
            hn: "온두라스",
            hr: "크로아티아",
            ht: "아이티",
            hu: "헝가리",
            id: "인도네시아",
            ie: "아일랜드",
            il: "이스라엘",
            im: "맨 섬",
            in: "인도",
            io: "영국령 인도양 식민지",
            iq: "이라크",
            ir: "이란",
            is: "아이슬란드",
            it: "이탈리아",
            je: "저지",
            jm: "자메이카",
            jo: "요르단",
            jp: "일본",
            ke: "케냐",
            kg: "키르기스스탄",
            kh: "캄보디아",
            ki: "키리바시",
            km: "코모로",
            kn: "세인트키츠 네비스",
            kp: "북한",
            kr: "대한민국",
            kw: "쿠웨이트",
            ky: "케이맨 제도",
            kz: "카자흐스탄",
            la: "라오스",
            lb: "레바논",
            lc: "세인트루시아",
            li: "리히텐슈타인",
            lk: "스리랑카",
            lr: "라이베리아",
            ls: "레소토",
            lt: "리투아니아",
            lu: "룩셈부르크",
            lv: "라트비아",
            ly: "리비아",
            ma: "모로코",
            mc: "모나코",
            md: "몰도바",
            me: "몬테네그로",
            mf: "생마르탱",
            mg: "마다가스카르",
            mh: "마셜 제도",
            mk: "북마케도니아",
            ml: "말리",
            mm: "미얀마",
            mn: "몽골",
            mo: "마카오(중국 특별행정구)",
            mp: "북마리아나제도",
            mq: "마르티니크",
            mr: "모리타니",
            ms: "몬트세라트",
            mt: "몰타",
            mu: "모리셔스",
            mv: "몰디브",
            mw: "말라위",
            mx: "멕시코",
            my: "말레이시아",
            mz: "모잠비크",
            na: "나미비아",
            nc: "뉴칼레도니아",
            ne: "니제르",
            nf: "노퍽섬",
            ng: "나이지리아",
            ni: "니카라과",
            nl: "네덜란드",
            no: "노르웨이",
            np: "네팔",
            nr: "나우루",
            nu: "니우에",
            nz: "뉴질랜드",
            om: "오만",
            pa: "파나마",
            pe: "페루",
            pf: "프랑스령 폴리네시아",
            pg: "파푸아뉴기니",
            ph: "필리핀",
            pk: "파키스탄",
            pl: "폴란드",
            pm: "생피에르 미클롱",
            pr: "푸에르토리코",
            ps: "팔레스타인 지구",
            pt: "포르투갈",
            pw: "팔라우",
            py: "파라과이",
            qa: "카타르",
            re: "리유니온",
            ro: "루마니아",
            rs: "세르비아",
            ru: "러시아",
            rw: "르완다",
            sa: "사우디아라비아",
            sb: "솔로몬 제도",
            sc: "세이셸",
            sd: "수단",
            se: "스웨덴",
            sg: "싱가포르",
            sh: "세인트헬레나",
            si: "슬로베니아",
            sj: "스발바르제도-얀마웬섬",
            sk: "슬로바키아",
            sl: "시에라리온",
            sm: "산마리노",
            sn: "세네갈",
            so: "소말리아",
            sr: "수리남",
            ss: "남수단",
            st: "상투메 프린시페",
            sv: "엘살바도르",
            sx: "신트마르턴",
            sy: "시리아",
            sz: "에스와티니",
            tc: "터크스 케이커스 제도",
            td: "차드",
            tg: "토고",
            th: "태국",
            tj: "타지키스탄",
            tk: "토켈라우",
            tl: "동티모르",
            tm: "투르크메니스탄",
            tn: "튀니지",
            to: "통가",
            tr: "터키",
            tt: "트리니다드 토바고",
            tv: "투발루",
            tw: "대만",
            tz: "탄자니아",
            ua: "우크라이나",
            ug: "우간다",
            us: "미국",
            uy: "우루과이",
            uz: "우즈베키스탄",
            va: "바티칸 시국",
            vc: "세인트빈센트그레나딘",
            ve: "베네수엘라",
            vg: "영국령 버진아일랜드",
            vi: "미국령 버진아일랜드",
            vn: "베트남",
            vu: "바누아투",
            wf: "왈리스-푸투나 제도",
            ws: "사모아",
            ye: "예멘",
            yt: "마요트",
            za: "남아프리카",
            zm: "잠비아",
            zw: "짐바브웨"
        };
        const ko_countries = ko_countries_countryTranslations;
        const ko_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "선택한 국가",
            noCountrySelected: "선택한 국가가 없습니다.",
            countryListAriaLabel: "국가 목록",
            searchPlaceholder: "검색",
            zeroSearchResults: "검색 결과가 없습니다",
            oneSearchResult: "1개의 결과를 찾았습니다.",
            multipleSearchResults: "${count}개의 결과를 찾았습니다.",
            ac: "어센션섬",
            xk: "코소보"
        };
        const ko_interface = ko_interface_interfaceTranslations;
        const mr_countries_countryTranslations = {
            ad: "अँडोरा",
            ae: "संयुक्त अरब अमीरात",
            af: "अफगाणिस्तान",
            ag: "अँटिग्वा आणि बर्बुडा",
            ai: "अँग्विला",
            al: "अल्बानिया",
            am: "अर्मेनिया",
            ao: "अंगोला",
            ar: "अर्जेंटिना",
            as: "अमेरिकन सामोआ",
            at: "ऑस्ट्रिया",
            au: "ऑस्ट्रेलिया",
            aw: "अरुबा",
            ax: "अ‍ॅलँड बेटे",
            az: "अझरबैजान",
            ba: "बोस्निया अणि हर्जेगोविना",
            bb: "बार्बाडोस",
            bd: "बांगलादेश",
            be: "बेल्जियम",
            bf: "बुर्किना फासो",
            bg: "बल्गेरिया",
            bh: "बहारीन",
            bi: "बुरुंडी",
            bj: "बेनिन",
            bl: "सेंट बार्थेलेमी",
            bm: "बर्मुडा",
            bn: "ब्रुनेई",
            bo: "बोलिव्हिया",
            bq: "कॅरिबियन नेदरलँड्स",
            br: "ब्राझिल",
            bs: "बहामाज",
            bt: "भूतान",
            bw: "बोट्सवाना",
            by: "बेलारूस",
            bz: "बेलिझे",
            ca: "कॅनडा",
            cc: "कोकोस (कीलिंग) बेटे",
            cd: "काँगो - किंशासा",
            cf: "केंद्रीय अफ्रिकी प्रजासत्ताक",
            cg: "काँगो - ब्राझाविले",
            ch: "स्वित्झर्लंड",
            ci: "आयव्हरी कोस्ट",
            ck: "कुक बेटे",
            cl: "चिली",
            cm: "कॅमेरून",
            cn: "चीन",
            co: "कोलम्बिया",
            cr: "कोस्टा रिका",
            cu: "क्यूबा",
            cv: "केप व्हर्डे",
            cw: "क्युरासाओ",
            cx: "ख्रिसमस बेट",
            cy: "सायप्रस",
            cz: "झेकिया",
            de: "जर्मनी",
            dj: "जिबौटी",
            dk: "डेन्मार्क",
            dm: "डोमिनिका",
            do: "डोमिनिकन प्रजासत्ताक",
            dz: "अल्जीरिया",
            ec: "इक्वाडोर",
            ee: "एस्टोनिया",
            eg: "इजिप्त",
            eh: "पश्चिम सहारा",
            er: "एरिट्रिया",
            es: "स्पेन",
            et: "इथिओपिया",
            fi: "फिनलंड",
            fj: "फिजी",
            fk: "फॉकलंड बेटे",
            fm: "मायक्रोनेशिया",
            fo: "फेरो बेटे",
            fr: "फ्रान्स",
            ga: "गॅबॉन",
            gb: "युनायटेड किंगडम",
            gd: "ग्रेनेडा",
            ge: "जॉर्जिया",
            gf: "फ्रेंच गयाना",
            gg: "ग्वेर्नसे",
            gh: "घाना",
            gi: "जिब्राल्टर",
            gl: "ग्रीनलंड",
            gm: "गाम्बिया",
            gn: "गिनी",
            gp: "ग्वाडेलोउपे",
            gq: "इक्वेटोरियल गिनी",
            gr: "ग्रीस",
            gt: "ग्वाटेमाला",
            gu: "गुआम",
            gw: "गिनी-बिसाउ",
            gy: "गयाना",
            hk: "हाँगकाँग एसएआर चीन",
            hn: "होंडुरास",
            hr: "क्रोएशिया",
            ht: "हैती",
            hu: "हंगेरी",
            id: "इंडोनेशिया",
            ie: "आयर्लंड",
            il: "इस्त्राइल",
            im: "आयल ऑफ मॅन",
            in: "भारत",
            io: "ब्रिटिश हिंदी महासागर क्षेत्र",
            iq: "इराक",
            ir: "इराण",
            is: "आइसलँड",
            it: "इटली",
            je: "जर्सी",
            jm: "जमैका",
            jo: "जॉर्डन",
            jp: "जपान",
            ke: "केनिया",
            kg: "किरगिझस्तान",
            kh: "कंबोडिया",
            ki: "किरीबाटी",
            km: "कोमोरोज",
            kn: "सेंट किट्स आणि नेव्हिस",
            kp: "उत्तर कोरिया",
            kr: "दक्षिण कोरिया",
            kw: "कुवेत",
            ky: "केमन बेटे",
            kz: "कझाकस्तान",
            la: "लाओस",
            lb: "लेबनॉन",
            lc: "सेंट ल्यूसिया",
            li: "लिक्टेनस्टाइन",
            lk: "श्रीलंका",
            lr: "लायबेरिया",
            ls: "लेसोथो",
            lt: "लिथुआनिया",
            lu: "लक्झेंबर्ग",
            lv: "लात्विया",
            ly: "लिबिया",
            ma: "मोरोक्को",
            mc: "मोनॅको",
            md: "मोल्डोव्हा",
            me: "मोंटेनेग्रो",
            mf: "सेंट मार्टिन",
            mg: "मादागास्कर",
            mh: "मार्शल बेटे",
            mk: "उत्तर मॅसेडोनिया",
            ml: "माली",
            mm: "म्यानमार (बर्मा)",
            mn: "मंगोलिया",
            mo: "मकाओ एसएआर चीन",
            mp: "उत्तरी मारियाना बेटे",
            mq: "मार्टिनिक",
            mr: "मॉरिटानिया",
            ms: "मॉन्ट्सेराट",
            mt: "माल्टा",
            mu: "मॉरिशस",
            mv: "मालदीव",
            mw: "मलावी",
            mx: "मेक्सिको",
            my: "मलेशिया",
            mz: "मोझाम्बिक",
            na: "नामिबिया",
            nc: "न्यू कॅलेडोनिया",
            ne: "नाइजर",
            nf: "नॉरफॉक बेट",
            ng: "नायजेरिया",
            ni: "निकाराग्वा",
            nl: "नेदरलँड",
            no: "नॉर्वे",
            np: "नेपाळ",
            nr: "नाउरू",
            nu: "नीयू",
            nz: "न्यूझीलंड",
            om: "ओमान",
            pa: "पनामा",
            pe: "पेरू",
            pf: "फ्रेंच पॉलिनेशिया",
            pg: "पापुआ न्यू गिनी",
            ph: "फिलिपिन्स",
            pk: "पाकिस्तान",
            pl: "पोलंड",
            pm: "सेंट पियरे आणि मिक्वेलोन",
            pr: "प्युएर्तो रिको",
            ps: "पॅलेस्टिनियन प्रदेश",
            pt: "पोर्तुगाल",
            pw: "पलाऊ",
            py: "पराग्वे",
            qa: "कतार",
            re: "रियुनियन",
            ro: "रोमानिया",
            rs: "सर्बिया",
            ru: "रशिया",
            rw: "रवांडा",
            sa: "सौदी अरब",
            sb: "सोलोमन बेटे",
            sc: "सेशेल्स",
            sd: "सुदान",
            se: "स्वीडन",
            sg: "सिंगापूर",
            sh: "सेंट हेलेना",
            si: "स्लोव्हेनिया",
            sj: "स्वालबर्ड आणि जान मायेन",
            sk: "स्लोव्हाकिया",
            sl: "सिएरा लिओन",
            sm: "सॅन मरीनो",
            sn: "सेनेगल",
            so: "सोमालिया",
            sr: "सुरिनाम",
            ss: "दक्षिण सुदान",
            st: "साओ टोम आणि प्रिंसिपे",
            sv: "अल साल्वाडोर",
            sx: "सिंट मार्टेन",
            sy: "सीरिया",
            sz: "इस्वातिनी",
            tc: "टर्क्स आणि कैकोस बेटे",
            td: "चाड",
            tg: "टोगो",
            th: "थायलंड",
            tj: "ताजिकिस्तान",
            tk: "तोकेलाउ",
            tl: "तिमोर-लेस्ते",
            tm: "तुर्कमेनिस्तान",
            tn: "ट्यूनिशिया",
            to: "टोंगा",
            tr: "तुर्की",
            tt: "त्रिनिदाद आणि टोबॅगो",
            tv: "टुवालु",
            tw: "तैवान",
            tz: "टांझानिया",
            ua: "युक्रेन",
            ug: "युगांडा",
            us: "युनायटेड स्टेट्स",
            uy: "उरुग्वे",
            uz: "उझबेकिस्तान",
            va: "व्हॅटिकन सिटी",
            vc: "सेंट व्हिन्सेंट आणि ग्रेनडाइन्स",
            ve: "व्हेनेझुएला",
            vg: "ब्रिटिश व्हर्जिन बेटे",
            vi: "यू.एस. व्हर्जिन बेटे",
            vn: "व्हिएतनाम",
            vu: "वानुआतु",
            wf: "वालिस आणि फ्यूचूना",
            ws: "सामोआ",
            ye: "येमेन",
            yt: "मायोट्टे",
            za: "दक्षिण आफ्रिका",
            zm: "झाम्बिया",
            zw: "झिम्बाब्वे"
        };
        const mr_countries = mr_countries_countryTranslations;
        const mr_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "निवडलेला देश",
            noCountrySelected: "कोणताही देश निवडलेला नाही",
            countryListAriaLabel: "देशांची यादी",
            searchPlaceholder: "शोधा",
            zeroSearchResults: "कोणतेही परिणाम आढळले नाहीत",
            oneSearchResult: "1 परिणाम आढळला",
            multipleSearchResults: "${count} परिणाम आढळले",
            ac: "असेन्शन बेट",
            xk: "कोसोवो"
        };
        const mr_interface = mr_interface_interfaceTranslations;
        const nl_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Verenigde Arabische Emiraten",
            af: "Afghanistan",
            ag: "Antigua en Barbuda",
            ai: "Anguilla",
            al: "Albanië",
            am: "Armenië",
            ao: "Angola",
            ar: "Argentinië",
            as: "Amerikaans-Samoa",
            at: "Oostenrijk",
            au: "Australië",
            aw: "Aruba",
            ax: "Åland",
            az: "Azerbeidzjan",
            ba: "Bosnië en Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "België",
            bf: "Burkina Faso",
            bg: "Bulgarije",
            bh: "Bahrein",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint-Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Caribisch Nederland",
            br: "Brazilië",
            bs: "Bahama’s",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Canada",
            cc: "Cocoseilanden",
            cd: "Congo-Kinshasa",
            cf: "Centraal-Afrikaanse Republiek",
            cg: "Congo-Brazzaville",
            ch: "Zwitserland",
            ci: "Ivoorkust",
            ck: "Cookeilanden",
            cl: "Chili",
            cm: "Kameroen",
            cn: "China",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Kaapverdië",
            cw: "Curaçao",
            cx: "Christmaseiland",
            cy: "Cyprus",
            cz: "Tsjechië",
            de: "Duitsland",
            dj: "Djibouti",
            dk: "Denemarken",
            dm: "Dominica",
            do: "Dominicaanse Republiek",
            dz: "Algerije",
            ec: "Ecuador",
            ee: "Estland",
            eg: "Egypte",
            eh: "Westelijke Sahara",
            er: "Eritrea",
            es: "Spanje",
            et: "Ethiopië",
            fi: "Finland",
            fj: "Fiji",
            fk: "Falklandeilanden",
            fm: "Micronesia",
            fo: "Faeröer",
            fr: "Frankrijk",
            ga: "Gabon",
            gb: "Verenigd Koninkrijk",
            gd: "Grenada",
            ge: "Georgië",
            gf: "Frans-Guyana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Groenland",
            gm: "Gambia",
            gn: "Guinee",
            gp: "Guadeloupe",
            gq: "Equatoriaal-Guinea",
            gr: "Griekenland",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinee-Bissau",
            gy: "Guyana",
            hk: "Hongkong SAR van China",
            hn: "Honduras",
            hr: "Kroatië",
            ht: "Haïti",
            hu: "Hongarije",
            id: "Indonesië",
            ie: "Ierland",
            il: "Israël",
            im: "Isle of Man",
            in: "India",
            io: "Brits Indische Oceaanterritorium",
            iq: "Irak",
            ir: "Iran",
            is: "IJsland",
            it: "Italië",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordanië",
            jp: "Japan",
            ke: "Kenia",
            kg: "Kirgizië",
            kh: "Cambodja",
            ki: "Kiribati",
            km: "Comoren",
            kn: "Saint Kitts en Nevis",
            kp: "Noord-Korea",
            kr: "Zuid-Korea",
            kw: "Koeweit",
            ky: "Kaaimaneilanden",
            kz: "Kazachstan",
            la: "Laos",
            lb: "Libanon",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Litouwen",
            lu: "Luxemburg",
            lv: "Letland",
            ly: "Libië",
            ma: "Marokko",
            mc: "Monaco",
            md: "Moldavië",
            me: "Montenegro",
            mf: "Saint-Martin",
            mg: "Madagaskar",
            mh: "Marshalleilanden",
            mk: "Noord-Macedonië",
            ml: "Mali",
            mm: "Myanmar (Birma)",
            mn: "Mongolië",
            mo: "Macau SAR van China",
            mp: "Noordelijke Marianen",
            mq: "Martinique",
            mr: "Mauritanië",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldiven",
            mw: "Malawi",
            mx: "Mexico",
            my: "Maleisië",
            mz: "Mozambique",
            na: "Namibië",
            nc: "Nieuw-Caledonië",
            ne: "Niger",
            nf: "Norfolk",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Nederland",
            no: "Noorwegen",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nieuw-Zeeland",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Frans-Polynesië",
            pg: "Papoea-Nieuw-Guinea",
            ph: "Filipijnen",
            pk: "Pakistan",
            pl: "Polen",
            pm: "Saint-Pierre en Miquelon",
            pr: "Puerto Rico",
            ps: "Palestijnse gebieden",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Roemenië",
            rs: "Servië",
            ru: "Rusland",
            rw: "Rwanda",
            sa: "Saoedi-Arabië",
            sb: "Salomonseilanden",
            sc: "Seychellen",
            sd: "Soedan",
            se: "Zweden",
            sg: "Singapore",
            sh: "Sint-Helena",
            si: "Slovenië",
            sj: "Spitsbergen en Jan Mayen",
            sk: "Slowakije",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalië",
            sr: "Suriname",
            ss: "Zuid-Soedan",
            st: "Sao Tomé en Principe",
            sv: "El Salvador",
            sx: "Sint-Maarten",
            sy: "Syrië",
            sz: "eSwatini",
            tc: "Turks- en Caicoseilanden",
            td: "Tsjaad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tadzjikistan",
            tk: "Tokelau",
            tl: "Oost-Timor",
            tm: "Turkmenistan",
            tn: "Tunesië",
            to: "Tonga",
            tr: "Turkije",
            tt: "Trinidad en Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Oekraïne",
            ug: "Oeganda",
            us: "Verenigde Staten",
            uy: "Uruguay",
            uz: "Oezbekistan",
            va: "Vaticaanstad",
            vc: "Saint Vincent en de Grenadines",
            ve: "Venezuela",
            vg: "Britse Maagdeneilanden",
            vi: "Amerikaanse Maagdeneilanden",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis en Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Zuid-Afrika",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const nl_countries = nl_countries_countryTranslations;
        const nl_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Geselecteerd land",
            noCountrySelected: "Geen land geselecteerd",
            countryListAriaLabel: "Lijst met landen",
            searchPlaceholder: "Zoekopdracht",
            zeroSearchResults: "Geen resultaten gevonden",
            oneSearchResult: "1 resultaat gevonden",
            multipleSearchResults: "${count} resultaten gevonden",
            ac: "Ascension-eiland",
            xk: "Kosovo"
        };
        const nl_interface = nl_interface_interfaceTranslations;
        const no_countries_countryTranslations = {
            ad: "Andorra",
            ae: "De forente arabiske emirater",
            af: "Afghanistan",
            ag: "Antigua og Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "Amerikansk Samoa",
            at: "Østerrike",
            au: "Australia",
            aw: "Aruba",
            ax: "Åland",
            az: "Aserbajdsjan",
            ba: "Bosnia-Hercegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgia",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint-Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Karibisk Nederland",
            br: "Brasil",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Hviterussland",
            bz: "Belize",
            ca: "Canada",
            cc: "Kokosøyene",
            cd: "Kongo-Kinshasa",
            cf: "Den sentralafrikanske republikk",
            cg: "Kongo-Brazzaville",
            ch: "Sveits",
            ci: "Elfenbenskysten",
            ck: "Cookøyene",
            cl: "Chile",
            cm: "Kamerun",
            cn: "Kina",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Kapp Verde",
            cw: "Curaçao",
            cx: "Christmasøya",
            cy: "Kypros",
            cz: "Tsjekkia",
            de: "Tyskland",
            dj: "Djibouti",
            dk: "Danmark",
            dm: "Dominica",
            do: "Den dominikanske republikk",
            dz: "Algerie",
            ec: "Ecuador",
            ee: "Estland",
            eg: "Egypt",
            eh: "Vest-Sahara",
            er: "Eritrea",
            es: "Spania",
            et: "Etiopia",
            fi: "Finland",
            fj: "Fiji",
            fk: "Falklandsøyene",
            fm: "Mikronesiaføderasjonen",
            fo: "Færøyene",
            fr: "Frankrike",
            ga: "Gabon",
            gb: "Storbritannia",
            gd: "Grenada",
            ge: "Georgia",
            gf: "Fransk Guyana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Grønland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Ekvatorial-Guinea",
            gr: "Hellas",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hongkong S.A.R. Kina",
            hn: "Honduras",
            hr: "Kroatia",
            ht: "Haiti",
            hu: "Ungarn",
            id: "Indonesia",
            ie: "Irland",
            il: "Israel",
            im: "Man",
            in: "India",
            io: "Det britiske territoriet i Indiahavet",
            iq: "Irak",
            ir: "Iran",
            is: "Island",
            it: "Italia",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenya",
            kg: "Kirgisistan",
            kh: "Kambodsja",
            ki: "Kiribati",
            km: "Komorene",
            kn: "Saint Kitts og Nevis",
            kp: "Nord-Korea",
            kr: "Sør-Korea",
            kw: "Kuwait",
            ky: "Caymanøyene",
            kz: "Kasakhstan",
            la: "Laos",
            lb: "Libanon",
            lc: "St. Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Litauen",
            lu: "Luxemburg",
            lv: "Latvia",
            ly: "Libya",
            ma: "Marokko",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "Saint-Martin",
            mg: "Madagaskar",
            mh: "Marshalløyene",
            mk: "Nord-Makedonia",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongolia",
            mo: "Macao S.A.R. Kina",
            mp: "Nord-Marianene",
            mq: "Martinique",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldivene",
            mw: "Malawi",
            mx: "Mexico",
            my: "Malaysia",
            mz: "Mosambik",
            na: "Namibia",
            nc: "Ny-Caledonia",
            ne: "Niger",
            nf: "Norfolkøya",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Nederland",
            no: "Norge",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "New Zealand",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Fransk Polynesia",
            pg: "Papua Ny-Guinea",
            ph: "Filippinene",
            pk: "Pakistan",
            pl: "Polen",
            pm: "Saint-Pierre-et-Miquelon",
            pr: "Puerto Rico",
            ps: "Det palestinske området",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Romania",
            rs: "Serbia",
            ru: "Russland",
            rw: "Rwanda",
            sa: "Saudi-Arabia",
            sb: "Salomonøyene",
            sc: "Seychellene",
            sd: "Sudan",
            se: "Sverige",
            sg: "Singapore",
            sh: "St. Helena",
            si: "Slovenia",
            sj: "Svalbard og Jan Mayen",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Surinam",
            ss: "Sør-Sudan",
            st: "São Tomé og Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syria",
            sz: "Eswatini",
            tc: "Turks- og Caicosøyene",
            td: "Tsjad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tadsjikistan",
            tk: "Tokelau",
            tl: "Øst-Timor",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Tyrkia",
            tt: "Trinidad og Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ukraina",
            ug: "Uganda",
            us: "USA",
            uy: "Uruguay",
            uz: "Usbekistan",
            va: "Vatikanstaten",
            vc: "St. Vincent og Grenadinene",
            ve: "Venezuela",
            vg: "De britiske jomfruøyene",
            vi: "De amerikanske jomfruøyene",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis og Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Sør-Afrika",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const no_countries = no_countries_countryTranslations;
        const no_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Valgt land",
            noCountrySelected: "Ingen land er valgt",
            countryListAriaLabel: "Liste over land",
            searchPlaceholder: "Leting",
            zeroSearchResults: "Ingen resultater funnet",
            oneSearchResult: "1 resultat funnet",
            multipleSearchResults: "${count} resultater funnet",
            ac: "Ascension Island",
            xk: "Kosovo"
        };
        const no_interface = no_interface_interfaceTranslations;
        const pl_countries_countryTranslations = {
            ad: "Andora",
            ae: "Zjednoczone Emiraty Arabskie",
            af: "Afganistan",
            ag: "Antigua i Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentyna",
            as: "Samoa Amerykańskie",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "Wyspy Alandzkie",
            az: "Azerbejdżan",
            ba: "Bośnia i Hercegowina",
            bb: "Barbados",
            bd: "Bangladesz",
            be: "Belgia",
            bf: "Burkina Faso",
            bg: "Bułgaria",
            bh: "Bahrajn",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint-Barthélemy",
            bm: "Bermudy",
            bn: "Brunei",
            bo: "Boliwia",
            bq: "Niderlandy Karaibskie",
            br: "Brazylia",
            bs: "Bahamy",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Białoruś",
            bz: "Belize",
            ca: "Kanada",
            cc: "Wyspy Kokosowe",
            cd: "Demokratyczna Republika Konga",
            cf: "Republika Środkowoafrykańska",
            cg: "Kongo",
            ch: "Szwajcaria",
            ci: "Côte d’Ivoire",
            ck: "Wyspy Cooka",
            cl: "Chile",
            cm: "Kamerun",
            cn: "Chiny",
            co: "Kolumbia",
            cr: "Kostaryka",
            cu: "Kuba",
            cv: "Republika Zielonego Przylądka",
            cw: "Curaçao",
            cx: "Wyspa Bożego Narodzenia",
            cy: "Cypr",
            cz: "Czechy",
            de: "Niemcy",
            dj: "Dżibuti",
            dk: "Dania",
            dm: "Dominika",
            do: "Dominikana",
            dz: "Algieria",
            ec: "Ekwador",
            ee: "Estonia",
            eg: "Egipt",
            eh: "Sahara Zachodnia",
            er: "Erytrea",
            es: "Hiszpania",
            et: "Etiopia",
            fi: "Finlandia",
            fj: "Fidżi",
            fk: "Falklandy",
            fm: "Mikronezja",
            fo: "Wyspy Owcze",
            fr: "Francja",
            ga: "Gabon",
            gb: "Wielka Brytania",
            gd: "Grenada",
            ge: "Gruzja",
            gf: "Gujana Francuska",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Grenlandia",
            gm: "Gambia",
            gn: "Gwinea",
            gp: "Gwadelupa",
            gq: "Gwinea Równikowa",
            gr: "Grecja",
            gt: "Gwatemala",
            gu: "Guam",
            gw: "Gwinea Bissau",
            gy: "Gujana",
            hk: "SRA Hongkong (Chiny)",
            hn: "Honduras",
            hr: "Chorwacja",
            ht: "Haiti",
            hu: "Węgry",
            id: "Indonezja",
            ie: "Irlandia",
            il: "Izrael",
            im: "Wyspa Man",
            in: "Indie",
            io: "Brytyjskie Terytorium Oceanu Indyjskiego",
            iq: "Irak",
            ir: "Iran",
            is: "Islandia",
            it: "Włochy",
            je: "Jersey",
            jm: "Jamajka",
            jo: "Jordania",
            jp: "Japonia",
            ke: "Kenia",
            kg: "Kirgistan",
            kh: "Kambodża",
            ki: "Kiribati",
            km: "Komory",
            kn: "Saint Kitts i Nevis",
            kp: "Korea Północna",
            kr: "Korea Południowa",
            kw: "Kuwejt",
            ky: "Kajmany",
            kz: "Kazachstan",
            la: "Laos",
            lb: "Liban",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Litwa",
            lu: "Luksemburg",
            lv: "Łotwa",
            ly: "Libia",
            ma: "Maroko",
            mc: "Monako",
            md: "Mołdawia",
            me: "Czarnogóra",
            mf: "Saint-Martin",
            mg: "Madagaskar",
            mh: "Wyspy Marshalla",
            mk: "Macedonia Północna",
            ml: "Mali",
            mm: "Mjanma (Birma)",
            mn: "Mongolia",
            mo: "SRA Makau (Chiny)",
            mp: "Mariany Północne",
            mq: "Martynika",
            mr: "Mauretania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Malediwy",
            mw: "Malawi",
            mx: "Meksyk",
            my: "Malezja",
            mz: "Mozambik",
            na: "Namibia",
            nc: "Nowa Kaledonia",
            ne: "Niger",
            nf: "Norfolk",
            ng: "Nigeria",
            ni: "Nikaragua",
            nl: "Holandia",
            no: "Norwegia",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nowa Zelandia",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Polinezja Francuska",
            pg: "Papua-Nowa Gwinea",
            ph: "Filipiny",
            pk: "Pakistan",
            pl: "Polska",
            pm: "Saint-Pierre i Miquelon",
            pr: "Portoryko",
            ps: "Terytoria Palestyńskie",
            pt: "Portugalia",
            pw: "Palau",
            py: "Paragwaj",
            qa: "Katar",
            re: "Reunion",
            ro: "Rumunia",
            rs: "Serbia",
            ru: "Rosja",
            rw: "Rwanda",
            sa: "Arabia Saudyjska",
            sb: "Wyspy Salomona",
            sc: "Seszele",
            sd: "Sudan",
            se: "Szwecja",
            sg: "Singapur",
            sh: "Wyspa Świętej Heleny",
            si: "Słowenia",
            sj: "Svalbard i Jan Mayen",
            sk: "Słowacja",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Surinam",
            ss: "Sudan Południowy",
            st: "Wyspy Świętego Tomasza i Książęca",
            sv: "Salwador",
            sx: "Sint Maarten",
            sy: "Syria",
            sz: "Eswatini",
            tc: "Turks i Caicos",
            td: "Czad",
            tg: "Togo",
            th: "Tajlandia",
            tj: "Tadżykistan",
            tk: "Tokelau",
            tl: "Timor Wschodni",
            tm: "Turkmenistan",
            tn: "Tunezja",
            to: "Tonga",
            tr: "Turcja",
            tt: "Trynidad i Tobago",
            tv: "Tuvalu",
            tw: "Tajwan",
            tz: "Tanzania",
            ua: "Ukraina",
            ug: "Uganda",
            us: "Stany Zjednoczone",
            uy: "Urugwaj",
            uz: "Uzbekistan",
            va: "Watykan",
            vc: "Saint Vincent i Grenadyny",
            ve: "Wenezuela",
            vg: "Brytyjskie Wyspy Dziewicze",
            vi: "Wyspy Dziewicze Stanów Zjednoczonych",
            vn: "Wietnam",
            vu: "Vanuatu",
            wf: "Wallis i Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Majotta",
            za: "Republika Południowej Afryki",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const pl_countries = pl_countries_countryTranslations;
        const pl_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Wybrany kraj",
            noCountrySelected: "Nie wybrano kraju",
            countryListAriaLabel: "Lista krajów",
            searchPlaceholder: "Szukaj",
            zeroSearchResults: "Nie znaleziono wyników",
            oneSearchResult: "Znaleziono 1 wynik",
            multipleSearchResults: "Znaleziono ${count} ${count > 1 && count < 5 ? 'wyniki' : 'wyników'}",
            ac: "Wyspa Wniebowstąpienia",
            xk: "Kosowo"
        };
        const pl_interface = pl_interface_interfaceTranslations;
        const pt_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Emirados Árabes Unidos",
            af: "Afeganistão",
            ag: "Antígua e Barbuda",
            ai: "Anguila",
            al: "Albânia",
            am: "Armênia",
            ao: "Angola",
            ar: "Argentina",
            as: "Samoa Americana",
            at: "Áustria",
            au: "Austrália",
            aw: "Aruba",
            ax: "Ilhas Aland",
            az: "Azerbaijão",
            ba: "Bósnia e Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Bélgica",
            bf: "Burquina Faso",
            bg: "Bulgária",
            bh: "Bahrein",
            bi: "Burundi",
            bj: "Benin",
            bl: "São Bartolomeu",
            bm: "Bermudas",
            bn: "Brunei",
            bo: "Bolívia",
            bq: "Países Baixos Caribenhos",
            br: "Brasil",
            bs: "Bahamas",
            bt: "Butão",
            bw: "Botsuana",
            by: "Bielorrússia",
            bz: "Belize",
            ca: "Canadá",
            cc: "Ilhas Cocos (Keeling)",
            cd: "Congo - Kinshasa",
            cf: "República Centro-Africana",
            cg: "República do Congo",
            ch: "Suíça",
            ci: "Costa do Marfim",
            ck: "Ilhas Cook",
            cl: "Chile",
            cm: "Camarões",
            cn: "China",
            co: "Colômbia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cabo Verde",
            cw: "Curaçao",
            cx: "Ilha Christmas",
            cy: "Chipre",
            cz: "Tchéquia",
            de: "Alemanha",
            dj: "Djibuti",
            dk: "Dinamarca",
            dm: "Dominica",
            do: "República Dominicana",
            dz: "Argélia",
            ec: "Equador",
            ee: "Estônia",
            eg: "Egito",
            eh: "Saara Ocidental",
            er: "Eritreia",
            es: "Espanha",
            et: "Etiópia",
            fi: "Finlândia",
            fj: "Fiji",
            fk: "Ilhas Malvinas",
            fm: "Micronésia",
            fo: "Ilhas Faroe",
            fr: "França",
            ga: "Gabão",
            gb: "Reino Unido",
            gd: "Granada",
            ge: "Geórgia",
            gf: "Guiana Francesa",
            gg: "Guernsey",
            gh: "Gana",
            gi: "Gibraltar",
            gl: "Groenlândia",
            gm: "Gâmbia",
            gn: "Guiné",
            gp: "Guadalupe",
            gq: "Guiné Equatorial",
            gr: "Grécia",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guiné-Bissau",
            gy: "Guiana",
            hk: "Hong Kong, RAE da China",
            hn: "Honduras",
            hr: "Croácia",
            ht: "Haiti",
            hu: "Hungria",
            id: "Indonésia",
            ie: "Irlanda",
            il: "Israel",
            im: "Ilha de Man",
            in: "Índia",
            io: "Território Britânico do Oceano Índico",
            iq: "Iraque",
            ir: "Irã",
            is: "Islândia",
            it: "Itália",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordânia",
            jp: "Japão",
            ke: "Quênia",
            kg: "Quirguistão",
            kh: "Camboja",
            ki: "Quiribati",
            km: "Comores",
            kn: "São Cristóvão e Névis",
            kp: "Coreia do Norte",
            kr: "Coreia do Sul",
            kw: "Kuwait",
            ky: "Ilhas Cayman",
            kz: "Cazaquistão",
            la: "Laos",
            lb: "Líbano",
            lc: "Santa Lúcia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Libéria",
            ls: "Lesoto",
            lt: "Lituânia",
            lu: "Luxemburgo",
            lv: "Letônia",
            ly: "Líbia",
            ma: "Marrocos",
            mc: "Mônaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "São Martinho",
            mg: "Madagascar",
            mh: "Ilhas Marshall",
            mk: "Macedônia do Norte",
            ml: "Mali",
            mm: "Mianmar (Birmânia)",
            mn: "Mongólia",
            mo: "Macau, RAE da China",
            mp: "Ilhas Marianas do Norte",
            mq: "Martinica",
            mr: "Mauritânia",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Maurício",
            mv: "Maldivas",
            mw: "Malaui",
            mx: "México",
            my: "Malásia",
            mz: "Moçambique",
            na: "Namíbia",
            nc: "Nova Caledônia",
            ne: "Níger",
            nf: "Ilha Norfolk",
            ng: "Nigéria",
            ni: "Nicarágua",
            nl: "Países Baixos",
            no: "Noruega",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nova Zelândia",
            om: "Omã",
            pa: "Panamá",
            pe: "Peru",
            pf: "Polinésia Francesa",
            pg: "Papua-Nova Guiné",
            ph: "Filipinas",
            pk: "Paquistão",
            pl: "Polônia",
            pm: "São Pedro e Miquelão",
            pr: "Porto Rico",
            ps: "Territórios palestinos",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguai",
            qa: "Catar",
            re: "Reunião",
            ro: "Romênia",
            rs: "Sérvia",
            ru: "Rússia",
            rw: "Ruanda",
            sa: "Arábia Saudita",
            sb: "Ilhas Salomão",
            sc: "Seicheles",
            sd: "Sudão",
            se: "Suécia",
            sg: "Singapura",
            sh: "Santa Helena",
            si: "Eslovênia",
            sj: "Svalbard e Jan Mayen",
            sk: "Eslováquia",
            sl: "Serra Leoa",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somália",
            sr: "Suriname",
            ss: "Sudão do Sul",
            st: "São Tomé e Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Síria",
            sz: "Essuatíni",
            tc: "Ilhas Turcas e Caicos",
            td: "Chade",
            tg: "Togo",
            th: "Tailândia",
            tj: "Tadjiquistão",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turcomenistão",
            tn: "Tunísia",
            to: "Tonga",
            tr: "Turquia",
            tt: "Trinidad e Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzânia",
            ua: "Ucrânia",
            ug: "Uganda",
            us: "Estados Unidos",
            uy: "Uruguai",
            uz: "Uzbequistão",
            va: "Cidade do Vaticano",
            vc: "São Vicente e Granadinas",
            ve: "Venezuela",
            vg: "Ilhas Virgens Britânicas",
            vi: "Ilhas Virgens Americanas",
            vn: "Vietnã",
            vu: "Vanuatu",
            wf: "Wallis e Futuna",
            ws: "Samoa",
            ye: "Iêmen",
            yt: "Mayotte",
            za: "África do Sul",
            zm: "Zâmbia",
            zw: "Zimbábue"
        };
        const pt_countries = pt_countries_countryTranslations;
        const pt_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "País selecionado",
            noCountrySelected: "Nenhum país selecionado",
            countryListAriaLabel: "Lista de países",
            searchPlaceholder: "Procurar",
            zeroSearchResults: "Nenhum resultado encontrado",
            oneSearchResult: "1 resultado encontrado",
            multipleSearchResults: "${count} resultados encontrados",
            ac: "Ilha de Ascensão",
            xk: "Kosovo"
        };
        const pt_interface = pt_interface_interfaceTranslations;
        const ro_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Emiratele Arabe Unite",
            af: "Afganistan",
            ag: "Antigua și Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "Samoa Americană",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "Insulele Åland",
            az: "Azerbaidjan",
            ba: "Bosnia și Herțegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgia",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint-Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Insulele Caraibe Olandeze",
            br: "Brazilia",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Canada",
            cc: "Insulele Cocos (Keeling)",
            cd: "Congo - Kinshasa",
            cf: "Republica Centrafricană",
            cg: "Congo - Brazzaville",
            ch: "Elveția",
            ci: "Côte d’Ivoire",
            ck: "Insulele Cook",
            cl: "Chile",
            cm: "Camerun",
            cn: "China",
            co: "Columbia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Capul Verde",
            cw: "Curaçao",
            cx: "Insula Christmas",
            cy: "Cipru",
            cz: "Cehia",
            de: "Germania",
            dj: "Djibouti",
            dk: "Danemarca",
            dm: "Dominica",
            do: "Republica Dominicană",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Egipt",
            eh: "Sahara Occidentală",
            er: "Eritreea",
            es: "Spania",
            et: "Etiopia",
            fi: "Finlanda",
            fj: "Fiji",
            fk: "Insulele Falkland",
            fm: "Micronezia",
            fo: "Insulele Feroe",
            fr: "Franța",
            ga: "Gabon",
            gb: "Regatul Unit",
            gd: "Grenada",
            ge: "Georgia",
            gf: "Guyana Franceză",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Groenlanda",
            gm: "Gambia",
            gn: "Guineea",
            gp: "Guadelupa",
            gq: "Guineea Ecuatorială",
            gr: "Grecia",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guineea-Bissau",
            gy: "Guyana",
            hk: "R.A.S. Hong Kong a Chinei",
            hn: "Honduras",
            hr: "Croația",
            ht: "Haiti",
            hu: "Ungaria",
            id: "Indonezia",
            ie: "Irlanda",
            il: "Israel",
            im: "Insula Man",
            in: "India",
            io: "Teritoriul Britanic din Oceanul Indian",
            iq: "Irak",
            ir: "Iran",
            is: "Islanda",
            it: "Italia",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Iordania",
            jp: "Japonia",
            ke: "Kenya",
            kg: "Kârgâzstan",
            kh: "Cambodgia",
            ki: "Kiribati",
            km: "Comore",
            kn: "Saint Kitts și Nevis",
            kp: "Coreea de Nord",
            kr: "Coreea de Sud",
            kw: "Kuweit",
            ky: "Insulele Cayman",
            kz: "Kazahstan",
            la: "Laos",
            lb: "Liban",
            lc: "Sfânta Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Lituania",
            lu: "Luxemburg",
            lv: "Letonia",
            ly: "Libia",
            ma: "Maroc",
            mc: "Monaco",
            md: "Republica Moldova",
            me: "Muntenegru",
            mf: "Sfântul Martin",
            mg: "Madagascar",
            mh: "Insulele Marshall",
            mk: "Macedonia de Nord",
            ml: "Mali",
            mm: "Myanmar (Birmania)",
            mn: "Mongolia",
            mo: "R.A.S. Macao, China",
            mp: "Insulele Mariane de Nord",
            mq: "Martinica",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldive",
            mw: "Malawi",
            mx: "Mexic",
            my: "Malaysia",
            mz: "Mozambic",
            na: "Namibia",
            nc: "Noua Caledonie",
            ne: "Niger",
            nf: "Insula Norfolk",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Țările de Jos",
            no: "Norvegia",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Noua Zeelandă",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Polinezia Franceză",
            pg: "Papua-Noua Guinee",
            ph: "Filipine",
            pk: "Pakistan",
            pl: "Polonia",
            pm: "Saint-Pierre și Miquelon",
            pr: "Puerto Rico",
            ps: "Teritoriile Palestiniene",
            pt: "Portugalia",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "România",
            rs: "Serbia",
            ru: "Rusia",
            rw: "Rwanda",
            sa: "Arabia Saudită",
            sb: "Insulele Solomon",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Suedia",
            sg: "Singapore",
            sh: "Sfânta Elena",
            si: "Slovenia",
            sj: "Svalbard și Jan Mayen",
            sk: "Slovacia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "Sudanul de Sud",
            st: "São Tomé și Príncipe",
            sv: "El Salvador",
            sx: "Sint-Maarten",
            sy: "Siria",
            sz: "eSwatini",
            tc: "Insulele Turks și Caicos",
            td: "Ciad",
            tg: "Togo",
            th: "Thailanda",
            tj: "Tadjikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turcia",
            tt: "Trinidad și Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ucraina",
            ug: "Uganda",
            us: "Statele Unite ale Americii",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Statul Cetății Vaticanului",
            vc: "Saint Vincent și Grenadinele",
            ve: "Venezuela",
            vg: "Insulele Virgine Britanice",
            vi: "Insulele Virgine Americane",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis și Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "Africa de Sud",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const ro_countries = ro_countries_countryTranslations;
        const ro_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Țara selectată",
            noCountrySelected: "Nicio țară selectată",
            countryListAriaLabel: "Lista țărilor",
            searchPlaceholder: "Căutare",
            zeroSearchResults: "Nici un rezultat gasit",
            oneSearchResult: "1 rezultat găsit",
            multipleSearchResults: "${count} rezultate găsite",
            ac: "Insula Ascensiunii",
            xk: "Kosovo"
        };
        const ro_interface = ro_interface_interfaceTranslations;
        const ru_countries_countryTranslations = {
            ad: "Андорра",
            ae: "ОАЭ",
            af: "Афганистан",
            ag: "Антигуа и Барбуда",
            ai: "Ангилья",
            al: "Албания",
            am: "Армения",
            ao: "Ангола",
            ar: "Аргентина",
            as: "Американское Самоа",
            at: "Австрия",
            au: "Австралия",
            aw: "Аруба",
            ax: "Аландские о-ва",
            az: "Азербайджан",
            ba: "Босния и Герцеговина",
            bb: "Барбадос",
            bd: "Бангладеш",
            be: "Бельгия",
            bf: "Буркина-Фасо",
            bg: "Болгария",
            bh: "Бахрейн",
            bi: "Бурунди",
            bj: "Бенин",
            bl: "Сен-Бартелеми",
            bm: "Бермудские о-ва",
            bn: "Бруней-Даруссалам",
            bo: "Боливия",
            bq: "Бонэйр, Синт-Эстатиус и Саба",
            br: "Бразилия",
            bs: "Багамы",
            bt: "Бутан",
            bw: "Ботсвана",
            by: "Беларусь",
            bz: "Белиз",
            ca: "Канада",
            cc: "Кокосовые о-ва",
            cd: "Конго - Киншаса",
            cf: "Центрально-Африканская Республика",
            cg: "Конго - Браззавиль",
            ch: "Швейцария",
            ci: "Кот-д’Ивуар",
            ck: "Острова Кука",
            cl: "Чили",
            cm: "Камерун",
            cn: "Китай",
            co: "Колумбия",
            cr: "Коста-Рика",
            cu: "Куба",
            cv: "Кабо-Верде",
            cw: "Кюрасао",
            cx: "о-в Рождества",
            cy: "Кипр",
            cz: "Чехия",
            de: "Германия",
            dj: "Джибути",
            dk: "Дания",
            dm: "Доминика",
            do: "Доминиканская Республика",
            dz: "Алжир",
            ec: "Эквадор",
            ee: "Эстония",
            eg: "Египет",
            eh: "Западная Сахара",
            er: "Эритрея",
            es: "Испания",
            et: "Эфиопия",
            fi: "Финляндия",
            fj: "Фиджи",
            fk: "Фолклендские о-ва",
            fm: "Федеративные Штаты Микронезии",
            fo: "Фарерские о-ва",
            fr: "Франция",
            ga: "Габон",
            gb: "Великобритания",
            gd: "Гренада",
            ge: "Грузия",
            gf: "Французская Гвиана",
            gg: "Гернси",
            gh: "Гана",
            gi: "Гибралтар",
            gl: "Гренландия",
            gm: "Гамбия",
            gn: "Гвинея",
            gp: "Гваделупа",
            gq: "Экваториальная Гвинея",
            gr: "Греция",
            gt: "Гватемала",
            gu: "Гуам",
            gw: "Гвинея-Бисау",
            gy: "Гайана",
            hk: "Гонконг (САР)",
            hn: "Гондурас",
            hr: "Хорватия",
            ht: "Гаити",
            hu: "Венгрия",
            id: "Индонезия",
            ie: "Ирландия",
            il: "Израиль",
            im: "о-в Мэн",
            in: "Индия",
            io: "Британская территория в Индийском океане",
            iq: "Ирак",
            ir: "Иран",
            is: "Исландия",
            it: "Италия",
            je: "Джерси",
            jm: "Ямайка",
            jo: "Иордания",
            jp: "Япония",
            ke: "Кения",
            kg: "Киргизия",
            kh: "Камбоджа",
            ki: "Кирибати",
            km: "Коморы",
            kn: "Сент-Китс и Невис",
            kp: "КНДР",
            kr: "Республика Корея",
            kw: "Кувейт",
            ky: "Острова Кайман",
            kz: "Казахстан",
            la: "Лаос",
            lb: "Ливан",
            lc: "Сент-Люсия",
            li: "Лихтенштейн",
            lk: "Шри-Ланка",
            lr: "Либерия",
            ls: "Лесото",
            lt: "Литва",
            lu: "Люксембург",
            lv: "Латвия",
            ly: "Ливия",
            ma: "Марокко",
            mc: "Монако",
            md: "Молдова",
            me: "Черногория",
            mf: "Сен-Мартен",
            mg: "Мадагаскар",
            mh: "Маршалловы Острова",
            mk: "Северная Македония",
            ml: "Мали",
            mm: "Мьянма (Бирма)",
            mn: "Монголия",
            mo: "Макао (САР)",
            mp: "Северные Марианские о-ва",
            mq: "Мартиника",
            mr: "Мавритания",
            ms: "Монтсеррат",
            mt: "Мальта",
            mu: "Маврикий",
            mv: "Мальдивы",
            mw: "Малави",
            mx: "Мексика",
            my: "Малайзия",
            mz: "Мозамбик",
            na: "Намибия",
            nc: "Новая Каледония",
            ne: "Нигер",
            nf: "о-в Норфолк",
            ng: "Нигерия",
            ni: "Никарагуа",
            nl: "Нидерланды",
            no: "Норвегия",
            np: "Непал",
            nr: "Науру",
            nu: "Ниуэ",
            nz: "Новая Зеландия",
            om: "Оман",
            pa: "Панама",
            pe: "Перу",
            pf: "Французская Полинезия",
            pg: "Папуа — Новая Гвинея",
            ph: "Филиппины",
            pk: "Пакистан",
            pl: "Польша",
            pm: "Сен-Пьер и Микелон",
            pr: "Пуэрто-Рико",
            ps: "Палестинские территории",
            pt: "Португалия",
            pw: "Палау",
            py: "Парагвай",
            qa: "Катар",
            re: "Реюньон",
            ro: "Румыния",
            rs: "Сербия",
            ru: "Россия",
            rw: "Руанда",
            sa: "Саудовская Аравия",
            sb: "Соломоновы Острова",
            sc: "Сейшельские Острова",
            sd: "Судан",
            se: "Швеция",
            sg: "Сингапур",
            sh: "о-в Св. Елены",
            si: "Словения",
            sj: "Шпицберген и Ян-Майен",
            sk: "Словакия",
            sl: "Сьерра-Леоне",
            sm: "Сан-Марино",
            sn: "Сенегал",
            so: "Сомали",
            sr: "Суринам",
            ss: "Южный Судан",
            st: "Сан-Томе и Принсипи",
            sv: "Сальвадор",
            sx: "Синт-Мартен",
            sy: "Сирия",
            sz: "Эсватини",
            tc: "о-ва Тёркс и Кайкос",
            td: "Чад",
            tg: "Того",
            th: "Таиланд",
            tj: "Таджикистан",
            tk: "Токелау",
            tl: "Восточный Тимор",
            tm: "Туркменистан",
            tn: "Тунис",
            to: "Тонга",
            tr: "Турция",
            tt: "Тринидад и Тобаго",
            tv: "Тувалу",
            tw: "Тайвань",
            tz: "Танзания",
            ua: "Украина",
            ug: "Уганда",
            us: "Соединенные Штаты",
            uy: "Уругвай",
            uz: "Узбекистан",
            va: "Ватикан",
            vc: "Сент-Винсент и Гренадины",
            ve: "Венесуэла",
            vg: "Виргинские о-ва (Великобритания)",
            vi: "Виргинские о-ва (США)",
            vn: "Вьетнам",
            vu: "Вануату",
            wf: "Уоллис и Футуна",
            ws: "Самоа",
            ye: "Йемен",
            yt: "Майотта",
            za: "Южно-Африканская Республика",
            zm: "Замбия",
            zw: "Зимбабве"
        };
        const ru_countries = ru_countries_countryTranslations;
        const ru_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Выбранная страна",
            noCountrySelected: "Страна не выбрана",
            countryListAriaLabel: "Список стран",
            searchPlaceholder: "Поиск",
            zeroSearchResults: "результатов не найдено",
            oneSearchResult: "найден 1 результат",
            multipleSearchResults: "Найдено ${count} результатов",
            ac: "Остров Вознесения",
            xk: "Косово"
        };
        const ru_interface = ru_interface_interfaceTranslations;
        const sk_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Spojené arabské emiráty",
            af: "Afganistan",
            ag: "Antigua a Barbuda",
            ai: "Anguilla",
            al: "Albánsko",
            am: "Arménsko",
            ao: "Angola",
            ar: "Argentína",
            as: "Americká Samoa",
            at: "Rakúsko",
            au: "Austrália",
            aw: "Aruba",
            ax: "Alandy",
            az: "Azerbajdžan",
            ba: "Bosna a Hercegovina",
            bb: "Barbados",
            bd: "Bangladéš",
            be: "Belgicko",
            bf: "Burkina Faso",
            bg: "Bulharsko",
            bh: "Bahrajn",
            bi: "Burundi",
            bj: "Benin",
            bl: "Svätý Bartolomej",
            bm: "Bermudy",
            bn: "Brunej",
            bo: "Bolívia",
            bq: "Karibské Holandsko",
            br: "Brazília",
            bs: "Bahamy",
            bt: "Bhután",
            bw: "Botswana",
            by: "Bielorusko",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kokosové ostrovy",
            cd: "Konžská demokratická republika",
            cf: "Stredoafrická republika",
            cg: "Konžská republika",
            ch: "Švajčiarsko",
            ci: "Pobrežie Slonoviny",
            ck: "Cookove ostrovy",
            cl: "Čile",
            cm: "Kamerun",
            cn: "Čína",
            co: "Kolumbia",
            cr: "Kostarika",
            cu: "Kuba",
            cv: "Kapverdy",
            cw: "Curaçao",
            cx: "Vianočný ostrov",
            cy: "Cyprus",
            cz: "Česko",
            de: "Nemecko",
            dj: "Džibutsko",
            dk: "Dánsko",
            dm: "Dominika",
            do: "Dominikánska republika",
            dz: "Alžírsko",
            ec: "Ekvádor",
            ee: "Estónsko",
            eg: "Egypt",
            eh: "Západná Sahara",
            er: "Eritrea",
            es: "Španielsko",
            et: "Etiópia",
            fi: "Fínsko",
            fj: "Fidži",
            fk: "Falklandy",
            fm: "Mikronézia",
            fo: "Faerské ostrovy",
            fr: "Francúzsko",
            ga: "Gabon",
            gb: "Spojené kráľovstvo",
            gd: "Grenada",
            ge: "Gruzínsko",
            gf: "Francúzska Guyana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltár",
            gl: "Grónsko",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Rovníková Guinea",
            gr: "Grécko",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hongkong – OAO Číny",
            hn: "Honduras",
            hr: "Chorvátsko",
            ht: "Haiti",
            hu: "Maďarsko",
            id: "Indonézia",
            ie: "Írsko",
            il: "Izrael",
            im: "Ostrov Man",
            in: "India",
            io: "Britské indickooceánske územie",
            iq: "Irak",
            ir: "Irán",
            is: "Island",
            it: "Taliansko",
            je: "Jersey",
            jm: "Jamajka",
            jo: "Jordánsko",
            jp: "Japonsko",
            ke: "Keňa",
            kg: "Kirgizsko",
            kh: "Kambodža",
            ki: "Kiribati",
            km: "Komory",
            kn: "Svätý Krištof a Nevis",
            kp: "Severná Kórea",
            kr: "Južná Kórea",
            kw: "Kuvajt",
            ky: "Kajmanie ostrovy",
            kz: "Kazachstan",
            la: "Laos",
            lb: "Libanon",
            lc: "Svätá Lucia",
            li: "Lichtenštajnsko",
            lk: "Srí Lanka",
            lr: "Libéria",
            ls: "Lesotho",
            lt: "Litva",
            lu: "Luxembursko",
            lv: "Lotyšsko",
            ly: "Líbya",
            ma: "Maroko",
            mc: "Monako",
            md: "Moldavsko",
            me: "Čierna Hora",
            mf: "Svätý Martin (fr.)",
            mg: "Madagaskar",
            mh: "Marshallove ostrovy",
            mk: "Severné Macedónsko",
            ml: "Mali",
            mm: "Mjanmarsko",
            mn: "Mongolsko",
            mo: "Macao – OAO Číny",
            mp: "Severné Mariány",
            mq: "Martinik",
            mr: "Mauritánia",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Maurícius",
            mv: "Maldivy",
            mw: "Malawi",
            mx: "Mexiko",
            my: "Malajzia",
            mz: "Mozambik",
            na: "Namíbia",
            nc: "Nová Kaledónia",
            ne: "Niger",
            nf: "Norfolk",
            ng: "Nigéria",
            ni: "Nikaragua",
            nl: "Holandsko",
            no: "Nórsko",
            np: "Nepál",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nový Zéland",
            om: "Omán",
            pa: "Panama",
            pe: "Peru",
            pf: "Francúzska Polynézia",
            pg: "Papua-Nová Guinea",
            ph: "Filipíny",
            pk: "Pakistan",
            pl: "Poľsko",
            pm: "Saint Pierre a Miquelon",
            pr: "Portoriko",
            ps: "Palestínske územia",
            pt: "Portugalsko",
            pw: "Palau",
            py: "Paraguaj",
            qa: "Katar",
            re: "Réunion",
            ro: "Rumunsko",
            rs: "Srbsko",
            ru: "Rusko",
            rw: "Rwanda",
            sa: "Saudská Arábia",
            sb: "Šalamúnove ostrovy",
            sc: "Seychely",
            sd: "Sudán",
            se: "Švédsko",
            sg: "Singapur",
            sh: "Svätá Helena",
            si: "Slovinsko",
            sj: "Svalbard a Jan Mayen",
            sk: "Slovensko",
            sl: "Sierra Leone",
            sm: "San Maríno",
            sn: "Senegal",
            so: "Somálsko",
            sr: "Surinam",
            ss: "Južný Sudán",
            st: "Svätý Tomáš a Princov ostrov",
            sv: "Salvádor",
            sx: "Svätý Martin (hol.)",
            sy: "Sýria",
            sz: "Eswatini",
            tc: "Turks a Caicos",
            td: "Čad",
            tg: "Togo",
            th: "Thajsko",
            tj: "Tadžikistan",
            tk: "Tokelau",
            tl: "Východný Timor",
            tm: "Turkménsko",
            tn: "Tunisko",
            to: "Tonga",
            tr: "Turecko",
            tt: "Trinidad a Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzánia",
            ua: "Ukrajina",
            ug: "Uganda",
            us: "Spojené štáty",
            uy: "Uruguaj",
            uz: "Uzbekistan",
            va: "Vatikán",
            vc: "Svätý Vincent a Grenadíny",
            ve: "Venezuela",
            vg: "Britské Panenské ostrovy",
            vi: "Americké Panenské ostrovy",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis a Futuna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Južná Afrika",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const sk_countries = sk_countries_countryTranslations;
        const sk_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Vybraná krajina",
            noCountrySelected: "Nie je vybratá žiadna krajina",
            countryListAriaLabel: "Zoznam krajín",
            searchPlaceholder: "Vyhľadať",
            zeroSearchResults: "Neboli nájdené žiadne výsledky",
            oneSearchResult: "1 nájdený výsledok",
            multipleSearchResults: "${count} nájdených výsledkov",
            ac: "Ascension",
            xk: "Kosovo"
        };
        const sk_interface = sk_interface_interfaceTranslations;
        const sv_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Förenade Arabemiraten",
            af: "Afghanistan",
            ag: "Antigua och Barbuda",
            ai: "Anguilla",
            al: "Albanien",
            am: "Armenien",
            ao: "Angola",
            ar: "Argentina",
            as: "Amerikanska Samoa",
            at: "Österrike",
            au: "Australien",
            aw: "Aruba",
            ax: "Åland",
            az: "Azerbajdzjan",
            ba: "Bosnien och Hercegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgien",
            bf: "Burkina Faso",
            bg: "Bulgarien",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "S:t Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Karibiska Nederländerna",
            br: "Brasilien",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Vitryssland",
            bz: "Belize",
            ca: "Kanada",
            cc: "Kokosöarna",
            cd: "Kongo-Kinshasa",
            cf: "Centralafrikanska republiken",
            cg: "Kongo-Brazzaville",
            ch: "Schweiz",
            ci: "Côte d’Ivoire",
            ck: "Cooköarna",
            cl: "Chile",
            cm: "Kamerun",
            cn: "Kina",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Kuba",
            cv: "Kap Verde",
            cw: "Curaçao",
            cx: "Julön",
            cy: "Cypern",
            cz: "Tjeckien",
            de: "Tyskland",
            dj: "Djibouti",
            dk: "Danmark",
            dm: "Dominica",
            do: "Dominikanska republiken",
            dz: "Algeriet",
            ec: "Ecuador",
            ee: "Estland",
            eg: "Egypten",
            eh: "Västsahara",
            er: "Eritrea",
            es: "Spanien",
            et: "Etiopien",
            fi: "Finland",
            fj: "Fiji",
            fk: "Falklandsöarna",
            fm: "Mikronesien",
            fo: "Färöarna",
            fr: "Frankrike",
            ga: "Gabon",
            gb: "Storbritannien",
            gd: "Grenada",
            ge: "Georgien",
            gf: "Franska Guyana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Grönland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Ekvatorialguinea",
            gr: "Grekland",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hongkong",
            hn: "Honduras",
            hr: "Kroatien",
            ht: "Haiti",
            hu: "Ungern",
            id: "Indonesien",
            ie: "Irland",
            il: "Israel",
            im: "Isle of Man",
            in: "Indien",
            io: "Brittiska territoriet i Indiska oceanen",
            iq: "Irak",
            ir: "Iran",
            is: "Island",
            it: "Italien",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordanien",
            jp: "Japan",
            ke: "Kenya",
            kg: "Kirgizistan",
            kh: "Kambodja",
            ki: "Kiribati",
            km: "Komorerna",
            kn: "S:t Kitts och Nevis",
            kp: "Nordkorea",
            kr: "Sydkorea",
            kw: "Kuwait",
            ky: "Caymanöarna",
            kz: "Kazakstan",
            la: "Laos",
            lb: "Libanon",
            lc: "S:t Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Litauen",
            lu: "Luxemburg",
            lv: "Lettland",
            ly: "Libyen",
            ma: "Marocko",
            mc: "Monaco",
            md: "Moldavien",
            me: "Montenegro",
            mf: "Saint-Martin",
            mg: "Madagaskar",
            mh: "Marshallöarna",
            mk: "Nordmakedonien",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongoliet",
            mo: "Macao",
            mp: "Nordmarianerna",
            mq: "Martinique",
            mr: "Mauretanien",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldiverna",
            mw: "Malawi",
            mx: "Mexiko",
            my: "Malaysia",
            mz: "Moçambique",
            na: "Namibia",
            nc: "Nya Kaledonien",
            ne: "Niger",
            nf: "Norfolkön",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Nederländerna",
            no: "Norge",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Nya Zeeland",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Franska Polynesien",
            pg: "Papua Nya Guinea",
            ph: "Filippinerna",
            pk: "Pakistan",
            pl: "Polen",
            pm: "S:t Pierre och Miquelon",
            pr: "Puerto Rico",
            ps: "Palestinska territorierna",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Rumänien",
            rs: "Serbien",
            ru: "Ryssland",
            rw: "Rwanda",
            sa: "Saudiarabien",
            sb: "Salomonöarna",
            sc: "Seychellerna",
            sd: "Sudan",
            se: "Sverige",
            sg: "Singapore",
            sh: "S:t Helena",
            si: "Slovenien",
            sj: "Svalbard och Jan Mayen",
            sk: "Slovakien",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Surinam",
            ss: "Sydsudan",
            st: "São Tomé och Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syrien",
            sz: "Swaziland",
            tc: "Turks- och Caicosöarna",
            td: "Tchad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tadzjikistan",
            tk: "Tokelau",
            tl: "Östtimor",
            tm: "Turkmenistan",
            tn: "Tunisien",
            to: "Tonga",
            tr: "Turkiet",
            tt: "Trinidad och Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ukraina",
            ug: "Uganda",
            us: "USA",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Vatikanstaten",
            vc: "S:t Vincent och Grenadinerna",
            ve: "Venezuela",
            vg: "Brittiska Jungfruöarna",
            vi: "Amerikanska Jungfruöarna",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis- och Futunaöarna",
            ws: "Samoa",
            ye: "Jemen",
            yt: "Mayotte",
            za: "Sydafrika",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const sv_countries = sv_countries_countryTranslations;
        const sv_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Valt land",
            noCountrySelected: "Inget land valt",
            countryListAriaLabel: "Lista över länder",
            searchPlaceholder: "Sök",
            zeroSearchResults: "Inga resultat hittades",
            oneSearchResult: "1 resultat hittades",
            multipleSearchResults: "${count} resultat hittades",
            ac: "Ascension",
            xk: "Kosovo"
        };
        const sv_interface = sv_interface_interfaceTranslations;
        const te_countries_countryTranslations = {
            ad: "ఆండోరా",
            ae: "యునైటెడ్ అరబ్ ఎమిరేట్స్",
            af: "ఆఫ్ఘనిస్తాన్",
            ag: "ఆంటిగ్వా మరియు బార్బుడా",
            ai: "ఆంగ్విల్లా",
            al: "అల్బేనియా",
            am: "ఆర్మేనియా",
            ao: "అంగోలా",
            ar: "అర్జెంటీనా",
            as: "అమెరికన్ సమోవా",
            at: "ఆస్ట్రియా",
            au: "ఆస్ట్రేలియా",
            aw: "అరుబా",
            ax: "ఆలాండ్ దీవులు",
            az: "అజర్బైజాన్",
            ba: "బోస్నియా మరియు హెర్జిగోవినా",
            bb: "బార్బడోస్",
            bd: "బంగ్లాదేశ్",
            be: "బెల్జియం",
            bf: "బుర్కినా ఫాసో",
            bg: "బల్గేరియా",
            bh: "బహ్రెయిన్",
            bi: "బురుండి",
            bj: "బెనిన్",
            bl: "సెయింట్ బర్థెలిమి",
            bm: "బెర్ముడా",
            bn: "బ్రూనే",
            bo: "బొలీవియా",
            bq: "కరీబియన్ నెదర్లాండ్స్",
            br: "బ్రెజిల్",
            bs: "బహామాస్",
            bt: "భూటాన్",
            bw: "బోట్స్వానా",
            by: "బెలారస్",
            bz: "బెలిజ్",
            ca: "కెనడా",
            cc: "కోకోస్ (కీలింగ్) దీవులు",
            cd: "కాంగో- కిన్షాసా",
            cf: "సెంట్రల్ ఆఫ్రికన్ రిపబ్లిక్",
            cg: "కాంగో- బ్రాజావిల్లి",
            ch: "స్విట్జర్లాండ్",
            ci: "కోట్ డి ఐవోర్",
            ck: "కుక్ దీవులు",
            cl: "చిలీ",
            cm: "కామెరూన్",
            cn: "చైనా",
            co: "కొలంబియా",
            cr: "కోస్టా రికా",
            cu: "క్యూబా",
            cv: "కేప్ వెర్డె",
            cw: "క్యూరసో",
            cx: "క్రిస్మస్ దీవి",
            cy: "సైప్రస్",
            cz: "చెకియా",
            de: "జర్మనీ",
            dj: "జిబౌటి",
            dk: "డెన్మార్క్",
            dm: "డొమినికా",
            do: "డొమినికన్ రిపబ్లిక్",
            dz: "అల్జీరియా",
            ec: "ఈక్వడార్",
            ee: "ఎస్టోనియా",
            eg: "ఈజిప్ట్",
            eh: "పడమటి సహారా",
            er: "ఎరిట్రియా",
            es: "స్పెయిన్",
            et: "ఇథియోపియా",
            fi: "ఫిన్లాండ్",
            fj: "ఫిజీ",
            fk: "ఫాక్‌ల్యాండ్ దీవులు",
            fm: "మైక్రోనేషియా",
            fo: "ఫారో దీవులు",
            fr: "ఫ్రాన్స్‌",
            ga: "గేబన్",
            gb: "యునైటెడ్ కింగ్‌డమ్",
            gd: "గ్రెనడా",
            ge: "జార్జియా",
            gf: "ఫ్రెంచ్ గియానా",
            gg: "గర్న్‌సీ",
            gh: "ఘనా",
            gi: "జిబ్రాల్టర్",
            gl: "గ్రీన్‌ల్యాండ్",
            gm: "గాంబియా",
            gn: "గినియా",
            gp: "గ్వాడెలోప్",
            gq: "ఈక్వటోరియల్ గినియా",
            gr: "గ్రీస్",
            gt: "గ్వాటిమాలా",
            gu: "గ్వామ్",
            gw: "గినియా-బిస్సావ్",
            gy: "గయానా",
            hk: "హాంకాంగ్ ఎస్ఏఆర్ చైనా",
            hn: "హోండురాస్",
            hr: "క్రొయేషియా",
            ht: "హైటి",
            hu: "హంగేరీ",
            id: "ఇండోనేషియా",
            ie: "ఐర్లాండ్",
            il: "ఇజ్రాయెల్",
            im: "ఐల్ ఆఫ్ మాన్",
            in: "భారతదేశం",
            io: "బ్రిటిష్ హిందూ మహాసముద్ర ప్రాంతం",
            iq: "ఇరాక్",
            ir: "ఇరాన్",
            is: "ఐస్లాండ్",
            it: "ఇటలీ",
            je: "జెర్సీ",
            jm: "జమైకా",
            jo: "జోర్డాన్",
            jp: "జపాన్",
            ke: "కెన్యా",
            kg: "కిర్గిజిస్తాన్",
            kh: "కంబోడియా",
            ki: "కిరిబాటి",
            km: "కొమొరోస్",
            kn: "సెయింట్ కిట్స్ మరియు నెవిస్",
            kp: "ఉత్తర కొరియా",
            kr: "దక్షిణ కొరియా",
            kw: "కువైట్",
            ky: "కేమాన్ దీవులు",
            kz: "కజకిస్తాన్",
            la: "లావోస్",
            lb: "లెబనాన్",
            lc: "సెయింట్ లూసియా",
            li: "లిక్టెన్‌స్టెయిన్",
            lk: "శ్రీలంక",
            lr: "లైబీరియా",
            ls: "లెసోతో",
            lt: "లిథువేనియా",
            lu: "లక్సెంబర్గ్",
            lv: "లాత్వియా",
            ly: "లిబియా",
            ma: "మొరాకో",
            mc: "మొనాకో",
            md: "మోల్డోవా",
            me: "మాంటెనెగ్రో",
            mf: "సెయింట్ మార్టిన్",
            mg: "మడగాస్కర్",
            mh: "మార్షల్ దీవులు",
            mk: "ఉత్తర మాసిడోనియా",
            ml: "మాలి",
            mm: "మయన్మార్",
            mn: "మంగోలియా",
            mo: "మకావ్ ఎస్ఏఆర్ చైనా",
            mp: "ఉత్తర మరియానా దీవులు",
            mq: "మార్టినీక్",
            mr: "మౌరిటేనియా",
            ms: "మాంట్సెరాట్",
            mt: "మాల్టా",
            mu: "మారిషస్",
            mv: "మాల్దీవులు",
            mw: "మలావీ",
            mx: "మెక్సికో",
            my: "మలేషియా",
            mz: "మొజాంబిక్",
            na: "నమీబియా",
            nc: "క్రొత్త కాలెడోనియా",
            ne: "నైజర్",
            nf: "నార్ఫోక్ దీవి",
            ng: "నైజీరియా",
            ni: "నికరాగువా",
            nl: "నెదర్లాండ్స్",
            no: "నార్వే",
            np: "నేపాల్",
            nr: "నౌరు",
            nu: "నియూ",
            nz: "న్యూజిలాండ్",
            om: "ఓమన్",
            pa: "పనామా",
            pe: "పెరూ",
            pf: "ఫ్రెంచ్ పోలినీషియా",
            pg: "పాపువా న్యూ గినియా",
            ph: "ఫిలిప్పైన్స్",
            pk: "పాకిస్తాన్",
            pl: "పోలాండ్",
            pm: "సెయింట్ పియెర్ మరియు మికెలాన్",
            pr: "ప్యూర్టో రికో",
            ps: "పాలస్తీనియన్ ప్రాంతాలు",
            pt: "పోర్చుగల్",
            pw: "పాలావ్",
            py: "పరాగ్వే",
            qa: "ఖతార్",
            re: "రీయూనియన్",
            ro: "రోమేనియా",
            rs: "సెర్బియా",
            ru: "రష్యా",
            rw: "రువాండా",
            sa: "సౌదీ అరేబియా",
            sb: "సోలమన్ దీవులు",
            sc: "సీషెల్స్",
            sd: "సూడాన్",
            se: "స్వీడన్",
            sg: "సింగపూర్",
            sh: "సెయింట్ హెలెనా",
            si: "స్లోవేనియా",
            sj: "స్వాల్‌బార్డ్ మరియు జాన్ మాయెన్",
            sk: "స్లొవేకియా",
            sl: "సియెర్రా లియాన్",
            sm: "శాన్ మారినో",
            sn: "సెనెగల్",
            so: "సోమాలియా",
            sr: "సూరినామ్",
            ss: "దక్షిణ సూడాన్",
            st: "సావో టోమ్ మరియు ప్రిన్సిపి",
            sv: "ఎల్ సాల్వడోర్",
            sx: "సింట్ మార్టెన్",
            sy: "సిరియా",
            sz: "ఈస్వాటిని",
            tc: "టర్క్స్ మరియు కైకోస్ దీవులు",
            td: "చాద్",
            tg: "టోగో",
            th: "థాయిలాండ్",
            tj: "తజికిస్తాన్",
            tk: "టోకెలావ్",
            tl: "టిమోర్-లెస్టె",
            tm: "టర్క్‌మెనిస్తాన్",
            tn: "ట్యునీషియా",
            to: "టోంగా",
            tr: "టర్కీ",
            tt: "ట్రినిడాడ్ మరియు టొబాగో",
            tv: "టువాలు",
            tw: "తైవాన్",
            tz: "టాంజానియా",
            ua: "ఉక్రెయిన్",
            ug: "ఉగాండా",
            us: "యునైటెడ్ స్టేట్స్",
            uy: "ఉరుగ్వే",
            uz: "ఉజ్బెకిస్తాన్",
            va: "వాటికన్ నగరం",
            vc: "సెయింట్ విన్సెంట్ మరియు గ్రెనడీన్స్",
            ve: "వెనిజులా",
            vg: "బ్రిటిష్ వర్జిన్ దీవులు",
            vi: "యు.ఎస్. వర్జిన్ దీవులు",
            vn: "వియత్నాం",
            vu: "వనాటు",
            wf: "వాల్లిస్ మరియు ఫుటునా",
            ws: "సమోవా",
            ye: "యెమెన్",
            yt: "మాయొట్",
            za: "దక్షిణ ఆఫ్రికా",
            zm: "జాంబియా",
            zw: "జింబాబ్వే"
        };
        const te_countries = te_countries_countryTranslations;
        const te_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "ఎంచుకున్న దేశం",
            noCountrySelected: "ఏ దేశం ఎంచుకోబడలేదు",
            countryListAriaLabel: "దేశాల జాబితా",
            searchPlaceholder: "వెతకండి",
            zeroSearchResults: "ఎటువంటి ఫలితాలు లభించలేదు",
            oneSearchResult: "1 ఫలితం కనుగొనబడింది",
            multipleSearchResults: "${count} ఫలితాలు కనుగొనబడ్డాయి",
            ac: "అసెన్షన్ ద్వీపం",
            xk: "కొసోవో"
        };
        const te_interface = te_interface_interfaceTranslations;
        const th_countries_countryTranslations = {
            ad: "อันดอร์รา",
            ae: "สหรัฐอาหรับเอมิเรตส์",
            af: "อัฟกานิสถาน",
            ag: "แอนติกาและบาร์บูดา",
            ai: "แองกวิลลา",
            al: "แอลเบเนีย",
            am: "อาร์เมเนีย",
            ao: "แองโกลา",
            ar: "อาร์เจนตินา",
            as: "อเมริกันซามัว",
            at: "ออสเตรีย",
            au: "ออสเตรเลีย",
            aw: "อารูบา",
            ax: "หมู่เกาะโอลันด์",
            az: "อาเซอร์ไบจาน",
            ba: "บอสเนียและเฮอร์เซโกวีนา",
            bb: "บาร์เบโดส",
            bd: "บังกลาเทศ",
            be: "เบลเยียม",
            bf: "บูร์กินาฟาโซ",
            bg: "บัลแกเรีย",
            bh: "บาห์เรน",
            bi: "บุรุนดี",
            bj: "เบนิน",
            bl: "เซนต์บาร์เธเลมี",
            bm: "เบอร์มิวดา",
            bn: "บรูไน",
            bo: "โบลิเวีย",
            bq: "เนเธอร์แลนด์แคริบเบียน",
            br: "บราซิล",
            bs: "บาฮามาส",
            bt: "ภูฏาน",
            bw: "บอตสวานา",
            by: "เบลารุส",
            bz: "เบลีซ",
            ca: "แคนาดา",
            cc: "หมู่เกาะโคโคส (คีลิง)",
            cd: "คองโก - กินชาซา",
            cf: "สาธารณรัฐแอฟริกากลาง",
            cg: "คองโก - บราซซาวิล",
            ch: "สวิตเซอร์แลนด์",
            ci: "โกตดิวัวร์",
            ck: "หมู่เกาะคุก",
            cl: "ชิลี",
            cm: "แคเมอรูน",
            cn: "จีน",
            co: "โคลอมเบีย",
            cr: "คอสตาริกา",
            cu: "คิวบา",
            cv: "เคปเวิร์ด",
            cw: "คูราเซา",
            cx: "เกาะคริสต์มาส",
            cy: "ไซปรัส",
            cz: "เช็ก",
            de: "เยอรมนี",
            dj: "จิบูตี",
            dk: "เดนมาร์ก",
            dm: "โดมินิกา",
            do: "สาธารณรัฐโดมินิกัน",
            dz: "แอลจีเรีย",
            ec: "เอกวาดอร์",
            ee: "เอสโตเนีย",
            eg: "อียิปต์",
            eh: "ซาฮาราตะวันตก",
            er: "เอริเทรีย",
            es: "สเปน",
            et: "เอธิโอเปีย",
            fi: "ฟินแลนด์",
            fj: "ฟิจิ",
            fk: "หมู่เกาะฟอล์กแลนด์",
            fm: "ไมโครนีเซีย",
            fo: "หมู่เกาะแฟโร",
            fr: "ฝรั่งเศส",
            ga: "กาบอง",
            gb: "สหราชอาณาจักร",
            gd: "เกรเนดา",
            ge: "จอร์เจีย",
            gf: "เฟรนช์เกียนา",
            gg: "เกิร์นซีย์",
            gh: "กานา",
            gi: "ยิบรอลตาร์",
            gl: "กรีนแลนด์",
            gm: "แกมเบีย",
            gn: "กินี",
            gp: "กวาเดอลูป",
            gq: "อิเควทอเรียลกินี",
            gr: "กรีซ",
            gt: "กัวเตมาลา",
            gu: "กวม",
            gw: "กินี-บิสเซา",
            gy: "กายอานา",
            hk: "เขตปกครองพิเศษฮ่องกงแห่งสาธารณรัฐประชาชนจีน",
            hn: "ฮอนดูรัส",
            hr: "โครเอเชีย",
            ht: "เฮติ",
            hu: "ฮังการี",
            id: "อินโดนีเซีย",
            ie: "ไอร์แลนด์",
            il: "อิสราเอล",
            im: "เกาะแมน",
            in: "อินเดีย",
            io: "บริติชอินเดียนโอเชียนเทร์ริทอรี",
            iq: "อิรัก",
            ir: "อิหร่าน",
            is: "ไอซ์แลนด์",
            it: "อิตาลี",
            je: "เจอร์ซีย์",
            jm: "จาเมกา",
            jo: "จอร์แดน",
            jp: "ญี่ปุ่น",
            ke: "เคนยา",
            kg: "คีร์กีซสถาน",
            kh: "กัมพูชา",
            ki: "คิริบาส",
            km: "คอโมโรส",
            kn: "เซนต์คิตส์และเนวิส",
            kp: "เกาหลีเหนือ",
            kr: "เกาหลีใต้",
            kw: "คูเวต",
            ky: "หมู่เกาะเคย์แมน",
            kz: "คาซัคสถาน",
            la: "ลาว",
            lb: "เลบานอน",
            lc: "เซนต์ลูเซีย",
            li: "ลิกเตนสไตน์",
            lk: "ศรีลังกา",
            lr: "ไลบีเรีย",
            ls: "เลโซโท",
            lt: "ลิทัวเนีย",
            lu: "ลักเซมเบิร์ก",
            lv: "ลัตเวีย",
            ly: "ลิเบีย",
            ma: "โมร็อกโก",
            mc: "โมนาโก",
            md: "มอลโดวา",
            me: "มอนเตเนโกร",
            mf: "เซนต์มาร์ติน",
            mg: "มาดากัสการ์",
            mh: "หมู่เกาะมาร์แชลล์",
            mk: "มาซิโดเนียเหนือ",
            ml: "มาลี",
            mm: "เมียนมาร์ (พม่า)",
            mn: "มองโกเลีย",
            mo: "เขตปกครองพิเศษมาเก๊าแห่งสาธารณรัฐประชาชนจีน",
            mp: "หมู่เกาะนอร์เทิร์นมาเรียนา",
            mq: "มาร์ตินีก",
            mr: "มอริเตเนีย",
            ms: "มอนต์เซอร์รัต",
            mt: "มอลตา",
            mu: "มอริเชียส",
            mv: "มัลดีฟส์",
            mw: "มาลาวี",
            mx: "เม็กซิโก",
            my: "มาเลเซีย",
            mz: "โมซัมบิก",
            na: "นามิเบีย",
            nc: "นิวแคลิโดเนีย",
            ne: "ไนเจอร์",
            nf: "เกาะนอร์ฟอล์ก",
            ng: "ไนจีเรีย",
            ni: "นิการากัว",
            nl: "เนเธอร์แลนด์",
            no: "นอร์เวย์",
            np: "เนปาล",
            nr: "นาอูรู",
            nu: "นีอูเอ",
            nz: "นิวซีแลนด์",
            om: "โอมาน",
            pa: "ปานามา",
            pe: "เปรู",
            pf: "เฟรนช์โปลินีเซีย",
            pg: "ปาปัวนิวกินี",
            ph: "ฟิลิปปินส์",
            pk: "ปากีสถาน",
            pl: "โปแลนด์",
            pm: "แซงปีแยร์และมีเกอลง",
            pr: "เปอร์โตริโก",
            ps: "ดินแดนปาเลสไตน์",
            pt: "โปรตุเกส",
            pw: "ปาเลา",
            py: "ปารากวัย",
            qa: "กาตาร์",
            re: "เรอูนียง",
            ro: "โรมาเนีย",
            rs: "เซอร์เบีย",
            ru: "รัสเซีย",
            rw: "รวันดา",
            sa: "ซาอุดีอาระเบีย",
            sb: "หมู่เกาะโซโลมอน",
            sc: "เซเชลส์",
            sd: "ซูดาน",
            se: "สวีเดน",
            sg: "สิงคโปร์",
            sh: "เซนต์เฮเลนา",
            si: "สโลวีเนีย",
            sj: "สฟาลบาร์และยานไมเอน",
            sk: "สโลวะเกีย",
            sl: "เซียร์ราลีโอน",
            sm: "ซานมาริโน",
            sn: "เซเนกัล",
            so: "โซมาเลีย",
            sr: "ซูรินาเม",
            ss: "ซูดานใต้",
            st: "เซาตูเมและปรินซิปี",
            sv: "เอลซัลวาดอร์",
            sx: "ซินต์มาร์เทน",
            sy: "ซีเรีย",
            sz: "เอสวาตีนี",
            tc: "หมู่เกาะเติกส์และหมู่เกาะเคคอส",
            td: "ชาด",
            tg: "โตโก",
            th: "ไทย",
            tj: "ทาจิกิสถาน",
            tk: "โตเกเลา",
            tl: "ติมอร์-เลสเต",
            tm: "เติร์กเมนิสถาน",
            tn: "ตูนิเซีย",
            to: "ตองกา",
            tr: "ตุรกี",
            tt: "ตรินิแดดและโตเบโก",
            tv: "ตูวาลู",
            tw: "ไต้หวัน",
            tz: "แทนซาเนีย",
            ua: "ยูเครน",
            ug: "ยูกันดา",
            us: "สหรัฐอเมริกา",
            uy: "อุรุกวัย",
            uz: "อุซเบกิสถาน",
            va: "นครวาติกัน",
            vc: "เซนต์วินเซนต์และเกรนาดีนส์",
            ve: "เวเนซุเอลา",
            vg: "หมู่เกาะบริติชเวอร์จิน",
            vi: "หมู่เกาะเวอร์จินของสหรัฐอเมริกา",
            vn: "เวียดนาม",
            vu: "วานูอาตู",
            wf: "วาลลิสและฟุตูนา",
            ws: "ซามัว",
            ye: "เยเมน",
            yt: "มายอต",
            za: "แอฟริกาใต้",
            zm: "แซมเบีย",
            zw: "ซิมบับเว"
        };
        const th_countries = th_countries_countryTranslations;
        const th_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "ประเทศที่เลือก",
            noCountrySelected: "ไม่ได้เลือกประเทศ",
            countryListAriaLabel: "รายชื่อประเทศ",
            searchPlaceholder: "ค้นหา",
            zeroSearchResults: "ไม่พบผลลัพธ์",
            oneSearchResult: "พบผลลัพธ์ 1 รายการ",
            multipleSearchResults: "พบผลลัพธ์ ${count} รายการ",
            ac: "เกาะแอสเซนชัน",
            xk: "โคโซโว"
        };
        const th_interface = th_interface_interfaceTranslations;
        const tr_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Birleşik Arap Emirlikleri",
            af: "Afganistan",
            ag: "Antigua ve Barbuda",
            ai: "Anguilla",
            al: "Arnavutluk",
            am: "Ermenistan",
            ao: "Angola",
            ar: "Arjantin",
            as: "Amerikan Samoası",
            at: "Avusturya",
            au: "Avustralya",
            aw: "Aruba",
            ax: "Åland Adaları",
            az: "Azerbaycan",
            ba: "Bosna-Hersek",
            bb: "Barbados",
            bd: "Bangladeş",
            be: "Belçika",
            bf: "Burkina Faso",
            bg: "Bulgaristan",
            bh: "Bahreyn",
            bi: "Burundi",
            bj: "Benin",
            bl: "Saint Barthelemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivya",
            bq: "Karayip Hollandası",
            br: "Brezilya",
            bs: "Bahamalar",
            bt: "Butan",
            bw: "Botsvana",
            by: "Belarus",
            bz: "Belize",
            ca: "Kanada",
            cc: "Cocos (Keeling) Adaları",
            cd: "Kongo - Kinşasa",
            cf: "Orta Afrika Cumhuriyeti",
            cg: "Kongo - Brazavil",
            ch: "İsviçre",
            ci: "Côte d’Ivoire",
            ck: "Cook Adaları",
            cl: "Şili",
            cm: "Kamerun",
            cn: "Çin",
            co: "Kolombiya",
            cr: "Kosta Rika",
            cu: "Küba",
            cv: "Cape Verde",
            cw: "Curaçao",
            cx: "Christmas Adası",
            cy: "Kıbrıs",
            cz: "Çekya",
            de: "Almanya",
            dj: "Cibuti",
            dk: "Danimarka",
            dm: "Dominika",
            do: "Dominik Cumhuriyeti",
            dz: "Cezayir",
            ec: "Ekvador",
            ee: "Estonya",
            eg: "Mısır",
            eh: "Batı Sahra",
            er: "Eritre",
            es: "İspanya",
            et: "Etiyopya",
            fi: "Finlandiya",
            fj: "Fiji",
            fk: "Falkland Adaları",
            fm: "Mikronezya",
            fo: "Faroe Adaları",
            fr: "Fransa",
            ga: "Gabon",
            gb: "Birleşik Krallık",
            gd: "Grenada",
            ge: "Gürcistan",
            gf: "Fransız Guyanası",
            gg: "Guernsey",
            gh: "Gana",
            gi: "Cebelitarık",
            gl: "Grönland",
            gm: "Gambiya",
            gn: "Gine",
            gp: "Guadeloupe",
            gq: "Ekvator Ginesi",
            gr: "Yunanistan",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Gine-Bissau",
            gy: "Guyana",
            hk: "Çin Hong Kong ÖİB",
            hn: "Honduras",
            hr: "Hırvatistan",
            ht: "Haiti",
            hu: "Macaristan",
            id: "Endonezya",
            ie: "İrlanda",
            il: "İsrail",
            im: "Man Adası",
            in: "Hindistan",
            io: "Britanya Hint Okyanusu Toprakları",
            iq: "Irak",
            ir: "İran",
            is: "İzlanda",
            it: "İtalya",
            je: "Jersey",
            jm: "Jamaika",
            jo: "Ürdün",
            jp: "Japonya",
            ke: "Kenya",
            kg: "Kırgızistan",
            kh: "Kamboçya",
            ki: "Kiribati",
            km: "Komorlar",
            kn: "Saint Kitts ve Nevis",
            kp: "Kuzey Kore",
            kr: "Güney Kore",
            kw: "Kuveyt",
            ky: "Cayman Adaları",
            kz: "Kazakistan",
            la: "Laos",
            lb: "Lübnan",
            lc: "Saint Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberya",
            ls: "Lesotho",
            lt: "Litvanya",
            lu: "Lüksemburg",
            lv: "Letonya",
            ly: "Libya",
            ma: "Fas",
            mc: "Monako",
            md: "Moldova",
            me: "Karadağ",
            mf: "Saint Martin",
            mg: "Madagaskar",
            mh: "Marshall Adaları",
            mk: "Kuzey Makedonya",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Moğolistan",
            mo: "Çin Makao ÖİB",
            mp: "Kuzey Mariana Adaları",
            mq: "Martinik",
            mr: "Moritanya",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldivler",
            mw: "Malavi",
            mx: "Meksika",
            my: "Malezya",
            mz: "Mozambik",
            na: "Namibya",
            nc: "Yeni Kaledonya",
            ne: "Nijer",
            nf: "Norfolk Adası",
            ng: "Nijerya",
            ni: "Nikaragua",
            nl: "Hollanda",
            no: "Norveç",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "Yeni Zelanda",
            om: "Umman",
            pa: "Panama",
            pe: "Peru",
            pf: "Fransız Polinezyası",
            pg: "Papua Yeni Gine",
            ph: "Filipinler",
            pk: "Pakistan",
            pl: "Polonya",
            pm: "Saint Pierre ve Miquelon",
            pr: "Porto Riko",
            ps: "Filistin Bölgeleri",
            pt: "Portekiz",
            pw: "Palau",
            py: "Paraguay",
            qa: "Katar",
            re: "Reunion",
            ro: "Romanya",
            rs: "Sırbistan",
            ru: "Rusya",
            rw: "Ruanda",
            sa: "Suudi Arabistan",
            sb: "Solomon Adaları",
            sc: "Seyşeller",
            sd: "Sudan",
            se: "İsveç",
            sg: "Singapur",
            sh: "Saint Helena",
            si: "Slovenya",
            sj: "Svalbard ve Jan Mayen",
            sk: "Slovakya",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somali",
            sr: "Surinam",
            ss: "Güney Sudan",
            st: "Sao Tome ve Principe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Suriye",
            sz: "Esvatini",
            tc: "Turks ve Caicos Adaları",
            td: "Çad",
            tg: "Togo",
            th: "Tayland",
            tj: "Tacikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Türkmenistan",
            tn: "Tunus",
            to: "Tonga",
            tr: "Türkiye",
            tt: "Trinidad ve Tobago",
            tv: "Tuvalu",
            tw: "Tayvan",
            tz: "Tanzanya",
            ua: "Ukrayna",
            ug: "Uganda",
            us: "Amerika Birleşik Devletleri",
            uy: "Uruguay",
            uz: "Özbekistan",
            va: "Vatikan",
            vc: "Saint Vincent ve Grenadinler",
            ve: "Venezuela",
            vg: "Britanya Virjin Adaları",
            vi: "ABD Virjin Adaları",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis ve Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "Güney Afrika",
            zm: "Zambiya",
            zw: "Zimbabve"
        };
        const tr_countries = tr_countries_countryTranslations;
        const tr_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Seçilen ülke",
            noCountrySelected: "Hiçbir ülke seçilmedi",
            countryListAriaLabel: "Ülke listesi",
            searchPlaceholder: "Ara",
            zeroSearchResults: "Sonuç bulunamadı",
            oneSearchResult: "1 sonuç bulundu",
            multipleSearchResults: "${count} sonuç bulundu",
            ac: "Ascension Adası",
            xk: "Kosova"
        };
        const tr_interface = tr_interface_interfaceTranslations;
        const uk_countries_countryTranslations = {
            ad: "Андорра",
            ae: "Обʼєднані Арабські Емірати",
            af: "Афганістан",
            ag: "Антиґуа і Барбуда",
            ai: "Анґілья",
            al: "Албанія",
            am: "Вірменія",
            ao: "Ангола",
            ar: "Аргентина",
            as: "Американське Самоа",
            at: "Австрія",
            au: "Австралія",
            aw: "Аруба",
            ax: "Аландські Острови",
            az: "Азербайджан",
            ba: "Боснія і Герцеґовина",
            bb: "Барбадос",
            bd: "Бангладеш",
            be: "Бельґія",
            bf: "Буркіна-Фасо",
            bg: "Болгарія",
            bh: "Бахрейн",
            bi: "Бурунді",
            bj: "Бенін",
            bl: "Сен-Бартельмі",
            bm: "Бермудські Острови",
            bn: "Бруней",
            bo: "Болівія",
            bq: "Нідерландські Карибські острови",
            br: "Бразілія",
            bs: "Багамські Острови",
            bt: "Бутан",
            bw: "Ботсвана",
            by: "Білорусь",
            bz: "Беліз",
            ca: "Канада",
            cc: "Кокосові (Кілінґ) Острови",
            cd: "Конго – Кіншаса",
            cf: "Центральноафриканська Республіка",
            cg: "Конго – Браззавіль",
            ch: "Швейцарія",
            ci: "Кот-дʼІвуар",
            ck: "Острови Кука",
            cl: "Чілі",
            cm: "Камерун",
            cn: "Китай",
            co: "Колумбія",
            cr: "Коста-Ріка",
            cu: "Куба",
            cv: "Кабо-Верде",
            cw: "Кюрасао",
            cx: "Острів Різдва",
            cy: "Кіпр",
            cz: "Чехія",
            de: "Німеччина",
            dj: "Джибуті",
            dk: "Данія",
            dm: "Домініка",
            do: "Домініканська Республіка",
            dz: "Алжир",
            ec: "Еквадор",
            ee: "Естонія",
            eg: "Єгипет",
            eh: "Західна Сахара",
            er: "Еритрея",
            es: "Іспанія",
            et: "Ефіопія",
            fi: "Фінляндія",
            fj: "Фіджі",
            fk: "Фолклендські Острови",
            fm: "Мікронезія",
            fo: "Фарерські Острови",
            fr: "Франція",
            ga: "Габон",
            gb: "Велика Британія",
            gd: "Ґренада",
            ge: "Грузія",
            gf: "Французька Ґвіана",
            gg: "Ґернсі",
            gh: "Гана",
            gi: "Ґібралтар",
            gl: "Ґренландія",
            gm: "Гамбія",
            gn: "Гвінея",
            gp: "Ґваделупа",
            gq: "Екваторіальна Гвінея",
            gr: "Греція",
            gt: "Ґватемала",
            gu: "Ґуам",
            gw: "Гвінея-Бісау",
            gy: "Ґайана",
            hk: "Гонконг, О.А.Р. Китаю",
            hn: "Гондурас",
            hr: "Хорватія",
            ht: "Гаїті",
            hu: "Угорщина",
            id: "Індонезія",
            ie: "Ірландія",
            il: "Ізраїль",
            im: "Острів Мен",
            in: "Індія",
            io: "Британська територія в Індійському Океані",
            iq: "Ірак",
            ir: "Іран",
            is: "Ісландія",
            it: "Італія",
            je: "Джерсі",
            jm: "Ямайка",
            jo: "Йорданія",
            jp: "Японія",
            ke: "Кенія",
            kg: "Киргизстан",
            kh: "Камбоджа",
            ki: "Кірібаті",
            km: "Комори",
            kn: "Сент-Кітс і Невіс",
            kp: "Північна Корея",
            kr: "Південна Корея",
            kw: "Кувейт",
            ky: "Кайманові Острови",
            kz: "Казахстан",
            la: "Лаос",
            lb: "Ліван",
            lc: "Сент-Люсія",
            li: "Ліхтенштейн",
            lk: "Шрі-Ланка",
            lr: "Ліберія",
            ls: "Лесото",
            lt: "Литва",
            lu: "Люксембурґ",
            lv: "Латвія",
            ly: "Лівія",
            ma: "Марокко",
            mc: "Монако",
            md: "Молдова",
            me: "Чорногорія",
            mf: "Сен-Мартен",
            mg: "Мадагаскар",
            mh: "Маршаллові Острови",
            mk: "Північна Македонія",
            ml: "Малі",
            mm: "Мʼянма (Бірма)",
            mn: "Монголія",
            mo: "Макао, О.А.Р Китаю",
            mp: "Північні Маріанські Острови",
            mq: "Мартініка",
            mr: "Мавританія",
            ms: "Монтсеррат",
            mt: "Мальта",
            mu: "Маврікій",
            mv: "Мальдіви",
            mw: "Малаві",
            mx: "Мексика",
            my: "Малайзія",
            mz: "Мозамбік",
            na: "Намібія",
            nc: "Нова Каледонія",
            ne: "Нігер",
            nf: "Острів Норфолк",
            ng: "Нігерія",
            ni: "Нікараґуа",
            nl: "Нідерланди",
            no: "Норвеґія",
            np: "Непал",
            nr: "Науру",
            nu: "Ніуе",
            nz: "Нова Зеландія",
            om: "Оман",
            pa: "Панама",
            pe: "Перу",
            pf: "Французька Полінезія",
            pg: "Папуа-Нова Ґвінея",
            ph: "Філіппіни",
            pk: "Пакистан",
            pl: "Польща",
            pm: "Сен-Пʼєр і Мікелон",
            pr: "Пуерто-Ріко",
            ps: "Палестинські території",
            pt: "Портуґалія",
            pw: "Палау",
            py: "Параґвай",
            qa: "Катар",
            re: "Реюньйон",
            ro: "Румунія",
            rs: "Сербія",
            ru: "Росія",
            rw: "Руанда",
            sa: "Саудівська Аравія",
            sb: "Соломонові Острови",
            sc: "Сейшельські Острови",
            sd: "Судан",
            se: "Швеція",
            sg: "Сінгапур",
            sh: "Острів Святої Єлени",
            si: "Словенія",
            sj: "Шпіцберген та Ян-Маєн",
            sk: "Словаччина",
            sl: "Сьєрра-Леоне",
            sm: "Сан-Маріно",
            sn: "Сенегал",
            so: "Сомалі",
            sr: "Сурінам",
            ss: "Південний Судан",
            st: "Сан-Томе і Прінсіпі",
            sv: "Сальвадор",
            sx: "Сінт-Мартен",
            sy: "Сирія",
            sz: "Есватіні",
            tc: "Острови Теркс і Кайкос",
            td: "Чад",
            tg: "Того",
            th: "Таїланд",
            tj: "Таджикистан",
            tk: "Токелау",
            tl: "Тімор-Лешті",
            tm: "Туркменістан",
            tn: "Туніс",
            to: "Тонґа",
            tr: "Туреччина",
            tt: "Трінідад і Тобаґо",
            tv: "Тувалу",
            tw: "Тайвань",
            tz: "Танзанія",
            ua: "Україна",
            ug: "Уганда",
            us: "Сполучені Штати",
            uy: "Уруґвай",
            uz: "Узбекистан",
            va: "Ватикан",
            vc: "Сент-Вінсент і Ґренадіни",
            ve: "Венесуела",
            vg: "Британські Віргінські острови",
            vi: "Віргінські острови, США",
            vn: "Вʼєтнам",
            vu: "Вануату",
            wf: "Уолліс і Футуна",
            ws: "Самоа",
            ye: "Ємен",
            yt: "Майотта",
            za: "Південно-Африканська Республіка",
            zm: "Замбія",
            zw: "Зімбабве"
        };
        const uk_countries = uk_countries_countryTranslations;
        const uk_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Обрана країна",
            noCountrySelected: "Країну не обрано",
            countryListAriaLabel: "Список країн",
            searchPlaceholder: "Шукати",
            zeroSearchResults: "Результатів не знайдено",
            oneSearchResult: "Знайдено 1 результат",
            multipleSearchResults: "Знайдено ${count} результатів",
            ac: "Острів Вознесіння",
            xk: "Косово"
        };
        const uk_interface = uk_interface_interfaceTranslations;
        const ur_countries_countryTranslations = {
            ad: "انڈورا",
            ae: "متحدہ عرب امارات",
            af: "افغانستان",
            ag: "انٹیگوا اور باربودا",
            ai: "انگوئیلا",
            al: "البانیہ",
            am: "آرمینیا",
            ao: "انگولا",
            ar: "ارجنٹینا",
            as: "امریکی ساموآ",
            at: "آسٹریا",
            au: "آسٹریلیا",
            aw: "اروبا",
            ax: "آلینڈ آئلینڈز",
            az: "آذربائیجان",
            ba: "بوسنیا اور ہرزیگووینا",
            bb: "بارباڈوس",
            bd: "بنگلہ دیش",
            be: "بیلجیم",
            bf: "برکینا فاسو",
            bg: "بلغاریہ",
            bh: "بحرین",
            bi: "برونڈی",
            bj: "بینن",
            bl: "سینٹ برتھلیمی",
            bm: "برمودا",
            bn: "برونائی",
            bo: "بولیویا",
            bq: "کریبیائی نیدرلینڈز",
            br: "برازیل",
            bs: "بہاماس",
            bt: "بھوٹان",
            bw: "بوتسوانا",
            by: "بیلاروس",
            bz: "بیلائز",
            ca: "کینیڈا",
            cc: "کوکوس (کیلنگ) جزائر",
            cd: "کانگو - کنشاسا",
            cf: "وسط افریقی جمہوریہ",
            cg: "کانگو - برازاویلے",
            ch: "سوئٹزر لینڈ",
            ci: "کوٹ ڈی آئیوری",
            ck: "کک آئلینڈز",
            cl: "چلی",
            cm: "کیمرون",
            cn: "چین",
            co: "کولمبیا",
            cr: "کوسٹا ریکا",
            cu: "کیوبا",
            cv: "کیپ ورڈی",
            cw: "کیوراکاؤ",
            cx: "جزیرہ کرسمس",
            cy: "قبرص",
            cz: "چیکیا",
            de: "جرمنی",
            dj: "جبوتی",
            dk: "ڈنمارک",
            dm: "ڈومنیکا",
            do: "جمہوریہ ڈومينيکن",
            dz: "الجیریا",
            ec: "ایکواڈور",
            ee: "اسٹونیا",
            eg: "مصر",
            eh: "مغربی صحارا",
            er: "اریٹیریا",
            es: "ہسپانیہ",
            et: "ایتھوپیا",
            fi: "فن لینڈ",
            fj: "فجی",
            fk: "فاکلینڈ جزائر",
            fm: "مائکرونیشیا",
            fo: "جزائر فارو",
            fr: "فرانس",
            ga: "گیبون",
            gb: "سلطنت متحدہ",
            gd: "گریناڈا",
            ge: "جارجیا",
            gf: "فرینچ گیانا",
            gg: "گوئرنسی",
            gh: "گھانا",
            gi: "جبل الطارق",
            gl: "گرین لینڈ",
            gm: "گیمبیا",
            gn: "گنی",
            gp: "گواڈیلوپ",
            gq: "استوائی گیانا",
            gr: "یونان",
            gt: "گواٹے مالا",
            gu: "گوام",
            gw: "گنی بساؤ",
            gy: "گیانا",
            hk: "ہانگ کانگ SAR چین",
            hn: "ہونڈاروس",
            hr: "کروشیا",
            ht: "ہیٹی",
            hu: "ہنگری",
            id: "انڈونیشیا",
            ie: "آئرلینڈ",
            il: "اسرائیل",
            im: "آئل آف مین",
            in: "بھارت",
            io: "برطانوی بحر ہند کا علاقہ",
            iq: "عراق",
            ir: "ایران",
            is: "آئس لینڈ",
            it: "اٹلی",
            je: "جرسی",
            jm: "جمائیکا",
            jo: "اردن",
            jp: "جاپان",
            ke: "کینیا",
            kg: "کرغزستان",
            kh: "کمبوڈیا",
            ki: "کریباتی",
            km: "کوموروس",
            kn: "سینٹ کٹس اور نیویس",
            kp: "شمالی کوریا",
            kr: "جنوبی کوریا",
            kw: "کویت",
            ky: "کیمین آئلینڈز",
            kz: "قزاخستان",
            la: "لاؤس",
            lb: "لبنان",
            lc: "سینٹ لوسیا",
            li: "لیشٹنسٹائن",
            lk: "سری لنکا",
            lr: "لائبیریا",
            ls: "لیسوتھو",
            lt: "لیتھونیا",
            lu: "لکسمبرگ",
            lv: "لٹویا",
            ly: "لیبیا",
            ma: "مراکش",
            mc: "موناکو",
            md: "مالدووا",
            me: "مونٹے نیگرو",
            mf: "سینٹ مارٹن",
            mg: "مڈغاسکر",
            mh: "مارشل آئلینڈز",
            mk: "شمالی مقدونیہ",
            ml: "مالی",
            mm: "میانمار (برما)",
            mn: "منگولیا",
            mo: "مکاؤ SAR چین",
            mp: "شمالی ماریانا آئلینڈز",
            mq: "مارٹینک",
            mr: "موریطانیہ",
            ms: "مونٹسیراٹ",
            mt: "مالٹا",
            mu: "ماریشس",
            mv: "مالدیپ",
            mw: "ملاوی",
            mx: "میکسیکو",
            my: "ملائشیا",
            mz: "موزمبیق",
            na: "نامیبیا",
            nc: "نیو کلیڈونیا",
            ne: "نائجر",
            nf: "نارفوک آئلینڈ",
            ng: "نائجیریا",
            ni: "نکاراگووا",
            nl: "نیدر لینڈز",
            no: "ناروے",
            np: "نیپال",
            nr: "نؤرو",
            nu: "نیئو",
            nz: "نیوزی لینڈ",
            om: "عمان",
            pa: "پانامہ",
            pe: "پیرو",
            pf: "فرانسیسی پولینیشیا",
            pg: "پاپوآ نیو گنی",
            ph: "فلپائن",
            pk: "پاکستان",
            pl: "پولینڈ",
            pm: "سینٹ پیئر اور میکلیئون",
            pr: "پیورٹو ریکو",
            ps: "فلسطینی خطے",
            pt: "پرتگال",
            pw: "پلاؤ",
            py: "پیراگوئے",
            qa: "قطر",
            re: "ری یونین",
            ro: "رومانیہ",
            rs: "سربیا",
            ru: "روس",
            rw: "روانڈا",
            sa: "سعودی عرب",
            sb: "سولومن آئلینڈز",
            sc: "سشلیز",
            sd: "سوڈان",
            se: "سویڈن",
            sg: "سنگاپور",
            sh: "سینٹ ہیلینا",
            si: "سلووینیا",
            sj: "سوالبرڈ اور جان ماین",
            sk: "سلوواکیہ",
            sl: "سیرالیون",
            sm: "سان مارینو",
            sn: "سینیگل",
            so: "صومالیہ",
            sr: "سورینام",
            ss: "جنوبی سوڈان",
            st: "ساؤ ٹومے اور پرنسپے",
            sv: "ال سلواڈور",
            sx: "سنٹ مارٹن",
            sy: "شام",
            sz: "سواتنی",
            tc: "ٹرکس اور کیکوس جزائر",
            td: "چاڈ",
            tg: "ٹوگو",
            th: "تھائی لینڈ",
            tj: "تاجکستان",
            tk: "ٹوکیلاؤ",
            tl: "تیمور لیسٹ",
            tm: "ترکمانستان",
            tn: "تونس",
            to: "ٹونگا",
            tr: "ترکی",
            tt: "ترینیداد اور ٹوباگو",
            tv: "ٹووالو",
            tw: "تائیوان",
            tz: "تنزانیہ",
            ua: "یوکرین",
            ug: "یوگنڈا",
            us: "ریاست ہائے متحدہ امریکہ",
            uy: "یوروگوئے",
            uz: "ازبکستان",
            va: "ویٹیکن سٹی",
            vc: "سینٹ ونسنٹ اور گرینیڈائنز",
            ve: "وینزوئیلا",
            vg: "برٹش ورجن آئلینڈز",
            vi: "امریکی ورجن آئلینڈز",
            vn: "ویتنام",
            vu: "وینوآٹو",
            wf: "ویلیز اور فیوٹیونا",
            ws: "ساموآ",
            ye: "یمن",
            yt: "مایوٹ",
            za: "جنوبی افریقہ",
            zm: "زامبیا",
            zw: "زمبابوے"
        };
        const ur_countries = ur_countries_countryTranslations;
        const ur_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "منتخب ملک",
            noCountrySelected: "کوئی ملک منتخب نہیں کیا گیا۔",
            countryListAriaLabel: "ممالک کی فہرست",
            searchPlaceholder: "تلاش کریں۔",
            zeroSearchResults: "کوئی نتیجہ نہیں",
            oneSearchResult: "1 نتیجہ ملا",
            multipleSearchResults: "${count} نتائج ملے",
            ac: "ایسنشن جزیرہ",
            xk: "کوسوو"
        };
        const ur_interface = ur_interface_interfaceTranslations;
        const vi_countries_countryTranslations = {
            ad: "Andorra",
            ae: "Các Tiểu Vương quốc Ả Rập Thống nhất",
            af: "Afghanistan",
            ag: "Antigua và Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "Samoa thuộc Mỹ",
            at: "Áo",
            au: "Australia",
            aw: "Aruba",
            ax: "Quần đảo Åland",
            az: "Azerbaijan",
            ba: "Bosnia và Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Bỉ",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "St. Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Ca-ri-bê Hà Lan",
            br: "Brazil",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Canada",
            cc: "Quần đảo Cocos (Keeling)",
            cd: "Congo - Kinshasa",
            cf: "Cộng hòa Trung Phi",
            cg: "Congo - Brazzaville",
            ch: "Thụy Sĩ",
            ci: "Côte d’Ivoire",
            ck: "Quần đảo Cook",
            cl: "Chile",
            cm: "Cameroon",
            cn: "Trung Quốc",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cape Verde",
            cw: "Curaçao",
            cx: "Đảo Giáng Sinh",
            cy: "Síp",
            cz: "Séc",
            de: "Đức",
            dj: "Djibouti",
            dk: "Đan Mạch",
            dm: "Dominica",
            do: "Cộng hòa Dominica",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Ai Cập",
            eh: "Tây Sahara",
            er: "Eritrea",
            es: "Tây Ban Nha",
            et: "Ethiopia",
            fi: "Phần Lan",
            fj: "Fiji",
            fk: "Quần đảo Falkland",
            fm: "Micronesia",
            fo: "Quần đảo Faroe",
            fr: "Pháp",
            ga: "Gabon",
            gb: "Vương quốc Anh",
            gd: "Grenada",
            ge: "Georgia",
            gf: "Guiana thuộc Pháp",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Greenland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Guinea Xích Đạo",
            gr: "Hy Lạp",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hồng Kông, Trung Quốc",
            hn: "Honduras",
            hr: "Croatia",
            ht: "Haiti",
            hu: "Hungary",
            id: "Indonesia",
            ie: "Ireland",
            il: "Israel",
            im: "Đảo Man",
            in: "Ấn Độ",
            io: "Lãnh thổ Ấn Độ Dương thuộc Anh",
            iq: "Iraq",
            ir: "Iran",
            is: "Iceland",
            it: "Italy",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordan",
            jp: "Nhật Bản",
            ke: "Kenya",
            kg: "Kyrgyzstan",
            kh: "Campuchia",
            ki: "Kiribati",
            km: "Comoros",
            kn: "St. Kitts và Nevis",
            kp: "Triều Tiên",
            kr: "Hàn Quốc",
            kw: "Kuwait",
            ky: "Quần đảo Cayman",
            kz: "Kazakhstan",
            la: "Lào",
            lb: "Li-băng",
            lc: "St. Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Litva",
            lu: "Luxembourg",
            lv: "Latvia",
            ly: "Libya",
            ma: "Ma-rốc",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "St. Martin",
            mg: "Madagascar",
            mh: "Quần đảo Marshall",
            mk: "Bắc Macedonia",
            ml: "Mali",
            mm: "Myanmar (Miến Điện)",
            mn: "Mông Cổ",
            mo: "Macao, Trung Quốc",
            mp: "Quần đảo Bắc Mariana",
            mq: "Martinique",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldives",
            mw: "Malawi",
            mx: "Mexico",
            my: "Malaysia",
            mz: "Mozambique",
            na: "Namibia",
            nc: "New Caledonia",
            ne: "Niger",
            nf: "Đảo Norfolk",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Hà Lan",
            no: "Na Uy",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "New Zealand",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "Polynesia thuộc Pháp",
            pg: "Papua New Guinea",
            ph: "Philippines",
            pk: "Pakistan",
            pl: "Ba Lan",
            pm: "Saint Pierre và Miquelon",
            pr: "Puerto Rico",
            ps: "Lãnh thổ Palestine",
            pt: "Bồ Đào Nha",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Romania",
            rs: "Serbia",
            ru: "Nga",
            rw: "Rwanda",
            sa: "Ả Rập Xê-út",
            sb: "Quần đảo Solomon",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Thụy Điển",
            sg: "Singapore",
            sh: "St. Helena",
            si: "Slovenia",
            sj: "Svalbard và Jan Mayen",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "Nam Sudan",
            st: "São Tomé và Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syria",
            sz: "Swaziland",
            tc: "Quần đảo Turks và Caicos",
            td: "Chad",
            tg: "Togo",
            th: "Thái Lan",
            tj: "Tajikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Thổ Nhĩ Kỳ",
            tt: "Trinidad và Tobago",
            tv: "Tuvalu",
            tw: "Đài Loan",
            tz: "Tanzania",
            ua: "Ukraina",
            ug: "Uganda",
            us: "Hoa Kỳ",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Thành Vatican",
            vc: "St. Vincent và Grenadines",
            ve: "Venezuela",
            vg: "Quần đảo Virgin thuộc Anh",
            vi: "Quần đảo Virgin thuộc Mỹ",
            vn: "Việt Nam",
            vu: "Vanuatu",
            wf: "Wallis và Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "Nam Phi",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        const vi_countries = vi_countries_countryTranslations;
        const vi_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "Quốc gia đã chọn",
            noCountrySelected: "Không có quốc gia nào được chọn",
            countryListAriaLabel: "Danh sách các quốc gia",
            searchPlaceholder: "Khám xét",
            zeroSearchResults: "Không tìm thấy kết quả nào",
            oneSearchResult: "Đã tìm thấy 1 kết quả",
            multipleSearchResults: "Đã tìm thấy ${count} kết quả",
            ac: "Đảo Ascension",
            xk: "Kosovo"
        };
        const vi_interface = vi_interface_interfaceTranslations;
        const zh_countries_countryTranslations = {
            ad: "安道尔",
            ae: "阿拉伯联合酋长国",
            af: "阿富汗",
            ag: "安提瓜和巴布达",
            ai: "安圭拉",
            al: "阿尔巴尼亚",
            am: "亚美尼亚",
            ao: "安哥拉",
            ar: "阿根廷",
            as: "美属萨摩亚",
            at: "奥地利",
            au: "澳大利亚",
            aw: "阿鲁巴",
            ax: "奥兰群岛",
            az: "阿塞拜疆",
            ba: "波斯尼亚和黑塞哥维那",
            bb: "巴巴多斯",
            bd: "孟加拉国",
            be: "比利时",
            bf: "布基纳法索",
            bg: "保加利亚",
            bh: "巴林",
            bi: "布隆迪",
            bj: "贝宁",
            bl: "圣巴泰勒米",
            bm: "百慕大",
            bn: "文莱",
            bo: "玻利维亚",
            bq: "荷属加勒比区",
            br: "巴西",
            bs: "巴哈马",
            bt: "不丹",
            bw: "博茨瓦纳",
            by: "白俄罗斯",
            bz: "伯利兹",
            ca: "加拿大",
            cc: "科科斯（基林）群岛",
            cd: "刚果（金）",
            cf: "中非共和国",
            cg: "刚果（布）",
            ch: "瑞士",
            ci: "科特迪瓦",
            ck: "库克群岛",
            cl: "智利",
            cm: "喀麦隆",
            cn: "中国",
            co: "哥伦比亚",
            cr: "哥斯达黎加",
            cu: "古巴",
            cv: "佛得角",
            cw: "库拉索",
            cx: "圣诞岛",
            cy: "塞浦路斯",
            cz: "捷克",
            de: "德国",
            dj: "吉布提",
            dk: "丹麦",
            dm: "多米尼克",
            do: "多米尼加共和国",
            dz: "阿尔及利亚",
            ec: "厄瓜多尔",
            ee: "爱沙尼亚",
            eg: "埃及",
            eh: "西撒哈拉",
            er: "厄立特里亚",
            es: "西班牙",
            et: "埃塞俄比亚",
            fi: "芬兰",
            fj: "斐济",
            fk: "福克兰群岛",
            fm: "密克罗尼西亚",
            fo: "法罗群岛",
            fr: "法国",
            ga: "加蓬",
            gb: "英国",
            gd: "格林纳达",
            ge: "格鲁吉亚",
            gf: "法属圭亚那",
            gg: "根西岛",
            gh: "加纳",
            gi: "直布罗陀",
            gl: "格陵兰",
            gm: "冈比亚",
            gn: "几内亚",
            gp: "瓜德罗普",
            gq: "赤道几内亚",
            gr: "希腊",
            gt: "危地马拉",
            gu: "关岛",
            gw: "几内亚比绍",
            gy: "圭亚那",
            hk: "中国香港特别行政区",
            hn: "洪都拉斯",
            hr: "克罗地亚",
            ht: "海地",
            hu: "匈牙利",
            id: "印度尼西亚",
            ie: "爱尔兰",
            il: "以色列",
            im: "马恩岛",
            in: "印度",
            io: "英属印度洋领地",
            iq: "伊拉克",
            ir: "伊朗",
            is: "冰岛",
            it: "意大利",
            je: "泽西岛",
            jm: "牙买加",
            jo: "约旦",
            jp: "日本",
            ke: "肯尼亚",
            kg: "吉尔吉斯斯坦",
            kh: "柬埔寨",
            ki: "基里巴斯",
            km: "科摩罗",
            kn: "圣基茨和尼维斯",
            kp: "朝鲜",
            kr: "韩国",
            kw: "科威特",
            ky: "开曼群岛",
            kz: "哈萨克斯坦",
            la: "老挝",
            lb: "黎巴嫩",
            lc: "圣卢西亚",
            li: "列支敦士登",
            lk: "斯里兰卡",
            lr: "利比里亚",
            ls: "莱索托",
            lt: "立陶宛",
            lu: "卢森堡",
            lv: "拉脱维亚",
            ly: "利比亚",
            ma: "摩洛哥",
            mc: "摩纳哥",
            md: "摩尔多瓦",
            me: "黑山",
            mf: "法属圣马丁",
            mg: "马达加斯加",
            mh: "马绍尔群岛",
            mk: "北马其顿",
            ml: "马里",
            mm: "缅甸",
            mn: "蒙古",
            mo: "中国澳门特别行政区",
            mp: "北马里亚纳群岛",
            mq: "马提尼克",
            mr: "毛里塔尼亚",
            ms: "蒙特塞拉特",
            mt: "马耳他",
            mu: "毛里求斯",
            mv: "马尔代夫",
            mw: "马拉维",
            mx: "墨西哥",
            my: "马来西亚",
            mz: "莫桑比克",
            na: "纳米比亚",
            nc: "新喀里多尼亚",
            ne: "尼日尔",
            nf: "诺福克岛",
            ng: "尼日利亚",
            ni: "尼加拉瓜",
            nl: "荷兰",
            no: "挪威",
            np: "尼泊尔",
            nr: "瑙鲁",
            nu: "纽埃",
            nz: "新西兰",
            om: "阿曼",
            pa: "巴拿马",
            pe: "秘鲁",
            pf: "法属波利尼西亚",
            pg: "巴布亚新几内亚",
            ph: "菲律宾",
            pk: "巴基斯坦",
            pl: "波兰",
            pm: "圣皮埃尔和密克隆群岛",
            pr: "波多黎各",
            ps: "巴勒斯坦领土",
            pt: "葡萄牙",
            pw: "帕劳",
            py: "巴拉圭",
            qa: "卡塔尔",
            re: "留尼汪",
            ro: "罗马尼亚",
            rs: "塞尔维亚",
            ru: "俄罗斯",
            rw: "卢旺达",
            sa: "沙特阿拉伯",
            sb: "所罗门群岛",
            sc: "塞舌尔",
            sd: "苏丹",
            se: "瑞典",
            sg: "新加坡",
            sh: "圣赫勒拿",
            si: "斯洛文尼亚",
            sj: "斯瓦尔巴和扬马延",
            sk: "斯洛伐克",
            sl: "塞拉利昂",
            sm: "圣马力诺",
            sn: "塞内加尔",
            so: "索马里",
            sr: "苏里南",
            ss: "南苏丹",
            st: "圣多美和普林西比",
            sv: "萨尔瓦多",
            sx: "荷属圣马丁",
            sy: "叙利亚",
            sz: "斯威士兰",
            tc: "特克斯和凯科斯群岛",
            td: "乍得",
            tg: "多哥",
            th: "泰国",
            tj: "塔吉克斯坦",
            tk: "托克劳",
            tl: "东帝汶",
            tm: "土库曼斯坦",
            tn: "突尼斯",
            to: "汤加",
            tr: "土耳其",
            tt: "特立尼达和多巴哥",
            tv: "图瓦卢",
            tw: "台湾",
            tz: "坦桑尼亚",
            ua: "乌克兰",
            ug: "乌干达",
            us: "美国",
            uy: "乌拉圭",
            uz: "乌兹别克斯坦",
            va: "梵蒂冈",
            vc: "圣文森特和格林纳丁斯",
            ve: "委内瑞拉",
            vg: "英属维尔京群岛",
            vi: "美属维尔京群岛",
            vn: "越南",
            vu: "瓦努阿图",
            wf: "瓦利斯和富图纳",
            ws: "萨摩亚",
            ye: "也门",
            yt: "马约特",
            za: "南非",
            zm: "赞比亚",
            zw: "津巴布韦"
        };
        const zh_countries = zh_countries_countryTranslations;
        const zh_interface_interfaceTranslations = {
            selectedCountryAriaLabel: "所选国家",
            noCountrySelected: "未选择国家/地区",
            countryListAriaLabel: "国家名单",
            searchPlaceholder: "搜索",
            zeroSearchResults: "未找到结果",
            oneSearchResult: "找到 1 个结果",
            multipleSearchResults: "找到 ${count} 个结果",
            ac: "阿森松岛",
            xk: "科索沃"
        };
        const zh_interface = zh_interface_interfaceTranslations;
        function initSliders() {
            document.querySelectorAll(".trial-lessons__slider").forEach((slider => {
                new swiper_core_Swiper(".trial-lessons__slider", {
                    modules: [ Navigation ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 3.6,
                    spaceBetween: 16,
                    speed: 800,
                    loop: true,
                    navigation: {
                        prevEl: ".trial-lessons__prev",
                        nextEl: ".trial-lessons__next"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.12,
                            spaceBetween: 12,
                            initialSlide: 0
                        },
                        640: {
                            slidesPerView: 1.4,
                            spaceBetween: 12
                        },
                        768: {
                            slidesPerView: 2.4,
                            spaceBetween: 14
                        },
                        992: {
                            slidesPerView: 3.4,
                            spaceBetween: 16
                        },
                        1268: {
                            slidesPerView: 3.7,
                            spaceBetween: 16
                        }
                    },
                    on: {
                        init: function() {
                            updateDarkenedSlide(this);
                        },
                        slideChange: function() {
                            updateDarkenedSlide(this);
                        },
                        resize: function() {
                            updateDarkenedSlide(this);
                        },
                        breakpoint: function() {
                            updateDarkenedSlide(this);
                        }
                    }
                });
                function updateDarkenedSlide(swiper) {
                    const container = swiper.el;
                    const slides = container.querySelectorAll(".trial-lessons__slider .swiper-slide");
                    const slidesPerView = swiper.params.slidesPerView;
                    const totalSlides = slides.length;
                    const activeIndex = swiper.activeIndex;
                    slides.forEach((slide => slide.classList.remove("swiper-slide-darkened")));
                    if (slidesPerView % 1 !== 0) {
                        let lastVisibleIndex;
                        if (slidesPerView % 1 !== 0) lastVisibleIndex = Math.min(Math.floor(slidesPerView), totalSlides - 1 - activeIndex);
                        const currentIndex = activeIndex + lastVisibleIndex;
                        if (currentIndex >= 0 && currentIndex < totalSlides) slides[currentIndex].classList.add("swiper-slide-darkened"); else if (totalSlides > 0) slides[totalSlides - 1].classList.add("swiper-slide-darkened");
                    }
                }
            }));
            if (document.querySelector(".reviews__slider")) new swiper_core_Swiper(".reviews__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 2.5,
                spaceBetween: 16,
                speed: 800,
                resistanceRatio: 0,
                loop: true,
                navigation: {
                    prevEl: ".reviews__left",
                    nextEl: ".reviews__right"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 12
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    },
                    1268: {
                        slidesPerView: 2.5,
                        spaceBetween: 16
                    }
                },
                on: {}
            });
            if (document.querySelector(".teacher__slider")) new swiper_core_Swiper(".teacher__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 3.4,
                spaceBetween: 16,
                autoHeight: true,
                speed: 800,
                loop: true,
                navigation: {
                    prevEl: ".teacher__left",
                    nextEl: ".teacher__right"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 8
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 8
                    },
                    768: {
                        slidesPerView: 1.7,
                        spaceBetween: 10
                    },
                    992: {
                        slidesPerView: 2.4,
                        spaceBetween: 12
                    },
                    1268: {
                        slidesPerView: 2.44,
                        spaceBetween: 14
                    },
                    1405: {
                        slidesPerView: 2.47,
                        spaceBetween: 14
                    },
                    1660: {
                        slidesPerView: 3.63,
                        spaceBetween: 16
                    }
                },
                on: {}
            });
            if (document.querySelector(".interestingtopics-blog__slider")) new swiper_core_Swiper(".interestingtopics-blog__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 14,
                speed: 800,
                navigation: {
                    prevEl: ".interestingtopics-blog__prev",
                    nextEl: ".interestingtopics-blog__next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1.04,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 12
                    },
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: 14
                    },
                    1268: {
                        slidesPerView: 3,
                        spaceBetween: 14
                    }
                },
                on: {}
            });
            if (document.querySelector(".blog-patter__gallery")) {
                const galleryPatterSliderNoMobile = new swiper_core_Swiper(".gallery-patter__slider--no-mobile", {
                    modules: [ Navigation, EffectCoverflow ],
                    slidesPerView: 5,
                    speed: 600,
                    loop: true,
                    effect: "coverflow",
                    grabCursor: true,
                    centeredSlides: true,
                    initialSlide: 2,
                    preventClicks: true,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 80,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false
                    },
                    navigation: {
                        prevEl: ".gallery-patter__prev",
                        nextEl: ".gallery-patter__next"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.6,
                            spaceBetween: 0,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 120,
                                depth: 0,
                                modifier: 1,
                                slideShadows: false
                            }
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        },
                        1268: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        },
                        1660: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        }
                    },
                    on: {
                        slideChange: function(swiper) {
                            const slides = swiper.slides;
                            const nextSlide = swiper.slides[swiper.activeIndex + 1];
                            const prevSlide = swiper.slides[swiper.activeIndex - 1];
                            slides.forEach((slide => {
                                slide.classList.remove("swiper-slide-last", "swiper-slide-first");
                            }));
                            if (nextSlide) {
                                const rotateNext = nextSlide.nextElementSibling;
                                if (rotateNext) rotateNext.classList.add("swiper-slide-last");
                            }
                            if (prevSlide) {
                                const rotatePrev = prevSlide.previousElementSibling;
                                if (rotatePrev) rotatePrev.classList.add("swiper-slide-first");
                            }
                        }
                    }
                });
                const galleryPatterSliderMobile = new swiper_core_Swiper(".gallery-patter__slider--mobile", {
                    modules: [ Navigation, EffectCoverflow ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 5,
                    spaceBetween: 0,
                    speed: 600,
                    loop: true,
                    effect: "coverflow",
                    grabCursor: true,
                    centeredSlides: true,
                    initialSlide: 3,
                    preventClicks: true,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 80,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false
                    },
                    navigation: {
                        prevEl: ".gallery-patter__prev",
                        nextEl: ".gallery-patter__next"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.6,
                            spaceBetween: 0,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 120,
                                depth: 0,
                                modifier: 1,
                                slideShadows: false
                            }
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        },
                        1268: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        },
                        1660: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        }
                    },
                    on: {
                        slideChange: function(swiper) {
                            const slides = swiper.slides;
                            const nextSlide = swiper.slides[swiper.activeIndex + 1];
                            const prevSlide = swiper.slides[swiper.activeIndex - 1];
                            slides.forEach((slide => {
                                slide.classList.remove("swiper-slide-last", "swiper-slide-first");
                            }));
                            if (nextSlide) {
                                const rotateNext = nextSlide.nextElementSibling;
                                if (rotateNext) rotateNext.classList.add("swiper-slide-last");
                            }
                            if (prevSlide) {
                                const rotatePrev = prevSlide.previousElementSibling;
                                if (rotatePrev) rotatePrev.classList.add("swiper-slide-first");
                            }
                        }
                    }
                });
                galleryPatterSliderNoMobile.slidePrev();
                setTimeout((() => {
                    galleryPatterSliderNoMobile.slidePrev();
                }), 800);
                galleryPatterSliderMobile.slidePrev();
                setTimeout((() => {
                    galleryPatterSliderMobile.slidePrev();
                }), 300);
            }
            if (document.querySelector(".hero__slider")) {
                const heroSlider = new swiper_core_Swiper(".hero__slider", {
                    modules: [ Navigation, EffectCoverflow ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 5,
                    spaceBetween: 0,
                    speed: 600,
                    loop: true,
                    effect: "coverflow",
                    grabCursor: true,
                    centeredSlides: true,
                    initialSlide: 2,
                    preventClicks: true,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 80,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false
                    },
                    navigation: {
                        prevEl: ".hero__button-left",
                        nextEl: ".hero__button-right"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.6,
                            spaceBetween: 0,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 120,
                                depth: 0,
                                modifier: 1,
                                slideShadows: false
                            }
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 0
                        },
                        1268: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        },
                        1660: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        }
                    },
                    on: {
                        slideChange: function(swiper) {
                            const slides = swiper.slides;
                            const nextSlide = swiper.slides[swiper.activeIndex + 1];
                            const prevSlide = swiper.slides[swiper.activeIndex - 1];
                            slides.forEach((slide => {
                                slide.classList.remove("swiper-slide-last", "swiper-slide-first");
                            }));
                            if (nextSlide) {
                                const rotateNext = nextSlide.nextElementSibling;
                                if (rotateNext) rotateNext.classList.add("swiper-slide-last");
                            }
                            if (prevSlide) {
                                const rotatePrev = prevSlide.previousElementSibling;
                                if (rotatePrev) rotatePrev.classList.add("swiper-slide-first");
                            }
                        }
                    }
                });
                heroSlider.slidePrev();
                setTimeout((() => {
                    heroSlider.slidePrev();
                }), 300);
            }
            if (document.querySelector(".articles-blog__slider")) new swiper_core_Swiper(".articles-blog__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 14,
                speed: 800,
                navigation: {
                    prevEl: ".articles-blog__prev",
                    nextEl: ".articles-blog__next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 12
                    },
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: 14
                    },
                    1268: {
                        slidesPerView: 3,
                        spaceBetween: 14
                    }
                },
                on: {}
            });
            if (document.querySelector(".mobile-homeblog__slider")) new swiper_core_Swiper(".mobile-homeblog__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 14,
                speed: 800,
                navigation: {
                    prevEl: ".mobile-homeblog__prev",
                    nextEl: ".mobile-homeblog__next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1.05,
                        spaceBetween: 14
                    },
                    500: {
                        slidesPerView: 1.5,
                        spaceBetween: 14
                    },
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: 14
                    },
                    1268: {
                        slidesPerView: 3,
                        spaceBetween: 14
                    }
                },
                on: {}
            });
            if (document.querySelector(".proposalsection__slider")) {
                const pageToSlideIndex = {
                    "basic.html": 1,
                    "extern.html": 0,
                    "deepened.html": 2,
                    "issuing.html": 3
                };
                const currentPage = window.location.pathname.split("/").pop();
                const activeSlideIndex = pageToSlideIndex[currentPage] || 0;
                new swiper_core_Swiper(".proposalsection__slider", {
                    modules: [ Navigation ],
                    observer: true,
                    observeParents: true,
                    slidesPerView: 3,
                    spaceBetween: 14,
                    autoHeight: true,
                    speed: 800,
                    initialSlide: activeSlideIndex,
                    navigation: {
                        prevEl: ".proposalsection__prev",
                        nextEl: ".proposalsection__next"
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.15,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 12
                        },
                        992: {
                            slidesPerView: 2.5,
                            spaceBetween: 14
                        },
                        1268: {
                            slidesPerView: 3,
                            spaceBetween: 14
                        }
                    },
                    on: {
                        init: function() {
                            this.slides.forEach((slide => {
                                slide.addEventListener("click", (() => {
                                    this.slides.forEach((s => s.classList.remove("proposalsection__slide--active")));
                                    slide.classList.add("proposalsection__slide--active");
                                }));
                            }));
                        },
                        slideChange: function() {
                            this.slides.forEach((slide => {
                                slide.addEventListener("click", (() => {
                                    this.slides.forEach((s => s.classList.remove("proposalsection__slide--active")));
                                    slide.classList.add("proposalsection__slide--active");
                                }));
                            }));
                        }
                    }
                });
            }
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        if (item.dataset.watch === "navigator" && !item.dataset.watchThreshold) {
                            let valueOfThreshold;
                            if (item.clientHeight > 2) {
                                valueOfThreshold = window.innerHeight / 2 / (item.clientHeight - 1);
                                if (valueOfThreshold > 1) valueOfThreshold = 1;
                            } else valueOfThreshold = 1;
                            item.setAttribute("data-watch-threshold", valueOfThreshold.toFixed(2));
                        }
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if (paramsWatch.threshold === "prx") {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                console.log(configWatcher);
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? FLS(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        class parallax_Parallax {
            constructor(elements) {
                if (elements.length) this.elements = Array.from(elements).map((el => new parallax_Parallax.Each(el, this.options)));
            }
            destroyEvents() {
                this.elements.forEach((el => {
                    el.destroyEvents();
                }));
            }
            setEvents() {
                this.elements.forEach((el => {
                    el.setEvents();
                }));
            }
        }
        parallax_Parallax.Each = class {
            constructor(parent) {
                this.parent = parent;
                this.elements = this.parent.querySelectorAll("[data-prlx]");
                this.animation = this.animationFrame.bind(this);
                this.offset = 0;
                this.value = 0;
                this.smooth = parent.dataset.prlxSmooth ? Number(parent.dataset.prlxSmooth) : 15;
                this.setEvents();
            }
            setEvents() {
                this.animationID = window.requestAnimationFrame(this.animation);
            }
            destroyEvents() {
                window.cancelAnimationFrame(this.animationID);
            }
            animationFrame() {
                const topToWindow = this.parent.getBoundingClientRect().top;
                const heightParent = this.parent.offsetHeight;
                const heightWindow = window.innerHeight;
                const positionParent = {
                    top: topToWindow - heightWindow,
                    bottom: topToWindow + heightParent
                };
                const centerPoint = this.parent.dataset.prlxCenter ? this.parent.dataset.prlxCenter : "center";
                if (positionParent.top < 30 && positionParent.bottom > -30) switch (centerPoint) {
                  case "top":
                    this.offset = -1 * topToWindow;
                    break;

                  case "center":
                    this.offset = heightWindow / 2 - (topToWindow + heightParent / 2);
                    break;

                  case "bottom":
                    this.offset = heightWindow - (topToWindow + heightParent);
                    break;
                }
                this.value += (this.offset - this.value) / this.smooth;
                this.animationID = window.requestAnimationFrame(this.animation);
                this.elements.forEach((el => {
                    const parameters = {
                        axis: el.dataset.axis ? el.dataset.axis : "v",
                        direction: el.dataset.direction ? el.dataset.direction + "1" : "-1",
                        coefficient: el.dataset.coefficient ? Number(el.dataset.coefficient) : 5,
                        additionalProperties: el.dataset.properties ? el.dataset.properties : ""
                    };
                    this.parameters(el, parameters);
                }));
            }
            parameters(el, parameters) {
                if (parameters.axis == "v") el.style.transform = `translate3D(0, ${(parameters.direction * (this.value / parameters.coefficient)).toFixed(2)}px,0) ${parameters.additionalProperties}`; else if (parameters.axis == "h") el.style.transform = `translate3D(${(parameters.direction * (this.value / parameters.coefficient)).toFixed(2)}px,0,0) ${parameters.additionalProperties}`;
            }
        };
        if (document.querySelectorAll("[data-prlx-parent]")) modules_flsModules.parallax = new parallax_Parallax(document.querySelectorAll("[data-prlx-parent]"));
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767.98";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint / 16}em),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const dynamic_adapt_da = new DynamicAdapt("max");
        dynamic_adapt_da.init();
        var intlTelInput = __webpack_require__(436);
        document.addEventListener("DOMContentLoaded", (() => {
            originalTitleBlur();
            menuActiveHeader();
            leaveRequestClearFunction();
            initIntlTelInput();
            calendarInitForm();
            proposalInitBlocks();
            changeButtonsOnPhone();
            moveContentUp();
            saveOriginal();
            rearrangeBenefits();
        }));
        //!========================================================================================================================================================
        //!========================================================================================================================================================
                window.addEventListener("load", (function() {
            let currentUrl = window.location.href;
            let xhr = new XMLHttpRequest;
            xhr.open("GET", currentUrl, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) window.location.href = "404.html";
            };
            xhr.send();
        }));
        //!========================================================================================================================================================
                function originalTitleBlur() {
            const originalTitle = document.title;
            window.addEventListener("blur", (() => {
                document.title = "Повернись 😢";
            }));
            window.addEventListener("focus", (() => {
                document.title = originalTitle;
            }));
        }
        function menuActiveHeader() {
            const menuItems = document.querySelectorAll(".menu__item, .sub-menu__item, .menu-footer__item, .sub-menu-footer__item");
            const currentUrl = window.location.href;
            menuItems.forEach((item => {
                const linkOne = item.querySelector("a");
                if (linkOne && linkOne.href && linkOne.href !== "#" && linkOne.href === currentUrl) {
                    item.classList.add("menu-active-header");
                    if (item.classList.contains("sub-menu__item")) {
                        const parentMenuItem = item.closest(".menu__item");
                        if (parentMenuItem) parentMenuItem.classList.add("menu-active-header");
                    }
                }
            }));
            menuItems.forEach((item => {
                const linkTwo = item.querySelector("a");
                if (linkTwo && linkTwo.href && linkTwo.href !== "#" && linkTwo.href === currentUrl) {
                    item.classList.add("menu-active-footer");
                    if (item.classList.contains("sub-menu-footer__item")) {
                        const parentMenuItem = item.closest(".menu-footer__item");
                        if (parentMenuItem) parentMenuItem.classList.add("menu-active-footer");
                    }
                }
            }));
        }
        function leaveRequestClearFunction() {
            document.querySelectorAll(".leave-request__clear").forEach((button => {
                button.addEventListener("click", (function() {
                    const container = this.closest(".leave-request__line");
                    const containerTwo = this.closest(".iti");
                    if (container) {
                        const input = container.querySelector(".leave-request__input");
                        if (input) input.value = "";
                    }
                    if (containerTwo) {
                        const input = containerTwo.querySelector(".leave-request__input");
                        if (input) input.value = "";
                    }
                }));
            }));
        }
        function initIntlTelInput() {
            const inputs = document.querySelectorAll("[data-telInputphone]");
            if (!inputs.length) return;
            inputs.forEach((input => {
                const errorMsg = input.parentElement.querySelector(".error-msg");
                const validMsg = input.parentElement.querySelector(".valid-msg");
                const iti = intlTelInput(input, {
                    initialCountry: "ua",
                    onlyCountries: [ "al", "ad", "at", "by", "be", "ba", "bg", "hr", "cz", "dk", "ee", "fo", "fi", "fr", "de", "gi", "gr", "va", "hu", "is", "ie", "it", "lv", "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro", "ru", "sm", "rs", "sk", "si", "es", "se", "ch", "ua", "gb" ],
                    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/25.3.0/js/utils.js",
                    autoPlaceholder: "aggressive"
                });
                iti.promise.then((() => {
                    const defaultDialCode = "+" + iti.getSelectedCountryData().dialCode;
                    if (!input.value.trim()) iti.setNumber(defaultDialCode);
                    const clearButton = document.createElement("button");
                    clearButton.type = "button";
                    clearButton.className = "leave-request__clear";
                    input.parentElement.appendChild(clearButton);
                    clearButton.addEventListener("click", (() => {
                        input.value = "";
                        iti.setNumber(defaultDialCode);
                        input.classList.remove("leave-request__error");
                        if (errorMsg) errorMsg.classList.add("hide");
                        if (validMsg) validMsg.classList.add("hide");
                    }));
                })).catch((error => console.error("Ошибка инициализации intlTelInput:", error)));
                function reset() {
                    input.classList.remove("leave-request__error");
                    if (errorMsg) errorMsg.classList.add("hide");
                    if (validMsg) validMsg.classList.add("hide");
                }
                input.addEventListener("blur", (() => {
                    reset();
                    const formattedNumber = iti.getNumber();
                    const isValid = iti.isValidNumber();
                    if (formattedNumber) {
                        if (isValid && validMsg) validMsg.classList.remove("hide"); else if (errorMsg) {
                            input.classList.add("leave-request__error");
                            errorMsg.classList.remove("hide");
                        }
                    } else if (errorMsg) {
                        input.classList.add("leave-request__error");
                        errorMsg.classList.remove("hide");
                    }
                }));
                [ "change", "keyup" ].forEach((event => {
                    input.addEventListener(event, reset);
                }));
            }));
        }
        let selectedDate = null;
        let currentMonth = (new Date).getMonth() + 1;
        let currentYear = (new Date).getFullYear();
        const today = new Date;
        const monthNames = [ "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень" ];
        function createCalendar(elem, year, month) {
            let mon = month - 1;
            let d = new Date(year, mon);
            let daysHtml = "";
            let todayWeekIndex = null;
            for (let i = 0; i < getDay(d); i++) daysHtml += '<div class="date-calendar__day--blank"></div>';
            while (d.getMonth() === mon) {
                let isToday = d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
                if (isToday) todayWeekIndex = getDay(d);
                daysHtml += `<div class="date-calendar__day ${isToday ? "date-calendar__day--today" : ""}" data-year="${d.getFullYear()}" data-month="${d.getMonth() + 1}" data-day="${d.getDate()}">${d.getDate()}</div>`;
                d.setDate(d.getDate() + 1);
            }
            let weeksHtml = `\n\t\t<div class="date-calendar__week text--xxxxxs ${todayWeekIndex === 0 ? "date-calendar__week--active" : ""}">Пн</div>\n\t\t<div class="date-calendar__week text--xxxxxs ${todayWeekIndex === 1 ? "date-calendar__week--active" : ""}">Вт</div>\n\t\t<div class="date-calendar__week text--xxxxxs ${todayWeekIndex === 2 ? "date-calendar__week--active" : ""}">Ср</div>\n\t\t<div class="date-calendar__week text--xxxxxs ${todayWeekIndex === 3 ? "date-calendar__week--active" : ""}">Чт</div>\n\t\t<div class="date-calendar__week text--xxxxxs ${todayWeekIndex === 4 ? "date-calendar__week--active" : ""}">Пт</div>\n\t\t<div class="date-calendar__week text--xxxxxs ${todayWeekIndex === 5 ? "date-calendar__week--active" : ""}">Сб</div>\n\t\t<div class="date-calendar__week text--xxxxxs ${todayWeekIndex === 6 ? "date-calendar__week--active" : ""}">Нд</div>\n\t`;
            let calendarHtml = `\n                <div class="date-calendar__headline-block">\n\t\t\t\t\t \t  <div class="date-calendar__date text--xxxxs">${monthNames[mon]} ${year}</div>\n\t\t\t\t\t\t  <div class="date-calendar__prev-and-next">\n                    \t\t<button type="button" class="date-calendar__prev _icon-arrow-bottom"></button>\n                    \t\t<button type="button" class="date-calendar__next _icon-arrow-bottom"></button>\n\t\t\t\t\t\t  </div>\n                </div>\n                <div class="date-calendar__weeks">${weeksHtml}</div>\n                <div class="date-calendar__days">${daysHtml}</div>\n                <div class="date-calendar__button-block">\n                    <button type="button" class="date-calendar__button button button--l button--shadow-two border-one--color-five bg-seven b-radius-one date-calendar__button--cancel"><span class="date-calendar__button-text button__text text--xxxxs">Скасувати</span></button>\n                    <button type="button" class="date-calendar__button button button--l button--shadow-two border-one--color-five bg-two b-radius-one date-calendar__button--apply"><span class="date-calendar__button-text button__text text--xxxxs">Застосувати</span></button>\n                </div>\n            `;
            document.querySelector(elem).innerHTML = calendarHtml;
            document.querySelectorAll(".date-calendar__day").forEach((day => {
                day.addEventListener("click", (function() {
                    document.querySelectorAll(".date-calendar__day").forEach((d => d.classList.remove("date-calendar__day--active")));
                    this.classList.add("date-calendar__day--active");
                    let dayNum = this.getAttribute("data-day").padStart(2, "0");
                    let monthNum = this.getAttribute("data-month").padStart(2, "0");
                    let yearNum = this.getAttribute("data-year");
                    selectedDate = `${dayNum}.${monthNum}.${yearNum}`;
                }));
            }));
            document.querySelector(".date-calendar__prev").addEventListener("click", (event => {
                event.stopPropagation();
                currentMonth -= 1;
                if (currentMonth < 1) {
                    currentMonth = 12;
                    currentYear -= 1;
                }
                createCalendar("#calendar", currentYear, currentMonth);
            }));
            document.querySelector(".date-calendar__next").addEventListener("click", (event => {
                event.stopPropagation();
                currentMonth += 1;
                if (currentMonth > 12) {
                    currentMonth = 1;
                    currentYear += 1;
                }
                createCalendar("#calendar", currentYear, currentMonth);
            }));
            document.querySelector(".date-calendar__button--cancel").addEventListener("click", (() => {
                calendar.classList.remove("calendar-and-search__calendar--open");
            }));
            document.querySelector(".date-calendar__button--apply").addEventListener("click", (() => {
                if (selectedDate) document.getElementById("cal-1").value = selectedDate;
                calendar.classList.remove("calendar-and-search__calendar--open");
            }));
        }
        function getDay(date) {
            let day = date.getDay();
            return day === 0 ? 6 : day - 1;
        }
        function calendarInitForm() {
            let input = document.getElementById("cal-1");
            let calendar = document.getElementById("calendar");
            if (input) input.addEventListener("click", (function() {
                createCalendar("#calendar", currentYear, currentMonth);
                calendar = document.getElementById("calendar");
                if (calendar) calendar.classList.add("calendar-and-search__calendar--open");
            }));
            document.addEventListener("click", (function(event) {
                calendar = document.getElementById("calendar");
                if (calendar && !calendar.contains(event.target) && event.target !== input) calendar.classList.remove("calendar-and-search__calendar--open");
            }));
        }
        function proposalInitBlocks() {
            const proposalContainers = document.querySelectorAll(".proposalsection__item");
            const activeClass = "proposalsection__item--active";
            const pageMap = {
                "basic.html": 0,
                "deepened.html": 0,
                "extern.html": 0,
                "issuing.html": 0
            };
            if (!proposalContainers.length) return;
            const currentPage = window.location.pathname.split("/").pop();
            if (pageMap[currentPage] !== void 0) proposalContainers[pageMap[currentPage]].classList.add(activeClass);
            document.addEventListener("click", (event => {
                let isInsideAnyBlock = false;
                proposalContainers.forEach((container => {
                    if (container.contains(event.target)) {
                        container.classList.add(activeClass);
                        isInsideAnyBlock = true;
                    } else container.classList.remove(activeClass);
                }));
                if (!isInsideAnyBlock) proposalContainers.forEach((container => container.classList.remove(activeClass)));
            }));
        }
        document.addEventListener("scroll", (() => {
            const button = document.querySelector(".whatsapp-page");
            if (!button) return;
            const scrollY = window.scrollY;
            if (window.innerWidth <= 768) {
                button.style.top = `${scrollY + window.innerHeight - 190}px`;
                button.style.right = "20px";
                button.style.left = "auto";
            } else {
                button.style.top = `${scrollY + window.innerHeight - 100}px`;
                button.style.left = "20px";
                button.style.right = "auto";
            }
        }));
        function changeButtonsOnPhone() {
            const advantagesStepsButton = document.getElementById("advantages-steps-button");
            const stepHomeTextTop = document.querySelector(".step-home__parahraph--top");
            const stepHomeTextCenter = document.querySelector(".step-home__parahraph--center");
            const stepHomeTextBottom = document.querySelector(".step-home__parahraph--bottom");
            const classChildIn = document.querySelectorAll("[data-classchild]");
            if (!advantagesStepsButton) return;
            if (!classChildIn) return;
            if (!stepHomeTextTop) return;
            if (window.innerWidth <= 768) {
                advantagesStepsButton.setAttribute("data-popup", "#trial-lesson");
                advantagesStepsButton.innerHTML = '<span class="advantages-steps__button-text button__text text--height-two _icon-smile-fun">Безоплатний пробний урок</span>';
                stepHomeTextTop.innerHTML = '<div class="step-home__text step-home__text--top">Ми зв’яжемося з вами і допоможемо в оформленні документів</div>';
                stepHomeTextCenter.innerHTML = '<div class="step-home__text step-home__text--top">Оплатити навчання на платформі і приєднатися до класу</div>';
                stepHomeTextBottom.innerHTML = '<div class="step-home__text step-home__text--top">Надіслати заявку для знайомства</div>';
            } else {
                advantagesStepsButton.setAttribute("data-popup", "#consultation");
                advantagesStepsButton.innerHTML = '<span class="advantages-steps__button-text button__text text--height-two _icon-smile-fun">Отримати консультацію</span>';
                stepHomeTextTop.innerHTML = '<div class="step-home__text step-home__text--top">Надіслати заявку для знайомства</div>';
                stepHomeTextCenter.innerHTML = '<div class="step-home__text step-home__text--top">Ми зв’яжемося з вами  і допоможемо  в оформленні документів</div>';
                stepHomeTextBottom.innerHTML = '<div class="step-home__text step-home__text--top">Оплатити навчання на платформі і приєднатися до класу</div>';
            }
            classChildIn.forEach((input => {
                if (window.innerWidth <= 768) input.placeholder = "Клас дитини"; else input.placeholder = "Клас, у якому навчається дитина";
            }));
        }
        changeButtonsOnPhone();
        window.addEventListener("resize", changeButtonsOnPhone);
        function moveContentUp() {
            const container = document.querySelector(".leave-request__container");
            if (container && window.matchMedia("(max-width: 768px)").matches) {
                const parent = container.parentNode;
                while (container.firstChild) parent.insertBefore(container.firstChild, container);
                container.remove();
            }
        }
        moveContentUp();
        window.addEventListener("resize", moveContentUp);
        let originalThreeBlocks = null;
        let originalTwoBlocks = null;
        function saveOriginal() {
            const threeBlocks = document.querySelector(".benefit__items--three-blocks");
            const twoBlocks = document.querySelector(".benefit__items--two-blocks");
            if (threeBlocks && twoBlocks) {
                originalThreeBlocks = threeBlocks.innerHTML;
                originalTwoBlocks = twoBlocks.innerHTML;
            }
        }
        function rearrangeBenefits() {
            const currentPage = window.location.pathname.split("/").pop();
            const allowedPages = [ "extern.html", "basic.html", "issuing.html", "deepened.html" ];
            if (!allowedPages.includes(currentPage)) return;
            const threeBlocks = document.querySelector(".benefit__items--three-blocks");
            const twoBlocks = document.querySelector(".benefit__items--two-blocks");
            if (!threeBlocks || !twoBlocks) return;
            const threeBlocksItems = Array.from(threeBlocks.querySelectorAll(".benefit__item"));
            const twoBlocksItems = Array.from(twoBlocks.querySelectorAll(".benefit__item"));
            if (window.innerWidth <= 768 && !threeBlocks.dataset.rearranged) {
                threeBlocks.innerHTML = "";
                twoBlocks.innerHTML = "";
                if (currentPage === "extern.html") {
                    threeBlocks.appendChild(twoBlocksItems[1].cloneNode(true));
                    threeBlocks.appendChild(threeBlocksItems[0].cloneNode(true));
                    threeBlocks.appendChild(threeBlocksItems[1].cloneNode(true));
                    twoBlocks.appendChild(threeBlocksItems[2].cloneNode(true));
                    twoBlocks.appendChild(twoBlocksItems[0].cloneNode(true));
                } else if (currentPage === "basic.html") {
                    threeBlocks.innerHTML = originalThreeBlocks;
                    twoBlocks.innerHTML = originalTwoBlocks;
                    threeBlocks.dataset.rearranged = "false";
                    twoBlocks.dataset.rearranged = "false";
                } else if (currentPage === "issuing.html") {
                    threeBlocks.innerHTML = originalThreeBlocks;
                    twoBlocks.innerHTML = originalTwoBlocks;
                    threeBlocks.dataset.rearranged = "false";
                    twoBlocks.dataset.rearranged = "false";
                } else if (currentPage === "deepened.html") {
                    threeBlocks.innerHTML = originalThreeBlocks;
                    twoBlocks.innerHTML = originalTwoBlocks;
                    threeBlocks.dataset.rearranged = "false";
                    twoBlocks.dataset.rearranged = "false";
                }
                threeBlocks.dataset.rearranged = "true";
                twoBlocks.dataset.rearranged = "true";
            } else if (window.innerWidth > 768 && threeBlocks.dataset.rearranged === "true") {
                threeBlocks.innerHTML = originalThreeBlocks;
                twoBlocks.innerHTML = originalTwoBlocks;
                threeBlocks.dataset.rearranged = "false";
                twoBlocks.dataset.rearranged = "false";
            }
        }
        if ([ "extern.html", "basic.html", "issuing.html", "deepened.html" ].includes(window.location.pathname.split("/").pop())) {
            saveOriginal();
            rearrangeBenefits();
        }
        window.addEventListener("resize", rearrangeBenefits);
        window["FLS"] = false;
        addTouchClass();
        addLoadedClass();
        menuInit();
        spollers();
        tabs();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
        headerScroll();
    })();
})();