'use client';
interface ErrorHndler {
  error: Error;
  reset: () => void;
  // reset - тільки для змоги користувача оновити сторінку при винекненні помилки
}
function ErrorHandler({ error, reset }: ErrorHndler) {
  return (
    <div>
      <h3>Oops... Something went wrong🥲</h3>
      <p>{error.message}</p>
      <button className="errorBtn" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
export default ErrorHandler;
