import Image from "next/image";
import Reveal from "@/components/Reveal";
import AnnualReportBrowser from "@/components/AnnualReportBrowser";
import DownloadReportButton from "@/components/DownloadReportButton";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Annual Report",
  description:
    "Yearly activity reports from St. John's School, Dantherapalli — events, milestones and community outreach from 2017 to today.",
};

const REPORTS = [
  {
    year: "2017",
    events: [
      {
        date: "20 April 2017",
        title: "KG Graduation for 33 Students & 3rd Anniversary",
        icon: "GraduationCap",
        image: "/images/2017annual.webp",
        body: [
          "We celebrated St. John's School's 3rd Anniversary and KG Graduation Day! The Joshua Foundation team helped lift us to achieve another milestone indeed. Girls 8 and boys 25 — 33 students in total — graduated. All of these students dressed up in a graduation robe and cap for the first time, and it was an incredible moment to see their smiles. Every one of them performed extremely well — 100% passed. Well done, kids.",
        ],
        note: {
          heading: "Mandal Educational Officer's Speech",
          body: "The Mandal Educational Officer, Mr. Subbha Rao, one of the special guests of the day, said: “10 years of my service, I have attended so many school functions, but this celebration is very special for me — one I had never experienced before, because none of the schools I had attended conducted a KG Graduation Day. St. John's is the first school to initiate such a wonderful event in our zone, so it was a new experience for me attending and seeing KG graduates for the first time, and I am very much impressed seeing all the kids well-behaved and disciplined.” He appreciated the hard work, effort and dedication of the staff for the successful completion of the academic year, and encouraged and motivated parents, saying: “how important it is for a child to be educated, and the benefits of education in their future.”",
        },
      },
      {
        date: "May 2017",
        title: "Chalivendram — Free Drinking Water",
        icon: "Droplet",
        image: "/images/2017chalivendam.webp",
        body: [
          "The Joshua Foundation started 'Chalivendram', a free drinking-water station, for migrant workers and labourers on their way home, as well as for all local people during the peak of summer.",
        ],
      },
      {
        date: "September 2017",
        title: "Vocational Training Seminars & Craftwork",
        icon: "Scissors",
        image: "/images/2017craftwork.webp",
        body: [
          "Conducted vocational training seminars and hands-on craftwork sessions for unemployed youth in the community, giving them a practical skill and a small source of income.",
        ],
      },
      {
        date: "October 2017",
        title: "Swachh Bharat Clean-Up Drive",
        icon: "Trash2",
        body: [
          "To mark Gandhi Jayanthi, St. John's and The Joshua Foundation team came together with volunteers from the community to conduct a Swachh Bharat clean-up drive across 3 different villages around Dantherapalli. Streets, public spaces and community areas were cleared of litter, and residents joined in to help keep their surroundings clean well beyond the day of the drive itself.",
          "Alongside the clean-up, youth awareness camps were held in each village to speak directly with unemployed young people about developing practical skills and finding steady work. The team shared guidance on vocational opportunities and encouraged the youth to see cleanliness, discipline and skill-building as steps toward a better future — carrying forward the same spirit as the vocational training seminars held earlier that September.",
        ],
      },
    ],
  },
  {
    year: "2018",
    events: [
      {
        date: "January 2018",
        title: "Supplementary Nutrition Program",
        icon: "Utensils",
        image: "/images/2018food.webp",
        body: [
          "The Joshua Foundation was able to support 90% of St. John's School students who were identified as undernourished with a supplementary meal program. Students were provided a boiled egg, banana, milk and fruit, three times a week, to help improve their nutrition and concentration in class.",
        ],
      },
      {
        date: "26 January 2018",
        title: "Republic Day Celebration",
        icon: "Flag",
        image: "/images/2018republicday.webp",
        body: [
          "The Joshua Foundation celebrated Republic Day with St. John's students. Mr. Karna Gosa, the director, delivered the Republic Day speech and encouraged students and parents to keep the school and the community clean and green — carrying the spirit of Swachh Bharat into everyday life.",
        ],
      },
      {
        date: "5 February 2018",
        title: "'How to Build a Healthy Community' Seminar",
        icon: "Users",
        images: ["/images/2018healthycommunity.webp", "/images/2018healthycommunity (2).webp"],
        body: [
          "St. John's conducted a seminar called \"How to Build a Healthy Community.\" As part of the workshop, children built a symbolic healthy community out of cut paper, working together to design and place each piece. After the seminar, The Joshua Foundation provided snacks for all the participating students.",
        ],
      },
      {
        date: "22 March 2018",
        title: "A Livelihood for a Widowed Mother",
        icon: "HeartHandshake",
        image: "/images/2018rangajyothi.webp",
        body: [
          "The Joshua Foundation supported the purchase of a four-wheel flower stall for Mrs. Ranga Joythi (26, of S.R. Pet village), whose husband had died recently in an accident. Her two daughters, Manasa and Mahima, study at St. John's School.",
          "With this small business, Ranga Joythi found the strength to come out of depression, and our staff encouraged her to build herself up for her daughters' education. Her flower-selling business has grown day by day and now supports her whole family — she and her family expressed deep gratitude for the Foundation's generosity.",
        ],
      },
      {
        date: "1 April 2018",
        title: "600 Books for the Library",
        icon: "BookOpen",
        image: "/images/2018librarybooks.webp",
        body: [
          "The Joshua Foundation sponsored and provided 600 books for the library set up at St. John's School, for the benefit of both the school's students and the community children of Dantherapalli, and encouraged all the kids to make use of the library to gain knowledge.",
        ],
      },
      {
        date: "17 April 2018",
        title: "Free Eye Screening & Surgery Camp",
        icon: "Eye",
        images: ["/images/2018eyecheckup (1).webp", "/images/2018eyecheckup (2).webp"],
        body: [
          "A free eye screening and surgery camp was held at St. John's School by The Joshua Foundation. A team of doctors and paramedical staff from Santhiram Medical College and General Hospital, Nandyal, screened 300 individuals. All kinds of eye issues were treated — most patients were prescribed spectacles, some received medicine, and 60 people had surgery done successfully.",
          "240 of St. John's students also went through free eye screening for existing eye problems, and patients operated on in the past were reviewed for any complications, with further cases identified and treated accordingly.",
          "Patients came to the camp from 10 surrounding villages reached by The Joshua Foundation — it was a truly incredible camp where people were loved, cared for and helped, and the surrounding communities benefited enormously.",
        ],
      },
      {
        date: "20 June 2018",
        title: "Free Books & Uniforms for 280 Students",
        icon: "Shirt",
        images: ["/images/2018books&uniforms.webp", "/images/2018books&uniforms (2).webp"],
        body: [
          "The Joshua Foundation supplied free books and uniforms for 280 poor children who are students at St. John's School, helping ease the burden on their families at the start of the school year.",
        ],
      },
      {
        date: "14 September 2018",
        title: "Emergency Surgery for Panidhra Reddy",
        icon: "Ambulance",
        images: ["/images/2018panidhrareddy.webp", "/images/2018panidhrareddy (2).webp"],
        body: [
          "Panidhra Reddy, a UKG student from Sanjeevaro Pet village, was playing in front of his house after school when he was unfortunately hit by a motorbike ridden by an intoxicated rider. He was immediately taken to the hospital, where doctors found his left leg had been fractured.",
          "Coming from a very poor background, the family could not afford treatment on their own, so The Joshua Foundation's board stepped in to support the surgery. Panidhra Reddy is now doing great, and his family expressed their gratitude for the generosity shown to them.",
        ],
      },
      {
        date: "November 2018",
        title: "Rural Welfare Awareness Workshop",
        icon: "Landmark",
        body: [
          "The Joshua Foundation conducted a workshop for rural women and men to educate them about various governmental welfare schemes available to them and their families.",
        ],
      },
      {
        date: "6 December 2018",
        title: "'Clean Teeth' Dental Awareness Drive",
        icon: "Sparkles",
        images: ["/images/2018cleanteeth  (1).webp", "/images/2018cleanteeth  (2).webp"],
        body: [
          "The Joshua Foundation conducted a 'Clean Teeth' awareness program at Dantherapalli and for St. John's students, teaching them how to keep their teeth protected from bacteria and encouraging them to brush twice a day and eat healthy food. After the program, 200 toothbrushes were given out for free.",
        ],
      },
    ],
  },
  {
    year: "2019",
    events: [
      {
        date: "26 January 2019",
        title: "Republic Day Celebration",
        icon: "Flag",
        images: ["/images/2019republicday (2).webp", "/images/2019republicday (1).webp"],
        body: [
          "St. John's celebrated Republic Day at Dantherapalli on 26th January 2019, with the whole school taking part in the flag-hoisting ceremony and parade. The Joshua Foundation sponsored sweets and prizes for 284 students to mark the occasion.",
        ],
      },
      {
        date: "2 February 2019",
        title: "Representing India's Sovereignty at S.R. Pet",
        icon: "Landmark",
        image: "/images/2019-2feb.webp",
        body: [
          "St. John's students took part in a program at S.R. Pet marking the sovereignty of India, held during the launch of an Andhra Pradesh Government scheme. Students dressed as freedom fighters and represented the school at the event, standing alongside local officials and community leaders.",
        ],
      },
      {
        date: "28 February 2019",
        title: "Science Day Exhibition",
        icon: "FlaskConical",
        image: "/images/2019scienceday.webp",
        body: [
          "St. John's held a Science Day exhibition to acknowledge scientists and their contributions to the country, and to encourage students to contribute their own wisdom and talents toward developing their community. The event was sponsored by The Joshua Foundation, and parents and members of the community visited the exhibition to see the students' projects.",
        ],
      },
      {
        date: "March 2019",
        title: "ORS & Late-Night Meals for Those in Need",
        icon: "HeartHandshake",
        image: "/images/2019food.webp",
        body: [
          "The Joshua Foundation sponsored ORS liquid for 284 students of St. John's, and encouraged them to drink enough water, stay hydrated and keep good health.",
          "On the 16th, the Foundation also took the initiative to provide food for people living on the street near the railway station at night, supplying meals for 100 people.",
        ],
      },
      {
        date: "June 2019",
        title: "Beti Bachao Beti Padhao",
        icon: "Users",
        image: "/images/2019betipado.webp",
        body: [
          "In support of the Beti Bachao Beti Padhao initiative, The Joshua Foundation sponsored 60 girls for the 2019–20 school year at St. John's. These girls and their families expressed their thanks to the Foundation for making their education possible.",
        ],
      },
      {
        date: "25 July 2019",
        title: "Free Tailoring Center",
        icon: "Scissors",
        image: "/images/2019tailoringcenter.webp",
        body: [
          "The Joshua Foundation started a free Tailoring Center at Giddalur to empower women from all communities. Ten women enrolled in the first batch of training, and through it, ten families are already benefiting.",
        ],
      },
      {
        date: "15 August 2019",
        title: "Independence Day Rally",
        icon: "Flag",
        image: "/images/2019independenceday.webp",
        body: [
          "Independence Day was celebrated at St. John's, and students and staff organised a Prabhatha Beri rally, walking into the surrounding villages to remind residents of the freedom fighters and their contributions to India's independence. The school took part in the day's celebrations and encouraged the community to keep their surroundings clean. To mark the occasion, The Joshua Foundation sponsored pencils and chocolates for the students.",
        ],
      },
      {
        date: "10 October 2019",
        title: "Kanti Velugu Free Eye Check-Up Camp",
        icon: "Eye",
        image: "/images/2019kantivelugu.webp",
        body: [
          "A free eye check-up camp, part of the Kanti Velugu program, was conducted for St. John's students in Dantherapalli. 280 students went through the check-up, with local government doctors and ASHA workers involved, and volunteers from The Joshua Foundation helping make the camp a success.",
        ],
      },
      {
        date: "17 November 2019",
        title: "Superstition & Crime Awareness Seminar",
        icon: "ShieldAlert",
        images: ["/images/2019-17thsep.webp", "/images/2019-17thsep (2).webp"],
        body: [
          "The Joshua Foundation mobilised and conducted a seminar on superstition and crime awareness at the St. John's school grounds in Dantherapalli. A sub-inspector of police was invited as a special guest and addressed the gathering, and people from different villages, along with parents, attended and were encouraged by the discussion. The Joshua Foundation provided food for 800 people after the seminar.",
        ],
      },
      {
        date: "17 December 2019",
        title: "Fire Safety Awareness Program",
        icon: "Flame",
        image: "/images/2019firesafetyawerness.webp",
        body: [
          "A fire safety awareness program was conducted at Dantherapalli St. John's, with the fire department from Giddalur invited to take part. They demonstrated how to save lives in a fire accident, how to bring a fire under control, and safety guidelines — including how to stop a fire from spreading using materials close at hand, like sand, mud, water and fire extinguishers. St. John's students and the community gathered for the seminar, which was sponsored by The Joshua Foundation.",
        ],
      },
    ],
  },
  {
    year: "2020",
    layout: "journal",
    events: [
      {
        date: "19 January 2020",
        title: "Awareness on Pulse Polio",
        icon: "Stethoscope",
        body: [
          "The Joshua Foundation's volunteers went house-to-house on 19th January 2020, encouraging communities to give polio drops to their children and helping families reach the nearby polio camps.",
        ],
      },
      {
        date: "2 February 2020",
        title: "A Second Chance for G. Vijai Kumar",
        icon: "Ambulance",
        images: ["/images/2020polio (2).webp", "/images/2020polio (1).webp"],
        body: [
          "The Joshua Foundation extended help to Mr. G. Vijai Kumar (45, of Giddalur), who comes from a poor family background and works as a mason on daily wages. The Foundation found that he was suffering from a painful tumor on his knee, and took him to the hospital on 2nd February 2020, where doctors advised surgery to remove it.",
          "He was too poor to afford the surgery on his own, so The Joshua Foundation took care of the surgery and medical expenses in full. He and his family were overjoyed, and expressed their gratitude for TJF's generosity.",
        ],
      },
      {
        date: "March 2020",
        title: "Helped a Poor Old Woman",
        icon: "Scissors",
        image: "/images/2020oldwomen.webp",
        body: [
          "The Joshua Foundation helped a poor woman named Hemamalini buy a tailoring machine to support her family. It proved to be a great help during COVID-19, when she used it to stitch masks for free distribution — she and her family were deeply thankful for the generosity the Foundation showed her.",
        ],
      },
      {
        date: "April 2020",
        title: "Vegetables for 300 Families in Lockdown",
        icon: "Utensils",
        image: "/images/2020aprillockdown.webp",
        body: [
          "During the COVID-19 lockdown, vegetables were distributed to about 300 poor families in the colonies surrounding Giddalur. Every family felt happy and expressed heartfelt gratitude for the generosity shown by the Foundation.",
        ],
      },
      {
        date: "May–July 2020",
        title: "Food for Families, Beggars & Migrant Laborers",
        icon: "HeartHandshake",
        image: "/images/2020julylockdown.webp",
        body: [
          "During the COVID-19 lockdown, The Joshua Foundation distributed food for poor families, beggars, and migrant laborers who were making their way home on foot. They all felt happy and expressed heartfelt gratitude for the generosity shown by the Foundation.",
        ],
      },
      {
        date: "December 2020",
        title: "Mega Free Eye Camp",
        icon: "Eye",
        image: "/images/2020eyecamp.webp",
        body: [
          "The Joshua Foundation hosted a mega free eye camp — but first, everyone took a COVID-19 test at the St. John's school campus, and thankfully no one tested positive. About 150 people were screened at the camp, and 40 of them were taken to Santharam General Hospital, Nandyal, for surgery at free cost. The surgeries were successful, and everyone was safely dropped back home.",
        ],
      },
    ],
  },
  {
    year: "2021",
    events: [
      {
        date: "January 2021",
        title: "Rice Bags & Groceries for Quarantined Families",
        icon: "HeartHandshake",
        image: "/images/2021janfoodsupply.webp",
        body: [
          "The Joshua Foundation supplied 25kg rice bags and groceries to 20 poor families in Dantherapalli who had tested positive for COVID-19 and were staying home in quarantine, helping them get through isolation without going without food.",
        ],
      },
      {
        date: "February 2021",
        title: "Standing By Akhila & Varun's Family",
        icon: "Users",
        image: "/images/2021FEB.webp",
        body: [
          "Akhila and her brother Varun study in 3rd and 1st class at St. John's, and live with their grandparents behind the school's colony. When Akhila, her grandfather, grandmother and the rest of the family tested positive for COVID-19, the Foundation was able to visit them — following all COVID-19 safety norms — and supplied food and medication throughout their quarantine. The family was deeply thankful for the support.",
        ],
      },
      {
        date: "March 2021",
        title: "2,000 Masks Across 3 Villages",
        icon: "Shield",
        image: "/images/2021MARCH.webp",
        imageFit: "contain",
        imageAspect: "999 / 1575",
        body: [
          "The Joshua Foundation distributed 2,000 masks across 3 villages in Giddalur Mandal, working closely with Mr. Venkateshwara Rao, the Giddalur Mandal Educational Officer, who walked alongside the team to distribute the masks and help raise awareness about fighting COVID-19. It was valuable work in bringing awareness to an under-informed community, and everyone involved expressed their appreciation for the effort.",
          "This coverage ran in the local Giddalur press — pictured alongside is the original news clipping of the mask distribution.",
        ],
      },
      {
        date: "2021",
        title: "Girls' Enrollment Milestone",
        icon: "GraduationCap",
        body: [
          "Girls' enrollment at St. John's grew from just 8 students in the school's first year to 90, through sustained outreach under the Beti Bachao Beti Padhao initiative.",
        ],
      },
    ],
  },
];

