import { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import React from "react";
import sittingInState2 from "../../assests/sitting_in_state2.jpeg";
import nanaMensahAbrampahImage from "../../assests/Nana Mensah Abrampah.jpeg";
import nanaBamfoDwobengImage from "../../assests/NANA_BAMFO_DWOBENG.jpeg";
import theodoreNyameImage from "../../assests/Theodore T. Nyame.jpeg";
import fredNyarkoImage from "../../assests/Prof_Fred Nyarko.jpeg";
import nanaAkuaSafoaImage from "../../assests/Nana Akua Safoa.jpeg";
import dicksonKissiImage from "../../assests/Dickson A_Kissi.jpeg";
import dorisVidaImage from "../../assests/Doris Ofosua Vida.jpeg";
import samuelBoatengImage from "../../assests/Dr_Samuel Mintah Boaheng.jpeg";
import godfriedBoakyeImage from "../../assests/Godfred Boakye.jpeg";
import oyirifieAkotoBamfoImage from "../../assests/Oyirifie Nana Akoto-Bamfo.jpeg";
import ernestBediakoSampongImage from "../../assests/Ernest Bediako Sampong.png";
import owoaheneAkyeampongImage from "../../assests/Nana Owuahene Acheampong.jpeg";
import effahOseiBonsuDavidImage from "../../assests/Effah Osei Bonsu David.jpeg";
import beatriceWiafeAddaiImage from "../../assests/Beatrice Wiafe-Addai.png";
import georgeSarpongImage from "../../assests/George A_Sarpong.jpeg";
import ebenezerOduroOwusuImage from "../../assests/Ebenezer Oduro Owusu.png";
import kingsleyYoungOpareImage from "../../assests/Kingsley Young Opare Mpraeso.jpeg";
import kwasiAbankwaBediakoImage from "../../assests/Kwasi Abankwa Bediako.jpeg";
import kofiBaahAkyemfourImage from "../../assests/Kofi Baah Akyemfour.jpeg";
import vidaFiankoAwukuImage from "../../assests/Vida Fianko-Awuku.jpeg";

type FeaturedProfile = {
  name: string;
  role: string;
  image?: string;
  summary: string;
  details?: string[];
};

const featuredProfiles: FeaturedProfile[] = [
  {
    name: "Dr. Dickson Adomako Kissi",
    role: "Chief Medical Officer, Deseret Hospital & Former MP for Anyaa Sowutuom",
    image: dicksonKissiImage,
    summary:
      "Dr. Dickson Adomako Kissi hails from Mpraeso, Kwahu. He is currently the Chief Medical Officer at Deseret Hospital in Accra and a former Member of Parliament for the Anyaa Sowutuom Constituency, known as a strong advocate for transparency and good governance.",
    details: [
      "Education: Morning Star School, Cantonment-Accra (1996); St. Peter's Secondary School, Nkwatia Kwahu (1998); First Degree in Economics with a minor in Chemistry, Brigham Young University, USA (2004); University of Ghana, Legon Medical School (2013).",
      "While in Ghana's Parliament, he served on the Public Accounts Committee, Communications Committee, Foreign Affairs and Regional Integration Committee, Environment, Science and Technology Committee, and the Health Committee.",
      "He worked for five years at Tyco Healthcare (now Medtronic) in North Haven, Connecticut, USA, as a post-market analyst.",
      "He has also served as a Medical Officer at the Police Hospital, VRA Akosombo, Pantang Hospital, and in private practice at Deseret Hospital.",
    ],
  },
  {
    name: "Nana Mensah Abrampah",
    role: "Former Head of the Kwahu Community, Accra & Tema; Abusuapanin of Mpraeso Asona Takoworase",
    image: nanaMensahAbrampahImage,
    summary:
      "Nana Mensah Abrampah was the Head of the Kwahu Community in Accra and Tema, and Abusuapanin of Mpraeso Asona Takoworase. He is remembered for his dedicated leadership, community service, and enduring contribution to the unity and progress of the Kwahu people.",
  },
  {
    name: "Samuel K. B. Omari",
    role: "Former Chairman, Mpraesoman Kuo; Director, Grandview Hotel & Power Plaza Hostels",
    summary:
      "Samuel K. B. Omari is a former chairman of Mpraesoman Kuo. He currently serves as a Director of Grandview Hotel and a Director of Power Plaza Hostels.",
  },
  {
    name: "Mrs. Vida Fianko-Awuku",
    role: "Trader, Makola Market",
    image: vidaFiankoAwukuImage,
    summary:
      "Mrs. Vida Fianko-Awuku, 75, hails from Kwahu Mpraeso and belongs to the Aduana Clan. She is a trader at Makola Market.",
  },
  {
    name: "Kofi Baah Akyemfour",
    role: "Chairman, Mpraesoman Kuo; Global President, Mpraeso Secondary School Past Students Association (Mpasspast)",
    image: kofiBaahAkyemfourImage,
    summary:
      "Kofi Baah Akyemfour is the Chairman of Mpraesoman Kuo and the Global President of the Mpraeso Secondary School Past Students Association (Mpasspast). He is from the Asona Kwakwaduam clan of Mpraeso.",
    details: [
      "His parents, Comfort Serwaa Safo-Adjei (also known as Afi Donkor) and Kwabena Ofori Baah, both hailed from Mpraeso and are now deceased.",
      "He is married to Nana Yaa Baah Akyemfour, and together they have three sons.",
    ],
  },
  {
    name: "Nana Bamfo Dwobeng I",
    role: "Werempehene of Mpraeso & Odikro of Asuboni No. 3 (1919–2006)",
    image: nanaBamfoDwobengImage,
    summary:
      "Nana Bamfo Dwobeng I served as the Werempehene of Mpraeso and Odikro of Asuboni No. 3 from 1919 to 2006.",
    details: [
      "He built the Mpraeso Stadium and slaughterhouse, and supplied electricity to the Mpraeso township, among many other contributions to the town's development.",
    ],
  },
  {
    name: "Godfried Boakye",
    role: "Proprietor, Hi-Speed Enterprise",
    image: godfriedBoakyeImage,
    summary:
      "Godfried Boakye runs Hi-Speed Enterprise, a supplier of welding materials and accessories located on Hanson Road near the Timber Market, Accra.",
  },
  {
    name: "Oyirifie Nana Akoto-Bamfo",
    role: "Dwantoafohene of the Okwahu Community, Accra (1944–1996)",
    image: oyirifieAkotoBamfoImage,
    summary:
      "Eugene Kwasi Asiedu Akoto-Bamfo — known in private life as Kwasi Akoto and, after his enstoolment, as Oyirifie Nana Akoto-Bamfo — was born at Suhum in the Eastern Region on 16 April 1944, to Mr. Edmund Kwabena Akoto-Bamfo and Madam Deborah Amma Adwoa Akoto-Bamfo, both of Mpraeso. He was sworn in as Dwantoafohene of the Okwahu Community in Accra in June 1993, during the reign of the late Chief Kwadwo Donkoh, and died in 1996 at the age of 52.",
    details: [
      "He was educated at Abetifi Presbyterian Middle Boarding School (1956–1959), Okuapeman Secondary School (G.C.E. Ordinary Level, 1964), and Apam Secondary School (G.C.E. Advanced Level, 1966), before reading Law at the University of Ghana. He obtained his Bachelor of Laws with Honours and was called to the Ghana Bar in 1970.",
      "He began his career as a Legal Officer and underwriter with the British General Insurance Company, rising to Deputy General Manager. In 1980, he co-founded the Great African Insurance Company Limited and served as its Managing Director, building it into a household name in Ghana.",
      "As a lawyer, he was active in the Ghana Bar Association, serving as its National Treasurer for six consecutive years, and lectured in Insurance Law at the Ghana School of Law. He also served on the Police Council, chaired the Executive Council of the Ghana United Nations Association, and was a Freemason.",
      "As Dwantoafohene, he revitalised the Okwahu Community Council's activities in Accra, sharing his experience as an advocate, counsellor, and arbiter in the settlement of disputes. He was widely remembered for his humility, generosity, and Christian charity, and served as patron to numerous societies and welfare clubs before his death at age 52.",
    ],
  },
  {
    name: "Dr. Theodore T. Nyame, MD",
    role: "Board-Certified Plastic Surgeon, Charlotte Plastic Surgery, North Carolina",
    image: theodoreNyameImage,
    summary:
      "Dr. Theodore T. Nyame, MD is a board-certified plastic surgeon, educator, and nationally recognized leader in aesthetic and reconstructive surgery. He is a partner at Charlotte Plastic Surgery in Charlotte, North Carolina, where he specializes in breast surgery, body contouring, and aesthetic procedures designed to help patients look and feel their best.",
    details: [
      "Dr. Nyame earned his undergraduate degree in Chemistry and Chemical Biology from Cornell University before attending Harvard Medical School. He completed his plastic surgery residency through the Harvard Plastic Surgery Program and pursued advanced fellowship training in aesthetic surgery in Australia. He has been recognized among America's top plastic surgeons and is frequently invited to lecture nationally and internationally on breast surgery, body contouring, and innovations in aesthetic medicine.",
      "Born in Ghana and raised with deep ties to Mpraeso, a town in Ghana's Eastern Region, Dr. Nyame's journey reflects the power of education, perseverance, and service. From his early beginnings in West Africa to becoming one of the most respected plastic surgeons in the United States, he has remained grounded in the values instilled by his family, culture, and community.",
      "Beyond the operating room, Dr. Nyame is passionate about mentorship, education, and global outreach. He is dedicated to helping the next generation of physicians and leaders realize their potential while honoring the heritage and experiences that shaped his own path.",
      "Today, Dr. Nyame lives in Charlotte with his wife and two children, balancing a thriving surgical practice with his greatest roles: husband, father, mentor, and lifelong student.",
    ],
  },
  {
    name: "Pastor Fred Nyarko",
    role: "General Overseer & Senior Pastor, Redemption Faith Ministries International, Amsterdam",
    image: fredNyarkoImage,
    summary:
      "Pastor Fred Nyarko, 65, is a full-time Network Engineer and Consultant, and the General Overseer and Senior Pastor of Redemption Faith Ministries International in Amsterdam.",
  },
  {
    name: "Nana Akua Safoa",
    role: "CEO, Kay Candies, Netherlands",
    image: nanaAkuaSafoaImage,
    summary: "Nana Akua Safoa, 69, is the CEO of Kay Candies in the Netherlands.",
  },
  {
    name: "Mr. Kwasi Abankwa Bediako",
    role: "Chairperson, Mpraeso Citizens in the Netherlands",
    image: kwasiAbankwaBediakoImage,
    summary:
      "Mr. Kwasi Abankwa Bediako, 74, is the Chairperson of Mpraeso citizens in the Netherlands.",
  },
  {
    name: "Doris Ofosua Vidda",
    role: "Board Member & Advisor, Dutch Healthcare & Social Welfare Sectors",
    image: dorisVidaImage,
    summary:
      "Doris Ofosua Vidda, 67, is a board member and advisor in the Dutch healthcare and social welfare sectors, specialising in strategic governance and client-centred care models.",
    details: [
      "She holds an M.A. in Sociology (ISS – Den Haag) and an M.A. in Spiritual Care (VU – Amsterdam), and bridges social development insights with holistic health strategies to drive impact in organisational leadership.",
      "Core expertise: Healthcare Governance, Strategic Advisory & Social Analysis.",
    ],
  },
  {
    name: "Dr. Samuel Mintah Boateng",
    role: "CEO, Dr. Sam International School; Publisher, Kwahu News",
    image: samuelBoatengImage,
    summary:
      "Dr. Samuel Mintah Boateng is an accomplished educator, engineer, and community leader with extensive experience in academia, industry, and educational management. He received his secondary education at Mfantsipim School before pursuing higher education at the Russian State University of Oil and Gas and Ben-Gurion University in Israel, where he further developed his expertise in engineering and technology.",
    details: [
      "Throughout his distinguished career, Dr. Boateng has worked with Tema Oil Refinery, Tema Food Complex Corporation, and the Council for Scientific and Industrial Research (CSIR), contributing to Ghana's industrial and scientific advancement. He later joined All Nations University, where he served with distinction and retired as Head of the Department of Oil and Gas Engineering after mentoring and training many future engineers.",
      "Dr. Boateng currently serves as the Chief Executive Officer of Dr. Sam International School in Accra, where he is committed to providing quality education and nurturing future leaders.",
      "Beyond his professional achievements, Dr. Boateng is deeply committed to community development. He is the publisher of Kwahu News, a community newspaper dedicated to informing, educating, and promoting the development of the Kwahu area.",
    ],
  },
  {
    name: "Ernest Bediako Sampong",
    role: "Founder & Chairman, Ernest Chemists Ltd (ECL)",
    image: ernestBediakoSampongImage,
    summary:
      "Mr. Ernest Bediako Sampong is a pharmacist, entrepreneur, and the Founder and Chairman of the Board of Directors of Ernest Chemists Ltd (ECL), a leading Ghanaian pharmaceutical company with a staff strength of about 1,000. He is a product of Adisadel College and the Kwame Nkrumah University of Science and Technology.",
    details: [
      "His direct assistance, coaching, and mentoring have helped spawn many entrepreneurs, among them East Cantonments Pharmacy, Bedita Pharmacy, Renie Chemists, Pills & Tabs Pharmacy, Medimart Pharmacy, Parmarts Pharmacy, Alby Chemists, Kent Pharmacy, Media Pharmacy, and Kekule Pharmacy. He is involved in numerous philanthropic activities across the country, especially health-related interventions, and through ECL owns and operates Nestpharma Limited in Freetown, Sierra Leone.",
      "He made his experience as an entrepreneur available in public service when President John Agyekum Kufuor appointed him to the presidential committee for the revitalisation of the industrial sector.",
      "His achievements have earned him numerous national and global awards, including the 2001 CIMG Marketing Man of the Year, 10th Most Respected CEO by PricewaterhouseCoopers (2007 and 2009), Ghana's Order of the Volta (Officer Category), CEO of the Year at the Ghana Pharma Awards (2017, 2019), Man of the Year – Health at the EMY Africa Awards (2017, 2020), CEO of the Year at the Ghana CEO Excellence Awards (2018) and Ghana CEO Summit (2019), and a Lifetime Achievement Award at the Ghana Pharma Awards (2023). In 2025, the Pharmaceutical Society of Ghana named its CEO of the Year award category after him.",
      "He continues to groom, inspire, and create opportunities for young entrepreneurs in the pharmaceutical industry. He is married with four children.",
    ],
  },
  {
    name: "Nana Owoahene Akyeampong II",
    role: "Former Deputy Minister for Food & Agriculture; Head of the Mpraeso-Kwahu Community, Accra",
    image: owoaheneAkyeampongImage,
    summary:
      "Nana Owoahene Akyeampong II — popularly known as Hon. Mike Akyeampong — was born in 1945 at Ayalolo, Accra. A career agriculturalist and politician, he occupied the Afranie Stool of the Mpraeso-Kwahu Palace as Nana Sakyi Mireku III from 1984 to 1993, and has served as Head of the Mpraeso-Kwahu Community in Accra, Tema and environs since 2006.",
    details: [
      "He began his career in the civil service as a District Agriculture/Animal Husbandry Officer for the Mpraeso District (1973–1984) before becoming Manager of the Amrahia Dairy Farm/Project under the Ministry of Food and Agriculture (1984–1993). He served as Deputy Minister for Food and Agriculture, in charge of livestock and fisheries, from 1993 to 2001, and later as Board Chairman of Ghana's Fisheries Commission (2009–2014).",
      "Internationally, he was elected Vice-Chairman (1997–1999) and then Chairman (1999–2001) of the Committee on Fisheries (COFI) at the UN Food and Agriculture Organisation in Rome — the only Ghanaian to have chaired COFI since its founding in 1966. He also served as Ghana's Governor at the 22nd Session of the Governing Council of the International Fund for Agricultural Development, and as Africa's representative on the first-ever Bureau of the International Whaling Commission.",
      "He holds a BSc (Hons.) in Agriculture from the University of Ghana, postgraduate qualifications in animal science and dairy production from institutions in the Netherlands, Denmark, and Czech Republic, and an MBA from the Australian Institute of Business.",
      "He was honoured with the Twentieth Century Award for Achievement in Fisheries by the International Biographical Centre, Cambridge, England, along with recognitions from the Kwahu Traditional Council, Mpraeso Senior High School, and Mpraeso Ahemmrono Kuo, among others.",
    ],
  },
  {
    name: "Effah Osei Bonsu David",
    role: "Municipal Chief Executive (MCE), Kwahu South",
    image: effahOseiBonsuDavidImage,
    summary:
      "Effah Osei Bonsu David hails from Twenedurase and trained as a teacher before entering public administration. He currently serves as the Municipal Chief Executive (MCE) for Kwahu South.",
  },
  {
    name: "Dr. (Mrs.) Beatrice Wiafe Addai",
    role: "President & Founder, Breast Care International; CEO, Peace and Love Hospitals",
    image: beatriceWiafeAddaiImage,
    summary:
      "Dr. (Mrs.) Beatrice Wiafe Addai, MD, PhD is an internationally recognised, multiple award-winning breast cancer consultant working primarily in Ghana and across Africa, where breast cancer incidence is disproportionately high and many women lack access to the care they need. Her medical career spans over three decades, the last twenty-three of which have been devoted exclusively to breast cancer awareness, prevention, screening, diagnosis, treatment, research, rehabilitation, and palliative care.",
    details: [
      "She serves as Consultant and Surgeon in breast cancer management at the Peace and Love Hospitals in Accra and Kumasi, which she founded and developed into robust centres for the diagnosis, treatment, counselling, rehabilitation, and research into breast, prostate, and cervical cancer, hepatitis, hypertension, diabetes, and renal dialysis, among other conditions.",
      "Recognising that ignorance and stigma around breast cancer can be more fatal to Ghanaian women than the disease itself — which is highly treatable with early diagnosis — she founded Breast Care International over twenty-three years ago, Ghana's only patient-driven, patient-centred NGO dedicated to breast cancer awareness, education, screening, counselling, and advocacy. It is today Ghana's leading breast cancer awareness charity, and as President of BCI America she has extended that work internationally.",
      "She serves on numerous international and local boards, including as Chairperson of the Ghana Non-Communicable Diseases Alliance and the Ghana Cancer Board, a Medical Advisory Board member of Direct Relief USA, and a member of the Union for International Cancer Control, among many others.",
      "Her honours include the Susan Bucklers' Excellence Award for Women in Science and Technology (USA), the Health and Excellence Award in Diamond Category (New York), the Africa International Award of Merit, the Women that Soar Award (Dallas), the Global Entrepreneur and Initiative Award (Houston), Ghana Woman of the Year Honors (Glitz, Accra), and the Distinguished African Ambassador Award from the Harvard Global Health Catalyst, among others.",
      "She believes education, early detection, and prompt action are the best protection against breast cancer, and continues to lead free clinical screening drives for women in rural communities across Ghana.",
    ],
  },
  {
    name: "George Agyemang Sarpong",
    role: "Founder/Partner, G.A. Sarpong & Co.; Former Director, Ghana School of Law",
    image: georgeSarpongImage,
    summary:
      "George Agyemang Sarpong is a principal member of the Takyiman-Oyoko Abusua of Mpraeso and the Founder/Partner of G.A. Sarpong & Co., Legal Practitioners and Consultants, Accra. He is an alumnus of the Faculty of Law at the University of Ghana, the Ghana School of Law, the University of British Columbia, and the University of London's School of Oriental and African Studies.",
    details: [
      "He entered academia after a career in the Ghana Armed Forces, where he trained at the Ghana Military Academy and the Combat Arms School in Canada, was commissioned into the Recce Regiment in 1973, and honourably retired at the rank of Major in 1990.",
      "He joined the Faculty of Law at the University of Ghana in 1990, was promoted to Senior Lecturer in 1996, and taught Public International Law, the Law of Contract, and Business and Environmental Law for 16 years before retiring voluntarily in 2006. He served as Director of the Ghana School of Law from 2009 to 2012, and has published extensively on international, environmental, and contract law.",
      "He has served as legal consultant to the Government of Ghana, UN bodies, and international agencies, and has sat on numerous boards including the Governing Board of the Ghana Legal Aid Scheme, the African Agricultural Technology Foundation, the Kwahu Hospital Advisory Board, and the National Biosafety Authority. He is a member of the Ghana Bar and the International Union for Conservation of Nature, and is married with three children.",
    ],
  },
  {
    name: "Prof. Ebenezer Oduro Owusu",
    role: "Vice-Chancellor, University of Ghana (2016–2021)",
    image: ebenezerOduroOwusuImage,
    summary:
      "Prof. Ebenezer Oduro Owusu is a university administrator from Abetifi-Kwahu who served as Vice-Chancellor of the University of Ghana from August 2016 to July 2021, after holding several administrative positions at the university.",
    details: [
      "He was Chairman of the Cocoa Research Institute of Ghana (CRIG) Management Board from 2017 to 2020, and is the immediate past Board Chairman of Ghana's Energy Commission and immediate past President/Vice-Chancellor of the Presbyterian University, Ghana. He has served on numerous boards and councils in Ghana and abroad, and was a visiting researcher at the Natural Resources Institute, University of Greenwich, UK.",
      "He holds a PhD in Science, an Executive MBA (Project Management option) from the University of Ghana Business School, and a Diploma in Educational Leadership from Harvard University.",
      "In August 2008 he was decorated as a 'Living Legend' by the people of Kochi, Japan, for his contribution to science, and on 29 November 2017 he received the 'Rising Sun with Gold' honour from the Emperor of Japan, through the Japanese Cabinet, in recognition of his contributions to science and humanity. He is now retired and serves as a consultant to national and international organisations.",
    ],
  },
  {
    name: "Kingsley Young Opare",
    role: "Project Management Consultant; Secretary, Kwahu Forum",
    image: kingsleyYoungOpareImage,
    summary:
      "Kingsley Young Opare was born on 28 February 1969 to Mrs Elizabeth Asantewaa (Sasu) Opare of Mpraeso and Mr Kenneth Opare of Larteh, and is from the Agona clan of Mpraeso. He trained as a teacher at Presbyterian College of Education, Akropong-Akuapem, before going on to earn degrees in electrical/electronics engineering technology, educational administration, and business administration.",
    details: [
      "He has over 35 years of work experience spanning teaching, training, project and event coordination, monitoring and evaluation, and disaster management and emergency relief services. He currently works as a Project Management Consultant.",
      "He holds key positions in several Kwahu associations, including Secretary of the Kwahu Forum, Executive Member of the Kwahu Development Association, member of the Kwahu Professional Network, former Public Relations Officer of Mpraesoman Kuo, and Administrator of the Kwahu Business Advocacy Association.",
      "He initiated and led the Yenko Kwahu events in 2019 and 2020, supported by the Kwahu Professional Network in collaboration with the Kwahu Forum and the Ghana Tourism Authority, and was part of the Easter planning committee.",
    ],
  },
];

function ProfileDetails({
  open,
  details,
  tone,
}: {
  open: boolean;
  details: string[];
  tone: "light" | "dark";
}) {
  if (!open) return null;
  return (
    <motion.div
      className="mt-4 space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {details.map((detail) => (
        <p
          key={detail}
          className={`text-sm leading-relaxed ${tone === "dark" ? "text-white/70" : "text-gray-600"}`}
        >
          {detail}
        </p>
      ))}
    </motion.div>
  );
}

