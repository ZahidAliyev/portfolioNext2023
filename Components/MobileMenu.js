import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect } from "react";
import styles from "../styles/MobileMenu.module.scss";
function MenuIcon(props) {
  return (
    <svg
      className={styles.menu_cross_icon}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className={styles.menu_cross_icon}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
// export default function MobileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
//     isMenuOpen,
//     {
//       enterDelay: 20,
//       exitDelay: 300
//     }
//   );

//   function toggleMenu() {
//     if (isMenuOpen) {
//       setIsMenuOpen(false);
//       document.body.style.overflow = '';
//     } else {
//       setIsMenuOpen(true);
//       document.body.style.overflow = 'hidden';
//     }
//   }

//   useEffect(() => {
//     return function cleanup() {
//       document.body.style.overflow = '';
//     };
//   }, []);

//   return (
//     <>
//       <button
//         className={cn(styles.burger)}
//         aria-label="Toggle menu"
//         type="button"
//         onClick={toggleMenu}
//       >
//         <MenuIcon data-hide={isMenuOpen} />
//         <CrossIcon data-hide={!isMenuOpen} />
//       </button>
//       {isMenuMounted && (
//         <ul
//           className={cn(
//             styles.menu,
//             isMenuRendered && styles.menuRendered
//           )}
//         >
//           <li
//             className={styles.listItem}
//             style={{ transitionDelay: '150ms' }}
//           >
//             <Link href="/" className={styles.link}>
//               Home
//             </Link>
//           </li>
//           <li
//             className={styles.listItem}
//             style={{ transitionDelay: '175ms' }}
//           >
//             <Link href="/guestbook" className={styles.link}>
//               Guestbook
//             </Link>
//           </li>
//           <li
//             className={styles.listItem}
//             style={{ transitionDelay: '200ms' }}
//           >
//             <Link href="/dashboard" className={styles.link}>
//               Dashboard
//             </Link>
//           </li>
//           <li
//             className={styles.listItem}
//             style={{ transitionDelay: '250ms' }}
//           >
//             <Link href="/blog" className={styles.link}>
//               Blog
//             </Link>
//           </li>
//           <li
//             className={styles.listItem}
//             style={{ transitionDelay: '275ms' }}
//           >
//             <Link href="/snippets" className={styles.link}>
//               Snippets
//             </Link>
//           </li>
//           <li
//             className={styles.listItem}
//             style={{ transitionDelay: '300ms' }}
//           >
//             <Link href="/newsletter" className={styles.link}>
//               Newsletter
//             </Link>
//           </li>
//           <li
//             className={styles.listItem}
//             style={{ transitionDelay: '325ms' }}
//           >
//             <Link href="/tweets" className={styles.link}>
//               Tweets
//             </Link>
//           </li>
//           <li
//             className={styles.listItem}
//             style={{ transitionDelay: '350ms' }}
//           >
//             <Link href="/uses" className={styles.link}>
//               Uses
//             </Link>
//           </li>
//         </ul>
//       )}
//     </>
//   );
// }

export default function MobileMenu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    if(isMenuOpen) {
      setIsMenuOpen((prevState)=> prevState = false);
    } else {
      setIsMenuOpen((prevState)=> prevState = true);

    }
  };
  return (
    <>
      <button
        className={styles.burger}
        aria-label="menu toggle"
        type="button"
        onClick={toggleMenu}
      >
        <svg
          data-hide={isMenuOpen}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M2 7.5 H18" stroke="currentColor" strokeWidth="2" />
          <path d="M2 14.5 H18" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg
          data-hide={!isMenuOpen}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          shapeRendering="geometricPrecision"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </>
  );
}
