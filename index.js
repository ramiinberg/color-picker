function displayColors(colors) {
  let myColorsHtml = colors.map(color => {
      return `<div class="my-color" style="background-color: ${color.value}"></div>`
  }).join('')

  document.body.innerHTML = `<div class="my-colors">
      ${myColorsHtml}
  </div>`
}

async function getColors() {
  const response = await fetch("https://apis.scrimba.com/hexcolors?count=25")
  const data = await response.json()
  const colors = data.colors
  displayColors(colors)
}

getColors()
