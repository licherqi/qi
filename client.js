$("ready", () => {
	$("#on").click(() => {
		fetch('https://cloud.arest.io/4c5ca7/led?params=1').then(response => response.text())
			.then(data => {
				console.log(data);
			})
			.catch(e => console.log("Oops, error", e))
	})
	$("#off").click(() => {
		fetch('https://cloud.arest.io/4c5ca7/led?params=0').then(response => response.text())
			.then(data => {
				console.log(data);
			})
			.catch(e => console.log("Oops, error", e))
	})
	setInterval(() => {
	fetch('https://cloud.arest.io/4c5ca7/temperature').then(response => response.text())
		.then(data => {
			let obj = JSON.parse(data); //解析成JSON格式
			let esp_temperature_data=obj.temperature;
			console.log(esp_temperature_data);
			$("#temperature").html(esp_temperature_data.toFixed(2)+'℃');
		})
		.catch(e => console.log("Oops, error", e))
	fetch('https://cloud.arest.io/4c5ca7/humidity').then(response => response.text())
		.then(data => {
			let obj = JSON.parse(data); //解析成JSON格式
			let esp_humidity_data=obj.humidity;
			console.log(esp_humidity_data);
			$("#humidity").html(esp_humidity_data.toFixed(2)+'%');
		})
		.catch(e => console.log("Oops, error", e))
}, 2000)
});
