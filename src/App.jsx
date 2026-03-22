import React from "react";
import { useState } from "react";
import star from "./assets/images/icon-star.svg";
import endStateImg from "./assets/images/illustration-thank-you.svg";
import "./App.css";

const App = () => {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main>
      <article className="cont">
        {!isSubmitted ? (
          <section className="card">
            <img className="star" src={star} alt="star icon" />
            <h1 className="question">How did we do?</h1>
            <p className="feed">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>

            <div className="rate">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className={`rating ${rating === num ? "active" : ""}`}
                  onClick={() => setRating(num)}
                >
                  {num}
                </div>
              ))}
            </div>
            <button
              className="submit-btn"
              onClick={() => rating && setIsSubmitted(true)}
            >
              SUBMIT
            </button>
          </section>
        ) : (
          <section className="greeting-card">
            <img
              className="illustration"
              src={endStateImg}
              alt="illustration thank you"
            />
            <p className="selected-rate">You selected {rating} out of 5</p>
            <h2 className="thank">Thank you!</h2>
            <p className="appreciate">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </section>
        )}
      </article>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AyoubSasi20">Ayoub</a>.
        </p>
      </footer>
    </main>
  );
};

export default App;
