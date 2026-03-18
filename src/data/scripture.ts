/**
 * scripture.ts
 *
 * Extracted directly from:
 *   - The Complete Restored Ethiopian Bible in English (88 Books) — Rush Nilson / Manuscryptha
 *   - The Complete Book of Enoch, Standard English Version — Dr. Jay Winter
 *
 * Intended for use in The Sanctuary prayer app as a content source for
 * meditation, intercession prompts, and daily reading.
 *
 * NOTE (Tier 3 — Theology & Content):
 * All Scripture selections and wording must be reviewed by the Lead Maintainer
 * before appearing in any prayer flow or liturgical screen.
 */

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface ScripturePassage {
  reference: string      // e.g. "Matthew 5:3" or "1 Enoch 1:8"
  text: string
  theme?: string         // optional thematic tag for filtering
}

// ─────────────────────────────────────────────────────────────────────────────
// PART 1 — ETHIOPIAN BIBLE (88 Books)
// Book structure extracted from the Table of Contents
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Full book list of the Ethiopian Orthodox Canon (88 Books).
 * Part I = Foundations of the Covenant (KJV core)
 * Part II = Prophets, Visions and Hidden Truths (Ethiopian additions)
 * Part III = From Creation to Covenant (Apostolic & wisdom texts)
 */
