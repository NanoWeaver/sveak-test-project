function hidePartialGridRow() {
  const container = document.querySelector('.cards-container');
  const cards = container.querySelectorAll('.card');
  const computedStyle = window.getComputedStyle(container);
  const columnCount = computedStyle.gridTemplateColumns.split(' ').length;
  const rowCount = computedStyle.gridTemplateRows.split(' ').length;

  if (columnCount === 0 || rowCount === 1) return;

  const fullRowCount = Math.floor(cards.length / columnCount);

  const startOfPartialRowIndex = fullRowCount * columnCount;

  cards.forEach((card, index) => {
    if (index >= startOfPartialRowIndex) {
      card.classList.add('hide-cards');
    } else {
      card.classList.remove('hide-cards');
    }
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const optimizedHidePartialRow = debounce(hidePartialGridRow, 100);

document.addEventListener('DOMContentLoaded', function () {
  optimizedHidePartialRow();
});

window.addEventListener('resize', optimizedHidePartialRow);
