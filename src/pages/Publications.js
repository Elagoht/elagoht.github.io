import Badges from "../components/Badges";
import Section from "../components/Skeleton/Section";

function Publications() {

  const gitdocs = [
    {
      title: "Learn MarkDown in 30 Minutes",
      link: "https://github.com/Elagoht/30-dakikada-markdown-ogrenin",
      badges: [
        "badge/Format-MD-000000?logo=markdown",
        "github/stars/Elagoht/30-dakikada-markdown-ogrenin?label=Stars&logo=starship",
        "youtube/views/uRM54l1bQrk?logo=youtube&label=Views",
        "youtube/likes/uRM54l1bQrk?logo=undertale&label=Likes"
      ],
      desc: "Turkish Markdown course written in markdown. Content supported with Youtube video."
    }, {
      title: "Learn Vim in 3 Hours",
      link: "https://github.com/Elagoht/3-saatte-vim-ogrenin",
      badges: [
        "badge/Format-MD-000000?logo=markdown",
        "github/stars/Elagoht/3-saatte-vim-ogrenin?label=Stars&logo=starship",
        "youtube/views/PIYaUPAD3ZY?logo=youtube&label=Views",
        "youtube/likes/PIYaUPAD3ZY?logo=undertale&label=Likes"
      ],
      desc: "Turkish Vim course written in markdown. All of the Vim modes and lots of shortcuts, commands included in this documentation. Also `~/.vimrc` command has included."
    }
  ]

  const books = [
    {
      title: "Herkes İçin Linux (Linux For Everyone)",
      badges: [
        "badge/Pages-658-red?logo=bookstack",
        "badge/First_Edition-2023-red?logo=starship"
      ],
      desc: [
        "\"Linux For Everyone\" a book for everyone. This book has three level badges. General User Audience, Experienced User Audience, Professional User Audience. While reading this book you will see this badges to see which level required to understand that section.",
        "This book tolds everything about Linux: How to use, install, configure it; how to install apps and what apps you can use, what are linux commands and how they work, how system works and what is the philosophy under it and more..."
      ]
    }
  ]

  const youtube = [
    {
      title: "Vim Course",
      badges: [
        "youtube/views/PIYaUPAD3ZY?logo=youtube&label=Views",
        "youtube/likes/PIYaUPAD3ZY?logo=undertale&label=Likes",
      ],
      desc: "Vim Course in Turkish. All of the Vim modes and lots of shortcuts, commands included in this documentation. Also `~/.vimrc` command has included.",
      iframe: "PLGIvph8XiC3QS5d9dfotigUlKuDFx6-wV"
    }, {
      title: "Linux Terminal Course",
      badges: [
        "youtube/views/VwuXpCije9A?logo=youtube&label=Views",
        "youtube/likes/VwuXpCije9A?logo=undertale&label=Likes",
      ],
      desc: "Linux terminal course. Every single detail about linux terminal commands explained in this series. From 'cd' to 'awk'. In the end of this videos, you will be master at linux terminal commands.",
      iframe: "PLGIvph8XiC3Qze9JPrU4JrwKqBd7E1bah"
    }, {
      title: "General User Audience",
      desc: "In this videos, I talk about the subjects and lessons that can be unsderstood by everyone. No foreknowledge required.",
      badges: [
        "badge/Dub-Turkish-db0a16?logo=homeassistantcommunitystore",
        "badge/Sub-English-11145b?logo=googleearth",
      ],
      iframe: "PLGIvph8XiC3TQStK2wgGOvNDd6rg7AbLz"
    }, {
      title: "Experienced User Audience",
      desc: "These videos require prior knowledge but no expertise. Some steps or information in these videos are not for everyone.",
      badges: [
        "badge/Dub-Turkish-db0a16?logo=homeassistantcommunitystore",
        "badge/Sub-English-11145b?logo=googleearth",
      ],
      iframe: "PLGIvph8XiC3TswctNGtDlNRt7nNmRmeI4"
    }, {
      title: "Professional User Audience",
      desc: "While watching this videos you have to know some expert features. In example you should be able to read regex, know sed or awk.",
      badges: [
        "badge/Dub-Turkish-db0a16?logo=homeassistantcommunitystore",
        "badge/Sub-English-11145b?logo=googleearth",
      ],
      iframe: "PLGIvph8XiC3ShOGgT6crsrEUBwgn16czg"
    }
  ]

  return (
    <Section>
      <h1>Publications</h1>

      <h2>Git Documentations</h2>

      <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1">
        {gitdocs.map((doc, i) => (
          <div className="card" key={i}>
            <h3 className="text-left text-2xl">{doc.title}</h3>
            <Badges data={doc.badges} isSmall={true} extendURL />
            <p>{doc.desc}</p>
            <div className="flex justify-end mt-auto">
              <a href={doc.link} target="_blank" className="select-none text-white rounded flex gap-1 border-2 border-fuchsia-700 bg-fuchsia-800 hover:bg-fuchsia-700 hover:border-fuchsia-600 px-2 py-1" >
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-slate-300" height="24" width="24"><path d="M5.3 20.5q-.75 0-1.275-.525Q3.5 19.45 3.5 18.7V5.3q0-.75.525-1.275Q4.55 3.5 5.3 3.5h6.325V5H5.3q-.1 0-.2.1t-.1.2v13.4q0 .1.1.2t.2.1h13.4q.1 0 .2-.1t.1-.2v-6.325h1.5V18.7q0 .75-.525 1.275-.525.525-1.275.525Zm4.425-5.175-1.05-1.05L17.95 5H14V3.5h6.5V10H19V6.05Z" /></svg>
                Go to Content
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2>Books</h2>

      <div>
        {books.map((book, i) => (
          <div className="card" key={i}>
            <h3 className="text-left text-2xl">{book.title}</h3>
            <Badges data={book.badges} isSmall={true} extendURL />
            <div>
              {book.desc.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex justify-end mt-auto">
              <a href={book.link} target="_blank" className="select-none text-white rounded flex gap-1 border-2 border-fuchsia-700 bg-fuchsia-800 hover:bg-fuchsia-700 hover:border-fuchsia-600 px-2 py-1" >
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-slate-300" height="24" width="24"><path d="M13.9 21.05q-.425.425-1.062.425-.638 0-1.063-.425l-8.8-8.8q-.225-.225-.35-.5-.125-.275-.125-.6V4q0-.625.438-1.062Q3.375 2.5 4 2.5h7.15q.3 0 .588.125.287.125.487.325l8.8 8.8q.45.45.45 1.087 0 .638-.425 1.063ZM12.825 20l7.15-7.15L11.15 4H4v7.15ZM6.5 7.75q.525 0 .888-.363.362-.362.362-.887t-.362-.888Q7.025 5.25 6.5 5.25t-.887.362q-.363.363-.363.888t.363.887q.362.363.887.363ZM4 4Z" /></svg>
                Buy My Book
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2>Youtube Courses</h2>

      <div className="grid gap-4 grid-cols-2 max-md:grid-cols-1">
        {youtube.map((video, i) => (
          <div className="card" key={i}>
            <h3 className="text-left text-2xl">{video.title}</h3>
            <Badges data={video.badges} isSmall={true} extendURL />
            <p>{video.desc}</p>
            <iframe className="rounded-md w-full aspect-video" src={"https://www.youtube.com/embed/videoseries?list=" + video.iframe} allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </Section >
  )
}

export default Publications