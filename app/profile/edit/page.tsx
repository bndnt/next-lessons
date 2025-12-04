'use client';
import { useRouter } from 'next/navigation';
function ProfileEdit() {
  const router = useRouter();
  const handleClick = () => {
    if (confirm('Do you want to leave this page?')) {
      router.push('/profile');
    }
  };
  return (
    <div>
      <h1>Edit profile</h1>
      <button onClick={handleClick} className="projectBtn">
        ← BACK
      </button>
    </div>
  );
}
export default ProfileEdit;
