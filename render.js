/**
 * Course: COMP 426
 * Assignment: a05
 * Author: Aaron Zhang
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */

/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function (hero) {
  // TODO: Copy your code from a04 to render the hero card...........Done
  let html = `
  <div class="column is-one-quarter" id="${hero.id}">
    <div class="card">
      <div class="content has-text-centered" style="background-color: ${
        hero.backgroundColor
      }">
        <figure class="card-image is-centered">
          <img alt="Hero Icon" src="${hero.img}"/>
        </figure>
        <div class="card-content">
          <h1 class="title"><span  style="color:${hero.color};">${
    hero.name
  }</span></h1>
        </div>
      </div>
      <div class="card-content">
        <h3 class="subtitle has-text-gray has-text-weight-bold"><em>"${
          hero.subtitle
        }"</em></h3>
        <div class="content">
          <p><strong>Alter Ego:</strong> ${hero.first} ${hero.last}</p>
          <p><strong>First Appearnce:</strong> ${hero.firstSeen.getMonth()}/${hero.firstSeen.getFullYear()}</p>
          <p>${hero.description}</p>
        </div>
      
        <footer class="card-footer">
          <form>
            <button id="editButton" type="button" class="button" style="background-color: ${
              hero.backgroundColor
            }; color: ${hero.color}" data-id="${hero.id}" data-first="${
    hero.first
  }" data-last="${hero.last}" data-name="${hero.name}" data-img="${
    hero.img
  }" data-color="${hero.color}" data-backgroundColor="${
    hero.backgroundColor
  }" data-subtitle="${hero.subtitle}" data-description="${
    hero.description
  }" data-firstSeenYear="${hero.firstSeen.getFullYear()}" data-firstSeenMonth="${hero.firstSeen.getMonth()}">Edit</button>
          </form>
        </footer>
      </div>
    </div>
  </div>
  `;

  return html;
};

/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function (hero) {
  // TODO: Copy your code from a04 to render the hero edit form.......Done
  let html = `
    <div class="column is-one-quarter" id="${hero.id}">
      <div class="card">
        <div class="content has-text-centered" style="background-color: ${
          hero.backgroundColor
        }">
            <img alt="Hero Icon" src="${hero.img}"/>
            <div class="card-content">
              <h1 class="title"><span  style="color:${hero.color};">Edit ${
    hero.name
  }</span></h1>
            </div>
        </div>
        <div class="card-content">
        <form>
          <div class="field">
            <label class="label" for="heroName">Hero Name</label>
            <div class="control">
              <input class="input" type="text" id="heroName" name="heroName" value="${
                hero.name
              }">
              </div>
          </div>
          <div class="field">
            <label class="label" for="firstName">First Name</label>
            <div class="control">
              <input class="input" type="text" id="firstName" name="firstName" value="${
                hero.first
              }">
              </div>
          </div>
          <div class="field">
            <label class="label" for="lastName">Last Name</label>
            <div class="control">
              <input class="input" type="text" id="lastName" name="lastName" value="${
                hero.last
              }">
              </div>
          </div>
          <div class="field">
            <label class="label" for="subtitle">Subtitle</label>
            <div class="control">
              <input class="input" type="text" id="subtitle" name="subtitle" value="${
                hero.subtitle
              }">
              </div>
          </div>
          <div class="field">
            <label class="label" for="firstSeen">First Seen</label>
            <div class="control">
              <input class="input" id="firstSeen" type="date" name="firstSeen" value="${hero.firstSeen.getFullYear()}-${String(
    hero.firstSeen.getMonth()
  ).padStart(2, "0")}-${String(hero.firstSeen.getDate()).padStart(2, "0")}">
            </div>
          </div>
          <div class="field">
            <label class="label" for="description">Description</label>
            <div class="control">
              <textarea class="textarea" id="description" name="description" rows="3">${
                hero.description
              }</textarea>
              </div>
          </div>

            <div class="buttons">
              <button id="saveButton" class="button" type="submit" style="background-color: ${
                hero.backgroundColor
              }; color: ${hero.color}" data-id="${hero.id}" data-first="${
    hero.first
  }" data-last="${hero.last}" data-name="${hero.name}" data-img="${
    hero.img
  }" data-color="${hero.color}" data-backgroundColor="${
    hero.backgroundColor
  }" data-subtitle="${hero.subtitle}" data-description="${
    hero.description
  }" data-firstSeenYear="${hero.firstSeen.getFullYear()}" data-firstSeenMonth="${hero.firstSeen.getMonth()}">Save</button>
              <button id="cancelButton" class="button" type="button" style="background-color: ${
                hero.backgroundColor
              }; color: ${hero.color}" data-id="${hero.id}" data-first="${
    hero.first
  }" data-last="${hero.last}" data-name="${hero.name}" data-img="${
    hero.img
  }" data-color="${hero.color}" data-backgroundColor="${
    hero.backgroundColor
  }" data-subtitle="${hero.subtitle}" data-description="${
    hero.description
  }" data-firstSeenYear="${hero.firstSeen.getFullYear()}" data-firstSeenMonth="${hero.firstSeen.getMonth()}">Cancel</button>
            </div>
        </form>
        </div>
      </div>
    </div>
  `;

  return html;
};

