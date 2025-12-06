'use client';
import { redirect } from 'next/navigation';
function Shop() {
  setTimeout(() => {
    redirect('/store');
  }, 1000);
  return <h1>You will be redirected to store page</h1>;
  // redirect('/store');
  // return (
  //   <div>
  //     <h1>Shop Page</h1>
  //   </div>
  // );
}
export default Shop;
