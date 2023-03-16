const stories = [
    { id: 1, statusId: "To Do", title: "Story 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, statusId: "To Do", title: "Story 2", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { id: 3, statusId: "In Progress", title: "Story 3", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores." },
    { id: 4, statusId: "Done", title: "Story 4", description: "Et harum quidem rerum facilis est et expedita distinctio." },
    { id: 5, statusId: "Done", title: "Story 5", description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus." }
];
const kanbanBoard = {
    "To Do": [],
    "In Progress": [],
    "Done": []
};
stories.forEach(story => kanbanBoard[story.statusId].push(story));


function renderBoard() {

    const toDoColumn = document.getElementById("to-do-column");
    const analysisColumn = document.getElementById("in-analysis-column");
    const readyForDevColumn = document.getElementById("ready-for-dev-column");
    const inDevColumn = document.getElementById("in-dev-column");
    const inQaColumn = document.getElementById("in-qa-column");
    const signOffColumn = document.getElementById("business-sign-off-column");
    const readyForReleaseColumn = document.getElementById("ready-for-release-column");
    const doneColumn = document.getElementById("done-column");

    // Remove existing stories from columns
    toDoColumn.innerHTML = `<div class="column-header">To Do</div>`;
    analysisColumn.innerHTML = `<div class="column-header">In Analysis</div>`;
    readyForDevColumn.innerHTML = `<div class="column-header">Ready</div>`;
    inDevColumn.innerHTML = `<div class="column-header">In Dev</div>`;
    inQaColumn.innerHTML = `<div class="column-header">In QA</div>`;
    signOffColumn.innerHTML = `<div class="column-header">Sign off</div>`;
    readyForReleaseColumn.innerHTML = `<div class="column-header">Ready for Release</div>`;
    doneColumn.innerHTML = `<div class="column-header">Done</div>`;


    // Render stories as cards in columns
    kanbanBoard["To Do"].forEach(story => {
        const card = document.createElement("div");
        card.classList.add("story");
        card.innerHTML = `
    <div class="story-id">#${story.id}</div>
    <div class="story-title">${story.title}</div>
    <div class="story-description">${story.description}</div>
    <div class="story-statusId">${story.statusId}</div>
  `;
        toDoColumn.appendChild(card);
    });

    kanbanBoard["In Progress"].forEach(story => {
        const card = document.createElement("div");
        card.classList.add("story");
        card.innerHTML = `
    <div class="story-id">#${story.id}</div>
    <div class="story-title">${story.title}</div>
    <div class="story-description">${story.description}</div>
    <div class="story-statusId">${story.statusId}</div>
  `;
        inDevColumn.appendChild(card);
    });

    kanbanBoard["Done"].forEach(story => {
        const card = document.createElement("div");
        card.classList.add("story");
        card.innerHTML = `
    <div class="story-id">#${story.id}</div>
    <div class="story-title">${story.title}</div>
    <div class="story-description">${story.description}</div>
    <div class="story-statusId">${story.statusId}</div>
  `;
        doneColumn.appendChild(card);
    });

}
function progressStory(storyId) {
    // Find the story in the "To Do" column
    const story = kanbanBoard["To Do"].find(story => story.id === storyId);
    if (!story) {
        console.error(`Story with ID ${storyId} not found in "To Do" column`);
        return;
    }

    // Move the story to the "In Progress" column
    kanbanBoard["To Do"] = kanbanBoard["To Do"].filter(s => s.id !== storyId);
    kanbanBoard["In Progress"].push(story);

    // Re-render the board to update the UI
    renderBoard();
}
function moveStory(storyId) {

}

renderBoard();

stories.forEach(story => console.log(story));

function doIteration(daysInIteration) {
    for (let i = 0; i < daysInIteration; i++) {
  
    }

}
