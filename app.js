// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
// 	const enterValue = inputEl.value;
// 	const listItemEl = document.createElement("li");
// 	listItemEl.textContent = enterValue;
// 	listEl.appendChild(listItemEl);
// 	inputEl.value = "";
// 	inputEl.focus();
// }

// buttonEl.addEventListener("click", addGoal);

// Vue Starts
Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: "",
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = "";
		},
	},
}).mount("#app");

