const galleryItems = [
    {
      url:
        "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat"
    },
    {
      url:
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish"
    },
    {
      url:
        "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Two Brown Hen and One Red Rooster"
    },
    {
      url:
        "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running"
    },
    {
      url:
        "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Macaw Birds"
    },
    {
      url:
        "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "2 Lion on Grass Field during Daytime"
    }
  ];

  const container = document.querySelector('.container');
   const innerBox = document.querySelector('.inner-box');

   console.log(container);
   console.log(innerBox);

        container.style.width = '300px';
    list = document.querySelector('li');
    container.classList.add('background');
        const arr = galleryItems.map(images => `<li><img class = "box" src="${images.url}" alt=""<p>${images.alt}</p></li>`);
        innerBox.innerHTML = arr;
  
  
  console.log(arr);      