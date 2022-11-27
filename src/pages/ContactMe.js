import Section from "../components/Skeleton/Section";

function ContactMe() {
  return <Section>
    <h1>Contact Me</h1>
    <h2>Contact Directly</h2>
    <div className="flex flex-col gap-3">
      <a href="https://t.me/Elagoht" className="label-icon bg-con-telegram">Send me a message on telegram</a>
      <a href="mailto:furkanbaytekin@gmail.com" className="label-icon bg-con-email">Send an e-mail to my inbox</a>
    </div>
    <h2>Find Me on Other Platforms</h2>
    <div className="flex flex-col gap-3">
      <a href="https://www.linkedin.com/in/furkan-baytekin/" className="label-icon bg-con-linkedin">Add me your network on LinkedIn</a>
      <a href="https://www.reddit.com/user/Elagoht" className="label-icon bg-con-reddit">Upvote my posts on Reddit</a>
      <a href="https://twitter.com/furkanbytekin" className="label-icon bg-con-twitter">Send direct messages me on Twitter</a>
    </div>
  </Section >
}

export default ContactMe