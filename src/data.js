export const RELIGIONS_DATA = [
  {
    id: 'buddhism',
    name: 'Buddhism',
    hindiName: 'बौद्ध धर्म',
    symbol: '☸️',
    color: '#0d9488',
    glowColor: 'rgba(13, 148, 136, 0.4)',
    bgGradient: 'linear-gradient(135deg, rgba(19, 78, 74, 0.85) 0%, rgba(13, 148, 136, 0.85) 100%)',
    artImage: '/assets/buddhism_art.jpg',
    summary: 'Teachings of Gautam Buddha focusing on peaceful living, mindfulness, compassion towards all creatures, and inner stillness.',
    virtues: ['Compassion (Karuna)', 'Mindfulness', 'Peace', 'Gentleness'],
    ambientChant: {
      name: 'Om Mani Padme Hum & Tibetan Bowls',
      hindiLabel: 'ॐ मणि पद्मे हूँ पावन बौद्ध मंत्र एवं तिब्बती ध्वनि',
      audioSrc: '/assets/audio/buddhism_chant.mp3',
      type: 'buddhistChant',
      description: 'Authentic Buddhist Om Mani Padme Hum chant resonance with peaceful Tibetan singing bowls.'
    },
    lectures: [
      {
        id: 'b1',
        title: 'Prince Siddhartha & The Wounded Swan',
        duration: '4:20 mins',
        description: 'How young Siddhartha proved that the one who protects life has greater right than the one who hurts it.',
        videoPreviewUrl: '/assets/buddhism_art.jpg'
      },
      {
        id: 'b2',
        title: 'The Bodhi Tree & The Light of Enlightenment',
        duration: '5:10 mins',
        description: 'How sitting in quiet stillness helps us discover true happiness, clarity, and kindness.',
        videoPreviewUrl: '/assets/buddhism_art.jpg'
      },
      {
        id: 'b3',
        title: 'The Eightfold Path Simplified for Kids',
        duration: '3:45 mins',
        description: 'Right words, right actions, and right effort: a practical roadmap for everyday joyful living.',
        videoPreviewUrl: '/assets/buddhism_art.jpg'
      }
    ],
    storybook: {
      title: 'The Golden Swan and the Lesson of Contentment',
      art: '/assets/buddhism_art.jpg',
      text: `Once upon a time near a quiet river in ancient India, there lived a graceful golden swan. The swan noticed a humble family in a small cottage struggling to buy food. Having a kind heart, the swan decided to shed one golden feather every month to help them. 

The family was overjoyed and grateful. But after some time, greed crept into their hearts. "Why wait every month? Let us take all the feathers at once!" thought the family. 

When they tried to capture the swan, the golden feathers instantly turned into ordinary white feathers. The swan flew up towards the sky and said gently: "Greed destroys the blessings you have. Contentment and patience bring unending peace."`,
      moralTakeaway: 'True happiness comes from gratitude and contentment, never from greed.'
    },
    teachings: [
      {
        principle: 'Karuna (Compassion)',
        subtitle: 'Caring for all living beings',
        example: 'Helping a bird with water on a sunny day or comforting a crying friend in school.',
        icon: '🪷'
      },
      {
        principle: 'Right Speech (Samma Vaca)',
        subtitle: 'Words that heal, not hurt',
        example: 'Speaking truth with a soft voice, avoiding gossip, and saying cheerful words.',
        icon: '💬'
      },
      {
        principle: 'Mindfulness (Sati)',
        subtitle: 'Being present in the moment',
        example: 'Eating your food without looking at a screen, tasting every bite with gratitude.',
        icon: '🧘'
      },
      {
        principle: 'Ahimsa (Harmlessness)',
        subtitle: 'Never harming another soul',
        example: 'Walking carefully so you do not step on tiny crawling insects in the garden.',
        icon: '🕊️'
      }
    ],
    calm: {
      title: 'Tibetan Singing Bowl & Mindful Breath',
      chimeSound: 'singingBowl',
      affirmation: 'I breathe in peace, I breathe out kindness to the whole world.'
    },
    quiz: [
      {
        question: 'What did Prince Siddhartha do when his cousin shot the swan with an arrow?',
        options: [
          'He gave the swan to the hunter',
          'He pulled out the arrow, bandaged the wound, and saved it',
          'He ignored the injured bird'
        ],
        correct: 1,
        explanation: 'Siddhartha taught that the savior of life is greater than the destroyer of life.'
      },
      {
        question: 'What does "Mindfulness" mean in simple terms?',
        options: [
          'Thinking about five things at the same time',
          'Being fully present and aware of what you are doing right now',
          'Sleeping all day long'
        ],
        correct: 1,
        explanation: 'Mindfulness means paying calm attention to the present moment.'
      }
    ],
    finalExam: [
      {
        question: 'Under which sacred tree did Buddha attain enlightenment?',
        options: ['Mango Tree', 'Bodhi Tree (Peepal)', 'Banyan Tree'],
        correct: 1
      },
      {
        question: 'Which virtue teaches us to feel and heal the sorrow of others?',
        options: ['Karuna (Compassion)', 'Anger', 'Jealousy'],
        correct: 0
      },
      {
        question: 'What happens when we use gentle and truthful words?',
        options: ['People fight more', 'We create harmony and trust', 'Nobody listens'],
        correct: 1
      },
      {
        question: 'In the story of the Golden Swan, what destroyed the blessing?',
        options: ['Patience', 'Greed', 'Friendship'],
        correct: 1
      },
      {
        question: 'What is the core Buddhist teaching about nature and animals?',
        options: ['Only humans matter', 'All life is connected and deserves respect', 'Animals have no feelings'],
        correct: 1
      }
    ],
    parentMetrics: {
      lecturesCompleted: 3,
      totalLectures: 3,
      weeklyHours: 2.8,
      examScore: 96,
      grade: 'A+',
      weeklyDays: [
        { day: 'Mon', mins: 25 },
        { day: 'Tue', mins: 30 },
        { day: 'Wed', mins: 20 },
        { day: 'Thu', mins: 35 },
        { day: 'Fri', mins: 15 },
        { day: 'Sat', mins: 40 },
        { day: 'Sun', mins: 15 }
      ],
      dinnerPrompt: 'Ask your child today: "If your friend made a mistake today, how can you show patience and compassion like the Buddha?"'
    }
  },
  {
    id: 'hinduism',
    name: 'Hinduism (Sanatana Dharma)',
    hindiName: 'सनातन धर्म',
    symbol: '🕉️',
    color: '#d97706',
    glowColor: 'rgba(217, 119, 6, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(120, 53, 15, 0.85) 0%, rgba(217, 119, 6, 0.85) 100%)',
    artImage: '/assets/hinduism_art.jpg',
    summary: 'One of the oldest spiritual traditions emphasizing Dharma (righteousness), Karma (deeds), and Seva (service).',
    virtues: ['Dharma (Righteousness)', 'Karma (Good Deeds)', 'Ahimsa (Non-violence)', 'Seva (Selfless Service)'],
    ambientChant: {
      name: 'Gayatri Mantra Sacred Chanting',
      hindiLabel: 'पावन गायत्री मंत्र (ॐ भूर्भुवः स्वः) एवं तानपूरा नाद',
      audioSrc: '/assets/audio/hinduism_chant.mp3',
      type: 'gayatriMantra',
      description: 'Authentic recitation of Gayatri Mantra with cosmic Tanpura drone and Vedic resonance.'
    },
    lectures: [
      {
        id: 'h1',
        title: 'The Squirrel’s Little Pebble: Valuing Every Effort',
        duration: '4:15 mins',
        description: 'How a tiny squirrel rolling in sand to help build the great bridge won Lord Rama’s heart.',
        videoPreviewUrl: '/assets/hinduism_art.jpg'
      },
      {
        id: 'h2',
        title: 'Why We Greet with "Namaste" & Light Diyas',
        duration: '3:50 mins',
        description: 'The divine spark in every living creature and why light symbolizes victory of wisdom over ignorance.',
        videoPreviewUrl: '/assets/hinduism_art.jpg'
      },
      {
        id: 'h3',
        title: 'Karma: The Law of Echoes',
        duration: '4:45 mins',
        description: 'Whatever seeds of words and actions you plant will bloom back into your own garden.',
        videoPreviewUrl: '/assets/hinduism_art.jpg'
      }
    ],
    storybook: {
      title: 'The Devotion of the Little Squirrel',
      art: '/assets/hinduism_art.jpg',
      text: `When Lord Rama and the Vanara army were building the grand bridge across the ocean to Lanka, mighty warriors were carrying huge boulders and mountains. Among them was a tiny little squirrel. 

The squirrel would dip into the sea, run to the shore, roll in the sand, and shake the sand particles between the stones. The giant monkeys laughed: "What can your tiny sand do, little one?" 

Lord Rama gently picked up the squirrel in his palms and caressed its back, creating the three loving stripes. He said: "No task done with love and purity is small. Every sincere effort upholds the bridge of Dharma."`,
      moralTakeaway: 'Never underestimate your small acts of help; sincerity matters more than size.'
    },
    teachings: [
      {
        principle: 'Dharma',
        subtitle: 'Living righteously and duty',
        example: 'Doing your homework responsibly and always defending the weak.',
        icon: '⚖️'
      },
      {
        principle: 'Vasudhaiva Kutumbakam',
        subtitle: 'The world is one single family',
        example: 'Treating guests, friends from different cultures, and animals with warm hospitality.',
        icon: '🌍'
      },
      {
        principle: 'Seva',
        subtitle: 'Selfless service with zero ego',
        example: 'Serving water to workers or helping an elderly grandparent cross the room.',
        icon: '🙏'
      },
      {
        principle: 'Satya',
        subtitle: 'Upholding truth with gentleness',
        example: 'Admitting your mistake honestly when an antique vase falls.',
        icon: '✨'
      }
    ],
    calm: {
      title: 'Sacred Om & Golden Sunset Chime',
      chimeSound: 'templeBell',
      affirmation: 'The same divine spark shines inside me and inside everyone around me.'
    },
    quiz: [
      {
        question: 'What is the sacred meaning behind greeting with "Namaste"?',
        options: [
          'Saying goodbye forever',
          'I bow to the divine spark of light within you',
          'Asking for gifts'
        ],
        correct: 1,
        explanation: 'Namaste recognizes that the soul in another person is sacred and equal.'
      },
      {
        question: 'What did Lord Rama give the little squirrel as a blessing?',
        options: ['A golden crown', 'Three loving stripes on its back', 'A big mango'],
        correct: 1,
        explanation: 'Lord Rama caressed the squirrel with his fingers, leaving three gentle stripes.'
      }
    ],
    finalExam: [
      {
        question: 'What does "Vasudhaiva Kutumbakam" mean?',
        options: ['Only my town is great', 'The whole world is one family', 'We should live alone'],
        correct: 1
      },
      {
        question: 'What does the law of Karma teach?',
        options: ['Actions have no consequences', 'Good deeds return as good, unkind deeds return as lessons', 'Luck is everything'],
        correct: 1
      },
      {
        question: 'What does lighting a Diya (lamp) represent?',
        options: ['Lighting up for cooking', 'Victory of light & wisdom over darkness', 'Just decoration'],
        correct: 1
      },
      {
        question: 'What is the highest duty (Dharma) according to Ahimsa?',
        options: ['Non-injury and kindness to all beings', 'Fighting to win arguments', 'Accumulating wealth'],
        correct: 0
      },
      {
        question: 'How did the squirrel help build the great bridge?',
        options: ['Carrying mountains', 'Carrying sand between the boulders with sincerity', 'Cheering from a tree'],
        correct: 1
      }
    ],
    parentMetrics: {
      lecturesCompleted: 3,
      totalLectures: 3,
      weeklyHours: 3.1,
      examScore: 94,
      grade: 'A+',
      weeklyDays: [
        { day: 'Mon', mins: 30 },
        { day: 'Tue', mins: 25 },
        { day: 'Wed', mins: 35 },
        { day: 'Thu', mins: 20 },
        { day: 'Fri', mins: 30 },
        { day: 'Sat', mins: 45 },
        { day: 'Sun', mins: 20 }
      ],
      dinnerPrompt: 'Ask your child today: "How can we practice \'Vasudhaiva Kutumbakam\' (the world is one family) in our neighborhood this week?"'
    }
  },
  {
    id: 'sikhism',
    name: 'Sikhism',
    hindiName: 'सिख धर्म',
    symbol: '☬',
    color: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(7, 89, 133, 0.85) 0%, rgba(2, 132, 199, 0.85) 100%)',
    artImage: '/assets/sikhism_art.jpg',
    summary: 'Founded by Guru Nanak Dev Ji, teaching absolute equality, honest living (Kirat Karo), and community sharing (Vand Chhako).',
    virtues: ['Equality of All', 'Vand Chhako (Sharing)', 'Kirat Karo (Honest Work)', 'Seva (Selfless Help)'],
    ambientChant: {
      name: 'Gurbani Kirtan & Mool Mantar',
      hindiLabel: 'ੴ श्री मूल मंतर एवं पावन गुरबाणी कीर्तन',
      audioSrc: '/assets/audio/sikhism_chant.mp3',
      type: 'ikOnkarChant',
      description: 'Authentic Gurbani recitation with celestial harmonium and peaceful Dilruba resonance.'
    },
    lectures: [
      {
        id: 's1',
        title: 'Guru Nanak & The Sacha Sauda (True Bargain)',
        duration: '4:40 mins',
        description: 'Why feeding the hungry sadhus was the most profitable trade young Nanak ever made.',
        videoPreviewUrl: '/assets/sikhism_art.jpg'
      },
      {
        id: 's2',
        title: 'The Magic of Langar: Where Kings & Commoners Sit Together',
        duration: '3:55 mins',
        description: 'How community kitchens broke caste and social barriers to feed everyone with love.',
        videoPreviewUrl: '/assets/sikhism_art.jpg'
      },
      {
        id: 's3',
        title: 'Bhai Kanhaiya: Serving Water on the Battlefield',
        duration: '5:05 mins',
        description: 'Seeing God’s divine light in both friend and foe without discrimination.',
        videoPreviewUrl: '/assets/sikhism_art.jpg'
      }
    ],
    storybook: {
      title: 'Bhai Kanhaiya’s Universal Water Bag',
      art: '/assets/sikhism_art.jpg',
      text: `During a fierce battle in Punjab, a devoted Sikh named Bhai Kanhaiya walked between wounded soldiers with a goatskin bag of fresh water. Whenever someone groaned in pain, he poured cool water into their parched mouth. 

Some soldiers noticed he was giving water not just to his fellow warriors, but also to wounded enemies! They took him to Guru Gobind Singh Ji to complain. 

Guru Ji smiled and asked: "Bhai Kanhaiya, is it true you served water to those fighting against us?" 

Bhai Kanhaiya bowed humbly and replied: "My Guru, when I looked into their thirsty eyes, I saw neither friend nor foe. In every face, I only saw the light of the Creator." Guru Ji hugged him and gave him healing salve to bandage their wounds as well.`,
      moralTakeaway: 'Selfless service sees no borders or labels; love serves humanity everywhere.'
    },
    teachings: [
      {
        principle: 'Vand Chhako',
        subtitle: 'Share what you have before you take',
        example: 'Sharing your snack box with a classmate who forgot theirs.',
        icon: '🍲'
      },
      {
        principle: 'Kirat Karo',
        subtitle: 'Earn through honest and hard work',
        example: 'Studying diligently without cheating in exams.',
        icon: '🛠️'
      },
      {
        principle: 'Naam Japna',
        subtitle: 'Remembering the Divine with gratitude',
        example: 'Starting every morning with a cheerful prayer of thanks for life.',
        icon: '🌅'
      },
      {
        principle: 'Equality (Barabari)',
        subtitle: 'All humans are born equal',
        example: 'Treating boys, girls, rich, and poor with exact identical respect.',
        icon: '⚖️'
      }
    ],
    calm: {
      title: 'Peaceful Dilruba Chime & Gratitude Breath',
      chimeSound: 'harp',
      affirmation: 'I see the light of the Creator in every face I meet today.'
    },
    quiz: [
      {
        question: 'What is Langar in Sikh tradition?',
        options: [
          'A free community kitchen where all sit together equally on the floor',
          'A private party for rich people',
          'A book store'
        ],
        correct: 0,
        explanation: 'Langar symbolizes equality; emperor and peasant sit side by side.'
      },
      {
        question: 'What did young Guru Nanak do with the 20 rupees his father gave him for business?',
        options: [
          'He bought expensive clothes',
          'He fed hungry wandering holy people (Sacha Sauda)',
          'He lost the money'
        ],
        correct: 1,
        explanation: 'Guru Nanak called feeding hungry people the "True Bargain" (Sacha Sauda).'
      }
    ],
    finalExam: [
      {
        question: 'Who was the founder of Sikhism?',
        options: ['Guru Nanak Dev Ji', 'King Solomon', 'Emperor Ashoka'],
        correct: 0
      },
      {
        question: 'What does "Kirat Karo" mean?',
        options: ['Earn honestly through hard work', 'Avoid working', 'Borrow money'],
        correct: 0
      },
      {
        question: 'Why did Guru Gobind Singh Ji praise Bhai Kanhaiya?',
        options: [
          'Because he ran away from the fight',
          'Because he saw the divine light in everyone and served water without discrimination',
          'Because he was a rich merchant'
        ],
        correct: 1
      },
      {
        question: 'What is the sacred symbol of Sikhism shown above?',
        options: ['Khanda', 'Om', 'Star of David'],
        correct: 0
      },
      {
        question: 'What does "Vand Chhako" instruct us to do?',
        options: ['Keep everything for ourselves', 'Share our food and blessings with others in need', 'Waste resources'],
        correct: 1
      }
    ],
    parentMetrics: {
      lecturesCompleted: 2,
      totalLectures: 3,
      weeklyHours: 2.2,
      examScore: 90,
      grade: 'A',
      weeklyDays: [
        { day: 'Mon', mins: 15 },
        { day: 'Tue', mins: 20 },
        { day: 'Wed', mins: 25 },
        { day: 'Thu', mins: 20 },
        { day: 'Fri', mins: 20 },
        { day: 'Sat', mins: 30 },
        { day: 'Sun', mins: 15 }
      ],
      dinnerPrompt: 'Ask your child today: "What is one way we can share our food or time with someone in need this weekend?"'
    }
  },
  {
    id: 'christianity',
    name: 'Christianity',
    hindiName: 'ईसाई धर्म',
    symbol: '✝️',
    color: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(76, 29, 149, 0.85) 0%, rgba(124, 58, 237, 0.85) 100%)',
    artImage: '/assets/christianity_art.jpg',
    summary: 'Teachings of Jesus Christ focusing on unconditional love, forgiving others from the heart, and the Golden Rule.',
    virtues: ['Unconditional Love (Agape)', 'Forgiveness', 'The Golden Rule', 'Helping the Needy'],
    ambientChant: {
      name: 'Cathedral Choir & Gregorian Chant',
      hindiLabel: 'पवित्र कैथेड्रल प्रार्थना एवं वीणा स्वर',
      audioSrc: '/assets/audio/christianity_chant.mp3',
      type: 'christianHymn',
      description: 'Authentic reverent Gregorian Latin chant (Veni Creator Spiritus) with cathedral choir harmony.'
    },
    lectures: [
      {
        id: 'c1',
        title: 'The Parable of the Good Samaritan',
        duration: '4:30 mins',
        description: 'Who is our true neighbor? How compassion transcends borders, nationalities, and differences.',
        videoPreviewUrl: '/assets/christianity_art.jpg'
      },
      {
        id: 'c2',
        title: 'The Golden Rule: Treating Others with Honor',
        duration: '3:40 mins',
        description: '"Do to others whatever you would like them to do to you" - the foundational rule of friendship.',
        videoPreviewUrl: '/assets/christianity_art.jpg'
      },
      {
        id: 'c3',
        title: 'Forgiving Seventy Times Seven',
        duration: '4:50 mins',
        description: 'Letting go of anger and grudges so your own heart stays light and joyful.',
        videoPreviewUrl: '/assets/christianity_art.jpg'
      }
    ],
    storybook: {
      title: 'The Traveler on the Jericho Road',
      art: '/assets/christianity_art.jpg',
      text: `A traveler was journeying down the rocky road from Jerusalem to Jericho when robbers attacked him, stole his belongings, and left him wounded by the wayside. 

A high priest passed by, but crossed to the other side of the road. Next, a temple helper came by, looked at the injured man, and walked away quickly. 

Then came a Samaritan—a man from a community that ordinary travelers looked down upon. When he saw the wounded man, his heart filled with deep pity. He bandaged the wounds with oil and wine, lifted the man onto his own donkey, took him to an inn, and paid the innkeeper to care for him until he healed. Jesus asked: "Who was the true neighbor?"`,
      moralTakeaway: 'Love is not what we say; it is the kindness we show to anyone in need.'
    },
    teachings: [
      {
        principle: 'The Golden Rule',
        subtitle: 'Treat others as you want to be treated',
        example: 'Cheering for your friend when they win, because you would want them to cheer for you.',
        icon: '🌟'
      },
      {
        principle: 'Forgiveness',
        subtitle: 'Clearing your heart of resentment',
        example: 'Saying "It is okay, I forgive you" when a friend accidentally tears your drawing.',
        icon: '🕊️'
      },
      {
        principle: 'Peacemaking',
        subtitle: 'Blessed are the peacemakers',
        example: 'Helping two arguing classmates shake hands and understand each other.',
        icon: '🤝'
      },
      {
        principle: 'Humility',
        subtitle: 'Serving others without boasting',
        example: 'Doing a quiet good deed without showing off or asking for applause.',
        icon: '🌱'
      }
    ],
    calm: {
      title: 'Peaceful Cathedral Chime & Morning Light',
      chimeSound: 'harp',
      affirmation: 'I choose love over anger, and forgiveness over grudges.'
    },
    quiz: [
      {
        question: 'What is known as "The Golden Rule"?',
        options: [
          'Collect as much gold as you can',
          'Do to others as you would like them to do to you',
          'Never speak to strangers'
        ],
        correct: 1,
        explanation: 'The Golden Rule teaches mutual kindness and empathy.'
      },
      {
        question: 'In the Good Samaritan story, who stopped to help the wounded traveler?',
        options: ['The Samaritan traveler', 'The priest', 'Nobody'],
        correct: 0,
        explanation: 'The Samaritan showed genuine compassion, regardless of social divisions.'
      }
    ],
    finalExam: [
      {
        question: 'What did Jesus teach about forgiving those who hurt us?',
        options: ['Hold a grudge forever', 'Forgive from the heart again and again', 'Take revenge'],
        correct: 1
      },
      {
        question: 'Who is your "neighbor" according to the Good Samaritan parable?',
        options: ['Only the person living next door', 'Anyone who is in need of kindness and help', 'Only people in your class'],
        correct: 1
      },
      {
        question: 'What is the virtue of "Humility"?',
        options: ['Boasting about your scores', 'Serving others quietly without showing off', 'Being angry'],
        correct: 1
      },
      {
        question: 'Which symbol represents Christianity worldwide?',
        options: ['The Cross ✝️', 'The Wheel', 'The Crescent'],
        correct: 0
      },
      {
        question: 'How can you apply the Golden Rule at school?',
        options: ['Include the lonely kid in your playground game', 'Take someone’s lunch', 'Laugh at mistakes'],
        correct: 0
      }
    ],
    parentMetrics: {
      lecturesCompleted: 3,
      totalLectures: 3,
      weeklyHours: 2.5,
      examScore: 92,
      grade: 'A',
      weeklyDays: [
        { day: 'Mon', mins: 20 },
        { day: 'Tue', mins: 30 },
        { day: 'Wed', mins: 15 },
        { day: 'Thu', mins: 25 },
        { day: 'Fri', mins: 20 },
        { day: 'Sat', mins: 35 },
        { day: 'Sun', mins: 25 }
      ],
      dinnerPrompt: 'Ask your child today: "Was there any moment this week where forgiving someone made you feel happier inside?"'
    }
  },
  {
    id: 'islam',
    name: 'Islam',
    hindiName: 'इस्लाम धर्म',
    symbol: '☪️',
    color: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(6, 78, 59, 0.85) 0%, rgba(5, 150, 105, 0.85) 100%)',
    artImage: '/assets/islam_art.jpg',
    summary: 'Teachings emphasizing peace (Salaam), charity (Zakat), trustworthiness (Amanah), and showing kindness to all creation.',
    virtues: ['Peace (Salaam)', 'Charity (Zakat & Sadqah)', 'Trustworthiness (Amanah)', 'Kindness to Nature'],
    ambientChant: {
      name: 'Surah Al-Fatiha Sacred Tilawat',
      hindiLabel: 'सूरह अल-फातिहा पावन तिलावत एवं शांति स्वर',
      audioSrc: '/assets/audio/islam_chant.mp3',
      type: 'islamicChant',
      description: 'Authentic melodic recitation of Surah Al-Fatiha with peaceful desert Ney ambiance.'
    },
    lectures: [
      {
        id: 'i1',
        title: 'The Thirsty Dog & The Traveler’s Shoe',
        duration: '4:10 mins',
        description: 'How an act of drawing water from a deep well for a panting stray dog brought immense spiritual blessing.',
        videoPreviewUrl: '/assets/islam_art.jpg'
      },
      {
        id: 'i2',
        title: 'Amanah: The Value of Absolute Honesty',
        duration: '3:50 mins',
        description: 'Why keeping promises and being truthful makes a person beloved by everyone.',
        videoPreviewUrl: '/assets/islam_art.jpg'
      },
      {
        id: 'i3',
        title: 'Sadqah: Even a Warm Smile is Charity',
        duration: '4:25 mins',
        description: 'Charity is not just money; removing a sharp thorn from a path or offering a smile is also charity.',
        videoPreviewUrl: '/assets/islam_art.jpg'
      }
    ],
    storybook: {
      title: 'The Wells of Compassion',
      art: '/assets/islam_art.jpg',
      text: `Under the blazing desert sun, a traveler walked for miles until his throat burned with thirst. After searching for hours, he finally discovered a deep well. He climbed down into the cool shadows, drank sweet water, and refreshed his spirit. 

As he climbed back out, he noticed a dog panting heavily, licking moist desert sand in desperate search of moisture. The traveler thought to himself: "This poor creature is suffering from the exact same thirst that I just felt." 

The well had no bucket or rope. Without hesitation, the man climbed back down into the dark well, filled his leather shoe with water, held the shoe firmly with his teeth so he could climb the rocky walls, and offered the cool water to the thirsty dog. The Prophet Muhammad (peace be upon him) taught that God smiled upon that traveler and forgave all his mistakes because of that one kind act.`,
      moralTakeaway: 'Showing mercy to helpless animals and nature unlocks divine mercy in our lives.'
    },
    teachings: [
      {
        principle: 'Sadqah (Everyday Charity)',
        subtitle: 'Charity in small everyday acts',
        example: 'Smiling at someone who is nervous, or picking up a sharp stone from the sidewalk.',
        icon: '🤲'
      },
      {
        principle: 'Amanah (Honesty & Trust)',
        subtitle: 'Being a person of your word',
        example: 'Returning a borrowed pencil in perfect condition exactly when promised.',
        icon: '🛡️'
      },
      {
        principle: 'Salaam (Peaceful Greetings)',
        subtitle: 'Wishing peace on all you meet',
        example: 'Greeting your teachers and family with warmth and wishing them peace.',
        icon: '🌙'
      },
      {
        principle: 'Respect for Parents',
        subtitle: 'Treating elders with gentleness',
        example: 'Speaking with sweet words to parents even when you feel tired.',
        icon: '🏡'
      }
    ],
    calm: {
      title: 'Gentle Oasis Breeze & Mindful Breathing',
      chimeSound: 'flute',
      affirmation: 'I spread peace with my words, hands, and actions today.'
    },
    quiz: [
      {
        question: 'What did the Prophet teach about smiling at others?',
        options: ['It is a waste of energy', 'Even a smile is considered an act of charity (Sadqah)', 'It is not polite'],
        correct: 1,
        explanation: 'In Islamic ethics, uplifting someone with a warm smile is considered charity.'
      },
      {
        question: 'How did the traveler carry water out of the deep well for the dog?',
        options: ['In a glass jar', 'In his leather shoe held with his teeth', 'In a bucket'],
        correct: 1,
        explanation: 'He showed great dedication by using his shoe to save the animal.'
      }
    ],
    finalExam: [
      {
        question: 'What does the word "Salaam" mean?',
        options: ['Wealth', 'Peace', 'Power'],
        correct: 1
      },
      {
        question: 'What is "Amanah"?',
        options: ['Trustworthiness and keeping promises', 'Running fast', 'Playing games'],
        correct: 0
      },
      {
        question: 'Which of the following is considered an act of charity (Sadqah)?',
        options: [
          'Removing harm or garbage from a pathway',
          'Throwing trash on the grass',
          'Shouting at friends'
        ],
        correct: 0
      },
      {
        question: 'What is the annual practice of giving a portion of savings to the poor called?',
        options: ['Zakat', 'Sport', 'Holiday'],
        correct: 0
      },
      {
        question: 'What lesson does the story of the thirsty dog teach children?',
        options: ['Ignore stray animals', 'Every act of mercy to any living creature brings spiritual blessings', 'Wells are dangerous'],
        correct: 1
      }
    ],
    parentMetrics: {
      lecturesCompleted: 3,
      totalLectures: 3,
      weeklyHours: 2.7,
      examScore: 94,
      grade: 'A+',
      weeklyDays: [
        { day: 'Mon', mins: 20 },
        { day: 'Tue', mins: 25 },
        { day: 'Wed', mins: 30 },
        { day: 'Thu', mins: 20 },
        { day: 'Fri', mins: 35 },
        { day: 'Sat', mins: 25 },
        { day: 'Sun', mins: 25 }
      ],
      dinnerPrompt: 'Ask your child today: "What is one small act of \'Sadqah\' (like a smile or helping hand) we can do for our neighbors this week?"'
    }
  },
  {
    id: 'jainism',
    name: 'Jainism',
    hindiName: 'जैन धर्म',
    symbol: '🪷',
    color: '#e11d48',
    glowColor: 'rgba(225, 29, 72, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(136, 19, 55, 0.85) 0%, rgba(225, 29, 72, 0.85) 100%)',
    artImage: '/assets/jainism_art.jpg',
    summary: 'Teachings of Bhagwan Mahavira emphasizing supreme Ahimsa (non-violence to all life forms), Aparigraha (non-greed), and truth.',
    virtues: ['Ahimsa Paramo Dharma', 'Reverence for All Life', 'Aparigraha (Simplicity)', 'Forgiveness (Micchami Dukkadam)'],
    ambientChant: {
      name: 'Namokar (Navkar) Mahamantra',
      hindiLabel: 'श्री णमोकार महामंत्र पावन जाप एवं घंटनाद',
      audioSrc: '/assets/audio/jainism_chant.mp3',
      type: 'navkarChant',
      description: 'Authentic chanting of sacred Navkar Mantra (Namo Arihantanam) with temple bells.'
    },
    lectures: [
      {
        id: 'j1',
        title: 'Lord Mahavira & Living in Harmony with All Beings',
        duration: '4:20 mins',
        description: 'How every tiny creature—from ants to birds—cherishes its own life just as much as we do.',
        videoPreviewUrl: '/assets/jainism_art.jpg'
      },
      {
        id: 'j2',
        title: 'Micchami Dukkadam: The Universal Festival of Forgiveness',
        duration: '3:45 mins',
        description: 'Asking forgiveness from every single creature and letting go of all ill-will.',
        videoPreviewUrl: '/assets/jainism_art.jpg'
      },
      {
        id: 'j3',
        title: 'Aparigraha: Learning to Share and Live Lightly',
        duration: '4:10 mins',
        description: 'Why having fewer wants leaves more resources for nature and fellow humans.',
        videoPreviewUrl: '/assets/jainism_art.jpg'
      }
    ],
    storybook: {
      title: 'The Great King and the Elephant with Five Friends',
      art: '/assets/jainism_art.jpg',
      text: `In an ancient city, five wise travelers who were blind from birth were asked to describe an elephant. 

The first touched its sturdy leg and declared: "An elephant is like a giant tree trunk!" 
The second touched its ear and said: "No, it is like a grand fan!" 
The third touched its trunk and argued: "It is like a thick water hose!" 
The fourth touched its tail and said: "You are all mistaken, it is like a soft rope!" 
The fifth touched its side and shouted: "It is like a solid stone wall!" 

They began arguing loudly. A gentle Jain sage walked past and said softly: "Each of you touched only one small part of the truth. When you combine all perspectives with respect, the whole elephant is understood."`,
      moralTakeaway: 'Respect different viewpoints; everyone sees a piece of the great truth.'
    },
    teachings: [
      {
        principle: 'Ahimsa (Non-violence)',
        subtitle: 'Supreme kindness in thought, word & deed',
        example: 'Walking softly in gardens and never hurting animals or insects.',
        icon: '✋'
      },
      {
        principle: 'Anekantavada',
        subtitle: 'Many-sidedness and open-mindedness',
        example: 'Listening patiently to a friend whose opinion differs from yours.',
        icon: '💎'
      },
      {
        principle: 'Aparigraha',
        subtitle: 'Simple living and non-possession',
        example: 'Not demanding five new toys when you already have toys to play with.',
        icon: '🍃'
      },
      {
        principle: 'Micchami Dukkadam',
        subtitle: 'Asking forgiveness from all beings',
        example: 'Saying sorry from your heart whenever you cause unintentional sadness.',
        icon: '🙏'
      }
    ],
    calm: {
      title: 'Nature Chimes & Sacred Stillness',
      chimeSound: 'singingBowl',
      affirmation: 'May all living beings be happy, may none suffer harm.'
    },
    quiz: [
      {
        question: 'What does "Ahimsa Paramo Dharma" mean?',
        options: [
          'Non-violence is the supreme spiritual duty',
          'Winning every race is the highest duty',
          'Travelling the world'
        ],
        correct: 0,
        explanation: 'Ahimsa is the bedrock of Jain ethics.'
      },
      {
        question: 'What is the sacred phrase said during Paryushan festival to seek forgiveness?',
        options: ['Good morning', 'Micchami Dukkadam', 'Namaste'],
        correct: 1,
        explanation: 'Micchami Dukkadam means "May all the harm I caused be forgiven."'
      }
    ],
    finalExam: [
      {
        question: 'Who was the 24th Tirthankara of Jainism?',
        options: ['Bhagwan Mahavira', 'King Ashoka', 'Chanakya'],
        correct: 0
      },
      {
        question: 'What does the story of the Blind Men and the Elephant teach us (Anekantavada)?',
        options: [
          'Truth has many sides, so we must respect different perspectives',
          'Elephants are dangerous',
          'Only one person can be right'
        ],
        correct: 0
      },
      {
        question: 'What is "Aparigraha"?',
        options: ['Collecting too many things', 'Non-greed and living simply', 'Fighting'],
        correct: 1
      },
      {
        question: 'What is the symbol on the palm of the Jain hand icon?',
        options: ['A wheel with Ahimsa in the center', 'A sword', 'A coin'],
        correct: 0
      },
      {
        question: 'How do Jains show reverence for nature?',
        options: ['By wasting water', 'By avoiding food waste and protecting even tiny insects', 'By cutting down trees'],
        correct: 1
      }
    ],
    parentMetrics: {
      lecturesCompleted: 2,
      totalLectures: 3,
      weeklyHours: 1.9,
      examScore: 88,
      grade: 'B+',
      weeklyDays: [
        { day: 'Mon', mins: 15 },
        { day: 'Tue', mins: 15 },
        { day: 'Wed', mins: 20 },
        { day: 'Thu', mins: 15 },
        { day: 'Fri', mins: 25 },
        { day: 'Sat', mins: 20 },
        { day: 'Sun', mins: 15 }
      ],
      dinnerPrompt: 'Ask your child today: "How can we practice \'Aparigraha\' (simple living) by decluttering our toys or clothes to share with others?"'
    }
  },
  {
    id: 'judaism',
    name: 'Judaism',
    hindiName: 'यहूदी धर्म',
    symbol: '✡️',
    color: '#1d4ed8',
    glowColor: 'rgba(29, 78, 216, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(23, 37, 84, 0.85) 0%, rgba(29, 78, 216, 0.85) 100%)',
    artImage: '/assets/judaism_art.jpg',
    summary: 'Ancient wisdom tradition emphasizing Tikkun Olam (repairing the world), pursuing justice, and family gratitude on Shabbat.',
    virtues: ['Tikkun Olam (Heal the World)', 'Seeking Wisdom', 'Tzedakah (Justice & Giving)', 'Shabbat Gratitude'],
    ambientChant: {
      name: 'Shalom Aleichem Choral Peace Hymn',
      hindiLabel: 'शालोम अलैखेम पावन शांति गान एवं वीणा',
      audioSrc: '/assets/audio/judaism_chant.mp3',
      type: 'shalomChant',
      description: 'Authentic warm choral singing of Shalom Aleichem with sacred harp harmonies.'
    },
    lectures: [
      {
        id: 'jd1',
        title: 'Tikkun Olam: Each of Us Can Repair the World',
        duration: '4:15 mins',
        description: 'How every kind word, planted tree, and fair deed fixes a broken piece of our world.',
        videoPreviewUrl: '/assets/judaism_art.jpg'
      },
      {
        id: 'jd2',
        title: 'The Story of King Solomon’s Wisdom',
        duration: '4:50 mins',
        description: 'Why asking for an understanding heart to help others is greater than asking for gold.',
        videoPreviewUrl: '/assets/judaism_art.jpg'
      },
      {
        id: 'jd3',
        title: 'Shabbat: The Blessing of a Family Rest Day',
        duration: '3:35 mins',
        description: 'Turning off screens, lighting candles, and celebrating love and gratitude around the table.',
        videoPreviewUrl: '/assets/judaism_art.jpg'
      }
    ],
    storybook: {
      title: 'The Two Brothers and the Shared Field of Wheat',
      art: '/assets/judaism_art.jpg',
      text: `In ancient Jerusalem, two brothers farmed a shared field of wheat. One brother was married and had four children, while the younger brother lived alone. 

After harvest, they divided the sheaves of wheat equally into two stacks. At night, the older brother thought: "My brother is alone; he has no family to support him in old age. He needs more wheat." So in the dark of night, he carried three sheaves over to his brother’s stack. 

At the very same time, the younger brother thought: "My brother has a wife and four growing children to feed. He needs more wheat." So he carried three sheaves over to his brother’s stack. 

The next morning, both brothers were baffled why their stacks were still identical! That night, both carried wheat again, and met each other halfway in the moonlight with sheaves in their arms. They dropped the wheat and embraced with tears of love. Tradition says God blessed that exact field as the most holy ground on earth.`,
      moralTakeaway: 'When brothers and sisters think of each other’s happiness before their own, the world is healed.'
    },
    teachings: [
      {
        principle: 'Tikkun Olam',
        subtitle: 'Repairing and healing the world',
        example: 'Cleaning up plastic from a local park or planting a sapling.',
        icon: '🌍'
      },
      {
        principle: 'Tzedakah',
        subtitle: 'Righteous giving and fairness',
        example: 'Setting aside pocket money regularly in a special donation box.',
        icon: '🪙'
      },
      {
        principle: 'Shalom',
        subtitle: 'Peace, harmony, and wholeness',
        example: 'Ending every conversation with warmth and good wishes.',
        icon: '🕊️'
      },
      {
        principle: 'Love of Learning',
        subtitle: 'Asking curious questions every day',
        example: 'Reading books and asking your parents and teachers how the world works.',
        icon: '📖'
      }
    ],
    calm: {
      title: 'Harp of Mount Zion & Evening Peace',
      chimeSound: 'harp',
      affirmation: 'Through my kind actions today, I help repair and beautify the world.'
    },
    quiz: [
      {
        question: 'What does "Tikkun Olam" mean?',
        options: ['Building tall towers', 'Repairing and healing the world', 'Buying books'],
        correct: 1,
        explanation: 'Tikkun Olam is the Jewish ethical mission to improve society through good deeds.'
      },
      {
        question: 'Why did King Solomon ask for wisdom instead of gold or power?',
        options: ['He wanted to understand people’s hearts and govern justly', 'He forgot about gold', 'He had no choice'],
        correct: 0,
        explanation: 'King Solomon valued an understanding heart above all worldly wealth.'
      }
    ],
    finalExam: [
      {
        question: 'What is the weekly Jewish day of family rest and gratitude called?',
        options: ['Shabbat', 'Sunday', 'Tuesday'],
        correct: 0
      },
      {
        question: 'What does the story of the Two Brothers in the Wheat Field celebrate?',
        options: ['Selfishness', 'Unselfish sibling love and caring for each other’s needs', 'Wheat farming tricks'],
        correct: 1
      },
      {
        question: 'What is "Tzedakah"?',
        options: ['Righteousness and charitable giving', 'Singing songs', 'Running in races'],
        correct: 0
      },
      {
        question: 'What is the six-pointed star symbol of Judaism called?',
        options: ['Star of David (Magen David)', 'Crescent', 'Om'],
        correct: 0
      },
      {
        question: 'How can a child participate in "Tikkun Olam"?',
        options: ['By planting trees and being kind to classmates', 'By wasting water', 'By teasing animals'],
        correct: 0
      }
    ],
    parentMetrics: {
      lecturesCompleted: 3,
      totalLectures: 3,
      weeklyHours: 2.4,
      examScore: 92,
      grade: 'A',
      weeklyDays: [
        { day: 'Mon', mins: 20 },
        { day: 'Tue', mins: 20 },
        { day: 'Wed', mins: 30 },
        { day: 'Thu', mins: 15 },
        { day: 'Fri', mins: 30 },
        { day: 'Sat', mins: 20 },
        { day: 'Sun', mins: 25 }
      ],
      dinnerPrompt: 'Ask your child today: "What is one small thing we did today that helped \'repair the world\' (Tikkun Olam)?"'
    }
  }
];

export const DAILY_QUOTES = [
  {
    quote: "Compassion is the language which the deaf can hear and the blind can see.",
    author: "Mark Twain"
  },
  {
    quote: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
  },
  {
    quote: "The fragrance of flowers spreads only in the direction of the wind. But the goodness of a person spreads in all directions.",
    author: "Chanakya"
  },
  {
    quote: "When you see the good in others, you bring out the best in yourself.",
    author: "Universal Wisdom"
  }
];
