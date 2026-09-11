import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HeartHandshake, ArrowRight, Sprout, Users } from "lucide-react";

export const metadata = {
  title: "Student Stories",
  description:
    "Real stories of students and families whose lives have been changed by St. John's School and The Joshua Foundation.",
};

const PALETTE = [
  { bg: "bg-rose-100", text: "text-rose-600" },
  { bg: "bg-amber-100", text: "text-amber-600" },
  { bg: "bg-emerald-100", text: "text-emerald-600" },
  { bg: "bg-sky-100", text: "text-sky-600" },
  { bg: "bg-violet-100", text: "text-violet-600" },
];

const MARQUEE_ROW_1 = [
  "/images/story2.webp",
  "/images/story1.webp",
  "/images/amarnath1.webp",
  "/images/mani.webp",
  "/images/story1(2).webp",
  "/images/amarnath5.webp",
  "/images/mani4.webp",
  "/images/story2(1).webp",
];

const MARQUEE_ROW_2 = [
  "/images/amarnath6.webp",
  "/images/mani1.webp",
  "/images/story1(1).webp",
  "/images/amarnath4.webp",
  "/images/mani3.webp",
  "/images/amarnath2.webp",
  "https://stjohnsindia.weebly.com/uploads/8/8/8/2/88828136/1473633027.png",
  "/images/amarnath3.webp",
];

