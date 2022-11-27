import Section from "../components/Skeleton/Section";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certificate from "../components/Certificate";
import dataskills from "../assets/experience/dataskillsproject.jpeg"
import magarajam3 from "../assets/experience/magarajam3.png"
import magarajam2 from "../assets/experience/magarajam2.png"
import magicaldrop1 from "../assets/experience/magicaldrop1.jpg"
import magicaldrop2 from "../assets/experience/magicaldrop2.jpg"
import highschool from "../assets/education/highschool.png"
import associate from "../assets/education/associatedegree.png"
import bachelor from "../assets/education/bachelor.png"
import cert_audacity from "../assets/certificates/audacity.png"
import cert_datascience from "../assets/certificates/datascience.png"
import cert_dataskills from "../assets/certificates/dataskills.png"
import cert_datavisualization from "../assets/certificates/datavisualization.png"
import cert_digitalliterate401 from "../assets/certificates/digitalliterate401.png"
import cert_excel from "../assets/certificates/excel.png"
import cert_gimp from "../assets/certificates/gimp.png"
import cert_linux401 from "../assets/certificates/linux401.png"
import cert_powerpoint from "../assets/certificates/powerpoint.png"
import cert_python from "../assets/certificates/python.png"
import cert_python401 from "../assets/certificates/python401.png"
import cert_react201 from "../assets/certificates/react201.png"
import cert_timemanagement from "../assets/certificates/timemanagement.png"
import cert_web402 from "../assets/certificates/web402.png"
import cert_webusability from "../assets/certificates/webusability.png"
import cert_diction from "../assets/certificates/diction.png"
import thumb_audacity from "../assets/certificates/thumb/audacity.png"
import thumb_datascience from "../assets/certificates/thumb/datascience.png"
import thumb_dataskills from "../assets/certificates/thumb/dataskills.png"
import thumb_datavisualization from "../assets/certificates/thumb/datavisualization.png"
import thumb_digitalliterate401 from "../assets/certificates/thumb/digitalliterate401.png"
import thumb_excel from "../assets/certificates/thumb/excel.png"
import thumb_gimp from "../assets/certificates/thumb/gimp.png"
import thumb_linux401 from "../assets/certificates/thumb/linux401.png"
import thumb_powerpoint from "../assets/certificates/thumb/powerpoint.png"
import thumb_python from "../assets/certificates/thumb/python.png"
import thumb_python401 from "../assets/certificates/thumb/python401.png"
import thumb_react201 from "../assets/certificates/thumb/react201.png"
import thumb_timemanagement from "../assets/certificates/thumb/timemanagement.png"
import thumb_web402 from "../assets/certificates/thumb/web402.png"
import thumb_webusability from "../assets/certificates/thumb/webusability.png"
import thumb_diction from "../assets/certificates/thumb/diction.png"


const certificates = [
  "audacity",
  "datascience",
  "dataskills",
  "datavisualization",
  "digitalliterate401",
  "excel",
  "gimp",
  "linux401",
  "powerpoint",
  "python",
  "python401",
  "react201",
  "timemanagement",
  "web402",
  "webusability",
]

