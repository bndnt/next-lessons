// 1 - для початку необхідно обробити POST запит по цьому марштруту. Для цього необхідно описати функцію зі спеціальною назвою - POST. POST - бо нам необхідно обробляти пост запит по логіці POST, GET, DELETE, PUT, PATCH etc.
import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'cookie';
import { cookies } from 'next/headers';

//4 імпорт апі
import { api, ApiError } from '../../api';
// 2 - коли ми робимо ПОСТ запит, ми передаємо payload, і нам юи хотілося цей пейлоад якось отпримати. POST(request: NextRequest)
export async function POST(request: NextRequest) {
  const payload = await request.json();
  try {
    const response = await api.post('/auth/register', payload);
    //Стора для кукісів
    const cookieStore = await cookies();

    const setCookie = response.headers['set-cookie'];
    //напишемо перевірку на існування кукі. Вони в нашому віпадку  будуть масивом стрінгів або є андерфайнд
    if (setCookie) {
      //цю перевірку ми пишемо, бо зараз будемо ітеруватися - прходити по елементам масиву і відповідно ми маємо бути впевнені, що це дійсно масив
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
      for (const cookie of cookieArray) {
        const parsed = parse(cookie);
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed['Max-Age']),
        };
        if (parsed.accessToken) {
          cookieStore.set('accessToken', parsed.accessToken, options);
        }
        if (parsed.refreshToken) {
          cookieStore.set('refreshToken', parsed.refreshToken, options);
        }
      }
      return NextResponse.json(response.data);
    } else {
      return NextResponse.json({ error: 'Unautorized' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as ApiError).response?.data?.error ?? (error as ApiError).message,
      },
      {
        status: (error as ApiError).status,
      }
    );
  }
  //3 - Робота з http - як діалог двох осіб (клієнта та сервера), саме тому необхідно додати NextResponse
  // return NextResponse.json({ status: 'ok!' });
}
