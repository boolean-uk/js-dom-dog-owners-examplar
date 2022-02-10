console.log(data)

// WRITE YOUR CODE BELOW!

const clearMainContainer = () => {
  const currentChildren = Array.from(dogContainer.children)
  currentChildren.forEach((child) => {
    dogContainer.removeChild(child)
  })
}

const clearDogList = () => {
  const listContainer = document.querySelector('.dogs-list')
  const currentChildren = Array.from(listContainer.children)
  currentChildren.forEach((child) => {
    if (child.classList.contains('dogs-list__button--add')) {
      return
    }
    listContainer.removeChild(child)
  })
}

const renderDog = (dog) => {
  clearMainContainer()
  dogContainer.appendChild(createDogCard(dog))
}

const createDogListItem = (dog) => {
  const li = document.createElement('li')
  const dogContainer = document.querySelector('.main')

  li.className = 'dogs-list__button'
  li.innerText = dog.name

  li.addEventListener('click', () => {
    renderDog(dog)
  })

  return li
}

const createSection = () => {
  const section = document.createElement('section')
  section.className = 'main__dog-section'
  return section
}

const createDogCardDesc = (bio) => {
  const div = document.createElement('div')
  div.className = 'main__dog-section__desc'

  const header = document.createElement('h3')
  const headerText = document.createTextNode('Bio')
  header.appendChild(headerText)

  const text = document.createElement('p')
  const textStr = document.createTextNode(bio)
  text.appendChild(textStr)

  div.append(header, text)

  return div
}

const createDogCardBottomSection = (dog) => {
  const button = document.createElement('button')
  const text = document.createElement('p')
  const div = document.createElement('div')

  div.className = 'main__dog-section__btn'
  const isNaughty = dog.isGoodDog ? 'No!' : 'Yes!'
  const textStr = document.createTextNode(`Is naughty? ${isNaughty}`)
  text.appendChild(textStr)

  const buttonText = document.createTextNode(dog.isGoodDog ? 'Bad Dog' : 'Good Dog')
  button.appendChild(buttonText)

  div.append(text, button)
  button.addEventListener('click', () => {
    dog.isGoodDog = !dog.isGoodDog
    renderDog(dog)
  })

  return div
}

const createDogCard = (dog) => {
  const section = createSection()
  const header = document.createElement('h2')
  header.innerText = dog.name

  const image = document.createElement('img')
  image.setAttribute('src', dog.image)

  const desc = createDogCardDesc(dog.bio)
  const bottomSection = createDogCardBottomSection(dog)

  section.append(header, image, desc, bottomSection)

  return section
}

const createForm = () => {
  const form = document.createElement('form')

  const nameInput = createInput('name')
  const imgInput = createInput('image', 'url')
  const bioInput = createInput('bio', 'textarea')
  const submitInput = createInput('submit', 'submit', "Let's add a dog!")

  const nameLabel = createLabel('name', "Dog's name")
  const imgLabel = createLabel('image', "Dog's picture")
  const bioLabel = createLabel('bio', "Dog's bio")

  form.className = 'form'
  submitInput.className = 'form__button'

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = document.getElementById('name')
    const image = document.getElementById('image')
    const bio = document.getElementById('bio')
    const dog = {
      id: data.length + 1,
      name: name.value,
      image: image.value,
      bio: bio.value
    }
    data.push(dog)
    clearDogList()
    renderDogList(data)
  })

  form.append(
    nameLabel,
    nameInput,
    imgLabel,
    imgInput,
    bioLabel,
    bioInput,
    submitInput
  )
  return form
}

const createInput = (idName, type = 'text', value) => {
  let input = null

  if (type === 'textarea') {
    input = document.createElement('textarea')
    input.setAttribute('rows', '5')
  } else {
    input = document.createElement('input')
    input.setAttribute('type', type)
  }

  input.setAttribute('id', idName)
  input.setAttribute('name', idName)

  if (value) input.setAttribute('value', value)

  return input
}

const createLabel = (forAttr, text) => {
  const label = document.createElement('label')
  label.attributes.for = forAttr
  label.innerText = text

  return label
}

const renderMainForm = () => {
  const section = createSection()
  const form = createForm()
  const h2 = document.createElement('h2')

  h2.innerText = 'Add a new Dog'

  section.append(h2, form)

  return section
}

const renderDogList = (dogsArr) => {
  const listContainer = document.querySelector('.dogs-list')
  for (const dog of dogsArr) {
    const item = createDogListItem(dog)
    listContainer.append(item)
  }
}

renderDogList(data)

const formButton = document.querySelector('.dogs-list__button--add')
const dogContainer = document.querySelector('.main')

formButton.addEventListener('click', () => {
  clearMainContainer()
  dogContainer.appendChild(renderMainForm())
})
