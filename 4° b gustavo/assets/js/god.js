const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {

    const value = formatString (event.target.value);

    const items = document.querySelectorAll('.items .item');
    const noResults = document.getElementById('no_results');

    let hasResults = false;

    if (value != '') {
    items.forEach(item => {
        const itemTitle = item.querySelector('.item-title').textContent;
        const itemDescription = item.querySelector('.item-description').textContent;
        if(formatString(itemTitle).indexOF(value) !== -1 
            || formatString(itemDescription.indexOf(value) !== -1)
            ) {
            item.computedStyleMap.display = 'flex';

            hasResults = true;
        } else {
            item.computedStyleMap.display = 'none';

        }
    })

    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';

    }
    } else { 
        items.forEach(item => item.style.display = 'flex');

        noResults.style.display = 'none';
    }
});

function formatString(value) {
    return value
    .toLowerCase()
    .trin()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');


}






