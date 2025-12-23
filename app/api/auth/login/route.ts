// 1 - для початку необхідно обробити POST запит по цьому марштруту. Для цього необхідно описати функцію зі спеціальною назвою - POST. POST - бо нам необхідно обробляти пост запит по логіці POST, GET, DELETE, PUT, PATCH etc.

import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'cookie';
import { cookies } from 'next/headers';
import { api, ApiError } from '../../api';

export async function POST(request: NextRequest) {
  const payload = await request.json();

  try {
    const response = await api.post('auth/login', payload);

    const cookieStore = await cookies();
    const setCookie = response.headers['set-cookie'];
    if (setCookie) {
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
}
// 1 - додаємо трай-кетч
// try {
//   const response = await api.post('auth/login', payload);
//   return NextResponse.json({ status: 'ok!' });
// } catch {}

// 2 - робимо запит і одразу створюємо змінну response.
//     const response = await api.post('auth/login', payload);

// 3 - Ініціалізуємо кукі стору на стороні некстівського сервера
//     const cookieStore = await cookies();

// 4 - Потрібно дістати кукі, які були повернуті веб сервером, на які ми тільки що робили запит
// 5 - Створюємо змінну setCookie і сюда ми будемо забирати з нашого респонсу
// const setCookie = response.headers['set-cookie'];

//6 - Тепер необхідно виконати перевірку чи є у нас кукі???

//6.1 - Робимо маніпуляцію з кукі- переводимо сетКукі в масив
// const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

//6.2 - Пробігаємось по кукам та створюємо опції
// for (const cookie of cookieArray) {
//   const parsed = parse(cookie);
//   const options = {
//     expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
//     path: parsed.Path,
//     maxAge: Number(parsed['Max-Age']),
//   };
// }

//6.3 - До cookieStore треба засетапити токени доступу та оновлення
// if (parsed.accessToken) {
//   cookieStore.set('accessToken', parsed.accessToken, options);
// }
// if (parsed.refreshToken) {
//   cookieStore.set('refreshToken', parsed.refreshToken, options);
// }

// 7 - у відповідь користувачеві повертаємо ті дані, які повернув наш запит
// return NextResponse.json(response.data);

//8 - у випадку, якщо кукі відсутні пишемо
// else {return NextResponse.json({ error: 'Unautorized' }, { status: 401 });}
