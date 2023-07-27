var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeOrEditItem); // Combine remove and edit event handling
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById('item').value;
  var newDesc = document.getElementById('description').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem+" "+newDesc));

  //del button element
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);

  //edit button element
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove or Edit item
function removeOrEditItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure you want to delete this item?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  } else if (e.target.classList.contains('edit')) {
    var li = e.target.parentElement;
    var currentText = li.firstChild.textContent;
    var newText = prompt('Edit the item:', currentText);
    if (newText !== null && newText.trim() !== '') {
      li.firstChild.textContent = newText;
    }
  }
}

// Filter Items
function filterItems(e) {
  // Convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent.toLowerCase();
    var deleteBtn = item.querySelector('.delete');
    var editBtn = item.querySelector('.edit');

    // Check if the item text contains the filter text
    if (itemName.indexOf(text) !== -1) {
      item.style.display = 'block';
      deleteBtn.style.display = 'inline-block';
      editBtn.style.display = 'inline-block';
    } else {
      item.style.display = 'none';
      deleteBtn.style.display = 'none';
      editBtn.style.display = 'none';
    }
  });
}