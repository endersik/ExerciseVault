const data = [
    {
        id:1,
        name: "Push Up",
        img: "https://www.spotebi.com/wp-content/uploads/2014/10/push-up-exercise-illustration.jpg",
        level: "moderate",
        muscle: ["chest", "arms", "shoulders"]
    },
    {
        id:2,
        name: "Burpees",
        img: "https://www.spotebi.com/wp-content/uploads/2014/10/burpees-exercise-illustration.jpg",
        level: "light",
        muscle: ["legs", "abs"]
    },
    {
        id:3,
        name: "Plank",
        img: "https://www.spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg",
        level: "moderate",
        muscle: ["abs"]
    },
    {
        id:4,
        name: "Split Squat",
        img: "https://www.spotebi.com/wp-content/uploads/2015/05/bulgarian-split-squat-exercise-illustration.jpg",
        level: "hard",
        muscle:["legs"]
    },
    {
        id:5,
        name: "Arch Up",
        img: "https://i.pinimg.com/736x/36/92/a0/3692a0267ced7d822e81e5bc15f883ca.jpg",
        level: "light",
        muscle: ["back"]
    },
    {
        id:6,
        name: "Wall Crunch",
        img: "https://i.pinimg.com/736x/24/fe/02/24fe02a7413ed86267aaae7db7607ebd.jpg",
        level: "hard",
        muscle: ["abs"]
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