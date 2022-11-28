function rep(str, search, replacement) {
  return str.split(search).join(replacement);
}
document.onkeydown = function(){document.body.innerHTML = rep(document.body.innerHTML, "", "bruh")}
