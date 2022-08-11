const urlCategory = "https://opentdb.com/api_category.php";
const categoryArr = [];
// const getCategories = async () => {
//     try {
//         const response = await fetch(urlCategory);
//         const categories = await response.json();
//         for (const category of categories.trivia_categories) {
//             categoryArr.push([category.name, category.id]);
//         }
//     } catch
//         (error) {
//         console.log('cant fetch categories', error)
//     }
// }