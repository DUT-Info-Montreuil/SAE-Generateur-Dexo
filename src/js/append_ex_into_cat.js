const cat1 = document.getElementById("root-categorie1");
const cat2 = document.getElementById("root-categorie2");
const cat3 = document.getElementById("root-categorie3");
const cat4 = document.getElementById("root-categorie4");
const exos_cat1 = document.getElementById("exos-categorie1");
const exos_cat2 = document.getElementById("exos-categorie2");
const exos_cat3 = document.getElementById("exos-categorie3");
const exos_cat4 = document.getElementById("exos-categorie4");


const name_to_var = {
    "Principe alphabétique": exos_cat1,
    "Conscience phonologique": exos_cat2,
    "Décodage": exos_cat3,
    "Encodage": exos_cat4
}

const name_to_id = {
    "Principe alphabétique": 1,
    "Conscience phonologique": 2,
    "Décodage": 3,
    "Encodage": 4
}


function exercise_tag(id_exercise, nom) {
    const element = document.createElement("div");
    element.setAttribute("class", "categories  draggable");
    element.setAttribute("id-ex", id_exercise);
    element.setAttribute("draggable", "true");
    element.setAttribute("id", "idexercise-" + id_exercise);
    const name_exercise = document.createElement("h1");
    name_exercise.append(nom);
    element.appendChild(name_exercise);

    return element;
}


async function refresh_exercises(event)
{
    const name_of_category = event.target.innerText.trim();

    let response;
    await $.ajax({
        type: "POST",
        data: {"id": name_to_id[name_of_category]},
        url: "./ajax/get_exercises.php",
        success: function (r) {response = JSON.parse(r);}
    });

    const category_element = name_to_var[name_of_category];
    const all_previous_exercise = category_element.contentDocument.body.getElementsByClassName("categories");
    for (const previous_exercise of all_previous_exercise)
        category_element.contentDocument.body.removeChild(previous_exercise);
    for (let i = 0; i < response.length; i++)
        category_element.contentDocument.body.appendChild(exercise_tag(response[i]["id"], response[i]["nom"]));
}


cat1.addEventListener("click", refresh_exercises);
cat2.addEventListener("click", refresh_exercises);
cat3.addEventListener("click", refresh_exercises);
cat4.addEventListener("click", refresh_exercises);
