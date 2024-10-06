const array=[
    "Honey never spoils; archaeologists have found 3,000-year-old pots of honey in Egypt that are still edible.",
    "Bananas are classified as berries, while strawberries are not.",
    "Venus is the hottest planet in our solar system due to its thick, heat-trapping atmosphere.",
    "Wombats produce cube-shaped poop, which prevents it from rolling away.",
    "The Eiffel Tower can grow up to 15 cm taller in summer because of thermal expansion of iron.",
    "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
    "Sharks have existed for over 400 million years, predating trees by about 50 million years.",
    "Oxford University began teaching in 1096, making it older than the Aztec Empire, which started around 1325.",
    "The shortest war in history lasted just 38 minutes between the British Empire and the Sultanate of Zanzibar in 1896.",
    "There are more stars in the universe than grains of sand on all of Earth's beaches.",
    "A day on Venus (243 Earth days) is longer than a year on Venus (225 Earth days).",
    "The Great Wall of China is not visible from space without aid.",
    "Cows can form close friendships and can become stressed when separated from their best buddies.",
    "Pineapples take about 18 to 24 months to grow and ripen.",
    "Koalas have fingerprints that are remarkably similar to human fingerprints, sometimes causing confusion at crime scenes."
]

const generateRandomFacts=()=>{
    let randomIndex=Math.floor(Math.random()*array.length);
    document.getElementById("container").innerHTML=array[randomIndex]
}

