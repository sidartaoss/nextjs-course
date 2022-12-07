import React from "react";
import Image from "next/image";

import classes from "./hero.module.css";

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/logo-small.svg"
          alt="An image showing Sidarta"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Sidarta</h1>
      <p>
        A blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
