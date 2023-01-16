import Head from "next/head";
import styles from "../styles/Container.module.scss";
// import MobileMenu from "./MobileMenu";
import NextLink from "next/link";

export default function Container() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container_nav_wrapper}>
        <nav className={styles.top_bar}>
          <div>
            
            <NextLink className={styles.top_bar_listItem} href="/">
              Home
            </NextLink>
            <NextLink className={styles.top_bar_listItem} href="/">
              Get in touch
            </NextLink>
          </div>
          <div className={styles.menu_container} onClick={()=>console.log("Mouse Clicked")}>
            <div className={styles.menu_bar}></div>
            <div className={styles.menu_bar}></div>
            <div className={styles.menu_bar}></div>
          </div>
        </nav>
      </div>
      <main className={styles.container_main_wrapper}>
        <div><h1>About</h1></div>
      </main>
    </div>
  );
}