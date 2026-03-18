export type PrayerCategory = 'war' | 'trafficking' | 'widows' | 'sick' | 'lost' | 'persecuted'

export interface PrayerRequest {
  id: string
  category: PrayerCategory
  body: string
  author: string
  prayCount: number
  createdAt: string
  isAnonymous: boolean
}

export const CATEGORY_META: Record<PrayerCategory, { icon: string; label: string; theme: string }> = {
  war:         { icon: '🕊️', label: 'Victims of War',        theme: 'theme-war' },
  trafficking: { icon: '⛓️', label: 'Trafficking Survivors', theme: 'theme-trafficking' },
  widows:      { icon: '👩‍👧', label: 'Widows & Orphans',     theme: 'theme-widows' },
  sick:        { icon: '🏥', label: 'The Sick',              theme: 'theme-sick' },
  lost:        { icon: '🌍', label: 'The Lost',              theme: 'theme-lost' },
  persecuted:  { icon: '🛡️', label: 'Persecuted Church',    theme: 'theme-persecuted' },
}

export const MOCK_PRAYERS: PrayerRequest[] = [
  {
    id: '1',
    category: 'war',
    body: "Pray for the children of Iran and Gaza who have lost everything — their homes, their fathers, their innocence. May the Lord of Hosts be their shield and refuge.",
    author: 'Anonymous',
    prayCount: 4721,
    createdAt: '3 min ago',
    isAnonymous: true,
  },
  {
    id: '2',
    category: 'trafficking',
    body: "For Maria, 16, rescued last week in Romania. She cannot speak yet. May the healing hand of Christ reach into the dark places no one else can reach.",
    author: 'Sister Agnes',
    prayCount: 8102,
    createdAt: '14 min ago',
    isAnonymous: false,
  },
  {
    id: '3',
    category: 'widows',
    body: "My mother buried my father last Tuesday after 43 years together. She sits in silence. Lord, be her Husband now. Comfort her in the night watches.",
    author: 'David M.',
    prayCount: 2339,
    createdAt: '28 min ago',
    isAnonymous: false,
  },
  {
    id: '4',
    category: 'sick',
    body: "Stage 4. They gave my son 6 months. He is 34. He has three children. I do not understand, but I trust. Please — intercede with me tonight.",
    author: 'Anonymous',
    prayCount: 19448,
    createdAt: '1 hr ago',
    isAnonymous: true,
  },
  {
    id: '5',
    category: 'persecuted',
    body: "Our brothers in northern Nigeria meet in secret. Three were arrested last month. Their families have no news. Stand in the gap — make up the hedge.",
    author: 'Open Doors',
    prayCount: 6881,
    createdAt: '2 hr ago',
    isAnonymous: false,
  },
  {
    id: '6',
    category: 'lost',
    body: "My brother James hasn't spoken to God in 12 years. He was hurt by the church. He is not the prodigal — he is the elder son. Lord, go after him anyway.",
    author: 'Rachel T.',
    prayCount: 3567,
    createdAt: '3 hr ago',
    isAnonymous: false,
  },
]
