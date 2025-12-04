import Link from 'next/link';
interface ProfileLayoutProps {
  children: React.ReactNode;
}
function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/profile/about">About</Link>
        </li>
        <li>
          <Link href="/profile/settings">Settings</Link>
        </li>
      </ul>
      <div>{children}</div>
    </div>
  );
}
export default ProfileLayout;
