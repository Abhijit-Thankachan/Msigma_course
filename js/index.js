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

            courseContainer.append(title, description, button, pricing);
            courseSection.appendChild(courseContainer);
        });
    } catch (error) {
        console.error(error);
    }
}


getData();
