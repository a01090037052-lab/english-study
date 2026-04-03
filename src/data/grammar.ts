export interface GrammarLesson {
  id: string;
  title: string;
  titleKo: string;
  category: string;
  level: number;
  explanation: string;
  rules: { rule: string; ruleKo: string }[];
  examples: { en: string; ko: string }[];
  quiz: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  }[];
}

export const grammarLessons: GrammarLesson[] = [
  {
    id: "be-verb",
    title: "Be Verb",
    titleKo: "Be동사 (am, is, are)",
    category: "기초",
    level: 1,
    explanation:
      "Be동사는 영어에서 가장 기본이 되는 동사입니다. 주어에 따라 am, is, are로 변합니다.",
    rules: [
      { rule: "I + am", ruleKo: "나는 ~이다" },
      { rule: "He/She/It + is", ruleKo: "그/그녀/그것은 ~이다" },
      { rule: "You/We/They + are", ruleKo: "너/우리/그들은 ~이다" },
    ],
    examples: [
      { en: "I am a student.", ko: "나는 학생이다." },
      { en: "She is happy.", ko: "그녀는 행복하다." },
      { en: "They are my friends.", ko: "그들은 내 친구들이다." },
      { en: "It is cold today.", ko: "오늘 춥다." },
      { en: "We are ready.", ko: "우리는 준비됐다." },
    ],
    quiz: [
      {
        question: 'I ___ a teacher.',
        options: ["am", "is", "are", "be"],
        answer: 0,
        explanation: "I 뒤에는 항상 am을 씁니다.",
      },
      {
        question: 'She ___ very tall.',
        options: ["am", "is", "are", "be"],
        answer: 1,
        explanation: "She는 3인칭 단수이므로 is를 씁니다.",
      },
      {
        question: 'They ___ from Korea.',
        options: ["am", "is", "are", "be"],
        answer: 2,
        explanation: "They는 복수이므로 are를 씁니다.",
      },
      {
        question: 'My dog ___ cute.',
        options: ["am", "is", "are", "be"],
        answer: 1,
        explanation: "My dog은 3인칭 단수(It)이므로 is를 씁니다.",
      },
    ],
  },
  {
    id: "present-tense",
    title: "Present Simple",
    titleKo: "현재시제",
    category: "시제",
    level: 1,
    explanation:
      "현재시제는 습관, 반복되는 행동, 일반적인 사실을 표현할 때 사용합니다. 3인칭 단수(he, she, it)에는 동사에 -s/-es를 붙입니다.",
    rules: [
      { rule: "I/You/We/They + 동사원형", ruleKo: "I like coffee." },
      { rule: "He/She/It + 동사-s/-es", ruleKo: "She likes coffee." },
      {
        rule: "부정: do/does + not + 동사원형",
        ruleKo: "I don't like coffee.",
      },
      {
        rule: "의문: Do/Does + 주어 + 동사원형?",
        ruleKo: "Do you like coffee?",
      },
    ],
    examples: [
      { en: "I drink water every morning.", ko: "나는 매일 아침 물을 마신다." },
      { en: "She works at a hospital.", ko: "그녀는 병원에서 일한다." },
      { en: "They don't eat meat.", ko: "그들은 고기를 먹지 않는다." },
      { en: "Does he speak English?", ko: "그는 영어를 하나요?" },
      { en: "The sun rises in the east.", ko: "해는 동쪽에서 뜬다." },
    ],
    quiz: [
      {
        question: 'She ___ to school every day.',
        options: ["go", "goes", "going", "gone"],
        answer: 1,
        explanation: "She는 3인칭 단수이므로 goes를 씁니다.",
      },
      {
        question: 'They ___ coffee in the morning.',
        options: ["drinks", "drink", "drinking", "drank"],
        answer: 1,
        explanation: "They는 복수이므로 동사원형 drink를 씁니다.",
      },
      {
        question: '___ he like pizza?',
        options: ["Do", "Does", "Is", "Are"],
        answer: 1,
        explanation: "3인칭 단수 의문문에는 Does를 씁니다.",
      },
      {
        question: 'I ___ not understand.',
        options: ["do", "does", "am", "is"],
        answer: 0,
        explanation: "I와 함께 쓰는 부정문에는 do not을 씁니다.",
      },
    ],
  },
  {
    id: "past-tense",
    title: "Past Simple",
    titleKo: "과거시제",
    category: "시제",
    level: 2,
    explanation:
      "과거시제는 과거에 일어난 일을 표현합니다. 규칙 동사는 -ed를 붙이고, 불규칙 동사는 형태가 변합니다.",
    rules: [
      { rule: "규칙: 동사 + -ed", ruleKo: "worked, played, wanted" },
      { rule: "불규칙: 형태 변화", ruleKo: "go→went, eat→ate, have→had" },
      {
        rule: "부정: did + not + 동사원형",
        ruleKo: "I didn't go.",
      },
      {
        rule: "의문: Did + 주어 + 동사원형?",
        ruleKo: "Did you go?",
      },
    ],
    examples: [
      { en: "I went to the store yesterday.", ko: "나는 어제 가게에 갔다." },
      { en: "She cooked dinner last night.", ko: "그녀는 어젯밤 저녁을 요리했다." },
      { en: "We didn't watch the movie.", ko: "우리는 그 영화를 보지 않았다." },
      { en: "Did you finish your homework?", ko: "숙제를 끝냈니?" },
      { en: "They had a great time.", ko: "그들은 좋은 시간을 보냈다." },
    ],
    quiz: [
      {
        question: 'I ___ to the park yesterday.',
        options: ["go", "goes", "went", "going"],
        answer: 2,
        explanation: "go의 과거형은 went입니다.",
      },
      {
        question: 'She ___ a delicious cake.',
        options: ["make", "makes", "making", "made"],
        answer: 3,
        explanation: "make의 과거형은 made입니다.",
      },
      {
        question: 'They ___ not come to the party.',
        options: ["do", "does", "did", "are"],
        answer: 2,
        explanation: "과거 부정문에는 did not을 씁니다.",
      },
      {
        question: '___ you eat breakfast this morning?',
        options: ["Do", "Does", "Did", "Are"],
        answer: 2,
        explanation: "과거 의문문에는 Did를 씁니다.",
      },
    ],
  },
  {
    id: "future-tense",
    title: "Future Tense",
    titleKo: "미래시제 (will / be going to)",
    category: "시제",
    level: 2,
    explanation:
      "미래시제는 앞으로 일어날 일을 표현합니다. will은 즉석 결정이나 예측에, be going to는 이미 계획된 일이나 근거 있는 예측에 주로 사용합니다.",
    rules: [
      { rule: "will + 동사원형", ruleKo: "즉석 결정·단순 예측: I will help you." },
      { rule: "am/is/are going to + 동사원형", ruleKo: "계획·근거 있는 예측: I am going to study abroad." },
      { rule: "부정: will not(won't) / am/is/are not going to", ruleKo: "She won't come. / He isn't going to leave." },
      { rule: "의문: Will + 주어 + 동사원형? / Am/Is/Are + 주어 + going to + 동사원형?", ruleKo: "Will you join us? / Are you going to join us?" },
    ],
    examples: [
      { en: "I will call you later.", ko: "나중에 전화할게." },
      { en: "She is going to visit her parents this weekend.", ko: "그녀는 이번 주말에 부모님을 방문할 예정이다." },
      { en: "It will rain tomorrow.", ko: "내일 비가 올 것이다." },
      { en: "We are not going to give up.", ko: "우리는 포기하지 않을 것이다." },
      { en: "Will you help me with this?", ko: "이것 좀 도와줄래?" },
    ],
    quiz: [
      {
        question: 'I ___ help you with your homework.',
        options: ["will", "going to", "am going", "do"],
        answer: 0,
        explanation: "즉석에서 도움을 제안할 때는 will을 씁니다.",
      },
      {
        question: 'She ___ going to travel to Japan next month.',
        options: ["will", "is", "are", "does"],
        answer: 1,
        explanation: "She는 3인칭 단수이므로 is going to를 씁니다.",
      },
      {
        question: 'They ___ not attend the meeting tomorrow.',
        options: ["will", "are", "do", "does"],
        answer: 0,
        explanation: "미래 부정문에서 will not(won't)을 쓸 수 있습니다.",
      },
      {
        question: '___ you going to apply for the job?',
        options: ["Will", "Are", "Do", "Did"],
        answer: 1,
        explanation: "be going to 의문문은 Be동사(Are)를 앞으로 보냅니다.",
      },
    ],
  },
  {
    id: "present-continuous",
    title: "Present Continuous",
    titleKo: "현재진행형 (am/is/are + -ing)",
    category: "시제",
    level: 1,
    explanation:
      "현재진행형은 지금 이 순간 진행 중인 동작이나 임시적인 상황을 표현합니다. 'am/is/are + 동사-ing' 형태로 만듭니다.",
    rules: [
      { rule: "I + am + 동사-ing", ruleKo: "I am reading a book." },
      { rule: "He/She/It + is + 동사-ing", ruleKo: "She is sleeping now." },
      { rule: "You/We/They + are + 동사-ing", ruleKo: "They are playing soccer." },
      { rule: "부정: am/is/are + not + 동사-ing", ruleKo: "I am not working today." },
    ],
    examples: [
      { en: "I am studying English right now.", ko: "나는 지금 영어를 공부하고 있다." },
      { en: "She is talking on the phone.", ko: "그녀는 전화 통화 중이다." },
      { en: "They are waiting for the bus.", ko: "그들은 버스를 기다리고 있다." },
      { en: "He is not listening to me.", ko: "그는 내 말을 듣고 있지 않다." },
      { en: "Are you coming to the party tonight?", ko: "오늘 밤 파티에 올 거야?" },
    ],
    quiz: [
      {
        question: 'She ___ watching TV right now.',
        options: ["am", "is", "are", "does"],
        answer: 1,
        explanation: "She는 3인칭 단수이므로 is를 씁니다.",
      },
      {
        question: 'We ___ eating lunch at the moment.',
        options: ["am", "is", "are", "do"],
        answer: 2,
        explanation: "We는 복수이므로 are를 씁니다.",
      },
      {
        question: 'I am ___ a letter to my friend.',
        options: ["write", "writes", "writing", "wrote"],
        answer: 2,
        explanation: "현재진행형은 am/is/are + 동사-ing 형태입니다. write의 -ing 형태는 writing입니다.",
      },
      {
        question: '___ they playing basketball now?',
        options: ["Do", "Does", "Are", "Is"],
        answer: 2,
        explanation: "현재진행형 의문문은 Be동사(Are)를 주어 앞으로 보냅니다.",
      },
    ],
  },
  {
    id: "present-perfect",
    title: "Present Perfect",
    titleKo: "현재완료 (have/has + p.p.)",
    category: "시제",
    level: 3,
    explanation:
      "현재완료는 과거에 시작된 일이 현재까지 영향을 미치거나, 경험·완료·계속을 나타낼 때 사용합니다. 'have/has + 과거분사(p.p.)' 형태로 만듭니다.",
    rules: [
      { rule: "I/You/We/They + have + p.p.", ruleKo: "I have finished my work." },
      { rule: "He/She/It + has + p.p.", ruleKo: "She has lived here for 5 years." },
      { rule: "부정: have/has + not + p.p.", ruleKo: "I haven't seen that movie." },
      { rule: "경험: have/has + ever/never + p.p.", ruleKo: "Have you ever been to Paris?" },
    ],
    examples: [
      { en: "I have visited London twice.", ko: "나는 런던을 두 번 방문한 적이 있다." },
      { en: "She has already eaten lunch.", ko: "그녀는 이미 점심을 먹었다." },
      { en: "We have known each other since childhood.", ko: "우리는 어린 시절부터 서로 알고 지냈다." },
      { en: "He hasn't called me yet.", ko: "그는 아직 나에게 전화하지 않았다." },
      { en: "Have you ever tried Korean food?", ko: "한국 음식을 먹어 본 적 있나요?" },
    ],
    quiz: [
      {
        question: 'She ___ just finished her homework.',
        options: ["have", "has", "had", "is"],
        answer: 1,
        explanation: "She는 3인칭 단수이므로 has를 씁니다.",
      },
      {
        question: 'I have ___ to Japan three times.',
        options: ["go", "went", "been", "going"],
        answer: 2,
        explanation: "'~에 가 본 적 있다'는 have been to를 씁니다. go의 과거분사는 gone이지만, 경험을 나타낼 때는 been을 사용합니다.",
      },
      {
        question: 'They ___ not received the package yet.',
        options: ["have", "has", "did", "do"],
        answer: 0,
        explanation: "They는 복수이므로 have not을 씁니다.",
      },
      {
        question: 'How long ___ you lived in Seoul?',
        options: ["do", "did", "have", "are"],
        answer: 2,
        explanation: "과거부터 현재까지 계속된 상황을 물을 때 현재완료(have)를 씁니다.",
      },
    ],
  },
  {
    id: "modal-verbs",
    title: "Modal Verbs",
    titleKo: "조동사 (can, could, should, must, may)",
    category: "기초",
    level: 2,
    explanation:
      "조동사는 동사 앞에 놓여 능력, 허가, 의무, 추측 등의 의미를 더합니다. 조동사 뒤에는 항상 동사원형이 옵니다.",
    rules: [
      { rule: "can: 능력/허가", ruleKo: "~할 수 있다 / ~해도 된다" },
      { rule: "should: 조언/의무", ruleKo: "~해야 한다 (권고)" },
      { rule: "must: 강한 의무/확신", ruleKo: "~해야 한다 (필수) / ~임에 틀림없다" },
      { rule: "may: 허가/추측", ruleKo: "~해도 된다 / ~일지도 모른다" },
    ],
    examples: [
      { en: "I can swim very well.", ko: "나는 수영을 아주 잘할 수 있다." },
      { en: "You should see a doctor.", ko: "의사에게 가 봐야 해." },
      { en: "Students must wear uniforms.", ko: "학생들은 교복을 입어야 한다." },
      { en: "It may rain this afternoon.", ko: "오후에 비가 올지도 모른다." },
      { en: "Could you open the window, please?", ko: "창문 좀 열어 주시겠어요?" },
    ],
    quiz: [
      {
        question: 'You ___ brush your teeth before bed.',
        options: ["can", "should", "may", "could"],
        answer: 1,
        explanation: "건강을 위한 조언/권고에는 should를 씁니다.",
      },
      {
        question: 'She ___ speak three languages.',
        options: ["must", "should", "can", "may"],
        answer: 2,
        explanation: "능력을 나타낼 때는 can을 씁니다.",
      },
      {
        question: 'Passengers ___ fasten their seatbelts during takeoff.',
        options: ["can", "may", "should", "must"],
        answer: 3,
        explanation: "안전 규칙처럼 반드시 따라야 하는 의무에는 must를 씁니다.",
      },
      {
        question: '___ I use your phone for a moment?',
        options: ["Must", "Should", "May", "Will"],
        answer: 2,
        explanation: "정중하게 허가를 구할 때는 May I ~?를 씁니다.",
      },
    ],
  },
  {
    id: "comparatives",
    title: "Comparatives & Superlatives",
    titleKo: "비교급과 최상급 (-er/-est, more/most)",
    category: "문법",
    level: 2,
    explanation:
      "비교급은 두 대상을 비교할 때, 최상급은 셋 이상에서 가장 뛰어난 것을 나타낼 때 사용합니다. 짧은 형용사는 -er/-est를, 긴 형용사는 more/most를 붙입니다.",
    rules: [
      { rule: "짧은 형용사: -er (비교급), -est (최상급)", ruleKo: "tall → taller → tallest" },
      { rule: "긴 형용사: more (비교급), most (최상급)", ruleKo: "beautiful → more beautiful → most beautiful" },
      { rule: "비교급 + than", ruleKo: "She is taller than me." },
      { rule: "the + 최상급 + in/of", ruleKo: "He is the tallest in the class." },
    ],
    examples: [
      { en: "This book is cheaper than that one.", ko: "이 책이 저 책보다 더 싸다." },
      { en: "She is the smartest student in the class.", ko: "그녀는 반에서 가장 똑똑한 학생이다." },
      { en: "English is more useful than Latin.", ko: "영어가 라틴어보다 더 유용하다." },
      { en: "This is the most delicious cake I have ever eaten.", ko: "이것은 내가 먹어 본 가장 맛있는 케이크다." },
      { en: "My brother is older than me.", ko: "내 형(오빠)은 나보다 나이가 많다." },
    ],
    quiz: [
      {
        question: 'Mt. Everest is the ___ mountain in the world.',
        options: ["higher", "highest", "more high", "most high"],
        answer: 1,
        explanation: "high는 짧은 형용사이므로 최상급은 highest입니다.",
      },
      {
        question: 'This problem is ___ difficult than the last one.',
        options: ["most", "more", "difficulter", "the most"],
        answer: 1,
        explanation: "difficult는 긴 형용사이므로 비교급에 more를 씁니다.",
      },
      {
        question: 'A car is ___ than a bicycle.',
        options: ["fast", "faster", "fastest", "more fast"],
        answer: 1,
        explanation: "fast는 짧은 형용사이므로 비교급은 faster입니다. than 앞에는 비교급이 옵니다.",
      },
      {
        question: 'She is the ___ beautiful woman I know.',
        options: ["more", "most", "beautifulest", "beautifuler"],
        answer: 1,
        explanation: "beautiful은 긴 형용사이므로 최상급에 most를 씁니다.",
      },
    ],
  },
  {
    id: "prepositions",
    title: "Prepositions",
    titleKo: "전치사 (in, on, at, for, to, with)",
    category: "기초",
    level: 1,
    explanation:
      "전치사는 명사 앞에 놓여 시간, 장소, 방향 등의 관계를 나타냅니다. 영어에서 가장 자주 쓰이는 전치사의 쓰임을 익히는 것이 중요합니다.",
    rules: [
      { rule: "at: 구체적 시각/지점", ruleKo: "at 3 o'clock / at the bus stop" },
      { rule: "on: 요일/날짜/표면 위", ruleKo: "on Monday / on the table" },
      { rule: "in: 월/년/계절/넓은 공간 안", ruleKo: "in January / in the room" },
      { rule: "for: 기간/목적, to: 방향/대상", ruleKo: "for two hours / go to school" },
    ],
    examples: [
      { en: "The meeting is at 10 a.m.", ko: "회의는 오전 10시에 있다." },
      { en: "I was born on March 5th.", ko: "나는 3월 5일에 태어났다." },
      { en: "She lives in Seoul.", ko: "그녀는 서울에 산다." },
      { en: "I studied for three hours.", ko: "나는 세 시간 동안 공부했다." },
      { en: "He went to the library with his friend.", ko: "그는 친구와 함께 도서관에 갔다." },
    ],
    quiz: [
      {
        question: 'The class starts ___ 9 o\'clock.',
        options: ["in", "on", "at", "for"],
        answer: 2,
        explanation: "구체적인 시각 앞에는 at을 씁니다.",
      },
      {
        question: 'I have a meeting ___ Friday.',
        options: ["in", "on", "at", "to"],
        answer: 1,
        explanation: "요일 앞에는 on을 씁니다.",
      },
      {
        question: 'She was born ___ 1995.',
        options: ["at", "on", "in", "for"],
        answer: 2,
        explanation: "연도 앞에는 in을 씁니다.",
      },
      {
        question: 'I waited ___ the bus ___ 30 minutes.',
        options: ["to / in", "for / for", "at / on", "in / at"],
        answer: 1,
        explanation: "'~을 기다리다'는 wait for, 기간을 나타낼 때도 for를 씁니다.",
      },
    ],
  },
  {
    id: "articles",
    title: "Articles",
    titleKo: "관사 (a, an, the)",
    category: "기초",
    level: 1,
    explanation:
      "관사는 명사 앞에 놓여 그 명사가 특정한 것인지 불특정한 것인지를 나타냅니다. a/an은 부정관사(불특정), the는 정관사(특정)입니다.",
    rules: [
      { rule: "a + 자음 소리로 시작하는 단수 명사", ruleKo: "a book, a cat, a university" },
      { rule: "an + 모음 소리로 시작하는 단수 명사", ruleKo: "an apple, an hour, an umbrella" },
      { rule: "the: 이미 알고 있는 특정 대상", ruleKo: "the sun, the book I read" },
      { rule: "무관사: 일반적 복수/불가산 명사", ruleKo: "I like music. / Dogs are loyal." },
    ],
    examples: [
      { en: "I saw a cat on the street.", ko: "나는 길에서 고양이 한 마리를 봤다." },
      { en: "She is an honest person.", ko: "그녀는 정직한 사람이다." },
      { en: "The movie was really interesting.", ko: "그 영화는 정말 재미있었다." },
      { en: "I need an umbrella.", ko: "나는 우산이 하나 필요하다." },
      { en: "Water is essential for life.", ko: "물은 생명에 필수적이다." },
    ],
    quiz: [
      {
        question: 'She is ___ engineer.',
        options: ["a", "an", "the", "없음"],
        answer: 1,
        explanation: "engineer는 모음 소리(e)로 시작하므로 an을 씁니다.",
      },
      {
        question: 'I bought ___ new phone yesterday. ___ phone is really fast.',
        options: ["a / A", "a / The", "the / A", "an / The"],
        answer: 1,
        explanation: "처음 언급할 때는 a, 이미 언급한 대상을 다시 가리킬 때는 the를 씁니다.",
      },
      {
        question: 'He has ___ university degree.',
        options: ["a", "an", "the", "없음"],
        answer: 0,
        explanation: "university는 /juː/로 자음 소리로 시작하므로 a를 씁니다.",
      },
      {
        question: '___ sun rises in the east.',
        options: ["A", "An", "The", "없음"],
        answer: 2,
        explanation: "해(sun)는 세상에 하나뿐인 유일한 것이므로 the를 씁니다.",
      },
    ],
  },
  {
    id: "question-words",
    title: "Question Words",
    titleKo: "의문사 (who, what, where, when, why, how)",
    category: "기초",
    level: 1,
    explanation:
      "의문사는 구체적인 정보를 물을 때 사용합니다. Yes/No로 대답하는 질문과 달리, 의문사 질문은 구체적인 내용으로 대답해야 합니다.",
    rules: [
      { rule: "Who: 사람, What: 사물/행위", ruleKo: "Who is she? / What is this?" },
      { rule: "Where: 장소, When: 시간", ruleKo: "Where do you live? / When is the meeting?" },
      { rule: "Why: 이유, How: 방법/상태", ruleKo: "Why are you late? / How are you?" },
      { rule: "의문사 + 조동사/be + 주어 + 동사?", ruleKo: "What do you want? / Where is he?" },
    ],
    examples: [
      { en: "Who is your favorite singer?", ko: "네가 가장 좋아하는 가수는 누구니?" },
      { en: "What did you eat for lunch?", ko: "점심으로 뭘 먹었어?" },
      { en: "Where do you work?", ko: "어디에서 일하세요?" },
      { en: "When does the train leave?", ko: "기차가 언제 출발하나요?" },
      { en: "How do you get to school?", ko: "학교에 어떻게 가니?" },
    ],
    quiz: [
      {
        question: '___ is your birthday?',
        options: ["Who", "What", "When", "Where"],
        answer: 2,
        explanation: "생일은 시간/날짜를 묻는 것이므로 When을 씁니다.",
      },
      {
        question: '___ do you want to eat?',
        options: ["Who", "What", "When", "Where"],
        answer: 1,
        explanation: "먹고 싶은 것(사물)을 묻는 것이므로 What을 씁니다.",
      },
      {
        question: '___ did you go yesterday?',
        options: ["What", "Who", "Where", "Why"],
        answer: 2,
        explanation: "간 장소를 묻는 것이므로 Where를 씁니다.",
      },
      {
        question: '___ are you learning English?',
        options: ["What", "Where", "Who", "Why"],
        answer: 3,
        explanation: "영어를 배우는 이유를 묻는 것이므로 Why를 씁니다.",
      },
    ],
  },
  // ===== 12 NEW LESSONS =====
  {
    id: "sentence-patterns",
    title: "Five Sentence Patterns",
    titleKo: "5형식 문장구조",
    category: "문법",
    level: 2,
    explanation:
      "영어 문장은 동사의 성격에 따라 5가지 형식으로 나뉩니다. 1형식(S+V)부터 5형식(S+V+O+OC)까지 문장의 구조를 이해하면 복잡한 영어 문장도 쉽게 분석할 수 있습니다.",
    rules: [
      { rule: "1형식: S + V (주어 + 동사)", ruleKo: "Birds sing. (새가 노래한다.)" },
      { rule: "2형식: S + V + C (주어 + 동사 + 보어)", ruleKo: "She looks happy. (그녀는 행복해 보인다.)" },
      { rule: "3형식: S + V + O (주어 + 동사 + 목적어)", ruleKo: "I study English. (나는 영어를 공부한다.)" },
      { rule: "4형식: S + V + IO + DO (주어 + 동사 + 간접목적어 + 직접목적어)", ruleKo: "He gave me a gift. (그가 나에게 선물을 주었다.)" },
    ],
    examples: [
      { en: "The baby sleeps.", ko: "아기가 잔다. (1형식: S+V)" },
      { en: "This soup tastes delicious.", ko: "이 수프는 맛있다. (2형식: S+V+C)" },
      { en: "She reads a book every day.", ko: "그녀는 매일 책을 읽는다. (3형식: S+V+O)" },
      { en: "My mom made me a sandwich.", ko: "엄마가 나에게 샌드위치를 만들어 주셨다. (4형식: S+V+IO+DO)" },
      { en: "We call him a genius.", ko: "우리는 그를 천재라고 부른다. (5형식: S+V+O+OC)" },
    ],
    quiz: [
      {
        question: '"She became a doctor." 이 문장은 몇 형식인가요?',
        options: ["1형식", "2형식", "3형식", "5형식"],
        answer: 1,
        explanation: "became은 연결동사이고 a doctor는 주격보어(C)이므로 2형식(S+V+C)입니다.",
      },
      {
        question: '"He gave her a flower." 이 문장은 몇 형식인가요?',
        options: ["2형식", "3형식", "4형식", "5형식"],
        answer: 2,
        explanation: "gave 뒤에 간접목적어(her)와 직접목적어(a flower)가 있으므로 4형식(S+V+IO+DO)입니다.",
      },
      {
        question: '"The news made her sad." 에서 sad의 역할은?',
        options: ["주어", "목적어", "보어", "부사"],
        answer: 2,
        explanation: "sad는 목적어 her의 상태를 설명하는 목적격보어(OC)입니다. 5형식(S+V+O+OC) 문장입니다.",
      },
      {
        question: '다음 중 1형식 문장은?',
        options: ["She is kind.", "I like music.", "Time flies.", "He told me a story."],
        answer: 2,
        explanation: "Time flies.는 주어(Time)와 동사(flies)만으로 이루어진 1형식 문장입니다.",
      },
    ],
  },
  {
    id: "past-continuous",
    title: "Past Continuous",
    titleKo: "과거진행형 (was/were + -ing)",
    category: "시제",
    level: 2,
    explanation:
      "과거진행형은 과거의 특정 시점에 진행 중이던 동작을 표현합니다. 'was/were + 동사-ing' 형태로 만들며, 과거의 배경 상황이나 동시에 일어나던 일을 나타낼 때 자주 사용합니다.",
    rules: [
      { rule: "I/He/She/It + was + 동사-ing", ruleKo: "I was sleeping at 10 p.m." },
      { rule: "You/We/They + were + 동사-ing", ruleKo: "They were playing soccer." },
      { rule: "부정: was/were + not + 동사-ing", ruleKo: "She wasn't listening." },
      { rule: "when/while과 함께: 과거진행 + when + 과거단순", ruleKo: "I was reading when he called." },
    ],
    examples: [
      { en: "I was watching TV when the phone rang.", ko: "전화가 울렸을 때 나는 TV를 보고 있었다." },
      { en: "She was cooking dinner at 7 o'clock.", ko: "그녀는 7시에 저녁을 요리하고 있었다." },
      { en: "They were studying while I was sleeping.", ko: "내가 자고 있는 동안 그들은 공부하고 있었다." },
      { en: "It was raining all day yesterday.", ko: "어제 하루 종일 비가 내리고 있었다." },
      { en: "Were you waiting for me?", ko: "나를 기다리고 있었어?" },
    ],
    quiz: [
      {
        question: 'She ___ studying when I arrived.',
        options: ["is", "was", "were", "has been"],
        answer: 1,
        explanation: "She는 3인칭 단수이고 과거 시점이므로 was를 씁니다.",
      },
      {
        question: 'They ___ playing football at 3 p.m. yesterday.',
        options: ["was", "is", "were", "are"],
        answer: 2,
        explanation: "They는 복수이므로 were + -ing를 씁니다.",
      },
      {
        question: 'I was ___ a book when the lights went out.',
        options: ["read", "reads", "reading", "readed"],
        answer: 2,
        explanation: "과거진행형은 was/were + 동사-ing 형태이므로 reading이 맞습니다.",
      },
      {
        question: 'What ___ you doing at 9 p.m. last night?',
        options: ["was", "were", "did", "are"],
        answer: 1,
        explanation: "you와 함께 과거진행형 의문문을 만들 때는 Were you doing?을 씁니다.",
      },
    ],
  },
  {
    id: "past-perfect",
    title: "Past Perfect",
    titleKo: "과거완료 (had + p.p.)",
    category: "시제",
    level: 3,
    explanation:
      "과거완료는 과거의 특정 시점보다 더 이전에 일어난 일(대과거)을 나타낼 때 사용합니다. 'had + 과거분사(p.p.)' 형태로 만들며, 두 가지 과거 사건의 선후 관계를 명확히 할 때 필수적입니다.",
    rules: [
      { rule: "had + 과거분사(p.p.)", ruleKo: "I had already eaten. (나는 이미 먹은 상태였다.)" },
      { rule: "과거완료 + before/after + 과거시제", ruleKo: "She had left before I arrived." },
      { rule: "부정: had + not + p.p.", ruleKo: "He hadn't finished his work." },
      { rule: "by the time + 과거시제, 주어 + had + p.p.", ruleKo: "By the time we got there, the movie had started." },
    ],
    examples: [
      { en: "I had already eaten when she called.", ko: "그녀가 전화했을 때 나는 이미 식사를 마친 상태였다." },
      { en: "He had never seen snow before he visited Korea.", ko: "그는 한국을 방문하기 전에는 눈을 본 적이 없었다." },
      { en: "After she had finished her homework, she went to bed.", ko: "숙제를 다 끝낸 후에 그녀는 잠자리에 들었다." },
      { en: "By the time I arrived, the train had left.", ko: "내가 도착했을 때 기차는 이미 떠난 뒤였다." },
      { en: "They had lived in Busan for 10 years before moving to Seoul.", ko: "그들은 서울로 이사하기 전에 부산에서 10년간 살았었다." },
    ],
    quiz: [
      {
        question: 'She ___ already left when I got to the office.',
        options: ["has", "have", "had", "was"],
        answer: 2,
        explanation: "과거의 한 시점(I got)보다 더 이전에 일어난 일이므로 과거완료 had를 씁니다.",
      },
      {
        question: 'By the time we arrived, the concert ___.',
        options: ["started", "has started", "had started", "starts"],
        answer: 2,
        explanation: "우리가 도착한(과거) 시점보다 콘서트 시작이 더 먼저이므로 had started(과거완료)를 씁니다.",
      },
      {
        question: 'I ___ never eaten sushi before I went to Japan.',
        options: ["have", "had", "was", "did"],
        answer: 1,
        explanation: "일본에 간(과거) 시점보다 이전의 경험을 나타내므로 had를 씁니다.",
      },
      {
        question: 'After he had ___ the letter, he threw it away.',
        options: ["read", "reads", "reading", "readed"],
        answer: 0,
        explanation: "had 뒤에는 과거분사(p.p.)가 옵니다. read의 과거분사는 read입니다.",
      },
    ],
  },
  {
    id: "passive-voice",
    title: "Passive Voice",
    titleKo: "수동태 (be + p.p.)",
    category: "문법",
    level: 3,
    explanation:
      "수동태는 행위의 대상(목적어)을 주어 자리에 놓아 '~되다, ~당하다'의 의미를 표현합니다. 'be동사 + 과거분사(p.p.)' 형태로 만들며, 행위자보다 행위의 대상이 중요할 때 사용합니다.",
    rules: [
      { rule: "능동태 → 수동태: 목적어 → 주어, 동사 → be + p.p.", ruleKo: "Tom broke the window. → The window was broken by Tom." },
      { rule: "현재 수동태: am/is/are + p.p.", ruleKo: "English is spoken worldwide." },
      { rule: "과거 수동태: was/were + p.p.", ruleKo: "The cake was made by my mom." },
      { rule: "미래/조동사 수동태: will be / can be + p.p.", ruleKo: "The problem can be solved." },
    ],
    examples: [
      { en: "This book was written by a famous author.", ko: "이 책은 유명한 작가에 의해 쓰여졌다." },
      { en: "English is spoken in many countries.", ko: "영어는 많은 나라에서 사용된다." },
      { en: "The homework must be submitted by Friday.", ko: "숙제는 금요일까지 제출되어야 한다." },
      { en: "The window was broken during the storm.", ko: "창문이 폭풍 중에 깨졌다." },
      { en: "A new hospital will be built next year.", ko: "새 병원이 내년에 지어질 것이다." },
    ],
    quiz: [
      {
        question: 'The letter ___ written by my grandmother.',
        options: ["is", "was", "were", "has"],
        answer: 1,
        explanation: "할머니가 쓴 것은 과거의 일이므로 과거 수동태 was + p.p.를 씁니다.",
      },
      {
        question: 'Rice ___ grown in Korea.',
        options: ["is", "was", "are", "were"],
        answer: 0,
        explanation: "쌀이 한국에서 재배된다는 일반적 사실이므로 현재 수동태 is + p.p.를 씁니다.",
      },
      {
        question: '"She teaches English." 를 수동태로 바꾸면?',
        options: [
          "English is taught by her.",
          "English was taught by her.",
          "English is teaching by her.",
          "English teaches by her.",
        ],
        answer: 0,
        explanation: "현재시제 능동태를 수동태로 바꾸면 is/am/are + p.p. + by 행위자가 됩니다.",
      },
      {
        question: 'The project ___ be completed by next week.',
        options: ["can", "is", "was", "has"],
        answer: 0,
        explanation: "조동사 수동태는 '조동사 + be + p.p.' 형태입니다. can be completed가 맞습니다.",
      },
    ],
  },
  {
    id: "relative-pronouns",
    title: "Relative Pronouns",
    titleKo: "관계대명사 (who, which, that)",
    category: "문법",
    level: 3,
    explanation:
      "관계대명사는 두 문장을 하나로 연결하면서 앞에 나온 명사(선행사)를 수식하는 형용사절을 이끕니다. 선행사가 사람이면 who, 사물이면 which, 둘 다 가능한 것이 that입니다.",
    rules: [
      { rule: "who: 사람(주격/목적격)", ruleKo: "The man who helped me was kind." },
      { rule: "which: 사물/동물(주격/목적격)", ruleKo: "The book which I bought is interesting." },
      { rule: "that: 사람/사물 모두 가능", ruleKo: "The girl that won the prize is my friend." },
      { rule: "whose: 소유격 관계대명사", ruleKo: "The boy whose bag is red is my brother." },
    ],
    examples: [
      { en: "I know the girl who lives next door.", ko: "나는 옆집에 사는 소녀를 안다." },
      { en: "The movie which we watched was exciting.", ko: "우리가 본 영화는 흥미진진했다." },
      { en: "This is the restaurant that my friend recommended.", ko: "이곳이 내 친구가 추천한 식당이다." },
      { en: "I met a woman whose daughter is a famous singer.", ko: "나는 딸이 유명한 가수인 여성을 만났다." },
      { en: "The teacher who teaches math is very popular.", ko: "수학을 가르치는 선생님은 매우 인기가 있다." },
    ],
    quiz: [
      {
        question: 'The man ___ is standing over there is my uncle.',
        options: ["which", "who", "whose", "where"],
        answer: 1,
        explanation: "선행사가 사람(The man)이고 주격이므로 who를 씁니다.",
      },
      {
        question: 'The car ___ he bought was very expensive.',
        options: ["who", "whose", "which", "where"],
        answer: 2,
        explanation: "선행사가 사물(The car)이므로 which를 씁니다.",
      },
      {
        question: 'I have a friend ___ father is a pilot.',
        options: ["who", "which", "that", "whose"],
        answer: 3,
        explanation: "'친구의 아버지'로 소유 관계를 나타내므로 소유격 관계대명사 whose를 씁니다.",
      },
      {
        question: 'This is the best movie ___ I have ever seen.',
        options: ["who", "which", "that", "whose"],
        answer: 2,
        explanation: "선행사에 최상급(the best)이 포함되면 관계대명사로 that을 쓰는 것이 일반적입니다.",
      },
    ],
  },
  {
    id: "relative-adverbs",
    title: "Relative Adverbs",
    titleKo: "관계부사 (where, when, why, how)",
    category: "문법",
    level: 3,
    explanation:
      "관계부사는 장소, 시간, 이유, 방법을 나타내는 선행사를 수식하는 절을 이끕니다. 관계대명사와 달리 뒤에 완전한 문장이 옵니다. '전치사 + 관계대명사'로 바꿀 수 있습니다.",
    rules: [
      { rule: "where: 장소를 나타내는 선행사 (= in/at which)", ruleKo: "This is the place where I was born." },
      { rule: "when: 시간을 나타내는 선행사 (= at/in/on which)", ruleKo: "I remember the day when we first met." },
      { rule: "why: 이유를 나타내는 선행사 the reason (= for which)", ruleKo: "That is the reason why he left." },
      { rule: "how: 방법 (선행사 the way와 함께 쓰지 않음)", ruleKo: "This is how I solved the problem." },
    ],
    examples: [
      { en: "This is the school where I studied.", ko: "이곳이 내가 다녔던 학교이다." },
      { en: "I will never forget the day when we graduated.", ko: "우리가 졸업한 날을 절대 잊지 못할 것이다." },
      { en: "Tell me the reason why you were absent.", ko: "결석한 이유를 말해 줘." },
      { en: "This is how she became successful.", ko: "이것이 그녀가 성공한 방법이다." },
      { en: "The hotel where we stayed was near the beach.", ko: "우리가 묵었던 호텔은 해변 근처에 있었다." },
    ],
    quiz: [
      {
        question: 'This is the park ___ we used to play.',
        options: ["which", "when", "where", "why"],
        answer: 2,
        explanation: "선행사가 장소(the park)이므로 관계부사 where를 씁니다.",
      },
      {
        question: 'Do you remember the time ___ we went camping?',
        options: ["where", "when", "why", "how"],
        answer: 1,
        explanation: "선행사가 시간(the time)이므로 관계부사 when을 씁니다.",
      },
      {
        question: 'That is the reason ___ I was late.',
        options: ["where", "when", "why", "how"],
        answer: 2,
        explanation: "선행사가 이유(the reason)이므로 관계부사 why를 씁니다.",
      },
      {
        question: '"This is ___ you make kimchi." 빈칸에 알맞은 것은?',
        options: ["where", "when", "why", "how"],
        answer: 3,
        explanation: "방법을 설명할 때는 관계부사 how를 씁니다. the way how는 함께 쓸 수 없으므로 how만 씁니다.",
      },
    ],
  },
  {
    id: "infinitives",
    title: "Infinitives (to-infinitive)",
    titleKo: "to부정사",
    category: "문법",
    level: 3,
    explanation:
      "to부정사는 'to + 동사원형' 형태로, 문장에서 명사, 형용사, 부사의 역할을 합니다. 명사적 용법(~하는 것), 형용사적 용법(~할), 부사적 용법(~하기 위해)으로 나뉩니다.",
    rules: [
      { rule: "명사적 용법: ~하는 것 (주어/목적어/보어)", ruleKo: "To learn English is important. / I want to travel." },
      { rule: "형용사적 용법: ~할, ~하는 (명사 수식)", ruleKo: "I need something to drink." },
      { rule: "부사적 용법: ~하기 위해 (목적/원인)", ruleKo: "She went to the store to buy milk." },
      { rule: "to부정사를 목적어로 취하는 동사: want, hope, decide, plan, expect, promise 등", ruleKo: "I decided to study harder." },
    ],
    examples: [
      { en: "To read books is my hobby.", ko: "책을 읽는 것이 나의 취미이다. (명사적 - 주어)" },
      { en: "I want to be a doctor.", ko: "나는 의사가 되고 싶다. (명사적 - 목적어)" },
      { en: "Give me something to eat.", ko: "먹을 것을 좀 주세요. (형용사적)" },
      { en: "He went to the library to study.", ko: "그는 공부하기 위해 도서관에 갔다. (부사적 - 목적)" },
      { en: "I was happy to hear the news.", ko: "나는 그 소식을 듣고 기뻤다. (부사적 - 원인)" },
    ],
    quiz: [
      {
        question: '"To exercise regularly is good for health." 에서 To exercise의 역할은?',
        options: ["목적어", "보어", "주어", "수식어"],
        answer: 2,
        explanation: "To exercise regularly가 문장의 주어 역할을 하는 명사적 용법입니다.",
      },
      {
        question: 'She decided ___ the job offer.',
        options: ["accept", "to accept", "accepting", "accepted"],
        answer: 1,
        explanation: "decide는 to부정사를 목적어로 취하는 동사입니다. decided to accept가 맞습니다.",
      },
      {
        question: '"I have a lot of homework to do." 에서 to do의 용법은?',
        options: ["명사적 용법", "형용사적 용법", "부사적 용법", "보어 역할"],
        answer: 1,
        explanation: "to do가 앞의 명사 homework을 수식하므로 형용사적 용법입니다.",
      },
      {
        question: '"He studied hard to pass the exam." 에서 to pass의 의미는?',
        options: ["~하는 것", "~할", "~하기 위해", "~한 후에"],
        answer: 2,
        explanation: "시험에 합격하기 위해 공부했다는 목적을 나타내는 부사적 용법입니다.",
      },
    ],
  },
  {
    id: "gerunds",
    title: "Gerunds",
    titleKo: "동명사 (-ing)",
    category: "문법",
    level: 3,
    explanation:
      "동명사는 '동사원형 + -ing' 형태로, 동사가 명사의 역할(주어, 목적어, 보어)을 합니다. 특정 동사들(enjoy, finish, mind, avoid, give up 등)은 동명사만을 목적어로 취합니다.",
    rules: [
      { rule: "주어 역할: 동명사 + 동사", ruleKo: "Swimming is good exercise." },
      { rule: "목적어 역할: 동사 + 동명사", ruleKo: "I enjoy reading books." },
      { rule: "보어 역할: 주어 + be + 동명사", ruleKo: "My hobby is cooking." },
      { rule: "동명사를 목적어로 취하는 동사: enjoy, finish, mind, avoid, give up, keep, practice, consider 등", ruleKo: "She finished writing the essay." },
    ],
    examples: [
      { en: "Playing the piano is her favorite activity.", ko: "피아노 치는 것이 그녀가 가장 좋아하는 활동이다." },
      { en: "I enjoy listening to music.", ko: "나는 음악 듣는 것을 즐긴다." },
      { en: "She finished cleaning the room.", ko: "그녀는 방 청소를 끝냈다." },
      { en: "Would you mind opening the window?", ko: "창문 좀 열어 주시겠어요?" },
      { en: "He avoided answering my question.", ko: "그는 내 질문에 대답하는 것을 피했다." },
    ],
    quiz: [
      {
        question: 'I enjoy ___ soccer on weekends.',
        options: ["play", "to play", "playing", "played"],
        answer: 2,
        explanation: "enjoy는 동명사를 목적어로 취하는 동사입니다. enjoy playing이 맞습니다.",
      },
      {
        question: '___ is a great way to stay healthy.',
        options: ["Exercise", "Exercising", "To exercising", "Exercised"],
        answer: 1,
        explanation: "문장의 주어로 동명사 Exercising을 쓸 수 있습니다.",
      },
      {
        question: 'She finished ___ her report.',
        options: ["write", "to write", "writing", "wrote"],
        answer: 2,
        explanation: "finish는 동명사를 목적어로 취합니다. finished writing이 맞습니다.",
      },
      {
        question: 'Do you mind ___ the door?',
        options: ["close", "to close", "closing", "closed"],
        answer: 2,
        explanation: "mind는 동명사를 목적어로 취하는 동사입니다. mind closing이 맞습니다.",
      },
    ],
  },
  {
    id: "participles",
    title: "Participles",
    titleKo: "분사 (현재분사 / 과거분사)",
    category: "문법",
    level: 4,
    explanation:
      "분사는 동사에서 파생되어 형용사 역할을 하는 말입니다. 현재분사(-ing)는 능동/진행의 의미를, 과거분사(-ed/p.p.)는 수동/완료의 의미를 나타냅니다. 특히 감정동사의 분사 구별(interesting vs interested)이 중요합니다.",
    rules: [
      { rule: "현재분사(-ing): 능동/진행 → ~하는, ~하고 있는", ruleKo: "a sleeping baby (자고 있는 아기)" },
      { rule: "과거분사(-ed/p.p.): 수동/완료 → ~된, ~당한", ruleKo: "a broken window (깨진 창문)" },
      { rule: "감정동사: -ing(감정을 유발) vs -ed(감정을 느끼는)", ruleKo: "The movie is boring. / I am bored." },
      { rule: "분사구문: 분사가 이끄는 부사구", ruleKo: "Walking along the street, I met my friend." },
    ],
    examples: [
      { en: "The barking dog scared the children.", ko: "짖는 개가 아이들을 겁먹게 했다." },
      { en: "I found a letter written in French.", ko: "나는 프랑스어로 쓰인 편지를 발견했다." },
      { en: "The movie was really exciting.", ko: "그 영화는 정말 흥미진진했다." },
      { en: "I was excited about the trip.", ko: "나는 그 여행에 신이 났다." },
      { en: "Feeling tired, she went to bed early.", ko: "피곤해서 그녀는 일찍 잠자리에 들었다." },
    ],
    quiz: [
      {
        question: 'The movie was very ___. I fell asleep.',
        options: ["boring", "bored", "bore", "bores"],
        answer: 0,
        explanation: "영화가 지루함을 유발하는 것이므로 -ing(boring)를 씁니다.",
      },
      {
        question: 'I am ___ in Korean history.',
        options: ["interesting", "interested", "interest", "interests"],
        answer: 1,
        explanation: "사람이 흥미를 느끼는 것이므로 -ed(interested)를 씁니다. interested in: ~에 관심이 있는",
      },
      {
        question: 'Look at the ___ leaves on the ground.',
        options: ["falling", "fallen", "fall", "falls"],
        answer: 1,
        explanation: "이미 땅에 떨어진(완료/수동) 나뭇잎이므로 과거분사 fallen을 씁니다.",
      },
      {
        question: 'The girl ___ by the window is my sister.',
        options: ["sit", "sitting", "sat", "sits"],
        answer: 1,
        explanation: "소녀가 능동적으로 앉아 있는 것이므로 현재분사 sitting을 씁니다. = The girl who is sitting by the window",
      },
    ],
  },
  {
    id: "conditionals",
    title: "Conditionals",
    titleKo: "가정법 (if절)",
    category: "문법",
    level: 4,
    explanation:
      "가정법은 현실과 다른 상황을 가정하거나 상상할 때 사용합니다. 가정법 과거는 현재 사실의 반대를, 가정법 과거완료는 과거 사실의 반대를 나타냅니다. 시제를 한 단계 과거로 후퇴시키는 것이 핵심입니다.",
    rules: [
      { rule: "가정법 과거: If + 주어 + 과거동사, 주어 + would/could + 동사원형", ruleKo: "현재 사실의 반대: If I were rich, I would travel the world." },
      { rule: "가정법 과거완료: If + 주어 + had p.p., 주어 + would/could have + p.p.", ruleKo: "과거 사실의 반대: If I had studied, I would have passed." },
      { rule: "I wish + 가정법 과거 (현재 소원)", ruleKo: "I wish I were taller. (키가 더 컸으면 좋겠다.)" },
      { rule: "I wish + 가정법 과거완료 (과거 후회)", ruleKo: "I wish I had studied harder. (더 열심히 공부했더라면.)" },
    ],
    examples: [
      { en: "If I had more time, I would learn to play the guitar.", ko: "시간이 더 있다면 기타를 배울 텐데. (현재 사실의 반대)" },
      { en: "If she had taken the train, she would have arrived on time.", ko: "그녀가 기차를 탔더라면 제시간에 도착했을 텐데. (과거 사실의 반대)" },
      { en: "I wish I could fly like a bird.", ko: "새처럼 날 수 있으면 좋겠다." },
      { en: "If I were you, I would apologize.", ko: "내가 너라면 사과할 텐데." },
      { en: "I wish I had not said that.", ko: "그 말을 하지 않았더라면 좋았을 텐데." },
    ],
    quiz: [
      {
        question: 'If I ___ a bird, I could fly to you.',
        options: ["am", "was", "were", "be"],
        answer: 2,
        explanation: "가정법 과거에서 be동사는 인칭에 관계없이 were를 씁니다. (구어체에서 was도 쓰지만 정식 문법은 were)",
      },
      {
        question: 'If he had studied harder, he ___ the exam.',
        options: [
          "will pass",
          "would pass",
          "would have passed",
          "has passed",
        ],
        answer: 2,
        explanation: "If + had p.p.이므로 가정법 과거완료입니다. 주절은 would have + p.p.를 씁니다.",
      },
      {
        question: 'I wish I ___ speak French.',
        options: ["can", "could", "will", "would have"],
        answer: 1,
        explanation: "현재 할 수 없는 것에 대한 소원이므로 I wish + 가정법 과거(could)를 씁니다.",
      },
      {
        question: 'If it ___ tomorrow, we will cancel the picnic.',
        options: ["rains", "rained", "would rain", "had rained"],
        answer: 0,
        explanation: "이것은 가정법이 아니라 조건문(실현 가능한 미래)입니다. If + 현재시제, will + 동사원형을 씁니다.",
      },
    ],
  },
  {
    id: "conjunctions",
    title: "Conjunctions",
    titleKo: "접속사",
    category: "문법",
    level: 2,
    explanation:
      "접속사는 단어, 구, 절을 연결하는 역할을 합니다. 등위접속사(and, but, or, so)는 대등한 요소를 연결하고, 종속접속사(because, although, if, when 등)는 주절과 종속절을 연결합니다.",
    rules: [
      { rule: "등위접속사: and(그리고), but(그러나), or(또는), so(그래서)", ruleKo: "I was tired, but I kept studying." },
      { rule: "이유: because(~때문에), since(~이므로)", ruleKo: "I stayed home because it was raining." },
      { rule: "양보: although/though(~에도 불구하고)", ruleKo: "Although it was cold, she went out." },
      { rule: "조건/시간: if(만약), when(~할 때), while(~하는 동안), unless(~하지 않으면), until(~할 때까지)", ruleKo: "I will wait until you come back." },
    ],
    examples: [
      { en: "I like coffee, but my sister likes tea.", ko: "나는 커피를 좋아하지만 여동생은 차를 좋아한다." },
      { en: "She was late because she missed the bus.", ko: "그녀는 버스를 놓쳐서 늦었다." },
      { en: "Although he is young, he is very mature.", ko: "그는 어리지만 매우 성숙하다." },
      { en: "You can't go out unless you finish your homework.", ko: "숙제를 끝내지 않으면 외출할 수 없다." },
      { en: "While I was cooking, he was cleaning the house.", ko: "내가 요리하는 동안 그는 집을 청소하고 있었다." },
    ],
    quiz: [
      {
        question: 'I wanted to go, ___ it was raining.',
        options: ["and", "but", "or", "so"],
        answer: 1,
        explanation: "가고 싶었지만 비가 온다는 대조적인 내용이므로 but(그러나)을 씁니다.",
      },
      {
        question: 'She studied hard ___ she wanted to pass the exam.',
        options: ["but", "or", "because", "although"],
        answer: 2,
        explanation: "시험에 합격하고 싶었기 때문에 열심히 공부했다는 이유를 나타내므로 because를 씁니다.",
      },
      {
        question: '___ it was very cold, he didn\'t wear a jacket.',
        options: ["Because", "Although", "Unless", "Until"],
        answer: 1,
        explanation: "매우 추웠음에도 불구하고 재킷을 입지 않았다는 양보의 의미이므로 Although를 씁니다.",
      },
      {
        question: 'I will not leave ___ you tell me the truth.',
        options: ["because", "although", "while", "until"],
        answer: 3,
        explanation: "진실을 말할 때까지 떠나지 않겠다는 의미이므로 until(~할 때까지)을 씁니다.",
      },
    ],
  },
  {
    id: "reported-speech",
    title: "Reported Speech",
    titleKo: "간접화법",
    category: "문법",
    level: 4,
    explanation:
      "간접화법은 다른 사람이 한 말을 전달할 때 사용합니다. 직접화법(따옴표 사용)을 간접화법으로 바꿀 때는 시제를 한 단계 과거로 후퇴시키고, 대명사와 시간/장소 표현도 바꿔야 합니다.",
    rules: [
      { rule: "시제 후퇴: 현재 → 과거, 과거 → 과거완료", ruleKo: "\"I am happy.\" → He said (that) he was happy." },
      { rule: "조동사 변화: will → would, can → could, may → might", ruleKo: "\"I will come.\" → She said she would come." },
      { rule: "대명사 변화: I → he/she, my → his/her, we → they", ruleKo: "\"I love my job.\" → He said he loved his job." },
      { rule: "시간/장소 변화: today → that day, here → there, now → then", ruleKo: "\"I am busy today.\" → She said she was busy that day." },
    ],
    examples: [
      { en: "He said, \"I am tired.\" → He said that he was tired.", ko: "그는 \"나는 피곤해.\"라고 말했다. → 그는 피곤하다고 말했다." },
      { en: "She said, \"I will call you tomorrow.\" → She said she would call me the next day.", ko: "그녀는 \"내일 전화할게.\"라고 했다. → 그녀는 다음 날 전화하겠다고 했다." },
      { en: "He asked, \"Do you like pizza?\" → He asked me if I liked pizza.", ko: "그는 \"피자 좋아해?\"라고 물었다. → 그는 내가 피자를 좋아하는지 물었다." },
      { en: "She told me, \"Don't be late.\" → She told me not to be late.", ko: "그녀는 \"늦지 마.\"라고 나에게 말했다. → 그녀는 나에게 늦지 말라고 했다." },
      { en: "He said, \"I have finished my homework.\" → He said that he had finished his homework.", ko: "그는 \"숙제를 끝냈어.\"라고 했다. → 그는 숙제를 끝냈다고 말했다." },
    ],
    quiz: [
      {
        question: 'She said, "I am busy." → She said that she ___ busy.',
        options: ["is", "was", "has been", "will be"],
        answer: 1,
        explanation: "직접화법의 현재시제(am)는 간접화법에서 과거시제(was)로 바뀝니다.",
      },
      {
        question: 'He said, "I will help you." → He said he ___ help me.',
        options: ["will", "would", "can", "could"],
        answer: 1,
        explanation: "직접화법의 will은 간접화법에서 would로 바뀝니다.",
      },
      {
        question: 'She asked, "Where do you live?" → She asked me where I ___.',
        options: ["live", "lived", "living", "had lived"],
        answer: 1,
        explanation: "간접화법에서 현재시제(live)는 과거시제(lived)로 후퇴합니다. 간접의문문이므로 평서문 어순이 됩니다.",
      },
      {
        question: '"I saw a movie yesterday." → He said he had seen a movie ___.',
        options: ["yesterday", "today", "the day before", "tomorrow"],
        answer: 2,
        explanation: "직접화법의 yesterday는 간접화법에서 the day before(전날)로 바뀝니다.",
      },
    ],
  },
  // ===== 9 ADDITIONAL LESSONS =====
  {
    id: "there-is-are",
    title: "There is / There are",
    titleKo: "There is / There are 구문",
    category: "기초",
    level: 1,
    explanation:
      "There is/are 구문은 '~이 있다'라는 존재를 나타낼 때 사용합니다. 뒤에 오는 명사가 단수이면 There is, 복수이면 There are를 씁니다. 불가산명사에는 There is를 사용합니다.",
    rules: [
      { rule: "There is + 단수명사 / 불가산명사", ruleKo: "There is a book on the table. / There is some water." },
      { rule: "There are + 복수명사", ruleKo: "There are many students in the classroom." },
      { rule: "부정: There isn't / There aren't", ruleKo: "There isn't any milk. / There aren't any chairs." },
      { rule: "의문: Is there ~? / Are there ~?", ruleKo: "Is there a bank nearby? / Are there any questions?" },
    ],
    examples: [
      { en: "There is a cat under the table.", ko: "테이블 아래에 고양이 한 마리가 있다." },
      { en: "There are three books on the shelf.", ko: "선반 위에 책 세 권이 있다." },
      { en: "There isn't any sugar in my coffee.", ko: "내 커피에 설탕이 없다." },
      { en: "Are there any good restaurants around here?", ko: "이 근처에 좋은 식당이 있나요?" },
      { en: "There is nothing to worry about.", ko: "걱정할 것이 아무것도 없다." },
    ],
    quiz: [
      {
        question: 'There ___ a dog in the garden.',
        options: ["is", "are", "be", "have"],
        answer: 0,
        explanation: "a dog은 단수명사이므로 There is를 씁니다.",
      },
      {
        question: 'There ___ many people at the concert.',
        options: ["is", "are", "was", "has"],
        answer: 1,
        explanation: "many people은 복수이므로 There are를 씁니다.",
      },
      {
        question: '___ there any milk in the fridge?',
        options: ["Is", "Are", "Do", "Does"],
        answer: 0,
        explanation: "milk는 불가산명사이므로 Is there를 씁니다.",
      },
      {
        question: 'There ___ no chairs in the room.',
        options: ["is", "are", "isn\'t", "has"],
        answer: 1,
        explanation: "chairs는 복수명사이므로 There are를 씁니다. There are no chairs = There aren't any chairs.",
      },
    ],
  },
  {
    id: "pronouns",
    title: "Pronouns",
    titleKo: "대명사 (인칭/소유/재귀)",
    category: "기초",
    level: 1,
    explanation:
      "대명사는 명사를 대신하는 말입니다. 인칭대명사(주격/목적격), 소유대명사(소유격/소유대명사), 재귀대명사로 나뉘며, 문장에서의 역할에 따라 적절한 형태를 선택해야 합니다.",
    rules: [
      { rule: "주격 대명사: I, you, he, she, it, we, they (주어 자리)", ruleKo: "He is my friend. / They are teachers." },
      { rule: "목적격 대명사: me, you, him, her, it, us, them (목적어 자리)", ruleKo: "She called me. / I saw them." },
      { rule: "소유격/소유대명사: my/mine, your/yours, his/his, her/hers, our/ours, their/theirs", ruleKo: "This is my book. / This book is mine." },
      { rule: "재귀대명사: myself, yourself, himself, herself, ourselves, themselves", ruleKo: "I made it myself. / She hurt herself." },
    ],
    examples: [
      { en: "She loves him, but he doesn't love her.", ko: "그녀는 그를 사랑하지만, 그는 그녀를 사랑하지 않는다." },
      { en: "This is our house. It is ours.", ko: "이것은 우리 집이다. 이것은 우리 것이다." },
      { en: "They invited us to their party.", ko: "그들은 우리를 그들의 파티에 초대했다." },
      { en: "He introduced himself to the class.", ko: "그는 반에 자기소개를 했다." },
      { en: "Please help yourself to some food.", ko: "음식을 마음껏 드세요." },
    ],
    quiz: [
      {
        question: 'I saw ___ at the mall yesterday.',
        options: ["they", "them", "their", "themselves"],
        answer: 1,
        explanation: "동사 saw의 목적어 자리이므로 목적격 대명사 them을 씁니다.",
      },
      {
        question: 'This is not my bag. It is ___.',
        options: ["her", "she", "hers", "herself"],
        answer: 2,
        explanation: "'그녀의 것'이라는 소유대명사가 필요하므로 hers를 씁니다.",
      },
      {
        question: 'The children made the cake by ___.',
        options: ["them", "their", "theirs", "themselves"],
        answer: 3,
        explanation: "'스스로/직접'이라는 의미로 재귀대명사 themselves를 씁니다. by oneself = 혼자서, 스스로",
      },
      {
        question: '___ gave me a present.',
        options: ["Him", "His", "He", "Himself"],
        answer: 2,
        explanation: "주어 자리이므로 주격 대명사 He를 씁니다. Him은 목적격입니다.",
      },
    ],
  },
  {
    id: "frequency-adverbs",
    title: "Frequency Adverbs",
    titleKo: "빈도부사",
    category: "기초",
    level: 2,
    explanation:
      "빈도부사는 어떤 일이 얼마나 자주 일어나는지를 나타냅니다. always(항상), usually(보통), often(자주), sometimes(가끔), rarely(드물게), never(절대 ~않다) 등이 있으며, 위치가 중요합니다.",
    rules: [
      { rule: "빈도 순서: always > usually > often > sometimes > rarely/seldom > never", ruleKo: "100% → 0% 순으로 빈도를 나타낸다." },
      { rule: "일반동사 앞에 위치", ruleKo: "I always eat breakfast. / She never drinks soda." },
      { rule: "be동사/조동사 뒤에 위치", ruleKo: "He is always late. / You can always ask me." },
      { rule: "How often ~? 으로 빈도를 질문", ruleKo: "How often do you exercise? — I usually exercise three times a week." },
    ],
    examples: [
      { en: "I always brush my teeth before bed.", ko: "나는 항상 자기 전에 이를 닦는다." },
      { en: "She usually gets up at 7 a.m.", ko: "그녀는 보통 오전 7시에 일어난다." },
      { en: "He is never late for school.", ko: "그는 절대 학교에 늦지 않는다." },
      { en: "We sometimes go hiking on weekends.", ko: "우리는 가끔 주말에 등산을 간다." },
      { en: "How often do you visit your grandparents?", ko: "조부모님을 얼마나 자주 방문하세요?" },
    ],
    quiz: [
      {
        question: 'She ___ goes to the gym. She goes every day.',
        options: ["never", "sometimes", "rarely", "always"],
        answer: 3,
        explanation: "매일 간다고 했으므로 항상(always)이 맞습니다.",
      },
      {
        question: 'I ___ eat fast food. I don\'t like it at all.',
        options: ["always", "usually", "often", "never"],
        answer: 3,
        explanation: "전혀 좋아하지 않으므로 절대 ~않는다(never)가 맞습니다.",
      },
      {
        question: '"He is ___ happy." 빈도부사의 위치가 맞는 문장은?',
        options: ["always He is happy.", "He always is happy.", "He is always happy.", "He is happy always."],
        answer: 2,
        explanation: "빈도부사는 be동사 뒤에 위치합니다. He is always happy.가 맞습니다.",
      },
      {
        question: '___ do you go to the movies?',
        options: ["How much", "How many", "How often", "How long"],
        answer: 2,
        explanation: "빈도(얼마나 자주)를 물을 때는 How often을 씁니다.",
      },
    ],
  },
  {
    id: "countable-uncountable",
    title: "Countable & Uncountable Nouns",
    titleKo: "셀 수 있는/없는 명사",
    category: "문법",
    level: 2,
    explanation:
      "영어 명사는 셀 수 있는 명사(가산명사)와 셀 수 없는 명사(불가산명사)로 나뉩니다. 가산명사는 a/an을 붙이고 복수형이 가능하지만, 불가산명사는 a/an을 붙일 수 없고 항상 단수 취급합니다.",
    rules: [
      { rule: "가산명사: a/an + 단수, many/few/a few + 복수", ruleKo: "a book, many books, a few friends" },
      { rule: "불가산명사: much/little/a little (a/an 불가, 복수형 불가)", ruleKo: "much water, a little information (waters ✗, informations ✗)" },
      { rule: "some/any: 가산 복수와 불가산 모두 사용 가능", ruleKo: "some books / some water, any questions / any money" },
      { rule: "How many + 가산명사 복수, How much + 불가산명사", ruleKo: "How many apples? / How much money?" },
    ],
    examples: [
      { en: "I need a few more minutes.", ko: "몇 분만 더 필요합니다." },
      { en: "There is too much traffic today.", ko: "오늘 교통량이 너무 많다." },
      { en: "How many siblings do you have?", ko: "형제자매가 몇 명이에요?" },
      { en: "Can I have some water, please?", ko: "물 좀 주시겠어요?" },
      { en: "She gave me a lot of advice.", ko: "그녀는 나에게 많은 조언을 해 주었다." },
    ],
    quiz: [
      {
        question: 'How ___ money do you have?',
        options: ["many", "much", "few", "several"],
        answer: 1,
        explanation: "money는 불가산명사이므로 How much를 씁니다.",
      },
      {
        question: 'I don\'t have ___ friends in this city.',
        options: ["much", "a little", "many", "a lot"],
        answer: 2,
        explanation: "friends는 가산명사 복수이므로 many를 씁니다.",
      },
      {
        question: '다음 중 불가산명사는?',
        options: ["apple", "chair", "information", "student"],
        answer: 2,
        explanation: "information은 불가산명사입니다. an information (✗), informations (✗)으로 쓸 수 없습니다.",
      },
      {
        question: 'There are ___ eggs in the fridge.',
        options: ["a little", "much", "a few", "little"],
        answer: 2,
        explanation: "eggs는 가산명사 복수이므로 a few(몇 개의)를 씁니다. a little은 불가산명사에 씁니다.",
      },
    ],
  },
  {
    id: "it-constructions",
    title: "It Constructions",
    titleKo: "가주어/가목적어 구문 (It...to/that)",
    category: "문법",
    level: 3,
    explanation:
      "가주어/가목적어 it은 진짜 주어나 목적어가 길 때 문장의 균형을 맞추기 위해 사용합니다. It을 형식적으로 앞에 놓고, 진짜 주어(to부정사/that절)를 뒤로 보냅니다.",
    rules: [
      { rule: "가주어 it + to부정사: It is + 형용사 + to + 동사원형", ruleKo: "It is important to study. (= To study is important.)" },
      { rule: "가주어 it + that절: It is + 형용사/명사 + that + 주어 + 동사", ruleKo: "It is true that he left. (= That he left is true.)" },
      { rule: "가목적어 it (5형식): 주어 + 동사 + it + 형용사/명사 + to부정사/that절", ruleKo: "I find it difficult to understand him." },
      { rule: "It takes + 시간 + to + 동사원형: ~하는 데 (시간)이 걸리다", ruleKo: "It takes 30 minutes to get there." },
    ],
    examples: [
      { en: "It is necessary to wear a seatbelt.", ko: "안전벨트를 매는 것은 필수적이다." },
      { en: "It is surprising that she passed the exam.", ko: "그녀가 시험에 합격했다는 것은 놀랍다." },
      { en: "I found it hard to believe his story.", ko: "나는 그의 이야기를 믿기 어려웠다." },
      { en: "It takes about an hour to get to the airport.", ko: "공항까지 가는 데 약 한 시간이 걸린다." },
      { en: "It is no use crying over spilt milk.", ko: "엎질러진 물에 울어봐야 소용없다. (속담)" },
    ],
    quiz: [
      {
        question: 'It is important ___ exercise regularly.',
        options: ["of", "for", "to", "that"],
        answer: 2,
        explanation: "가주어 it 구문에서 진주어가 동사구일 때 to + 동사원형을 씁니다.",
      },
      {
        question: 'It ___ two hours to finish the project.',
        options: ["took", "spent", "used", "made"],
        answer: 0,
        explanation: "It takes/took + 시간 + to 구문에서 동사는 take를 씁니다. 과거형은 took입니다.",
      },
      {
        question: 'I think it impossible ___ he would lie.',
        options: ["to", "for", "that", "what"],
        answer: 2,
        explanation: "가목적어 it 뒤에 절이 올 때 that을 씁니다. I think it impossible that he would lie.",
      },
      {
        question: '"___ is clear that she is talented." 빈칸에 알맞은 것은?',
        options: ["This", "That", "It", "There"],
        answer: 2,
        explanation: "that절이 진주어이고 가주어 It을 문장 앞에 놓습니다.",
      },
    ],
  },
  {
    id: "subject-verb-agreement",
    title: "Subject-Verb Agreement",
    titleKo: "수일치 (주어-동사 일치)",
    category: "문법",
    level: 3,
    explanation:
      "영어에서 주어와 동사는 수(단수/복수)가 일치해야 합니다. 단수 주어에는 단수 동사를, 복수 주어에는 복수 동사를 씁니다. 주어가 길거나 복잡한 문장에서도 핵심 주어를 찾아 동사를 일치시켜야 합니다.",
    rules: [
      { rule: "단수 주어 + 단수 동사, 복수 주어 + 복수 동사", ruleKo: "The boy runs. / The boys run." },
      { rule: "every/each + 단수 동사, both/several + 복수 동사", ruleKo: "Every student has a book. / Both students have books." },
      { rule: "either A or B / neither A nor B → B에 동사 일치", ruleKo: "Neither he nor they are wrong. / Either they or he is wrong." },
      { rule: "주어 + 수식어구(전치사구 등) + 동사: 핵심 주어에 일치", ruleKo: "The price of these books is high. (핵심 주어: price)" },
    ],
    examples: [
      { en: "The list of items is on the desk.", ko: "항목 목록이 책상 위에 있다. (핵심 주어: list → 단수)" },
      { en: "Every child needs love and care.", ko: "모든 아이는 사랑과 보살핌이 필요하다." },
      { en: "Neither the teacher nor the students were ready.", ko: "선생님도 학생들도 준비가 되지 않았다. (B: students → 복수)" },
      { en: "Both my parents work full-time.", ko: "부모님 두 분 다 풀타임으로 일하신다." },
      { en: "The news is shocking.", ko: "그 뉴스는 충격적이다. (news는 단수 취급)" },
    ],
    quiz: [
      {
        question: 'The flowers in the garden ___ beautiful.',
        options: ["is", "are", "has", "was"],
        answer: 1,
        explanation: "핵심 주어는 flowers(복수)입니다. in the garden은 수식어구이므로 are를 씁니다.",
      },
      {
        question: 'Every student ___ to follow the rules.',
        options: ["need", "needs", "are needing", "have needed"],
        answer: 1,
        explanation: "every + 단수명사는 단수 취급하므로 needs를 씁니다.",
      },
      {
        question: 'Neither she nor her friends ___ coming to the party.',
        options: ["is", "are", "has", "was"],
        answer: 1,
        explanation: "neither A nor B에서 동사는 B(her friends, 복수)에 일치하므로 are를 씁니다.",
      },
      {
        question: 'The quality of the products ___ improved.',
        options: ["have", "has", "are", "were"],
        answer: 1,
        explanation: "핵심 주어는 quality(단수)입니다. of the products는 수식어구이므로 has를 씁니다.",
      },
    ],
  },
  {
    id: "participial-constructions",
    title: "Participial Constructions",
    titleKo: "분사구문",
    category: "문법",
    level: 4,
    explanation:
      "분사구문은 부사절을 간결하게 줄인 형태입니다. 접속사와 주어(주절과 같을 때)를 생략하고 동사를 분사(-ing)로 바꿉니다. 시간, 이유, 조건, 양보, 동시동작 등 다양한 의미를 나타냅니다.",
    rules: [
      { rule: "부사절 → 분사구문 변환: 접속사 생략 + 주어 생략(같을 때) + 동사를 -ing", ruleKo: "Because I was tired, I went home. → Being tired, I went home." },
      { rule: "수동 분사구문: Being + p.p. (Being은 생략 가능)", ruleKo: "(Being) Written in English, the book was hard to read." },
      { rule: "완료 분사구문: Having + p.p. (주절보다 먼저 일어난 일)", ruleKo: "Having finished dinner, we went for a walk." },
      { rule: "분사구문의 의미: 시간(~할 때), 이유(~이므로), 조건(~하면), 양보(~이지만), 동시동작(~하면서)", ruleKo: "Walking along the river, I saw a beautiful sunset. (동시동작)" },
    ],
    examples: [
      { en: "Hearing the news, she started to cry.", ko: "그 소식을 듣고 그녀는 울기 시작했다. (시간)" },
      { en: "Not knowing what to do, he asked for help.", ko: "무엇을 해야 할지 몰라서 그는 도움을 요청했다. (이유)" },
      { en: "Having studied hard, she passed the exam easily.", ko: "열심히 공부했기 때문에 그녀는 시험에 쉽게 합격했다. (완료)" },
      { en: "Written in simple English, the book is easy to understand.", ko: "쉬운 영어로 쓰여져서, 그 책은 이해하기 쉽다. (수동)" },
      { en: "Turning left at the corner, you will find the bank.", ko: "모퉁이에서 왼쪽으로 돌면 은행이 보일 것이다. (조건)" },
    ],
    quiz: [
      {
        question: '"Because she felt sick, she left early." 를 분사구문으로 바꾸면?',
        options: [
          "Felt sick, she left early.",
          "Feeling sick, she left early.",
          "To feel sick, she left early.",
          "She feeling sick, left early.",
        ],
        answer: 1,
        explanation: "접속사(Because)와 주어(she)를 생략하고 동사를 -ing(Feeling)로 바꿉니다.",
      },
      {
        question: '___ the work, he went home.',
        options: ["Finish", "Finished", "Having finished", "To finish"],
        answer: 2,
        explanation: "일을 끝낸 것이 집에 간 것보다 먼저이므로 완료 분사구문 Having finished를 씁니다.",
      },
      {
        question: '"___ in 1988, the building is quite old." 빈칸에 알맞은 것은?',
        options: ["Building", "Built", "Being building", "Having building"],
        answer: 1,
        explanation: "건물이 지어진 것(수동)이므로 과거분사 Built를 씁니다. (Being built에서 Being 생략)",
      },
      {
        question: '"Walking to school, I met my friend." 에서 분사구문의 의미는?',
        options: ["이유", "조건", "동시동작/시간", "양보"],
        answer: 2,
        explanation: "학교에 걸어가는 동안(동시동작/시간) 친구를 만났다는 의미입니다.",
      },
    ],
  },
  {
    id: "emphasis-inversion",
    title: "Emphasis & Inversion",
    titleKo: "강조/도치 구문",
    category: "문법",
    level: 4,
    explanation:
      "강조 구문은 문장의 특정 요소를 강하게 표현하는 방법이고, 도치 구문은 주어와 동사(또는 조동사)의 어순을 바꾸어 강조 효과를 내는 방법입니다. 주로 격식체나 문어체에서 사용됩니다.",
    rules: [
      { rule: "It is/was ~ that 강조 구문: 강조하고 싶은 요소를 It is/was와 that 사이에 넣기", ruleKo: "It was Tom that broke the window. (Tom 강조)" },
      { rule: "do/does/did 강조: 일반동사 앞에 do/does/did를 넣어 동사를 강조", ruleKo: "I do love you. / She did try her best." },
      { rule: "부정어 도치: 부정어(Never, Not only, Hardly 등)가 문두에 올 때 주어+동사 도치", ruleKo: "Never have I seen such a beautiful place." },
      { rule: "장소/방향 부사 도치: 장소/방향 부사가 문두에 올 때 동사+주어 도치", ruleKo: "Here comes the bus. / There goes my chance." },
    ],
    examples: [
      { en: "It was yesterday that I met her.", ko: "내가 그녀를 만난 것은 바로 어제였다. (yesterday 강조)" },
      { en: "I do believe in miracles.", ko: "나는 정말로 기적을 믿는다. (do 강조)" },
      { en: "Never have I been so happy.", ko: "이렇게 행복한 적은 한 번도 없었다. (부정어 도치)" },
      { en: "Not only is he smart, but he is also kind.", ko: "그는 똑똑할 뿐만 아니라 친절하기까지 하다." },
      { en: "Here comes the bride!", ko: "신부가 온다! (장소 부사 도치)" },
    ],
    quiz: [
      {
        question: '"It ___ my mother that taught me to cook." 빈칸에 알맞은 것은?',
        options: ["is", "was", "does", "did"],
        answer: 1,
        explanation: "과거의 일을 강조하므로 It was ~ that 강조 구문을 씁니다.",
      },
      {
        question: '"She ___ finish the project on time." (정말로 끝냈다는 강조)',
        options: ["do", "does", "did", "has"],
        answer: 2,
        explanation: "과거의 동작을 강조할 때 did + 동사원형을 씁니다.",
      },
      {
        question: '"Never ___ I experienced such kindness."',
        options: ["do", "did", "have", "was"],
        answer: 2,
        explanation: "Never가 문두에 오면 도치가 일어납니다. 경험을 나타내는 현재완료이므로 Never have I experienced가 맞습니다.",
      },
      {
        question: '"Not only ___ she sing well, but she also dances beautifully."',
        options: ["do", "does", "is", "has"],
        answer: 1,
        explanation: "Not only가 문두에 오면 도치가 일어납니다. she는 3인칭 단수이므로 does를 씁니다.",
      },
    ],
  },
  {
    id: "infinitive-vs-gerund",
    title: "Infinitive vs Gerund",
    titleKo: "to부정사 vs 동명사 구분",
    category: "문법",
    level: 4,
    explanation:
      "영어에서 일부 동사는 to부정사만, 일부는 동명사만, 일부는 둘 다 목적어로 취합니다. 둘 다 가능한 동사 중에는 의미가 같은 것(like, love)도 있고, 의미가 달라지는 것(remember, forget, stop)도 있어 주의가 필요합니다.",
    rules: [
      { rule: "to부정사만 취하는 동사: want, hope, decide, plan, promise, expect, refuse, agree, wish, learn", ruleKo: "I want to travel. / She decided to leave." },
      { rule: "동명사만 취하는 동사: enjoy, finish, mind, avoid, give up, keep, suggest, practice, consider, deny", ruleKo: "I enjoy swimming. / He finished eating." },
      { rule: "둘 다 가능 (의미 같음): like, love, hate, start, begin, continue, prefer", ruleKo: "I like to read. = I like reading." },
      { rule: "둘 다 가능 (의미 다름): remember/forget + to(미래 할 일), remember/forget + -ing(과거 한 일); stop + to(~하기 위해 멈추다), stop + -ing(~하는 것을 멈추다)", ruleKo: "I remember locking the door.(문 잠근 것을 기억한다) / Remember to lock the door.(문 잠그는 것을 기억해라)" },
    ],
    examples: [
      { en: "She promised to call me back.", ko: "그녀는 나에게 다시 전화하겠다고 약속했다. (promise + to)" },
      { en: "He avoided making eye contact.", ko: "그는 눈을 마주치는 것을 피했다. (avoid + -ing)" },
      { en: "I stopped to drink water.", ko: "나는 물을 마시기 위해 멈췄다. (stop + to: 목적)" },
      { en: "I stopped drinking coffee.", ko: "나는 커피를 마시는 것을 그만뒀다. (stop + -ing: 중단)" },
      { en: "Don't forget to submit your report.", ko: "보고서 제출하는 것을 잊지 마세요. (forget + to: 미래)" },
    ],
    quiz: [
      {
        question: 'I want ___ a new language.',
        options: ["learn", "learning", "to learn", "learned"],
        answer: 2,
        explanation: "want는 to부정사만 목적어로 취하는 동사입니다. want to learn이 맞습니다.",
      },
      {
        question: 'She enjoys ___ in the rain.',
        options: ["walk", "to walk", "walking", "walked"],
        answer: 2,
        explanation: "enjoy는 동명사만 목적어로 취하는 동사입니다. enjoy walking이 맞습니다.",
      },
      {
        question: '"I remember ___ the door." (과거에 문을 잠근 것을 기억한다)',
        options: ["lock", "to lock", "locking", "locked"],
        answer: 2,
        explanation: "과거에 한 일을 기억할 때는 remember + 동명사(-ing)를 씁니다.",
      },
      {
        question: '"He stopped ___ when the teacher came in." (그는 말하는 것을 멈추었다)',
        options: ["talk", "to talk", "talking", "talked"],
        answer: 2,
        explanation: "~하는 것을 멈추다(중단)는 stop + 동명사(-ing)입니다. stop to talk은 '말하기 위해 멈추다'라는 다른 의미입니다.",
      },
    ],
  },
];
