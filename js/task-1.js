const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.querySelectorAll('.item');


console.log(`Total categories: ${categoriesItems.length}`);


categoriesItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElementsCount = categoryItem.querySelectorAll('ul li').length;
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements count: ${categoryElementsCount}`);
});
