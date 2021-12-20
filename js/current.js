const editButton = document.querySelector(".editButton");
let localData = JSON.parse(localStorage.localData || "{}");
const clearButton = document.querySelector(".clear__button");

clearButton.addEventListener("click", () => {
  localStorage.clear();
  clear.classList.add("display-none");
  render(data);
});

const compare = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
const isEditable = (el) => el.getAttribute("contenteditable") === "true";

persons.addEventListener("click", (event) => {
  const button = event.target.closest(".editButton");

  // проверяем нажатие на кнопку
  if (!button) return;

  const characterContent = characterBlock.querySelector(".characters__content");
  const infoEdit = characterContent.querySelectorAll(".info__edit");
  const firstInfoEdit = infoEdit[0];
  const characterBlock = event.target.closest(".character__block");
  const editImg = characterContent.querySelector(".editImg");
  const isEditable = firstInfoEdit.getAttribute("contenteditable") === "true";

  // const finishEdit = () => {
  //   // функция должна нажимать на кнопку только в случае, если нам нужно убрать атрибут contenteditable
  //   if (isEditable(firstInfoEdit)) button.click();
  //   characterBlock.removeEventListener("pointerleave", finishEdit);
  // };

  editImg.src = `img/${isEditable ? "editButton" : "ok"}.png`;
  infoEdit.forEach((el) => el.setAttribute("contenteditable", !isEditable));

  // условия для появления кнопки. пока сделано не очень
  if (localStorage.length) clear.classList.remove("display-none");

  if (isEditable) {
    // создадим объект для сравнения
    let objChanged = getDataFromDom(characterContent);
    // получим объект из локал сторэдж
    let objBase = JSON.parse(localStorage.getItem("base"));
    // очистим локал сторэдж
    localStorage.removeItem("base");
    //теперь сравним два объекта,
    if (!compare(objBase, objChanged)) {
      localData[objChanged.name] = objChanged;
      localStorage.localData = JSON.stringify(localData);
    }
  } else {
    // добавляем возможность закрыть, просто убрав мышь
    characterBlock.addEventListener("pointerleave", finishEdit, {
      once: true,
    });
    // объект, который потом добавим в локал сторэдж, для последующего сравнения
    let objBase = getDataFromDom(characterContent);
    localStorage.setItem("base", JSON.stringify(objBase));
  }
});

function getDataFromDom(elem) {
  return {
    name: elem.querySelector(".character__name").textContent,
    actor: elem.querySelector(".actor").textContent,
    gender: elem.querySelector(".gender").textContent,
    house: elem.querySelector(".house").textContent,
    "wand core": elem.querySelector(".wand").textContent,
    alive: elem.querySelector(".alive").textContent,
  };
}
