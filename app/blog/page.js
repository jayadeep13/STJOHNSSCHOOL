import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getBlogPosts } from "@/lib/blogPosts";
import {
  Calendar,
  MessageCircle,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Plane,
  Syringe,
  Building2,
  Newspaper,
} from "lucide-react";

const HERO_HIGHLIGHTS = [
  { icon: Plane, label: "Trip Reports", bg: "bg-sky-100", color: "text-sky-700" },
  { icon: Syringe, label: "Pandemic Updates", bg: "bg-emerald-100", color: "text-emerald-700" },
  { icon: Building2, label: "Construction News", bg: "bg-amber-100", color: "text-amber-600" },
  { icon: Newspaper, label: "School Life", bg: "bg-rose-100", color: "text-rose-500" },
];

export const metadata = {
  title: "Blog",
  description:
    "Journal entries and trip reports from Dantherapalli — pandemic updates, construction milestones and firsthand visits from St. John's School.",
};
export const dynamic = "force-dynamic";

const PALETTE = [
  { bg: "bg-rose-100", text: "text-rose-600" },
  { bg: "bg-amber-100", text: "text-amber-600" },
  { bg: "bg-emerald-100", text: "text-emerald-600" },
  { bg: "bg-sky-100", text: "text-sky-600" },
];

