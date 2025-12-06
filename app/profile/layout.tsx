import Link from 'next/link';
interface ProfileLayoutProps {
  children: React.ReactNode;
  photos: React.ReactNode;
}
function ProfileLayout({ children, photos }: ProfileLayoutProps) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/profile/about">About</Link>
        </li>
        <li>
          <Link href="/profile/edit">Edit</Link>
        </li>
        <li>
          <Link href="/profile/settings">Settings</Link>
        </li>
      </ul>
      <div>{children}</div>
      <div>{photos}</div>
    </div>
  );
}
export default ProfileLayout;
