fetch("../asset/project.json")
    .then(response => response.json())
    .then(data => {
        const sideProjects = data.Project.Work;
        const container = document.querySelector("#card-output");

        for (let item of sideProjects) {
            const card = document.createElement("my-card");
            card.setAttribute("title", item.name);
            card.setAttribute("date", item.date);

            const img = document.createElement("img");
            img.setAttribute("slot", "image");
            img.setAttribute("src", item.pic);
            img.setAttribute("alt", item.name);

            card.appendChild(img);
            card.appendChild(document.createTextNode(item.desc));

            container.appendChild(card);
        }
    });
