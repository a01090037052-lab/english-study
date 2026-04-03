export interface ConversationScenario {
  id: string;
  title: string;
  titleKo: string;
  situation: string;
  dialogue: { speaker: string; text: string; translation: string }[];
  keyExpressions: { expression: string; meaning: string; usage: string }[];
  patternDrill: {
    pattern: string;
    patternKo: string;
    blanks: { sentence: string; answer: string; hint: string }[];
  }[];
}

export const conversations: ConversationScenario[] = [
  {
    id: "cafe-order",
    title: "Ordering at a Cafe",
    titleKo: "카페에서 주문하기",
    situation: "카페에 들어가서 음료와 디저트를 주문하는 상황입니다.",
    dialogue: [
      {
        speaker: "Staff",
        text: "Hi! Welcome. What can I get for you?",
        translation: "안녕하세요! 어서오세요. 뭘 드릴까요?",
      },
      {
        speaker: "You",
        text: "Can I get an iced americano, please?",
        translation: "아이스 아메리카노 하나 주세요.",
      },
      {
        speaker: "Staff",
        text: "Sure! What size would you like?",
        translation: "네! 사이즈는 어떻게 하시겠어요?",
      },
      {
        speaker: "You",
        text: "A large, please.",
        translation: "큰 사이즈로 주세요.",
      },
      {
        speaker: "Staff",
        text: "Would you like anything else?",
        translation: "다른 건 필요하신 게 있으세요?",
      },
      {
        speaker: "You",
        text: "Yes, I'll also have a chocolate muffin.",
        translation: "네, 초콜릿 머핀도 하나 주세요.",
      },
      {
        speaker: "Staff",
        text: "That'll be $8.50. For here or to go?",
        translation: "8달러 50센트입니다. 매장이요, 포장이요?",
      },
      {
        speaker: "You",
        text: "For here, please.",
        translation: "매장에서 먹을게요.",
      },
    ],
    keyExpressions: [
      {
        expression: "Can I get ~, please?",
        meaning: "~ 주세요",
        usage: "주문할 때 가장 자연스러운 표현",
      },
      {
        expression: "What size would you like?",
        meaning: "사이즈는 어떻게 하시겠어요?",
        usage: "사이즈를 물을 때",
      },
      {
        expression: "Would you like anything else?",
        meaning: "다른 건 필요하세요?",
        usage: "추가 주문을 물을 때",
      },
      {
        expression: "For here or to go?",
        meaning: "매장이요, 포장이요?",
        usage: "먹는 장소를 물을 때",
      },
    ],
    patternDrill: [
      {
        pattern: "Can I get ___, please?",
        patternKo: "~를 주세요",
        blanks: [
          {
            sentence: "Can I get ___, please?",
            answer: "a latte",
            hint: "라떼",
          },
          {
            sentence: "Can I get ___, please?",
            answer: "a glass of water",
            hint: "물 한 잔",
          },
          {
            sentence: "Can I get ___, please?",
            answer: "the check",
            hint: "계산서",
          },
        ],
      },
      {
        pattern: "I'll also have ___.",
        patternKo: "~도 주세요",
        blanks: [
          {
            sentence: "I'll also have ___.",
            answer: "a sandwich",
            hint: "샌드위치",
          },
          {
            sentence: "I'll also have ___.",
            answer: "a cookie",
            hint: "쿠키",
          },
          {
            sentence: "I'll also have ___.",
            answer: "a slice of cake",
            hint: "케이크 한 조각",
          },
        ],
      },
    ],
  },
  {
    id: "self-introduction",
    title: "Self Introduction",
    titleKo: "자기소개하기",
    situation: "새로운 사람을 만나 자기소개를 하는 상황입니다.",
    dialogue: [
      {
        speaker: "You",
        text: "Hi, nice to meet you. I'm Minho.",
        translation: "안녕하세요, 만나서 반갑습니다. 저는 민호입니다.",
      },
      {
        speaker: "Other",
        text: "Nice to meet you too! I'm Sarah. Where are you from?",
        translation: "저도 만나서 반갑습니다! 저는 사라예요. 어디서 오셨어요?",
      },
      {
        speaker: "You",
        text: "I'm from Seoul, Korea. How about you?",
        translation: "한국 서울에서 왔어요. 당신은요?",
      },
      {
        speaker: "Other",
        text: "I'm from New York. What do you do?",
        translation: "뉴욕에서 왔어요. 무슨 일 하세요?",
      },
      {
        speaker: "You",
        text: "I'm a software developer. I work at a tech company.",
        translation: "소프트웨어 개발자예요. IT 회사에서 일해요.",
      },
      {
        speaker: "Other",
        text: "Oh, that's cool! What do you like to do in your free time?",
        translation: "오, 멋지네요! 여가 시간에 뭘 하는 걸 좋아하세요?",
      },
      {
        speaker: "You",
        text: "I enjoy reading and playing basketball.",
        translation: "독서와 농구를 즐겨요.",
      },
      {
        speaker: "Other",
        text: "That sounds great! It was nice talking to you.",
        translation: "좋네요! 이야기 나눠서 좋았어요.",
      },
    ],
    keyExpressions: [
      {
        expression: "Nice to meet you.",
        meaning: "만나서 반갑습니다.",
        usage: "처음 만났을 때 인사",
      },
      {
        expression: "Where are you from?",
        meaning: "어디서 오셨어요?",
        usage: "출신지를 물을 때",
      },
      {
        expression: "What do you do?",
        meaning: "무슨 일 하세요?",
        usage: "직업을 물을 때",
      },
      {
        expression: "What do you like to do in your free time?",
        meaning: "여가 시간에 뭘 좋아하세요?",
        usage: "취미를 물을 때",
      },
    ],
    patternDrill: [
      {
        pattern: "I'm from ___.",
        patternKo: "저는 ~에서 왔어요.",
        blanks: [
          { sentence: "I'm from ___.", answer: "Seoul", hint: "서울" },
          { sentence: "I'm from ___.", answer: "Korea", hint: "한국" },
          { sentence: "I'm from ___.", answer: "Busan", hint: "부산" },
        ],
      },
      {
        pattern: "I'm a/an ___.",
        patternKo: "저는 ~입니다. (직업)",
        blanks: [
          { sentence: "I'm a ___.", answer: "teacher", hint: "선생님" },
          { sentence: "I'm an ___.", answer: "engineer", hint: "엔지니어" },
          { sentence: "I'm a ___.", answer: "designer", hint: "디자이너" },
        ],
      },
    ],
  },
  {
    id: "asking-directions",
    title: "Asking for Directions",
    titleKo: "길 묻기",
    situation: "낯선 도시에서 목적지까지 가는 길을 물어보는 상황입니다.",
    dialogue: [
      {
        speaker: "You",
        text: "Excuse me, could you tell me how to get to the subway station?",
        translation: "실례합니다, 지하철역에 어떻게 가는지 알려주시겠어요?",
      },
      {
        speaker: "Local",
        text: "Sure! Go straight for two blocks.",
        translation: "네! 두 블록 직진하세요.",
      },
      {
        speaker: "You",
        text: "Okay, and then?",
        translation: "네, 그리고 나서요?",
      },
      {
        speaker: "Local",
        text: "Then turn left at the traffic light. You'll see it on your right.",
        translation: "그리고 신호등에서 좌회전하세요. 오른쪽에 보일 거예요.",
      },
      {
        speaker: "You",
        text: "How long does it take on foot?",
        translation: "걸어서 얼마나 걸려요?",
      },
      {
        speaker: "Local",
        text: "About five minutes.",
        translation: "약 5분이요.",
      },
      {
        speaker: "You",
        text: "Thank you so much!",
        translation: "정말 감사합니다!",
      },
      {
        speaker: "Local",
        text: "You're welcome! Have a nice day.",
        translation: "천만에요! 좋은 하루 되세요.",
      },
    ],
    keyExpressions: [
      {
        expression: "Could you tell me how to get to ~?",
        meaning: "~에 어떻게 가는지 알려주시겠어요?",
        usage: "길을 물을 때 정중한 표현",
      },
      {
        expression: "Go straight for ~",
        meaning: "~ 동안 직진하세요",
        usage: "방향을 알려줄 때",
      },
      {
        expression: "Turn left/right at ~",
        meaning: "~에서 좌/우회전하세요",
        usage: "회전 방향을 알려줄 때",
      },
      {
        expression: "How long does it take?",
        meaning: "얼마나 걸려요?",
        usage: "소요 시간을 물을 때",
      },
    ],
    patternDrill: [
      {
        pattern: "Could you tell me how to get to ___?",
        patternKo: "~에 어떻게 가나요?",
        blanks: [
          {
            sentence: "Could you tell me how to get to ___?",
            answer: "the airport",
            hint: "공항",
          },
          {
            sentence: "Could you tell me how to get to ___?",
            answer: "the nearest hospital",
            hint: "가장 가까운 병원",
          },
          {
            sentence: "Could you tell me how to get to ___?",
            answer: "City Hall",
            hint: "시청",
          },
        ],
      },
      {
        pattern: "Turn ___ at the ___.",
        patternKo: "~에서 ~쪽으로 돌아가세요.",
        blanks: [
          {
            sentence: "Turn ___ at the corner.",
            answer: "right",
            hint: "오른쪽",
          },
          {
            sentence: "Turn ___ at the intersection.",
            answer: "left",
            hint: "왼쪽",
          },
          {
            sentence: "Turn ___ at the second traffic light.",
            answer: "right",
            hint: "오른쪽",
          },
        ],
      },
    ],
  },
];
