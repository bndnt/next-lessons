// 1 - для початку необхідно обробити POST запит по цьому марштруту. Для цього необхідно описати функцію зі спеціальною назвою - POST. POST - бо нам необхідно обробляти пост запит по логіці POST, GET, DELETE, PUT, PATCH etc.

import { NextRequest, NextResponse } from 'next/server';

// 2 - коли ми робимо ПОСТ запит, ми передаємо payload, і нам юи хотілося цей пейлоад якось отпримати. POST(request: NextRequest)
//2.1 - Логін такоє буде пост, бо адреса буде дієсломов (логін) - дія.
export async function POST(request: NextRequest) {
  const payload = await request.json();
  console.log(payload);
  //3 - Робота з http - як діалог двох осіб (клієнта та сервера), саме тому необхідно додати NextResponse
  return NextResponse.json({ status: 'ok!' });
}
