// Les données de Doctolib
var account = window.wrappedJSObject.current_account;

// Now, we can send it to anyone, or display the data

// La modale
var container = document.createElement("div");
container.classList.add("doctoleak");
container.style.position = "fixed";
container.style.top = "10px";
container.style.bottom = "10px";
container.style.right = "10px";
container.style.background = "white";
container.style.overflow = "scroll";
container.style.zIndex = "1000";
container.style.borderRadius = "8px";
container.style.boxShadow = "0 6px 12px rgba(0,0,0,0.175)";
var close = document.createElement("button");
close.innerHTML = "&Cross;";
close.style.position = "absolute";
close.style.color = "#fff";
close.style.top = "10px";
close.style.right = "10px";
close.style.fontSize = "30px";
close.style.lineHeight = ".5";
close.style.border = "none";
close.style.zIndex = "10";
close.style.background = "transparent";
container.appendChild(close);
close.addEventListener("click", function () {
  container.parentNode.removeChild(container);
});

// Le contenu de la modale
// le titre
var header = document.createElement("div");
header.innerHTML =
  '<div class="dl-booking-title"><h3 class="dl-text dl-text-title-sub-bold dl-text-color-inherit" style="line-height: 1.4em;">Liste des infos transmises par Doctolib</h3><div class="dl-booking-title-subtext"><span class="dl-text dl-text-body dl-text-color-inherit">contenus dans l\'objet window</span></div></div>';
container.appendChild(header);

// Les données

var ul = document.createElement("ul");
ul.style.padding = "30px 40px";
ul.classList.add("dl-text", "dl-text-body");
Object.entries(account).map(([key, value]) => {
  let li = document.createElement("li");
  li.textContent = `${key} = ${JSON.stringify(value)}`;
  ul.appendChild(li);
});

container.appendChild(ul);

// Le lien vers haveIbeenPwned
const linkContainer = document.createElement("div");
linkContainer.style.textAlign = "center";
const link = document.createElement("a");
link.href = `https://haveibeenpwned.com/account/${account.email}`;
link.classList.add("dl-button-primary", "dl-button", "dl-button-size-normal");
link.style.margin = "32px auto";
link.textContent = "Vérifier si mon email a été utilisé";
linkContainer.appendChild(link);
container.appendChild(linkContainer);

document.body.appendChild(container);
XPCNativeWrapper(window.wrappedJSObject.current_account);
