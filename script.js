// Get references to the search input and the list items
const searchInput = document.querySelector('.input-search');
const listItems = document.querySelectorAll('ul li');

// Add an event listener to the search input
searchInput.addEventListener('input', filterListItems);

// Function to filter the list items
function filterListItems() {
  const searchText = searchInput.value.toLowerCase();

  listItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchText)) {
      item.style.display = 'grid'; // Show the item
    } else {
      item.style.display = 'none'; // Hide the item
    }
  });
}