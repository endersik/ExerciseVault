const data = [
    {
        id:1,
        name: "Push Up",
        img: "https://www.spotebi.com/wp-content/uploads/2014/10/push-up-exercise-illustration.jpg",
        level: "moderate",
        category: "Chest"
    },
    {
        id:2,
        name: "Burpees",
        img: "https://www.spotebi.com/wp-content/uploads/2014/10/burpees-exercise-illustration.jpg",
        level: "light",
        category: "Legs"
    },
    {
        id:3,
        name: "Plank",
        img: "https://www.spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg",
        level: "moderate",
        category: "Abs"
    },
    {
        id:4,
        name: "Split Squat",
        img: "https://www.spotebi.com/wp-content/uploads/2015/05/bulgarian-split-squat-exercise-illustration.jpg",
        level: "hard",
        category:"Legs"
    },
    {
        id:5,
        name: "Arch Up",
        img: "https://i.pinimg.com/736x/36/92/a0/3692a0267ced7d822e81e5bc15f883ca.jpg",
        level: "light",
        category: "Back"
    },
    {
        id:6,
        name: "Wall Crunch",
        img: "https://i.pinimg.com/736x/24/fe/02/24fe02a7413ed86267aaae7db7607ebd.jpg",
        level: "hard",
        category: "Abs"
    },
    {
        id:7,
        name: "Arnold Shoulder Press",
        img: "https://i.pinimg.com/736x/fb/94/81/fb948178a1e39822aa7878a11223e4ac.jpg",
        level: "light",
        category: "Shoulder"
    }
];

const exerciseContainer = document.querySelector(".exercises")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".categories")
const difficultyLevels = document.querySelector(".levels")
const difficultyLevel = document.querySelector(".level")


const displayExercises = (filteredExercises) => {
    exerciseContainer.innerHTML = filteredExercises.map(
        (exercise) =>
        `
        <div class="exercise">
            <img src=${exercise.img} 
            alt="">
            <span class="name">${exercise.name}</span>
            <span class="level">${exercise.level}</span>
        </div>
        `
    ).join("");
};

displayExercises(data)

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if(value){
        displayExercises(data.filter(item => item.name
                                                .toLowerCase()
                                                .indexOf(value) !== -1));
    }
    else displayExercises(data);
})

const setCategories = () => {
    const allCategories = data.map(item => item.category)
    // Filter allCategories to keep only unique categories.
    // This is achieved by checking if the first occurrence of the current 
    // category (`item`) within the `allCategories` array matches its current 
    // index (`i`).
    const categories = [
        "All",
        ...allCategories.filter((item, i) => {
            return allCategories.indexOf(item) === i;
        })]

    categoriesContainer.innerHTML = categories.map( category => 
        `
        <span class="category">${category}</span>
        `
        ).join("");

    // Event listener at the parent object returns the selected child element
    // (textContent) of the element is assigned to a variable
    // and is used for filtering 
    categoriesContainer.addEventListener("click", (e) => {
        const selectedCategory = e.target.textContent;

        selectedCategory === "All"
            ? displayExercises(data)
            : displayExercises(data.filter(item => item.category === selectedCategory))
    })

};



setCategories()