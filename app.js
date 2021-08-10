
document.addEventListener("DOMContentLoaded", () => {
    const EnglishPhrases = ["Register now", "Confirm your e-mail", "Watch naked tiktok videos", "free registration"];
    const GermanPhrases = ["Jetzt registrieren", "Bestätige deine E-Mail", "Sieh dir nackte Tiktok-Videos an", "Kostenlose Anmeldung"];
    const DutchPhrases = ["Registreer nu", "Bevestig je email", "Bekijk naakte tiktok-video's", "gratis registratie"];
    const ItalianPhrases = ["Iscriviti ora", "Conferma la tua email", "Guarda video di tiktok nudi", "registrazione gratuita"];
    const SpanishPhrases = ["Regístrate ahora", "Confirme su email", "Ver videos desnudos de tiktok", "Registro gratis"];
    const FrenchPhrases = ["S'inscrire maintenant", "Confirme ton email", "Regardez des vidéos de tiktok nues", "inscription gratuite"];
    const CzechPhrases = ["Zaregistrujte se nyní", "Potvrďte svůj email", "Sledujte nahá videa tiktok", "registrace zdarma"];
    const FinnishPhrases = ["Rekisteröidy nyt", "Vahvista sähköpostiosoitteesi", "Katso alasti tiktok-videoita", "ilmainen rekisteröinti"];
    const TurkishPhrases = ["Şimdi üye Ol", "E-postanızı onaylayın", "Çıplak tiktok videoları izle", "ücretsiz kayıt"];
    const NorwegianPhrases = ["Registrer deg nå", "Bekreft e-posten din", "Se nakne tiktok-videoer", "gratis registrering"];
    const KoreanPhrases = ["지금 거부", "메일을 확인하십시오", "손상된 비디오를 시청하십시오", "무료 교육"];
	const MelayuPhrases = ["Daftar", "Sahkan-E-mel", "Tonton video telanjang Tik-Tok", "Pendaftaran percuma"];

    const phrases = {
        "en": EnglishPhrases,
        "de": GermanPhrases,
        "nl": DutchPhrases,
        "it": ItalianPhrases,
        "es": SpanishPhrases,
        "fr": FrenchPhrases,
        "cs": CzechPhrases,
        "fi": FinnishPhrases,
        "fi": FinnishPhrases,
        "tr": TurkishPhrases,
        "tr": TurkishPhrases,
        "no": NorwegianPhrases,
        "de": GermanPhrases,
        "nl": DutchPhrases,
        "it": ItalianPhrases,
        "es": SpanishPhrases,
        "fr": FrenchPhrases,
        "cs": CzechPhrases,
        "fi": FinnishPhrases,
        "tr": TurkishPhrases,
        "noU": NorwegianPhrases,
        "ko": KoreanPhrases,
		"id": MelayuPhrases
    };

    const text_div = document.querySelector(".text");
    const paragraphs = text_div.querySelectorAll("p");
    const sign_up_button = document.querySelector(".btn").querySelector("a");

    function getLanguage() { 
        return (navigator.language || navigator.systemLanguage || navigator.userLanguage)
    };

    function setLanguage(language){ 
    
        var start = (language[0] + language[1])
        console.log(start)
        if(phrases.hasOwnProperty(start))
        { 
            for(var i = 0; i < paragraphs.length; i++)
            {
                paragraphs[i].innerText = (i + 1) + "." + phrases[start][i]
            }
            var last_item = phrases[start].length - 1
            sign_up_button.innerText = phrases[start][last_item];
        }
        else {
            for(var i = 0; i < paragraphs.length; i++)
            {
                paragraphs[i].innerText = (i + 1) + "." + phrases["en-US"][i]
            }
            var last_item = phrases["en-US"].length - 1
            sign_up_button.innerText = phrases["en-US"][last_item];
        }
    }
    
    function start_tests()
    {
        var phrases_keys = Object.keys(phrases)
     

        for (let el =0; el < phrases_keys.length; el++) {
            setTimeout(function timer() {
                setLanguage(phrases_keys[el])
            }, el * 3000);
        }
    }

    function changeLanguage()
    {
        var current_language = getLanguage(); 
        setLanguage(current_language)
    } 
     
    changeLanguage();
})


