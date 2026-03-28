export type Language = 'en' | 'hi' | 'mr';

export type Translation = Record<Language, string>;

export const LANGUAGES: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
];

export const THEME_COLORS = {
  light: {
    pageBackground: '#f4efe4',
    sectionBackground: '#fbf8f1',
    cardBackground: '#ffffff',
    textPrimary: '#2f241b',
    textSecondary: '#6a5a4e',
    borderSoft: '#e8dcc8',
    brandPrimary: '#c66a1f',
    brandPrimaryStrong: '#9f4f12',
    brandAccent: '#0f4d3a',
    heroGlow: '#f3c28d',
    heroGradientStart: '#f7dfc3',
    heroGradientMid: '#fff7ea',
    heroGradientEnd: '#e8f1e6',
    badgeBackground: '#fff0dd',
  },
  dark: {
    pageBackground: '#16120f',
    sectionBackground: '#201a15',
    cardBackground: '#2a2119',
    textPrimary: '#f5ede3',
    textSecondary: '#d7c1ac',
    borderSoft: '#4a3d31',
    brandPrimary: '#f2994a',
    brandPrimaryStrong: '#ffb46f',
    brandAccent: '#57b48b',
    heroGlow: '#5f3110',
    heroGradientStart: '#3d2516',
    heroGradientMid: '#231a14',
    heroGradientEnd: '#13241e',
    badgeBackground: '#4b2f1b',
  },
};

export const SITE_IMAGES = {
  profile: "/images/profile.jpg",
  gallery: {
    speech: "/images/leader-speech.jpg",
    hospital: "/images/leader-hospital.jpg",
    school: "/images/profile.jpg",
    farmers: "/images/leader-farmers.jpg",
    youth: "/images/profile.jpg",
    women: "/images/profile.jpg",
  },
};

export const LEADER_INFO = {
  name: {
    en: "Adv. Nilesh Nikam",
    hi: "ॲड. निलेश निकम",
    mr: "ॲड. निलेश निकम",
  },
  title: {
    en: "Leader of Opposition, Pune Municipal Corporation",
    hi: "विपक्ष के नेता, पुणे महानगरपालिका",
    mr: "विरोधी पक्ष नेता , पुणे महानगरपालिका",
  },
  tagline: {
    en: "Water, Roads, Education and Dignity for Every Family",
    hi: "हर परिवार के लिए पानी, सड़क, शिक्षा और सम्मान",
    mr: "प्रत्येक कुटुंबासाठी पाणी, रस्ते, शिक्षण आणि सन्मान",
  },
  constituency: {
    en: "Pune",
    hi: "पुणे",
    mr: "पुणे",
  },
  party: {
    en: "Nationalist Congress Party",
    hi: "राष्ट्रवादी कांग्रेस पार्टी",
    mr: "राष्ट्रवादी काँग्रेस पार्टी",
  },
  campaignBadge: {
    en: "Aapla Manus",
    hi: "आपला माणूस",
    mr: "आपला माणूस",
  },
};

export const NAVIGATION_SECTIONS: { id: string; label: Translation }[] = [
  { id: 'home', label: { en: 'Home', hi: 'होम', mr: 'मुख्यपृष्ठ' } },
  { id: 'about', label: { en: 'About', hi: 'परिचय', mr: 'परिचय' } },
  { id: 'issues', label: { en: 'Key Issues', hi: 'प्रमुख मुद्दे', mr: 'प्रमुख मुद्दे' } },
  { id: 'achievements', label: { en: 'Achievements', hi: 'उपलब्धियां', mr: 'कामगिरी' } },
  { id: 'vision', label: { en: 'Vision', hi: 'दृष्टि', mr: 'दृष्टी' } },
  { id: 'gallery', label: { en: 'Gallery', hi: 'गैलरी', mr: 'गॅलरी' } },
  { id: 'contact', label: { en: 'Contact', hi: 'संपर्क', mr: 'संपर्क' } },
];

