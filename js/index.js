async function getData() {
    try {
        const response = await fetch("https://api.msigma.in/btech/v2/branches/");
        if (!response.ok) {
            throw new Error(error);
        }
        const data = await response.json();

        const courseSection = document.querySelector(".courseSection");

        data.branches.forEach((branch) => {
            const courseContainer = document.createElement("div");
            courseContainer.classList.add("course");

            const title = document.createElement("h2");
            title.textContent = branch.short;

            const description = document.createElement("p");
            description.textContent = branch.name;

            const button = document.createElement("button");
            button.textContent = "Apply now";

            const pricing = document.createElement("p");
            pricing.textContent = "Fee starting at ₹799 per subject";
            pricing.classList.add('subtext')

            const randomColor = getRandomColor();
            title.style.color = randomColor;
            button.style.color = randomColor;
            button.style.borderColor = randomColor;
            button.style.backgroundColor = `rgba(${randomColor}, 0.05)`;

            courseContainer.append(title, description, button, pricing);
            courseSection.appendChild(courseContainer);
        });
    } catch (error) {
        console.error(error);
    }
    
}
function getRandomColor() {
    // Generate random values for RGB components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

getData();
