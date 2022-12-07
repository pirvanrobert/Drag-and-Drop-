const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
}

function dragstart(e) {
    console.log("dragstart")
    e.target.classlist.add('hold');
    setTimeout(()=>{
        e.target.classlist.add('hide');
    },0);
}

function dragend(e) {
    e.target.classlist.remove('hold', "hide");
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    e.target.classlist.add('hovered');
}

function dragleave(e) {
    e.target.classlist.remove('hovered');
}

function drop(e) {
    e.target.append(item);
    e.target.classlist.remove('hovered');
}