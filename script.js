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

document.querySelector('.btn-download').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'the_timeliner.xlsx';
    link.download = 'the_timeliner.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
