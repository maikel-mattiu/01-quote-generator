// QUOTE API URL

const apiUrl = "https://quotes-api-self.vercel.app/quote"

// GET HTML ELEMENTS
const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuoteBtn = document.getElementById("new-quote")
const tweetQuoteBtn = document.getElementById("x-button")
const loader = document.getElementById("loader")

// FETCH API FUNCTION
async function getQuote(url) {
	showLoader()
	try {
		const response = await fetch(url)
		quote = await response.json()
		console.log(quote)
		return quote
	} catch (error) {
		console.log(error)
	}
}

// SHOW LOADER FUNCTION
function showLoader() {
	loader.hidden = false
	quoteContainer.hidden = true
}

// HIDE LOADER FUNCTION
function hideLoader() {
	quoteContainer.hidden = false
	loader.hidden = true
}

// OPTION 1 FETCH QUOTE:
async function displayQuote() {
	showLoader()
	try {
		const quote = await getQuote(apiUrl)
		quoteText.textContent = quote.quote
		authorText.textContent = quote.author
		if (quote.quote.length > 50) {
			quoteText.classList.add("long-quote")
		} else {
			quoteText.classList.remove("long-quote")
		}
	} catch (error) {
		console.log(error)
	}
	hideLoader()
}

// DISPLAY QUOTE
displayQuote()

// TWEET QUOTE FUNCTION
function tweetQuote() {
	const quote = quoteText.textContent
	const author = authorText.textContent
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`
	window.open(twitterUrl, "_blank")
}

// EVENT LISTENER FOR TWEET AND NEW QUOTE BUTTONS
tweetQuoteBtn.addEventListener("click", tweetQuote)

newQuoteBtn.addEventListener("click", displayQuote)

// OPTION 2 FETCH API:
// getQuote(apiUrl)
// 	.then((quote) => {
// 		quoteText.textContent = quote.quote
// 		authorText.textContent = quote.author
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})