const DEFAULT_HERO = {
  shape: "blob",
  images: [
    { src: "/images/2019republicday (2).webp", alt: "Republic Day celebration" },
    { src: "/images/2019betipado.webp", alt: "Beti Bachao Beti Padhao" },
    { src: "/images/2019tailoringcenter.webp", alt: "Free Tailoring Center" },
    { src: "/images/2019kantivelugu.webp", alt: "Kanti Velugu eye check-up camp" },
    { src: "/images/2019independenceday.webp", alt: "Independence Day rally" },
  ],
};

const HERO_CONFIG = {
  2017: {
    shape: "circle",
    images: [
      { src: "/images/2017annual.webp", alt: "KG Graduation Day" },
      { src: "/images/2017chalivendam.webp", alt: "Chalivendram free drinking water" },
      { src: "/images/2017craftwork.webp", alt: "Vocational training & craftwork" },
    ],
  },
  2018: {
    shape: "circle",
    images: [
      { src: "/images/2018rangajyothi.webp", alt: "A livelihood for a widowed mother" },
      { src: "/images/2018librarybooks.webp", alt: "600 books for the library" },
      { src: "/images/2018panidhrareddy.webp", alt: "Emergency surgery support" },
    ],
  },
  2020: {
    shape: "circle",
    images: [
      { src: "/images/2020eyecamp.webp", alt: "Mega free eye camp" },
      { src: "/images/2020oldwomen.webp", alt: "Helped a poor old woman" },
      { src: "/images/2020aprillockdown.webp", alt: "Vegetables for families in lockdown" },
    ],
  },
  2021: {
    shape: "circle",
    images: [
      { src: "/images/2021janfoodsupply.webp", alt: "Rice bags & groceries for quarantined families" },
      { src: "/images/2021FEB.webp", alt: "Standing by Akhila & Varun's family" },
      { src: "/images/2021MARCH.webp", alt: "2,000 masks across 3 villages" },
    ],
  },
};

