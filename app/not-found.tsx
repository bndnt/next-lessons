import Link from 'next/link';
function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>The page you are looking for doesn`t exist</p>
      <Link className="projectBtn" href={'/'}>
        Go to home page
      </Link>
    </div>
  );
}

export default NotFound;