export const HERO_STATS: { value: string; label: Translation }[] = [
  {
    value: '25+',
    label: { en: 'Years in public service', hi: 'लोकसेवा के वर्ष', mr: 'लोकसेवेतील वर्षे' },
  },
  {
    value: '120+',
    label: { en: 'Local projects completed', hi: 'स्थानीय प्रकल्प पूर्ण', mr: 'स्थानिक प्रकल्प पूर्ण' },
  },
  {
    value: '24x7',
    label: { en: 'Citizen assistance desk', hi: 'नागरिक सहायता डेस्क', mr: 'नागरिक सहाय्य केंद्र' },
  },
];

export const ABOUT_SECTION = {
  title: {
    en: 'About',
    hi: 'परिचय',
    mr: 'माझ्याबद्दल',
  },
  biography: {
    en: `Nilesh Nikam is a dedicated public representative with over 25 years of social and civic work. His leadership journey started at the grassroots level, where he worked directly with families facing water scarcity, poor roads, and limited access to education.

With training in law and public administration, he built a practical development model focused on quick execution, transparent budgeting, and regular public feedback. His office runs community meetings, grievance camps, and field visits to keep local governance accountable.

His mission is simple: every neighborhood should feel visible, heard, and supported through reliable public services.`,
    hi: `निलेश निकम 25+ वर्षों से सामाजिक और नागरिक कार्यों से जुड़े समर्पित जनप्रतिनिधि हैं। उनकी नेतृत्व यात्रा जमीनी स्तर से शुरू हुई, जहां उन्होंने पानी, सड़क और शिक्षा जैसी समस्याओं से जूझ रहे परिवारों के साथ काम किया।

कानून और लोक प्रशासन की समझ के साथ उन्होंने विकास का एक व्यावहारिक मॉडल तैयार किया, जिसमें तेज़ काम, पारदर्शी बजट और जनभागीदारी पर जोर है। उनका कार्यालय नियमित जनसुनवाई और क्षेत्रीय दौरे के माध्यम से जवाबदेह शासन सुनिश्चित करता है।

उनका लक्ष्य स्पष्ट है: हर वार्ड के नागरिकों को सम्मानजनक, भरोसेमंद और समय पर सार्वजनिक सुविधाएं मिलें।`,
    mr: `निलेश निकम हे २५+ वर्षांपासून सामाजिक आणि नागरी कामात सक्रिय असलेले समर्पित लोकप्रतिनिधी आहेत. त्यांचा नेतृत्व प्रवास तळागाळातून सुरू झाला, जिथे पाणी, रस्ते आणि शिक्षणाच्या अडचणींना सामोरे जाणाऱ्या कुटुंबांसोबत त्यांनी थेट काम केले.

कायदा आणि लोकप्रशासनातील अभ्यासाच्या आधारे त्यांनी जलद अंमलबजावणी, पारदर्शक निधी वापर आणि जनसहभाग यावर आधारित विकास मॉडेल उभे केले. त्यांचे कार्यालय नियमित जनसुनावणी, तक्रार निवारण शिबिरे आणि प्रत्यक्ष पाहणीद्वारे उत्तरदायी प्रशासन देते.

त्यांचे ध्येय स्पष्ट आहे: प्रत्येक परिसराला विश्वासार्ह आणि सन्मानजनक सार्वजनिक सुविधा मिळाल्या पाहिजेत.`,
  },
};