function Resume() {

  return <Section>
    <h1>Resume</h1>
    <h2>Experience</h2>

    <Experience
      data={{
        title: "Development Counts: Data Skills for International Development Careers Project Associates",
        link: "https://www.linkedin.com/groups/12455248/",
        role: "Data Visualizer",
        date: "13 September 2021 - 26 May 2022"
      }}
      badges={[
        ["Erasmus+-C70A0C", "turkishairlines"],
        ["R-276DC3", "r"],
        ["Python-3776AB", "python"],
        ["NumPy-013243", "numpy"],
        ["Pandas-150458", "pandas"],
        ["MatPlotLib-E10098", "graphql"]
      ]}
      medias={[
        { type: "iframe", src: "https://www.youtube.com/embed/ZoupbI2zZC0", title: "Development Counts" },
        { type: "img", src: dataskills, title: "Data Skills Project Members" },
      ]}
      className="float-right"
    >
      <p>The aim of this project was to read, manipulate, visualize and interpret the given data and to get ability to take decisions in the current situation. Second aim was getting ability to work remote in international groups.</p>
      <p>Co-founded by the ERASMUS+ program of the European Union under grant agreement 2019‐1‐UK01‐KA203‐061973 and led by the University of Gloucestershire in the UK, in collaboration with Gazi Üniversitesi (Turkey), L-Università ta’ Malta (Malta) and Universidad Nacional de Educación a Distancia (UNED, Spain).</p>
    </Experience>

    <Experience
      data={{
        title: "Magara Jam #3",
        link: "https://itch.io/jam/magara-jam-3/rate/1122551",
        role: "Game Developer",
        date: "9-12 July 2021"
      }}
      badges={[
        ["Gimp-5C5543", "gimp"],
        ["Python-3776AB", "python"],
        ["PyGame-660066", "gamejolt"],
        ["Qt_5-41CD52", "qt"]
      ]}
      medias={[
        { type: "img", src: magarajam3, title: "Magara Jam #3 Ticket" },
        { type: "iframe", src: "https://www.youtube.com/embed/NIr81TOBMjk", title: "Dud OS gameplay video" },
      ]}
      className="float-left"
    >
      <p>I designed a game resources and desktop windows for a game that named Dud OS in 24 hours, with my teammate.</p>
      <p>Imagine you are an engineer and you came into a job without meeting required skills. But this job is developing a power suit, to kill aliens. You can guess, things don't go as expected. You must remote connect to the power suit and fix bugs in codes. In this way the evrenaut can go and kill alien boss.</p>
    </Experience>

    <Experience
      data={{
        title: "Magara Jam #2",
        link: "https://itch.io/jam/atom-gamejam-2/rate/921227",
        role: "Game Developer",
        date: "9-12 July 2021"
      }}
      badges={[
        ["Gimp-5C5543", "gimp"],
        ["Game_Maker_Studio_2-556DB3", "gamejolt"]
      ]}
      medias={[
        { type: "img", src: magarajam2, title: "Magara Jam #2 Ticket" },
        { type: "iframe", src: "https://www.youtube.com/embed/npgoK3XVwZc", title: "Sudo Mice Gameplay Video" },
      ]}
      className="float-right"
    >
      <p>This game made by Furkan Baytekin and Enes Baytekin in 48 hours for At0m Game Jam #2.</p>
      <p>The graphics and music of the game are specially drawn and composed for this game.</p>
      <p>Two mice playing a computer game on the keyboard, writing unit calling codes and trying to destroy the enemy castle. However, the troops die by fighting each other before they can hit the castle. Mice with the ambition to win plan to cheat and beat each other, but they are not the only ones who can cheat.</p>
    </Experience>

    <Experience
      data={{
        title: "Atom Game Jam",
        link: "https://itch.io/jam/atom-gamejam/rate/771159",
        role: "Game Developer",
        date: "9-12 July 2021"
      }}
      badges={[
        ["Gimp-5C5543", "gimp"],
        ["Game_Maker_Studio_2-556DB3", "gamejolt"],
        ["Audacity-0000CC", "audacity"]
      ]}
      medias={[
        { type: "img", src: "https://img.itch.zone/aW1nLzQzMTQ4MDMucG5n/original/mu2BnF.png", title: "At0m Game Jam Submission" },
        { type: "img", src: "https://img.itch.zone/aW1nLzQzMTQ3OTAucG5n/original/iGk2t5.png", title: "At0m Game Jam Gameplay" },
      ]}
      className="float-left"
    >
      <p>This game made for a game jam in 3 days. I coded the game, drew assets produced sfx and composed music alone. This was a prototype. A platformer puzzle game.</p>
      <p>Teleport, Reflective bullets, levers, pressure plates and floating boxes are included. There are collectible fruits to gain score.</p>
    </Experience>

    <Experience
      data={{
        title: "Büyülü Katre Şiir Dinletisi (Magical Drop Poetry Concert)",
        link: "https://www.hurriyet.com.tr/yerel-haberler/ankara/liselilerden-siirli-kutlama-40789302",
        role: "Musician",
        date: "21 March 2018"
      }}
      badges={[
        ["Bass_Guitar-68BC71", "clyp"],
        ["MuseScore-1A70B8", "musescore"]
      ]}
      medias={[
        { type: "img", src: magicaldrop1, title: "Musician Staff" },
        { type: "img", src: magicaldrop2, title: "All Staff" },
      ]}
      className="float-right"
    >
      <p>A poetry concert organized by Mrs. Vildan Kaya Erbatur and Mr. Aydın Afacan. Lots of students who love Turkish literature or who want to support this concert by playing font music have joined this activity.</p>
      <p>I took a part of font music band as bass guitar player. That was an amazing experience for me. The music is not even complicated, but being a part of this big organization made me glad.</p>
    </Experience>

    <h2>Education</h2>

    <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">

      <Education data={{
        level: "Bachelor",
        school: "Gazi University Department of Turkish Education",
        date: "2019-2023",
        logo: bachelor
      }} styles="colspan-2">
        <p>I joined an international project thanks to Erasmus+ organization.</p>
        <p>Been participant of Gazi BlockChain Community and Erasmus Student Network.</p>
      </Education>

      <Education data={{
        level: "Associate Degree",
        school: "Anadolu University Department of Web Design and Coding",
        date: "2021-2023",
        logo: associate
      }} >
        <p>I wanted to learn about legal information about online publishing, to rectify knowledge gaps and to get a degree about my self-taught skills.</p>
      </Education>

      <Education data={{
        level: "High School",
        school: "Kocatepe Mimar Kemal Anatolian High School",
        date: "2014-2018",
        logo: highschool
      }}>
        <p>Played bass guitar regularly on school concerts and shows.</p>
        <p>Composed my own musics in the kind of orchestral and metal usin digital audio workstations and virtual sound technologies .</p>
      </Education>

    </div>

    <h2>Volunteer Projects</h2>

    <Experience
      data={{
        title: "Linux for Everyone (Herkes İçin Linux)",
        link: "https://www.youtube.com/channel/UCIWYzLPBy2Av4sgUsRClP0g",
        role: "Content Creator",
        date: "Continues Actively"
      }}
      badges={[
        ["Audacity-0000CC", "audacity"],
        ["OBS Studio-302E31", "obsstudio"],
        ["Kdenlive-527EB2", "kdenlive"],
        ["Gimp-5C5543", "gimp"],
        ["Youbue-FF0000", "youtube"],
        ["Dub-Turkish-db0a16", "homeassistantcommunitystore"],
        ["Sub-English-11145b", "googleearth"],
      ]}
      medias={[
        { type: "iframe", src: "https://www.youtube.com/embed/5hOl1f2bTFw", title: "How to Remote Connect over SSH?" },
        { type: "iframe", src: "https://www.youtube.com/embed/vUQ2Go-00j0", title: "File Transfer Between Machines over SSH with SCP" },
        { type: "iframe", src: "https://www.youtube.com/embed/xUOxfuuXaI4", title: "10 Commands to Consider When Running" },
        { type: "iframe", src: "https://www.youtube.com/embed/zkrMztT3GCU", title: "Differences Between Su & Sudo" },
        { type: "iframe", src: "https://www.youtube.com/embed/SOHeN75eOs4", title: "Flatpak Killer LURE: The New Future of Linux Packaging" },
        { type: "iframe", src: "https://www.youtube.com/embed/kI1r4EqAE9Q", title: "File Permissions in Linux Explained (With Subtitles)" },
        { type: "iframe", src: "https://www.youtube.com/embed/tBIqidKPLrA", title: "Multi-Boot via Ventoy" },
        { type: "iframe", src: "https://www.youtube.com/embed/Q2XNy1j-0Ao", title: "Preparing a Windows Installation Disc in Linux" },
        { type: "iframe", src: "https://www.youtube.com/embed/wTwzrewzObw", title: "Oh-My-Zsh Framework and My Customizations" }
      ]}
      className="float-left !w-2/3 max-md:!w-[unset]"
    >
      <p>I have start a project to make people less afraid about Linux and make them to use Linux based OSes. I have record videos about Linux and write articles about what Linux is, how it works and how to use it.</p>
    </Experience>

    <h2>Licenses and Certifications</h2>

    <Certificate data={{
      title: "Data Skills for Global Development Training Programme (1 ed. 2021)",
      thumb: thumb_dataskills,
      document: cert_dataskills,
      instructor: "UNED Abierta",
      credential: "ee351373e8a346ecacba0ebe6a10d39a",
      link: "https://iedra.uned.es/certificates/ee351373e8a346ecacba0ebe6a10d39a"
    }} />

    <Certificate data={{
      title: "Temel Linux 401",
      thumb: thumb_linux401,
      document: cert_linux401,
      instructor: "Muhammed Burak Şentürk",
      credential: "https://gelecegiyazanlar.turkcell.com.tr",
      link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/Temel%20Linux/401"
    }} />

    <Certificate data={{
      title: "React",
      thumb: thumb_react201,
      document: cert_react201,
      instructor: "Mehmet Seven",
      credential: "https://gelecegiyazanlar.turkcell.com.tr",
      link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/React/201"
    }} />

    <Certificate data={{
      title: "Python Programlama 401",
      thumb: thumb_python401,
      document: cert_python401,
      instructor: "Mustafa Vahit Keskin",
      credential: "https://gelecegiyazanlar.turkcell.com.tr",
      link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/Python/401"
    }} />

    <Certificate data={{
      title: "Web Programlama",
      thumb: thumb_web402,
      document: cert_web402,
      instructor: "Geleceği Yazanlar Team",
      credential: "https://gelecegiyazanlar.turkcell.com.tr",
      link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/Web%20Programlama/402"
    }} />

    <Certificate data={{
      title: "Data Science ve Python: Sıfırdan Uzmanlığa Veri Bilimi (2)",
      thumb: thumb_datascience,
      document: cert_datascience,
      instructor: "Datai Team",
      credential: "UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064",
      link: "https://www.udemy.com/certificate/UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064"
    }} />

    <Certificate data={{
      title: "Data Visualization: A'dan Z'ye Veri Görselleştirme (3)",
      thumb: thumb_datavisualization,
      document: cert_datavisualization,
      instructor: "Datai Team",
      credential: "UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8",
      link: "https://www.udemy.com/certificate/UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8"
    }} />

    <Certificate data={{
      title: "MS Excel | Sıfırdan İleri Seviye Excel Öğren | Sertifikalı",
      thumb: thumb_excel,
      document: cert_excel,
      instructor: "Oğuzhan Çolak",
      credential: "UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6",
      link: "https://www.udemy.com/certificate/UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6"
    }} />

    <Certificate data={{
      title: "Microsoft PowerPoint Kursu | Sertifikalı | 2021",
      thumb: thumb_powerpoint,
      document: cert_powerpoint,
      instructor: "Tuncay Erol",
      credential: "UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6",
      link: "https://www.udemy.com/certificate/UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6"
    }} />

    <Certificate data={{
      title: "Dijital Okuryazarlık",
      thumb: thumb_digitalliterate401,
      document: cert_digitalliterate401,
      instructor: "Ender Can Kamoy",
      credential: "https://gelecegiyazanlar.turkcell.com.tr",
      link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/Dijital%20Okuryazarl%C4%B1k/401"
    }} />

    <Certificate data={{
      title: "Time Management A-Z: Ultimate Productivity Skills Workshop",
      thumb: thumb_timemanagement,
      document: cert_timemanagement,
      instructor: "Dr. Barış Tunçbilek",
      credential: "UC-399f6f82-f322-4661-8d2d-a57616152405",
      link: "https://www.udemy.com/certificate/UC-399f6f82-f322-4661-8d2d-a57616152405"
    }} />

    <Certificate data={{
      title: "Diksiyon Kursu",
      thumb: thumb_diction,
      document: cert_diction,
      instructor: "Bilal Semih Bozdemir",
      credential: "UC-76e450e3-a2b2-4369-b77f-275f2ef125aa",
      link: "https://www.udemy.com/certificate/UC-76e450e3-a2b2-4369-b77f-275f2ef125aa/"
    }} />

    <Certificate data={{
      title: "Gimp Kullanarak Resimler Üzerinde Çalışmak",
      thumb: thumb_gimp,
      document: cert_gimp,
      instructor: "METU (OTDÜ)",
      credential: "f9f6bbf0-b9dc-11ec-8d33-3d2f3f5d013e",
      link: "https://bilgeis.net/moodle/mod/simplecertificate/verify.php?code=f9f6bbf0-b9dc-11ec-8d33-3d2f3f5d013e"
    }} />

    <Certificate data={{
      title: "Audacity Programı ile Tanışalım",
      thumb: thumb_audacity,
      document: cert_audacity,
      instructor: "METU (OTDÜ)",
      credential: "8de951d0-bdb4-11ec-9fc4-53ca49c96480",
      link: "https://bilgeis.net/moodle/mod/simplecertificate/verify.php?code=8de951d0-bdb4-11ec-9fc4-53ca49c96480"
    }} />

  </Section >
}

export default Resume
