const root = document.querySelector("#root");

const bhagavadGitaVerses = [
    { chapter: 2, verseno: 13, 
      verse: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा। तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति।।",
      translation: "जैसे इस शरीर में बाल्यावस्था, युवावस्था और वृद्धावस्था आती है, वैसे ही आत्मा एक शरीर को त्यागकर दूसरे शरीर को प्राप्त करती है। ज्ञानी पुरुष इस पर शोक नहीं करते।"
    },
    { chapter: 2, verseno: 47, 
      verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
      translation: "तुम्हें कर्म करने का अधिकार है, लेकिन उसके फल पर कभी नहीं। इसलिए कर्मफल की चिंता मत करो और न ही निष्क्रियता में आसक्त हो।"
    },
    { chapter: 2, verseno: 50, 
      verse: "योग: कर्मसु कौशलम्।",
      translation: "योग ही कर्मों में कुशलता है।"
    },
    { chapter: 3, verseno: 9, 
      verse: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धन:। तदर्थं कर्म कौन्तेय मुक्तसङ्ग: समाचर।।",
      translation: "यज्ञ के लिए किए गए कर्मों के अतिरिक्त अन्य सभी कर्म बंधन उत्पन्न करते हैं। हे अर्जुन! तुम आसक्ति रहित होकर कर्तव्य कर्म करो।"
    },
    { chapter: 3, verseno: 19, 
      verse: "तस्मादसक्त: सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पुरुष:।।",
      translation: "इसलिए आसक्ति छोड़कर अपने कर्तव्य का पालन करो, क्योंकि जो व्यक्ति आसक्ति रहित होकर कर्म करता है, वह परम सिद्धि प्राप्त करता है।"
    },
    { chapter: 3, verseno: 27, 
      verse: "प्रकृते: क्रियमाणानि गुणै: कर्माणि सर्वश:। अहङ्कारविमूढात्मा कर्ताहमिति मन्यते।।",
      translation: "प्रकृति के तीन गुणों द्वारा सभी कर्म संपन्न होते हैं, लेकिन अहंकार से मोहित हुआ व्यक्ति सोचता है कि 'मैं ही कर्ता हूँ'।"
    },
    { chapter: 4, verseno: 7, 
      verse: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।।",
      translation: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं प्रकट होता हूँ।"
    },
    { chapter: 4, verseno: 8, 
      verse: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे।।",
      translation: "सज्जनों की रक्षा, दुष्टों के विनाश और धर्म की स्थापना के लिए मैं प्रत्येक युग में अवतरित होता हूँ।"
    },
    { chapter: 4, verseno: 18, 
      verse: "कर्मण्यकर्म य: पश्येदकर्मणि च कर्म य:। स बुद्धिमान्मनुष्येषु स युक्त: कृत्स्नकर्मकृत्।।",
      translation: "जो व्यक्ति कर्म में अकर्म और अकर्म में कर्म को देखता है, वह वास्तव में बुद्धिमान है और समस्त कर्मों को करने वाला है।"
    },
    { chapter: 5, verseno: 10, 
      verse: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति य:। लिप्यते न स पापेन पद्मपत्रमिवाम्भसा।।",
      translation: "जो व्यक्ति सभी कर्मों को परमात्मा को समर्पित करके, आसक्ति रहित होकर कर्म करता है, वह जल में स्थित कमलपत्र की तरह पाप से लिप्त नहीं होता।"
    },
    { chapter: 6, verseno: 5, 
      verse: "उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मन:।।",
      translation: "मनुष्य को चाहिए कि वह स्वयं अपनी आत्मा द्वारा अपना उद्धार करे और स्वयं को पतन की ओर न ले जाए, क्योंकि आत्मा ही उसका मित्र है और आत्मा ही उसका शत्रु।"
    },
    { chapter: 6, verseno: 6, 
      verse: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जित:। अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्।।",
      translation: "जिसने अपनी आत्मा को जीत लिया है, उसके लिए आत्मा मित्र के समान है, लेकिन जिसने आत्मा को नियंत्रित नहीं किया, उसके लिए आत्मा शत्रु के समान है।"
    },
    { chapter: 9, verseno: 22, 
      verse: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्।।",
      translation: "जो भक्त अनन्य भाव से मेरा चिंतन करते हैं और मेरी उपासना करते हैं, उनके योग (नवीन वस्तु की प्राप्ति) और क्षेम (जो है उसकी रक्षा) का भार मैं स्वयं वहन करता हूँ।"
    },
    { chapter: 10, verseno: 20, 
      verse: "अहमात्मा गुडाकेश सर्वभूताशयस्थित:। अहमादिश्च मध्यं च भूतानामन्त एव च।।",
      translation: "हे अर्जुन! मैं सभी प्राणियों के हृदय में स्थित आत्मा हूँ। मैं ही समस्त भूतों का आदि, मध्य और अंत हूँ।"
    },
    { chapter: 18, verseno: 66, 
      verse: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुच:।।",
      translation: "सभी धर्मों को त्यागकर मेरी शरण में आ जाओ। मैं तुम्हें समस्त पापों से मुक्त कर दूँगा, चिंता मत करो।"
    }
];

const container = document.createElement('div');
container.className="container";

root.appendChild(container);

const button = document.createElement('button');
const reset = document.createAttribute('type');
reset.value = 'reset';
button.setAttributeNode(reset);
button.innerHTML='Change';

container.after(button);

const head = document.createElement('div');
head.className='head';

const content = document.createElement('div');
content.className= 'content';

const translation =document.createElement('div');
translation.className = 'translation';

const anuvad = document.createElement('div');
anuvad.className ='anuvad';
anuvad.innerHTML='<b>अनुवाद</b>';

container.append(head,content,anuvad,translation);

head.innerHTML = `<b> अध्याय : ${bhagavadGitaVerses[Math.floor(Math.random()*14)].chapter}  <br> श्लोक : ${bhagavadGitaVerses[Math.floor(Math.random()*14)].verseno}</b>`;
content.innerHTML = `${bhagavadGitaVerses[Math.floor(Math.random()*14)].verse}`;
translation.innerHTML = `${bhagavadGitaVerses[Math.floor(Math.random()*14)].translation}`;

button.addEventListener('click',()=>{
    document.location.reload();
})