export const KEY_ISSUES = {
  title: {
    en: 'Key Issues We Solve',
    hi: 'जिन मुद्दों पर हम काम कर रहे हैं',
    mr: 'ज्या मुद्द्यांवर आम्ही काम करतो',
  },
  items: [
    {
      icon: 'Droplets',
      title: {
        en: 'Clean Water Access',
        hi: 'स्वच्छ पानी उपलब्धता',
        mr: 'स्वच्छ पाणी उपलब्धता',
      },
      description: {
        en: 'Household tap-water expansion and water quality checks in every zone.',
        hi: 'हर क्षेत्र में नल जल विस्तार और पानी की गुणवत्ता की नियमित जांच।',
        mr: 'प्रत्येक भागात नळजोडणी विस्तार आणि पाण्याची गुणवत्ता तपासणी.',
      },
    },
    {
      icon: 'Road',
      title: {
        en: 'Road and Drainage',
        hi: 'सड़क और ड्रेनेज',
        mr: 'रस्ते आणि ड्रेनेज',
      },
      description: {
        en: 'All-weather roads, safer intersections, and flood-free local streets.',
        hi: 'हर मौसम में चलने योग्य सड़कें, सुरक्षित चौराहे और जलभराव मुक्त गलियां।',
        mr: 'सर्व हवामानात उपयोगी रस्ते, सुरक्षित चौक आणि पाणी न साचणाऱ्या गल्ली.',
      },
    },
    {
      icon: 'GraduationCap',
      title: {
        en: 'Schools and Scholarships',
        hi: 'स्कूल और छात्रवृत्ति',
        mr: 'शाळा आणि शिष्यवृत्ती',
      },
      description: {
        en: 'Classroom upgrades, digital learning support, and student scholarship drives.',
        hi: 'कक्षाओं का उन्नयन, डिजिटल शिक्षा सहयोग और छात्रवृत्ति अभियान।',
        mr: 'वर्गखोल्यांचे आधुनिकीकरण, डिजिटल शिक्षण मदत आणि शिष्यवृत्ती उपक्रम.',
      },
    },
  ],
};

export const ACHIEVEMENTS = {
  title: {
    en: 'Major Achievements',
    hi: 'मुख्य उपलब्धियां',
    mr: 'मुख्य कामगिरी',
  },
  items: [
    {
      icon: 'Hospital',
      title: {
        en: '15 New Health Centers',
        hi: '15 नए स्वास्थ्य केंद्र',
        mr: '१५ नवीन आरोग्य केंद्रे',
      },
      description: {
        en: 'Primary health access expanded across underserved pockets.',
        hi: 'कम सेवायुक्त क्षेत्रों में प्राथमिक स्वास्थ्य सेवाओं का विस्तार।',
        mr: 'सेवा-अभावी भागात प्राथमिक आरोग्य सुविधा वाढविल्या.',
      },
    },
    {
      icon: 'GraduationCap',
      title: {
        en: '50+ School Upgrades',
        hi: '50+ स्कूलों का उन्नयन',
        mr: '५०+ शाळांचे आधुनिकीकरण',
      },
      description: {
        en: 'Improved classrooms, toilets, and digital learning facilities.',
        hi: 'बेहतर कक्षाएं, स्वच्छ शौचालय और डिजिटल सुविधाएं उपलब्ध कराई गईं।',
        mr: 'वर्गखोल्या, स्वच्छतागृहे आणि डिजिटल सुविधा सुधारल्या.',
      },
    },
    {
      icon: 'Road',
      title: {
        en: '200 km Roads Built',
        hi: '200 किमी सड़कों का निर्माण',
        mr: '२०० किमी रस्ते बांधकाम',
      },
      description: {
        en: 'Internal roads connected with durable, all-weather surfaces.',
        hi: 'आंतरिक सड़कों को टिकाऊ और सर्व-ऋतु मार्गों से जोड़ा गया।',
        mr: 'आतील रस्ते टिकाऊ सर्व-हवामान पृष्ठभागाने जोडले.',
      },
    },
    {
      icon: 'Users',
      title: {
        en: '10,000+ Employment Opportunities',
        hi: '10,000+ रोजगार अवसर',
        mr: '१०,०००+ रोजगार संधी',
      },
      description: {
        en: 'Skill centers and local industry tie-ups created jobs for youth.',
        hi: 'स्किल सेंटर और उद्योग सहयोग से युवाओं के लिए रोजगार बना।',
        mr: 'कौशल्य केंद्रे व उद्योग भागीदारीतून युवकांना रोजगार उपलब्ध.',
      },
    },
    {
      icon: 'Leaf',
      title: {
        en: '1 Million Trees Planted',
        hi: '10 लाख पौधे रोपे',
        mr: '१० लाख वृक्ष लागवड',
      },
      description: {
        en: 'Community plantation drives improved green cover and air quality.',
        hi: 'जनभागीदारी वृक्षारोपण से हरित क्षेत्र और वायु गुणवत्ता में सुधार।',
        mr: 'सामुदायिक वृक्षारोपणामुळे हरितक्षेत्र आणि वायू गुणवत्ता वाढली.',
      },
    },
    {
      icon: 'Droplets',
      title: {
        en: '100+ Water Projects',
        hi: '100+ जल परियोजनाएं',
        mr: '१००+ जल प्रकल्प',
      },
      description: {
        en: 'Sustainable drinking water infrastructure reached every settlement.',
        hi: 'स्थायी पेयजल ढांचा हर बस्ती तक पहुंचाया गया।',
        mr: 'शाश्वत पिण्याचे पाणी प्रकल्प प्रत्येक वस्तीपर्यंत पोहोचवले.',
      },
    },
  ],
};

