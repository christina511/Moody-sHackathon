var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};
function addButtonClick(){
  var value = document.getElementById("todo-text").value;
  var list = document.getElementById("christinalist");
  var elem = document.createElement("li");
  elem.innerHTML = value
  elem.className = "list-group-item";
  list.appendChild(elem)
// alert(value)
//  alert("Productivity!")
}

(function (todo, data, $) {


    todo.init = function () {


        $.each(data, function (index, params) {

        });


        $('#add-btn').click(function (e) {

        });



    };

    var removeElement = function (id) {

    };

    todo.add = function () {
        var todotext = $('#todo-text').val();

    };


})(todo, data, jQuery);
