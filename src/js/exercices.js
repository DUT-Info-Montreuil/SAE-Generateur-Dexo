let selectedItem = null;
const draggables = document.getElementsByClassName("elements");
const preview = document.getElementById('preview');
const page = {
    title : "",
    elements : [],
    height : 300
};

preview.addEventListener('click', (el) => {
    console.log(el);
    if (selectedItem != null) {
        let p = document.createElement('p');
        p.innerHTML = ('FOO TEST');
        p.style.position = 'absolute';
        p.style.left = el.offsetX.toString() + 'px';
        p.style.top = el.offsetY.toString() + 'px';
        preview.append(p);
    }
})
for (let draggable of draggables) {
    draggable.addEventListener('click', (el) => {
        selectedItem = el.target.getAttribute('value');
        console.log(selectedItem);
    })
}
console.log(draggables[0].getAttribute('value'));