const BLOB = "60% 40% 30% 70% / 60% 30% 70% 40%";

export default function AnnualReportPage({ searchParams }) {
  const initialYear = searchParams?.year;
  const active = REPORTS.find((r) => r.year === initialYear) || REPORTS[0];
  const hero = HERO_CONFIG[active.year] || DEFAULT_HERO;
  const isCircle = hero.shape === "circle";
  const shapeStyle = isCircle ? undefined : { borderRadius: BLOB };
  const shapeClass = isCircle ? "rounded-full" : "";

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-paper to-rose-50">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-marigold/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-brick/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:py-14">
          <div className="lg:col-span-7">
            <Reveal direction="left" duration={650}>
              <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-brick">
                Annual Report <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </Reveal>
            <Reveal direction="zoom" delay={120} duration={650}>
              <div className="mb-5 inline-flex items-center gap-4 rounded-2xl bg-white/70 px-5 py-3 shadow-sm ring-1 ring-ink/10 backdrop-blur-sm">
                <span className="font-display text-4xl font-black leading-none text-brick sm:text-5xl">
                  {active.year}
                </span>
                <span className="h-9 w-px bg-ink/15" />
                <span className="text-xs font-semibold uppercase leading-tight tracking-[0.14em] text-ink/50">
                  Activity
                  <br />
                  Report
                </span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={220} duration={700}>
              <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-indigo sm:text-5xl lg:text-6xl">
                Achievements, Events &amp; Notices
              </h1>
              <svg className="mt-5 h-3 w-20 text-brick" viewBox="0 0 100 12" fill="none">
                <path d="M2,8 C20,2 35,12 50,6 C65,0 80,10 98,4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </Reveal>
            <Reveal direction="up" delay={320} duration={700}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                Every year, The Joshua Foundation files a signed activity report of everything accomplished at
                St. John&rsquo;s and in the surrounding villages. Here are the highlights.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-72 sm:w-80 lg:w-full lg:max-w-[24rem]">
              <div
                className={`absolute inset-0 bg-gradient-to-br from-brick/20 via-marigold/25 to-transparent blur-2xl ${shapeClass}`}
                style={shapeStyle}
              />
              <div className={`relative h-full w-full bg-marigold p-[3px] shadow-xl ${shapeClass}`} style={shapeStyle}>
                <div className={`h-full w-full bg-paper p-[5px] ${shapeClass}`} style={shapeStyle}>
                  {isCircle ? (
                    <div
                      className={`grid h-full w-full grid-cols-2 grid-rows-2 gap-1 overflow-hidden ring-1 ring-ink/10 ${shapeClass}`}
                      style={shapeStyle}
                    >
                      {hero.images.map((img, i) => (
                        <Reveal
                          key={img.src}
                          direction={i === 0 ? "down" : i === 1 ? "left" : "right"}
                          delay={i * 130}
                          duration={700}
                          className={`relative overflow-hidden ${i === 0 ? "col-span-2" : ""}`}
                        >
                          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="220px" />
                        </Reveal>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="grid h-full w-full grid-cols-6 grid-rows-2 gap-1 overflow-hidden ring-1 ring-ink/10"
                      style={shapeStyle}
                    >
                      {hero.images.slice(0, 3).map((img, i) => (
                        <Reveal
                          key={img.src}
                          direction={i === 0 ? "left" : i === 2 ? "right" : "down"}
                          delay={i * 110}
                          duration={700}
                          className="relative col-span-2 overflow-hidden"
                        >
                          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="150px" />
                        </Reveal>
                      ))}
                      {hero.images.slice(3, 5).map((img, i) => (
                        <Reveal
                          key={img.src}
                          direction={i === 0 ? "left" : "right"}
                          delay={330 + i * 110}
                          duration={700}
                          className="relative col-span-3 overflow-hidden"
                        >
                          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="220px" />
                        </Reveal>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Reveal direction="up" delay={480} duration={600} className="mt-5 flex justify-center lg:justify-end">
              <DownloadReportButton report={active} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sky-50/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnnualReportBrowser report={active} />
        </div>
      </section>
    </>
  );
}
