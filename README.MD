# Froltend-start
Франкенштейн из [Easy-webdev-startpack](https://github.com/budfy/Easy-webdev-startpack), [цикла статей](https://good-layout-book.netlify.app/) и [скринкаста](https://learn.javascript.ru/screencast/gulp#gulp-what-is-gulp).

## **Что умеет**

В перспективе всё то, что и Easy-webdev-startpack, а там как пойдёт. А пока что:
- **Nunjucks** шаблонизатор со всеми вытекающими преимуществами;
- **SCSS**: сурсмэпы, конкатенация, автопрефиксер;
- **Webpack**;
- **Error handling** всех тасок. Не приляжет отдохнуть в случае грубых синтаксических ошибок и укажет, где косяк.
- **Разные таски для разработки и продакшена**. В режиме dev генерирует сурсмэпы, но не минифицирует. При build наоборот.

## Установка
Выбери своего нового друга и установи сборку, используя соответствующую команду.
Сделать выбор тебе поможет [вот эта](https://habr.com/ru/post/350762/) и [вот эта](https://tproger.ru/news/npm-ci/) статьи, а так же ответы под [этим](https://ru.stackoverflow.com/questions/918655/%d0%94%d0%bb%d1%8f-%d1%87%d0%b5%d0%b3%d0%be-%d0%bd%d1%83%d0%b6%d0%b5%d0%bd-package-lock-json/1089209#1089209) вопросом.

`npm i`|![Sanitar](https://res.cloudinary.com/dmcgizyas/image/upload/v1642833889/sanitar_f9ibpb.jpg)|
|:------:|:--------:|
`npm ci`|![Happy and mentally healthy person](https://res.cloudinary.com/dmcgizyas/image/upload/v1642833884/man_mrkore.jpg)|

## Структура
Иерархия папок и файлов scss заимствована из [цикла статей](https://good-layout-book.netlify.app/) с некоторыми оговорками на особенности работы easy-webdev и личным отсутствием необходимости в некоторых файлах.
## Особенности
- Различное поведение тасок для разработки/продакшена реализовано **НЕ** через NODE_ENV или плагины по типу gulp-if. Просто используются разные таски из папки `tasks`. Например, в таске `dev_css` генерируются сурсмэпы, а в таске `prod_css` - нет, но происходит минификация. Таким образом мы получаем удобную отладку стилей при разработке, и получаем минимально возможный вес бандла в продакшене.
