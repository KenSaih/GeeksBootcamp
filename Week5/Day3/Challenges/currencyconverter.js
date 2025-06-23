 // Configuration
        const API_KEY = '05eb5643bc4971adaeeb4e26'; 
        const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

        // Données des devises (simplifiées pour l'exemple)
        const supportedCurrencies = [
            ["AED","Dirham des Émirats"], ["AFN","Afghani afghan"], ["ALL","Lek albanais"],
            ["AMD","Dram arménien"], ["ANG","Florin antillais"], ["AOA","Kwanza angolais"],
            ["ARS","Peso argentin"], ["AUD","Dollar australien"], ["AWG","Florin arubais"],
            ["AZN","Manat azerbaïdjanais"], ["BAM","Mark convertible"], ["BBD","Dollar barbadien"],
            ["BDT","Taka bangladais"], ["BGN","Lev bulgare"], ["BHD","Dinar bahreïni"],
            ["BIF","Franc burundais"], ["BMD","Dollar bermudien"], ["BND","Dollar brunéien"],
            ["BOB","Boliviano bolivien"], ["BRL","Real brésilien"], ["BSD","Dollar bahaméen"],
            ["BTN","Ngultrum bhoutanais"], ["BWP","Pula botswanais"], ["BYN","Rouble biélorusse"],
            ["BZD","Dollar bélizien"], ["CAD","Dollar canadien"], ["CDF","Franc congolais"],
            ["CHF","Franc suisse"], ["CLP","Peso chilien"], ["CNY","Yuan chinois"],
            ["COP","Peso colombien"], ["CRC","Colon costaricain"], ["CUP","Peso cubain"],
            ["CVE","Escudo cap-verdien"], ["CZK","Couronne tchèque"], ["DJF","Franc djiboutien"],
            ["DKK","Couronne danoise"], ["DOP","Peso dominicain"], ["DZD","Dinar algérien"],
            ["EGP","Livre égyptienne"], ["ERN","Nakfa érythréen"], ["ETB","Birr éthiopien"],
            ["EUR","Euro"], ["FJD","Dollar fidjien"], ["FKP","Livre des Falkland"],
            ["FOK","Couronne féroïenne"], ["GBP","Livre sterling"], ["GEL","Lari géorgien"],
            ["GGP","Livre de Guernesey"], ["GHS","Cedi ghanéen"], ["GIP","Livre de Gibraltar"],
            ["GMD","Dalasi gambien"], ["GNF","Franc guinéen"], ["GTQ","Quetzal guatémaltèque"],
            ["GYD","Dollar guyanais"], ["HKD","Dollar de Hong Kong"], ["HNL","Lempira hondurien"],
            ["HRK","Kuna croate"], ["HTG","Gourde haïtienne"], ["HUF","Forint hongrois"],
            ["IDR","Roupie indonésienne"], ["ILS","Shekel israélien"], ["IMP","Livre de l'Île de Man"],
            ["INR","Roupie indienne"], ["IQD","Dinar irakien"], ["IRR","Rial iranien"],
            ["ISK","Couronne islandaise"], ["JEP","Livre de Jersey"], ["JMD","Dollar jamaïcain"],
            ["JOD","Dinar jordanien"], ["JPY","Yen japonais"], ["KES","Shilling kényan"],
            ["KGS","Som kirghize"], ["KHR","Riel cambodgien"], ["KID","Dollar de Kiribati"],
            ["KMF","Franc comorien"], ["KRW","Won sud-coréen"], ["KWD","Dinar koweïtien"],
            ["KYD","Dollar des îles Caïmans"], ["KZT","Tenge kazakh"], ["LAK","Kip laotien"],
            ["LBP","Livre libanaise"], ["LKR","Roupie srilankaise"], ["LRD","Dollar libérien"],
            ["LSL","Loti lesothan"], ["LYD","Dinar libyen"], ["MAD","Dirham marocain"],
            ["MDL","Leu moldave"], ["MGA","Ariary malgache"], ["MKD","Denar macédonien"],
            ["MMK","Kyat birman"], ["MNT","Tugrik mongol"], ["MOP","Pataca macanaise"],
            ["MRU","Ouguiya mauritanien"], ["MUR","Roupie mauricienne"], ["MVR","Rufiyaa maldivien"],
            ["MWK","Kwacha malawite"], ["MXN","Peso mexicain"], ["MYR","Ringgit malais"],
            ["MZN","Metical mozambicain"], ["NAD","Dollar namibien"], ["NGN","Naira nigérian"],
            ["NIO","Córdoba nicaraguayen"], ["NOK","Couronne norvégienne"], ["NPR","Roupie népalaise"],
            ["NZD","Dollar néo-zélandais"], ["OMR","Rial omanais"], ["PAB","Balboa panaméen"],
            ["PEN","Sol péruvien"], ["PGK","Kina papou-néo-guinéen"], ["PHP","Peso philippin"],
            ["PKR","Roupie pakistanaise"], ["PLN","Zloty polonais"], ["PYG","Guarani paraguayen"],
            ["QAR","Riyal qatari"], ["RON","Leu roumain"], ["RSD","Dinar serbe"],
            ["RUB","Rouble russe"], ["RWF","Franc rwandais"], ["SAR","Riyal saoudien"],
            ["SBD","Dollar des îles Salomon"], ["SCR","Roupie seychelloise"], ["SDG","Livre soudanaise"],
            ["SEK","Couronne suédoise"], ["SGD","Dollar de Singapour"], ["SHP","Livre de Sainte-Hélène"],
            ["SLE","Leone sierra-léonais"], ["SLL","Leone sierra-léonais"], ["SOS","Shilling somalien"],
            ["SRD","Dollar surinamais"], ["SSP","Livre sud-soudanaise"], ["STN","Dobra santoméen"],
            ["SYP","Livre syrienne"], ["SZL","Lilangeni swazi"], ["THB","Baht thaïlandais"],
            ["TJS","Somoni tadjik"], ["TMT","Manat turkmène"], ["TND","Dinar tunisien"],
            ["TOP","Pa'anga tongan"], ["TRY","Lire turque"], ["TTD","Dollar trinidadien"],
            ["TVD","Dollar tuvaluan"], ["TWD","Dollar taïwanais"], ["TZS","Shilling tanzanien"],
            ["UAH","Hryvnia ukrainienne"], ["UGX","Shilling ougandais"], ["USD","Dollar américain"],
            ["UYU","Peso uruguayen"], ["UZS","Sum ouzbek"], ["VES","Bolivar vénézuélien"],
            ["VND","Dong vietnamien"], ["VUV","Vatu vanuatuan"], ["WST","Tala samoan"],
            ["XAF","Franc CFA (BEAC)"], ["XCD","Dollar des Caraïbes orientales"], ["XDR","Droits de tirage spéciaux"],
            ["XOF","Franc CFA (BCEAO)"], ["XPF","Franc CFP"], ["YER","Rial yéménite"],
            ["ZAR","Rand sud-africain"], ["ZMW","Kwacha zambien"], ["ZWL","Dollar zimbabwéen"]
        ];

        // Remplir les menus déroulants
        function populateDropdowns() {
            const fromSelect = document.getElementById('from');
            const toSelect = document.getElementById('to');
            
            supportedCurrencies.forEach(currency => {
                const [code, name] = currency;
                const option = new Option(`${code} - ${name}`, code);
                
                fromSelect.add(option);
                toSelect.add(new Option(`${code} - ${name}`, code));
            });
            
            // Définir les valeurs par défaut
            fromSelect.value = 'EUR';
            toSelect.value = 'USD';
        }

        // Fonction de conversion
        async function convertCurrency() {
            const amount = parseFloat(document.getElementById('amount').value);
            const fromCurrency = document.getElementById('from').value;
            const toCurrency = document.getElementById('to').value;
            const resultDiv = document.getElementById('result');
            const errorDiv = document.getElementById('error');
            
            // Validation
            if (isNaN(amount) || amount <= 0) {
                errorDiv.textContent = "Veuillez entrer un montant valide";
                errorDiv.style.display = 'block';
                resultDiv.style.display = 'none';
                return;
            }
            
            try {
                const response = await fetch(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}/${amount}`);
                const data = await response.json();
                
                if (data.result === 'success') {
                    const conversionResult = document.getElementById('conversion-result');
                    const conversionRate = document.getElementById('conversion-rate');
                    
                    conversionResult.textContent = `${data.conversion_result.toFixed(2)} ${toCurrency}`;
                    conversionRate.textContent = `1 ${fromCurrency} = ${data.conversion_rate.toFixed(6)} ${toCurrency}`;
                    
                    resultDiv.style.display = 'block';
                    errorDiv.style.display = 'none';
                } else {
                    throw new Error(data['error-type'] || "Erreur de conversion");
                }
            } catch (error) {
                errorDiv.textContent = `Erreur: ${error.message}`;
                errorDiv.style.display = 'block';
                resultDiv.style.display = 'none';
                console.error("Erreur de conversion:", error);
            }
        }

        // Fonction pour inverser les devises
        function switchCurrencies() {
            const fromSelect = document.getElementById('from');
            const toSelect = document.getElementById('to');
            const temp = fromSelect.value;
            
            fromSelect.value = toSelect.value;
            toSelect.value = temp;
            
            // Si un résultat est affiché, on reconvertit
            if (document.getElementById('result').style.display === 'block') {
                convertCurrency();
            }
        }

        // Initialisation
        document.addEventListener('DOMContentLoaded', () => {
            populateDropdowns();
            
            // Écouteurs d'événements
            document.getElementById('convert').addEventListener('click', convertCurrency);
            document.getElementById('switch').addEventListener('click', switchCurrencies);
            
            // Conversion automatique quand on change le montant
            document.getElementById('amount').addEventListener('input', () => {
                if (document.getElementById('from').value && document.getElementById('to').value) {
                    convertCurrency();
                }
            });
            
            // Conversion initiale
            convertCurrency();
        });