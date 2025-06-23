fetch("../asset/project.json")
    .then(response => response.json())
    .then(data => {
        const sideProjects = data.Project.Work;
        const container = document.querySelector("#card-output-work");

        for (let item of sideProjects) {
            const card = document.createElement("my-card");
            card.setAttribute("title", item.name);
            card.setAttribute("date", item.date);

            const img = document.createElement("img");
            img.setAttribute("slot", "image");
            img.setAttribute("src", item.pic);
            img.setAttribute("alt", item.name);
            card.appendChild(img);

            const desc = document.createElement("p");
            desc.textContent = item.desc;
            card.appendChild(desc);

            if (item.link && item.link.trim() !== "") {
                const link = document.createElement("a");
                link.setAttribute("href", item.link);
                link.setAttribute("target", "_blank");
                link.textContent = "More Info";
                card.appendChild(link);
            }

            container.appendChild(card);
        }
    });