const STATIC_POSTS = [
  {
    id: "pandemic-2020-2021",
    tag: "Pandemic Update",
    title: "St. John's During The Pandemic 2020–2021",
    date: "December 13, 2021",
    publishedAt: Date.parse("2021-12-13"),
    images: [
      { src: "/images/blog (1)-alt.webp", alt: "A teacher receiving her Covid-19 vaccination at school" },
      { src: "/images/blog (2)-alt.webp", alt: "Covid-19 testing at St. John's, staff in PPE" },
      { src: "/images/blog (3)-alt.webp", alt: "Staff distributing masks to families in the village" },
      { src: "/images/blog (4)-alt.webp", alt: "Volunteers sorting vegetables and rice for family food packages" },
      { src: "/images/blog (5)-alt.webp", alt: "Staff handing out bags of rice to families" },
      { src: "/images/blog (19).webp", alt: "Students back in the classroom wearing masks" },
    ],
    body: [
      "Just wanted to write and update you all on how St. John's has been doing since the start of the pandemic - it's been a crazy ride for so many of us, so we apologize for the lack of communication!",
      "Like many schools in the US, St. John's was asked to shut down in March of 2020. Since their “summer break” is generally April/May, the students only missed a few weeks of the end of the 2019-2020 school year. Although the lock down in India was necessary, it really took a toll on many families, as many parents and primary caregivers were left without any income. During this time, Karnas', Sandhya and some others at St. John's coordinated a distribution of food (vegetables and rice) to 50 families in 10 villages.",
      "In June of 2020, the start of the normal school year, St. John's began classes by Zoom for 1st-6th graders, and recorded lessons and assigned homework by WhatsApp for the LKG and UKG students. At first, many of the students didn't have internet access, but over time, many were able to access a smart phone through friends or relatives so they could continue participating in classes. In August 2020, the Indian government allowed schools to open up in-person classes for 5th and 6th graders, with strict Covid-19 safety guidelines in place. And in January 2021, St. John's was allowed to open up in-person classes for 1st-4th graders as well. Two hundred of the 284 enrolled students returned to the school.",
      "At the end of March 2021, the “second wave” of Covid-19 hit India very hard, and all schools were again shut down. St. John's students, however, were able to complete the school year online through Zoom and WhatsApp. The second lock down again brought about severe financial struggles for many local families, and the staff at St. John's visited many villages, handing out masks and bags of rice to about 100 families.",
      "Vaccination for teachers began in June of 2021 and school was allowed to re-open for in-person classes in August. St. John's is now fully operational with 286 students attending. Although some parents have been slow to send their children back to school, St. John's hopes to increase enrollment to 360 students by the end of the school year.",
      "St. John's has been blessed and has been a blessing to others during the pandemic and we are so thankful for God's provision and protection during these difficult 18+ months.",
    ],
  },
  {
    id: "returning-feb-2018",
    tag: "Trip Report",
    title: "Returning from St. John's, February, 2018",
    date: "March 29, 2018",
    author: "Valerie",
    publishedAt: Date.parse("2018-03-29"),
    images: [
      { src: "/images/blog (16).webp", alt: "Valerie and Tracey with a St. John's family" },
      { src: "/images/blog (21).webp", alt: "Valerie and Tracey with staff and students under the St. John's School - India banner" },
      { src: "/images/blog (15).webp", alt: "Valerie with a staff couple at St. John's" },
      { src: "/images/blog (17).webp", alt: "A mother holding her young son at St. John's" },
      { src: "/images/blog (18).webp", alt: "Students holding up their chalkboards outside the school" },
    ],
    body: [
      "I wanted to let you know that I got home from India on Feb. 13 - safe and sound and with a very full heart. From the moment we arrived in India until we were on the plane heading home, our days were full to overflowing. Tracey was a great partner in this adventure!",
      "This was my 4th trip to visit Karna's and family and St. John's School. My time with my family was precious. The time at school amazing. And then there is all the other great stuff that happened. With each trip, I leave a little more of my heart in India and bring a little more of my Indian family and St. John's School home with me. I always struggle with how to summarize and share the zillions of moments that make a trip like this so meaningful and memorable. There are the big moments and so many small ones that join hands to fill my heart with so much joy and gratitude. I am missing my family in India and the staff and students of St. John's so much.",
      "Please see the photos below, including the one of Amaranad, the little boy we met on my February 2016 trip to St. John's - you can read about him under the “Stories” link. He has grown so much, and is so healthy now - what a joy to see his family again. He is really “all boy” - and has a scrape on his nose in my recent photos to prove it!",
      "Please never hesitate to ask about my trip - I have so many other great stories to tell and I love to share them.",
      "For now, thank you so much for all your encouragement and prayers! They were very evident throughout our visit.",
    ],
    signoff: "God bless you.",
  },
  {
    id: "construction-done-2016",
    tag: "Construction Update",
    title: "The Construction Is Done!",
    date: "September 22, 2016",
    publishedAt: Date.parse("2016-09-22"),
    images: [
      { src: "/images/blog (13).webp", alt: "The new St. John's School building, Dantherapalli, with staff, students and visitors" },
      { src: "/images/blog (7).webp", alt: "Students performing a dance at the building inauguration" },
      { src: "/images/blog (11).webp", alt: "Ribbon-cutting ceremony for the new building" },
      { src: "/images/blog (6).webp", alt: "Honoring guests from The Talking Tech Foundation on stage" },
      { src: "/images/blog (8).webp", alt: "Students on stage at the building inauguration ceremony" },
      { src: "/images/blog (9).webp", alt: "Crowd of students, families and guests at the inauguration" },
      { src: "/images/blog (12).webp", alt: "Students marching with flags at the inauguration" },
      { src: "/images/blog (10).webp", alt: "Families seated under the tent at the inauguration" },
      { src: "/images/blog (14).webp", alt: "The completed St. John's School building" },
    ],
    body: [
      "Construction of the first section of permanent buildings at St. John's was finished at the end of August, 2016, and on September 10th, a great celebration was had! In attendance at the building inauguration were over 550 people, including students, family members, staff, neighbors and friends of the ministry. Special guests from The Talking Tech Foundation attended and were honored for making the new building possible - thank you Talking Tech!",
      "The new building includes new classrooms, a library, a computer lab, and a girls' bathroom block.",
    ],
  },
  {
    id: "india-trip-feb-2016",
    tag: "Trip Report",
    title: "India Trip, Feb/March, 2016",
    date: "September 8, 2016",
    publishedAt: Date.parse("2016-09-08"),
    images: [
      { src: "/images/blog (4).webp", alt: "The full preK–1st class of 76 students, with staff and visiting team" },
      { src: "/images/blog (20).webp", alt: "The visiting team of five with a St. John's family" },
      { src: "/images/blog (2).webp", alt: "Students holding up their craft projects with the visiting team" },
      { src: "/images/blog (1).webp", alt: "Two boys showing off their paper sheep crafts" },
      { src: "/images/blog (3).webp", alt: "Students seated for a special class during the visit" },
      { src: "/images/blog (23).webp", alt: "A student wearing craft glasses and holding a paper heart" },
      { src: "/images/blog (22).webp", alt: "Students wearing their craft glasses" },
      { src: "/images/blog (5).webp", alt: "The visiting team with staff at St. John's" },
    ],
    body: [
      "This post contains a report from our visit to St. John's in February/March, 2016:",
      "I had prayed for one person to go to India with me but instead God gave me the privilege of bringing four wonderful and uniquely gifted people to go with me to visit the people I love and the ministry I am passionate about. Our team (Jay, Pam & George C., Alexia and me) bonded well with each other and with the folks from India. Together, we worked hard, laughed, played and shared our lives. Karna and his team took great care of us – honoring us, hosting us, and joyfully meeting all our needs.",
      "Flexibility was key! Not everything that had been planned happened, but the things that were supposed to get done did (including some unexpected and wonderful things – see Amaranad's story under “stories”). We faced some challenges (visa issues, stitches, cranky stomachs, etc.) that could have discouraged or derailed us, but everyone rose to the challenges and God was victorious!",
      "We spent our first few days in India in Hyderabad with Karna's friend and his family, while most of the team was getting their first taste of India. We worshiped together on Sunday at a “home church” and did some sight seeing the rest of the time. We had a wonderful time.",
      "After a long day of travel, we spent the next five days in Karna & Sandy's community and at St. John's School. The days were long and packed with full days at the school, church meetings, community visits, adventures around town, business meetings for the school, eating, hanging out and sharing our lives with family and new friends. We loved and were loved in the name of Jesus. It was fantastic!",
      "We were all very impressed with what we saw and experienced at St. John's School. Meeting the staff and the 76 students - 58 boys and 18 girls in grades preK to 1st - was wonderful and so encouraging. The staff is amazing – such a faithful, loving and sacrificial group of men and women serving the students, the school and the community in challenging circumstances. Their commitment and hard work is evident in the students' lives. It is obvious that the students feel safe and loved at school. The students are great! They are bright, they have learned and are learning so much, their English is improving, they pick things up quickly, they are well behaved and well disciplined, confident and seem to be thriving. God is clearly at work touching lives and making an impact on the students, their families and the community through the staff and the school.",
      "While we were at St. John's, we taught lessons (Bible stories, science, health lessons), sang, danced, did crafts, acted silly, hung out and had fun! “Simon Says” was a favorite game and they were rarely fooled! (When they were saying their good-byes on the last day, they said, “Simon says, don't go!”) We were so impressed by how comfortable and capable the students were. The days were long, full, hot and tiring but the children's energy recharged us whenever we started to fade. Each child was a delight and captured our hearts! They were all so wonderful, enthusiastic and full of joy that it was sometimes easy to forget how difficult their lives are!",
      "Since we have been home, a lot has happened at the school. Construction of the first five permanent school rooms continues – to be completed in August/September, 2016. The students took year-end exams and did very well making their parents and the staff very happy. The school year ended mid-April with a celebration attended by family members and neighbors celebrating the children's successful year. The school will resume in early June with four grades (preK – 2nd) and about 130 students. The staff is busy preparing for the upcoming year, including visiting the various villages and encouraging enrollment of new students.",
      "As the school grows, there continue to be many needs and challenges, as well as many opportunities to reach out to the students, their families and their communities. Please, continue to pray for the staff, students and their families.",
    ],
    prayerPoints: [
      { text: "Pray for the needs of the school and the finances needed to accomplish them. Consider sponsoring a student, or contributing to TJF's general fund. It is amazing how little it takes to do so much!", donate: true },
      { text: "Pray for wisdom and strength for the staff and their families as they faithfully and sacrificially serve the students, their families and the school." },
      { text: "Pray for continued protection for the staff, students, and school." },
    ],
  },
];

