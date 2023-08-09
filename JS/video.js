// создаем инстанс IntersectionObserver
const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // В момент вызова колбек проверяет, пересекается ли
      // изображение с заданной областью
      if (entry.isIntersecting) {
        // источник картинки берется из data-атрибута

        entry.target.play();

        // после чего отслеживание элемента прекращается явным образом
      } else {
        entry.target.pause();
      }
    });
  },
  {
    // заданная область увеличена на 50px,
    // чтобы загрузка картинки началась до появления во viewport
    rootMargin: "0px 0px 0px",
  }
);

// Находим все картинки и начинаем их отслеживать
document
  .querySelectorAll("video")
  .forEach((image) => imageObserver.observe(image));
