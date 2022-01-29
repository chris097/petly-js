// Javascript code will be available here.
const baseUrl = `https://dog.ceo/api/breeds/list`;

const dogBreed = 'affenpinscher';

// Write a function that will bundle the dom element.

const selectBreed = document.querySelector('.breed');

const dogCard = document.querySelector('.dog-card');

const displayNumber = document.querySelector('.display-number')

const dogTitle = document.querySelector('.dog-breed');
const randomBreed = document.querySelector('.random-breed')



const getNumberOfImages = async (e) => {
  totalNumberOfImages = e.target.value;
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/${totalNumberOfImages}`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
}

displayNumber.addEventListener('click', getNumberOfImages)

const getBreedName = (e) => {
  const value = e.target.value;
  getBreedByName(value)
  dogTitle.innerHTML=value + ' ' + 'Breeds';
}

const defaultDogList = async () => {
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/5`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
}

randomBreed.addEventListener('click', async () => {
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random/5`);
    const defaultData = await data.json();
    // console.log(defaultData.message)
    randomImages(defaultData.message)

  } catch (error) {
    console.error(error.message, 'try again...')
  }
})

// const breedName = document.querySelector('.breed');
selectBreed.addEventListener('click', getBreedName);

const getListOfBreeds = async () =>{
  try {
    const data = await fetch(baseUrl)
    const res = await data.json();
    // console.log(res.message)
    selectCategory(res.message)
  } catch (error) {
    console.error(error.message, 'Not found.')
  }
};

const getBreedByName = async (name, num = 5) => {
  try {
    const data = await fetch(`https://dog.ceo/api/breed/${name}/images/random/${num}`)
    const image = await data.json()
    // console.log(image?.message)
    randomImages(image?.message)
  } catch (error) {
    console.log(error.messge, 'Check again')
  }
} 

//Get dog images
const randomImages = (data) => {
  const dogImage = `
    ${data?.map((url) => (`<img src=${url} alt="dog_image">`))}`
    dogCard.innerHTML = dogImage;
}

// List of Breeds
const selectCategory = (data) => {
  const breedOption = `
    ${data?.map((el) => (`<option value=${el}>${el}</option>`))}`
    selectBreed.innerHTML = breedOption;
}

defaultDogList()

getListOfBreeds()
