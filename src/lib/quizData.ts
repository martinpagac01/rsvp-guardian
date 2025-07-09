export interface QuizQuestion {
  question: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
  feedback: {
    correct: string;
    incorrect: string;
  };
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'Ako sa začal tento epický romantický príbeh?',
    answers: [
      { text: 'Boli sme kolegovia v Nespresso', isCorrect: true },
      { text: 'Našli sme sa na Tindri', isCorrect: false },
      { text: 'Omylom si sadli jeden druhému na koleno v metre', isCorrect: false },
    ],
    feedback: {
      correct: '„Skvelá káva, ešte lepší flirt.“',
      incorrect: '„Ale tá verzia s metrom by bol tiež veľmi cool.“',
    },
  },
  {
    question: 'Kto vládol domácnosti pred Gigi?',
    answers: [
      { text: 'Veronika', isCorrect: false },
      { text: 'Zajac menom Ňufa', isCorrect: true },
      { text: 'Kaktus menom Karel', isCorrect: false },
    ],
    feedback: {
      correct: '„Kráľovná Ňufa. Nech jej je trávnik mäkký.“',
      incorrect: '„Blízko... ale bola to Ňufa. Nech jej je trávnik mäkký.“',
    },
  },
  {
    question: 'Kto v tomto vzťahu impulzívnejšie nakupuje?',
    answers: [
      { text: 'Maťo', isCorrect: false },
      { text: 'Veronika', isCorrect: true },
      { text: 'Gigi', isCorrect: false },
    ],
    feedback: {
      correct: '„Veronika si raz kúpila gauč do obývačky počas obednej prestávky. Len tak.“',
      incorrect: '„Maťo rozmýšľa 3× aj nad kebabom.“',
    },
  },
  {
    question: 'Kde Maťo a Veronika spolu bývali ako “fancy pár”, kým sa presťahovali do Veľkej Chuchle?',
    answers: [
      { text: 'Letná', isCorrect: true },
      { text: 'Barrandov', isCorrect: false },
      { text: 'V karavane zaparkovanom pri Lidli', isCorrect: false },
    ],
    feedback: {
      correct: '„Letná. Krásny veľký byt. Rastliny. Víno. Ako bohatí influenceri bez spoluprác“',
      incorrect: '„Karavan bol sen, ale Letná mala kúpeľňu.“',
    },
  },
  {
    question: 'Čo je pravda o Veronikinej dvojičke?',
    answers: [
      { text: 'Vyzerajú úplne rovnako', isCorrect: false },
      { text: 'Vyzerá ako Veronikina filmová antihrdinka', isCorrect: false },
      { text: 'Maťo ich stále nevie rozoznať', isCorrect: true },
    ],
    feedback: {
      correct: '„Sú ako Prosecco a minerálka. Každá úplne iná.“',
      incorrect: '„Maťo tvrdí, že ich rozozná. Väčšinou.“',
    },
  },
  {
    question: 'Kto zvláda alkohol lepšie (technicky)?',
    answers: [
      { text: 'Maťo', isCorrect: true },
      { text: 'Veronika', isCorrect: false },
      { text: 'Záleží od fázy mesiaca', isCorrect: false },
    ],
    feedback: {
      correct: '„Maťo sa opije rýchlo, ale prežije. Veronika? Každý pokus = katastrofa.“',
      incorrect: '„Snaží sa. Fakt sa snaží.“',
    },
  },
  {
    question: 'Čo si Veronika naozaj pomyslí, keď vráti vec do obchodu a dostane späť peniaze?',
    answers: [
      { text: '„Skvelé, práve som zarobila 1200 Kč!“', isCorrect: true },
      { text: '„Fajn, mám späť, čo bolo moje.“', isCorrect: false },
      { text: '„To bol férový zero-sum game.“', isCorrect: false },
    ],
    feedback: {
      correct: '„Áno, Veronikin finančný mindset: refund = príjem. Daňový úrad by zaplakal.“',
      incorrect: '„Nie nie, žiadna rovnováha. Tu ide o nový príjem a nový dôvod na nákup.“',
    },
  },
  {
    question: 'Čoho sa Veronika v skutočnosti bojí?',
    answers: [
      { text: 'Lietania', isCorrect: true },
      { text: 'Že jej dôjdu octové čipsy', isCorrect: false },
      { text: 'Že ju Gigi súdi za outfit', isCorrect: false },
    ],
    feedback: {
      correct: '„Lietanie. Najmä keď letenky bookuje Maťo.“',
      incorrect: '„Ale Gigi sa fakt občas tvári veľmi hodnotiaco.“',
    },
  },
  {
    question: 'Čo spraví Maťo, keď Veronika navrhne kúpiť niečo úplne zbytočné?',
    answers: [
      { text: 'Usmeje sa a súhlasí', isCorrect: false },
      { text: 'V hlave mu nabehne ROIka tejto investície', isCorrect: true },
      { text: 'Odpadne', isCorrect: false },
    ],
    feedback: {
      correct: '„Otvorí si v hlave ROIku a začne počítať budúcnosť.“',
      incorrect: '„Odpadne len ak to stojí nad 2 000 Kč.“',
    },
  },
  {
    question: 'Prečo bol Maťo istý čas ‘zadržaný’ v Kodani?',
    answers: [
      { text: 'Vylúpil pekáreň', isCorrect: false },
      { text: 'Lietal s dronom bez povolenia', isCorrect: true },
      { text: 'Pokúšal sa prepašovať kapsule Nespresso', isCorrect: false },
    ],
    feedback: {
      correct: '„Áno, dôvod bol len dron. Ale stálo to za to.“',
      incorrect: '„Aj dánska polícia ocenila jeho letecké schopnosti.“',
    },
  },
];
