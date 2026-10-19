export const ACADEMY_INFO = {
  name: "OmniWisdom Academy",
  tagline: "Universal Moral Values, Sacred Heritage & Cultural Harmony for Young Minds",
  subtitle: "Explore interactive video lessons, authentic sacred audio, illustrated moral stories, and virtue certifications across world traditions.",
  mission: "Fostering global empathy, mutual respect, and ethical character through timeless spiritual wisdom."
};

export const RELIGIONS_DATA = [
  {
    id: 'buddhism',
    name: 'Buddhism',
    subname: 'The Middle Path of Peace & Mindfulness',
    symbol: '☸️',
    color: '#0d9488',
    glowColor: 'rgba(13, 148, 136, 0.4)',
    bgGradient: 'linear-gradient(135deg, rgba(19, 78, 74, 0.9) 0%, rgba(13, 148, 136, 0.9) 100%)',
    artImage: '/assets/buddhism_art.jpg',
    summary: 'Teachings of Gautam Buddha focusing on peaceful living, mindfulness, compassion towards all creatures, and inner stillness.',
    virtues: ['Compassion (Karuna)', 'Mindfulness (Sati)', 'Inner Peace', 'Gentleness to Nature'],
    ambientChant: {
      name: 'Om Mani Padme Hum (Sacred Meditation)',
      audioSrc: '/assets/audio/buddhism_chant.mp3',
      description: 'Long continuous Tibetan Buddhist peace chant with resonant singing bowls (~10 mins).'
    },
    lectures: [
      {
        id: 'b1',
        title: 'Prince Siddhartha & The Wounded Swan',
        duration: '4:20 mins',
        description: 'How young Siddhartha proved that the one who protects life has greater right than the one who hurts it.',
        videoScene: 'swan_rescue',
        takeaway: 'True bravery lies in defending and healing life, never in destroying it.'
      },
      {
        id: 'b2',
        title: 'The Bodhi Tree & The Light of Enlightenment',
        duration: '5:10 mins',
        description: 'How sitting in quiet stillness helps us discover true happiness, clarity, and kindness.',
        videoScene: 'bodhi_tree',
        takeaway: 'Quiet reflection calms angry storms and reveals the clear sky within our minds.'
      },
      {
        id: 'b3',
        title: 'The Eightfold Path Simplified for Young Minds',
        duration: '3:45 mins',
        description: 'Right words, right actions, and right effort: a practical roadmap for everyday joyful living.',
        videoScene: 'eightfold_path',
        takeaway: 'Kind words and honest deeds create harmony wherever you walk.'
      },
      {
        id: 'b4',
        title: 'The Mustard Seed & Understanding Grief with Love',
        duration: '4:30 mins',
        description: 'Buddha teaches Kisa Gotami how universal empathy connects all families in healing.',
        videoScene: 'mustard_seed',
        takeaway: 'Sharing grief through empathy brings peace and deep human connection.'
      }
    ],
    stories: [
      {
        id: 'bs1',
        title: 'The Golden Swan and Contentment',
        subtitle: 'A Parable on Greed vs Gratitude',
        readingTime: '3 mins',
        moralTakeaway: 'True happiness comes from gratitude and contentment, never from greed.',
        art: '/assets/buddhism_art.jpg',
        text: `Near a quiet river in ancient India lived a graceful swan with radiant golden feathers. Seeing a humble family in a small cottage struggling for food, the kind swan shed one golden feather each month to provide for them.

The family was overjoyed and prospered. But over time, impatience and greed crept into their hearts. "Why wait every month? Let us take all the feathers at once!" thought the mother.

When they captured the swan to seize the feathers, the golden feathers instantly turned into ordinary white feathers. The swan flew gently into the sky, saying: "Greed destroys blessings. Gratitude and patience create endless peace."`
      },
      {
        id: 'bs2',
        title: 'The Elephant and the Brave Little Quail',
        subtitle: 'Standing Together for the Weak',
        readingTime: '4 mins',
        moralTakeaway: 'Even the smallest creature can protect justice through clever teamwork and patience.',
        art: '/assets/buddhism_banner_1792433397152.jpg',
        text: `In a lush green forest, a mother quail built her nest on the ground and lovingly guarded her eggs. A proud, careless wild elephant came storming through the clearing, breaking branches and trampling nests.

The little quail bowed and pleaded softly: "Mighty elephant, please step aside so my nest is spared." The haughty elephant laughed and stomped right past, breaking two eggs.

With the help of a wise crow, a buzzing fly, and a kind frog, the forest creatures showed the elephant that humility and respect for smaller creatures is the true duty of the strong.`
      },
      {
        id: 'bs3',
        title: 'The Angry Farmer and the Silent Buddha',
        subtitle: 'The Mirror of Harsh Words',
        readingTime: '3 mins',
        moralTakeaway: 'When you refuse to accept anger, it remains with the person who threw it.',
        art: '/assets/spiritual_academy_hero_1792433376185.jpg',
        text: `One morning, an envious farmer walked up to the Buddha and shouted insults, accusing him of wasting time meditating instead of farming fields.

The Buddha listened quietly with a serene smile on his face. When the farmer ran out of breath, the Buddha asked gently: "My friend, if someone offers you a gift wrapped in paper, but you decline to accept it, to whom does the gift belong?"

The farmer answered: "It still belongs to the person who brought it, of course."

The Buddha smiled: "Just so. I do not accept your harsh words. They remain with you. Let peace dwell in your heart instead."`
      }
    ],
    teachings: [
      {
        principle: 'Karuna (Compassion)',
        originalTerm: 'करुणा • Karuṇā',
        subtitle: 'Active kindness and wishing relief for all suffering',
        icon: '🪷',
        summary: 'Feeling another being\'s pain and extending your hands to comfort and help them.',
        deepDive: {
          philosophicalOrigin: 'In Buddhist philosophy, Karuna is one of the Four Immeasurables (Brahmaviharas). It is the spontaneous trembling of the heart at the sight of another\'s pain, followed by the wish to uplift them.',
          kidsScenario: 'When a new student in your classroom drops their colored pencils and looks embarrassed as others giggle, walking over quietly, helping pick them up, and offering a friendly smile is Karuna in action.',
          dailyMission: 'Notice anyone around you who looks lonely, tired, or worried today. Offer one genuine compliment or small act of help.',
          dinnerQuestion: 'Who was someone who showed you gentle compassion when you were having a hard day?'
        }
      },
      {
        principle: 'Samma Vaca (Right Speech)',
        originalTerm: 'सम्मा वाचा • Sammā Vācā',
        subtitle: 'Words that heal, tell the truth, and unite friends',
        icon: '💬',
        summary: 'Speaking truth with a soft voice, avoiding gossip, and saying cheerful words.',
        deepDive: {
          philosophicalOrigin: 'The third factor of the Noble Eightfold Path. The Buddha taught that speech must pass three gates: Is it true? Is it kind? Is it helpful?',
          kidsScenario: 'Instead of repeating an unkind rumor about why someone missed soccer practice, asking them directly if they are feeling better is practicing Right Speech.',
          dailyMission: 'Speak only encouraging words all day. If tempted to complain or tease, pause and take three mindful breaths.',
          dinnerQuestion: 'What are words that made you feel safe, loved, and confident recently?'
        }
      },
      {
        principle: 'Sati (Mindfulness)',
        originalTerm: 'सति • Sati',
        subtitle: 'Being completely present in the golden here and now',
        icon: '🧘',
        summary: 'Paying calm attention to what you are feeling, hearing, and doing without rush.',
        deepDive: {
          philosophicalOrigin: 'Mindfulness means continuous lucid awareness. When the mind is steady, emotions settle like clear water in a quiet pond.',
          kidsScenario: 'Eating lunch while tasting the flavors of each bite and appreciating the farmers who grew the vegetables, rather than staring blankly at a tablet screen.',
          dailyMission: 'Take 2 minutes to sit with closed eyes. Listen to 5 distinct sounds around you without judging any of them.',
          dinnerQuestion: 'What was your favorite quiet moment of stillness today?'
        }
      },
      {
        principle: 'Ahimsa (Harmlessness)',
        originalTerm: 'अहिंसा • Ahimsā',
        subtitle: 'Living gently without harming birds, beasts, or people',
        icon: '🕊️',
        summary: 'Walking lightly on earth so that even tiny insects and plants feel safe near you.',
        deepDive: {
          philosophicalOrigin: 'Universal reverence for life. All sentient beings cherish life and fear injury just as human beings do.',
          kidsScenario: 'Carefully carrying a spider or ladybug found indoors outside onto a leafy green plant instead of stepping on it.',
          dailyMission: 'Water a house plant or leave a small bowl of clean water on the balcony for thirsty birds.',
          dinnerQuestion: 'How can our family tread more gently on nature this week?'
        }
      }
    ],
    calm: {
      title: 'Tibetan Singing Bowl & Mindful Breath',
      chimeSound: 'singingBowl',
      affirmation: 'I breathe in peace, I breathe out kindness to the whole world.'
    },
    finalExam: [
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
        question: 'What does "Mindfulness" (Sati) mean in simple terms?',
        options: [
          'Thinking about five things at the same time',
          'Being fully present and aware of what you are doing right now',
          'Sleeping all day long'
        ],
        correct: 1,
        explanation: 'Mindfulness means paying calm attention to the present moment.'
      },
      {
        question: 'Under which sacred tree did Buddha attain enlightenment?',
        options: ['Mango Tree', 'Bodhi Tree (Peepal)', 'Banyan Tree'],
        correct: 1,
        explanation: 'The sacred Bodhi tree at Bodh Gaya represents spiritual awakening.'
      },
      {
        question: 'In the story of the Golden Swan, what destroyed the family\'s blessing?',
        options: ['Patience', 'Greed and impatience', 'Friendship'],
        correct: 1,
        explanation: 'Greed destroyed the trust and turned golden feathers into ordinary ones.'
      },
      {
        question: 'What are the three gates of Right Speech taught by the Buddha?',
        options: [
          'Is it loud? Is it fast? Is it funny?',
          'Is it true? Is it kind? Is it helpful?',
          'Is it long? Is it silent? Is it secret?'
        ],
        correct: 1,
        explanation: 'Truth, kindness, and helpfulness are the three tests of Right Speech.'
      }
    ]
  },
  {
    id: 'hinduism',
    name: 'Hinduism (Sanatana Dharma)',
    subname: 'The Eternal Way of Righteous Duty & Universal Harmony',
    symbol: '🕉️',
    color: '#d97706',
    glowColor: 'rgba(217, 119, 6, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(120, 53, 15, 0.9) 0%, rgba(217, 119, 6, 0.9) 100%)',
    artImage: '/assets/hinduism_art.jpg',
    summary: 'One of the world\'s oldest spiritual traditions emphasizing Dharma (righteous living), Karma (law of deeds), and Seva (selfless service).',
    virtues: ['Dharma (Duty & Righteousness)', 'Karma (Law of Cause & Effect)', 'Ahimsa (Non-violence)', 'Seva (Selfless Service)'],
    ambientChant: {
      name: 'Shree Hanuman Chalisa (Sacred Stuti)',
      audioSrc: '/assets/audio/hinduism_chant.mp3',
      description: 'Complete sacred recitation of Shree Hanuman Chalisa celebrating devotion, courage, and selfless service (~12 mins).'
    },
    lectures: [
      {
        id: 'h1',
        title: 'The Squirrel’s Little Pebble: Valuing Every Effort',
        duration: '4:15 mins',
        description: 'How a tiny squirrel rolling in sand to help build the great bridge won Lord Rama’s heart.',
        videoScene: 'squirrel_bridge',
        takeaway: 'Never underestimate small acts of help; sincerity matters far more than size.'
      },
      {
        id: 'h2',
        title: 'Why We Greet with "Namaste" & Light Sacred Diyas',
        duration: '3:50 mins',
        description: 'The divine spark in every living creature and why light symbolizes victory of wisdom over darkness.',
        videoScene: 'namaste_lamp',
        takeaway: 'Namaste bows to the sacred light within everyone you meet.'
      },
      {
        id: 'h3',
        title: 'Karma: The Law of Echoes and Seeds',
        duration: '4:45 mins',
        description: 'Whatever seeds of words and actions you plant will bloom back into your own garden.',
        videoScene: 'karma_seeds',
        takeaway: 'Plant seeds of kindness, and gardens of joy will bloom around your life.'
      },
      {
        id: 'h4',
        title: 'Vasudhaiva Kutumbakam: The Whole World is One Family',
        duration: '4:10 mins',
        description: 'How ancient sages taught universal brotherhood that transcends borders, languages, and species.',
        videoScene: 'world_family',
        takeaway: 'Every living creature on earth is a beloved sibling in the cosmic family.'
      }
    ],
    stories: [
      {
        id: 'hs1',
        title: 'The Devotion of the Little Squirrel',
        subtitle: 'The Three Gentle Stripes of Lord Rama',
        readingTime: '3 mins',
        moralTakeaway: 'Every sincere effort counts, no matter how small you feel.',
        art: '/assets/hinduism_art.jpg',
        text: `When Lord Rama and the Vanara army were building the grand bridge across the ocean to Lanka, mighty warriors were carrying huge boulders and mountains. Among them was a tiny little squirrel.

The squirrel would dip into the sea, run to the shore, roll in the sand, and shake the sand particles between the stones. The giant warriors laughed: "What can your tiny sand do, little one?"

Lord Rama gently picked up the squirrel in his palms and caressed its back, creating the three loving stripes. He said: "No task done with love and purity is small. Every sincere effort upholds the bridge of Dharma."`
      },
      {
        id: 'hs2',
        title: 'Shravan Kumar and Devotion to Parents',
        subtitle: 'The Sacred Duty of Filial Love',
        readingTime: '4 mins',
        moralTakeaway: 'Caring for aging parents with loving dedication is the highest pilgrimage.',
        art: '/assets/hinduism_banner_1792433417142.jpg',
        text: `In ancient times, a young boy named Shravan Kumar dedicated his life to caring for his elderly, blind parents. When they expressed a wish to visit sacred shrines across the land, Shravan did not let poverty stop him.

He built a sturdy wooden balance carrier (Kawad), seated his mother in one basket and his father in the other, lifted the beam across his shoulders, and walked thousands of miles barefoot across forests and mountains.

His devoted service became an immortal symbol of pure filial love and selfless filial responsibility.`
      },
      {
        id: 'hs3',
        title: 'Nachiketa and the Search for Truth',
        subtitle: 'Wisdom that Outshines Gold',
        readingTime: '4 mins',
        moralTakeaway: 'Seek character, wisdom, and truth above temporary toys and shiny wealth.',
        art: '/assets/spiritual_academy_hero_1792433376185.jpg',
        text: `Young Nachiketa noticed his father giving away old, weak cows in charity just for public praise. The boy asked honestly: "Father, charity must come from pure devotion, giving what you love most. To whom will you give me?"

Nachiketa journeyed to the gates of Yama, the Lord of Justice, waiting three days without food or water. Impressed by his discipline, Yama offered him palaces, gold, chariots, and kingdoms.

Nachiketa smiled: "Wealth passes away like water through fingers. Teach me instead how the soul finds eternal goodness and courage."`
      }
    ],
    teachings: [
      {
        principle: 'Dharma (Righteous Duty)',
        originalTerm: 'धर्म • Dharma',
        subtitle: 'Living with integrity, duty, and harmony',
        icon: '⚖️',
        summary: 'Doing what is right, protecting the vulnerable, and fulfilling your duties responsibly.',
        deepDive: {
          philosophicalOrigin: 'From the root "Dhr" (to uphold or sustain). Dharma is the moral cosmic foundation that holds families, nature, and societies together in peace.',
          kidsScenario: 'Doing your school homework diligently without being nagged, and defending a smaller classmate when someone tries to bully them.',
          dailyMission: 'Complete your most challenging responsibility today first, with a happy heart and zero complaints.',
          dinnerQuestion: 'What does doing the "right thing" look like when nobody is watching you?'
        }
      },
      {
        principle: 'Vasudhaiva Kutumbakam',
        originalTerm: 'वसुधैव कुटुम्बकम् • Vasudhaiva Kuṭumbakam',
        subtitle: 'The entire planet is one single family',
        icon: '🌍',
        summary: 'Treating all humans, animals, and plants as brothers and sisters in one household.',
        deepDive: {
          philosophicalOrigin: 'From Maha Upanishad (VI.71-73). Sages declared that drawing borders between "mine" and "theirs" is the thinking of narrow minds; for the noble-hearted, the entire earth is one loving family.',
          kidsScenario: 'Inviting a new classmate from a different country or cultural background to sit at your lunch table and share stories about their games.',
          dailyMission: 'Learn how to say "Hello" and "Thank you" in three different world languages today.',
          dinnerQuestion: 'How can our family practice global hospitality in our neighborhood?'
        }
      },
      {
        principle: 'Seva (Selfless Service)',
        originalTerm: 'सेवा • Sevā',
        subtitle: 'Helping others without expecting prizes or praise',
        icon: '🙏',
        summary: 'Serving society and elders with devotion, zero ego, and pure goodwill.',
        deepDive: {
          philosophicalOrigin: 'Seva is action transformed into spiritual offering. By serving others without ego, our hearts expand and true contentment blossoms.',
          kidsScenario: 'Setting the dinner plates for your parents after a long workday without being asked to do so.',
          dailyMission: 'Do two quiet helpful deeds for someone in your home or school without letting them know you did it.',
          dinnerQuestion: 'What was the most joyful act of service you performed this week?'
        }
      },
      {
        principle: 'Satya (Truthfulness)',
        originalTerm: 'सत्य • Satya',
        subtitle: 'Speaking truth with gentle kindness',
        icon: '✨',
        summary: 'Being honest, transparent, and courageous enough to admit mistakes.',
        deepDive: {
          philosophicalOrigin: 'From the Taittiriya Upanishad: "Satyam Vada, Dharmam Chara" (Speak truth, walk in righteousness). Truth spoken with kindness creates unshakeable trust.',
          kidsScenario: 'Admitting honestly to your teacher that your little sibling accidentally tore your notebook, rather than blaming someone else.',
          dailyMission: 'Tell the exact truth with gentleness in all conversations today.',
          dinnerQuestion: 'Why does speaking the truth require courage, and how does it make your heart feel lighter?'
        }
      }
    ],
    calm: {
      title: 'Sacred Om & Golden Sunset Chime',
      chimeSound: 'templeBell',
      affirmation: 'The same divine spark of love shines inside me and inside everyone around me.'
    },
    finalExam: [
      {
        question: 'What is the sacred meaning behind greeting someone with "Namaste"?',
        options: [
          'Saying goodbye forever',
          'I bow to the divine spark of goodness within you',
          'Asking for treats'
        ],
        correct: 1,
        explanation: 'Namaste recognizes that the soul in every person is sacred and equal.'
      },
      {
        question: 'What does "Vasudhaiva Kutumbakam" teach us?',
        options: [
          'Only our family matters',
          'The entire world is one interconnected family',
          'We should live alone in forests'
        ],
        correct: 1,
        explanation: 'It reminds us that all human beings, animals, and nature are one global family.'
      },
      {
        question: 'What did Lord Rama give the little squirrel as a loving blessing?',
        options: ['A golden crown', 'Three gentle stripes on its back', 'A basket of mangoes'],
        correct: 1,
        explanation: 'Lord Rama caressed the squirrel with loving fingers, creating three gentle stripes.'
      },
      {
        question: 'What does the law of Karma teach young children?',
        options: [
          'Actions have no consequences',
          'Good deeds return as blessings, unkind deeds return as lessons to learn',
          'Luck controls everything'
        ],
        correct: 1,
        explanation: 'Karma is the law of cause and effect: what we plant in words and deeds blooms back.'
      },
      {
        question: 'What does lighting a Diya (oil lamp) represent during festivals?',
        options: [
          'Victory of light, knowledge, and wisdom over ignorance',
          'Decoration for parties only',
          'A cooking flame'
        ],
        correct: 0,
        explanation: 'The sacred lamp symbolizes the illumination of knowledge inside our minds.'
      }
    ]
  },
  {
    id: 'sikhism',
    name: 'Sikhism',
    subname: 'The Path of Divine Equality, Honest Work & Sharing',
    symbol: '☬',
    color: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(7, 89, 133, 0.9) 0%, rgba(2, 132, 199, 0.9) 100%)',
    artImage: '/assets/sikhism_art.jpg',
    summary: 'Founded by Guru Nanak Dev Ji, teaching absolute equality of all human beings, honest living (Kirat Karo), and sharing blessings (Vand Chhako).',
    virtues: ['Universal Equality', 'Vand Chhako (Sharing)', 'Kirat Karo (Honest Living)', 'Naam Japna (Remembrance)'],
    ambientChant: {
      name: 'Peaceful Waheguru Simran & Gurbani',
      audioSrc: '/assets/audio/sikhism_chant.mp3',
      description: 'Long continuous peaceful Waheguru meditation and divine Gurbani Kirtan (~12 mins).'
    },
    lectures: [
      {
        id: 's1',
        title: 'Guru Nanak & The Sacha Sauda (The True Bargain)',
        duration: '4:40 mins',
        description: 'Why feeding the hungry holy travelers was the most profitable trade young Nanak ever made.',
        videoScene: 'sacha_sauda',
        takeaway: 'Feeding the hungry and caring for those in need is life\'s most precious investment.'
      },
      {
        id: 's2',
        title: 'The Miracle of Langar: Kings & Commoners on One Mat',
        duration: '3:55 mins',
        description: 'How community kitchens broke social barriers by having everyone sit side by side as equals.',
        videoScene: 'langar_kitchen',
        takeaway: 'No one is higher or lower; at the table of humanity, everyone is equal.'
      },
      {
        id: 's3',
        title: 'Bhai Kanhaiya: Serving Water on the Battlefield',
        duration: '5:05 mins',
        description: 'Seeing God’s divine light in both friend and foe without discrimination.',
        videoScene: 'water_bag',
        takeaway: 'True compassion does not check uniforms, flags, or borders.'
      },
      {
        id: 's4',
        title: 'Kirat Karo: The Power of Honest Sweat and Toil',
        duration: '4:15 mins',
        description: 'Guru Nanak compares the humble bread of Bhai Lalo with the rich feast of Malik Bhago.',
        videoScene: 'bhai_lalo',
        takeaway: 'Honest bread earned through hard work tastes sweeter than stolen riches.'
      }
    ],
    stories: [
      {
        id: 'ss1',
        title: 'Bhai Kanhaiya’s Universal Water Bag',
        subtitle: 'Seeing the Divine Light in Everyone',
        readingTime: '3 mins',
        moralTakeaway: 'Selfless service sees no borders or labels; love serves humanity everywhere.',
        art: '/assets/sikhism_art.jpg',
        text: `During a fierce battle in Punjab, a devoted Sikh named Bhai Kanhaiya walked between wounded soldiers with a goatskin bag of fresh water. Whenever someone groaned in pain, he poured cool water into their parched mouth.

Some soldiers noticed he was giving water not just to his fellow warriors, but also to wounded enemies! They took him to Guru Gobind Singh Ji to complain.

Guru Ji smiled and asked: "Bhai Kanhaiya, is it true you served water to those fighting against us?"

Bhai Kanhaiya bowed humbly and replied: "My Guru, when I looked into their thirsty eyes, I saw neither friend nor foe. In every face, I only saw the light of the Creator." Guru Ji hugged him and gave him healing salve to bandage their wounds as well.`
      },
      {
        id: 'ss2',
        title: 'Bhai Lalo\'s Pure Milk of Honesty',
        subtitle: 'Honest Hard Work vs Proud Luxury',
        readingTime: '4 mins',
        moralTakeaway: 'Work earned with honest effort is filled with divine sweetness.',
        art: '/assets/spiritual_academy_hero_1792433376185.jpg',
        text: `Guru Nanak visited a town where a humble carpenter named Bhai Lalo worked honestly carving wooden plows. At the same time, a wealthy corrupt landlord named Malik Bhago threw a lavish feast for nobility.

Guru Nanak chose to eat simple coarse millet bread with Bhai Lalo instead of the grand banquet. Malik Bhago was offended: "Why do you refuse my grand dishes?"

Guru Nanak took a piece of Bhai Lalo\'s bread in his right hand and Bhago\'s rich fried bread in his left, and squeezed both. From Bhai Lalo\'s bread flowed drops of pure sweet milk, while from Bhago\'s bread came drops of blood. "Bhai Lalo\'s bread comes from honest sweat; yours comes from oppressing the poor."`
      },
      {
        id: 'ss3',
        title: 'The Jasmine Flower in the Bowl of Milk',
        subtitle: 'Adding Fragrance Without Displacing Anyone',
        readingTime: '3 mins',
        moralTakeaway: 'Wise leaders bring peace, sweet harmony, and humility without pushing others away.',
        art: '/assets/sikhism_art.jpg',
        text: `When Guru Nanak arrived at the ancient city of Multan, the local scholars were worried that a new teacher would take away their followers. They sent Guru Nanak a bowl filled to the very brim with milk, implying: "Our city is full of wise men; there is no room for you."

Guru Nanak smiled gently, plucked a fragrant white jasmine flower from a nearby bush, and floated it carefully on top of the milk. Not a single drop spilled over!

The scholars understood the lesson immediately: Guru Nanak did not come to push anyone out, but to add fragrance and sweetness to the whole city.`
      }
    ],
    teachings: [
      {
        principle: 'Vand Chhako (Share with Others)',
        originalTerm: 'ਵੰਡ ਛਕੋ • Vand Chhako',
        subtitle: 'Sharing your blessings before taking your own share',
        icon: '🍲',
        summary: 'Feeding the hungry, giving to the needy, and sharing your time and snacks with friends.',
        deepDive: {
          philosophicalOrigin: 'One of the Three Golden Pillars of Sikhism formulated by Guru Nanak Dev Ji. It teaches that wealth and talents are gifts from God meant to be distributed generously to all humanity.',
          kidsScenario: 'When opening your lunchbox at school and seeing that your classmate forgot their sandwich, sharing half of yours cheerfully before taking a bite.',
          dailyMission: 'Share a favorite book, toy, or snack with someone who would appreciate it today.',
          dinnerQuestion: 'What is something our family can share with someone in our community this weekend?'
        }
      },
      {
        principle: 'Kirat Karo (Honest Labor)',
        originalTerm: 'ਕਿਰਤ ਕਰੋ • Kirat Karo',
        subtitle: 'Earning through honest effort, sweat, and truthfulness',
        icon: '🛠️',
        summary: 'Studying diligently, working honestly, and never cheating or taking shortcuts.',
        deepDive: {
          philosophicalOrigin: 'The second pillar of Sikhism. It demands that an ethical person must earn their livelihood through honest hard work, without exploiting others or cheating.',
          kidsScenario: 'Studying hard for your spelling test and writing your own answers, feeling proud of your genuine score instead of peeking at your neighbor\'s paper.',
          dailyMission: 'Complete your chores and study tasks today with 100% honesty and personal pride.',
          dinnerQuestion: 'Why does earning something with honest hard work feel so much more rewarding than getting it easily?'
        }
      },
      {
        principle: 'Barabari (Absolute Equality)',
        originalTerm: 'ਬਰਾਬਰੀ • Barābarī',
        subtitle: 'All humans—regardless of gender, race, or caste—are equal',
        icon: '⚖️',
        summary: 'Treating boys and girls, rich and poor, with identical dignity and respect.',
        deepDive: {
          philosophicalOrigin: 'Guru Nanak declared over 500 years ago: "Recognize the whole human race as of one single caste." Sikhism abolished caste distinctions and championed equal leadership for women.',
          kidsScenario: 'Including both boys and girls equally in playground games, listening with equal respect to every friend\'s ideas.',
          dailyMission: 'Treat someone who cleans or helps around your school or house with warm thanks and genuine respect.',
          dinnerQuestion: 'How can we make sure everyone around us feels valued and treated fairly?'
        }
      },
      {
        principle: 'Chardi Kala (Rising High Spirits)',
        originalTerm: 'ਚੜ੍ਹਦੀ ਕਲਾ • Chaṛhdī Kalā',
        subtitle: 'Everlasting optimism, courage, and faith in goodness',
        icon: '🌅',
        summary: 'Maintaining an upbeat, joyful, and brave attitude even when facing challenges.',
        deepDive: {
          philosophicalOrigin: 'Chardi Kala is the mental state of buoyant, joyful resilience, trusting in divine will and facing every obstacle with a courageous smile.',
          kidsScenario: 'When rain cancels your planned soccer tournament, instead of sulking, gathering friends for a fun creative indoor board game session.',
          dailyMission: 'Whenever something doesn\'t go your way today, take a deep breath and find one positive silver lining.',
          dinnerQuestion: 'What helps you bounce back with a smile when you feel disappointed?'
        }
      }
    ],
    calm: {
      title: 'Peaceful Dilruba Chime & Gratitude Breath',
      chimeSound: 'harp',
      affirmation: 'I see the light of the Creator shining equally in every face I meet today.'
    },
    finalExam: [
      {
        question: 'Who was the founder of Sikhism?',
        options: ['Guru Nanak Dev Ji', 'King Solomon', 'Emperor Ashoka'],
        correct: 0,
        explanation: 'Guru Nanak Dev Ji founded Sikhism in the Punjab region of India.'
      },
      {
        question: 'What is Langar in Sikh tradition?',
        options: [
          'A free community kitchen where all sit together equally on the floor',
          'A private party for rich people',
          'A book shop'
        ],
        correct: 0,
        explanation: 'Langar symbolizes absolute human equality; emperor and peasant sit side by side.'
      },
      {
        question: 'What does "Kirat Karo" instruct young students to do?',
        options: [
          'Earn honestly through hard work and diligence',
          'Avoid studying',
          'Borrow money without returning'
        ],
        correct: 0,
        explanation: 'Kirat Karo means working honestly and applying your sincere efforts.'
      },
      {
        question: 'Why did Guru Gobind Singh Ji praise Bhai Kanhaiya?',
        options: [
          'Because he ran away from difficulty',
          'Because he saw the divine light in everyone and served water without discrimination',
          'Because he was a wealthy trader'
        ],
        correct: 1,
        explanation: 'Bhai Kanhaiya saw the Creator in all faces and offered water to everyone.'
      },
      {
        question: 'What does "Vand Chhako" teach children?',
        options: [
          'Keep everything for yourself',
          'Share your food, talents, and blessings with those in need',
          'Waste supplies'
        ],
        correct: 1,
        explanation: 'Vand Chhako teaches that sharing with others multiplies true happiness.'
      }
    ]
  },
  {
    id: 'christianity',
    name: 'Christianity',
    subname: 'The Gospel of Love, Mercy & Forgiveness',
    symbol: '✝️',
    color: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(76, 29, 149, 0.9) 0%, rgba(124, 58, 237, 0.9) 100%)',
    artImage: '/assets/christianity_art.jpg',
    summary: 'Teachings of Jesus Christ focusing on unconditional love (Agape), forgiving others from the heart, and living by the Golden Rule.',
    virtues: ['Unconditional Love (Agape)', 'Forgiveness of Heart', 'The Golden Rule', 'Peacemaking'],
    ambientChant: {
      name: 'Gregorian Vespers & Cathedral Choir',
      audioSrc: '/assets/audio/christianity_chant.mp3',
      description: 'Authentic Benedictine monastery Latin Gregorian chants and cathedral choir hymns (~25 mins).'
    },
    lectures: [
      {
        id: 'c1',
        title: 'The Parable of the Good Samaritan',
        duration: '4:30 mins',
        description: 'Who is our true neighbor? How compassion transcends borders, nationalities, and differences.',
        videoScene: 'good_samaritan',
        takeaway: 'Your neighbor is anyone in the world who is in need of kindness.'
      },
      {
        id: 'c2',
        title: 'The Golden Rule: Treating Others with Honor',
        duration: '3:40 mins',
        description: '"Do to others whatever you would like them to do to you" - the foundational rule of friendship.',
        videoScene: 'golden_rule',
        takeaway: 'Treat others exactly how you hope they would treat you.'
      },
      {
        id: 'c3',
        title: 'Forgiving Seventy Times Seven',
        duration: '4:50 mins',
        description: 'Letting go of anger and grudges so your own heart stays light, peaceful, and joyful.',
        videoScene: 'forgiveness',
        takeaway: 'Forgiveness is the key that unlocks freedom and joy in your own heart.'
      },
      {
        id: 'c4',
        title: 'The Parable of the Lost Sheep',
        duration: '3:50 mins',
        description: 'How a shepherd leaves ninety-nine safe sheep to search for one lost lamb.',
        videoScene: 'lost_sheep',
        takeaway: 'Every single soul is precious; no one is ever forgotten or left behind.'
      }
    ],
    stories: [
      {
        id: 'cs1',
        title: 'The Traveler on the Jericho Road',
        subtitle: 'The Good Samaritan\'s Compassion',
        readingTime: '3 mins',
        moralTakeaway: 'Love is not what we say; it is the kindness we show to anyone in need.',
        art: '/assets/christianity_art.jpg',
        text: `A traveler was journeying down the rocky road from Jerusalem to Jericho when robbers attacked him, stole his belongings, and left him wounded by the wayside.

A high priest passed by, but crossed to the other side of the road. Next, a temple helper came by, looked at the injured man, and walked away quickly.

Then came a Samaritan—a man from a community that ordinary travelers looked down upon. When he saw the wounded man, his heart filled with deep pity. He bandaged the wounds with oil and wine, lifted the man onto his own donkey, took him to an inn, and paid the innkeeper to care for him until he healed. Jesus asked: "Who was the true neighbor?"`
      },
      {
        id: 'cs2',
        title: 'The Prodigal Son\'s Open Arms',
        subtitle: 'The Infinite Ocean of Forgiveness',
        readingTime: '4 mins',
        moralTakeaway: 'No mistake is too great to be healed by genuine remorse and unconditional love.',
        art: '/assets/spiritual_academy_hero_1792433376185.jpg',
        text: `A young son asked his father for his inheritance early, traveled to a distant city, and spent it all foolishly. When famine struck the land, he was left hungry and penniless, feeding pigs just to survive.

Ashamed, he thought: "Even my father\'s workers have bread to spare. I will return and ask to be treated as a humble servant."

While he was still far off, his father saw him walking home, ran out with open arms, hugged him with joyful tears, and threw a celebration. "My son was lost, but now is found."`
      },
      {
        id: 'cs3',
        title: 'Saint Francis and the Wolf of Gubbio',
        subtitle: 'Healing Fear with Gentle Peace',
        readingTime: '3 mins',
        moralTakeaway: 'Gentleness, understanding, and kindness disarm anger and hostility.',
        art: '/assets/christianity_art.jpg',
        text: `The villagers of Gubbio lived in terror of a ferocious wild wolf that attacked sheep and threatened the town gates. Armed men refused to go outside the walls.

Saint Francis of Assisi walked out into the woods unarmed. When the wolf rushed towards him with bared fangs, Francis made the sign of peace and said gently: "Brother Wolf, you hurt others because you are starving with winter hunger. Come with me."

Francis made a pact between the wolf and the villagers: the people fed the wolf every day, and the wolf lived peacefully as a beloved friend in the town square.`
      }
    ],
    teachings: [
      {
        principle: 'The Golden Rule',
        originalTerm: 'The Law of Love',
        subtitle: 'Do to others what you want them to do to you',
        icon: '🌟',
        summary: 'Treating every person with the exact warmth, respect, and kindness you wish to receive.',
        deepDive: {
          philosophicalOrigin: 'From the Sermon on the Mount (Matthew 7:12). Jesus declared this principle to be the cornerstone of all ethical duty and human relationships.',
          kidsScenario: 'Cheering warmly for your friend when they win the school art prize, because you would want them to celebrate your success.',
          dailyMission: 'Think of how you would want someone to welcome you if you were new, and do that for someone else today.',
          dinnerQuestion: 'When was a time someone treated you with unexpected kindness?'
        }
      },
      {
        principle: 'Forgiveness (Agape)',
        originalTerm: 'Forgiveness of Heart',
        subtitle: 'Letting go of anger and healing broken friendships',
        icon: '🕊️',
        summary: 'Saying "I forgive you" from your heart and refusing to carry grudges.',
        deepDive: {
          philosophicalOrigin: 'Jesus taught the Lord\'s Prayer: "Forgive us our trespasses, as we forgive those who trespass against us." Forgiveness dissolves bitterness and brings freedom.',
          kidsScenario: 'When a friend accidentally spills paint on your favorite drawing, taking a breath and saying: "It is okay, accidents happen; let\'s paint another one together."',
          dailyMission: 'If you are holding a grudge against someone for a past argument, let it go today and wish them peace.',
          dinnerQuestion: 'Why is forgiving someone a gift you give to your own heart?'
        }
      },
      {
        principle: 'Peacemaking',
        originalTerm: 'Blessed are the Peacemakers',
        subtitle: 'Building bridges where others build walls',
        icon: '🤝',
        summary: 'Helping arguing friends understand each other and resolve disagreements with love.',
        deepDive: {
          philosophicalOrigin: 'Beatitudes (Matthew 5:9): "Blessed are the peacemakers, for they shall be called children of God." Peacemaking is active, courageous mediation.',
          kidsScenario: 'Stepping in when two classmates are fighting over who gets the swing, suggesting a fair 5-minute timer so both enjoy it.',
          dailyMission: 'Be a calming presence in any room you enter today. Replace arguments with cheerful compromises.',
          dinnerQuestion: 'What is one conflict you helped solve peacefully recently?'
        }
      },
      {
        principle: 'Humility (Serving Others)',
        originalTerm: 'Washing the Feet',
        subtitle: 'Serving others quietly without bragging or boasting',
        icon: '🌱',
        summary: 'Doing quiet good deeds without asking for applause or medals.',
        deepDive: {
          philosophicalOrigin: 'At the Last Supper, Jesus washed the feet of his disciples, demonstrating that the greatest leader is the one who serves others with utmost humility.',
          kidsScenario: 'Cleaning up the board and tidying classroom chairs after school without waiting for a gold star from the teacher.',
          dailyMission: 'Perform one generous deed today that only you and your conscience know about.',
          dinnerQuestion: 'Why are the most meaningful acts of kindness often the quietest ones?'
        }
      }
    ],
    calm: {
      title: 'Peaceful Cathedral Chime & Morning Light',
      chimeSound: 'harp',
      affirmation: 'I choose love over anger, kindness over judgment, and forgiveness over grudges.'
    },
    finalExam: [
      {
        question: 'What is known as "The Golden Rule" taught by Jesus?',
        options: [
          'Collect as much gold as you can',
          'Do to others whatever you would like them to do to you',
          'Never speak to strangers'
        ],
        correct: 1,
        explanation: 'The Golden Rule teaches universal mutual empathy and fairness.'
      },
      {
        question: 'In the Good Samaritan parable, who stopped to care for the wounded traveler?',
        options: ['The Samaritan traveler', 'The priest', 'Nobody'],
        correct: 0,
        explanation: 'The Samaritan showed genuine mercy regardless of social divisions.'
      },
      {
        question: 'What did Jesus teach about forgiving those who hurt our feelings?',
        options: [
          'Hold a grudge forever',
          'Forgive repeatedly from the depth of your heart',
          'Seek revenge'
        ],
        correct: 1,
        explanation: 'Jesus taught forgiving "seventy times seven"—meaning without limits.'
      },
      {
        question: 'Who is your "neighbor" according to the teachings of Jesus?',
        options: [
          'Only the person living in the house next door',
          'Anyone across the world who is in need of kindness and help',
          'Only people who agree with you'
        ],
        correct: 1,
        explanation: 'Compassion recognizes any person in need as our neighbor.'
      },
      {
        question: 'Which virtue is demonstrated by washing the feet of others and serving without boasting?',
        options: ['Humility', 'Greed', 'Pride'],
        correct: 0,
        explanation: 'Humility means putting service and love above personal ego.'
      }
    ]
  },
  {
    id: 'islam',
    name: 'Islam',
    subname: 'The Path of Peace, Mercy, Charity & Trustworthiness',
    symbol: '☪️',
    color: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(6, 78, 59, 0.9) 0%, rgba(5, 150, 105, 0.9) 100%)',
    artImage: '/assets/islam_art.jpg',
    summary: 'Teachings emphasizing peace (Salaam), compassion to creation (Rahmah), everyday charity (Sadqah), and absolute honesty (Amanah).',
    virtues: ['Peace (Salaam)', 'Charity (Sadqah & Zakat)', 'Trustworthiness (Amanah)', 'Kindness to Nature'],
    ambientChant: {
      name: 'Surah Ar-Rahman (The Most Merciful)',
      audioSrc: '/assets/audio/islam_chant.mp3',
      description: 'Long soul-soothing melodic recitation of Surah Ar-Rahman praising divine mercy and creation (~12 mins).'
    },
    lectures: [
      {
        id: 'i1',
        title: 'The Thirsty Dog & The Traveler’s Shoe',
        duration: '4:10 mins',
        description: 'How an act of drawing water from a deep well for a panting stray dog brought immense spiritual blessing.',
        videoScene: 'thirsty_dog',
        takeaway: 'Showing mercy to a helpless animal unlocks boundless divine mercy.'
      },
      {
        id: 'i2',
        title: 'Amanah: The Value of Absolute Honesty',
        duration: '3:50 mins',
        description: 'Why keeping promises and being trustworthy (Al-Amin) makes a person beloved by all.',
        videoScene: 'al_amin',
        takeaway: 'A trustworthy person is a protective shield of honor in any community.'
      },
      {
        id: 'i3',
        title: 'Sadqah: Even a Warm Smile is Charity',
        duration: '4:25 mins',
        description: 'Charity is not just gold; removing a thorn from a path or offering a cheerful smile is also charity.',
        videoScene: 'smiling_charity',
        takeaway: 'Kindness costs nothing, yet enriches the giver and the receiver alike.'
      },
      {
        id: 'i4',
        title: 'The Prophet & The Weeping Camel',
        duration: '3:45 mins',
        description: 'Why overloading animals and neglecting nature is strongly forbidden in Islamic ethics.',
        videoScene: 'weeping_camel',
        takeaway: 'Humans are guardians of the earth, responsible for every creature in our care.'
      }
    ],
    stories: [
      {
        id: 'is1',
        title: 'The Wells of Compassion',
        subtitle: 'The Traveler and the Thirsty Dog',
        readingTime: '3 mins',
        moralTakeaway: 'Every act of mercy shown to any living creature brings divine grace.',
        art: '/assets/islam_art.jpg',
        text: `Under the blazing desert sun, a traveler walked for miles until his throat burned with thirst. After searching for hours, he finally discovered a deep well. He climbed down into the cool shadows, drank sweet water, and refreshed his spirit.

As he climbed back out, he noticed a dog panting heavily, licking moist desert sand in desperate search of moisture. The traveler thought to himself: "This poor creature is suffering from the exact same thirst that I just felt."

The well had no bucket or rope. Without hesitation, the man climbed back down into the dark well, filled his leather shoe with water, held the shoe firmly with his teeth so he could climb the rocky walls, and offered the cool water to the thirsty dog. The Prophet Muhammad (peace be upon him) taught that God smiled upon that traveler and forgave all his mistakes because of that one kind act.`
      },
      {
        id: 'is2',
        title: 'The Mother Bird and Her Little Chicks',
        subtitle: 'Gentleness to Mother Nature',
        readingTime: '3 mins',
        moralTakeaway: 'Respect the maternal bonds and homes of all animals in the wild.',
        art: '/assets/spiritual_academy_hero_1792433376185.jpg',
        text: `While traveling through a valley, a group of companions spotted a mother bird nesting in a bush with two newly hatched fledglings. One companion gently lifted the baby chicks to look at their soft downy feathers.

The mother bird began fluttering frantically above their heads, crying out in distress.

When the Prophet noticed the commotion, his eyes filled with gentle concern: "Who has caused distress to this mother bird by taking her young? Return them to her nest immediately!" The companion rushed to put the chicks back safely, and the mother bird nestled down in peace.`
      },
      {
        id: 'is3',
        title: 'The Honest Merchant of Medina',
        subtitle: 'Transparency that Builds Trust',
        readingTime: '4 mins',
        moralTakeaway: 'Honesty in trade and daily work is the most honorable crown.',
        art: '/assets/islam_art.jpg',
        text: `In the bustling market of Medina, a merchant was selling sacks of golden wheat. The Prophet walked past, smiled, and dipped his hand deep inside the wheat sack. His fingers touched grain that was damp with rainwater.

"What is this, my friend?" asked the Prophet. The merchant replied nervously: "O Messenger of God, rain fell on it last night."

The Prophet said with gentle firmness: "Why did you not keep the damp wheat on top so buyers could see it clearly? He who misleads people is not of our character." From that day on, merchants across the city competed to be the most truthful sellers in the land.`
      }
    ],
    teachings: [
      {
        principle: 'Sadqah (Everyday Charity)',
        originalTerm: 'صدقة • Ṣadaqah',
        subtitle: 'Charity in small everyday cheerful acts',
        icon: '🤲',
        summary: 'Uplifting others with a smile, clearing litter from paths, and sharing with those in need.',
        deepDive: {
          philosophicalOrigin: 'The Prophet Muhammad taught: "Every good deed is charity. Even smiling at your brother is charity, and removing a stone from the pathway is charity."',
          kidsScenario: 'Picking up an empty plastic bottle blown onto the soccer pitch and placing it into the recycling bin so no one trips on it.',
          dailyMission: 'Offer three warm smiles and hold the door open for someone who has their hands full today.',
          dinnerQuestion: 'What are small acts of charity that don\'t cost any money at all?'
        }
      },
      {
        principle: 'Amanah (Trustworthiness)',
        originalTerm: 'أمانة • Amānah',
        subtitle: 'Keeping promises and safeguarding what is entrusted to you',
        icon: '🛡️',
        summary: 'Returning borrowed items safely and always speaking the truth.',
        deepDive: {
          philosophicalOrigin: 'Before his prophethood, Muhammad was known across Arabia as "Al-Amin" (The Trustworthy). Amanah is the sacred trust humans hold with God, society, and nature.',
          kidsScenario: 'Borrowing your friend\'s video game or sketchpad and returning it on time in immaculate condition with a cheerful thank you note.',
          dailyMission: 'Keep every single promise you make today, no matter how small.',
          dinnerQuestion: 'Why is trust like a paper bird—easy to crumple, but requiring patience to keep flying?'
        }
      },
      {
        principle: 'Salaam (Spreading Peace)',
        originalTerm: 'سلام • Salām',
        subtitle: 'Wishing peace, safety, and blessing on all you meet',
        icon: '🌙',
        summary: 'Greeting friends and strangers with warm wishes for their peace and well-being.',
        deepDive: {
          philosophicalOrigin: 'Islam is etymologically rooted in "Silm" (peace). The universal greeting "As-salamu alaykum" means "May peace and safety be upon you."',
          kidsScenario: 'Greeting your school bus driver and crossing guard with a warm, respectful greeting every morning.',
          dailyMission: 'Make peace with someone with whom you had an argument or disagreement this week.',
          dinnerQuestion: 'What does a genuinely peaceful home and classroom feel like?'
        }
      },
      {
        principle: 'Ihsan (Excellence in Action)',
        originalTerm: 'إحسان • Iḥsān',
        subtitle: 'Doing everything with beauty, devotion, and supreme care',
        icon: '✨',
        summary: 'Putting your whole heart into your studies, art, and manners as if God is watching.',
        deepDive: {
          philosophicalOrigin: 'Ihsan is the highest spiritual station in Islam: worshipping and acting as though you see the Divine, knowing that even if you cannot see Him, He sees you.',
          kidsScenario: 'Cleaning your bedroom and arranging your books neatly, not just stuffing things under the bed.',
          dailyMission: 'Pick one task today (homework, drawing, or tidying) and do it with your absolute best quality.',
          dinnerQuestion: 'How does doing your best work bring calm and self-respect to your mind?'
        }
      }
    ],
    calm: {
      title: 'Gentle Oasis Breeze & Mindful Breathing',
      chimeSound: 'flute',
      affirmation: 'I spread peace with my words, mercy with my hands, and truth with my heart.'
    },
    finalExam: [
      {
        question: 'What did the Prophet Muhammad teach about offering a smile to others?',
        options: [
          'It is a waste of energy',
          'Even a warm smile is an act of charity (Sadqah)',
          'It is impolite'
        ],
        correct: 1,
        explanation: 'In Islamic ethics, uplifting someone with a kind smile is considered charity.'
      },
      {
        question: 'How did the desert traveler carry water out of the deep well for the thirsty dog?',
        options: [
          'In a glass jar',
          'In his leather shoe held firmly with his teeth',
          'In a copper bucket'
        ],
        correct: 1,
        explanation: 'He showed dedicated mercy by using his shoe to save the panting dog.'
      },
      {
        question: 'What does the universal greeting "Salaam" mean?',
        options: ['Wealth', 'Peace and safety', 'Victory in battle'],
        correct: 1,
        explanation: 'Salaam means wishing peace, safety, and divine blessings on others.'
      },
      {
        question: 'What is the virtue of "Amanah"?',
        options: [
          'Trustworthiness, keeping promises, and guarding trusts',
          'Running fast',
          'Playing games'
        ],
        correct: 0,
        explanation: 'Amanah means being completely honest and trustworthy.'
      },
      {
        question: 'Which of the following is considered an act of charity (Sadqah)?',
        options: [
          'Removing a sharp stone or garbage from a sidewalk',
          'Littering in the park',
          'Shouting at classmates'
        ],
        correct: 0,
        explanation: 'Clearing hazards from pathways protects people and counts as charity.'
      }
    ]
  },
  {
    id: 'jainism',
    name: 'Jainism',
    subname: 'The Path of Supreme Ahimsa, Reverence for Life & Simplicity',
    symbol: '🪷',
    color: '#e11d48',
    glowColor: 'rgba(225, 29, 72, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(136, 19, 55, 0.9) 0%, rgba(225, 29, 72, 0.9) 100%)',
    artImage: '/assets/jainism_art.jpg',
    summary: 'Teachings of Bhagwan Mahavira emphasizing supreme Ahimsa (non-violence to all life forms), Aparigraha (non-greed), and multi-sided truth (Anekantavada).',
    virtues: ['Ahimsa Paramo Dharma', 'Reverence for All Life', 'Aparigraha (Simplicity)', 'Forgiveness (Micchami Dukkadam)'],
    ambientChant: {
      name: 'Shree Bhaktamar Stotra & Navkar Jaap',
      audioSrc: '/assets/audio/jainism_chant.mp3',
      description: 'Complete continuous traditional Bhaktamar Stotra and universal Namokar reverence (~72 mins).'
    },
    lectures: [
      {
        id: 'j1',
        title: 'Lord Mahavira & Living in Harmony with All Beings',
        duration: '4:20 mins',
        description: 'How every tiny creature—from ants to birds—cherishes its own life just as much as we do.',
        videoScene: 'mahavira_forest',
        takeaway: 'All living souls, large and small, desire to live in freedom and peace.'
      },
      {
        id: 'j2',
        title: 'Micchami Dukkadam: The Universal Festival of Forgiveness',
        duration: '3:45 mins',
        description: 'Asking forgiveness from every single creature and letting go of all ill-will.',
        videoScene: 'paryushan_forgiveness',
        takeaway: 'Asking forgiveness heals the soul and dissolves all past hostility.'
      },
      {
        id: 'j3',
        title: 'Aparigraha: Learning to Share and Live Lightly',
        duration: '4:10 mins',
        description: 'Why having fewer wants leaves more resources for nature and fellow humans.',
        videoScene: 'simple_living',
        takeaway: 'True richness is having few wants, not accumulating many possessions.'
      },
      {
        id: 'j4',
        title: 'Anekantavada: The Six Blind Men & The Elephant',
        duration: '4:35 mins',
        description: 'Understanding that everyone sees a different part of the truth; respect all viewpoints.',
        videoScene: 'blind_men_elephant',
        takeaway: 'Listen patiently to other perspectives to understand the whole picture.'
      }
    ],
    stories: [
      {
        id: 'js1',
        title: 'The Wise Travelers and the Elephant',
        subtitle: 'The Parable of Many-Sided Truth (Anekantavada)',
        readingTime: '3 mins',
        moralTakeaway: 'Respect different viewpoints; everyone sees a piece of the great truth.',
        art: '/assets/jainism_art.jpg',
        text: `In an ancient city, five wise travelers who were blind from birth were asked to describe an elephant.

The first touched its sturdy leg and declared: "An elephant is like a giant tree trunk!"
The second touched its ear and said: "No, it is like a grand fan!"
The third touched its trunk and argued: "It is like a thick water hose!"
The fourth touched its tail and said: "You are all mistaken, it is like a soft rope!"
The fifth touched its side and shouted: "It is like a solid stone wall!"

They began arguing loudly. A gentle Jain sage walked past and said softly: "Each of you touched only one small part of the truth. When you combine all perspectives with respect, the whole elephant is understood."`
      },
      {
        id: 'js2',
        title: 'Prince Neminatha and the Forest Creatures',
        subtitle: 'The Awakening of Supreme Compassion',
        readingTime: '4 mins',
        moralTakeaway: 'Never celebrate your own joy at the cost of tears and cages for others.',
        art: '/assets/spiritual_academy_hero_1792433376185.jpg',
        text: `Young Prince Neminatha was riding in a royal chariot on the way to his grand wedding celebration. As the procession neared the palace gates, he heard plaintive, terrified cries coming from large enclosures nearby.

Neminatha stopped his chariot and asked his driver: "What are those heartbreaking cries?" The driver answered: "Sire, those are hundreds of forest deer, birds, and animals gathered for the royal feast."

Neminatha\'s heart overflowed with compassion. "My wedding celebration shall not cause terror to a single living soul!" He ordered all the cages opened immediately, renounced worldly vanity, and dedicated his life to teaching supreme non-violence.`
      },
      {
        id: 'js3',
        title: 'The Mango Tree and the Six Friends',
        subtitle: 'The Thought-Colors of Desire (Leshya)',
        readingTime: '3 mins',
        moralTakeaway: 'Take only what you need without cutting down the source of blessings for others.',
        art: '/assets/jainism_art.jpg',
        text: `Six hungry travelers walking through a dry plain came upon a magnificent tree laden with ripe, sweet mangoes.

The first proposed: "Let us chop down the entire tree with axes so we can get all the fruit!"
The second said: "No, let us chop off the biggest branches!"
The third said: "Let us cut off the small twigs!"
The fourth said: "Let us pluck only the fruit clusters!"
The fifth said: "Let us pick only the ripe mangoes we can reach!"
The sixth, the wisest friend, smiled: "Look, there are already plenty of sweet, ripe mangoes fallen on the ground. Let us gather those and leave the beautiful tree untouched for future travelers."`
      }
    ],
    teachings: [
      {
        principle: 'Ahimsa (Supreme Non-violence)',
        originalTerm: 'अहिंसा परमो धर्मः • Ahimsā Paramo Dharmaḥ',
        subtitle: 'Non-violence in thought, speech, and action',
        icon: '✋',
        summary: 'Causing zero harm to any living soul, from tiny insects to large animals.',
        deepDive: {
          philosophicalOrigin: 'The foundational bedrock of Jain ethics. Mahavira taught: "All breathing, existing, living, sentient creatures should not be slain, nor treated with violence, nor abused, nor tormented, nor driven away."',
          kidsScenario: 'Watching your steps on the garden lawn so you don\'t crush an ant colony, and refusing to support any cruelty to animals.',
          dailyMission: 'Save an insect, avoid wasting food, and choose gentle words throughout the day.',
          dinnerQuestion: 'How does eating and living gently protect the balance of Mother Nature?'
        }
      },
      {
        principle: 'Anekantavada (Multi-Sided Truth)',
        originalTerm: 'अनेकान्तवाद • Anekāntavāda',
        subtitle: 'Open-mindedness and respecting different viewpoints',
        icon: '💎',
        summary: 'Listening patiently to friends whose ideas differ from yours.',
        deepDive: {
          philosophicalOrigin: 'The doctrine of non-absolutism. Reality is multifaceted. Sages taught that intellectual dogmatism causes arguments, while understanding diverse perspectives creates peace.',
          kidsScenario: 'When two friends disagree about which game rules to use, listening carefully to both ideas and suggesting a hybrid game everyone enjoys.',
          dailyMission: 'Listen completely to someone\'s viewpoint today without interrupting or judging them.',
          dinnerQuestion: 'Can two people look at the same situation and both have a valid point of view?'
        }
      },
      {
        principle: 'Aparigraha (Non-Possessiveness)',
        originalTerm: 'अपरिग्रह • Aparigraha',
        subtitle: 'Living lightly and limiting unnecessary wants',
        icon: '🍃',
        summary: 'Not hoarding toys or clothes, and sharing surplus with those in need.',
        deepDive: {
          philosophicalOrigin: 'The practice of non-attachment to possessions. Greed causes conflict; by limiting personal consumption, we preserve natural resources for future generations.',
          kidsScenario: 'Decluttering your bookshelf and toy chest to donate items you no longer use to children in community shelters.',
          dailyMission: 'Sort through your clothes or games and select 3 items to donate to someone who needs them.',
          dinnerQuestion: 'What are the things in our life that truly make us happy that don\'t cost any money?'
        }
      },
      {
        principle: 'Micchami Dukkadam (Universal Forgiveness)',
        originalTerm: 'मिच्छामि दुक्कडं • Micchāmi Dukkaḍaṃ',
        subtitle: 'May all the harm I caused be forgiven',
        icon: '🙏',
        summary: 'Seeking forgiveness from all living beings and harboring zero ill-will.',
        deepDive: {
          philosophicalOrigin: 'During the Paryushan festival, Jains recite: "Khamemi Savve Jiva, Savve Jiva Khamantu Me" (I forgive all creatures, may all creatures forgive me; I have friendship with all, enmity with none).',
          kidsScenario: 'Going up to a sibling after an argument, looking into their eyes, and saying: "I am sorry I lost my temper; let\'s start fresh with love."',
          dailyMission: 'Reach out to someone you had a misunderstanding with and offer a sincere apology.',
          dinnerQuestion: 'How does asking for forgiveness make your mind feel refreshed and light?'
        }
      }
    ],
    calm: {
      title: 'Nature Chimes & Sacred Stillness',
      chimeSound: 'singingBowl',
      affirmation: 'May all living beings be happy, may none suffer harm, may all abide in peace.'
    },
    finalExam: [
      {
        question: 'What does "Ahimsa Paramo Dharma" mean in Jain philosophy?',
        options: [
          'Non-violence is the supreme spiritual duty',
          'Winning every race is the highest duty',
          'Traveling around the world'
        ],
        correct: 0,
        explanation: 'Ahimsa (non-injury to any living creature) is the core ethical principle of Jainism.'
      },
      {
        question: 'What is the sacred phrase said during Paryushan festival to seek universal forgiveness?',
        options: ['Good morning', 'Micchami Dukkadam', 'Namaste'],
        correct: 1,
        explanation: 'Micchami Dukkadam means "May all the intentional or unintentional harm I caused be forgiven."'
      },
      {
        question: 'Who was the 24th Tirthankara of Jainism?',
        options: ['Bhagwan Mahavira', 'King Ashoka', 'Chanakya'],
        correct: 0,
        explanation: 'Bhagwan Mahavira revitalized and codified Jain philosophy.'
      },
      {
        question: 'What does the story of the Blind Men and the Elephant teach us (Anekantavada)?',
        options: [
          'Truth has many sides, so we must respect different perspectives',
          'Elephants are dangerous',
          'Only one person can ever be right'
        ],
        correct: 0,
        explanation: 'It illustrates that truth is multifaceted and requires listening to all viewpoints.'
      },
      {
        question: 'What is the practice of "Aparigraha"?',
        options: [
          'Collecting too many toys',
          'Living simply, non-greed, and sharing surplus',
          'Fighting for possessions'
        ],
        correct: 1,
        explanation: 'Aparigraha means non-possessiveness and choosing contentment over greed.'
      }
    ]
  },
  {
    id: 'judaism',
    name: 'Judaism',
    subname: 'The Covenant of Tikkun Olam, Wisdom & Shabbat Gratitude',
    symbol: '✡️',
    color: '#1d4ed8',
    glowColor: 'rgba(29, 78, 216, 0.45)',
    bgGradient: 'linear-gradient(135deg, rgba(23, 37, 84, 0.9) 0%, rgba(29, 78, 216, 0.9) 100%)',
    artImage: '/assets/judaism_art.jpg',
    summary: 'Ancient wisdom tradition emphasizing Tikkun Olam (repairing and healing the world), Tzedakah (righteous giving), and family gratitude on Shabbat.',
    virtues: ['Tikkun Olam (Heal the World)', 'Tzedakah (Justice & Giving)', 'Shabbat (Day of Rest)', 'Love of Learning'],
    ambientChant: {
      name: 'Chassidic Nigun & Shalom Medley',
      audioSrc: '/assets/audio/judaism_chant.mp3',
      description: 'Long continuous instrumental Chassidic Nigunim, uplifting Israeli folk medleys, and Shalom harmonies (~17 mins).'
    },
    lectures: [
      {
        id: 'jd1',
        title: 'Tikkun Olam: Each of Us Can Repair the World',
        duration: '4:15 mins',
        description: 'How every kind word, planted tree, and fair deed fixes a broken piece of our world.',
        videoScene: 'tikkun_olam',
        takeaway: 'You are not obligated to complete the work, but neither are you free to abandon it.'
      },
      {
        id: 'jd2',
        title: 'The Story of King Solomon’s Wisdom',
        duration: '4:50 mins',
        description: 'Why asking for an understanding heart to help others is greater than asking for gold.',
        videoScene: 'king_solomon',
        takeaway: 'An understanding heart that listens with empathy is life\'s greatest treasure.'
      },
      {
        id: 'jd3',
        title: 'Shabbat: The Blessing of a Family Rest Day',
        duration: '3:35 mins',
        description: 'Turning off screens, lighting candles, and celebrating love and gratitude around the table.',
        videoScene: 'shabbat_table',
        takeaway: 'Resting together in gratitude renews love, peace, and family harmony.'
      },
      {
        id: 'jd4',
        title: 'Tzedakah: Giving as an Act of Justice',
        duration: '4:05 mins',
        description: 'Why sharing your coins with those in need is not a favor, but a righteous responsibility.',
        videoScene: 'tzedakah_box',
        takeaway: 'Giving brings dignity to the receiver and nobility to the giver.'
      }
    ],
    stories: [
      {
        id: 'jds1',
        title: 'The Two Brothers and the Shared Field',
        subtitle: 'The Holy Ground of Mutual Love',
        readingTime: '3 mins',
        moralTakeaway: 'When brothers and sisters think of each other\'s happiness before their own, the world is healed.',
        art: '/assets/judaism_art.jpg',
        text: `In ancient Jerusalem, two brothers farmed a shared field of wheat. One brother was married and had four children, while the younger brother lived alone.

After harvest, they divided the sheaves of wheat equally into two stacks. At night, the older brother thought: "My brother is alone; he has no family to support him in old age. He needs more wheat." So in the dark of night, he carried three sheaves over to his brother’s stack.

At the very same time, the younger brother thought: "My brother has a wife and four growing children to feed. He needs more wheat." So he carried three sheaves over to his brother’s stack.

The next morning, both brothers were baffled why their stacks were still identical! That night, both carried wheat again, and met each other halfway in the moonlight with sheaves in their arms. They dropped the wheat and embraced with tears of love. Tradition says God blessed that exact field as the most holy ground on earth.`
      },
      {
        id: 'jds2',
        title: 'Honi and the Carob Tree',
        subtitle: 'Planting Blessings for Future Generations',
        readingTime: '3 mins',
        moralTakeaway: 'Plant trees and kindness today so children born tomorrow may eat sweet fruit.',
        art: '/assets/spiritual_academy_hero_1792433376185.jpg',
        text: `A wise teacher named Honi was walking along a country road when he saw an elderly man planting a young carob sapling.

Honi asked: "Old friend, how many years does it take for a carob tree to bear fruit?" The man replied: "Seventy years."

Honi asked: "Do you really expect to live another seventy years to taste its sweet fruit?" The old man smiled with gentle eyes: "When I arrived in this world, I found beautiful carob trees planted by my grandparents before I was born. Just as my ancestors planted for me, so I plant for my children and their children."`
      },
      {
        id: 'jds3',
        title: 'The Great Feast of King Solomon and the Honey Bee',
        subtitle: 'No Creature is Too Small to Help',
        readingTime: '4 mins',
        moralTakeaway: 'Never underestimate the smallest friend; kindness always returns in unexpected hours.',
        art: '/assets/judaism_art.jpg',
        text: `King Solomon was resting in his garden when a tiny honey bee accidentally stung his nose. The king frowned in pain and called the little bee. The trembling bee apologized: "O great king, I mistook your nose for a fragrant rose! Spare my life, and one day I may repay your kindness."

The king laughed: "What could a tiny insect ever do for the mighty King Solomon?" But he let the bee fly away safely.

Years later, the Queen of Sheba visited Solomon with a challenge: she placed one hundred identical red roses before him—ninety-nine crafted from silk and perfume, and only one real blossom. "Which is the true flower?"

Through the open window buzzed the little honey bee, flying straight to the single real flower to sip nectar. Solomon smiled gratefully: "The smallest bee possesses wisdom that silences kings."`
      }
    ],
    teachings: [
      {
        principle: 'Tikkun Olam (Repairing the World)',
        originalTerm: 'תיקון עולם • Tikkun Olam',
        subtitle: 'Fixing the broken pieces of the world through good deeds',
        icon: '🌍',
        summary: 'Planting trees, reducing waste, fighting injustice, and healing society.',
        deepDive: {
          philosophicalOrigin: 'Ancient Jewish tradition teaches that the world was created intentionally unfinished so that human beings could become active partners in completing and repairing it.',
          kidsScenario: 'Joining a community beach cleanup or planting saplings in the local neighborhood park.',
          dailyMission: 'Pick up three pieces of plastic from your neighborhood or school yard and recycle them.',
          dinnerQuestion: 'What is one broken thing in our world that our family can help repair this month?'
        }
      },
      {
        principle: 'Tzedakah (Righteous Giving)',
        originalTerm: 'צדקה • Tzedakah',
        subtitle: 'Justice, fairness, and sharing your blessings',
        icon: '🪙',
        summary: 'Setting aside pocket money regularly in a special donation box for the needy.',
        deepDive: {
          philosophicalOrigin: 'From the Hebrew root "Tzedek" (justice). In Jewish ethics, giving to the poor is not an optional favor or charity; it is an act of fundamental fairness and duty.',
          kidsScenario: 'Dropping coins into a Tzedakah box every Friday afternoon before Sabbath dinner.',
          dailyMission: 'Set aside a small portion of your pocket allowance or savings to donate to a community food bank.',
          dinnerQuestion: 'Why does helping someone in need uphold justice rather than just charity?'
        }
      },
      {
        principle: 'Shalom (Wholeness & Peace)',
        originalTerm: 'שלום • Shalom',
        subtitle: 'Harmony, health, and peaceful relationships',
        icon: '🕊️',
        summary: 'Ending every conversation with warmth, good wishes, and reconciliations.',
        deepDive: {
          philosophicalOrigin: 'Shalom is far more than the absence of war; it signifies wholeness, completeness, flourishing harmony, and inner tranquility.',
          kidsScenario: 'Making peace with a playmate before the sun goes down so neither of you sleeps with sadness.',
          dailyMission: 'Greet everyone you talk to with genuine warmth, wishing them a peaceful day.',
          dinnerQuestion: 'What does a home filled with "Shalom Bayit" (peace in the household) feel like to you?'
        }
      },
      {
        principle: 'Love of Learning (Talmud Torah)',
        originalTerm: 'תלמוד תורה • Love of Learning',
        subtitle: 'Asking curious questions and reading books with passion',
        icon: '📖',
        summary: 'Being excited to learn, asking deep questions, and discovering history.',
        deepDive: {
          philosophicalOrigin: 'In Jewish tradition, learning is a sacred lifelong adventure. A wise student is not the one who knows all answers, but the one who asks thoughtful questions.',
          kidsScenario: 'Asking your teacher or parents: "Why did that happen?" and reading books to discover how things work.',
          dailyMission: 'Read 15 minutes of an educational book or learn one fascinating historical fact today.',
          dinnerQuestion: 'What was the most surprising or interesting thing you learned today?'
        }
      }
    ],
    calm: {
      title: 'Peaceful Sabbath Harp & Golden Candlelight',
      chimeSound: 'harp',
      affirmation: 'I rest in gratitude, I heal what is broken, and I share peace with all families.'
    },
    finalExam: [
      {
        question: 'What does the Hebrew phrase "Tikkun Olam" mean?',
        options: ['Conquering lands', 'Repairing and healing the world', 'Building stone towers'],
        correct: 1,
        explanation: 'Tikkun Olam means actively working to heal society, nature, and the world.'
      },
      {
        question: 'What is "Tzedakah" in Jewish ethics?',
        options: [
          'Righteous giving and sharing resources to create fairness',
          'Singing songs',
          'A holiday feast'
        ],
        correct: 0,
        explanation: 'Tzedakah means justice and righteous giving to ensure everyone has what they need.'
      },
      {
        question: 'What is celebrated every week during "Shabbat"?',
        options: [
          'A family day of rest, gratitude, and turning off busy distractions',
          'A long exam',
          'Cleaning offices'
        ],
        correct: 0,
        explanation: 'Shabbat is a sacred weekly rest day celebrating family, gratitude, and peace.'
      },
      {
        question: 'In the story of the Two Brothers, what made the field holy ground?',
        options: [
          'Finding a chest of buried coins',
          'Both brothers selflessly carrying wheat to each other in secret love',
          'A big palace was built there'
        ],
        correct: 1,
        explanation: 'Their selfless mutual love and care made the ground sacred.'
      },
      {
        question: 'What did King Solomon ask for when given the chance to receive anything?',
        options: ['Endless chests of gold', 'An understanding heart to help and guide people', 'An army of warriors'],
        correct: 1,
        explanation: 'King Solomon asked for an understanding heart to act with empathy and justice.'
      }
    ]
  }
];

export const DAILY_QUOTES = [
  {
    quote: "Compassion is the universal language that the deaf can hear and the blind can see.",
    author: "Universal Moral Wisdom"
  },
  {
    quote: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop's Fables"
  },
  {
    quote: "The fragrance of flowers spreads only with the wind. But the goodness of a person spreads in all directions.",
    author: "Timeless Proverb"
  },
  {
    quote: "When you see the good in others, you bring out the best in yourself.",
    author: "Global Wisdom Heritage"
  }
];
