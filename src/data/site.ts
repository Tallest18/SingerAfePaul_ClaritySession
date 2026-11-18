/**
 * All website copy and data lives here, so it can be updated without
 * touching any layout code.
 */
import type { LucideIcon } from 'lucide-react'
import {
  BookOpenText,
  CalendarDays,
  Compass,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  Microscope,
  MicVocal,
  Music2,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sprout,
  Users,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Contact & socials                                                  */
/* ------------------------------------------------------------------ */
export const contact = {
  phoneDisplay: '+234 706 867 7504',
  phoneHref: 'tel:+2347068677504',
  whatsappNumber: '2347068677504',
  email: 'singerafepaul@gmail.com',
  handle: 'singer_afe_paul',
}

export type SocialKey = 'instagram' | 'facebook' | 'youtube' | 'linkedin'

export const socials: { key: SocialKey; label: string; href: string; handle: string }[] = [
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/singer_afe_paul', handle: '@singer_afe_paul' },
  { key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/18tJYnuDGk/', handle: 'Singer Afe Paul' },
  { key: 'youtube', label: 'YouTube', href: 'https://youtube.com/@singerafepaul01', handle: '@singerafepaul01' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/afe-aduragbemi', handle: 'Afe Aduragbemi' },
]

export const youtubeChannel = 'https://youtube.com/@singerafepaul01'

/** Google Form used to book a Personal Clarity Session. */
export const clarityBookingUrl = 'https://forms.gle/GR9e3KxShGuf7u6m6'

/* ------------------------------------------------------------------ */
/*  Brand story                                                        */
/* ------------------------------------------------------------------ */
export const narrative = {
  lead: 'Singer Afe Paul is a music brand known for meaningful music, healthy musicianship, Quality Music Education, seasoned social research with the intersection of gospel music, value-first approach to service, music consultancy and integrity at its core.',
  identity:
    'Singer Afe Paul shares a very close identity with Aduragbemi Paul Afe, who spearheads the brand.',
  intention:
    'To model wholesome musicianship through direct or indirect encounters in services, partnership and relationship.',
  intentionTagline: 'A one-stop junction for anything music!',
  motivation:
    'To become a music brand where humanity can negotiate meaning, wholesomeness and success for their lives.',
}

export type Pillar = { title: string; text: string; icon: LucideIcon }

export const pillars: Pillar[] = [
  { title: 'Meaningful music', text: 'Songs written and sung to reach the heart, not just the ear.', icon: Music2 },
  { title: 'Healthy musicianship', text: 'Skill, character and wellbeing growing together.', icon: Sprout },
  { title: 'Quality Music Education', text: 'Voice, violin and theory taught with clarity and care.', icon: GraduationCap },
  { title: 'Gospel music research', text: 'Seasoned social research where gospel music meets everyday life.', icon: Microscope },
  { title: 'Value-first service', text: 'Every engagement starts with what truly serves you.', icon: HandHeart },
  { title: 'Music consultancy', text: 'Practical counsel for events, personal ministries and music projects.', icon: Lightbulb },
  { title: 'Integrity at the core', text: 'Honest work, kept promises and a clean conscience.', icon: ShieldCheck },
]

/* ------------------------------------------------------------------ */
/*  "I need…" — the problems the brand solves                          */
/* ------------------------------------------------------------------ */
export type Need = {
  id: string
  need: string
  answer: string
  text: string
  icon: LucideIcon
  /** internal page that goes deeper on this need */
  to?: string
  toLabel?: string
}

export const needs: Need[] = [
  {
    id: 'learn',
    need: 'I need to learn something in music',
    answer: 'Music education',
    text: 'Voice, violin, music theory and general musicianship — structured lessons that build real skill and confidence, at your pace.',
    icon: GraduationCap,
  },
  {
    id: 'plan-event',
    need: 'I need to plan a musical event',
    answer: 'Music consultancy & event planning',
    text: 'From concept and programme flow to selecting musicians, rehearsals and sound — plan an event that serves its purpose beautifully.',
    icon: CalendarDays,
  },
  {
    id: 'choir',
    need: 'I need to train my choir',
    answer: 'Choir training & clinics',
    text: 'Vocal technique, blend, repertoire and a healthy rehearsal culture for choirs and music teams that want to grow.',
    icon: Users,
  },
  {
    id: 'perform',
    need: 'I need people to sing/play at an event',
    answer: 'Ministration & performance',
    text: 'Book Singer Afe Paul, or a dependable team of singers and instrumentalists, for your service, concert, wedding or celebration.',
    icon: MicVocal,
  },
  {
    id: 'career',
    need: 'I need to start my music career',
    answer: 'Career guidance',
    text: 'Find your sound, your story and your next steps — with honest guidance on building a music career with integrity.',
    icon: Rocket,
  },
  {
    id: 'talk',
    need: 'I need to talk to someone!',
    answer: 'Clarity Talks',
    text: 'A safe, confidential conversation. Sometimes you simply need someone to listen, ask the right questions and help you think.',
    icon: HeartHandshake,
    to: '/clarity-talks',
    toLabel: 'About Clarity Talks',
  },
  {
    id: 'buy',
    need: 'I need to buy something',
    answer: 'Music & resources',
    text: 'Listen to and support the music — tracks, albums and videos — and ask about other available music resources.',
    icon: ShoppingBag,
    to: '/music',
    toLabel: 'Tracks & albums',
  },
  {
    id: 'research',
    need: 'I need a music research mentor',
    answer: 'Research mentorship',
    text: 'Guidance for students and researchers working where music, faith and society meet — from shaping a topic to presenting findings.',
    icon: BookOpenText,
    to: '/research',
    toLabel: 'Music research',
  },
  {
    id: 'clarity',
    need: 'I need clarity!',
    answer: 'Personal Clarity Session',
    text: 'Untangle decisions about life, purpose, career, ministry or music in a focused one-on-one session.',
    icon: Compass,
    to: clarityBookingUrl,
    toLabel: 'Book a session',
  },
]

/* ------------------------------------------------------------------ */
/*  Booking — everything a visitor can book from the "Book now" menu   */
/* ------------------------------------------------------------------ */
export type Booking = { id: string; label: string; hint: string; icon: LucideIcon; to: string }

/**
 * `to` opens the contact form with the matching "I need…" option pre-selected.
 * Clarity Sessions are booked through their own Google Form (opens in a new tab).
 */
const bookFor = (needId: string) => `/contact?need=${needId}#message-form`

export const bookings: Booking[] = [
  { id: 'clarity', label: 'Personal Clarity Session', hint: 'Virtual or in person · booking form', icon: Compass, to: clarityBookingUrl },
  { id: 'learn', label: 'Music lessons', hint: 'Voice, violin & music theory', icon: GraduationCap, to: bookFor('learn') },
  { id: 'choir', label: 'Choir training', hint: 'Clinics, rehearsals & vocal technique', icon: Users, to: bookFor('choir') },
  { id: 'perform', label: 'Ministration / performance', hint: 'Singers & instrumentalists for your event', icon: MicVocal, to: bookFor('perform') },
  { id: 'plan-event', label: 'Event planning & consultancy', hint: 'Plan a musical event that works', icon: CalendarDays, to: bookFor('plan-event') },
  { id: 'career', label: 'Music career guidance', hint: 'Start or grow your music career', icon: Rocket, to: bookFor('career') },
  { id: 'research', label: 'Research mentorship', hint: 'Guidance for music researchers', icon: BookOpenText, to: bookFor('research') },
]

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
export type Shade = {
  to: string
  title: string
  short: string
  blurb: string
  icon: LucideIcon
}

export const shades: Shade[] = [
  {
    to: '/clarity-talks',
    title: 'Clarity Talks with Singer Afe Paul',
    short: 'Clarity Talks',
    blurb: 'Personal Clarity Sessions — virtual or in person — to help you see your next step clearly.',
    icon: Sparkles,
  },
  {
    to: '/music',
    title: 'Singer Afe Paul Tracks & Albums',
    short: 'Tracks & Albums',
    blurb: 'Original gospel music, the Lord of Christmas album, the #oldskool series and more.',
    icon: Music2,
  },
  {
    to: '/research',
    title: 'Music Research',
    short: 'Music Research',
    blurb: 'Seasoned social research at the intersection of gospel music — and mentorship for researchers.',
    icon: Microscope,
  },
  {
    to: '/about',
    title: 'Who is Aduragbemi Paul Afe?',
    short: 'Who is Afe Paul?',
    blurb: 'The person who spearheads the brand — singer, instructor, researcher and consultant.',
    icon: Users,
  },
]

/* ------------------------------------------------------------------ */
/*  Clarity Talks                                                      */
/* ------------------------------------------------------------------ */
export type Plan = {
  id: string
  name: string
  price: string
  unit?: string
  detail: string
  points: string[]
  note?: string
  featured?: boolean
}

export const plans: Plan[] = [
  {
    id: 'hourly',
    name: 'Hourly Diet',
    price: '₦20k',
    unit: '/ hour',
    detail: 'Virtual',
    points: ['One focused hour', 'Held online, wherever you are', 'Ideal for a single pressing question'],
  },
  {
    id: 'one-month',
    name: 'One Month Diet',
    price: '₦100k',
    unit: '/ 8 hours',
    detail: '8 hours across one month',
    points: ['8 hours of sessions', 'Work through a season, step by step', 'Room to reflect between sessions'],
    note: 'Saves ₦60k vs. 8 hourly sessions',
    featured: true,
  },
  {
    id: 'three-months',
    name: 'Three Months Diet',
    price: '₦200k',
    detail: 'Three months',
    points: ['A three-month journey', 'Consistent accountability', 'For deep, lasting change'],
  },
  {
    id: 'physical',
    name: 'Physical',
    price: 'Negotiable',
    detail: 'In person',
    points: ['Face-to-face sessions', 'Workspace included', 'Refreshment included'],
    note: 'Based on negotiation',
  },
]

export const claritySteps = [
  { title: 'Choose your diet', text: 'Pick the hourly, one-month, three-month or physical option that fits your season.' },
  { title: 'Fill the booking form', text: 'Tell us a little about yourself in the short booking form — or reach out on WhatsApp.' },
  { title: 'Book a time', text: 'Agree on a date and time that works for you, online or in person.' },
  { title: 'Talk & gain clarity', text: 'Speak freely, think clearly and leave with your next steps in view.' },
]

/**
 * Reviews from Clarity Talks clients.
 * TODO: Replace these placeholders with real reviews (with each client's permission).
 */
export const reviews: { quote: string; name: string; detail: string }[] = [
  {
    quote:
      'Add a real client review here — what they were carrying before the session, and the clarity they walked away with.',
    name: 'Client name',
    detail: 'Hourly Diet · Virtual',
  },
  {
    quote:
      'Add a second review here. Short, honest quotes work best — two or three sentences about the experience.',
    name: 'Client name',
    detail: 'One Month Diet',
  },
  {
    quote:
      'Add a third review here. You can mention the plan they used so new visitors can relate to their journey.',
    name: 'Client name',
    detail: 'Three Months Diet',
  },
]

/* ------------------------------------------------------------------ */
/*  Music — taken from the Singer Afe Paul YouTube channel             */
/* ------------------------------------------------------------------ */
export type Video = {
  id: string // YouTube video id
  title: string
  credit?: string
  tag: 'Original' | 'Lord of Christmas' | '#oldskool' | 'Covers & more'
}

export type FeaturedRelease = Video & {
  lyricId: string
  year: string
  /** small label above the title, e.g. "Featured single" or "New release" */
  label: string
  blurb: string
  /**
   * Optional MP3 to play right on the page (hero player). Put the file in
   * `public/audio/` and set e.g. '/audio/my-song.mp3'. Without it, the hero
   * player opens a small YouTube player in place instead.
   */
  audioSrc?: string
}

export const featuredRelease: FeaturedRelease = {
  id: 'iFceLFafr3Q',
  lyricId: 'Mc9wPcdMrgM',
  title: 'Nature Song',
  credit: 'ft. Timothy Demo',
  tag: 'Original',
  year: '2024',
  label: 'Featured single',
  blurb: 'Produced by Masters’ Piece Studios — available with an official lyric video.',
}

export const album = {
  title: 'Lord of Christmas',
  kind: 'Album',
  blurb:
    'The first-ever Christmas album from Singer Afe Paul — an original title track alongside fresh takes on beloved carols, from country to rock.',
  fullMixId: 'i16k3Pkvbl4',
  /** video whose thumbnail is used as the album sleeve */
  coverId: 'utL1mr4YpT8',
  tracks: [
    { id: 'utL1mr4YpT8', title: 'Lord of Christmas', credit: 'Original song' },
    { id: 'e-9RwAmwe5o', title: 'Fall on Your Knees', credit: "ft. C'Classic" },
    { id: 'Tc0TH7LLJEw', title: "I'll Be Home for Christmas" },
    { id: 'n5_eAqrQzzM', title: 'Jingle Bell Rock', credit: 'ft. King Hector' },
    { id: 'D3MHcnaah8I', title: "Mary's Boy Child (Long Time Ago)" },
    { id: 'CxusDRQv4sg', title: 'Mary Did You Know', credit: 'Country' },
  ],
}

export const videos: Video[] = [
  { id: 'iFceLFafr3Q', title: 'Nature Song', credit: 'ft. Timothy Demo', tag: 'Original' },
  { id: '0-GxSOTu_oo', title: 'Ife Aidibaje', credit: 'Official music video · Afro-Western gospel', tag: 'Original' },
  { id: 'E0LpSzWTnjM', title: 'The Prince of Joy', credit: 'A wedding musical · ft. Wizeking', tag: 'Original' },
  { id: 'fuHPxTPOg5E', title: 'Small Letter gods', credit: 'Worship · Acoustic', tag: 'Original' },
  { id: '61RWbZxKLoI', title: 'Prove It', credit: 'Hymntonics', tag: 'Original' },
  { id: 'cDRUl7qNiBU', title: "My Saviour's Love", credit: 'Testimony song', tag: 'Original' },
  { id: 'ZerMSu5VNPg', title: 'Glorify Your Name', credit: 'Easter praises', tag: 'Original' },
  { id: 'utL1mr4YpT8', title: 'Lord of Christmas', credit: 'Title track', tag: 'Lord of Christmas' },
  { id: 'e-9RwAmwe5o', title: 'Fall on Your Knees', credit: "ft. C'Classic", tag: 'Lord of Christmas' },
  { id: 'n5_eAqrQzzM', title: 'Jingle Bell Rock', credit: 'ft. King Hector', tag: 'Lord of Christmas' },
  { id: '8u6xIKcLg6Q', title: 'I Will Carry Jesus Up', credit: '#oldskool gospel series', tag: '#oldskool' },
  { id: 'uKobWrVW4tk', title: 'I Have a Living Hope', credit: '#oldskool · Track 2', tag: '#oldskool' },
  { id: 'ulYET6i_pgM', title: "Jesus Na 'Bigi' Man", credit: '#oldskool 3 · Story version', tag: '#oldskool' },
  { id: 'Ff9fE4gQALs', title: 'My Lifetime', credit: '#oldskool 4 · My birth story', tag: '#oldskool' },
  { id: 'a50lXyKz0X8', title: 'The Most Melodious Nigerian Anthem', tag: 'Covers & more' },
  { id: 'kYimjgoV4Gw', title: 'Beautiful Day', credit: 'Acoustic cover', tag: 'Covers & more' },
  { id: '1wcnp9lArk4', title: 'Do-Re-Mi', credit: 'Acoustic cover · The Sound of Music', tag: 'Covers & more' },
  { id: 'kC9LbHJqoPY', title: 'Do you know I play violin too?', tag: 'Covers & more' },
]

export const ytThumb = (id: string, quality: 'hq' | 'sd' | 'maxres' = 'hq') =>
  `https://i.ytimg.com/vi/${id}/${quality}default.jpg`

export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`

/* ------------------------------------------------------------------ */
/*  Music research                                                     */
/* ------------------------------------------------------------------ */
export const researchAreas: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Gospel music & society',
    text: 'How gospel music shapes — and is shaped by — the communities, cultures and everyday lives around it.',
    icon: Users,
  },
  {
    title: 'Meaning & message',
    text: 'What songs say, how they are heard, and how listeners negotiate meaning through music.',
    icon: Sparkles,
  },
  {
    title: 'Healthy musicianship',
    text: 'The habits, ethics and wellbeing of musicians who serve on stages, in studios and in churches.',
    icon: Sprout,
  },
  {
    title: 'Music education',
    text: 'Teaching and learning music well — from choir rehearsals to one-on-one instruction.',
    icon: GraduationCap,
  },
]

export const mentorshipSupport = [
  'Shaping a clear, researchable topic',
  'Choosing a sound methodology',
  'Finding and reviewing the right literature',
  'Planning fieldwork, interviews and observation',
  'Writing, structuring and refining your work',
  'Preparing to present or defend your findings',
]
