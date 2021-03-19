"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
/** When a user clicks on the nav submit link, form is shown */
function showSubmitForm() {
  hidePageComponents();
  $("#submitform").show("slow");
}
$("#nav-submit-story").on("click", showSubmitForm);

/** When a user clicks on the nav favorite link, favorites shown */
function showFavoritesForm() {
  hidePageComponents();

  $("#favorite-stories").show("slow");
}
$("#nav-favorites").on("click", showFavoritesForm);

/** When a user clicks on the nav favorite link, favorites shown */
function showMyStoriesForm() {
  hidePageComponents();
  $allStoriesList.hide();
  $("#my-stories").show("slow");
}
$("#nav-my-stories").on("click", showMyStoriesForm);
