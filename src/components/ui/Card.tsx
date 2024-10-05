import { ReactNode } from "react";

import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

import styles from "./Card.module.css";

type PropsType = { children: ReactNode; href: string };
export default function Card({ children, href }: PropsType) {
  return (
    <div className={styles.card}>
      <Link to={href} className={styles.link}>
        <span>More</span>
        <span>
          <IoMdArrowDropright />
        </span>
      </Link>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