function normalizeDynamicPost(p) {
  return {
    id: p.id,
    tag: p.tag || "Update",
    title: p.title,
    date: p.date,
    author: p.author || undefined,
    images: (p.images || []).map((src) => ({ src, alt: p.title })),
    body: String(p.body || "")
      .split(/\n\s*\n/)
      .map((s) => s.trim())
      .filter(Boolean),
    publishedAt: p.publishedAt || 0,
  };
}

function PostGallery({ images, theme }) {
  if (!images || images.length === 0) return null;
  const [lead, ...rest] = images;

  return (
    <div className="mt-7">
      <div className="group relative h-[300px] w-full overflow-hidden rounded-[26px] shadow-xl sm:h-[440px] lg:h-[560px]">
        <Image
          src={lead.src}
          alt={lead.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 900px, 100vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <span className={`absolute left-4 top-4 rounded-full ${theme.bg} ${theme.text} px-3 py-1 text-xs font-semibold shadow-sm`}>
          {theme.label}
        </span>
      </div>
      {rest.length > 0 && (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {rest.map((img) => (
            <div key={img.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 33vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BlogPost({ post, index }) {
  const theme = { ...PALETTE[index % PALETTE.length], label: post.tag };
  return (
    <Reveal direction="up">
      <article className={index > 0 ? "border-t border-ink/10 pt-14" : ""}>
        <div className="mb-4 flex flex-wrap items-center gap-2.5">
          <span className={`rounded-full ${theme.bg} ${theme.text} px-3 py-1 text-xs font-semibold`}>{post.tag}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/40">
            <MessageCircle className="h-3.5 w-3.5" />0 Comments
          </span>
        </div>

        <h2 className="font-display text-3xl font-semibold leading-tight text-indigo sm:text-4xl">{post.title}</h2>
        {post.author && <p className="mt-2 text-sm italic text-ink/50">by {post.author}</p>}

        <PostGallery images={post.images} theme={theme} />

        <div className="mt-8 space-y-4">
          {post.body.map((p, i) => (
            <p key={i} className="text-[16px] leading-relaxed text-ink/75">
              {p}
            </p>
          ))}
        </div>

        {post.prayerPoints && (
          <ul className="mt-6 space-y-3">
            {post.prayerPoints.map((pt, i) => (
              <li key={i} className="flex gap-3 rounded-xl bg-ink/[0.03] p-4">
                <CheckCircle2 className={`h-5 w-5 shrink-0 ${theme.text}`} strokeWidth={1.75} />
                <p className="text-sm leading-relaxed text-ink/75">
                  {pt.text}
                  {pt.donate && (
                    <>
                      {" "}
                      <Link
                        href="/donate"
                        className="font-semibold text-brick underline underline-offset-2 hover:text-brick-dark"
                      >
                        Sponsor a student
                      </Link>
                      .
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        )}

        {post.signoff && <p className="mt-6 font-display text-lg italic text-ink/60">{post.signoff}</p>}
      </article>
    </Reveal>
  );
}

export default async function BlogPage() {
  const dynamicPosts = await getBlogPosts();
  const allPosts = [...dynamicPosts.map(normalizeDynamicPost), ...STATIC_POSTS].sort(
    (a, b) => (b.publishedAt || 0) - (a.publishedAt || 0)
  );
  const heroCollageImages = allPosts.map((p) => p.images?.[0]).filter(Boolean).slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-paper to-emerald-50/60">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-marigold/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />

        <svg
          className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-brick/10 sm:right-8 lg:right-12"
          viewBox="0 0 100 100"
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={8 + (i % 5) * 12} cy={8 + Math.floor(i / 5) * 12} r="2" fill="currentColor" />
          ))}
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_440px] lg:items-center">
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-2.5">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink/60">Blog</p>
                <span className="h-px w-8 bg-emerald-700" />
              </div>

              <h1 className="font-display text-4xl font-bold leading-[1.08] sm:text-5xl">
                <span className="text-emerald-800">Updates from</span>{" "}
                <span className="text-orange-500">the Field</span>
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-ink/65 sm:text-base">
                Journal entries and trip reports from Dantherapalli &mdash; pandemic updates, construction
                milestones and firsthand visits, straight from the people who&rsquo;ve been on the ground
                since 2016.
              </p>

              <Link
                href="#latest-post"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-paper shadow-md transition-all hover:-translate-y-0.5 hover:bg-emerald-900"
              >
                Read Latest Post <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {heroCollageImages.length > 0 && (
              <div className="hidden justify-center lg:flex">
                <div className="w-[440px] overflow-hidden rounded-[26px] shadow-2xl ring-[6px] ring-paper">
                  <div className="flex h-[300px] flex-col gap-1 bg-paper">
                    {heroCollageImages[0] && (
                      <div className="relative h-[176px] w-full shrink-0">
                        <Image src={heroCollageImages[0].src} alt={heroCollageImages[0].alt} fill className="object-cover" sizes="440px" />
                      </div>
                    )}
                    <div className="grid flex-1 grid-cols-2 gap-1">
                      {heroCollageImages[1] && (
                        <div className="relative">
                          <Image src={heroCollageImages[1].src} alt={heroCollageImages[1].alt} fill className="object-cover" sizes="220px" />
                        </div>
                      )}
                      {heroCollageImages[2] && (
                        <div className="relative">
                          <Image src={heroCollageImages[2].src} alt={heroCollageImages[2].alt} fill className="object-cover" sizes="220px" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-7 flex flex-wrap items-start gap-x-5 gap-y-5 sm:flex-nowrap sm:divide-x sm:divide-ink/10">
            {HERO_HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex max-w-[7.5rem] flex-col items-center gap-2 text-center sm:pl-5 sm:first:pl-0">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${h.bg}`}>
                  <h.icon className={`h-4 w-4 ${h.color}`} strokeWidth={1.75} />
                </span>
                <p className="text-[11px] font-medium leading-tight text-ink/70">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="latest-post" className="scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
        <div>
          {allPosts.map((post, i) => (
            <BlogPost key={post.id} post={post} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="relative mt-16 overflow-hidden rounded-[28px] bg-gradient-to-br from-indigo via-indigo to-indigo-dark px-6 py-10 text-center sm:px-14 sm:py-12">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-marigold/25 blur-3xl animate-drift-a" />
            <div className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-brick/25 blur-3xl animate-drift-b" />
            <HeartHandshake className="relative mx-auto h-8 w-8 text-marigold-light" strokeWidth={1.5} />
            <h3 className="relative mt-4 font-display text-xl font-semibold text-paper sm:text-2xl">
              These updates span over a decade
            </h3>
            <p className="relative mx-auto mt-2 max-w-md text-sm text-paper/80">
              From the first building to a pandemic that couldn&rsquo;t stop classes, every chapter of this
              story kept going because sponsors kept saying yes.
            </p>
            <Link
              href="/donate"
              className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-marigold px-6 py-3 text-sm font-semibold text-indigo-dark shadow-lg transition-all hover:-translate-y-0.5 hover:bg-marigold-light"
            >
              <HeartHandshake className="h-4 w-4" strokeWidth={2.5} />
              Support the Next Chapter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        </div>
      </section>
    </>
  );
}
