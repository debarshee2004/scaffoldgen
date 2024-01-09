document.getElementById("task-sts1").style.display = 'none';
document.getElementById("task-sts2").style.display = 'none';
const input = document.querySelector('input');
const btn = document.querySelector('.add-tsk-btn > button');
btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    (e.keycode === 13 ? addList(e) : null);

})
function addList(e) {
    document.getElementById("task-sts1").style.display = '';
    const canc = document.querySelector('.canc');
    const Completed = document.querySelector('.Completed');
    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    newLi.innerHTML = 'a';
    checkBtn.innerHTML = '<p class="tickbtn">✓</p>';
    delBtn.innerHTML = '<p class="deletebtn">X</p>';
    if (input.value !== '') {
        newLi.textContent = input.value;
        input.value = '';
        canc.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }
    checkBtn.addEventListener('click', function () {
        document.getElementById("task-sts2").style.display = '';
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.dp = 'none';
        delBtn.innerHTML = '<p class="deletebtn">X</p>';
    });
    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
    });
}
