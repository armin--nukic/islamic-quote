// Done by Armin

const QuoteText = document.querySelector(".quote-paragraph");
const addButton = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const soundButton = document.querySelector(".sound");
const copyButton = document.querySelector(".copy");
const shareButton = document.querySelector(".share");

function randomNewQuote() {
  addButton.classList.add("loading");
  addButton.innerHTML = "Loading...";

  // API URL for quotes
  fetch(
    "https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquotes"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex].name;
      const randomAuthor = data[randomIndex].author;
      console.log(randomQuote);
      console.log(randomAuthor);

      QuoteText.innerText = randomQuote;
      authorName.innerText = randomAuthor;

      addButton.innerText = "New Quote";
      addButton.classList.remove("loading");
    });
}

addButton.addEventListener("click", randomNewQuote);

// Share button

shareButton.addEventListener("click", (event) => {
  // To check if the browser supports the native share API
  if (navigator.share) {
    navigator
      .share({
        title: "Quote of the day",
        text: QuoteText.innerText + "--" + authorName.innerText,
      })
      .then(() => console.log("successful share"))
      .catch((error) => console.log("Error sharing", error));
  }
  // Fallback for browsers that do not support the share function
  else {
    alert(
      "The current browser does not support the share function. Please share the link manually."
    );
  }
});

// Sound set to English language

soundButton.addEventListener("click", () => {
  const textToSpeak = `${QuoteText.innerText}. : ${authorName.innerText}`;
  const sound = new SpeechSynthesisUtterance(textToSpeak);
  sound.lang = "en-US"; // Set the language to English (United States)
  sound.pitch = 1.5; // Set the pitch to 1.5 for more natural intonation
  sound.rate = 0.8; // Set the rate to 0.8 for a slightly slower, more natural pace
  sound.volume = 1.0; // Set the volume to 1.0
  speechSynthesis.speak(sound);
});

// Copying

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(
    QuoteText.innerText + " __ " + authorName.innerText
  );

  alert("Quote has been copied to the clipboard");
});

// Get the buttons
const instagramButton = document.getElementById("instagram-share");
const facebookButton = document.getElementById("facebook-share");
const twitterButton = document.getElementById("twitter-share");
const messengerButton = document.getElementById("messenger-share");
const emailButton = document.getElementById("email-share");

// Function to share on Instagram
function shareOnInstagram() {
  navigator.share({
    text: QuoteText.innerText + " -- " + authorName.innerText,
    url: "https://example.com",
  });
}

// Function to share on Facebook
function shareOnFacebook() {
  navigator.share({
    text: QuoteText.innerText + " -- " + authorName.innerText,
    url: "https://example.com",
  });
}

// Function to share on Twitter
function shareOnTwitter() {
  navigator.share({
    text: QuoteText.innerText + " -- " + authorName.innerText,
    url: "https://example.com",
  });
}

// Function to share on Messenger
function shareOnMessenger() {
  navigator.share({
    text: QuoteText.innerText + " -- " + authorName.innerText,
    url: "https://example.com",
  });
}

// Function to share via Email
function shareViaEmail() {
  navigator.share({
    subject: "Quote of the day",
    text: QuoteText.innerText + " -- " + authorName.innerText,
  });
}

// Add event listeners to the buttons
instagramButton.addEventListener("click", shareOnInstagram);
facebookButton.addEventListener("click", shareOnFacebook);
twitterButton.addEventListener("click", shareOnTwitter);
messengerButton.addEventListener("click", shareOnMessenger);
emailButton.addEventListener("click", shareViaEmail);
