console.log(data);

// WRITE YOUR CODE BELOW!

// query for the right element for the dog buttons
const dogsList = document.querySelector(".dogs-list")
const mainSection = document.querySelector(".main__dog-section")
const addDogButton = document.querySelector(".dogs-list__button--add")

data.forEach(dog => {
  // create the list item
  const dogItem = createDogListItem(dog.name)

  // when clicked, show dog info in this section
  dogItem.addEventListener("click", () => {
    createDogCard(dog)
  })

  dogsList.append(dogItem)
})

addDogButton.addEventListener("click", () => {
  // clear the html
  mainSection.innerHTML = ""

  // create the form
  const h2 = document.createElement("h2")
  h2.innerText = "Add a new Dog"

  const form = document.createElement("form")
  form.setAttribute("class", "form")

  const inputText = document.createElement("input")
  inputText.setAttribute("type", "text")
  inputText.setAttribute("id", "name")
  inputText.setAttribute("id", "name")
  inputText.setAttribute("name", "name")

  const inputUrl = document.createElement("input")
  inputUrl.setAttribute("type", "url")
  inputUrl.setAttribute("id", "image")
  inputUrl.setAttribute("name", "image")

  const textArea = document.createElement("textarea")
  textArea.setAttribute("rows", "5")
  textArea.setAttribute("id", "bio")
  textArea.setAttribute("name", "bio")

  const submitButton = document.createElement("input")
  submitButton.setAttribute("type", "submit")
  submitButton.setAttribute("id", "submit")
  submitButton.setAttribute("name", "submit")
  submitButton.setAttribute("value", "Let's add a dog!")
  submitButton.setAttribute("class", "form__button")

  form.append(inputText)
  form.append(inputUrl)
  form.append(textArea)
  form.append(submitButton)

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const newDogItem = createDogListItem(event.target[0].value)

    dogsList.insertBefore(newDogItem, dogsList.children[1])

    // when clicked, show dog info in this section
    newDogItem.addEventListener("click", () => {
      // get data from submit event
      dogData = {
        name: event.target[0].value,
        image: event.target[1].value,
        bio: event.target[2].value,
        isGoodDog: false
      }
      createDogCard(dogData)
    })
  })

  mainSection.append(h2)
  mainSection.append(form)
})

function createDogCard(dogData) {
  mainSection.innerHTML = ""

  // create elements
  const h2 = document.createElement("h2")
  h2.innerText = dogData.name

  const img = document.createElement("img")
  img.setAttribute("src", dogData.image)
  img.setAttribute("alt", "")

  const div = document.createElement("div")
  div.setAttribute("class", "main__dog-section__desc")

  const h3 = document.createElement("h3")
  h3.innerText = "Bio"

  const p1 = document.createElement("p")
  p1.innerText = dogData.bio

  div.append(h3)
  div.append(p1)

  const p2 = document.createElement("p")

  const em = document.createElement("em")
  em.innerText = "Is naughty?"

  let str
  if (!dogData.isGoodDog) {
    str = " Yes!"
  } else {
    str = " No!"
  }

  const strText = document.createTextNode(str)

  p2.append(em)
  p2.appendChild(strText)

  const button = document.createElement("button")
  button.innerText = "Good dog!"

  // append to the section
  mainSection.append(h2)
  mainSection.append(img)
  mainSection.append(div)
  mainSection.append(p2)
  mainSection.append(button)
}

function createDogListItem(name) {
  const dogItem = document.createElement("li")
  dogItem.setAttribute("class", "dogs-list__button")
  dogItem.innerText = name
  return dogItem
}



// "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
