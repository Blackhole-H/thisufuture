// 数据库：塔罗牌信息（包含78张塔罗牌）
const tarotCards = [
    // 大阿卡那（Major Arcana）
    {
        name: {
            en: "The Fool",
            zh: "愚者"
        },
        meaning: {
            en: "Beginnings, innocence, spontaneity, a free spirit.",
            zh: "开始，纯真，自发，独立精神。"
        },
        image: "images/THE_FOOL.webp"
    },
    {
        name: {
            en: "The Magician",
            zh: "魔术师"
        },
        meaning: {
            en: "Manifestation, resourcefulness, power, inspired action.",
            zh: "实现，足智多谋，力量，有启发的行动。"
        },
        image: "images/THE_MAGICIAN.webp"
    },
    {
        name: {
            en: "The High Priestess",
            zh: "女祭司"
        },
        meaning: {
            en: "Intuition, sacred knowledge, divine feminine, the subconscious mind.",
            zh: "直觉，神圣知识，神圣女性，潜意识。"
        },
        image: "images/THE_HIGH_PRIESTESS.webp"
    },
    {
        name: {
            en: "The Empress",
            zh: "女皇"
        },
        meaning: {
            en: "Femininity, beauty, nature, nurturing, abundance.",
            zh: "女性气质，美丽，自然，养育，丰盛。"
        },
        image: "images/THE_EMPRESS.webp"
    },
    {
        name: {
            en: "The Emperor",
            zh: "皇帝"
        },
        meaning: {
            en: "Authority, establishment, structure, a father figure.",
            zh: "权威，建立，结构，父亲形象。"
        },
        image: "images/THE_EMPEROR.webp"
    },
    {
        name: {
            en: "The Hierophant",
            zh: "教皇"
        },
        meaning: {
            en: "Tradition, conformity, morality, guidance.",
            zh: "传统，遵从，道德，指导。"
        },
        image: "images/THE_HIEROPHANT.webp"
    },
    {
        name: {
            en: "The Lovers",
            zh: "恋人"
        },
        meaning: {
            en: "Love, harmony, relationships, values alignment, choices.",
            zh: "爱情，和谐，关系，价值观对齐，选择。"
        },
        image: "images/THE_LOVERS.webp"
    },
    {
        name: {
            en: "The Chariot",
            zh: "战车"
        },
        meaning: {
            en: "Control, willpower, victory, assertion, determination.",
            zh: "控制，意志力，胜利，主张，决心。"
        },
        image: "images/THE_CHARIOT.webp"
    },
    {
        name: {
            en: "Strength",
            zh: "力量"
        },
        meaning: {
            en: "Strength, courage, persuasion, influence, compassion.",
            zh: "力量，勇气，说服，影响，怜悯。"
        },
        image: "images/STRENGTH.webp"
    },
    {
        name: {
            en: "The Hermit",
            zh: "隐士"
        },
        meaning: {
            en: "Soul-searching, introspection, being alone, inner guidance.",
            zh: "寻求灵魂，内省，独处，内在指导。"
        },
        image: "images/THE_HERMIT.webp"
    },
    {
        name: {
            en: "Wheel of Fortune",
            zh: "命运之轮"
        },
        meaning: {
            en: "Good luck, karma, life cycles, destiny, a turning point.",
            zh: "好运，因果，生命周期，命运，转折点。"
        },
        image: "images/WHEEL_FORTUNE.webp"
    },
    {
        name: {
            en: "Justice",
            zh: "正义"
        },
        meaning: {
            en: "Justice, fairness, truth, cause and effect, law.",
            zh: "正义，公平，真理，因果，法律。"
        },
        image: "images/JUSTICE.webp"
    },
    {
        name: {
            en: "The Hanged Man",
            zh: "倒吊人"
        },
        meaning: {
            en: "Pause, surrender, letting go, new perspectives.",
            zh: "暂停，投降，放手，新视角。"
        },
        image: "images/THE_HANGED_MAN.webp"
    },
    {
        name: {
            en: "Death",
            zh: "死神"
        },
        meaning: {
            en: "Endings, change, transformation, transition.",
            zh: "结束，变化，转化，过渡。"
        },
        image: "images/DEATH.webp"
    },
    {
        name: {
            en: "Temperance",
            zh: "节制"
        },
        meaning: {
            en: "Balance, moderation, patience, purpose.",
            zh: "平衡，适度，耐心，目的。"
        },
        image: "images/TEMPERANCE.webp"
    },
    {
        name: {
            en: "The Devil",
            zh: "恶魔"
        },
        meaning: {
            en: "Shadow self, attachment, addiction, restriction, sexuality.",
            zh: "阴影自我，依附，成瘾，限制，性。"
        },
        image: "images/THE_DEVIL.webp"
    },
    {
        name: {
            en: "The Tower",
            zh: "塔"
        },
        meaning: {
            en: "Sudden change, upheaval, chaos, revelation, awakening.",
            zh: "突然变化，动荡，混乱，启示，觉醒。"
        },
        image: "images/THE_TOWER.webp"
    },
    {
        name: {
            en: "The Star",
            zh: "星星"
        },
        meaning: {
            en: "Hope, faith, purpose, renewal, spirituality.",
            zh: "希望，信念，目的，更新，精神性。"
        },
        image: "images/THE_STAR.webp"
    },
    {
        name: {
            en: "The Moon",
            zh: "月亮"
        },
        meaning: {
            en: "Illusion, fear, anxiety, subconscious, intuition.",
            zh: "幻觉，恐惧，焦虑，潜意识，直觉。"
        },
        image: "images/THE_MOON.webp"
    },
    {
        name: {
            en: "The Sun",
            zh: "太阳"
        },
        meaning: {
            en: "Positivity, fun, warmth, success, vitality.",
            zh: "积极，乐趣，温暖，成功，活力。"
        },
        image: "images/THE_SUN.webp"
    },
    {
        name: {
            en: "Judgment",
            zh: "审判"
        },
        meaning: {
            en: "Judgment, rebirth, inner calling, absolution.",
            zh: "审判，重生，内在召唤，赦免。"
        },
        image: "images/JUDGEMENT.webp"
    },
    {
        name: {
            en: "The World",
            zh: "世界"
        },
        meaning: {
            en: "Completion, integration, accomplishment, travel.",
            zh: "完成，整合，成就，旅行。"
        },
        image: "images/THE_WORLD.webp"
    },

    // 小阿卡那（Minor Arcana）
    // 权杖（Wands）
    {
        name: {
            en: "Ace of Wands",
            zh: "权杖王牌"
        },
        meaning: {
            en: "Inspiration, new opportunities, growth, potential.",
            zh: "灵感，新机会，成长，潜力。"
        },
        image: "images/ACE_WANDS.webp"
    },
    {
        name: {
            en: "Two of Wands",
            zh: "权杖二"
        },
        meaning: {
            en: "Future planning, progress, decisions, discovery.",
            zh: "未来规划，进展，决策，发现。"
        },
        image: "images/QUANZHANG2.webp"
    },
    {
        name: {
            en: "Three of Wands",
            zh: "权杖三"
        },
        meaning: {
            en: "Looking ahead, expansion, overseas opportunities.",
            zh: "展望，扩展，海外机会。"
        },
        image: "images/QUANZHANG3.webp"
    },
    {
        name: {
            en: "Four of Wands",
            zh: "权杖四"
        },
        meaning: {
            en: "Celebration, harmony, marriage, home, community.",
            zh: "庆祝，和谐，婚姻，家庭，社区。"
        },
        image: "images/QUANZHANG4.webp"
    },
    {
        name: {
            en: "Five of Wands",
            zh: "权杖五"
        },
        meaning: {
            en: "Conflict, competition, diversity, challenges.",
            zh: "冲突，竞争，多样性，挑战。"
        },
        image: "images/QUANZHANG5.webp"
    },
    {
        name: {
            en: "Six of Wands",
            zh: "权杖六"
        },
        meaning: {
            en: "Victory, success, public recognition.",
            zh: "胜利，成功，公众认可。"
        },
        image: "images/QUANZHANG6.webp"
    },
    {
        name: {
            en: "Seven of Wands",
            zh: "权杖七"
        },
        meaning: {
            en: "Perseverance, defense, maintaining control.",
            zh: "毅力，防御，保持控制。"
        },
        image: "images/QUANZHANG7.webp"
    },
    {
        name: {
            en: "Eight of Wands",
            zh: "权杖八"
        },
        meaning: {
            en: "Movement, fast-paced change, action, alignment.",
            zh: "移动，快速变化，行动，对齐。"
        },
        image: "images/QUANZHANG8.webp"
    },
    {
        name: {
            en: "Nine of Wands",
            zh: "权杖九"
        },
        meaning: {
            en: "Resilience, courage, persistence, test of faith.",
            zh: "韧性，勇气，坚持，信念的考验。"
        },
        image: "images/QUANZHANG9.webp"
    },
    {
        name: {
            en: "Ten of Wands",
            zh: "权杖十"
        },
        meaning: {
            en: "Burden, responsibility, hard work, stress.",
            zh: "负担，责任，辛勤工作，压力。"
        },
        image: "images/QUANZHANG10.webp"
    },
    {
        name: {
            en: "Page of Wands",
            zh: "权杖侍者"
        },
        meaning: {
            en: "Enthusiasm, exploration, discovery, free spirit.",
            zh: "热情，探索，发现，独立精神。"
        },
        image: "images/PAGE_WANDS.webp"
    },
    {
        name: {
            en: "Knight of Wands",
            zh: "权杖骑士"
        },
        meaning: {
            en: "Energy, passion, inspired action, adventure.",
            zh: "能量，激情，有启发的行动，冒险。"
        },
        image: "images/KNIGHT_WANDS.webp"
    },
    {
        name: {
            en: "Queen of Wands",
            zh: "权杖王后"
        },
        meaning: {
            en: "Courage, confidence, independence, social butterfly.",
            zh: "勇气，自信，独立，社交达人。"
        },
        image: "images/QUEEN_WANDS.webp"
    },
    {
        name: {
            en: "King of Wands",
            zh: "权杖国王"
        },
        meaning: {
            en: "Leadership, vision, entrepreneur, honor.",
            zh: "领导力，愿景，企业家，荣誉。"
        },
        image: "images/KING_WANDS.webp"
    },

    // 圣杯（Cups）
    {
        name: {
            en: "Ace of Cups",
            zh: "圣杯王牌"
        },
        meaning: {
            en: "Emotional fulfillment, new relationships, compassion.",
            zh: "情感满足，新关系，怜悯。"
        },
        image: "images/ACE_CUPS.webp"
    },
    {
        name: {
            en: "Two of Cups",
            zh: "圣杯二"
        },
        meaning: {
            en: "Unified love, partnership, mutual attraction.",
            zh: "爱意的结合，合作关系，互相吸引。"
        },
        image: "images/SHENGBEI2.webp"
    },
    {
        name: {
            en: "Three of Cups",
            zh: "圣杯三"
        },
        meaning: {
            en: "Celebration, friendship, creativity, collaboration.",
            zh: "庆祝，友谊，创造力，合作。"
        },
        image: "images/SHENGBEI3.webp"
    },
    {
        name: {
            en: "Four of Cups",
            zh: "圣杯四"
        },
        meaning: {
            en: "Meditation, contemplation, apathy, reevaluation.",
            zh: "冥想，深思，冷漠，重新评估。"
        },
        image: "images/SHENGBEI4.webp"
    },
    {
        name: {
            en: "Five of Cups",
            zh: "圣杯五"
        },
        meaning: {
            en: "Regret, failure, disappointment, pessimism.",
            zh: "遗憾，失败，失望，悲观。"
        },
        image: "images/SHENGBEI5.webp"
    },
    {
        name: {
            en: "Six of Cups",
            zh: "圣杯六"
        },
        meaning: {
            en: "Revisiting the past, childhood memories, innocence, joy.",
            zh: "重温过去，童年记忆，纯真，快乐。"
        },
        image: "images/SHENGBEI6.webp"
    },
    {
        name: {
            en: "Seven of Cups",
            zh: "圣杯七"
        },
        meaning: {
            en: "Opportunities, choices, illusion, wishful thinking.",
            zh: "机会，选择，幻想，空想。"
        },
        image: "images/SHENGBEI7.webp"
    },
    {
        name: {
            en: "Eight of Cups",
            zh: "圣杯八"
        },
        meaning: {
            en: "Disappointment, abandonment, withdrawal, escapism.",
            zh: "失望，放弃，退缩，逃避。"
        },
        image: "images/SHENGBEI8.webp"
    },
    {
        name: {
            en: "Nine of Cups",
            zh: "圣杯九"
        },
        meaning: {
            en: "Contentment, satisfaction, gratitude, wish come true.",
            zh: "满足，喜悦，感激，愿望成真。"
        },
        image: "images/SHENGBEI9.webp"
    },
    {
        name: {
            en: "Ten of Cups",
            zh: "圣杯十"
        },
        meaning: {
            en: "Divine love, blissful relationships, harmony, alignment.",
            zh: "神圣的爱，幸福的关系，和谐，一致。"
        },
        image: "images/SHENGBEI10.webp"
    },
    {
        name: {
            en: "Page of Cups",
            zh: "圣杯侍者"
        },
        meaning: {
            en: "Creative opportunities, intuitive messages, curiosity.",
            zh: "创造性的机会，直觉的信息，好奇心。"
        },
        image: "images/PAGE_CUPS.webp"
    },
    {
        name: {
            en: "Knight of Cups",
            zh: "圣杯骑士"
        },
        meaning: {
            en: "Romance, charm, imagination, beauty, creativity.",
            zh: "浪漫，魅力，想象，美丽，创造力。"
        },
        image: "images/KNIGHT_CUPS.webp"
    },
    {
        name: {
            en: "Queen of Cups",
            zh: "圣杯王后"
        },
        meaning: {
            en: "Compassionate, caring, emotionally stable, intuitive.",
            zh: "富有同情心，关怀，情感稳定，直觉。"
        },
        image: "images/QUEEN_CUPS.webp"
    },
    {
        name: {
            en: "King of Cups",
            zh: "圣杯国王"
        },
        meaning: {
            en: "Emotionally balanced, compassionate, diplomatic.",
            zh: "情感平衡，富有同情心，外交。"
        },
        image: "images/KING_CUPS.webp"
    },

    // 剑（Swords）
    {
        name: {
            en: "Ace of Swords",
            zh: "剑王牌"
        },
        meaning: {
            en: "Breakthroughs, new ideas, mental clarity, success.",
            zh: "突破，新想法，精神清晰，成功。"
        },
        image: "images/ACE_SWORDS.webp"
    },
    {
        name: {
            en: "Two of Swords",
            zh: "剑二"
        },
        meaning: {
            en: "Difficult choices, indecision, stalemate, blocked emotions.",
            zh: "艰难选择，优柔寡断，僵局，情感阻塞。"
        },
        image: "images/SWORDS2.webp"
    },
    {
        name: {
            en: "Three of Swords",
            zh: "剑三"
        },
        meaning: {
            en: "Heartbreak, emotional pain, sorrow, grief.",
            zh: "心碎，情感痛苦，悲伤，悲痛。"
        },
        image: "images/SHENGBEl3.webp"
    },
    {
        name: {
            en: "Four of Swords",
            zh: "剑四"
        },
        meaning: {
            en: "Rest, relaxation, meditation, contemplation.",
            zh: "休息，放松，冥想，沉思。"
        },
        image: "images/SWORDS4.webp"
    },
    {
        name: {
            en: "Five of Swords",
            zh: "剑五"
        },
        meaning: {
            en: "Conflict, disagreements, competition, defeat.",
            zh: "冲突，分歧，竞争，失败。"
        },
        image: "images/SWORDS5.webp"
    },
    {
        name: {
            en: "Six of Swords",
            zh: "剑六"
        },
        meaning: {
            en: "Transition, change, rite of passage, releasing baggage.",
            zh: "过渡，变化，仪式通行，释放包袱。"
        },
        image: "images/SWORDS6.webp"
    },
    {
        name: {
            en: "Seven of Swords",
            zh: "剑七"
        },
        meaning: {
            en: "Betrayal, deception, getting away with something.",
            zh: "背叛，欺骗，逃避责任。"
        },
        image: "images/SHENGBEl6.webp"
    },
    {
        name: {
            en: "Eight of Swords",
            zh: "剑八"
        },
        meaning: {
            en: "Self-imposed restriction, fear, isolation, imprisonment.",
            zh: "自我限制，恐惧，孤立，监禁。"
        },
        image: "images/SWORDS8.webp"
    },
    {
        name: {
            en: "Nine of Swords",
            zh: "剑九"
        },
        meaning: {
            en: "Anxiety, worry, fear, depression, nightmares.",
            zh: "焦虑，担忧，恐惧，抑郁，噩梦。"
        },
        image: "images/SWORDS9.webp"
    },
    {
        name: {
            en: "Ten of Swords",
            zh: "剑十"
        },
        meaning: {
            en: "Endings, betrayal, loss, crisis, failure.",
            zh: "结束，背叛，失落，危机，失败。"
        },
        image: "images/SWORDS10.webp"
    },
    {
        name: {
            en: "Page of Swords",
            zh: "剑侍者"
        },
        meaning: {
            en: "Curiosity, restlessness, mental energy, communication.",
            zh: "好奇，躁动，精神能量，沟通。"
        },
        image: "images/PAGE_SWORDS.webp"
    },
    {
        name: {
            en: "Knight of Swords",
            zh: "剑骑士"
        },
        meaning: {
            en: "Action-oriented, ambitious, driven to succeed, fast thinking.",
            zh: "行动导向，有雄心，驱动力强，思维迅速。"
        },
        image: "images/KNIGHT_SWORDS.webp"
    },
    {
        name: {
            en: "Queen of Swords",
            zh: "剑王后"
        },
        meaning: {
            en: "Independent, unbiased judgment, clear boundaries, direct communication.",
            zh: "独立，公正判断，明确界限，直接沟通。"
        },
        image: "images/QUEEN_SWORDS.webp"
    },
    {
        name: {
            en: "King of Swords",
            zh: "剑国王"
        },
        meaning: {
            en: "Intellectual, authoritative, strategic thinker, truth seeker.",
            zh: "智者，权威，战略思考者，真理追求者。"
        },
        image: "images/KING_SWORDS.webp"
    },

    // 星币（Pentacles）
    {
        name: {
            en: "Ace of Pentacles",
            zh: "星币王牌"
        },
        meaning: {
            en: "New financial or career opportunity, manifestation, abundance.",
            zh: "新的财务或职业机会，显化，丰盛。"
        },
        image: "images/ACE_PENTACLES.webp"
    },
    {
        name: {
            en: "Two of Pentacles",
            zh: "星币二"
        },
        meaning: {
            en: "Balance, adaptability, time management, prioritization.",
            zh: "平衡，适应性，时间管理，优先级。"
        },
        image: "images/PENTACLE2.webp"
    },
    {
        name: {
            en: "Three of Pentacles",
            zh: "星币三"
        },
        meaning: {
            en: "Teamwork, collaboration, learning, implementation.",
            zh: "团队合作，协作，学习，实施。"
        },
        image: "images/PENTACLE3.webp"
    },
    {
        name: {
            en: "Four of Pentacles",
            zh: "星币四"
        },
        meaning: {
            en: "Control, stability, security, conservatism.",
            zh: "控制，稳定，安全，保守。"
        },
        image: "images/PENTACLE4.webp"
    },
    {
        name: {
            en: "Five of Pentacles",
            zh: "星币五"
        },
        meaning: {
            en: "Financial loss, poverty, insecurity, worry, health issues.",
            zh: "财务损失，贫困，不安全，担忧，健康问题。"
        },
        image: "images/PENTACLE5.webp"
    },
    {
        name: {
            en: "Six of Pentacles",
            zh: "星币六"
        },
        meaning: {
            en: "Generosity, charity, sharing wealth, balance between giving and receiving.",
            zh: "慷慨，慈善，共享财富，给予与接受之间的平衡。"
        },
        image: "images/PENTACLE6.webp"
    },
    {
        name: {
            en: "Seven of Pentacles",
            zh: "星币七"
        },
        meaning: {
            en: "Patience, perseverance, investment, growth, assessment.",
            zh: "耐心，坚持，投资，成长，评估。"
        },
        image: "images/PENTACLE7.webp"
    },
    {
        name: {
            en: "Eight of Pentacles",
            zh: "星币八"
        },
        meaning: {
            en: "Apprenticeship, education, training, improvement, dedication.",
            zh: "学徒，教育，培训，改进，奉献。"
        },
        image: "images/PENTACLE8.webp"
    },
    {
        name: {
            en: "Nine of Pentacles",
            zh: "星币九"
        },
        meaning: {
            en: "Luxury, self-sufficiency, financial gain, independence.",
            zh: "奢华，自给自足，财务收益，独立。"
        },
        image: "images/PENTACLE9.webp"
    },
    {
        name: {
            en: "Ten of Pentacles",
            zh: "星币十"
        },
        meaning: {
            en: "Wealth, financial security, family, long-term success, legacy.",
            zh: "财富，财务安全，家庭，长期成功，遗产。"
        },
        image: "images/PENTACLE10.webp"
    },
    {
        name: {
            en: "Page of Pentacles",
            zh: "星币侍者"
        },
        meaning: {
            en: "Manifestation, financial opportunity, skill development.",
            zh: "显化，财务机会，技能发展。"
        },
        image: "images/PAGE_PENTACLES.webp"
    },
    {
        name: {
            en: "Knight of Pentacles",
            zh: "星币骑士"
        },
        meaning: {
            en: "Hard work, productivity, routine, conservatism.",
            zh: "辛勤工作，生产力，日常，保守。"
        },
        image: "images/KNIGHT_PENTACLES.webp"
    },
    {
        name: {
            en: "Queen of Pentacles",
            zh: "星币王后"
        },
        meaning: {
            en: "Practicality, creature comforts, financial security, nurturing.",
            zh: "务实，舒适，财务安全，养育。"
        },
        image: "images/QUEEN_PENTACLES.webp"
    },
    {
        name: {
            en: "King of Pentacles",
            zh: "星币国王"
        },
        meaning: {
            en: "Wealth, business, leadership, security, discipline.",
            zh: "财富，商业，领导力，安全，纪律。"
        },
        image: "images/KING_PENTACLES.webp"
    },
];

