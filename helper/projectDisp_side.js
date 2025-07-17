fetch("../asset/project.json")
    .then(response => response.json())
    .then(data => {
        const sideProjects = data.Project.Side;
        const container = document.querySelector("#card-output-side");

        for (let item of sideProjects) {
            const card = document.createElement("my-card");
            card.setAttribute("title", item.name);
            card.setAttribute("date", item.date);

            const img = document.createElement("img");
            img.setAttribute("slot", "image");
            img.setAttribute("src", item.pic);
            img.setAttribute("alt", item.name);

            const desc = document.createElement("div");
            desc.setAttribute("slot", "info");
            desc.textContent = item.desc;

            // Optional: Add a link if provided in the data
            let link;
            if (item.link) {
                link = document.createElement("a");
                link.setAttribute("slot", "link");
                link.setAttribute("href", item.link);
                link.setAttribute("target", "_blank");
                link.textContent = "View Project";
            }

            card.appendChild(img);
            card.appendChild(desc);
            if (link) card.appendChild(link);

            container.appendChild(card);
        }
    });
