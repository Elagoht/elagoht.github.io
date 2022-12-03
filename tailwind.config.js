/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profile-picture": "url('/src/assets/design/pp.jpeg')",
        "code-snippet": "url('/src/assets/design/background.png')",
        "nav-linkedin": "url('/src/assets/header/linkedin.png')",
        "nav-youtube": "url('/src/assets/header/youtube.png')",
        "nav-github": "url('/src/assets/header/github.png')",
        "nav-kaggle": "url('/src/assets/header/kaggle.png')",
        "nav-telegram": "url('/src/assets/header/telegram.png')",
        "nav-itch": "url('/src/assets/header/itch.png')",
        "nav-email": "url('/src/assets/header/mail.png')",
        "nav-aur": "url('/src/assets/header/aur.png')",
        "nav-lure": "url('/src/assets/header/lure.png')",
        "con-linkedin": "url('/src/assets/contacts/linkedin.svg')",
        "con-reddit": "url('/src/assets/contacts/reddit.svg')",
        "con-twitter": "url('/src/assets/contacts/twitter.svg')",
        "con-telegram": "url('/src/assets/contacts/telegram.svg')",
        "con-email": "url('/src/assets/contacts/email.svg')",
        "icon-date": "url('/src/assets/icons/date.svg')",
        "icon-desc": "url('/src/assets/icons/desc.svg')",
        "icon-edu": "url('/src/assets/icons/education.svg')",
        "icon-label": "url('/src/assets/icons/label.svg')",
        "icon-school": "url('/src/assets/icons/school.svg')",
        "icon-role": "url('/src/assets/icons/role.svg')",
        "icon-instructor": "url('/src/assets/icons/instructor.svg')",
        "icon-certificate": "url('/src/assets/icons/certificate.svg')",
        "icon-credential": "url('/src/assets/icons/credential.svg')",
        "flag-tr": "url('/src/assets/icons/flag_tr.png')",
        "flag-en": "url('/src/assets/icons/flag_en.png')",
      },
      fontFamily: {
        "code": ["Source Code Pro", "monospace"],
        "display": ["Patua One", "cursive"],
        "title": ["Open Sans", "cursive"],
        "body": ["Montserrat", "sans-serif"]
      },
      backgroundSize: {
        "ico-sm": "24px",
        "ico-md": "36px",
        "ico-xl": "48px",
      },
    },
    plugins: [],
  }
}