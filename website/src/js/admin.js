const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach(deleteButton => {
    const value = deleteButton.value.split(',');
    deleteButton.addEventListener("click", () => {
        if (confirm("Êtes vous sur de vouloir supprimer cet élément ?")) {
            $.ajax({
                type: "POST",
                url: './ajax/delete_element.php',
                data: ({"id": value[0], "mode": value[1]}),
                success: (res) => {
                    deleteButton.parentNode.parentNode.remove();
                },
                error: (res) => {
                    popin("Une erreur est survenue, veuillez acualiser la page");
                }
            });
        }
    });
});