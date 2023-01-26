import Image from "next/image";
import { Inter } from "@next/font/google";
import Container from "../Components/Container";

const inter = Inter({ subsets: ["latin"] });

import styles from "../styles/Home.module.scss";
import Link from "next/link";

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
        <h3>Recent Posts</h3>

        <div className={styles.home_posts_container}>
          <Link className={styles.blog_post_card} href="/">
              <div className={styles.blog_post_card__content_container}>
                <div className={styles.blog_post_card__content_container__header_container}>
                  <h4 className={styles.blog_post_card__content_container__header}>
                    What is project management and why you should care
                  </h4>
                </div>
                <div className={styles.blog_post_card__content_container__info_container}>
                  <h5>Project management</h5>
                </div>
              </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
