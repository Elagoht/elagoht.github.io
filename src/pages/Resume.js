import Section from "../components/Skeleton/Section";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certificate from "../components/Certificate";
import assets from "../assets"
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react";
import { h2s, mainTitle } from "../translations/Resume";

function Resume() {

  const { language } = useContext(LanguageContext)

  return <Section>
    {mainTitle[language]}
    {h2s[language][0]}

    <Experience
      data={{
        title: {
          tr: "Gelişim Önemlidir: Uluslararası Gelişim için Veri Yetkinlikleri Kariyer Proje Ortakları",
          en: "Development Counts: Data Skills for International Development Careers Project Associates",
        },
        link: "https://www.linkedin.com/groups/12455248/",
        role: {
          tr: "Veri Görselleştirici",
          en: "Data Visualizer",

        },
        date: {
          tr: "13 Eylül 2021 - 26 Mayıs 2022",
          en: "13 September 2021 - 26 May 2022"
        }
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
        { type: "iframe", src: "https://www.youtube.com/embed/ZoupbI2zZC0", title: { tr: "Gelişim Önemlidir", en: "Development Counts" } },
        { type: "img", src: assets.dataskills, title: { tr: "Veri Yetkinlikleri Proje Üyeleri", en: "Data Skills Project Members" } },
      ]}
      className="float-right"
    >
      {language === "tr"
        ? <>
          <p>Bu projenin amacı, verilen verileri okumak, manipüle etmek, görselleştirmek, yorumlamak, mevcut durumda karar verebilme ve bunları <b>sürdürülebilir kalkınma hedefleri</b> doğrultusunda kullanma becerisi kazanmaktır. İkinci amaç ise uluslararası gruplarda uzaktan çalışma deneyimi kazandırmaktır.</p>
          <p>Avrupa Birliği'nin ERASMUS+ programı tarafından 2019-1-UK01-KA203-061973 hibe sözleşmesi kapsamında Gloucestershire University (İngiltere) tarafından Gazi Üniversitesi ile işbirliği içinde yönetilen L-Università ta' Malta (Malta) ve Universidad Nacional de Educación a Distancia (UNED, İspanya) ile ortaklaşa gerçekleştirilmiştir.</p>
        </>
        : <>
          <p>The aim of this project was to read, manipulate, visualize and interpret the given data and to get ability to take decisions in the current situation to use that abilities for <b>sustainable development goals</b>. Second aim was getting ability to work remote in international groups.</p>
          <p>Co-founded by the ERASMUS+ program of the European Union under grant agreement 2019‐1‐UK01‐KA203‐061973 and led by the University of Gloucestershire (UK), in collaboration with Gazi Üniversitesi (Turkey), L-Università ta’ Malta (Malta) and Universidad Nacional de Educación a Distancia (UNED, Spain).</p>
        </>
      }
    </Experience>

    <Experience
      data={{
        title: {
          tr: "Mağara Jam #3",
          en: "Magara Jam #3"
        },
        link: "https://itch.io/jam/magara-jam-3/rate/1122551",
        role: {
          tr: "Oyun Geliştirici",
          en: "Game Developer"
        },
        date: {
          tr: "9-12 Temmuz 2021",
          en: "9-12 July 2021"
        }
      }}
      badges={[
        ["Gimp-5C5543", "gimp"],
        ["Python-3776AB", "python"],
        ["PyGame-660066", "gamejolt"],
        ["Qt_5-41CD52", "qt"]
      ]}
      medias={[
        { type: "img", src: assets.magarajam3, title: { tr: "Mağara Jam #3 Bileti", en: "Magara Jam #3 Ticket" } },
        { type: "iframe", src: "https://www.youtube.com/embed/NIr81TOBMjk", title: { tr: "Dandik OS Oynanış Videosu", en: "Dud OS Gameplay Video" } },
      ]}
      className="float-left"
    >
      {language === "tr"
        ? <>
          <p>Takım arkadaşım Enes Baytekin'le birlikte 24 saatte yaptığımız Dud OS adlı bu oyun için çizimler ve bölüm tasarımı yapıp ve oyunun ana mekaniği olan masaüstü pencerelerini tasarladım.</p>
          <p>Bir mühendis olduğunuzu ve gerekli becerilere sahip olmadan bir işe girdiğinizi hayal edin. Ancak bu iş, uzaylıları öldürmek için bir güç kıyafeti geliştirmek. Tahmin edebileceğiniz üzere işler umulduğu gibi gitmez. Güç kıyafetine uzaktan bağlanmalı ve kodlardaki hataları düzeltmelisiniz. Ancak bu sayede evrenot gidip uzaylı yaratığı öldürebilir.</p>
        </>
        : <>
          <p>I designed resources, levels and desktop windows that is the main mechanics, of this game that named Dud OS we made in 24 hours, with my teammate Enes Baytekin.</p>
          <p>Imagine you are an engineer and you came into a job without meeting required skills. But this job is developing a power suit, to kill aliens. You can guess, things don't go as expected. You must remote connect to the power suit and fix bugs in codes. Only in this way the evrenaut can go and kill alien boss.</p>
        </>
      }
    </Experience>

    <Experience
      data={{
        title: {
          tr: "Mağara Jam #2",
          en: "Magara Jam #2"
        },
        link: "https://itch.io/jam/atom-gamejam-2/rate/921227",
        role: {
          tr: "Oyun Geliştirici",
          en: "Game Developer"
        },
        date: {
          tr: "12-15 Şubat 2021",
          en: "9-12 February 2021"
        }
      }}
      badges={[
        ["Gimp-5C5543", "gimp"],
        ["Game_Maker_Studio_2-556DB3", "gamejolt"]
      ]}
      medias={[
        { type: "img", src: assets.magarajam2, title: { tr: "Mağara Jam #2 Bileti", en: "Magara Jam #2 Ticket" } },
        { type: "iframe", src: "https://www.youtube.com/embed/npgoK3XVwZc", title: { tr: "Sudo Mice Oynanış Videosu", en: "Sudo Mice Gameplay Video", } },
      ]}
      className="float-right"
    >
      {language === "tr"
        ? <>
          <p>Ekip arkadaşım Enes Baytekin ile birlikte Mağara Game Jam #2 için 48 saatte bir oyun geliştirdik.</p>
          <p>Oyunun grafikleri bu oyun için özel olarak çizilmiş ve müzikleri özel olarak bestelenmiştir.</p>
          <p>Klavye üzerinde bilgisayar oyunu oynayan, birlik çağırma kodları yazan ve düşman kalesini yok etmeye çalışan iki fare bu oyunun karakterleridir. Ancak çağrılan birlikler düşman kalesine varamadan savaşarak ölürler. Kazanma hırsına sahip bu fareler ise hile yapmayı ve birbirlerini yenmeyi planlarlar ancak hile yapabilen sadece kendileri değildir.</p>
        </>
        : <>
          <p>This game made by Furkan Baytekin and Enes Baytekin in 48 hours for Magara Game Jam #2.</p>
          <p>The graphics and music of the game are specially drawn and composed for this game.</p>
          <p>Two mice playing a computer game on the keyboard, writing unit calling codes and trying to destroy the enemy castle. However, the troops die by fighting each other before they can hit the castle. Mice with the ambition to win plan to cheat and beat each other, but they are not the only ones who can cheat.</p>
        </>
      }
    </Experience>

    <Experience
      data={{
        title: {
          tr: "Atom Game Jam",
          en: "Atom Game Jam"
        },
        link: "https://elagoht.itch.io/is-there-a-game",
        role: {
          tr: "Oyun Geliştirici",
          en: "Game Developer",
        },
        date: {
          tr: "28-31 Eylül 2020",
          en: "28-31 September 2020"
        }
      }}
      badges={[
        ["Gimp-5C5543", "gimp"],
        ["Game_Maker_Studio_2-556DB3", "gamejolt"],
        ["Audacity-0000CC", "audacity"]
      ]}
      medias={[
        { type: "img", src: "https://img.itch.zone/aW1nLzQzMTQ4MDMucG5n/original/mu2BnF.png", title: { tr: "At0m Game Jam Gönderimi", en: "At0m Game Jam Submission" } },
        { type: "img", src: "https://img.itch.zone/aW1nLzQzMTQ3OTAucG5n/original/iGk2t5.png", title: { tr: "Is There A Game Oynanışı", en: "Is There A Game The Gameplay" } },
      ]}
      className="float-left"
    >
      {language === "tr"
        ? <>
          <p>Bu oyun 3 gün içinde bir oyun yapma yarışması (game jam) için yapılmıştır. Tüm bir oyun kodladım, ses efektleri ürettim görseller çizdim ve tek başıma müzik besteledim. 3 günde ancak bu prototip ortaya çıktı: bir platform bulmaca oyunu.</p>
          <p>Işınlanma, yansıtıcı mermiler, kaldıraçlar, basınç plakaları ve uçan kutular dahildir. Puan kazanmak için toplanabilir meyveler de var.</p>
        </>
        : <>
          <p>This game made for a game jam in 3 days. I coded the game, drew assets produced sfx and composed music alone. I could only create this prototyope in 3 days: a platformer puzzle game.</p>
          <p>Teleport, reflective bullets, levers, pressure plates and floating boxes are included. There are collectible fruits to gain score.</p>
        </>
      }
    </Experience>

    <Experience
      data={{
        title: {
          tr: "Büyülü Katre Şiir Dinletisi",
          en: "Magical Drop Poetry Concert"
        },
        link: "https://www.hurriyet.com.tr/yerel-haberler/ankara/liselilerden-siirli-kutlama-40789302",
        role: {
          tr: "Müzisyen (Bas Gitarist)",
          en: "Musician (Bass Guitarist)",
        },
        date: {
          tr: "21 Mart 2018",
          en: "21 March 2018"
        }
      }}
      badges={[
        ["Bass_Guitar-68BC71", "clyp"],
        ["MuseScore-1A70B8", "musescore"]
      ]}
      medias={[
        { type: "img", src: assets.magicaldrop1, title: { tr: "Müzisyen Ekip", en: "Musician Staff" } },
        { type: "img", src: assets.magicaldrop2, title: { tr: "Tüm Ekip", en: "All Staff" } },
      ]}
      className="float-right"
    >
      {language === "tr"
        ? <>
          <p>Vildan Kaya Erbatur ve Aydın Afacan tarafından düzenlenen şiir dinletisi. Türk edebiyatını seven ya da bu konsere fon müziği çalarak destek olmak isteyen birçok öğrenci bu etkinliğe katıldı.</p>
          <p>Fon müzik grubuna bas gitarist olarak katıldım. Bu benim için inanılmaz bir deneyimdi. Müzik karmaşık, çalması zor bile değil ama bu büyük organizasyonun bir parçası olmak beni mutlu etti.</p>
        </>
        : <>
          <p>A poetry concert organized by Mrs. Vildan Kaya Erbatur and Mr. Aydın Afacan. Lots of students who love Turkish literature or who want to support this concert by playing font music have joined this activity.</p>
          <p>I took a part of font music band as bass guitar player. That was an amazing experience for me. The music is not even complicated, but being a part of this big organization made me glad.</p>
        </>
      }
    </Experience>

    {h2s[language][1]}

    <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">

      <Education data={{
        level: {
          tr: "Lisans",
          en: "Bachelor",
        },
        school: {
          tr: "Gazi Üniversitesi Türkçe Öğretmenliği Bölümü",
          en: "Gazi University Department of Turkish Education"
        },
        date: "2019-2023",
        logo: assets.bachelor
      }} styles="colspan-2">
        {language === "tr"
          ? <>
            <p>Erasmus+ organizasyonu sayesinde uluslararası bir veri bilimi projesine katıldım.</p>
            <p>Gazi BlockChain Topluluğu ve Erasmus Öğrenci Ağına katıldım.</p>
          </>
          : <>
            <p>I joined an international data science project thanks to Erasmus+ organization.</p>
            <p>Been participant of Gazi BlockChain Community and Erasmus Student Network.</p>
          </>
        }
      </Education>

      <Education data={{
        level: {
          tr: "Önlisans",
          en: "Associate Degree"
        },
        school: {
          tr: "Anadolu Üniversitesi Web Tasarım ve Kodlama Bölümü",
          en: "Anadolu University Department of Web Design and Coding"
        },
        date: "2021-2023",
        logo: assets.associate
      }} >
        {language === "tr"
          ? <p>Çevrimiçi yayıncılıkla ilgili yasal bilgiler hakkında bilgi edinmek, bilgi eksikliklerini gidermek ve kendi kendime öğrendiğim beceriler hakkında bir diploma elde etmek istiyordum.</p>
          : <p>I wanted to learn about legal information about online publishing, to rectify knowledge gaps and to get a degree about my self-taught skills.</p>
        }
      </Education>

      <Education data={{
        level: {
          tr: "Lise",
          en: "High School",
        },
        school: {
          tr: "Kocatepe Mimar Kemal Anadolu Lisesi",
          en: "Kocatepe Mimar Kemal Anatolian High School"
        },
        date: "2014-2018",
        logo: assets.highschool
      }}>
        {language === "tr"
          ? <>
            <p>Okul konserlerinde ve gösterilerinde düzenli olarak bas gitar çaldım.</p>
            <p>Dijital ses çalışma alanları (DAW) ve sanal ses teknolojilerini kullanarak kendi orkestral ve metal türündeki müziklerimi besteledim.</p>
          </>
          : <>
            <p>I played bass guitar regularly on school concerts and shows.</p>
            <p>I composed my own musics in the kind of orchestral and metal using digital audio workstations (DAW) and virtual sound technologies.</p>
          </>
        }
      </Education>

    </div>

    {h2s[language][2]}

    <Experience
      data={{
        title: {
          tr: "Herkes İçin Linux Youtube Kanalı",
          en: "Linux for Everyone YouTube Channel"
        },
        link: "https://www.youtube.com/channel/UCIWYzLPBy2Av4sgUsRClP0g",
        role: {
          tr: "İçerik Üretici",
          en: "Content Creator",
        },
        date: {
          tr: "Aktif Olarak Devam Ediyor",
          en: "Continues Actively"
        }
      }}
      badges={[
        ["Audacity-0000CC", "audacity"],
        ["OBS Studio-302E31", "obsstudio"],
        ["Kdenlive-527EB2", "kdenlive"],
        ["Gimp-5C5543", "gimp"],
        ["YouTube-FF0000", "youtube"],
        ["Dub-" + (language === "tr" ? "Türkçe" : "Turkish") + "-db0a16", "homeassistantcommunitystore"],
        [(language === "tr" ? "Alt-İngilizce" : "Sub-English") + "-11145b", "googleearth"],
      ]}
      medias={[
        { type: "iframe", src: "https://www.youtube.com/embed/5hOl1f2bTFw", title: { tr: "Uzaktaki Makineye SSH ile Nasıl Bağlanılır?", en: "How to Remote Connect over SSH?" } },
        { type: "iframe", src: "https://www.youtube.com/embed/vUQ2Go-00j0", title: { tr: "SSH Üzerinden Dosya Aktarımı | SCP (Secure Copy)", en: "File Transfer Between Machines over SSH with SCP" } },
        { type: "iframe", src: "https://www.youtube.com/embed/xUOxfuuXaI4", title: { tr: "Çalıştırırken Dikkat Etmeniz Gereken 10 Komut", en: "10 Commands to Consider When Running" } },
        { type: "iframe", src: "https://www.youtube.com/embed/zkrMztT3GCU", title: { tr: "Su ve Sudo Arasındaki Farklar", en: "Differences Between Su & Sudo" } },
        { type: "iframe", src: "https://www.youtube.com/embed/SOHeN75eOs4", title: { tr: "Flatpak Katili LURE: Linux Paketlerinin Yeni Geleceği", en: "Flatpak Killer LURE: The New Future of Linux Packaging" } },
        { type: "iframe", src: "https://www.youtube.com/embed/kI1r4EqAE9Q", title: { tr: "Linux Sistemlerde Dosya İzinleri", en: "File Permissions in Linux Explained (With Subtitles)" } },
        { type: "iframe", src: "https://www.youtube.com/embed/tBIqidKPLrA", title: { tr: "Ventoy ile Çoklu Medya Başlatma", en: "Multi-Boot via Ventoy" } },
        { type: "iframe", src: "https://www.youtube.com/embed/Q2XNy1j-0Ao", title: { tr: "Linux'ta Windows Kurulum Diski Hazırlamak", en: "Preparing a Windows Installation Disc in Linux" } },
        { type: "iframe", src: "https://www.youtube.com/embed/wTwzrewzObw", title: { tr: "Oh-My-Zsh Çerçevesi ve Kişiselleştirmelerim", en: "Oh-My-Zsh Framework and My Customizations" } }
      ]}
      className="float-left !w-full max-md:!w-[unset]"
    >
      {language === "tr"
        ? <p>İnsanların Linux'tan daha az korkmasını sağlamak ve Linux tabanlı işletim sistemlerini kullanmalarını sağlamak için bir proje başlattım. Linux hakkında videolar kaydediyor; Linux'un ne olduğu, nasıl çalıştığı ve nasıl kullanılacağı hakkında makaleler yazıyorum.</p>
        : <p>I have start a project to make people less afraid about Linux and make them to use Linux based OSes. I have record videos about Linux and write articles about what Linux is, how it works and how to use it.</p>
      }
    </Experience>

    {h2s[language][3]}

    <div className="grid grid-cols-1 gap-4">

      <Certificate data={{
        title: "Data Skills for Global Development Training Programme (1 ed. 2021)",
        thumb: assets.thumb_dataskills,
        document: assets.cert_dataskills,
        instructor: "UNED Abierta",
        credential: "ee351373e8a346ecacba0ebe6a10d39a",
        link: "https://iedra.uned.es/certificates/ee351373e8a346ecacba0ebe6a10d39a"
      }} />

      <Certificate data={{
        title: "Temel Linux 401",
        thumb: assets.thumb_linux401,
        document: assets.cert_linux401,
        instructor: "Muhammed Burak Şentürk",
        credential: "https://gelecegiyazanlar.turkcell.com.tr",
        link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/Temel%20Linux/401"
      }} />

      <Certificate data={{
        title: "React",
        thumb: assets.thumb_react201,
        document: assets.cert_react201,
        instructor: "Mehmet Seven",
        credential: "https://gelecegiyazanlar.turkcell.com.tr",
        link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/React/201"
      }} />

      <Certificate data={{
        title: "Python Programlama 401",
        thumb: assets.thumb_python401,
        document: assets.cert_python401,
        instructor: "Mustafa Vahit Keskin",
        credential: "https://gelecegiyazanlar.turkcell.com.tr",
        link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/Python/401"
      }} />

      <Certificate data={{
        title: "Sıfırdan İleri Seviye Python Programlama",
        thumb: assets.thumb_python,
        document: assets.cert_python,
        instructor: "BTK Bilge İş",
        credential: "yjahJ6e1oy",
        link: "#"
      }} />

      <Certificate data={{
        title: "Web Programlama",
        thumb: assets.thumb_web402,
        document: assets.cert_web402,
        instructor: "Geleceği Yazanlar Team",
        credential: "https://gelecegiyazanlar.turkcell.com.tr",
        link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/Web%20Programlama/402"
      }} />

      <Certificate data={{
        title: "Web Sitesi Kullanılabilirliği",
        thumb: assets.thumb_webusability,
        document: assets.cert_webusability,
        instructor: "BTK Bilge İş",
        credential: "yjahJ6e1oy",
        link: "#"
      }} />

      <Certificate data={{
        title: "Data Science ve Python: Sıfırdan Uzmanlığa Veri Bilimi (2)",
        thumb: assets.thumb_datascience,
        document: assets.cert_datascience,
        instructor: "Datai Team",
        credential: "UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064",
        link: "https://www.udemy.com/certificate/UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064"
      }} />

      <Certificate data={{
        title: "Data Visualization: A'dan Z'ye Veri Görselleştirme (3)",
        thumb: assets.thumb_datavisualization,
        document: assets.cert_datavisualization,
        instructor: "Datai Team",
        credential: "UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8",
        link: "https://www.udemy.com/certificate/UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8"
      }} />

      <Certificate data={{
        title: "MS Excel | Sıfırdan İleri Seviye Excel Öğren | Sertifikalı",
        thumb: assets.thumb_excel,
        document: assets.cert_excel,
        instructor: "Oğuzhan Çolak",
        credential: "UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6",
        link: "https://www.udemy.com/certificate/UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6"
      }} />

      <Certificate data={{
        title: "Microsoft PowerPoint Kursu | Sertifikalı | 2021",
        thumb: assets.thumb_powerpoint,
        document: assets.cert_powerpoint,
        instructor: "Tuncay Erol",
        credential: "UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6",
        link: "https://www.udemy.com/certificate/UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6"
      }} />

      <Certificate data={{
        title: "Dijital Okuryazarlık",
        thumb: assets.thumb_digitalliterate401,
        document: assets.cert_digitalliterate401,
        instructor: "Ender Can Kamoy",
        credential: "https://gelecegiyazanlar.turkcell.com.tr",
        link: "https://gelecegiyazanlar.turkcell.com.tr/kisi/belge/elagoht/Dijital%20Okuryazarl%C4%B1k/401"
      }} />

      <Certificate data={{
        title: "Time Management A-Z: Ultimate Productivity Skills Workshop",
        thumb: assets.thumb_timemanagement,
        document: assets.cert_timemanagement,
        instructor: "Dr. Barış Tunçbilek",
        credential: "UC-399f6f82-f322-4661-8d2d-a57616152405",
        link: "https://www.udemy.com/certificate/UC-399f6f82-f322-4661-8d2d-a57616152405"
      }} />

      <Certificate data={{
        title: "Diksiyon Kursu",
        thumb: assets.thumb_diction,
        document: assets.cert_diction,
        instructor: "Bilal Semih Bozdemir",
        credential: "UC-76e450e3-a2b2-4369-b77f-275f2ef125aa",
        link: "https://www.udemy.com/certificate/UC-76e450e3-a2b2-4369-b77f-275f2ef125aa/"
      }} />

      <Certificate data={{
        title: "Gimp Kullanarak Resimler Üzerinde Çalışmak",
        thumb: assets.thumb_gimp,
        document: assets.cert_gimp,
        instructor: "METU (OTDÜ)",
        credential: "f9f6bbf0-b9dc-11ec-8d33-3d2f3f5d013e",
        link: "https://bilgeis.net/moodle/mod/simplecertificate/verify.php?code=f9f6bbf0-b9dc-11ec-8d33-3d2f3f5d013e"
      }} />

      <Certificate data={{
        title: "Audacity Programı ile Tanışalım",
        thumb: assets.thumb_audacity,
        document: assets.cert_audacity,
        instructor: "METU (OTDÜ)",
        credential: "8de951d0-bdb4-11ec-9fc4-53ca49c96480",
        link: "https://bilgeis.net/moodle/mod/simplecertificate/verify.php?code=8de951d0-bdb4-11ec-9fc4-53ca49c96480"
      }} />

    </div>

  </Section >
}

export default Resume
