import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/button';
import Bar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Link} from "react-router-dom";
import Profile from "./images/IMG_0002.JPG";
import CV from "./images/Olminkhof CV.pdf";
import Viola from "./images/photo2.jpg";

function App() {
  return (
    <main className="container vh-100 vw-100 mt-3 p-5">
    <style>{`
      html, body, #root {
        height: 95%
      }
      a {
        color: black;

      }
      a:hover {
        color: black;
        text-decoration: none
      }
    `}
    </style>

    <Bar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="music" element={<Music />} />
      </Routes>
      <Footer />
    </main>
  )
}

function Home() {
  return (
    <div className="row">
      <div className="col-12 col-lg-6 px-5 my-auto">
        <div className="pb-2">
          <h1>Hi! I'm Annebelle.</h1>
          <p>I'm studying Psychology & Technology at TU Eindhoven.</p>
        </div>
        <Button className="mr-1" href="https://github.com/annebelleo" variant="outline-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        </Button>
        <Button className="mx-1" href="https://linkedin.com/in/annebelleo" variant="outline-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
          </svg>
        </Button>
        <Button href={CV} variant="outline-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark" viewBox="0 0 16 16">
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path>
          </svg>
        </Button>
        <Button className="mx-1" href="mailto:annebelleolminkhof@gmail.com" variant="outline-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
        </Button>
      </div>
      <div className="col-12 col-lg-6 p-5">
        <img className="rounded mx-auto d-block img-fluid" src={Profile} alt="Annebelle's face"/>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <p className="lead mt-5">Elevator Pitch</p>
      <p className="fs-4">Born in The Netherlands and raised in California, I moved [back] to NL when I was 18 knowing virtually no one and very little about the Dutch language.</p>
      <p className="fs-4">I’m currently finishing up my bachelor's degree in <a href="https://www.tue.nl/en/education/bachelor-college/bachelor-psychology-technology/" color="black">Psychology & Technology</a> at TU Eindhoven, and I plan to continue studying in The Netherlands for a master’s degree in Artificial Intelligence.</p>
      <p className="fs-4">My interests lay in human-computer interaction, tech ethics, and policy.</p>
      <p className="fs-4">During my time at TU/e, I've completed a board year at <a href="https://cosmostue.nl">Cosmos</a> and chaired the <a href="https://studytour2021.intermate.nl">Study Tour Committee</a> of <a href="https://intermate.nl">study association Intermate</a>.</p>
      <p className="fs-4">I’m also strengthening my overall speaking level of Dutch through language courses at the TU/e and <a href="https://www.duolingo.com/profile/annebelleo">completing the golden tree</a> on Duolingo. I've obtained the equivalent of the B1 reading and speaking level.</p>
      <p className="fs-4">Outside of this, I love <a href="https://app.thestorygraph.com/profile/annebelleo">reading</a>, watching movies, and playing my <Link to="/music">viola</Link> once in a while.</p>
    </div>
  )
}

function Music() {
  return (
    <div className="row">
      <p className="lead mt-5">Music</p>
      <div className="col-12 col-lg-9">
        <p className="fs-4">I’ve been playing the viola since I was 13 and first picked up the violin three years earlier. Since then, I’ve dived head first into the world of classical music. Notably, I’ve played at the 2012 London Olympics with <a href="https://irvineclassicalplayers.com/">Irvine Classical Players</a> and at Carnegie Hall with the <a href="https://mvhsmusic.com/mvhsimba/ensembles/concert-ensembles/">Mission Viejo High School Symphony Orchestra</a>.</p>
        <p className="fs-4">I also had several side projects going on at the same time that I dropped before I graduated high school.
          I ran a Tumblr blog in my freshman year that gained popularity in the classical music realm, with <a href="https://violaboss.tumblr.com/post/118386511440/ive-seen-a-lot-of-curious-people-wanting-to-dive">one post</a> reaching nearly 300,000 people.
          Next to this, my best friend and I ran a YouTube channel for orchestra students, which is now unlisted. However, you can watch our most popular video <a href="https://www.youtube.com/watch?v=GLY8Bnk0KE4">here</a>.
          And out of the blue, a <a href="https://www.youtube.com/watch?v=POtpi50Ms8A">parody video</a> my sister and I made raked in over 350,000 views.</p>
        <p className="fs-4">Currently, I’m spending more time on career-related activities but occasionally perform with <a href="https://www.esmgquadrivium.nl/en/association/ensuite/">ESMG Quadrivium</a>.</p>
      </div>
      <div className="col-12 col-lg-3">
        <img className="rounded img-fluid" src={Viola} alt="Annebelle playing viola"/>
      </div>
    </div>
  )
}

export default App;
