export interface Quote {
  text: string
  author: string
  source: string
  scripture?: string | null
}

export interface Category {
  id: string
  icon: string
  label: string
  bgGradient: string
  isDesertMothers?: boolean
  quotes: Quote[]
}

export const CATEGORIES: Category[] = [
  {
    id: 'god',
    icon: '✝️',
    label: 'God & the Soul',
    bgGradient: 'radial-gradient(ellipse at 30% 20%, rgba(26,35,126,0.45) 0%, transparent 60%), linear-gradient(180deg, #080a1a 0%, #080910 100%)',
    quotes: [
      { text: "How mistaken are those people who seek happiness outside of themselves, in foreign lands and journeys, in riches and glory, in great possessions and pleasures, in diversions and vain things, which have a bitter end! Happiness is found within ourselves, and blessed is the man who has understood this.", author: "St. Theophan the Recluse", source: "The Spiritual Life", scripture: null },
      { text: "Happiness is a pure heart, for such a heart becomes the throne of God. What can be lacking to them? Nothing, nothing at all! For they have God Himself.", author: "St. Nicholas Cabasilas", source: "Seven Sermons on the Life in Christ, II", scripture: '"I will visit them, and will walk in them, and I will be a God to them." — II Cor. 6:16' },
      { text: "No matter how much we may study, it is not possible to come to know God unless we live according to His commandments, for God is not known by science, but by the Holy Spirit.", author: "St. Silouan the Athonite", source: "Writings, I.11", scripture: null },
      { text: "When the soul knows the love of God by the Holy Spirit, then he clearly feels that the Lord is our own Father — the closest, dearest Father, the best. And there is no greater happiness than to know God.", author: "St. Silouan the Athonite", source: "Writings, I.21", scripture: null },
      { text: "A man becomes spiritual insofar as he lives a spiritual life. He begins to see God in all things, to see His power and might in every manifestation.", author: "St. John of Kronstadt", source: "My Life in Christ, I.5", scripture: null },
      { text: "Every Christian should find for himself the imperative and incentive to become holy. If you live without struggle and without hope of becoming holy, then you are Christians only in name and not in essence.", author: "St. Philaret of Moscow", source: "Sermon of September 23, 1847", scripture: null },
      { text: "The fear of God illumines the soul, annihilates evil, weakens the passions, drives darkness from the soul and makes it pure. The fear of God is the summit of wisdom.", author: "St. Ephraim the Syrian", source: "Ascetic Works", scripture: null },
    ],
  },
  {
    id: 'prayer',
    icon: '🙏🏽',
    label: 'Prayer & Fasting',
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(127,0,0,0.35) 0%, transparent 60%), linear-gradient(180deg, #100608 0%, #080910 100%)',
    quotes: [
      { text: "The mystery of prayer consists in the keeping of God's commandments. Hear God in His commandments, so that He might hear you in your prayers.", author: "St. Justin Popovich", source: "Explanation of I John, 3:22", scripture: null },
      { text: "Give your intentions in prayer to God. And do not ask that everything will be according to your will, because a man does not know what is profitable for him. But say to God: Let Thy will be done!", author: "St. Gennadius of Constantinople", source: "The Golden Chain, 47", scripture: null },
      { text: "Love is the fruit of prayer. Patiently abiding in prayer signifies a man's renunciation of himself. Therefore the self-denial of the soul turns into love for God.", author: "St. Isaac the Syrian", source: "Homily, 43", scripture: null },
      { text: "The true purpose of our Christian life is the acquisition of the Holy Spirit of God. But fasting, prayer, alms, and every good deed done for the sake of Christ is a means to the attainment of the Holy Spirit.", author: "St. Seraphim of Sarov", source: "On the Acquisition of the Holy Spirit", scripture: null },
      { text: "If we weave by day and undo at night, nothing gets woven. If we pray to God and do evil before Him, nothing is woven, and a house for our soul is not built.", author: "St. Nicholas of Serbia", source: "Thoughts on Good and Evil", scripture: null },
    ],
  },
  {
    id: 'love',
    icon: '❤️',
    label: 'Love & Mercy',
    bgGradient: 'radial-gradient(ellipse at 40% 20%, rgba(74,0,114,0.4) 0%, transparent 60%), linear-gradient(180deg, #0c0610 0%, #080910 100%)',
    quotes: [
      { text: "If you find that there is no love in you, but you want to have it, then do deeds of love, even though you do them without love in the beginning. The Lord will see your desire and striving and will put love in your heart.", author: "St. Ambrose of Optina", source: "Collected Letters", scripture: null },
      { text: "Whoever sees in himself the traces of hatred toward any man on account of any kind of sin is completely foreign to the love of God.", author: "St. Maximus the Confessor", source: "Chapters on Love, 1.15", scripture: null },
      { text: "It is joyful to feel that we do not and cannot have any enemies among men, but only unhappy brethren, who are deserving of pity and help. We have only one enemy: the devil and his evil spirits.", author: "St. John of Kronstadt", source: "My Life in Christ", scripture: null },
      { text: "Whoever prays for those who hurt him lays the demons low; but he who opposes his affronter is bound to the demons.", author: "St. Mark the Ascetic", source: "Homilies, 1.45", scripture: null },
      { text: "If you show compassion to one who is suffering, you will be numbered among the martyrs. If you forgive one who has insulted you, not only will all your sins be forgiven, but you will be a child of the Heavenly Father.", author: "Anonymous Desert Father", source: "Ancient Patericon", scripture: null },
    ],
  },
  {
    id: 'humility',
    icon: '🕊️',
    label: 'Humility & Repentance',
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(0,77,64,0.4) 0%, transparent 60%), linear-gradient(180deg, #050e0b 0%, #080910 100%)',
    quotes: [
      { text: "Nothing is more opposed to God than pride. Thus more than anything, humility is acceptable to God, which considers itself nothing, and attributes all goodness, honor, and glory to God alone.", author: "St. Theophan the Recluse", source: "Letters on the Spiritual Life", scripture: null },
      { text: "Do not say: 'I have sinned much, and therefore I am not bold enough to fall down before God.' Do not despair. For He said, 'he who comes to Me I will not cast out.'", author: "St. John of the Ladder", source: "The Ladder of Divine Ascent", scripture: '"He who comes to Me I will not cast out." — John 6:37' },
      { text: "If someone has repented once of a sin, and again does the same sin, this is a sign that he has not been cleansed of the causes of the sin, wherefrom, as from a root, the shoots spring forth again.", author: "St. Basil the Great", source: "Ascetic Works", scripture: null },
      { text: "Do not lose your temper with those who sin. Everyone will give an answer for himself before God. But correct your own sins, your own heart.", author: "St. John of Kronstadt", source: "My Life in Christ, I.6", scripture: null },
    ],
  },
  {
    id: 'warfare',
    icon: '⚔️',
    label: 'Spiritual Warfare',
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(100,70,0,0.4) 0%, transparent 60%), linear-gradient(180deg, #0e0b04 0%, #080910 100%)',
    quotes: [
      { text: "Without temptations, it is not possible to learn the wisdom of the Spirit. Before temptations, a man prays to God as a stranger. When temptations are allowed to come, and he does not give in to them, then he stands before God as a sincere friend.", author: "St. Isaac the Syrian", source: "Homilies, 5", scripture: null },
      { text: "The devil makes small sins seem smaller in our eyes, for otherwise he cannot lead us to greater evil.", author: "St. Mark the Ascetic", source: "Homilies, 2:94", scripture: null },
      { text: "Get up again. If you fall a hundred times, rise up again.", author: "Abba Sisoes", source: "Ancient Patericon", scripture: null },
      { text: "Conquer temptations by patience and prayer. If you oppose them without these, you will fall all the more severely.", author: "St. Mark the Ascetic", source: "Homilies, 2.106", scripture: null },
    ],
  },
  {
    id: 'virtue',
    icon: '🌿',
    label: 'The Virtuous Life',
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(26,35,126,0.3) 0%, rgba(127,0,0,0.2) 50%, transparent 70%), linear-gradient(180deg, #080910 0%, #080910 100%)',
    quotes: [
      { text: "How can you find out if you are living within the will of God? Here is the sign: If you are troubled about anything, this means that you have not completely given yourself over to the will of God. Whatever happens, she says: 'Thus it pleases God.'", author: "St. Silouan the Athonite", source: "Writings, VI.4", scripture: null },
      { text: "As fire is not extinguished by fire, so anger is not conquered by anger, but is made even more inflamed. But meekness often subdues even the most beastly enemies.", author: "St. Tikhon of Zadonsk", source: "Works", scripture: null },
      { text: "The worst kind of sin is not to acknowledge that you are sinful.", author: "St. Caesarius of Arles", source: "Commentary on I John, 1:8", scripture: null },
      { text: "Afflictions for God's sake are dearer to Him than any prayer or sacrifice.", author: "St. Isaac the Syrian", source: "Homilies, 58", scripture: null },
    ],
  },
  {
    id: 'eternity',
    icon: '✨',
    label: 'Last Things',
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(40,30,70,0.5) 0%, transparent 60%), linear-gradient(180deg, #08070e 0%, #080910 100%)',
    quotes: [
      { text: "Don't be deceived regarding the knowledge of what will be after your death: what you sow here, you will reap there. Here is the work, there the reward; here the struggle, there the crowns.", author: "St. Barsanuphius the Great", source: "Instructions, 606", scripture: null },
      { text: "A certain monk asked St. Anthony the Great, 'What must I do to be saved?' The elder answered him: 'Don't trust in your own righteousness, don't worry about what's past, and constrain your tongue and your stomach.'", author: "St. Anthony the Great", source: "Ancient Patericon, 1.2", scripture: null },
      { text: "One should not seek among others the truth that can be easily gotten from the Church. For in her, as in a rich treasury, the apostles have placed all that pertains to truth. She is the door of life.", author: "St. Irenaeus of Lyons", source: "Against Heresies, III.4", scripture: null },
    ],
  },
  // Desert Fathers — Silence
  {
    id: 'desert-silence',
    icon: '🏜️',
    label: 'Desert Fathers — Silence',
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(160,100,20,0.4) 0%, transparent 60%), linear-gradient(180deg, #0e0b05 0%, #080910 100%)',
    quotes: [
      { text: "A man who keeps silent is found wise; those who speak much are like gates creaking in the wind.", author: "Abba Poemen", source: "", scripture: null },
      { text: "Silence is the mystery of the world to come; words are the instrument of this world.", author: "Abba Isaac", source: "", scripture: null },
      { text: "If you love peace, be silent.", author: "Abba Moses the Black", source: "", scripture: null },
      { text: "It is better to remain silent than to speak without profit.", author: "Abba Arsenius", source: "", scripture: null },
      { text: "He who loves God loves silence.", author: "Abba Poemen", source: "", scripture: null },
      { text: "Sitting in silence is greater than preaching great sermons.", author: "Abba Macarius the Great", source: "", scripture: null },
      { text: "Many times I have spoken and regretted it, but never have I kept silent and been sorry.", author: "Abba Arsenius", source: "", scripture: null },
      { text: "Through silence you find the presence of God.", author: "Anonymous Desert Father", source: "", scripture: null },
      { text: "To speak is to disperse, to be silent is to gather.", author: "Anonymous Desert Father", source: "", scripture: null },
      { text: "Withdraw into yourself and your heart will become a temple of God.", author: "Abba Macarius the Great", source: "", scripture: null },
    ],
  },
  // Desert Fathers — Humility
  {
    id: 'desert-humility',
    icon: '🌾',
    label: 'Desert Fathers — Humility',
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(0,77,64,0.35) 0%, transparent 60%), linear-gradient(180deg, #050e0b 0%, #080910 100%)',
    quotes: [
      { text: "He who is humble is not easily angered or moved.", author: "Abba John the Dwarf", source: "", scripture: null },
      { text: "If you see someone who is always humble, know that he is filled with the Holy Spirit.", author: "Abba Poemen", source: "", scripture: null },
      { text: "Humility is the only path to virtue.", author: "Abba Macarius the Great", source: "", scripture: null },
      { text: "The foundation of all virtue is humility.", author: "Abba Poemen", source: "", scripture: null },
      { text: "God descends only into the humble soul.", author: "Abba Anthony the Great", source: "", scripture: null },
      { text: "He who humbles himself is exalted by God.", author: "Abba Poemen", source: "", scripture: null },
      { text: "The one who knows his weaknesses is greater than he who works miracles.", author: "Abba Isaac the Syrian", source: "", scripture: null },
      { text: "Do not trust in your own righteousness, do not grieve over a thing that is past, and be moderate in your words.", author: "Abba Poemen", source: "", scripture: null },
    ],
  },
  // Desert Fathers — Prayer
  {
    id: 'desert-prayer',
    icon: '🕯️',
    label: 'Desert Fathers — Prayer',
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(26,35,126,0.45) 0%, transparent 60%), linear-gradient(180deg, #080a1a 0%, #080910 100%)',
    quotes: [
      { text: "Prayer is the seed of gentleness and the absence of anger.", author: "Abba Isaac the Syrian", source: "", scripture: null },
      { text: "As much as you can, strive to lift up your mind to God in constant prayer.", author: "Abba Anthony the Great", source: "", scripture: null },
      { text: "When you pray, do not multiply words as the heathen do, but speak with the heart to God.", author: "Abba Macarius the Great", source: "", scripture: null },
      { text: "The greater the struggle in prayer, the greater the presence of God.", author: "Abba Evagrius Ponticus", source: "", scripture: null },
      { text: "If you cannot be still, you cannot pray.", author: "Abba John the Short", source: "", scripture: null },
      { text: "The soul that does not pray is like a house without a roof.", author: "Anonymous Desert Father", source: "", scripture: null },
      { text: "Nothing is equal to prayer; for what is impossible, it makes possible.", author: "St. John Chrysostom", source: "", scripture: null },
      { text: "To pray is to go directly to God with one's whole heart.", author: "Anonymous Desert Father", source: "", scripture: null },
    ],
  },
  // Desert Mothers — Wisdom
  {
    id: 'mothers-wisdom',
    icon: '🌹',
    label: 'Desert Mothers — Wisdom',
    isDesertMothers: true,
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(136,14,79,0.45) 0%, rgba(26,35,126,0.2) 70%, transparent 100%), linear-gradient(180deg, #0e0610 0%, #080910 100%)',
    quotes: [
      { text: "Just as a tree cannot bear fruit if it is always being transplanted, so a monk or nun who is forever moving from place to place will bear no fruit. Abide. Put down roots in God.", author: "Amma Syncletica", source: "Sayings of the Desert Mothers", scripture: null },
      { text: "In the beginning, there are a great many battles and a good deal of suffering for those who are advancing toward God, and afterwards — unspeakable joy. It is like those who wish to light a fire: at first they are choked by the smoke and cry, and by this means obtain what they seek.", author: "Amma Syncletica", source: "Sayings of the Desert Mothers", scripture: null },
      { text: "It is possible to be a solitary in one's mind while living in a crowd; and it is possible for one who is a solitary to live in the crowd of their own thoughts.", author: "Amma Moses", source: "Sayings of the Desert Mothers", scripture: null },
      { text: "I put out my foot to ascend to heaven, and I do not remember that I have a body. This is humility.", author: "Amma Sarah", source: "Sayings of the Desert Mothers", scripture: null },
      { text: "I have never allowed a thought against any sister to enter my heart, and I have never wished that anyone who has wronged me would suffer for it.", author: "Amma Sarah", source: "Sayings of the Desert Mothers", scripture: null },
      { text: "Silence guards the fire of the heart. Words let it out, but silence gathers it in.", author: "Amma Theodora", source: "Sayings of the Desert Mothers", scripture: null },
    ],
  },
  // Desert Mothers — Water of Life
  {
    id: 'mothers-water',
    icon: '💧',
    label: 'Desert Mothers — Water of Life',
    isDesertMothers: true,
    bgGradient: 'radial-gradient(ellipse at 50% 20%, rgba(0,77,120,0.45) 0%, rgba(136,14,79,0.2) 70%, transparent 100%), linear-gradient(180deg, #040e14 0%, #080910 100%)',
    quotes: [
      { text: "Neither asceticism, nor vigils, nor any kind of suffering are able to save. Only true humility can do that.", author: "Amma Theodora", source: "Sayings of the Desert Mothers", scripture: null },
      { text: "Let us strive to enter by the narrow gate. Just as the trees, if they have not stood before the winter's storms, cannot bear fruit, so it is with us.", author: "Amma Syncletica", source: "Sayings of the Desert Mothers", scripture: null },
      { text: "Among those who struggle, some win and some fail. But no one who cries out to God in the struggle is abandoned. Thirst for Him — and He will come to you like a river.", author: "Amma Melania the Elder", source: "Sayings of the Desert Mothers", scripture: '"Whoever drinks the water I give them will never thirst." — John 4:14' },
      { text: "Do not be troubled when you see others honored and yourself neglected. God considers not the outward honor but the intention of the heart. Root yourself in love and you will flourish like a rose in the desert.", author: "Amma Syncletica", source: "Sayings of the Desert Mothers", scripture: null },
    ],
  },
]
