import { notFound } from 'next/navigation';
interface ProfileNicknameProps {
  params: Promise<{ nickname: string }>;
}
// динамічний маршрут
async function ProfileNickname({ params }: ProfileNicknameProps) {
  const { nickname } = await params;
  if (nickname === 'vmudrij') {
    return notFound();
  }
  return (
    <div>
      <h1>Hello, {nickname}</h1>
    </div>
  );
}
export default ProfileNickname;