export const ETHIOPIAN_BIBLE_BOOKS: {
  part: string
  section: string
  books: string[]
}[] = [
  {
    part: 'Part I',
    section: 'Foundations of the Covenant',
    books: [
      'The Book of Genesis',
      'The Book of Exodus',
      'The Book of Leviticus',
      'The Book of Numbers',
      'The Book of Deuteronomy',
      'The Book of Joshua',
      'The Book of Judges',
      'The Book of Ruth',
      'The First Book of Samuel',
      'The Second Book of Samuel',
      'The First Book of Kings',
      'The Second Book of Kings',
      'The Book of the Chronicles',
      'The Second Book of the Chronicles',
      'The Book of Ezra',
      'The Book of Nehemiah',
      'The Book of Job',
      'The Book of Psalms',
      'The Book of Proverbs',
      'The Book of Ecclesiastes',
      'The Book of Songs',
      'The Book of the Prophet Isaiah',
      'The Book of the Prophet Jeremiah',
      'The Lamentations of Jeremiah',
      'The Lamentations the Prophet Ezekiel',
      'The Book of Daniel',
      'The Book of Hosea',
      'The Book of Joel',
      'The Book of Amos',
      'The Book of Obadiah',
      'The Book of Jonah',
      'The Book of Micah',
      'The Book of Nahum',
      'The Book of Habakkuk',
      'The Book of Zephaniah',
      'The Book of Haggai',
      'The Book of Zechariah',
      'The Book of Malachi',
      'The Gospel of Matthew',
      'The Gospel of Mark',
      'The Gospel of Luke',
      'The Gospel of John',
      'The Acts of the Apostles',
      'The Letter of the Romans',
      'The First Letter of the Corinthians',
      'The Second Letter of the Corinthians',
      'The Letter to the Galatians',
      'The Letter to the Ephesians',
      'The Letter to the Philippians',
      'The Letter to the Colossians',
      'The First Letter to the Thessalonians',
      'The Second Letter to the Thessalonians',
      'The First Letter to Timothy',
      'The Second Letter to Timothy',
      'The Letter to Titus',
      'The Letter to Philemon',
      'The Letter to the Hebrews',
      'The Letter to James',
      'The First Letter of Peter',
      'The Second Letter of Peter',
      'The First Letter of John',
      'The Second Letter of John',
      'The Third Letter of John',
      'The Letter of Jude',
      'The Book of Revelation',
    ],
  },
  {
    part: 'Part II',
    section: 'Prophets, Visions and Hidden Truths',
    books: [
      'The First Book of Enoch',
      'The Second Book of Enoch',
      'The Third Book of Enoch',
      'The Book of Jubilees',
      'First Book of Ethiopian Maccabees (Meqabyan)',
      'Second Book of Ethiopian Maccabees (Meqabyan)',
      'Third Book of Ethiopian Maccabees (Meqabyan)',
      'First Book of Esdras',
      'The Apocalypse of Esdras',
      'The Letter of Jeremiah',
      'The Book of Baruch',
      'The Apocalypse of Baruch',
      'The Prayer of Manasseh',
      'The History of Susanna',
      'Bel and the Dragon',
      'The Additions to Esther',
    ],
  },
  {
    part: 'Part III',
    section: 'From Creation to Covenant — Apostolic & Wisdom Texts',
    books: [
      'The Testament of Abraham',
      'The Testament of Isaac',
      'The Testament of Jacob',
      'The Psalms of Solomon',
      'The Didache',
      'The Apocalypse of Peter',
      'The Martyrdom and Ascension of Isaiah',
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PART 2 — TEACHINGS OF JESUS CHRIST
// Extracted from the Gospels of Matthew, Mark, Luke, and John
// as they appear in the Ethiopian Bible (Manuscryptha edition)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 30 key teachings and sayings of Jesus Christ.
 * References follow standard chapter:verse notation.
 * Text is paraphrased/summarized from the Ethiopian Bible edition
 * unless marked as direct speech (quotation marks in original).
 */
export const JESUS_TEACHINGS: ScripturePassage[] = [
  // ── Sermon on the Mount (Matthew 5–7) ──────────────────────────────────────
  {
    reference: 'Matthew 5:3',
    text: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.',
    theme: 'beatitudes',
  },
  {
    reference: 'Matthew 5:4',
    text: 'Blessed are those who mourn, for they shall be comforted.',
    theme: 'beatitudes',
  },
  {
    reference: 'Matthew 5:5',
    text: 'Blessed are the meek, for they shall inherit the earth.',
    theme: 'beatitudes',
  },
  {
    reference: 'Matthew 5:7-9',
    text: 'Blessed are the merciful, for they shall obtain mercy. Blessed are the pure in heart, for they shall see God. Blessed are the peacemakers, for they shall be called children of God.',
    theme: 'beatitudes',
  },
  {
    reference: 'Matthew 5:13-14',
    text: 'You are the salt of the earth — you are the light of the world. A city set on a hill cannot be hidden. Let your light shine before others, that they may see your good works and glorify your Father in heaven.',
    theme: 'identity-in-christ',
  },
  {
    reference: 'Matthew 5:17',
    text: 'Do not think that I have come to abolish the Law or the Prophets. I have come not to abolish but to fulfill.',
    theme: 'law-and-grace',
  },
  {
    reference: 'Matthew 5:44',
    text: 'Love your enemies and pray for those who persecute you, so that you may be children of your Father in heaven.',
    theme: 'love',
  },
  {
    reference: 'Matthew 5:48',
    text: 'Be perfect, therefore, as your heavenly Father is perfect.',
    theme: 'holiness',
  },
  {
    reference: 'Matthew 6:6',
    text: 'When you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you.',
    theme: 'prayer',
  },
  {
    reference: 'Matthew 6:9-13',
    text: 'Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil.',
    theme: 'prayer',
  },
  {
    reference: 'Matthew 6:19-21',
    text: 'Do not store up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but store up for yourselves treasures in heaven. For where your treasure is, there your heart will be also.',
    theme: 'simplicity',
  },
  {
    reference: 'Matthew 6:25-26',
    text: 'Do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they?',
    theme: 'trust',
  },
  {
    reference: 'Matthew 6:33',
    text: 'Seek first the kingdom of God and his righteousness, and all these things will be added to you.',
    theme: 'kingdom',
  },
  {
    reference: 'Matthew 7:7-8',
    text: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.',
    theme: 'prayer',
  },
  {
    reference: 'Matthew 7:12',
    text: 'Whatever you wish that others would do to you, do also to them, for this is the Law and the Prophets.',
    theme: 'love',
  },
  {
    reference: 'Matthew 7:13-14',
    text: 'Enter by the narrow gate. For the gate is wide and the way is easy that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard that leads to life, and those who find it are few.',
    theme: 'discipleship',
  },
  {
    reference: 'Matthew 7:24-25',
    text: 'Everyone then who hears these words of mine and does them will be like a wise man who built his house on the rock. And the rain fell, and the floods came, and the winds blew and beat on that house, but it did not fall, because it had been founded on the rock.',
    theme: 'obedience',
  },

  // ── Teachings from Mark ────────────────────────────────────────────────────
  {
    reference: 'Mark 8:34-35',
    text: 'If anyone would come after me, let him deny himself and take up his cross and follow me. For whoever would save his life will lose it, but whoever loses his life for my sake and the gospel\'s will save it.',
    theme: 'discipleship',
  },
  {
    reference: 'Mark 9:23',
    text: '"I believe, help my unbelief!" — and Jesus healed the boy, saying: All things are possible for one who believes.',
    theme: 'faith',
  },
  {
    reference: 'Mark 10:14-15',
    text: 'Let the children come to me; do not hinder them, for to such belongs the kingdom of God. Truly, I say to you, whoever does not receive the kingdom of God like a child shall not enter it.',
    theme: 'kingdom',
  },
  {
    reference: 'Mark 10:43-45',
    text: 'Whoever would be great among you must be your servant, and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.',
    theme: 'servanthood',
  },
  {
    reference: 'Mark 12:30-31',
    text: 'Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength. The second is this: Love your neighbor as yourself. There is no commandment greater than these.',
    theme: 'love',
  },

  // ── Teachings from Luke ────────────────────────────────────────────────────
  {
    reference: 'Luke 4:18',
    text: 'The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed.',
    theme: 'mission',
  },
  {
    reference: 'Luke 6:27-28',
    text: 'Love your enemies, do good to those who hate you, bless those who curse you, pray for those who abuse you.',
    theme: 'love',
  },
  {
    reference: 'Luke 6:36',
    text: 'Be merciful, even as your Father is merciful.',
    theme: 'mercy',
  },
  {
    reference: 'Luke 11:9-10',
    text: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.',
    theme: 'prayer',
  },
  {
    reference: 'Luke 15:7',
    text: 'There will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance.',
    theme: 'redemption',
  },

  // ── I AM Sayings and Teachings from John ──────────────────────────────────
  {
    reference: 'John 6:35',
    text: 'I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst.',
    theme: 'i-am',
  },
  {
    reference: 'John 8:12',
    text: 'I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life.',
    theme: 'i-am',
  },
  {
    reference: 'John 8:58',
    text: 'Truly, truly, I say to you, before Abraham was, I AM.',
    theme: 'i-am',
  },
  {
    reference: 'John 10:10-11',
    text: 'The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly. I am the good shepherd. The good shepherd lays down his life for the sheep.',
    theme: 'i-am',
  },
  {
    reference: 'John 11:25-26',
    text: 'I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die.',
    theme: 'i-am',
  },
  {
    reference: 'John 13:34-35',
    text: 'A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another.',
    theme: 'love',
  },
  {
    reference: 'John 14:1-3',
    text: 'Let not your hearts be troubled. Believe in God; believe also in me. In my Father\'s house are many rooms. If it were not so, would I have told you that I go to prepare a place for you? And if I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also.',
    theme: 'hope',
  },
  {
    reference: 'John 14:6',
    text: 'I am the way, and the truth, and the life. No one comes to the Father except through me.',
    theme: 'i-am',
  },
  {
    reference: 'John 14:27',
    text: 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.',
    theme: 'peace',
  },
  {
    reference: 'John 15:4-5',
    text: 'Abide in me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in me. I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.',
    theme: 'abiding',
  },
  {
    reference: 'John 15:13',
    text: 'Greater love has no one than this, that someone lay down his life for his friends.',
    theme: 'love',
  },
  {
    reference: 'John 16:33',
    text: 'In the world you will have tribulation. But take heart; I have overcome the world.',
    theme: 'hope',
  },
  {
    reference: 'John 17:3',
    text: 'And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent.',
    theme: 'eternal-life',
  },

  // ── Great Commission (Matthew 28) ──────────────────────────────────────────
  {
    reference: 'Matthew 28:19-20',
    text: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.',
    theme: 'mission',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PART 3 — THE BOOK OF ENOCH
// Extracted from: The Complete Book of Enoch, Standard English Version
// Dr. Jay Winter | ISBN 9781370207848
// Translated from the original Ethiopic manuscript
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Section/chapter structure of the Book of Enoch (Jay Winter edition).
 * The book is organized into 5 major sections plus extras.
 */
export const BOOK_OF_ENOCH_STRUCTURE: {
  book: number
  title: string
  chapters: { chapter: number; title: string }[]
}[] = [
  {
    book: 1,
    title: 'The Book of Watchers',
    chapters: [
      { chapter: 1, title: 'The Words of the Blessing of Enoch' },
      { chapter: 2, title: 'The Creation' },
      { chapter: 3, title: 'The Fallen Angels' },
      { chapter: 4, title: 'Intercession of Angels' },
      { chapter: 5, title: 'Book of the Words of Righteousness' },
      { chapter: 6, title: 'Taken by Angels' },
      { chapter: 7, title: 'The Holy Angels' },
    ],
  },
  {
    book: 2,
    title: 'The Book of Parables (Similitudes)',
    chapters: [
      { chapter: 1, title: 'The First Parable — The Congregation of the Righteous' },
      { chapter: 2, title: 'The Second Parable — The Son of Man and the Elect One' },
      { chapter: 3, title: 'The Third Parable — The Judgment of Kings and the Mighty' },
    ],
  },
  {
    book: 3,
    title: 'The Book of Noah',
    chapters: [
      { chapter: 1, title: 'Birth of Noah' },
      { chapter: 2, title: 'Calling Enoch' },
      { chapter: 3, title: 'Judgement of Angels' },
      { chapter: 4, title: 'Secrets of the Parables' },
    ],
  },
  {
    book: 4,
    title: 'The Book of the Kingdom of Heaven (Astronomical Book)',
    chapters: [
      { chapter: 1, title: 'Enoch is Taken' },
      { chapter: 2, title: 'The Luminaries of Heaven' },
      { chapter: 3, title: 'Heavenly Tablets' },
      { chapter: 4, title: 'One Year to Record' },
      { chapter: 5, title: 'Visions' },
    ],
  },
  {
    book: 5,
    title: 'The Epistle of Enoch',
    chapters: [
      { chapter: 1, title: 'Guidance of Enoch' },
      { chapter: 2, title: 'Wisdom of Enoch' },
      { chapter: 3, title: 'Wisdom of Enoch (continued)' },
      { chapter: 4, title: 'Wisdom of Enoch (continued)' },
      { chapter: 5, title: 'Wisdom of Enoch (continued)' },
      { chapter: 6, title: 'Revelation of Enoch' },
    ],
  },
]

/**
 * Extras and supplementary texts in the Jay Winter edition:
 * - Dead Sea Scroll Chart
 * - Book of the Giants
 * - Evidence of Giants
 * - Testament of Solomon
 * - References to Enoch in Other Manuscripts
 */

/**
 * 20 notable passages from the Book of Enoch with chapter references.
 * References use the Book-Chapter-Verse format: "1 Enoch B1:C1:V"
 * (Book 1 = Watchers, Book 2 = Parables, etc.)
 */
export const BOOK_OF_ENOCH_PASSAGES: ScripturePassage[] = [
  // ── Book 1: The Watchers ───────────────────────────────────────────────────
  {
    reference: '1 Enoch 1:1-2 (Book 1, Ch. 1)',
    text: 'The words of the blessing of Enoch, wherewith he blessed the elect and righteous, who will be living in the days of tribulation, when all the wicked and godless are to be removed. And Enoch, a righteous man whose eyes were opened by God took up his parable and said: "I saw the vision of the Holy One in the heavens, which the angels showed me — not for this generation, but for a remote one which is for to come."',
    theme: 'prophecy',
  },
  {
    reference: '1 Enoch 1:3-5 (Book 1, Ch. 1)',
    text: '"The Holy Great One will come forth from His dwelling, and the eternal God will tread upon the earth, even on Mount Sinai and will appear in the strength of His might from the heaven of heavens. And all shall be smitten with fear and the Watchers shall quake, and great fear and trembling shall seize them unto the ends of the earth."',
    theme: 'judgment',
  },
  {
    reference: '1 Enoch 1:8-9 (Book 1, Ch. 1)',
    text: '"But with the righteous He will make peace. And will protect the elect, and mercy shall be upon them. And they shall all belong to God, and they shall be prospered, and they shall all be blessed. He cometh with ten thousands of His holy ones to execute judgement upon all, and to destroy all the ungodly."',
    theme: 'judgment',
  },
  {
    reference: '1 Enoch 2:1-5 (Book 1, Ch. 2)',
    text: 'Observe ye everything that takes place in the heaven, how they do not change their orbits, and the luminaries which are in the heaven, how they all rise and set in order each in its season, and transgress not against their appointed order. Observe and see how in the winter all the trees seem as though they had withered — yet they retain the old foliage till the new comes. And again, observe how the trees cover themselves with green leaves and bear fruit — wherefore give ye heed and know with regard to all His works, and recognize how He that liveth for ever hath made them so.',
    theme: 'creation',
  },
  {
    reference: '1 Enoch 2:8 (Book 1, Ch. 2)',
    text: '"But ye have not been steadfast, nor done the commandments of the Lord. But ye have turned away and spoken proud and hard words with your impure mouths against His greatness. Oh, ye hard-hearted, ye shall find no peace."',
    theme: 'warning',
  },
  {
    reference: '1 Enoch 2:15-17 (Book 1, Ch. 2)',
    text: '"For the elect there shall be light and joy and peace, and they shall inherit the earth. And then there shall be bestowed upon the elect wisdom, and they shall all live and never again sin either through ungodliness or through pride. But they who are wise shall be humble. And they shall not again transgress, nor shall they sin all the days of their life. And their lives shall be increased in peace, and the years of their joy shall be multiplied in eternal gladness and peace all the days of their life."',
    theme: 'blessing',
  },
  {
    reference: '1 Enoch 3:1-5 (Book 1, Ch. 3)',
    text: 'And it came to pass when the children of men had multiplied that in those days were born unto them beautiful and comely daughters. And the angels, the children of the heaven, saw and lusted after them, and said to one another: "Come, let us choose us wives from among the children of men." They were in all two hundred; who descended in the days of Jared on the summit of Mount Hermon, and they called it Mount Hermon, because they had sworn and bound themselves by mutual imprecations upon it.',
    theme: 'watchers',
  },
  {
    reference: '1 Enoch 3:8-9 (Book 1, Ch. 3)',
    text: 'And they taught them charms and enchantments, and the cutting of roots, and made them acquainted with plants. And they became pregnant, and they bare great giants, whose height was three thousand ells — who consumed all the acquisitions of men. And when men could no longer sustain them, the giants turned against them and devoured mankind.',
    theme: 'watchers',
  },
  {
    reference: '1 Enoch 4:26-29 (Book 1, Ch. 4)',
    text: '"Azazel, thou shalt have no peace, a severe sentence has gone forth against thee to put thee in bonds — because of the unrighteousness which thou hast taught, and because of all the works of godlessness and sin which thou hast shown to men." And they were all afraid, and fear and trembling seized them. And they besought me to draw up a petition for them that they might find forgiveness, and to read their petition in the presence of the Lord of heaven. For from thenceforward they could not speak with Him nor lift up their eyes to heaven for shame of their sins for which they had been condemned.',
    theme: 'fallen-angels',
  },
  {
    reference: '1 Enoch 6:17 (Book 1, Ch. 6)',
    text: '"This place is the prison of the angels, and here they will be imprisoned for ever." And from thence I went to another place — there were four hollow places, deep and wide and very smooth. These hollow places have been created for this very purpose: that the spirits of the souls of the dead should assemble therein, yea that all the souls of the children of men should assemble here till the day of their judgement and till their appointed period, till the great judgement upon them.',
    theme: 'judgment',
  },

  // ── Book 2: The Parables (Similitudes) ────────────────────────────────────
  {
    reference: '1 Enoch, Book 2, Parable 1:4-5',
    text: 'When the congregation of the righteous shall appear, and sinners shall be judged for their sins, and shall be driven from the face of the earth — when the Righteous One shall appear before the eyes of the righteous, whose elect works hang upon the Lord of Spirits, and light shall appear to the righteous and the elect who dwell on the earth — where then will be the dwelling of the sinners? It had been good for them if they had not been born.',
    theme: 'judgment',
  },
  {
    reference: '1 Enoch, Book 2, Parable 2:3-5',
    text: '"On that day Mine Elect One shall sit on the throne of glory and shall try their works, and their places of rest shall be innumerable. And their souls shall grow strong within them when they see Mine Elect Ones. And those who have called upon My glorious name: then will I cause Mine Elect One to dwell among them. And I will transform the heaven and make it an eternal blessing and light and I will transform the earth and make it a blessing: and I will cause Mine Elect Ones to dwell upon it."',
    theme: 'elect-one',
  },
  {
    reference: '1 Enoch, Book 2, Parable 2:7-9',
    text: 'And there I saw One who had a head of days, and His head was white like wool, and with Him was another being whose countenance had the appearance of a man, and his face was full of graciousness, like one of the holy angels. And I asked concerning that Son of Man, who he was, and whence he was. And he answered: "This is the Son of Man who hath righteousness. With whom dwelleth righteousness, and who reveals all the treasures of that which is hidden. Because the Lord of Spirits hath chosen him."',
    theme: 'son-of-man',
  },
  {
    reference: '1 Enoch, Book 2, Parable 2:22-27',
    text: '"And at that hour that Son of Man was named in the presence of the Lord of Spirits. Yea, before the sun and the signs were created, before the stars of the heaven were made, His name was named before the Lord of Spirits. He shall be a staff to the righteous whereon to stay themselves and not fall, and he shall be the light of the Gentiles, and the hope of those who are troubled of heart. All who dwell on earth shall fall down and worship before Him. And the wisdom of the Lord of Spirits hath revealed Him to the holy and righteous."',
    theme: 'son-of-man',
  },
  {
    reference: '1 Enoch, Book 2, Parable 2:45-48',
    text: '"Wisdom found no place where she might dwell, then a dwelling-place was assigned her in the heavens. Wisdom went forth to make her dwelling among the children of men and found no dwelling-place. Wisdom returned to her place and took her seat among the angels. And unrighteousness went forth from her chambers — whom she sought not she found and dwelt with them, as rain in a desert and dew on a thirsty land."',
    theme: 'wisdom',
  },
  {
    reference: '1 Enoch, Book 2, Parable 3:23-27',
    text: '"And there was great joy amongst them, and they blessed and glorified and extolled because the name of that Son of Man had been revealed unto them. And he sat on the throne of His glory and the sum of judgement was given unto the Son of Man, and He caused the sinners to pass away and be destroyed from off the face of the earth. With chains shall they be bound and in their assemblage place of destruction shall they be imprisoned. And from henceforth there shall be nothing corruptible; for that Son of Man has appeared and has seated himself on the throne of His glory. All evil shall pass away before His face."',
    theme: 'son-of-man',
  },

  // ── Book 3: The Book of Noah ───────────────────────────────────────────────
  {
    reference: '1 Enoch, Book 3, Noah 2:19-21',
    text: '"Now, my Lord, destroy from the earth the flesh which has aroused Thy wrath — but the flesh of righteousness and uprightness establish as a plant of the eternal seed and hide not Thy face from the prayer of Thy servant, O Lord." And Enoch lifted up and spake to his son Methuselah: "To thee, my son, will I speak: hear my words — incline thine ear to the dream-vision of thy father."',
    theme: 'prayer',
  },

  // ── Book 5: The Epistle of Enoch ──────────────────────────────────────────
  {
    reference: '1 Enoch, Book 5, Epistle 2:37-38',
    text: '"But in those days blessed are all they who accept the words of wisdom, and understand them, and observe the paths of the Most High, and walk in the path of His righteousness, and become not godless with the godless — for they shall be saved. Woe to you who spread evil to your neighbors — for you shall be slain in Sheol."',
    theme: 'wisdom',
  },
  {
    reference: '1 Enoch, Book 5, Epistle 2:40-42',
    text: '"Woe to you who build your houses through the grievous toil of others, and all their building materials are the bricks and stones of sin — I tell you, ye shall have no peace. Woe to them who reject the measure and eternal heritage of their fathers and whose souls follow after idols — for they shall have no rest. Woe to them who work unrighteousness and help oppression, and slay their neighbours until the day of the great judgement."',
    theme: 'warning',
  },
  {
    reference: '1 Enoch, Book 5, Epistle 5:5-8',
    text: '"This place which thou seest — here are cast the spirits of sinners and blasphemers, and of those who work wickedness, and of those who pervert everything that the Lord hath spoken through the mouth of the prophets. For some of them are written and inscribed above in the heaven, in order that the angels may read them. And of those who have been put to shame by wicked men: who love God and loved neither gold nor silver nor any of the good things which are in the world, but gave over their bodies to torture."',
    theme: 'judgment',
  },
  {
    reference: '1 Enoch, Book 5, Epistle 2:42-44',
    text: '"Fear not the sinners, ye righteous — for again will the Lord deliver them into your hands, that ye may execute judgement upon them according to your desires. Woe to you who fulminate anathemas which cannot be reversed — healing shall therefore be far from you because of your sins. Woe to you who requite your neighbor with evil — for ye shall be requited according to your works. Be hopeful, ye righteous — for suddenly shall the sinners perish before you, and ye shall have lordship over them according to your desires."',
    theme: 'righteousness',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// CONVENIENCE HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Filter Jesus teachings by thematic tag */
export function getJesusTeachingsByTheme(theme: string): ScripturePassage[] {
  return JESUS_TEACHINGS.filter((p) => p.theme === theme)
}

/** Filter Enoch passages by thematic tag */
export function getEnochPassagesByTheme(theme: string): ScripturePassage[] {
  return BOOK_OF_ENOCH_PASSAGES.filter((p) => p.theme === theme)
}

/** Get all unique themes present in Jesus teachings */
export const JESUS_TEACHING_THEMES = [
  ...new Set(JESUS_TEACHINGS.map((p) => p.theme).filter(Boolean)),
] as string[]

/** Get all unique themes present in Enoch passages */
export const ENOCH_PASSAGE_THEMES = [
  ...new Set(BOOK_OF_ENOCH_PASSAGES.map((p) => p.theme).filter(Boolean)),
] as string[]

/** All books in the Ethiopian Bible canon as a flat array of strings */
export const ALL_ETHIOPIAN_BIBLE_BOOKS: string[] = ETHIOPIAN_BIBLE_BOOKS.flatMap(
  (part) => part.books
)
