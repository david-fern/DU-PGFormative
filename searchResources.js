const btn = document.getElementById("resourceSearchButton");
const search = document.getElementById("resourceSearch");
let results = [["natural gas", "video", "https://www.youtube.com/embed/-njmj0diWu8", "Annual emissions:"], 
               ["oil", "text", "placeholder"]];

function onSearch(txt) {
    let unfound = 1;
    for (let i=0; i < results.length; i+=1) {
        if (results[i][0] == txt.toLowerCase()) {
            alert("Match found")
            unfound = 0;
            if (results[i][1] == "video") {
                document.getElementById("result").innerHTML = "<iframe id='naturalGasVideo' width='800' height='550' src='" + results[i][2] + "'></iframe>" + "<br>" + results[i][3]; 
            } if (results[i][1] == "text") {
                document.getElementById("result").innerHTML = results[i][2];
            }
            break;
        }
    }
    if (unfound == 1) {
        document.getElementById("result").innerText = "No result found";
    }
}

btn.addEventListener('click', () => {
    const userIn = search.value;
    onSearch(userIn);
});