// 当前语言，默认英文
let currentLanguage = 'en';

// 获取页面元素
const enBtn = document.getElementById('en-btn');
const zhBtn = document.getElementById('zh-btn');
const startTestBtn = document.getElementById('start-test');
const tarotTestSection = document.getElementById('tarot-test');
const tarotResultSection = document.getElementById('tarot-result');
const selectedCardImg = document.getElementById('selected-card');
const cardNameEl = document.getElementById('card-name');
const cardMeaningEl = document.getElementById('card-meaning');
const anotherTestBtn = document.getElementById('another-test');

// 语言切换按钮事件
enBtn.addEventListener('click', () => switchLanguage('en'));
zhBtn.addEventListener('click', () => switchLanguage('zh'));

// 开始测试按钮事件
startTestBtn.addEventListener('click', startTarotTest);

// 重新测试按钮事件
anotherTestBtn.addEventListener('click', resetTest);

// 翻译文本
const translations = {
    title: {
        en: "Thisufuture",
        zh: "thisufuture"
    },
    intro: {
        en: "Welcome to Thisufuture! Discover what the Tarot has in store for your future.",
        zh: "相信这就是你的未来！塔罗牌为你揭示未来。"
    },
    start_test: {
        en: "Start Tarot Test",
        zh: "开始塔罗测试"
    },
    another_test: {
        en: "Another Test",
        zh: "再次测试"
    }
};

// 函数：切换语言
function switchLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });

    // 更新按钮样式
    if (lang === 'en') {
        enBtn.classList.add('active');
        zhBtn.classList.remove('active');
    } else {
        zhBtn.classList.add('active');
        enBtn.classList.remove('active');
    }
}

// 初始化语言
switchLanguage(currentLanguage);

// 函数：开始塔罗测试
function startTarotTest() {
    // 随机选择一张塔罗牌
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const selectedCard = tarotCards[randomIndex];

    // 显示结果
    selectedCardImg.src = selectedCard.image;
    selectedCardImg.alt = selectedCard.name[currentLanguage];
    cardNameEl.textContent = selectedCard.name[currentLanguage];
    cardMeaningEl.textContent = selectedCard.meaning[currentLanguage];

    // 切换显示
    tarotTestSection.classList.add('hidden');
    tarotResultSection.classList.remove('hidden');
}

// 函数：重置测试
function resetTest() {
    tarotResultSection.classList.add('hidden');
    tarotTestSection.classList.remove('hidden');
}
