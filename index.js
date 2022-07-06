function displayColors(colors) {
  let myColorsHtml = colors.map(color => {
      return `<div class="my-color" style="background-color: ${color.value}"></div>`
  }).join('')

  document.body.innerHTML = `<div class="my-colors">
      ${myColorsHtml}
  </div>`
}

const colorCount = 100

async function getColors(colorCount) {
  const response = await fetch(`https://apis.scrimba.com/hexcolors?count=${colorCount}`)
  const data = await response.json()
  const colors = data.colors
  displayColors(colors)
}

getColors(colorCount)
