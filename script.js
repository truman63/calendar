function calendar (targetYear, targetMonth) {
	const table = document.getElementsByTagName("table")[0];

	table.innerHTML = "";

	const date = new Date(`${targetYear}-${targetMonth}-01`);
	let lineCount = 1;
	const firstDay = date.getDay();// число 1 дня недели
	const adjustedFirstDay = firstDay == 0 ? 7 : firstDay;// от 1 до 7
	const year = date.getFullYear();
	const month = date.getMonth();
	const firstDayMonth = new Date(year, month + 1, 1);
	const lastDay = new Date(firstDayMonth - 1);
	const res = lastDay.getDate();// последний день месяца
	const adjustedLastDay = lastDay.getDay() == 0 ? 7 : lastDay.getDay();

	for (let per = res; per > 7; per -= 7) lineCount++;
	
	if (adjustedLastDay < adjustedFirstDay) lineCount++;

	const weekNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
	for (let i = 0; i < 7; i++) {
		const row = document.createElement("th");
		row.innerHTML = weekNames[i];
		table.appendChild(row);
	}
	for (let i = 0; i < lineCount; i++){
		const row = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			let col = document.createElement("td");
			row.appendChild(col);
		}
		table.appendChild(row);
	}

	const tdList = document.querySelectorAll("td");
	for (let i = adjustedFirstDay - 1, j = 1; i < res + adjustedFirstDay -1; i++, j++) {
		tdList[i].innerHTML = j;
	}
	return table;
}
calendar(2023,1)