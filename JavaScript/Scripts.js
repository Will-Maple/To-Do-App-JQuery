function newItem () {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    

    if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
    }
    
    function strikeout() { 
        li.toggleClass("strike");
    }
    li.on("dblclick", strikeout);

    let button = $('<button class="crossOutButton">X</button>');
    button.on("click", deleteListItem);
    li.append(button);

    function deleteListItem(){
        li.addClass("delete");
    }

    $('#list').sortable();
}