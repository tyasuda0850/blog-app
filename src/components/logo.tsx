import Link from 'next/link';
import styles from '@/styles/logo.module.css';

export default function Logo({ boxOn = false }: { boxOn: boolean }) {
  return (
    <Link href="/">
      <div className={boxOn ? styles.box : styles.basic}>LOGO</div>
    </Link>
  );
}
