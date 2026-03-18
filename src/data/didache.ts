/**
 * didache.ts
 *
 * The Didache — The Teaching of the Twelve Apostles
 * Early Christian text, c. 1st–early 2nd century AD
 * Source: Saint Ignatius Orthodox Press edition, © 2013, 2019, 2024
 *
 * Tier 3 — Theology & Liturgy. Eric personally reviews all changes to this file.
 */

export interface DidacheSection {
  id: string
  part: string
  title: string
  icon: string
  intro?: string
  passages: DidachePassage[]
}

export interface DidachePassage {
  heading?: string
  text: string
  scripture?: string
}

export const DIDACHE_SECTIONS: DidacheSection[] = [
  {
    id: 'two-ways-life',
    part: 'Part I — The Two Ways',
    title: 'The Way of Life',
    icon: '🕊️',
    intro: 'There are two ways, one of life and one of death, and there is a great difference between the two ways.',
    passages: [
      {
        heading: 'The First Commandment',
        text: 'The way of life is this. First of all, you shall love the God who made you. Second, love your neighbor as yourself. And all things you would not want done to you, do not do to another person.',
        scripture: 'Lev. 19:18; Matt. 22:37–39; Matt. 7:12',
      },
      {
        heading: 'Love Your Enemies',
        text: 'Bless those who curse you, and pray for your enemies, and fast for those who persecute you. For what credit is it to you, if you love those who love you? But you should love those who hate you, and you will not have an enemy.',
        scripture: 'Luke 6:27–28; Matt. 5:44',
      },
      {
        heading: 'Generosity',
        text: 'If anyone strikes you on your right cheek, turn the other cheek to him also, and you will be perfect. If anyone compels you to go one mile, go with him for two miles. If anyone takes away your coat, give him your shirt also.',
        scripture: 'Matt. 5:39–41',
      },
      {
        heading: 'Give Freely',
        text: 'To anyone who asks something of you, give it to him, and do not ask for it back, for the Father desires that gifts be given to all from His own riches. Blessed is he who gives charitably according to the commandment, for he is blameless.',
        scripture: 'Luke 6:30; Matt. 5:42',
      },
    ],
  },
  {
    id: 'two-ways-commandments',
    part: 'Part I — The Two Ways',
    title: 'The Second Commandment',
    icon: '⚖️',
    passages: [
      {
        text: 'You shall not murder. You shall not commit adultery. You shall not steal. You shall not practice magic. You shall not practice sorcery. You shall not murder a child by abortion, nor kill a child at birth. You shall not covet your neighbor\'s things.',
        scripture: 'Ex. 20:13–17',
      },
      {
        text: 'You shall not commit perjury. You shall not bear false witness. You shall not speak evil. You shall not bear a grudge. You shall not be double-minded nor double-tongued, for the double tongue is a snare of death. Your words shall not be false or empty, but fulfilled in your actions.',
        scripture: 'Ex. 20:16; Zech. 5:3',
      },
      {
        text: 'You shall not be greedy, nor a swindler, nor a hypocrite, nor bad-tempered, nor proud. You shall not plot against your neighbor. You shall not hate any man, but you shall reprove some, and you shall pray for others, and others you shall love more than your own life.',
      },
    ],
  },
  {
    id: 'two-ways-fences',
    part: 'Part I — The Two Ways',
    title: 'The Fences',
    icon: '🌿',
    intro: 'My child, flee from every evil thing, and everything that is like it.',
    passages: [
      {
        text: 'Do not be angry, for anger leads to murder. Do not be jealous, nor argumentative, nor hot-tempered; for all of these things give birth to murder.',
      },
      {
        text: 'Do not be lustful, for lust leads to sexual promiscuity. Do not speak obscenely, and do not have wandering eyes; for all of these things give birth to promiscuity.',
      },
      {
        text: 'Do not deal in omens, since it leads to idolatry. Do not be an enchanter, nor an astrologer, nor a magician — do not even be around such things; for all of these things give birth to idolatry.',
      },
      {
        text: 'Be meek, for the meek shall inherit the earth. Be patient, and merciful, and sincere, and quiet, and kind, and always fearing the words which you have heard.',
        scripture: 'Ps. 37:11; Matt. 5:5',
      },
      {
        text: 'Do not praise yourself, and do not let arrogance enter your soul. Walk only with the righteous and the humble. Whatever happens to you, accept it as good, knowing that nothing is done without God.',
      },
      {
        text: 'Every day, seek out the company of the saints, that you may find rest in their words. Do not cause division, but bring peace between those who dispute. Judge righteously.',
        scripture: 'Heb. 13:7; Deut. 1:16–17',
      },
      {
        text: 'Do not turn away from anyone who is in need, but share everything with your brother, and do not say that anything is your own. For if you all share in the heavenly things, how much more in earthly things?',
        scripture: 'Acts 4:32',
      },
      {
        text: 'Never forsake the Lord\'s commandments. But you shall guard the things which you have received, neither adding to them nor taking away from them.',
        scripture: 'Deut. 4:2',
      },
    ],
  },
  {
    id: 'two-ways-death',
    part: 'Part I — The Two Ways',
    title: 'The Way of Death',
    icon: '⚠️',
    intro: 'But the way of death is this. First of all, it is evil and full of curses.',
    passages: [
      {
        text: 'Murder, adultery, lust, promiscuity, theft, idolatry, magical arts, witchcraft, robbery, false testimony, hypocrisy, duplicity, treachery, pride, malice, stubbornness, greed, foul language, jealousy, arrogance, pride, and boasting.',
        scripture: 'Matt. 15:19; Rom. 1:29; Gal. 5:20',
      },
      {
        text: 'Persecutors of good men, hating truth, loving a lie, not knowing the reward of righteousness, not adhering to the good nor to good judgment, alert to evil rather than to good — neither gentle nor patient; loving worthless things, pursuing a reward, not having mercy on the poor, not working for the downtrodden, murderers of children, turning away from the needy, oppressing the afflicted, advocates of the rich, unjust judges of the poor — sinful in every way. May you be delivered, my children, from all these things.',
      },
    ],
  },
  {
    id: 'baptism',
    part: 'Part II — Instructions for Catechumens',
    title: 'Concerning Baptism',
    icon: '💧',
    passages: [
      {
        text: 'Having instructed him in all of these teachings, baptize the catechumen in the Name of the Father, and of the Son, and of the Holy Spirit, in running water. But if you do not have running water, then baptize in other water. And if you cannot in cold water, use warm. But if you have neither, then pour water on the head three times, in the Name of the Father, and of the Son, and of the Holy Spirit.',
        scripture: 'Matt. 28:19',
      },
      {
        text: 'Before the baptism, let both the baptizer and the catechumen fast, and also any others who are able. And be sure that the catechumen fasts a day or two before.',
      },
    ],
  },
  {
    id: 'fasting',
    part: 'Part II — Instructions for Catechumens',
    title: 'Concerning Fasting',
    icon: '🌑',
    passages: [
      {
        text: 'Do not let your fasts fall on the same days as the hypocrites, for they fast on Mondays and Thursdays. Keep your fast on Wednesdays and Fridays.',
        scripture: 'Matt. 6:16',
      },
    ],
  },
  {
    id: 'prayer',
    part: 'Part II — Instructions for Catechumens',
    title: 'Concerning Prayer',
    icon: '🙏🏽',
    passages: [
      {
        heading: 'The Lord\'s Prayer',
        text: 'Do not pray as the hypocrites, but pray as the Lord commanded in His Gospel: Our Father, who art in heaven, hallowed be thy Name; thy kingdom come; thy will be done, on earth as it is in heaven; give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from the evil one; for thine is the power and the glory unto ages of ages.',
        scripture: 'Matt. 6:5–13',
      },
      {
        text: 'Pray this way three times each day.',
      },
    ],
  },
  {
    id: 'eucharist',
    part: 'Part II — Instructions for Catechumens',
    title: 'Concerning the Eucharist',
    icon: '🍷',
    intro: 'Now concerning the eucharistic thanksgiving, give thanks in this way.',
    passages: [
      {
        heading: 'Over the Cup',
        text: 'We give you thanks, our Father, for the holy vine of your son David, which you made known to us through your Son Jesus. Yours is the glory unto ages of ages.',
        scripture: 'John 15:1; Acts 3:13',
      },
      {
        heading: 'Over the Bread',
        text: 'We give you thanks, our Father, for the life and knowledge which you made known to us through your Son Jesus. Yours is the glory unto ages of ages. As this broken bread was scattered upon the mountains and being gathered together became one, so may your Church be gathered together from the ends of the earth into your kingdom. For yours is the glory and the power through Jesus Christ unto ages of ages.',
        scripture: 'John 3:15, 6:68',
      },
      {
        heading: 'After the Eucharist',
        text: 'We give you thanks, holy Father, for your holy Name, which you have made to dwell in our hearts, and for the knowledge and faith and immortality, which you have made known unto us through your Son Jesus. Yours is the glory unto ages of ages.',
        scripture: 'John 1:14; Rev. 4:11',
      },
      {
        heading: 'The Church',
        text: 'Remember, Lord, your Church, and deliver it from all evil and perfect it in Thy love. Gather it from the four winds — this sanctified Church — into Your kingdom which You have prepared for it.',
        scripture: 'Matt. 16:18; John 17:15',
      },
      {
        heading: 'Who May Receive',
        text: 'Do not let anyone eat or drink of this Eucharist who has not been baptized into the Name of the Lord, for concerning this the Lord has said, "Do not give the holy things to the dogs."',
        scripture: 'Matt. 7:6',
      },
    ],
  },
]
