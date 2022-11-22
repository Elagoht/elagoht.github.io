import React from 'react'

function Resume() {

  let projects = {
    datascience: [
      ["Erasmus+-C70A0C", "turkishairlines"],
      ["R-276DC3", "r"],
      ["Python-3776AB", "python"],
      ["NumPy-013243","numpy"],
      ["Pandas-150458", "pandas"],
      ["MatPlotLib-E10098","graphql"]
    ]
  }

  return (
    <>
    <h1>Resume</h1>
    <h2>Experience</h2>
    <div className="experience">
      <div className="exp-info">
        <a className="exp-title" href="https://www.linkedin.com/groups/12455248/">Development Counts: Data Skills for International Development Careers Project Associates</a>
        <div className="exp-role">Data Visualizer</div>
        <div className="exp-date">13 September 2021 - 26 May 2022</div>
      </div>
      <div className="flex wrap just-center">
        {projects["datascience"].map((badge,i)=>(
          <img key={i} className="rounded margin-small" src={"https://img.shields.io/badge/"+badge[0]+"?logo="+badge[1]+"&logoColor=white&style=for-the-badge"}/> 
        ))}
      </div>
      <div className="exp-details">
        <figure className="exp-visual">
          <div className="fig-media">
            <img src="src/dataskillsproject.jpeg" alt="Data Skills Project Members" />
            <iframe src="https://www.youtube.com/embed/ZoupbI2zZC0" title="Development Counts" allowFullScreen></iframe>
          </div>
          <div className="fig-control">
            <button className="fig-prev" onClick="fig_prev(0)">&#10092;</button>
            <figcaption>Data Skills Project Team and Video</figcaption>
            <button className="fig-next" onClick="fig_next(0)">&#10093;</button>
          </div>
        </figure>
        <p>The aim of this project was to read, manipulate, visualize and interpret the given data and to get ability to take decisions in the current situation. Second aim was getting ability to work remote in international groups.</p>
        <p>Co-founded by the ERASMUS+ program of the European Union under grant agreement 2019‐1‐UK01‐KA203‐061973 and led by the University of Gloucestershire in the UK, in collaboration with Gazi Üniversitesi (Turkey), L-Università ta’ Malta (Malta) and Universidad Nacional de Educación a Distancia (UNED, Spain).</p>
      </div>
    </div>
    <div className="experience">
      <div className="exp-info">
        <a className="exp-title" href="https://itch.io/jam/magara-jam-3/rate/1122551">Magara Jam #3</a>
        <div className="exp-role">Game Developer</div>
        <div className="exp-date">9-12 July 2021</div>
      </div>
      <div className="exp-details">
        <figure className="exp-visual">
          <div className="fig-media">
            <img src="src/magarajam3.PNG" alt="Magara Jam #3 Ticket" />
            <iframe width="1000" src="https://www.youtube.com/embed/NIr81TOBMjk" title="Dud OS gameplay video" allowFullScreen></iframe>
          </div>
          <div className="fig-control">
            <button className="fig-prev" onClick="fig_prev(1)">&#10092;</button>
            <figcaption>Magara Jam #3 Ticket and Game</figcaption>
            <button className="fig-next" onClick="fig_next(1)">&#10093;</button>
          </div>
        </figure>
        <p>I designed a game resources and desktop windows for a game that named Dud OS in 24 hours, with my teammate.</p>
        <p>Imagine you are an engineer and you came into a job without meeting required skills. But this job is developing a power suit, to kill aliens. You can guess, things don't go as expected. You must remote connect to the power suit and fix bugs in codes. In this way the evrenaut can go and kill alien boss.</p>
      </div>
    </div>
    <div className="experience">
      <div className="exp-info">
        <a className="exp-title" href="https://itch.io/jam/atom-gamejam-2/rate/921227">Magara Jam #2</a>
        <div className="exp-role">Game Developer</div>
        <div className="exp-date">9-12 July 2021</div>
      </div>
      <div className="exp-details">
        <figure className="exp-visual">
          <div className="fig-media">
            <img src="src/magarajam2.png" alt="Magara Jam #2 Ticket" />
            <iframe width="1000" src="https://www.youtube.com/embed/npgoK3XVwZc" title="Dud OS gameplay video" allowFullScreen></iframe>
          </div>
          <div className="fig-control">
            <button className="fig-prev" onClick="fig_prev(2)">&#10092;</button>
            <figcaption>Magara Jam #2 Ticket and Game</figcaption>
            <button className="fig-next" onClick="fig_next(2)">&#10093;</button>
          </div>
        </figure>
        <p>This game made by Furkan Baytekin and Enes Baytekin in 48 hours for At0m Game Jam #2.</p>
        <p>The graphics and music of the game are specially drawn and composed for this game.</p>
        <p>Two mice playing a computer game on the keyboard, writing unit calling codes and trying to destroy the enemy castle. However, the troops die by fighting each other before they can hit the castle. Mice with the ambition to win plan to cheat and beat each other, but they are not the only ones who can cheat.</p>
      </div>
    </div>
    <div className="experience">
      <div className="exp-info">
        <a className="exp-title" href="https://itch.io/jam/atom-gamejam/rate/771159">Atom Game Jam</a>
        <div className="exp-role">Game Developer</div>
        <div className="exp-date">9-12 July 2021</div>
      </div>
      <div className="exp-details">
        <figure className="exp-visual">
          <div className="fig-media">
            <img src="https://img.itch.zone/aW1nLzQzMTQ4MDMucG5n/original/mu2BnF.png" alt="Is There A Game Screenshot 1" />
            <img src="https://img.itch.zone/aW1nLzQzMTQ3OTAucG5n/original/iGk2t5.png" alt="Is There A Game Screenshot 2" />
          </div>
          <div className="fig-control">
            <button className="fig-prev" onClick="fig_prev(3)">&#10092;</button>
            <figcaption>At0m Game Jam Submission</figcaption>
            <button className="fig-next" onClick="fig_next(3)">&#10093;</button>
          </div>
        </figure>
        <p>This game made for a game jam in 3 days. I coded the game, drew assets produced sfx and composed music alone. This was a prototype. A platformer puzzle game.</p>
        <p>Teleport, Reflective bullets, levers, pressure plates and floating boxes are included. There are collectible fruits to gain score.</p>
      </div>
    </div>
    <div className="experience">
      <div className="exp-info">
        <a className="exp-title" href="https://www.hurriyet.com.tr/yerel-haberler/ankara/liselilerden-siirli-kutlama-40789302">Büyülü Katre Şiir Dinletisi (Magical Drop Poetry Concert)</a>
        <div className="exp-role">Musician</div>
        <div className="exp-date">21 March 2018</div>
      </div>
      <div className="exp-details">:
        <figure className="exp-visual">
          <div className="fig-media">
            <img src="src/magicaldrop1.jpg" alt="Musician Staff" />
            <img src="src/magicaldrop2.jpg" alt="All Staff" />
          </div>
          <div className="fig-control">
            <button className="fig-prev" onClick="fig_prev(4)">&#10092;</button>
            <figcaption>Artists from Magical Drop Poetry Concert</figcaption>
            <button className="fig-next" onClick="fig_next(4)">&#10093;</button>
          </div>
        </figure>
        <p>A poetry concert organized by Mrs. Vildan Kaya Erbatur and Mr. Aydın Afacan. Lots of students who love Turkish literature or who want to support this concert by playing font music have joined this activity.</p>
        <p>I took a part of font music band as bass guitar player. That was an amazing experience for me. The music is not even complicated, but being a part of this big organization made me glad.</p>
      </div>
    </div>
    <h1>Education</h1>
    <div className="education">
      <div className="edu-info">
        <div className="edu-level">High School</div>
        <div className="edu-date">2014-2018</div>
        <div className="edu-school">Kocatepe Mimar Kemal Anatolian High School</div>
      </div>
      <div className="edu-desc">Played bass guitar regularly on school concerts and shows.</div>
    </div>
    <div className="education">
      <div className="edu-info">
        <div className="edu-level">Bachelor</div>
        <div className="edu-date">2019-Present</div>
        <div className="edu-school">Gazi University, Faculty of Gazi Education, Department of Turkish Education</div>
      </div>
      <div className="edu-desc">I regularly joined seminaries and developed my own applications during this time. I joined an international project thanks to Erasmus+ organization.</div>
    </div>
    <div className="education">
      <div className="edu-info">
        <div className="edu-level">Bachelor</div>
        <div className="edu-date">2021-Present</div>
        <div className="edu-school">Anadolu University, Department of Web Design and Coding</div>
      </div>
      <div className="edu-desc">I wanted to learn about legal information about online publishing, to rectify knowledge gaps and to get a degree about my self-taught skills.</div>
    </div>
    <h1>Volunteer Projects</h1>
    <div className="experience">
      <div className="exp-info">
        <a className="exp-title" href="https://www.youtube.com/channel/UCIWYzLPBy2Av4sgUsRClP0g">Linux for Everyone (Herkes İçin Linux)</a>
        <div className="exp-role">Content Creator</div>
        <div className="exp-date">Continues Actively</div>
      </div>
      <div className="exp-details">
        <figure className="exp-visual">
          <div className="fig-media">
            <iframe src="https://www.youtube.com/embed/kI1r4EqAE9Q" title="Linux Sistemlerde Dosya İzinleri" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/xzTGwW6Q4cE" title="NeoVim Ana Kod Editörünüz Olsun! NvChad Plugin Paketi" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/ngWRJm2zfFQ" title="Kişisel Verilerinizi Yok Edin! Shred - Basit Terminal Komutları" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/i60RPeKZB5o" title="Linux Mint Cinnamon Kurulum Sonrası İşlemler ve Kişiselleştirmeler" allowFullScreen></iframe>
          </div>
          <div className="fig-control">
            <button className="fig-prev" onClick="fig_prev(5)">&#10092;</button>
            <figcaption>My Video Guides</figcaption>
            <button className="fig-next" onClick="fig_next(5)">&#10093;</button>
          </div>
        </figure>
        <p>I have start a project to make people less afraid about Linux and make them to use Linux based OSes. I have record videos about Linux and write articles about what Linux is, how it works and how to use it.</p>
      </div>
    </div>
    <div className="clear"></div>
    <h2>Licenses and Certifications</h2>
    <table>
      <tbody>
        <tr>
          <th colSpan="1">Data Skills for Global Development Training Programme (1 ed. 2021)</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: UNED Abierta</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a href="https://iedra.uned.es/certificates/ee351372e8a346ecacba0ebe6a10d39a">ee351373e8a346ecacba0ebe6a10d39a</a></td>
        </tr>
        <tr>
          <th colSpan="1">Sıfırdan İleri Seviye Python Programlama</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: ODTÜ Bilge İş</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a>yjahJ5e1oy</a></td>
        </tr>
        <tr>
          <th colSpan="1">Web Sitesi Kullanılabilirliği</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: ODTÜ Bilge İş</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a>vpWc7LoexA</a></td>
        </tr>
        <tr>
          <th colSpan="1">Data Science ve Python: Sıfırdan Uzmanlığa Veri Bilimi (2)</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: Datai Team</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-4b3e521b-66b8-48bb-a4e3-13018a5bf064"> UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064</a></td>
        </tr>
        <tr>
          <th colSpan="1">Data Visualization: A'dan Z'ye Veri Görselleştirme (3)</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: Datai Team</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-7a9f9c3c-d87f-4545-bfb4-0d9570d676f8"> UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8</a></td>
        </tr>
        <tr>
          <th colSpan="1">MS Excel | Sıfırdan İleri Seviye Excel Öğren | Sertifikalı</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: Oğuzhan Çolak</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-aaf4db41-a2e4-44f9-8ddc-f179020f19b6"> UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6</a></td>
        </tr>
        <tr>
          <th colSpan="1">Microsoft PowerPoint Kursu | Sertifikalı | 2021</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: Tuncay Erol</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-4a9f2917-6ea7-4c8a-819e-96ad287266c6"> UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6</a></td>
        </tr>
        <tr>
          <th colSpan="1">Time Management A-Z: Ultimate Productivity Skills Workshop</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: Dr. Barış Tunçbilek</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-400f6f82-f322-4661-8d2d-a57616152405"> UC-399f6f82-f322-4661-8d2d-a57616152405</a></td>
        </tr>
        <tr>
          <th colSpan="1">Sertifikalı Yangın Eğitimi</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: Fatih Şahin</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-8394a927-d369-4cc3-9014-092d27b8c0b8"> UC-8393a927-d369-4cc3-9014-092d27b8c0b8</a></td>
        </tr>
        <tr>
          <th colSpan="1">Diksiyon Kursu</th>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Instructor: Bilal Semih Bozdemir</td>
        </tr>
        <tr>
          <th className="noborder">
          </th>
          <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-77e450e3-a2b2-4369-b77f-275f2ef125aa"> UC-76e450e3-a2b2-4369-b77f-275f2ef125aa</a></td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default Resume