/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function (event) {
  // TODO: Render the hero edit form for the clicked hero and replace the
  //       hero's card in the DOM with their edit form instead..............done

  //determines hero to replace based on id stored in button
  let heroId = event.target.getAttribute("data-id");

  let hero = {};
  hero.id = heroId;
  hero.first = event.target.getAttribute("data-first");
  hero.last = event.target.getAttribute("data-last");
  hero.name = event.target.getAttribute("data-name");
  hero.img = event.target.getAttribute("data-img");
  hero.color = event.target.getAttribute("data-color");
  hero.backgroundColor = event.target.getAttribute("data-backgroundColor");
  hero.subtitle = event.target.getAttribute("data-subtitle");
  hero.description = event.target.getAttribute("data-description");
  hero.firstSeen = new Date(
    event.target.getAttribute("data-firstSeenYear"),
    event.target.getAttribute("data-firstSeenMonth")
  );

  //creates edit form for specified hero
  let editForm = renderHeroEditForm(hero);

  //uses div id to grab old card html
  let oldCard = $(`#${heroId}`);

  //replace old card html with edit form html
  oldCard.replaceWith(editForm);
};

/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function (event) {
  // TODO: Render the hero card for the clicked hero and replace the
  //       hero's edit form in the DOM with their card instead.................done

  //determine which hero edit is being cancelled using id stored in button
  let heroId = event.target.getAttribute("data-id");

  //collect old data
  let hero = {};
  hero.id = heroId;
  hero.first = event.target.getAttribute("data-first");
  hero.last = event.target.getAttribute("data-last");
  hero.name = event.target.getAttribute("data-name");
  hero.img = event.target.getAttribute("data-img");
  hero.color = event.target.getAttribute("data-color");
  hero.backgroundColor = event.target.getAttribute("data-backgroundColor");
  hero.subtitle = event.target.getAttribute("data-subtitle");
  hero.description = event.target.getAttribute("data-description");
  hero.firstSeen = new Date(
    event.target.getAttribute("data-firstSeenYear"),
    event.target.getAttribute("data-firstSeenMonth")
  );

  //recreate old card based on specified hero's last data
  let oldCard = renderHeroCard(hero);

  //use div id to grab edit form html
  let editCard = $(`#${heroId}`);

  //replace edit form html with oldCard html
  editCard.replaceWith(oldCard);
};

/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function (event) {
  // TODO: Render the hero card using the updated field values from the
  //       submitted form and replace the hero's edit form in the DOM with
  //       their updated card instead

  let heroId = parseInt(event.target.getAttribute("data-id"), 10);

  //collect new data in updated hero object
  let hero = {};
  hero.id = heroId;
  hero.first = $("input[name = firstName]").val();
  hero.last = $("input[name = lastName]").val();
  hero.name = $("input[name = heroName]").val();
  hero.img = event.target.getAttribute("data-img");
  hero.color = event.target.getAttribute("data-color");
  hero.backgroundColor = event.target.getAttribute("data-backgroundColor");
  hero.subtitle = $("input[name = subtitle]").val();
  hero.description = $("textarea[name = description]").val();
  hero.firstSeen = new Date(
    parseInt($("input[name = firstSeen]").val().substring(0, 4), 10),
    parseInt($("input[name = firstSeen]").val().substring(5, 7), 10)
  );

  //console.log(event.data);
  let heroes = event.data;
  for (let i = 0; i < heroes.length; i++) {
    if (hero.id == heroes[i].id) {
      heroes[i] = hero;
      break;
    }
  }

  console.log(heroes);

  //create new card based on collected data
  let newCard = renderHeroCard(hero);

  //use div id to grab edit form html
  let editCard = $(`#${heroId}`);

  //replace edit form html with newCard html
  editCard.replaceWith(newCard);
};

/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function (heroes) {
  // Grab a jQuery reference to the root HTML element
  const $root = $("#root");

  // TODO: Generate the heroes using renderHeroCard().........Done
  // TODO: Append the hero cards to the $root element..........Done
  let cards = `<div class="columns is-multiline">`;
  for (let hero of heroes) {
    cards += renderHeroCard(hero);
  }
  cards += "</div>";
  $root.append(cards);

  // TODO: Use jQuery to add handleEditButtonPress() as an event handler for
  //       clicking the edit button
  $root.on("click", "#editButton", handleEditButtonPress);

  // TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
  //       submitting the form
  $root.on("click", "#saveButton", heroes, handleEditFormSubmit);

  // TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
  //       clicking the cancel button
  $root.on("click", "#cancelButton", handleCancelButtonPress);
};

/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function () {
  loadHeroesIntoDOM(heroicData);
});
