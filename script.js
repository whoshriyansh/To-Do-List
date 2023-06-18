const item = document.querySelector("#item")
const to_do_list = document.querySelector("#to_do_list")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addtodo(this.value)
            this.value = ""
        }  // to catch the evnt what is happening  and get it into line


    }
);

const addtodo = (item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = ` ${item}
    <i class="fas fa-times"></i> `;

    listitem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");
        }
    )

    listitem.querySelector('i').addEventListener(
        "click",
        function () {
            listitem.remove();
        }
    )
    to_do_list.appendChild(listitem)


}