const STORIES = [
  {
    tag: "2014 · Changing a village's mindset",
    title: "P. Umamaheswari & Prasanna — sisters who changed a village",
    images: ["/images/story2.webp", "/images/story2(1).webp"],
    richCard3: true,
    body: [
      "From a Gypsy-tribe family living hand-to-mouth on farm labour, Umamaheswari and her sister Prasanna were enrolled after a door-to-door visit in June 2014. Their father Munaiah, who was denied schooling himself, was determined his daughters would have a different life.",
      "Neighbors mocked the decision — English-medium school, for girls, in a family that could barely afford food? But as the sisters' speech, hygiene and confidence transformed, the same neighbors began asking Munaiah for help enrolling their own children.",
      "Five new applications came from that one village the following year. Munaiah became the first person in Parameswar Nagar to send his children to English-medium school — and opened the door for the rest of the village to follow.",
    ],
  },
  {
    tag: "2015 · First-year enrollment",
    title: "Ramija — the only girl from her village",
    img: "/images/Ramija.webp",
    richCard2: true,
    body: [
      "In St. John's very first year, Ramija's father saw no reason to spend on a 'girl child's' education while the family struggled financially. Her mother disagreed, and repeated visits from the school's founder slowly changed his mind.",
      "Ramija was the only student from her village that first year — and neighbors called her parents foolish for it. But as her English, behaviour and confidence visibly grew, minds changed.",
      "By 2015–16, nine more children from her village enrolled. By 2016–17, another eleven followed, plus eighteen from nearby villages. One family's decision became a community's transformation.",
    ],
  },
  {
    tag: "2015 · Family livelihood",
    title: "Ch. Premchandu — \"Forever indebted to God and to TJF\"",
    images: ["/images/story1.webp", "/images/story1(1).webp", "/images/story1(2).webp"],
    richCard: true,
    body: [
      "Premchandu, an LKG student from a Dalit Christian family, was often absent from school. When staff visited his home, his father Prabhakar explained: no permanent job, no land, unreliable daily wages of ₹200 — barely enough to survive, let alone pay for schooling.",
      "The very next day, TJF's board met and decided to help Prabhakar become self-employed. They gifted him an ice-cream storage freezer worth ₹2,000 — no repayment required — so he could sell ice cream door-to-door by bicycle.",
      "Within a week, Prabhakar was earning ₹400–500 profit a day, cleared his son's school dues, and began encouraging other parents on his rounds to enroll their children at St. John's for the following year.",
    ],
  },
  {
    tag: "Feb–May 2016 · A life saved",
    title: "Amaranad — a second chance at life",
    journey: [
      { src: "/images/amarnath1.webp", caption: "Meeting Amaranad" },
      { src: "/images/amarnath2.webp", caption: "Visiting the village" },
      { src: "/images/amarnath3.webp", caption: "The first check-up" },
      { src: "/images/amarnath4.webp", caption: "After surgery" },
      { src: "/images/amarnath6.webp", caption: "With his big sister" },
      { src: "/images/amarnath5.webp", caption: "Into all kinds of mischief" },
    ],
    body: [
      "In February and March 2016, a visiting partner team met baby Amaranad for the first time — the baby brother of a St. John's student, born with a severe cleft lip and palate. At just four months old he weighed only 9 pounds, and his parents, despite their best efforts, had little hope he would survive. When the team visited his village, his mother carried him straight over to one of the visitors, as if she somehow knew help had arrived.",
      "Back at their hotel that night, moved by what she'd seen, one of the visitors and her husband began searching for a way to help. They found a local Smile Train treatment center, downloaded an educational video on feeding an infant with a cleft lip and palate, and identified — and emailed — a doctor several hours away who could perform the surgery.",
      "A few days later, Karna brought Amaranad's family to the school, where Sandhya translated the video and shared everything the team had found. The family left encouraged and in tears of gratitude. After the visiting team returned home, Karna and Sandhya followed up with the Smile Train doctor and, with funds raised through The Joshua Foundation, accompanied the family to their first check-up — where TJF also purchased specialised feeding equipment and high-calorie infant formula to help Amaranad gain the weight he needed.",
      "Over the following months, Amaranad gained weight and took medicine to boost his blood count. In May 2016, the corrective surgery on his cleft lip was a complete success. When the family returned to their village, neighbors gathered to celebrate with them.",
      "Amaranad is healthy today — happy, mischievous, and full of life. He is the baby brother of a St. John's student, and everyone who was part of his story hopes that one day soon, he'll walk through the school's gates as a student himself.",
    ],
  },
  {
    tag: "Class of 2024–25",
    title: "Mani Kumari — An Icon of St. John's",
    feature: [
      {
        heading: "Background",
        image: "/images/mani.webp",
        imgW: 170,
        imgH: 255,
        body: "Mani Kumari joined St. John's at the age of four, coming from a Christian family background. She has two brothers and one sister, and is the youngest in her family. Her mother is a homemaker and her father a farmer.",
      },
      {
        heading: "Academic Performance & Personality",
        image: "/images/mani1.webp",
        imgW: 485,
        imgH: 364,
        body: "She was a wonderful student with a keen interest in learning, and we still remember her first day at St. John's. As the years passed, she became an excellent student — very attentive and eager to learn, kind and helpful to her classmates. Mani loved St. John's and thrived in the learning environment, actively involving herself in games, competitive exams and every activity on offer. Gentle and easy-going, her projects were selected as the best every time she competed with other students.",
      },
      {
        heading: "Challenges & Support",
        image: null,
        body: "In 9th grade, she faced numerous challenges and struggled to balance herself, feeling overwhelmed and disappointed. Her parents considered transferring her to another school, but the management intervened and counselled her. Karna and Sandhya took a keen personal interest in her case and spoke with her parents, asking them to give her one more chance — and they agreed, trusting St. John's and its management. The school promised to provide the support and comfort she needed, and made sure no harm would come to her.",
      },
      {
        heading: "Achievements",
        image: "/images/mani3.webp",
        imgW: 142,
        imgH: 213,
        body: "St. John's monitored her progress closely, and she excelled — scoring 535 out of 600 in her 10th-grade state board exams. She then received a prestigious scholarship of ₹35,00,000 for six years of study at IIIT, courtesy of the Government's talent program.",
      },
      {
        heading: "Outcome & Recognition",
        image: "/images/mani4.webp",
        imgW: 556,
        imgH: 417,
        body: "She became an outstanding student and an icon of St. John's. Her parents returned to express their gratitude for the school keeping its promise and nurturing Mani's talent. St. John's is always proud to be called a place of love, care, value and excellence — thanks to one and all for their generosity. God is at work.",
      },
    ],
  },
];

const RICH3_INDEX = STORIES.findIndex((s) => s.richCard3);
const RICH2_INDEX = STORIES.findIndex((s) => s.richCard2);
const RICH_INDEX = STORIES.findIndex((s) => s.richCard);
const JOURNEY_INDEX = STORIES.findIndex((s) => s.journey);
const RICH3_STORY = STORIES[RICH3_INDEX];
const BEFORE_RICH2 = STORIES.slice(RICH3_INDEX + 1, RICH2_INDEX);
const RICH2_STORY = STORIES[RICH2_INDEX];
const BETWEEN_RICH2_AND_RICH = STORIES.slice(RICH2_INDEX + 1, RICH_INDEX);
const RICH_STORY = STORIES[RICH_INDEX];
const BETWEEN_RICH_AND_JOURNEY = STORIES.slice(RICH_INDEX + 1, JOURNEY_INDEX);
const JOURNEY_STORY = STORIES[JOURNEY_INDEX];
const FEATURE_INDEX = STORIES.findIndex((s) => s.feature);
const FEATURE_STORY = STORIES[FEATURE_INDEX];
const AFTER_JOURNEY = STORIES.slice(JOURNEY_INDEX + 1, FEATURE_INDEX);

