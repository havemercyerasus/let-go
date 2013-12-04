// Saves options to localStorage.
function save_options() {
  var wait = document.getElementById("wait").value;
  localStorage["letgo_wait"] = wait;

  var blacklist = document.getElementById("blacklist").value;
  localStorage["letgo_blacklist"] = blacklist;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 1500);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var wait = localStorage["letgo_wait"];
  var blacklist = localStorage["letgo_blacklist"];

  if (!wait) {
    return;
  } else {
    document.getElementById("wait").value = wait;
  }

  if (!blacklist) {
    return;
  } else {
    document.getElementById("blacklist").value = blacklist;
  }
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);