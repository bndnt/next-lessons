import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { api } from '../../api';
import { parse } from 'cookie';

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (accessToken) {
    return NextResponse.json({ success: true });
  }
  if (refreshToken) {
    //запит до серверу
    const response = await api.get('/auth/session', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
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
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ success: false });
  }
}

//1 - нам потрібно переконатися, що токени (2) збережені.

//2 - спочатку нам потрібно імпортувати кукіс і виклткати його
//import { cookies } from 'next/headers';
//const cookieStore = await cookies();

//Щоб дістати токени з кукі стор необхідно у нього викликати метод ГЕТ
/*
const accessToken = cookieStore.get('accessToken')?.value;
const refreshToken = cookieStore.get('refreshToken')?.value;
*/

//особливість куків в тому, що коли закінчується їх життя - вони автоматично видаляються з браузеру
// знаючи це ми можем написати наступне - знаючи що токен ще живий - користувач в системі
// якщо він живий -     return NextResponse.json({ success: true });
//якщо ж він не живий, необхідно зробити запит до сервера, щоб на основі рефреш токену повернути нову пару токенів
//accessToken - щоб отримати дані (профіль, тудушки, список нотатків) для безпеки живе короткий час
/*refreshToken - щоб не змушувати користувача часто перелогінюватися в системі.
 Коли accessToken потухає, необхідно зробити спеціальний запит до серве, 
 куди треба передати рефреш*/
//if (refreshToken)....
