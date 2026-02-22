let currentTab = "all";

let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "all",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients.",
    status: "all",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description: "Transform complex data into compelling visualizations.",
    status: "all",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design scalable backend systems using Python and AWS.",
    status: "all",
  },
  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$100,000 - $150,000",
    description: "Create beautiful and functional user interfaces.",
    status: "all",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "Build enterprise applications using modern JS frameworks.",
    status: "all",
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Work on cutting-edge startup platform technologies.",
    status: "all",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Develop scalable web applications using React and TypeScript.",
    status: "all",
  },
];

function updateDashboard() {
  document.getElementById("total-count").innerText = jobs.length;
  document.getElementById("interview-count").innerText = jobs.filter(
    (job) => job.status === "interview",
  ).length;
  document.getElementById("rejected-count").innerText = jobs.filter(
    (job) => job.status === "rejected",
  ).length;
}

function renderJobs() {
  const container = document.getElementById("jobs-container");
  container.innerHTML = "";

  let filtered =
    currentTab === "all"
      ? jobs
      : jobs.filter((job) => job.status === currentTab);

  document.getElementById("tab-job-count").innerText =
    filtered.length + " jobs";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20 bg-white rounded-lg shadow-sm">
        <h3 class="text-lg font-semibold">No Jobs Available</h3>
        <p class="text-gray-500 text-sm">
          There are no jobs in this category.
        </p>
      </div>
    `;
    return;
  }

  filtered.forEach((job) => {
    const div = document.createElement("div");
    div.className = "bg-white p-6 rounded-lg shadow-sm mb-6";

    div.innerHTML = `
      <div class="flex justify-between">
        <div>
          <h3 class="text-lg font-semibold text-blue-900">
            ${job.company}
          </h3>
          <p class="text-gray-600 text-sm">
            ${job.position}
          </p>
          <p class="text-gray-500 text-sm mt-1">
            ${job.location} · ${job.type} · ${job.salary}
          </p>
        </div>

        <button onclick="deleteJob(${job.id})"
  class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-50 transition">

  <svg xmlns="http://www.w3.org/2000/svg"
       class="w-5 h-5 text-gray-400 hover:text-red-500 transition"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
       stroke-width="2">
    <path stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 7h12M9 7v10m6-10v10M10 4h4m-7 3l1 13h10l1-13"/>
  </svg>

</button>
      </div>

      <span class="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded mt-3">
        ${job.status === "all" ? "NOT APPLIED" : job.status.toUpperCase()}
      </span>

      <p class="text-gray-600 text-sm mt-3">
        ${job.description}
      </p>

      <div class="flex gap-3 mt-4">
        <button onclick="markInterview(${job.id})"
          class="border border-green-500 text-green-500 px-3 py-1 text-sm rounded hover:bg-green-500 hover:text-white">
          INTERVIEW
        </button>

        <button onclick="markRejected(${job.id})"
          class="border border-red-500 text-red-500 px-3 py-1 text-sm rounded hover:bg-red-500 hover:text-white">
          REJECTED
        </button>
      </div>
    `;

    container.appendChild(div);
  });
}

function markInterview(id) {
  const job = jobs.find((job) => job.id === id);
  job.status = job.status === "interview" ? "all" : "interview";
  updateDashboard();
  renderJobs();
}

function markRejected(id) {
  const job = jobs.find((job) => job.id === id);
  job.status = job.status === "rejected" ? "all" : "rejected";
  updateDashboard();
  renderJobs();
}

function deleteJob(id) {
  jobs = jobs.filter((job) => job.id !== id);
  updateDashboard();
  renderJobs();
}

function switchTab(tab) {
  currentTab = tab;

  document.getElementById("all-btn").className =
    "px-4 py-1 text-sm rounded bg-gray-200 text-gray-600";
  document.getElementById("interview-btn").className =
    "px-4 py-1 text-sm rounded bg-gray-200 text-gray-600";
  document.getElementById("rejected-btn").className =
    "px-4 py-1 text-sm rounded bg-gray-200 text-gray-600";

  document.getElementById(tab + "-btn").className =
    "px-4 py-1 text-sm rounded bg-blue-500 text-white";

  renderJobs();
}

updateDashboard();
renderJobs();