function StoryHeader({ story, index }) {
  const c = PALETTE[index % PALETTE.length];
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.bg} ${c.text} font-display text-sm font-bold transition-transform hover:scale-110`}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className={`inline-block rounded-full ${c.bg} ${c.text} text-xs font-semibold px-3 py-1`}>
        {story.tag}
      </p>
    </div>
  );
}

function StoryDivider() {
  return (
    <svg className="mx-auto -mt-8 mb-8 h-3 w-24 text-brick/25 sm:-mt-12 sm:mb-10" viewBox="0 0 100 12" fill="none">
      <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const PREMCHANDU_HIGHLIGHTS = [
  "LKG student",
  "ice-cream storage freezer worth ₹2,000",
  "ice cream door-to-door",
  "₹400–500 profit a day",
];

function highlightPhrases(text, phrases) {
  if (!phrases.length) return text;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  return text.split(pattern).map((part, idx) =>
    phrases.includes(part) ? (
      <span key={idx} className="font-semibold text-emerald-700">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function UmamaheswariRichCard({ story: s, index: i }) {
  return (
    <div className="grid gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:items-center">
      <Reveal direction="left" className="lg:col-span-6">
        <div className="aspect-[4/3] overflow-hidden rounded-[28px] shadow-xl">
          <Image
            src={s.images[0]}
            alt={s.title}
            width={720}
            height={540}
            className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="relative z-10 -mt-12 ml-auto w-1/2 rotate-2 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-paper transition-transform duration-500 hover:rotate-0 sm:w-2/5">
          <div className="aspect-[4/3]">
            <Image
              src={s.images[1]}
              alt={`${s.title} — visiting the village`}
              width={480}
              height={360}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-rose-700">
          <span>1 family</span>
          <ArrowRight className="h-3 w-3" />
          <Users className="h-4 w-4" />
          <ArrowRight className="h-3 w-3" />
          <span>5 new applications</span>
        </div>
        <p className="mt-1 text-center text-[11px] text-ink/50">
          From the same village, in the very next school year
        </p>
      </Reveal>

      <Reveal direction="right" delay={150} className="lg:col-span-6">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 font-display text-sm font-bold transition-transform hover:scale-110">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="inline-block rounded-full bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1">
            {s.tag}
          </p>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-semibold text-indigo leading-tight mb-5">
          {s.title}
        </h3>
        <div className="space-y-4">
          {s.body.map((p, j) => (
            <p key={j} className="text-ink/80 leading-relaxed text-[15.5px]">{p}</p>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function RamijaRichCard({ story: s, index: i }) {
  return (
    <div className="grid gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:items-center">
      <Reveal direction="left" className="lg:col-span-6">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-display text-sm font-bold transition-transform hover:scale-110">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="inline-block rounded-full bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1">
            {s.tag}
          </p>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-semibold text-indigo leading-tight mb-5">
          {s.title}
        </h3>
        <div className="space-y-4">
          {s.body.map((p, j) => (
            <p key={j} className="text-ink/80 leading-relaxed text-[15.5px]">{p}</p>
          ))}
        </div>
      </Reveal>

      <Reveal direction="right" delay={150} className="lg:col-span-6">
        <div className="aspect-[4/3] overflow-hidden rounded-[24px] shadow-lg">
          <Image
            src={s.img}
            alt={s.title}
            width={640}
            height={480}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-amber-700">
          <span>9</span>
          <ArrowRight className="h-3 w-3" />
          <span>11</span>
          <ArrowRight className="h-3 w-3" />
          <Users className="h-4 w-4" />
          <ArrowRight className="h-3 w-3" />
          <span>18</span>
        </div>
        <p className="mt-1 text-center text-[11px] text-ink/50">
          Children enrolled from her village and nearby, in the years that followed
        </p>
      </Reveal>
    </div>
  );
}

function PremchanduRichCard({ story: s, index: i }) {
  return (
    <div className="grid gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:items-start">
      <Reveal direction="left" className="lg:col-span-5">
        <div className="aspect-[4/3] overflow-hidden rounded-[24px] shadow-lg">
          <Image
            src={s.images[0]}
            alt={s.title}
            width={480}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-4 flex gap-3">
          {s.images.slice(1).map((src, idx) => (
            <div key={src} className="aspect-square flex-1 overflow-hidden rounded-2xl ring-1 ring-white shadow">
              <Image
                src={src}
                alt={`${s.title} — photo ${idx + 2}`}
                width={240}
                height={240}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700">
          <span>2015</span>
          <ArrowRight className="h-3 w-3" />
          <Sprout className="h-4 w-4" />
          <ArrowRight className="h-3 w-3" />
          <span>2016</span>
        </div>
      </Reveal>

      <Reveal direction="right" delay={150} className="lg:col-span-7">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-display text-sm font-bold transition-transform hover:scale-110">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="inline-block rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1">
            {s.tag}
          </p>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-semibold text-indigo leading-tight mb-5">
          {s.title}
        </h3>
        <div className="space-y-4">
          {s.body.map((p, j) => (
            <p key={j} className="text-ink/80 leading-relaxed text-[15.5px]">
              {highlightPhrases(p, PREMCHANDU_HIGHLIGHTS)}
            </p>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function ManiFeatureCard({ story: s, index: i }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:mb-20">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600 font-display text-sm font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="inline-block rounded-full bg-violet-100 text-violet-600 text-xs font-semibold px-3 py-1">
              {s.tag}
            </p>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-semibold text-indigo leading-tight">
            {s.title}
          </h3>
          <svg className="mx-auto mt-5 h-3 w-20 text-violet-300" viewBox="0 0 100 12" fill="none">
            <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-2 hidden h-[calc(100%-16px)] w-px -translate-x-1/2 bg-violet-200 sm:block" />

          <div className="space-y-12 sm:space-y-20">
            {s.feature.map((sec, idx) => {
              const portrait = sec.image && sec.imgH > sec.imgW;
              const imageFirst = idx % 2 === 0;
              return (
                <div key={sec.heading} className="relative">
                  <span className="absolute left-1/2 top-2 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 ring-[6px] ring-violet-100 sm:block" />

                  {sec.image ? (
                    <div
                      className={`grid items-center gap-6 sm:grid-cols-2 sm:gap-14 ${
                        !imageFirst ? "sm:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      <Reveal direction={imageFirst ? "left" : "right"} className={!imageFirst ? "sm:text-right" : ""}>
                        <div
                          className={`mx-auto overflow-hidden rounded-[22px] shadow-lg ring-1 ring-ink/5 ${
                            portrait ? "aspect-[3/4] max-w-[240px]" : "aspect-[4/3] max-w-sm"
                          } ${!imageFirst ? "sm:ml-auto sm:mr-0" : ""}`}
                        >
                          <Image
                            src={sec.image}
                            alt={`${s.title} — ${sec.heading}`}
                            width={portrait ? 480 : 640}
                            height={portrait ? 640 : 480}
                            className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </Reveal>
                      <Reveal direction={imageFirst ? "right" : "left"} delay={120}>
                        <h4 className="font-display text-lg font-semibold text-brick mb-2">{sec.heading}</h4>
                        <p className="text-ink/80 leading-relaxed text-[15.5px]">{sec.body}</p>
                      </Reveal>
                    </div>
                  ) : (
                    <Reveal direction="zoom" className="rounded-2xl bg-white shadow-sm border-l-4 border-brick py-6 pl-6 pr-6 sm:mx-auto sm:max-w-2xl">
                      <h4 className="font-display text-lg font-semibold text-brick mb-2">{sec.heading}</h4>
                      <p className="text-ink/80 leading-relaxed text-[15.5px]">{sec.body}</p>
                    </Reveal>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function StoryCard({ story: s, index: i, showDivider }) {
  return (
    <Reveal>
      {showDivider && <StoryDivider />}
      <article className="relative">
        <StoryHeader story={s} index={i} />
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
            {s.images ? (
              <div className="space-y-3">
                <div className="aspect-[4/3] overflow-hidden rounded-[20px] ring-1 ring-ink/10 shadow-lg">
                  <Image
                    src={s.images[0]}
                    alt={s.title}
                    width={640}
                    height={480}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex gap-3">
                  {s.images.slice(1).map((src, idx) => (
                    <div key={src} className="aspect-square flex-1 overflow-hidden rounded-2xl ring-1 ring-ink/10 shadow">
                      <Image
                        src={src}
                        alt={`${s.title} — photo ${idx + 2}`}
                        width={320}
                        height={320}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : s.img ? (
              <div className="aspect-[4/3] overflow-hidden rounded-[20px] ring-1 ring-ink/10 shadow-lg">
                <Image src={s.img} alt={s.title} width={560} height={640} className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" />
              </div>
            ) : (
              <div className="rounded-[20px] bg-indigo/95 h-64 sm:h-80 lg:h-full flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-grain" />
                <p className="relative font-display text-2xl sm:text-3xl text-paper/90 text-center leading-snug italic">
                  &ldquo;{s.title.split("—")[1]?.trim() || s.title}&rdquo;
                </p>
              </div>
            )}
          </div>
          <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-indigo leading-tight mb-5">
              {s.title}
            </h3>
            <div className="space-y-4">
              {s.body.map((p, j) => (
                <p key={j} className="text-ink/80 leading-relaxed text-[15.5px]">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function StoriesPage() {
  return (
    <>
      <section className="relative min-h-[480px] overflow-hidden bg-indigo-dark sm:min-h-[560px]">
        <div className="absolute inset-0 flex flex-col justify-center gap-3 py-4">
          <div className="flex w-max animate-marquee gap-3">
            {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((src, i) => (
              <div key={i} className="relative h-40 w-56 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lg sm:h-52 sm:w-72">
                <Image src={src} alt="" fill className="object-cover" sizes="288px" />
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-reverse gap-3">
            {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((src, i) => (
              <div key={i} className="relative h-40 w-56 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lg sm:h-52 sm:w-72">
                <Image src={src} alt="" fill className="object-cover" sizes="288px" />
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-dark via-indigo-dark/70 to-indigo-dark/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-dark/80 via-transparent to-indigo-dark/40" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brick/25 via-transparent to-marigold/10 mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent sm:h-32" />

        <svg className="pointer-events-none absolute left-4 top-6 h-16 w-16 text-marigold-light/25 sm:left-6 lg:left-8" viewBox="0 0 100 100">
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
          ))}
        </svg>

        <Reveal className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-marigold-light">
            Student Stories <ArrowRight className="h-3.5 w-3.5" />
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl lg:text-6xl">
            Lives changed, one family at a time
          </h1>
          <svg className="mt-5 h-3 w-20 text-marigold-light" viewBox="0 0 100 12" fill="none">
            <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">
            These are real families from Dantherapalli and the villages around it. Their stories are why The
            Joshua Foundation and St. John&rsquo;s School exist.
          </p>
        </Reveal>

        {/* Rotating seal — circular heading text spinning around the crest */}
        <Reveal direction="zoom" delay={200} className="absolute bottom-4 right-4 z-20 sm:bottom-8 sm:right-6 lg:right-10">
          <div className="relative h-16 w-16 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
            <div className="absolute inset-0 rounded-full bg-paper shadow-xl ring-1 ring-ink/10" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite]">
              <defs>
                <path id="storiesSealPath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
              </defs>
              <text className="fill-brick font-mono" fontSize="7.6" letterSpacing="2.5">
                <textPath href="#storiesSealPath" startOffset="0%">
                  REAL STORIES &#8226; REAL FAMILIES &#8226; REAL STORIES &#8226; REAL FAMILIES &#8226;
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-paper p-1 shadow-lg ring-2 ring-marigold sm:h-11 sm:w-11 sm:p-1.5 sm:ring-4 lg:h-12 lg:w-12">
                <Image
                  src="/images/logo.webp"
                  alt="St. John's School crest"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-leaf">Real Families, Real Change</p>
          <h2 className="font-display text-2xl font-bold text-brick sm:text-3xl">Five Stories. One Mission.</h2>
          <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-brick" />
          <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
            Behind every statistic on this site is a family who took a chance on St. John&rsquo;s. Here are five
            of their stories, in the order they happened.
          </p>
        </Reveal>
      </section>

      {/* Umamaheswari & Prasanna — full-bleed, pastel-rose feature */}
      <section className="bg-rose-50 py-16 sm:py-20">
        <UmamaheswariRichCard story={RICH3_STORY} index={RICH3_INDEX} />
      </section>

      {BEFORE_RICH2.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="space-y-16 sm:space-y-24">
            {BEFORE_RICH2.map((s, i) => (
              <StoryCard key={s.title} story={s} index={RICH3_INDEX + 1 + i} showDivider={i > 0} />
            ))}
          </div>
        </section>
      )}

      {/* Ramija — full-bleed, pastel-amber feature */}
      <section className="bg-amber-50 py-16 sm:py-20">
        <RamijaRichCard story={RICH2_STORY} index={RICH2_INDEX} />
      </section>

      {BETWEEN_RICH2_AND_RICH.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="space-y-16 sm:space-y-24">
            {BETWEEN_RICH2_AND_RICH.map((s, i) => (
              <StoryCard key={s.title} story={s} index={RICH2_INDEX + 1 + i} showDivider={i > 0} />
            ))}
          </div>
        </section>
      )}

      {/* Premchandu — full-bleed, pastel-mint feature */}
      <section className="bg-emerald-50 py-16 sm:py-20">
        <PremchanduRichCard story={RICH_STORY} index={RICH_INDEX} />
      </section>

      {BETWEEN_RICH_AND_JOURNEY.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="space-y-16 sm:space-y-24">
            {BETWEEN_RICH_AND_JOURNEY.map((s, i) => (
              <StoryCard key={s.title} story={s} index={RICH_INDEX + 1 + i} showDivider={i > 0} />
            ))}
          </div>
        </section>
      )}

      {/* Amaranad — full-bleed, pastel-blue feature */}
      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="grid gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
          <Reveal direction="left" className="lg:col-span-5">
            <StoryHeader story={JOURNEY_STORY} index={JOURNEY_INDEX} />
            <h3 className="font-display text-3xl sm:text-4xl font-semibold text-indigo leading-tight mb-5">
              {JOURNEY_STORY.title}
            </h3>
            <div className="space-y-4">
              {JOURNEY_STORY.body.slice(0, 3).map((p, j) => (
                <p key={j} className="text-ink/80 leading-relaxed text-[15.5px]">{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={100} className="lg:col-span-7">
            <h4 className="font-display text-xl font-semibold text-indigo mb-4">
              The Journey of {JOURNEY_STORY.title.split("—")[0].trim()}
            </h4>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {JOURNEY_STORY.journey.map((step, idx) => (
                <Reveal key={step.src} direction="zoom" delay={idx * 90}>
                  <div className="aspect-square overflow-hidden rounded-2xl ring-1 ring-ink/10 shadow">
                    <Image
                      src={step.src}
                      alt={`${JOURNEY_STORY.title} — ${step.caption}`}
                      width={360}
                      height={360}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {idx + 1}. {step.caption}
                  </p>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {JOURNEY_STORY.body.slice(3).map((p, j) => (
                <p key={j} className="text-ink/80 leading-relaxed text-[15.5px]">{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {AFTER_JOURNEY.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="space-y-16 sm:space-y-24">
            {AFTER_JOURNEY.map((s, i) => (
              <StoryCard key={s.title} story={s} index={JOURNEY_INDEX + 1 + i} showDivider={i > 0} />
            ))}
          </div>
        </section>
      )}

      {/* Mani Kumari — full-bleed, pastel-violet timeline feature */}
      <section className="bg-violet-50 py-16 sm:py-20">
        <ManiFeatureCard story={FEATURE_STORY} index={FEATURE_INDEX} />
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-gradient-to-br from-black via-indigo-dark to-black px-6 py-12 text-center sm:px-14 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-marigold/25 blur-3xl animate-drift-a" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-brick/25 blur-3xl animate-drift-b" />
            <HeartHandshake className="relative mx-auto h-8 w-8 text-marigold-light animate-pulse" strokeWidth={1.5} />
            <p className="relative mt-4 font-mono text-xs uppercase tracking-[0.2em] text-marigold-light">
              Five stories told &bull; 225+ more like them
            </p>
            <h3 className="relative mt-3 font-display text-xl font-semibold text-paper sm:text-2xl">
              Every story here started with one decision
            </h3>
            <p className="relative mx-auto mt-2 max-w-lg text-sm leading-relaxed text-paper/80 sm:text-base">
              These five are just a glimpse — 225+ children at St. John&rsquo;s carry stories like theirs.
              A family chose to enroll, a sponsor chose to make it possible, and the next story is already
              being written.
            </p>
            <Link
              href="/donate"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3 text-sm font-semibold text-indigo-dark shadow-lg transition-all hover:bg-marigold-light hover:-translate-y-0.5"
            >
              Be Part of the Next Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
