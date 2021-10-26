const btn = document.getElementById("resourceSearchButton");
const search = document.getElementById("resourceSearch");
let results = [["natural gas", "https://www.youtube.com/watch?v=-njmj0diWu8"], ["oil", "placeholder"]];

btn.addEventListener('click', () => {
    const userIn = search.value;
    alert(userIn);
});