export const VISION = {
  title: {
    en: 'Vision 2030',
    hi: 'विजन 2030',
    mr: 'व्हिजन 2030',
  },
  points: [
    {
      en: 'Smart civic services with transparent ward-level dashboards.',
      hi: 'पारदर्शी वार्ड डैशबोर्ड के साथ स्मार्ट नागरिक सेवाएं।',
      mr: 'पारदर्शक वॉर्ड डॅशबोर्डसह स्मार्ट नागरी सेवा.',
    },
    {
      en: 'High-quality municipal schools and career pathways for youth.',
      hi: 'उच्च गुणवत्ता वाले नगर विद्यालय और युवाओं के लिए करियर अवसर।',
      mr: 'उच्च दर्जाच्या महापालिका शाळा आणि युवकांसाठी करिअर संधी.',
    },
    {
      en: 'Green mobility, safer roads, and walkable neighborhood plans.',
      hi: 'हरित परिवहन, सुरक्षित सड़कें और पैदल-अनुकूल मोहल्ले।',
      mr: 'हरित वाहतूक, सुरक्षित रस्ते आणि चालण्यायोग्य परिसर योजना.',
    },
    {
      en: 'Women-led self-help ecosystems and stronger safety response.',
      hi: 'महिला स्व-सहायता समूहों को बढ़ावा और बेहतर सुरक्षा तंत्र।',
      mr: 'महिला बचत गट बळकटीकरण आणि मजबूत सुरक्षा यंत्रणा.',
    },
    {
      en: 'Accessible healthcare in every ward through local wellness clinics.',
      hi: 'हर वार्ड में स्थानीय वेलनेस क्लीनिक के माध्यम से सुलभ स्वास्थ्य सेवा।',
      mr: 'प्रत्येक वॉर्डमध्ये स्थानिक वेलनेस क्लिनिकद्वारे सुलभ आरोग्य सेवा.',
    },
    {
      en: 'Water security through reuse, harvesting, and modern pipelines.',
      hi: 'रीयूज, हार्वेस्टिंग और आधुनिक पाइपलाइन से जल सुरक्षा।',
      mr: 'रीयूज, हार्वेस्टिंग आणि आधुनिक पाईपलाईनद्वारे जलसुरक्षा.',
    },
  ],
};

