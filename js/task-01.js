const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);


categories.forEach((elemt) => {
    const category = elemt.firstElementChild.textContent;
    const totalElemtCategory = elemt.lastElementChild.children.length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${totalElemtCategory}`);
});
