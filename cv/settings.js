let lang=0
let right=document.getElementById("rightcontent")
let left=document.getElementById("leftside")
const languages=document.getElementsByClassName("language")
const leftcontent=[
    `<img src="https://avatars.githubusercontent.com/u/48291303" alt="Profile Picture">
    <h1>Genel Beceriler</h1>
    <ul>
        <li>Programlama</li>
        <li>Web Tasarımı</li>
        <li>Müzik Besteleme</li>
        <li>Oyun Geliştirme</li>
    </ul>
    <h1>Paket Programlar</h1>
    <ul>
        <li>Microsoft Word (İleri)</li>
        <li>Microsoft Excel (İleri)</li>
        <li>Microsoft Power Point (İleri)</li>
        <li>GNU Image Manipulation Program (Orta)</li>
        <li>WordPress (Orta)</li>
        <li>Game Maker Studio 2 (Başlangıç)</li>
    </ul>
    <h1>Kodlama Dilleri</h1>
    <ul>
        <li>Python 3 (İleri Düzey)</li>
        <li>HTML 5 (İleri)</li>
        <li>CSS 3 (İleri)</li>
        <li>PHP 8 (Başlangıç)</li>
        <li>JavaScript (Orta)</li>
        <li>SQL (Orta)</li>
        <li>JSON ve XML</li>
        <li>Bash (Shell) Script (Başlangıç)</li>
    </ul>
    <h1>İşletim Sistemleri</h1>
    <ul>
        <li>Linux</li>
        <li>Windows</li>
    </ul>
    <h1>Hobiler</h1>
    <ul>
        <li>Hayvan Sevmek</li>
        <li>Bas Gitar Çalmak</li>
        <li>Müzik Dinlemek</li>
        <li>Kitap Okumak</li>
    </ul>`,
    `<img src="https://avatars.githubusercontent.com/u/48291303" alt="Profile Picture">
    <h1>General Skills</h1>
    <ul>
        <li>Programming</li>
        <li>Web Designing</li>
        <li>Composing Music</li>
        <li>Game Development</li>
    </ul>
    <h1>Package Programs</h1>
    <ul>
        <li>Microsoft Word (Advanced)</li>
        <li>Microsoft Excel (Advanced)</li>
        <li>Microsoft Power Point (Advanced)</li>
        <li>GNU Image Manipulation</li>
        <li>Program (Intermediate)</li>
        <li>WordPress (Intermediate)</li>
        <li>Game Maker Studio 2 (Elementary)</li>
    </ul>
    <h1>Coding Languages</h1>
    <ul>
        <li>Python 3 (Intermediate)</li>
        <li>HTML 5 (Advanced)</li>
        <li>CSS 3 (Advanced)</li>
        <li>PHP 8 (Elementary)</li>
        <li>JavaScript (Intermediate)</li>
        <li>SQL (Intermediate)</li>
        <li>JSON and XML</li>
        <li>Bash (Shell) Script (Beginner)</li>
    </ul>
    <h1>Operating Systems</h1>
    <ul>
        <li>Linux</li>
        <li>Windows</li>
    </ul>
    <h1>Hobbies</h1>
    <ul>
        <li>Petting Animals</li>
        <li>Playing Bass Guitar</li>
        <li>Listening Music</li>
        <li>Reading Books</li>
    </ul>`
]
const rightcontent=[
    `<header>
    <h1>Furkan Baytekin</h1>
    <h2>Gazi Üniversitesi Gazi Eğitim Fakültesi Türkçe Öğretmenliği Bölümü Öğrencisi</h2>
    <h2>Anadolu Üniversitesi Web Tasarım ve Kodlama Bölümü Öğrencisi</h2>
    <h3>Öz</h3>
    <p>2012 yılından beri kod yazıyorum. Bu serüvene HTML ve CSS yazarak başladım. Birkaç yıl sonra JavaScript'in temellerini öğrenmeye karar verdim. Ondan sonra PHP öğrendim ve web sitemi localhost üzerinde kurdum. Python ve Qt5 ile masaüstü uygulamaları geliştirmeye başladım ve son projelerimde veri tabanları ile çalıştım.</p>
    <p>Ayrıca bazı video oyunları geliştirdim ve bazı oyun geliştirme yarışmalarına katıldım. Python, R ve SPSS ile veri bilimine ve veri görselleştirmeye meraklı olduğum için veri görselleştirme ile ilgili uygulamalar geliştirdim. Ben bir açık kaynak savunucusuyum. GNU/Linux kullanıyorum ve açık kaynaklı uygulama geliştiriyorum.</p>
    <p>Türkçe Eğitimi bölümünde okuyorum, programlama ve veri madenciliği becerilerimi öğretmenlik mesleğime entegre etmeyi planlıyorum.</p>
</header>
<section>
    <h3>Kişisel Bilgiler</h3>
    <table>
        <tr>
            <th>Telefon</th>
            <td>: <a href="tel:+905459200768">(+90) 545 920 07 68</a></td>
        </tr>
        <tr>
            <th>Eposta</th>
            <td>: <a href="mailto:furkanbaytekin@gmail.com">furkanbaytekin@gmail.com</a></td>
        </tr>
        <tr>
            <th>Linked In</th>
            <td>: <a href="https://linkedin.com/in/furkan-baytekin">https://linkedin.com/in/furkan-baytekin</a></td>
        </tr>
        <tr>
            <th>GitHub</th>
            <td>: <a href="https://github.com/Elagoht">https://github.com/Elagoht</a></td>
        </tr>
        <tr>
            <th>Kaggle</th>
            <td>: <a href="https://www.kaggle.com/furkanbaytekin">https://kaggle.com/furkanbaytekin</a></td>
        </tr>
            <tr>
            <th>Itch.io</th>
            <td>: <a href="https://elagoht.itch.io/">https://elagoht.itch.io/</a></td>
        </tr>
        <tr>
            <th> Twitter</th>
            <td>: <a href="https://twitter.com/furkanbytekin">https://twitter.com/furkanbytekin</a></td>
        </tr>
    </table>
    <h3>Deneyim</h3>
    <ul>
        <li><b>Müzisyen</b> – 21 Mart 2018 – <b><a href="https://www.hurriyet.com.tr/yerel-haberler/ankara/liselilerden-siirli-kutlama-40789302">Büyülü Katre Şiir Dinletisi </a></b> – Fon müziğinde bas gitarist olarak yer aldım.</li>
        <li><b>Oyun geliştiricisi</b> – 25-28 Eylül 2020 - <b><a href="https://itch.io/jam/atom-gamejam/rate/771159">ATOM Game Jam</a></b> – 72 saatte Oyun Var mı adlı oyunu kendi başıma geliştirdim.</li>
        <li><b>Oyun geliştiricisi</b> – 12-15 Şubat 2021 - <b><a href="https://itch.io/jam/atom-gamejam-2/rate/921227">ATOM Game Jam #2</a></b> – Ortağımla 48 saatte Sudo Mice adlı bir oyun geliştirdim.</li>
        <li><b>Oyun geliştiricisi</b> – 9-12 Haziran 2021 – <b><a href="https://itch.io/jam/magara-jam-3/rate/1122551">Magara Jam #3</a></b> – Dud OS isimli bir oyun için partnerimle birlikte 24 saatte oyun kaynakları ve masaüstü pencereleri tasarladım.</li>
        <li><b>Veri Görselleştirici</b> – 13-17 Eylül 2021 – <b><a href="https://www.linkedin.com/groups/12455248/">Development Counts: Data Skills for International Development Careers Project Associates</a></b> – Uluslararası bir grup çalışmasına katıldım, veri aradım ve bulduğum verileri görselleştirdim.</li>
    </ul>
    <h3>Yayınlanmış Projeler</h3>
    <table>
        <tr>
            <th rowspan="2">Passenger</th>
            <td><b>Açıklama:</b> Şifreli Parola Yöneticisi, parolaları bilgisayar korsanlarından korumayı planlıyor.</th>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/Passenger">https://github.com/Elagoht/Passenger</a></th>
        </tr>
        <tr>
            <th rowspan="2">Squirrel</th>
            <td><b>Açıklama:</b> Python için hafif ve güçlü iki boyutlu veri yönetimi, depolanması ve manipülasyon modülü.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/Squirrel">https://github.com/Elagoht/Squirrel</a></td>
        </tr>
        <tr>
            <th rowspan="2">elagoht.github.io</th>
            <td><b>Açıklama:</b> Basitçe, bu özgeçmiş web sitesi.</th>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/elagoht.github.io">https://github.com/Elagoht/elagoht.github.io</a></th>
        </tr>
        <tr>
            <th rowspan="2">TempOSD</th>
            <td><b>Açıklama:</b> Linux için ekran üzerinde görüntüleme yazılımı. CPU ve GPU kullanım yüzdelerini ve sıcaklık değerlerini, RAM ve SWAP kullanım yüzdelerini ve sayılarını gösterir.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/TempOSD">https://github.com/Elagoht/TempOSD</a></td>
        </tr>
        <tr>
            <th rowspan="2">TextReader</th>
            <td><b>Açıklama:</b> Yazılı metni metinden konuşma motoruna okuyabilen ve kullanıcının işlenmiş mp3 formatlı ses dosyasını dışa aktarmasına izin veren metin düzenleyici.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/TextReader">https://github.com/Elagoht/TextReader</a></td>
        </tr>
        <tr>
            <th rowspan="2">Docx2Html</th>
            <td><b>Açıklama:</b> Stilize edilmiş docx'i saf html'ye dönüştürmek için. Çıktı html'nin nasıl görünmesi gerektiğine dair birkaç seçeneğe sahiptir.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/Docx2Html">https://github.com/Elagoht/Docx2Html</a></td>
        </tr>
        <tr>
            <th rowspan="2">autoThemer</th>
            <td><b>Açıklama:</b> Linux Cinnamon temasını zamana bağlı olarak otomatik olarak değiştiren bir araç.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/autoThemer">https://github.com/Elagoht/autoThemer</a></td>
        </tr>
        <tr>
            <th rowspan="2">AlphabeticalCategorizer</th>
            <td><b>Açıklama:</b> Dosyaları alfabetik olarak kategorize eden bir linux uçbirim komut dosyası.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/AlphabeticalCategorizer">https://github.com/Elagoht/AlphabeticalCategorizer</a></td>
        </tr>
        <tr>
            <th rowspan="2">DateCategorizer</th>
            <td><b>Açıklama:</b> Dosyaları yıl ve aylara göre kategorize eden bir linux uçbirim komut dosyası.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/DateCategorizer">https://github.com/Elagoht/DateCategorizer</a></td>
        </tr>
        <tr>
            <th rowspan="2">ExtensionCategorizer</th>
            <td><b>Açıklama:</b> Dosyaları uzantılarına göre kategorizer eden bir linux uçbirim komut dosyası.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/DateCategorizer">https://github.com/Elagoht/DateCategorizer</a></td>
        </tr>
        <tr>
            <th rowspan="2">Whatsapp-Qt5</th>
            <td><b>Açıklama:</b>Sistem görev çubuğuna küçültülen gayri resmi whatsapp istemcisi.</td>
        </tr>
        <tr>
            <td><b>GitHub Sayfası:</b> <a href="https://github.com/Elagoht/Whatsapp-Qt5">https://github.com/Elagoht/Whatsapp-Qt5</a></td>
        </tr>
        <tr>
            <th rowspan="2">Is There A Game</th>
            <td><b>Açıklama:</b> Üç gün içinde bir oyun yapmaya çalışmak için platform nişancı bulmaca oyunu prototipi.</td>
        </tr>
        <tr>
            <td><b>Itch.io Sayfası:</b> <a href="https://itch.io/jam/atom-gamejam/rate/771159">https://itch.io/jam/atom-gamejam/rate/771159</a></td>
        </tr>
        <tr>
            <th rowspan="2">Sudo Mice</th>
            <td><b>Açıklama:</b> Game Maker Studio 2 ile yapılan paylaşımlı ekran çok oyunculu strateji oyunu. Linux terminalinde sudo komutundan esinlenilmiştir.</td>
        </tr>
        <tr>
            <td><b>Itch.io Sayfası:</b> <a href="https://itch.io/jam/atom-gamejam-2/rate/921227">https://itch.io/jam/atom-gamejam-2/rate/921227</a></td>
        </tr>
        <tr>
            <th rowspan="2">Dude OS</th>
            <td><b>Açıklama:</b> Oyundaki bulmacaları çözmek için gerçek hata pencerelerini ve kod bloklarını karıştırmaya çalışan deneysel oyun.</td>
        </tr>
        <tr>
            <td><b>Itch.io Sayfası:</b> <a href="https://itch.io/jam/magara-jam-3/rate/1122551">https://itch.io/jam/magara-jam-3/rate/1122551</a></td>
        </tr>
    </table>
    <h3>Education</h3>
    <ul>
        <li><b>High School</b> - 2014-2018 • <b>Kocatepe Mimar Kemal Anadolu Lisesi</b></li>
        <li class="muted">Okul konserlerinde ve gösterilerinde düzenli olarak bas gitar çaldım.</li>
        <li><b>Bachelor</b> - 2019-Günümüz • <b>Gazi Üniversitesi Gazi Eğitim Fakültesi Türkçe Eğitimi Bölümü</b></li>
        <li class="muted">Bu süre zarfında düzenli olarak seminerlere katıldım ve kendi uygulamalarımı geliştirdim.</li>
        <li><b>Bachelor</b> - 2021-Günümüz • <b>Anadolu Üniversitesi, Web Tasarım ve Kodlama</b></li>
        <li class="muted">Kendi kendime öğrendiğim beceriler hakkında bir lisans almak istedim.</li>
    </ul>
    <h3>Gönüllü Projeler</h3>
    <ul>
        <li>HTML, CSS, PHP, JavaScript ve SQL kullanan Herkes için Linux adlı bir web sitesi geliştirdim. Bu sitenin amacı, genel sorunlara çözümler sunmak ve Linux ile ilgili makaleler yayınlamaktır. Makale sayısı yeterli olduğunda, herkese açık hale getireceğim.</li>
        <li>Python 3 ve Qt 5 kullanarak Passenger adında şifreli bir şifre yöneticisi geliştirdim. Bunu GitHub sayfamda yayınladım.</li>
        <li>Yazılan metni okuyabilen ve işlenmiş ses dosyasını mp3 formatında dışa aktarmanıza izin veren TextReader adında bir metin düzenleyici yazdım. Bu projeyi GitHub'da ücretsiz açık kaynaklı yazılım olarak yayınladım.</li>
        <li>Ekranda donanım istatistiklerini görmek için bir komut dosyası yazdım. Bu komut dosyasını GitHub sayfamda ücretsiz açık kaynaklı yazılım olarak yayınladım.</li>
        <li>Öğretmenler için bir öğrenci veritabanı programı tasarladım ve geliştirdim. Bu program öğrencinin verilerini sorgulayabilir ve verilen verileri öğrenciler arasında karşılaştırma yapmak için görselleştirebilir. Benzer özelliklere sahip öğrencileri birkaç gruba ayırabilecektir. Bu programın amacı, her öğrencinin bireysel ihtiyaçlarına cevap vermektir.</li>
        <li>Kendi enstrümantal ve metal müzik parçalarımı besteledim.</li>
    </ul>
    <h3>Lisanslar ve Sertifikalar</h3>
    <table>
        <tr>
            <th colspan="2">Data Skills for Global Development Training Programme (1 ed. 2021)</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Eğitmen: UNED Abierta</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Kimlik Numarası: <a href="###"> ###</td>
        </tr>
        <tr>
            <th colspan="2">Data Science ve Python: Sıfırdan Uzmanlığa Veri Bilimi (2)</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Eğitmen: Datai Team</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Kimlik Numarası: <a href="https://www.udemy.com/certificate/UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064"> UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064</td>
        </tr>
        <tr>
            <th colspan="2">Data Visualization: A'dan Z'ye Veri Görselleştirme (3)</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Eğitmen: Datai Team</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Kimlik Numarası: <a href="https://www.udemy.com/certificate/UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8"> UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8</td>
        </tr>
        <tr>
            <th colspan="2">MS Excel | Sıfırdan İleri Seviye Excel Öğren |Sertifikalı</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Eğitmen: Oğuzhan Çolak</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Kimlik Numarası: <a href="https://www.udemy.com/certificate/UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6"> UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6</td>
        </tr>
        <tr>
            <th colspan="2">Microsoft PowerPoint Kursu | Sertifikalı | 2021</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Eğitmen: Tuncay Erol</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Kimlik Numarası: <a href="https://www.udemy.com/certificate/UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6"> UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6</td>
        </tr>
        <tr>
            <th colspan="2">Time Management A-Z: Ultimate Productivity Skills Workshop</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Eğitmen: Dr. Barış Tunçbilek</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Kimlik Numarası: <a href="https://www.udemy.com/certificate/UC-399f6f82-f322-4661-8d2d-a57616152405"> UC-399f6f82-f322-4661-8d2d-a57616152405</td>
        </tr>
        <tr>
            <th colspan="2">Sertifikalı Yangın Eğitimi</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Eğitmen: Fatih Şahin</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Kimlik Numarası: <a href="https://www.udemy.com/certificate/UC-8393a927-d369-4cc3-9014-092d27b8c0b8"> UC-8393a927-d369-4cc3-9014-092d27b8c0b8</td>
        </tr>
        <tr>
            <th colspan="2">Diksiyon Kursu</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Eğitmen: Bilal Semih Bozdemir</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Kimlik Numarası: <a href="https://www.udemy.com/certificate/UC-76e450e3-a2b2-4369-b77f-275f2ef125aa"> UC-76e450e3-a2b2-4369-b77f-275f2ef125aa</td>
        </tr>
    </table>
</section>`,
    `<header>
    <h1>Furkan Baytekin</h1>
    <h2>Student at Gazi University Faculty Of Gazi Education Department Of Turkish Education</h2>
    <h2>Student at Anadolu University Department of Web Design ve Coding</h2>
    <h3>Summary</h3>
    <p>I have been writing code since 2012. I started this adventure by writing HTML and CSS. After a few years I decided to learn basics of JavaScript. After that I learned PHP and build my website on localhost. I started to develop desktop applications with Python and Qt5, and I worked with databases in my recent projects.</p>
    <p>I also developed some video games and I continue to participate some of game jams. I am curious at data science and data visualization with Python, R and SPSS so I developed apps about data visualization. I am an open-source advocate. I use GNU/Linux and develop FOSSes.</p>
    <p>I am studying at department of Turkish Education, and I am planning to integrate my development and data mining skills into my teacher job.</p>
</header>
<section>
    <h3>Personal Info</h3>
    <table>
        <tr>
            <th>Phone</th>
            <td>: <a href="tel:+905459200768">(+90) 545 920 07 68</a></td>
        </tr>
        <tr>
            <th>Email</th>
            <td>: <a href="mailto:furkanbaytekin@gmail.com">furkanbaytekin@gmail.com</a></td>
        </tr>
        <tr>
            <th>Linked In</th>
            <td>: <a href="https://linkedin.com/in/furkan-baytekin">https://linkedin.com/in/furkan-baytekin</a></td>
        </tr>
        <tr>
            <th>GitHub</th>
            <td>: <a href="https://github.com/Elagoht">https://github.com/Elagoht</a></td>
        </tr>
        <tr>
            <th>Kaggle</th>
            <td>: <a href="https://www.kaggle.com/furkanbaytekin">https://kaggle.com/furkanbaytekin</a></td>
        </tr>
            <tr>
            <th>Itch.io</th>
            <td>: <a href="https://elagoht.itch.io/">https://elagoht.itch.io/</a></td>
        </tr>
        <tr>
            <th> Twitter</th>
            <td>: <a href="https://twitter.com/furkanbytekin">https://twitter.com/furkanbytekin</a></td>
        </tr>
    </table>
    <h3>Experience</h3>
    <ul>
        <li><b>Musician</b> – 21 March 2018 – <b><a href="https://www.hurriyet.com.tr/yerel-haberler/ankara/liselilerden-siirli-kutlama-40789302">Büyülü Katre Şiir Dinletisi (Magical Drop Poetry Concert)</a></b> – I took part in the background music as a bass guitarist.</li>
        <li><b>Game Developer</b> – 25-28 September 2020 - <b><a href="https://itch.io/jam/atom-gamejam/rate/771159">ATOM Game Jam</a></b> – I developed a game that named Is There a Game in 72 hours, by myself.</li>
        <li><b>Game Developer</b> – 12-15 February 2021 - <b><a href="https://itch.io/jam/atom-gamejam-2/rate/921227">ATOM Game Jam #2</a></b> – I developed a game that named Sudo Mice in 48 hours, with my partner.</li>
        <li><b>Game Developer</b> – 9-12 July 2021 – <b><a href="https://itch.io/jam/magara-jam-3/rate/1122551">Magara Jam #3</a></b> – I designed game resources and desktop windows for a game that named Dud OS in 24 hours, with my partner.</li>
        <li><b>Data Visualizer</b> – 13-17 September 2021 – <b><a href="https://www.linkedin.com/groups/12455248/">Development Counts: Data Skills for International Development Careers Project Associates</a></b> – I take part of an international group work, searched for data and visualized the data I found.</li>
    </ul>
    <h3>Published Projects</h3>
    <table>
        <tr>
            <th rowspan="2">Passenger</th>
            <td><b>Description:</b> Encrypted Password Manager planning to protect passwords from hackers.</th>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/Passenger">https://github.com/Elagoht/Passenger</a></th>
        </tr>
        <tr>
            <th rowspan="2">Squirrel</th>
            <td><b>Description:</b> Lightweight and powerful two dimensional data managing, storing and manipulation module for python.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/Squirrel">https://github.com/Elagoht/Squirrel</a></td>
        </tr>
        <tr>
            <th rowspan="2">elagoht.github.io</th>
            <td><b>Description:</b> Simply, this curriculum vitae website.</th>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/elagoht.github.io">https://github.com/Elagoht/elagoht.github.io</a></th>
        </tr>
        <tr>
            <th rowspan="2">TempOSD</th>
            <td><b>Description:</b> On screen display software for Linux. It shows CPU and GPU usage percentages and temperature values, RAM and SWAP usage percentages and counts.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/TempOSD">https://github.com/Elagoht/TempOSD</a></td>
        </tr>
        <tr>
            <th rowspan="2">TextReader</th>
            <td><b>Description:</b> Text editor that can read the written text via text to speech</p>engine and allows user to export the rendered mp3 formatted audio file.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/TextReader">https://github.com/Elagoht/TextReader</a></td>
        </tr>
        <tr>
            <th rowspan="2">Docx2Html</th>
            <td><b>Description:</b> To convert stylized docx to pure html. It has a few options about how output html should looks like.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/Docx2Html">https://github.com/Elagoht/Docx2Html</a></td>
        </tr>
        <tr>
            <th rowspan="2">autoThemer</th>
            <td><b>Description:</b> A tool to change cinnamon theme automatically by time.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/autoThemer">https://github.com/Elagoht/autoThemer</a></td>
        </tr>
        <tr>
            <th rowspan="2">AlphabeticalCategorizer</th>
            <td><b>Description:</b> Linux terminal script for categorize files alphabetical.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/AlphabeticalCategorizer">https://github.com/Elagoht/AlphabeticalCategorizer</a></td>
        </tr>
        <tr>
            <th rowspan="2">DateCategorizer</th>
            <td><b>Description:</b>Linux terminal script that categorizes files in current directory by years and months.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/DateCategorizer">https://github.com/Elagoht/DateCategorizer</a></td>
        </tr>
        <tr>
            <th rowspan="2">ExtensionCategorizer</th>
            <td><b>Description:</b>Creates folders into a directory to categorize files in that directory by file extensions and move all things from sub-directories to current directory.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/DateCategorizer">https://github.com/Elagoht/DateCategorizer</a></td>
        </tr>
        <tr>
            <th rowspan="2">Whatsapp-Qt5</th>
            <td><b>Description:</b>Unofficial linux client for whatsapp web that can minimize to tray.</td>
        </tr>
        <tr>
            <td><b>GitHub Page:</b> <a href="https://github.com/Elagoht/Whatsapp-Qt5">https://github.com/Elagoht/Whatsapp-Qt5</a></td>
        </tr>
        <tr>
            <th rowspan="2">Is There A Game</th>
            <td><b>Description:</b> Platformer shooter puzzle game prototype for trying to make a game in three days.</td>
        </tr>
        <tr>
            <td><b>Itch.io Page:</b> <a href="https://itch.io/jam/atom-gamejam/rate/771159">https://itch.io/jam/atom-gamejam/rate/771159</a></td>
        </tr>
        <tr>
            <th rowspan="2">Sudo Mice</th>
            <td><b>Description:</b> Shared screen multiplayer strategy game that made with Game Maker Studio 2. Inspired by sudo command on Linux terminal.</td>
        </tr>
        <tr>
            <td><b>Itch.io Page:</b> <a href="https://itch.io/jam/atom-gamejam-2/rate/921227">https://itch.io/jam/atom-gamejam-2/rate/921227</a></td>
        </tr>
        <tr>
            <th rowspan="2">Dude OS</th>
            <td><b>Description:</b> Experimental game that trying to mix real error windows and code blocks to solve puzzles in game.</td>
        </tr>
        <tr>
            <td><b>Itch.io Page:</b> <a href="https://itch.io/jam/magara-jam-3/rate/1122551">https://itch.io/jam/magara-jam-3/rate/1122551</a></td>
        </tr>
    </table>
    <h3>Education</h3>
    <ul>
        <li><b>High School</b> - 2014-2018 • <b>Kocatepe Mimar Kemal Anatolian High School</b></li>
        <li class="muted">Played bass guitar regularly on school concerts and shows.</li>
        <li><b>Bachelor</b> - 2019-Present • <b>Gazi University, Faculty of Gazi Education, Department of Turkish Education</b></li>
        <li class="muted">I regularly joined seminaries and developed my own applications during this time.</li>
        <li><b>Bachelor</b> - 2021-Present • <b>Anadolu University, Web Design and Coding</b></li>
        <li class="muted">I wanted to get a license about my self-taught skills.</li>
    </ul>
    <h3>Volunteer Projects</h3>
    <ul>
        <li>I have developed a website named Linux for Everyone using HTML, CSS, PHP, JavaScript and SQL. The purpose of this site to offer solutions to common problems and to publish articles about Linux. When the number of articles is enough, I will make it public.</li>
        <li>I developed an encrypted password manager called Passenger using Python 3 and Qt 5. I published it on my GitHub page.</li>
        <li>I wrote a text editor called TextReader that can read the written text and allows you to export rendered audio file as mp3 format. I published this project on GitHub as free open-source software.</li>
        <li>I wrote a script to see hardware statistics on screen display. I published this script on my GitHub page as free open-source software.</li>
        <li>I designed and developed a student database program for teachers. This program can query student’s data and visualize the given data to make a comparison among students. It is going to be able to separate students with similar attributes in a few groups. The purpose of this program is responding individual necessities of each student.</li>
        <li>I composed my own instrumental and metal music pieces.</li>
    </ul>
    <h3>Licenses & Certifications</h3>
    <table>
        <tr>
            <th colspan="2">Data Skills for Global Development Training Programme (1 ed. 2021)</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Instructor: UNED Abierta</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Credential ID: <a href="###"> ###</td>
        </tr>
        <tr>
            <th colspan="2">Data Science ve Python: Sıfırdan Uzmanlığa Veri Bilimi (2)</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Instructor: Datai Team</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064"> UC-3b3e521b-66b8-48bb-a4e3-13018a5bf064</td>
        </tr>
        <tr>
            <th colspan="2">Data Visualization: A'dan Z'ye Veri Görselleştirme (3)</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Instructor: Datai Team</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8"> UC-6a9f9c3c-d87f-4545-bfb4-0d9570d676f8</td>
        </tr>
        <tr>
            <th colspan="2">MS Excel | Sıfırdan İleri Seviye Excel Öğren |Sertifikalı</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Instructor: Oğuzhan Çolak</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6"> UC-aaf5db41-a2e4-44f9-8ddc-f179020f19b6</td>
        </tr>
        <tr>
            <th colspan="2">Microsoft PowerPoint Kursu | Sertifikalı | 2021</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Instructor: Tuncay Erol</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6"> UC-3a9f2917-6ea7-4c8a-819e-96ad287266c6</td>
        </tr>
        <tr>
            <th colspan="2">Time Management A-Z: Ultimate Productivity Skills Workshop</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Instructor: Dr. Barış Tunçbilek</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-399f6f82-f322-4661-8d2d-a57616152405"> UC-399f6f82-f322-4661-8d2d-a57616152405</td>
        </tr>
        <tr>
            <th colspan="2">Sertifikalı Yangın Eğitimi</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Instructor: Fatih Şahin</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-8393a927-d369-4cc3-9014-092d27b8c0b8"> UC-8393a927-d369-4cc3-9014-092d27b8c0b8</td>
        </tr>
        <tr>
            <th colspan="2">Diksiyon Kursu</th>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Instructor: Bilal Semih Bozdemir</td>
        </tr>
        <tr>
            <th class="noborder">
            </th>
            <td>Credential ID: <a href="https://www.udemy.com/certificate/UC-76e450e3-a2b2-4369-b77f-275f2ef125aa"> UC-76e450e3-a2b2-4369-b77f-275f2ef125aa</td>
        </tr>
    </table>
</section>`
]
function changeLanguage() {
    let langlen=languages.length
    if (lang<0) {lang=langlen-1}
    for (let index=0;index<langlen;index++) {languages[index].style.display=index==lang?"block":"none"}
    right.innerHTML=rightcontent[lang]
    left.innerHTML=leftcontent[lang]
    lang<langlen-1?lang++:lang=0
    localStorage.setItem("lang",lang)
}
let theme=true
let lighttheme=document.getElementById("light")
let darktheme=document.getElementById("dark")
let css=document.getElementById("dark-theme")
function toggleTheme() {
    theme=!theme
    css.href=theme?"design-dark.css":""
    lighttheme.style.display=theme?"block":"none"
    darktheme.style.display=theme?"none":"block"
    localStorage.setItem("theme",theme)
}
toggleTheme()
changeLanguage()