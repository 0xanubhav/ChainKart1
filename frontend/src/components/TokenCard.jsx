import React from "react";
import styles from "../css/Component.module.css";
import styles2 from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import image from "../assets/3.jpeg";

export default function TokenCard(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src={image}
          alt="Property image"
          width={"300px"}
          height={"220px"}
        />
      </div>
      <div className={styles.card_content}>
        <h3>
          <u>RWA Title here</u>
        </h3>
        <h4>Token Price {props.price}</h4>
        <Link href={`/token/${props.id}`}>
          <button className={`${styles2.btn} ${styles2.center}`}>Purchase Token</button>
        </Link>
      </div>
    </div>
  );
}