function ReadMoreToggle({
  open,
  onToggle,
  tone,
}: {
  open: boolean;
  onToggle: () => void;
  tone: "light" | "dark";
}) {
  return (
    <button
      onClick={onToggle}
      className={`mt-4 text-xs font-semibold uppercase tracking-wider transition ${
        tone === "dark"
          ? "text-[#d4a574] hover:text-white"
          : "text-[#7a5a33] hover:text-[#3a6b35]"
      }`}
    >
      {open ? "Hide full profile" : "Read full profile →"}
    </button>
  );
}

/**
 * Bento-style featured card. Variant cycles by position among the
 * image-bearing profiles so the grid reads as an asymmetric mosaic
 * rather than a repeated template: spotlight (2-col) → vertical →
 * compact → dark spotlight (2-col) → repeat.
 */
function FeaturedProfileBentoCard({
  profile,
  variant,
}: {
  profile: FeaturedProfile;
  variant: "spotlight" | "vertical" | "compact" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const hasDetails = !!profile.details?.length;

  if (variant === "spotlight") {
    return (
      <motion.div
        className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-sm transition-all duration-500 hover:shadow-xl md:col-span-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Image + summary row — height depends only on this content, never
            on the expandable details below, so the photo never gets
            re-cropped when "Read full profile" is toggled. */}
        <div className="flex flex-col lg:flex-row">
          <div className="relative min-h-[280px] overflow-hidden bg-gray-100 lg:w-1/2">
            <ImageWithFallback
              src={profile.image!}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="flex flex-col justify-between p-8 lg:w-1/2 lg:p-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#3a6b35]">
                {profile.role}
              </span>
              <h3 className="mt-2 font-serif text-2xl font-medium text-gray-900 transition-colors group-hover:text-[#2d5016] lg:text-3xl">
                {profile.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{profile.summary}</p>

              {hasDetails && (
                <ReadMoreToggle open={open} onToggle={() => setOpen(!open)} tone="light" />
              )}
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <span className="text-xs font-medium text-gray-500">Featured Profile</span>
            </div>
          </div>
        </div>

        {hasDetails && open && (
          <div className="border-t border-gray-100 p-8 lg:p-10">
            <ProfileDetails open={open} details={profile.details!} tone="light" />
          </div>
        )}
      </motion.div>
    );
  }

  if (variant === "dark") {
    return (
      <motion.div
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#12210f] p-8 text-white shadow-md transition-all duration-500 hover:shadow-xl md:col-span-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#d4a574]">
            {profile.role}
          </span>
          <h3 className="mt-2 font-serif text-2xl font-medium text-white lg:text-3xl">
            {profile.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{profile.summary}</p>

          {hasDetails && (
            <>
              <ReadMoreToggle open={open} onToggle={() => setOpen(!open)} tone="dark" />
              <ProfileDetails open={open} details={profile.details!} tone="dark" />
            </>
          )}
        </div>

        <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#d4a574]">
            <ImageWithFallback
              src={profile.image!}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-xs text-white/50">Featured Profile</span>
        </div>
      </motion.div>
    );
  }

  if (variant === "compact") {
    return (
      <motion.div
        className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
              <ImageWithFallback
                src={profile.image!}
                alt={profile.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-gray-900 transition-colors group-hover:text-[#2d5016]">
                {profile.name}
              </h3>
              <span className="text-xs font-semibold text-gray-500">{profile.role}</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-600">{profile.summary}</p>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <span className="text-xs font-medium text-[#7a5a33]">Featured Profile</span>
        </div>
      </motion.div>
    );
  }

  // vertical
  return (
    <motion.div
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-2xl bg-gray-100 ring-4 ring-gray-50">
          <ImageWithFallback
            src={profile.image!}
            alt={profile.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-[#3a6b35]">
          {profile.role}
        </span>
        <h3 className="mt-1 font-serif text-2xl font-medium text-gray-900 transition-colors group-hover:text-[#2d5016]">
          {profile.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{profile.summary}</p>
      </div>
    </motion.div>
  );
}

const BENTO_VARIANTS = ["spotlight", "vertical", "compact", "dark"] as const;

const prominentMembers = [
  {
    name: "Nana Abra-Appiah",
    description: "Renowned Banker and Football Administrator",
  },
  { name: "Mr. Adjare Danquah", description: "CEO of Metalex Group" },
  {
    name: "Emmanuel Agyei",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mrs. Justice Beatrice Agyeman-Dapaah",
    description: "Distinguished member of the judiciary",
  },
  {
    name: "Mr. Bediako Amofo-Hene",
    description: "CEO of East Cantonments Pharmacy",
  },
  {
    name: "S.E. Aniniagyei",
    description: "Former Ambassador of Ghana to the United Nations",
  },
  { name: "Nana Antwi Darkwa", description: "Ghanaian Business Mogul" },
  { name: "Richard Kwame Appiah", description: "Prominent businessman" },
  {
    name: "Mr. Asiedu-Sekyere",
    description: "CEO of Virtual Security Africa and Virtual Infosec Africa",
  },
  { name: "Nana Bamfo Awobeng", description: "Alias Ebitiyie" },
  {
    name: "Lawyer Kwaku Baah",
    description: "Legal professional and community leader",
  },
  {
    name: "Mr. Bediako Sarpong",
    description: "Pioneer Pharmaceuticals Sector Businessman",
  },
  { name: "Mr. Ofosu Bediako", description: "CEO of Bedita Pharmacy" },
  {
    name: "Nana Buansi",
    description: "Prominent member of the Mpraeso community",
  },
  { name: "Mr. Okyere Darko", description: "Community leader and businessman" },
  {
    name: "Mr. Alfred Kwadwo Dankwa",
    description: "CEO of Rocksters Roofing Limited",
  },
  {
    name: "Nana Wiafe Kogyan",
    description: "Famous Ghanaian Businessman and Timber Merchant",
  },
  {
    name: "Dr. D.A. Koranteng",
    description: "Former moderator of the Presbyterian Church",
  },
  { name: "Osei Kuffour", description: "Outstanding Ghanaian Architect" },
  { name: "J.K. Mensah", description: "Alias Asikafuohene" },
  {
    name: "Madam Suzzy Mensah",
    description: "Former Member of Parliament and Former Deputy Eastern Regional Minister",
  },
  {
    name: "Nana Obenewaa",
    description: "CEO of Blackpark and Benkumhene of Mpraeso",
  },
  {
    name: "Oppong Sasu",
    description: "Former Director, Ghana Forestry Commission",
  },
  { name: "Justice Omari Sasu", description: "An Iconic Ghanaian Judge" },
  {
    name: "Obaa Yaa Sefa",
    description: "Businesswoman",
  },
  {
    name: "Hon. Amankwah Yenoah",
    description: "National Treasurer of the New Patriotic Party",
  },
  {
    name: "Nana Bamfo Gyabeng",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Omari (Omari Books)",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Anane Twenebua",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Okuma Sekyere",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Seth Edison Okyere",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. Obeng Dapaah",
    description: "Prominent member of the Mpraeso community",
  },
  {
    name: "Mr. A.Y. Dankwa",
    description: "Prominent member of the Mpraeso community",
  },
];

export function ProminentMembersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const bentoProfiles = featuredProfiles.filter((p) => p.image);
  const rosterProfiles = featuredProfiles.filter((p) => !p.image);

  const directory = [
    ...rosterProfiles.map((p) => ({ name: p.name, description: p.role })),
    ...prominentMembers,
  ];

  const filteredMembers = directory.filter((member) =>
    `${member.name} ${member.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <section className="relative overflow-hidden bg-[#12210f] py-28 md:py-36">
        {/* Stretched background photo + dark overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={sittingInState2}
            alt="The Mpraesohene sitting in state at the Mpraeso Ahenfie"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#12210f]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12210f] via-[#12210f]/55 to-[#12210f]/75" />
        </div>

        {/* Watermark text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="select-none whitespace-nowrap text-[20vw] font-extrabold uppercase leading-none tracking-tight text-white/[0.05]">
            Mpraeso
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d4a574]">
              <span className="h-px w-8 bg-[#d4a574]" />
              Distinguished Citizens
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
              Prominent Members
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
              Business leaders, academics, public servants, and community icons
              connected to Mpraeso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Profiles — bento grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl md:mb-24">
            <span className="mb-4 inline-block rounded-full border border-[#3a6b35]/20 bg-[#3a6b35]/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#3a6b35]">
              Community Leadership
            </span>
            <h2 className="font-serif text-4xl leading-[1.15] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Rooted in Mpraeso, shaping the world.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Meet the sons and daughters whose leadership, enterprise, and
              service carry the Mpraeso name across Ghana and the diaspora.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {bentoProfiles.map((profile, index) => (
              <FeaturedProfileBentoCard
                key={profile.name}
                profile={profile}
                variant={BENTO_VARIANTS[index % BENTO_VARIANTS.length]}
              />
            ))}
          </div>

          {/* Secondary roster / directory */}
          <div className="mt-20 border-t border-gray-200 pt-12">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Special Advisory &amp; Other Members
              </h3>

              <div className="relative w-full sm:max-w-xs">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search members…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm outline-none transition focus:border-[#3a6b35] focus:ring-2 focus:ring-[#3a6b35]/10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-transparent p-4 transition-all hover:border-gray-200/80 hover:bg-white hover:shadow-sm"
                >
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{member.description}</p>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <p className="mt-6 text-gray-500">No members found for “{searchTerm}”.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
