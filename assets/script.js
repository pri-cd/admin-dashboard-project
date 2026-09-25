const DEBUG = true;
const ID_SYMBOL = "#";
const ARTICLE_PARENT_CONTAINER_ID = "article_container";

const actions_data = [
    { href: "#", src: "./assets/MainIcons/favorite.svg", alt: "Favorite" },
    { href: "#", src: "./assets/MainIcons/paw.svg", alt: "Paw" },
    { href: "#", src: "./assets/MainIcons/like.svg", alt: "Like" }
];

const article_data = [
    {
        heading: "Ice Bear goes to the Himalayas",
        text: "Ice Bear has climbed to the top of the Himalayas. He brought snacks, a frying pan, and absolutely no explanation.",
        actions: actions_data
    },

    {
        heading: "Ice Bear builds a better dashboard",
        text: "Ice Bear has organized every button, card, and pixel into perfect harmony. Ice Bear is disappointed by your CSS.",
        actions: actions_data
    },

    {
        heading: "Ice Bear attends a community meetup",
        text: "Everyone came to network. Ice Bear came to silently judge their laptop setup and eat three sandwiches.",
        actions: actions_data
    },

    {
        heading: "Ice Bear opens a restaurant",
        text: "The menu has one item: pancakes. Nobody knows why they cost twelve dollars. Everyone agrees they are incredible.",
        actions: actions_data
    },

    {
        heading: "Ice Bear learns JavaScript",
        text: "Ice Bear wrote one function. It worked perfectly. Ice Bear has now become emotionally attached to the semicolon.",
        actions: actions_data
    },

    {
        heading: "Ice Bear buys a tiny car",
        text: "The car is much too small for Ice Bear. Ice Bear does not care. Ice Bear has installed a spoiler and calls it a sports car.",
        actions: actions_data
    },

    {
        heading: "Ice Bear fights a pigeon",
        text: "The pigeon stole Ice Bear's sandwich. The pigeon has made a terrible mistake. Ice Bear remembers everything.",
        actions: actions_data
    },

    {
        heading: "Ice Bear becomes a DJ",
        text: "Ice Bear played one song at the party. It was just three minutes of whale noises. Nobody complained. Everyone danced.",
        actions: actions_data
    },

    {
        heading: "Ice Bear has a very busy day",
        text: "Ice Bear woke up, made pancakes, fixed a helicopter, defeated a ninja, and took a nap. It is now 9:14 AM.",
        actions: actions_data
    }
];

function debug(...args) {
    if (DEBUG === true) {
        console.log(...args);
    }
}

/**
 * 
 * @param {Action Object} { href = "#", src = "", alt = "" }
 * @returns 
 */
function create_interaction_button({ href = "#", src = "", alt = "" }) {
    const btn = document.createElement('button');
    btn.classList.add("interactive_btn");

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    btn.appendChild(img);

    debug("This is button: ", btn);
    return btn;
}

/**
 * Creates an article (Made this so,
 * repeating was easier than creating lot of HTML objects)..
 * @param {string} heading
 * @param {string} text
 */
function create_article({ heading, text, actions }) {
    const article_parent_container = document.querySelector(ID_SYMBOL.concat("article_container"));

    const article_container = document.createElement("article");
    article_container.classList.add("article");

    const article_header = document.createElement("h4");
    const article_text = document.createElement("p");

    article_header.textContent = heading;
    article_text.textContent = text;

    const article_interaction_btn_container = document.createElement("div");
    article_interaction_btn_container.classList.add("interactive_button_container");

    for (const action of actions) {
        article_interaction_btn_container.appendChild(create_interaction_button(action));
    }

    article_container.appendChild(article_header);
    article_container.appendChild(article_text);
    article_container.appendChild(article_interaction_btn_container);

    article_parent_container.appendChild(article_container);
}

for (const article of article_data) {
    create_article(article);
}