// init
const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);
const create = e => document.createElement(e);
const add = (p, c) => p.appendChild(c);
const css = (e, s) => e.style.cssText = s;
const addClass = (e, c) => e.classList.add(c);
const rmClass = (e, c) => e.classList.remove(c);

// #bookmark-url - #bookmark-title - #bookmark-tag - #bookmark-form type=submit
const urlInput = $("#bookmark-url")
const titleInput = $("#bookmark-title")
const tagInput = $("#bookmark-tag")
const save = $("#bookmark-form button")
const cardsContainer = $("#bookmarks-grid");

save.addEventListener("click", (e) => {
    e.preventDefault(); // prevent refresh

    const urlVal = urlInput.value;

    if(!urlVal.startsWith("https://")) {
      return alert("Invalid URL");
    }

    const titleVal = titleInput.value;
    const tagVal = tagInput.value;

    const bookmarkCards = $$(".bookmark-card").length;

    const card = `<article class="bookmark-card" role="listitem" data-id="${bookmarkCards + 1}" data-tag="design">
          <div class="bookmark-card__thumb">
            <span>${tagVal}</span>
            <div class="bookmark-card__favicon" aria-hidden="true">▲</div>
          </div>
          <button class="bookmark-card__delete" type="button" aria-label="Delete bookmark" title="Delete">✕</button>
          <div class="bookmark-card__body">
            <a href="${urlVal}" class="bookmark-card__title" target="_blank" rel="noopener">
              ${titleVal}
            </a>
            <span class="bookmark-card__url">${urlVal.replace("https://", "")}</span>
            <div class="bookmark-card__meta">
              <span class="bookmark-card__tag">${tagVal}</span>
              <span class="bookmark-card__date">Oct 12</span>
            </div>
          </div>
        </article>`

    cardsContainer.innerHTML += card;

    titleInput.value = "";
    urlInput.value = "";
    tagInput.value = "";
})

const deleteBtns = $$(".bookmark-card__delete");
const bookmarkCards = $$(".bookmark-card");

for(let i in deleteBtns) {
  const deleteBtn = deleteBtns[i];
  
  if(deleteBtn) {
    deleteBtn?.addEventListener("click", () => {
      css(bookmarkCards[i], "display: none;")
    })
  }
}

