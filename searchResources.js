const btn = document.getElementById("resourceSearchButton");
const search = document.getElementById("resourceSearch");
let results = [["natural gas", "video", "https://www.youtube.com/embed/-njmj0diWu8", ""], 
            ["oil", "text", "Oil is responsible for 1.6 tonnes of CO2 per capita, around 12.25 billion tonnes in total. The wide ranging uses of crude oil fractions give it huge demand. In order to limit the damage of climate change, we need to find more sustainable materials.", "Source - Emissions by fuel, Hannah Ritchie and Max Roser, 2020, OurWorldInData.org, Link: https://ourworldindata.org/emissions-by-fuel"],
            ["coal", "video", "https://www.youtube.com/embed/3lngKyS8gVI", "Coal is on the decline, but it is still the most widely used fuel."],
            ["nuclear", "video", "https://www.youtube.com/embed/d-8n24ZwZcQ", "Despite fears of meltdowns stoked by Chernobyl and Fukushima, nuclear energy could be one of our greatest tools for combating climate change. Alongside the fluctuating outputs of wind and solar, nuclear can provide an energy baseload to keep the power grid stable. However, the cost of constructing and maintaing a nuclear power plant needs to fall to convince governments that it is a worthwhile investment."],
            ["united states", "video", "https://www.youtube.com/embed/OixvNDZnJVE", "US president Joe Biden has ambitious plans for reducing carbon emissions, but drastic shifts in energy consumption and production will have to occur for this to be realistic."],
            ["united kingdom", "video", "https://www.youtube.com/embed/CWKwVBNQQo4", "Use of coal-fired power plants has massively declined in the UK, with energy from renewables on the rise. This has resulted in declining carbon emissions in Britain. However, much of our manufacturing is done abroad, effectively outsourcing our carbon emissions. This is why we can't just look at our own emissions - we must also support countries we import from to lower their emissions as well."]];

function onSearch(txt) {
    let unfound = 1;
    for (let i=0; i < results.length; i+=1) {
        if (results[i][0] == txt.toLowerCase()) {
            unfound = 0;
            if (results[i][1] == "video") {
                document.getElementById("result").innerHTML = "<iframe id='naturalGasVideo' width='800' height='550' src='" + results[i][2] + "'></iframe>" + "<br>" + results[i][3]; 
            } if (results[i][1] == "text") {
                document.getElementById("result").innerHTML = results[i][2];
                document.getElementById("resultSrc").innerHTML = results[i][3];
            }
            break;
        }
    }
    if (unfound == 1) {
        document.getElementById("result").innerText = "No result found";
        document.getElementById("resultSrc").innerHTML = "";
    }
}

btn.addEventListener('click', () => {
    const userIn = search.value;
    onSearch(userIn);
});