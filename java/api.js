<a href="../index.html">index</a>
        fetch("https://covid-19-data.p.rapidapi.com/country/code?code=it", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