export const GALLERY = {
  title: {
    en: 'Moments from the Ground',
    hi: 'जमीनी कार्य की झलकियां',
    mr: 'प्रत्यक्ष कामाचे क्षण',
  },
  images: [
    {
      src: SITE_IMAGES.gallery.speech,
      alt: {
        en: 'Addressing a public meeting',
        hi: 'जनसभा को संबोधित करते हुए',
        mr: 'जनसभेला संबोधित करताना',
      },
    },
    {
      src: SITE_IMAGES.gallery.hospital,
      alt: {
        en: 'Visiting a health facility',
        hi: 'स्वास्थ्य केंद्र का दौरा',
        mr: 'आरोग्य केंद्र भेट',
      },
    },
    {
      src: SITE_IMAGES.gallery.school,
      alt: {
        en: 'Interacting with school students',
        hi: 'स्कूल छात्रों से संवाद',
        mr: 'शाळेतील विद्यार्थ्यांशी संवाद',
      },
    },
    {
      src: SITE_IMAGES.gallery.farmers,
      alt: {
        en: 'Discussion with farmers',
        hi: 'किसानों के साथ चर्चा',
        mr: 'शेतकऱ्यांशी संवाद',
      },
    },
    {
      src: SITE_IMAGES.gallery.youth,
      alt: {
        en: 'Youth skill development session',
        hi: 'युवा कौशल विकास सत्र',
        mr: 'युवा कौशल्य विकास सत्र',
      },
    },
    {
      src: SITE_IMAGES.gallery.women,
      alt: {
        en: 'Women self-help group meetup',
        hi: 'महिला समूह बैठक',
        mr: 'महिला बचत गट बैठक',
      },
    },
  ],
};

export const CONTACT_INFO = {
  title: {
    en: 'Connect With Us',
    hi: 'हमसे जुड़ें',
    mr: 'आमच्याशी संपर्क साधा',
  },
  office: {
    label: {
      en: 'Main Office',
      hi: 'मुख्य कार्यालय',
      mr: 'मुख्य कार्यालय',
    },
    value: {
      en: '123 Parliament Street, Pune - 411001',
      hi: '123 पार्लियामेंट स्ट्रीट, पुणे - 411001',
      mr: '१२३ पार्लियामेंट स्ट्रीट, पुणे - ४११००१',
    },
  },
  constituency: {
    label: {
      en: 'Constituency Help Center',
      hi: 'निर्वाचन सहायता केंद्र',
      mr: 'मतदारसंघ सहाय्य केंद्र',
    },
    value: {
      en: '45 Gandhi Road, Pune - 400001',
      hi: '45 गांधी रोड, पुणे - 400001',
      mr: '४५ गांधी रोड, पुणे - ४००००१',
    },
  },
  phone: '+91 96230 64777',
  email: 'support@nileshnikam.in',
  social: {
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
};

export const UI_TEXT = {
  readMore: {
    en: 'Know More',
    hi: 'और जानें',
    mr: 'अधिक जाणून घ्या',
  },
  sendMessage: {
    en: 'Send Message',
    hi: 'संदेश भेजें',
    mr: 'संदेश पाठवा',
  },
  yourName: {
    en: 'Your Name',
    hi: 'आपका नाम',
    mr: 'तुमचे नाव',
  },
  yourEmail: {
    en: 'Your Email',
    hi: 'आपका ईमेल',
    mr: 'तुमचा ईमेल',
  },
  message: {
    en: 'Message',
    hi: 'संदेश',
    mr: 'संदेश',
  },
  followUs: {
    en: 'Follow Us',
    hi: 'हमें फॉलो करें',
    mr: 'आम्हाला फॉलो करा',
  },
  phone: {
    en: 'Phone',
    hi: 'फोन',
    mr: 'फोन',
  },
  email: {
    en: 'Email',
    hi: 'ईमेल',
    mr: 'ईमेल',
  },
  allRightsReserved: {
    en: 'All rights reserved.',
    hi: 'सर्वाधिकार सुरक्षित।',
    mr: 'सर्व हक्क राखीव.',
  },
};
