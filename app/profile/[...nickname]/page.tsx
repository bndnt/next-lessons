import { notFound } from 'next/navigation';
interface ProfileNicknameProps {
  params: Promise<{ nickname: string }>;
}
// динамічний маршрут
async function ProfileNickname({ params }: ProfileNicknameProps) {
  const { nickname } = await params;
  console.log(params);

  if (nickname === 'vmudrij') {
    return notFound();
  }
  return (
    <div>
      <h1>Hello, {nickname[0]}</h1>
      <h3>{nickname[1]} </h3>
      <p>Display{nickname[2]}items</p>
    </div>
  );
}
export default ProfileNickname;
