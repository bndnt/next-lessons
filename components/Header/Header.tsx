'use client';
import css from './Header.module.css';
import Link from 'next/link';
import { useAuthStore } from '@/store/auth';
import { logout } from '@/services/auth';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(state => state.clearIsAuthenticated);
  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push('/login');
  };
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav className={css.navigation}>
        <ul className={css.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/todos">Todos</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <p>{user?.email}</p>
              <button className="projectBtn" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link href="/registration">Registration</Link>
              </li>
              <li>
                <Link href="/login">Log in</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
