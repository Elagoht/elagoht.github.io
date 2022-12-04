import Badges from "../components/Badges";
import Section from "../components/Skeleton/Section";
import { LanguageContext } from "../contexts/LanguageContext"
import { useContext } from "react";
import { buttons, h2s, mainTitle } from "../translations/Publications";

function Publications() {

  const { language } = useContext(LanguageContext)

  const gitdocs = [
    {
      title: {
        tr: "30 Dakikada MarkDown Öğrenin",
        en: "Learn MarkDown in 30 Minutes"
      },
      link: "https://github.com/Elagoht/30-dakikada-markdown-ogrenin",
      badges: {
        tr: [
          "badge/Format-MD-000000?logo=markdown",
          "github/stars/Elagoht/30-dakikada-markdown-ogrenin?label=Yıldızlar&logo=starship",
          "youtube/views/uRM54l1bQrk?logo=youtube&label=İzlemeler",
          "youtube/likes/uRM54l1bQrk?logo=undertale&label=Beğeniler"
        ],
        en: [
          "badge/Format-MD-000000?logo=markdown",
          "github/stars/Elagoht/30-dakikada-markdown-ogrenin?label=Stars&logo=starship",
          "youtube/views/uRM54l1bQrk?logo=youtube&label=Views",
          "youtube/likes/uRM54l1bQrk?logo=undertale&label=Likes"
        ],
      },
      desc: {
        tr: "Markdown ile yazılmış Türkçe markdown kursu. İçerik YouTube videosu ile desteklendi.",
        en: "Turkish Markdown course written in markdown. Content supported with YouTube video."
      }
    }, {
      title: {
        tr: "3 Saatte Vim Öğrenin",
        en: "Learn Vim in 3 Hours"
      },
      link: "https://github.com/Elagoht/3-saatte-vim-ogrenin",
      badges: {
        tr: [
          "badge/Format-MD-000000?logo=markdown",
          "github/stars/Elagoht/3-saatte-vim-ogrenin?label=Yıldızlar&logo=starship",
          "youtube/views/PIYaUPAD3ZY?logo=youtube&label=İzlemeler",
          "youtube/likes/PIYaUPAD3ZY?logo=undertale&label=Beğeniler"
        ],
        en: [
          "badge/Format-MD-000000?logo=markdown",
          "github/stars/Elagoht/3-saatte-vim-ogrenin?label=Stars&logo=starship",
          "youtube/views/PIYaUPAD3ZY?logo=youtube&label=Views",
          "youtube/likes/PIYaUPAD3ZY?logo=undertale&label=Likes"
        ],
      },
      desc: {
        tr: "MarkDown ile yazılmış Vim kursu. Tüm Vim modları ve çokça kısayol, komut bu dokümanda kendine yer buluyor. Ayrıca kursa `~/.vimrc` dosyası da dahil edilmiştir.",
        en: "Turkish Vim course written in markdown. All of the Vim modes and lots of shortcuts, commands included in this documentation. Also `~/.vimrc` file has included."
      }
    }
  ]

  const books = [
    {
      title: {
        tr: "Herkes İçin Linux",
        en: "Herkes İçin Linux (Linux For Everyone)",
      },
      badges: {
        tr: [
          "badge/Sayfa-658-red?logo=bookstack",
          "badge/İlk_Baskı-2023-red?logo=starship"
        ],
        en: [
          "badge/Pages-658-red?logo=bookstack",
          "badge/First_Edition-2023-red?logo=starship"
        ]
      },
      desc: {
        tr: [
          "\"Herkes İçin Linux\" herkes için bir kitap. Bu kitabın üç adet düzey rozeti var. Genel Kullanıcı Kitlesi, Deneyimli Kullanıcı Kitlesi, Uzman Kullanıcı Kitlesi. Bu kitabı okurken, o bölümü anlayabilmek için hangi seviyenin gerekli olduğunu görebilmek için bu rozetler kullanılmıştır.",
          "Bu kitap Linux hakkında her şeyi anlatıyor: Nasıl kullanılır, kurulur, yapılandırılır; uygulamaları nasıl kurarsınız ve hangi uygulamaları kullanabilirsiniz; Linux komutları nelerdir ve nasıl çalışır; sistem nasıl çalışır ve altındaki felsefe nedir ve daha fazlası..."
        ],
        en: [
          "\"Linux For Everyone\" a book for everyone. This book has three level badges. General User Audience, Experienced User Audience, Professional User Audience. While reading this book you will see this badges to see which level required to understand that section.",
          "This book tolds everything about Linux: How to use, install, configure it; how to install apps and what apps you can use, what are linux commands and how they work, how system works and what is the philosophy under it and more..."
        ]
      },
      link: "#"
    }
  ]

  const youtube = [
    {
      title: {
        tr: "Vim Kursu",
        en: "Vim Course",
      },
      badges: {
        tr: [
          "youtube/views/PIYaUPAD3ZY?logo=youtube&label=İzlemeler",
          "youtube/likes/PIYaUPAD3ZY?logo=undertale&label=Beğeniler",
        ],
        en: [
          "youtube/views/PIYaUPAD3ZY?logo=youtube&label=Views",
          "youtube/likes/PIYaUPAD3ZY?logo=undertale&label=Likes",
        ],
      },
      desc: {
        tr: "Türkçe Vim kursu. Tüm Vim modları ve çokça kısayol, komut bu dokümanda kendine yer buluyor. Ayrıca kursa `~/.vimrc` dosyası da dahil edilmiştir.",
        en: "Vim Course in Turkish. All of the Vim modes and lots of shortcuts, commands included in this documentation. Also `~/.vimrc` command has included.",
      },
      iframe: "PLGIvph8XiC3QS5d9dfotigUlKuDFx6-wV"
    }, {
      title: {
        tr: "Linux Terminal Kursu",
        en: "Linux Terminal Course",
      },
      badges: {
        tr: [
          "youtube/views/VwuXpCije9A?logo=youtube&label=İzlemeler",
          "youtube/likes/VwuXpCije9A?logo=undertale&label=Beğeniler",
        ],
        en: [
          "youtube/views/VwuXpCije9A?logo=youtube&label=Views",
          "youtube/likes/VwuXpCije9A?logo=undertale&label=Likes",
        ],
      },
      desc: {
        tr: "Linux terminal kursu. Bu dizide linux terminal komutlarıyla ilgili her ayrıntı açıklanmıştır. 'cd'den 'awk'a. Bu videoların sonunda Linux terminal komutlarında ustalaşacaksınız.",
        en: "Linux terminal course. Every single detail about linux terminal commands explained in this series. From 'cd' to 'awk'. In the end of this videos, you will be master at Linux terminal commands."
      },
      iframe: "PLGIvph8XiC3Qze9JPrU4JrwKqBd7E1bah"
    }, {
      title: {
        tr: "Genel Kullanıcı Kitlesi",
        en: "General User Audience",
      },
      desc: {
        tr: "Bu videolarımda herkesin anlayabileceği konulardan ve derslerden bahsediyorum. Ön bilgi gerektirmez.",
        en: "In this videos, I talk about the subjects and lessons that can be understood by everyone. No foreknowledge required."
      },
      badges: {
        tr: [
          "badge/Dub-Türkçe-db0a16?logo=homeassistantcommunitystore",
          "badge/Alt-İngilizce-11145b?logo=googleearth",
        ],
        en: [
          "badge/Dub-Turkish-db0a16?logo=homeassistantcommunitystore",
          "badge/Sub-English-11145b?logo=googleearth",
        ]
      },
      iframe: "PLGIvph8XiC3TQStK2wgGOvNDd6rg7AbLz"
    }, {
      title: {
        tr: "Deneyimli Kullanıcı Kitlesi",
        en: "Experienced User Audience"
      },
      desc: {
        tr: "Bu videolar ön bilgi gerektirir ancak uzmanlık gerektirmez. Videolardaki bazı adımlar veya bilgiler herkese göre değildir.",
        en: "These videos require prior knowledge but no expertise. Some steps or information in these videos are not for everyone."
      },
      badges: {
        tr: [
          "badge/Dub-Türkçe-db0a16?logo=homeassistantcommunitystore",
          "badge/Alt-İngilizce-11145b?logo=googleearth",
        ],
        en: [
          "badge/Dub-Turkish-db0a16?logo=homeassistantcommunitystore",
          "badge/Sub-English-11145b?logo=googleearth",
        ]
      },
      iframe: "PLGIvph8XiC3TswctNGtDlNRt7nNmRmeI4"
    }, {
      title: {
        tr: "Uzman Kullanıcı Kitlesi",
        en: "Professional User Audience"
      },
      badges: {
        tr: [
          "badge/Dub-Türkçe-db0a16?logo=homeassistantcommunitystore",
          "badge/Alt-İngilizce-11145b?logo=googleearth",
        ],
        en: [
          "badge/Dub-Turkish-db0a16?logo=homeassistantcommunitystore",
          "badge/Sub-English-11145b?logo=googleearth",
        ],
      },
      desc: {
        tr: "Bu videoları izlerken bazı uzmanlık gerektiren yetkinliklere sahip olmanız gerekir. Örneğin, düzenli ifadeleri (regex) okuyabilmeli, sed veya awk bilmelisiniz.",
        en: "While watching this videos you have to know some expert features. In example you should be able to read regex, know sed or awk."
      },
      iframe: "PLGIvph8XiC3ShOGgT6crsrEUBwgn16czg"
    }
  ]

  return (
    <Section>
      {mainTitle[language] /* Git Docs */}

      {h2s[language][0]}

      <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1">
        {gitdocs.map((doc, i) => (
          <div className="card" key={i}>
            <h3 className="text-left text-2xl">{doc.title[language]}</h3>
            <Badges data={doc.badges[language]} isSmall={true} extendURL />
            <p>{doc.desc[language]}</p>
            <div className="flex justify-end mt-auto">
              <a href={doc.link} target="_blank" rel="noreferrer" className="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-zinc-50 dark:text-zinc-900" height="24" width="24"><path d="M5.3 20.5q-.75 0-1.275-.525Q3.5 19.45 3.5 18.7V5.3q0-.75.525-1.275Q4.55 3.5 5.3 3.5h6.325V5H5.3q-.1 0-.2.1t-.1.2v13.4q0 .1.1.2t.2.1h13.4q.1 0 .2-.1t.1-.2v-6.325h1.5V18.7q0 .75-.525 1.275-.525.525-1.275.525Zm4.425-5.175-1.05-1.05L17.95 5H14V3.5h6.5V10H19V6.05Z" /></svg>
                {buttons[language][0]}
              </a>
            </div>
          </div>
        ))}
      </div>

      {h2s[language][1] /* Books */}

      <div>
        {books.map((book, i) => (
          <div className="card" key={i}>
            <h3 className="text-left text-2xl">{book.title[language]}</h3>
            <Badges data={book.badges[language]} isSmall={true} extendURL />
            <div>
              {book.desc[language].map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex justify-end mt-auto">
              <a href={book.link} target="_blank" rel="noreferrer" className="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-zinc-50 dark:text-zinc-900" height="24" width="24"><path d="M13.9 21.05q-.425.425-1.062.425-.638 0-1.063-.425l-8.8-8.8q-.225-.225-.35-.5-.125-.275-.125-.6V4q0-.625.438-1.062Q3.375 2.5 4 2.5h7.15q.3 0 .588.125.287.125.487.325l8.8 8.8q.45.45.45 1.087 0 .638-.425 1.063ZM12.825 20l7.15-7.15L11.15 4H4v7.15ZM6.5 7.75q.525 0 .888-.363.362-.362.362-.887t-.362-.888Q7.025 5.25 6.5 5.25t-.887.362q-.363.363-.363.888t.363.887q.362.363.887.363ZM4 4Z" /></svg>
                {buttons[language][1]}
              </a>
            </div>
          </div>
        ))}
      </div>

      {h2s[language][2] /* Videos */}

      <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1">
        {youtube.map((video, i) => (
          <div className="card" key={i}>
            <h3 className="text-left text-2xl">{video.title[language]}</h3>
            <Badges data={video.badges[language]} isSmall={true} extendURL />
            <p>{video.desc[language]}</p>
            <iframe className="rounded-md w-full aspect-video" src={"https://www.youtube.com/embed/videoseries?list=" + video.iframe} title={video.title[language]} allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </Section >
  )
}

export default Publications