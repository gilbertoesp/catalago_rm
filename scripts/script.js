function getCharacers(done){
    const results = fetch("https://rickandmortyapi.com/api/character")

    results
        .then(response => response.json())
        .then(data => done(data)) 
}

getCharacers(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>

            <div class="image-container"> 
                <img src="${personaje.image}" alt="Personje">

            </div>
            <h2>${personaje.name}</h2>
            <p>${personaje.status}</p>

        </article>
        `);

        const main = document.querySelector("main");

        main.append(article);
    })
})