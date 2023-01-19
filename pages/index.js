import Image from "next/image";
import { Inter } from "@next/font/google";
import Container from "../Components/Container";

const inter = Inter({ subsets: ["latin"] });

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Container>
      <div className={styles.home}>
        <div className={styles.home_hero}>
          <div className={styles.image_wrapper}>
            <Image
              alt="Zahid Aliyev"
              width={176}
              height={176}

              src="/zahid.jpg"
              priority
              className={styles.image}
              sizes="30vw"
              
            ></Image>
            
          </div>
          <div className={styles.home_intro_container}>
            <h1>
              Zahid Aliyev
            </h1>
            <h2>
              Web enthusiast
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.</p>

          </div>
        </div>
      </div>
    </Container>
  );
}
