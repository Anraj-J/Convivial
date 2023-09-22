import LebronPointing from "./images/LebronPointing.jpeg";
import lewis from "./images/lewis.jpeg";
import spainwomenworldcup from "./images/spainwomenworldcup.avif";
import cyberpunkupdate from "./images/cyberpunkupdate.jpeg"
import toyotacentury from "./images/toyotacentury.jpeg"

export default function Post() {
    return (
      <main>
        <div className="post">
        <div className="image"> 
        <img src={lewis} alt="Lewis Hamilton Smiling" />
        </div>
          <div className="textcontent">
            <h2>Lewis Hamilton gets new Mercedes deal to 2025</h2>
            <p className="info">
              <a className="author">Danny Moreno</a>
              <time>2023-8-31 9:41</time>
            </p>
            <p className="summary">Lewis Hamilton has committed his
             Formula 1 future to Mercedes after a new two-year deal was
              announced ahead of the Austrian Grand Prix.</p>
          </div>
        </div>

        <div className="post">
        <div className="image"> 
        <img src={cyberpunkupdate} alt="Cyberpunk 2077 2.0 Update" />
        </div>
          <div className="textcontent">
            <h2>I'm so glad they're releasing update 2.0 for Cyberpunk</h2>
            <p className="info">
              <a className="author">Diana Walker</a>
              <time>2023-8-22 14:26</time>
            </p>
            <p className="summary">I can't wait to revisit Night City and for some of you to
              roam its streets for the very first time. The highly-anticipated
               Cyberpunk 2077 2.0 is coming out soon!</p>
          </div>
        </div>

        <div className="post">
        <div className="image"> 
        <img src={spainwomenworldcup} alt="Spain Women World Cup Celebration" />
        </div>
          <div className="textcontent">
            <h2>Spain down England to win Women's World Cup for first time</h2>
            <p className="info">
              <a className="author">Harmohan Singh</a>
              <time>2023-8-20 11:38</time>
            </p>
            <p className="summary">Spanish technique overcame English resilience 
            as La Roja put aside months of turmoil and division to
             win their first major title with a 1-0 victory over England
              in a hardfought final.</p>
          </div>
        </div>

        <div className="post">
        <div className="image"> 
        <img src={LebronPointing} alt="Lebron James Pointing Up" />
        </div>
          <div className="textcontent">
            <h2>LeBron James breaks NBA's all-time scoring record!</h2>
            <p className="info">
              <a className="author">Brandon Sané</a>
              <time>2023-7-2 7:52</time>
            </p>
            <p className="summary">Lebron just broke the scoring record. Do you guys think this makes him the goat? I think
            he has done more than enough to prove that he is the greatest of all time.</p>
          </div>
        </div>

        <div className="post">
        <div className="image"> 
        <img src={toyotacentury} alt="New Toyota Century SUV" />
        </div>
          <div className="textcontent">
            <h2>New Toyota Century SUV Confirmed To Debut Later This Year</h2>
            <p className="info">
              <a className="author">Sylvia Hill</a>
              <time>2023-6-23 10:05</time>
            </p>
            <p className="summary">The new SUV will sit above the Land Cruiser
             in Toyota's range combining higher levels of luxury and technology
              with Rolls-Royce-inspired looks</p>
          </div>
        </div>

        </main>

        
    );
}