
const cat1 = document.getElementById("root-categorie1");
const cat2 = document.getElementById("root-categorie2");
const cat3 = document.getElementById("root-categorie3");
const cat4 = document.getElementById("root-categorie4");

function refresh_exercises(event) {
    let list_exercises = $.ajax({
        type: "GET",
        url: "./ajax/get_exercises.php",
        success: function (response) {
            response = JSON.parse(response);
            console.log(response);
            console.log(response[0]);
        }
    });
}

cat1.addEventListener("click", refresh_exercises);
cat2.addEventListener("click", refresh_exercises);
cat3.addEventListener("click", refresh_exercises);
cat4.addEventListener("click", refresh_exercises);
