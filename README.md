# Singer Afe Paul — website

The website for the **Singer Afe Paul** music brand and **Clarity Talks with Singer Afe Paul**.

Built with React + TypeScript + Vite, styled with **Tailwind CSS v4**, and finished with:

| Library | Used for |
| --- | --- |
| `motion` | scroll reveals, page transitions, menus, the video lightbox |
| `lenis` | smooth scrolling |
| `react-router-dom` | the multi-page routes |
| `lucide-react`, `react-icons` | interface and social icons |
| `@fontsource-variable/fraunces` + `jost` | editorial serif headings and geometric sans body text |

## Run it

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: the narrative, the intention and motivation, the "I need…" list, Clarity Talks, music, other shades |
| `/clarity-talks` | Clarity Talks with Singer Afe Paul: services and prices, how it works, reviews, links |
| `/music` | Singer Afe Paul Tracks & Albums: latest release, the *Lord of Christmas* album, the video collection |
| `/research` | Music Research: areas of inquiry, research mentorship |
| `/about` | Who is Aduragbemi Paul Afe? |
| `/contact` | Contact details and a form that opens WhatsApp or email with the message filled in |

## Editing content

Almost all text lives in **`src/data/site.ts`**: contact details, social links, the narrative, the nine "I need…" items, Clarity Talks prices, reviews and the music list.

- **Reviews**: the `reviews` array holds placeholder text. Replace it with real client reviews before launch.
- **Music**: each entry in `videos` / `album.tracks` is a YouTube video id. Thumbnails and the player come from YouTube automatically, so adding a song only needs its id and title.
- **Prices**: edit the `plans` array.

Images are in `src/assets/img/`.

## Deploying

`vercel.json` is included so that page routes work on Vercel. On Netlify, add a `public/_redirects` file containing `/* /index.html 200`.
