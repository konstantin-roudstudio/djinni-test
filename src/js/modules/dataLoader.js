import textObserver from './textObserver';

export default async function () {
  const listings = document.querySelectorAll(".content__listing");
  const descriptions = [
    `Here goes some sample, example text that is relatively short.`,
    `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
  ];
  const response = await fetch("https://picsum.photos/v2/list?page=1&limit=9");
  const jsonData = await response.json();
  const temp = document.getElementsByTagName("template")[0];
  let item = temp.content.querySelector("div");
  let itemsLoaded = 0;

  listings.forEach(listing => {
    function addItems(startPos, batch) {
      for (let i = startPos; i < startPos + batch; i++) {
        if (!jsonData[i]) return;

        // description randomizer
        const text = descriptions[(Math.random() >= 0.5) ? 1 : 0];
        let newItem = document.importNode(item, true);
        newItem.querySelector("#image").setAttribute("src", jsonData[i].download_url)
        newItem.querySelector(".listing-item__text").innerText = text;
        newItem.querySelector("#download-button").setAttribute("href", jsonData[i].download_url)
        newItem.querySelector("#share-button").setAttribute("href", jsonData[i].url)
        listing.appendChild(newItem);
        itemsLoaded = i;
      }
      textObserver();
    }

    function checkScroll() {
      if (listing.getBoundingClientRect().bottom - window.innerHeight < 100) {
        addItems(itemsLoaded + 1, 2);
      }

      if (itemsLoaded > jsonData.length) {
        window.removeEventListener('scroll', checkScroll);
      }
    }

    window.addEventListener('scroll', checkScroll);

    //initial load
    addItems(itemsLoaded, 4);
  });
}