# Islamic-quote.com -- https://islamic-quote.com/

Show a new Islamic quote every day
-----------------------------------------------

This code appears to be a JavaScript (Vanilla) code that controls a web page that displays and shares Islamic quotes. It contains functions that allow the user to generate a random quote, share it on social media platforms, listen to the quote using text-to-speech, and copy the quote to the clipboard.

The code uses the fetch() method to retrieve data from an external API that provides a collection of Islamic quotes. The code then selects a random quote from the data returned by the API and displays it on the web page.

The code also includes event listeners that trigger functions when the user clicks on various buttons, such as the "share" button for sharing the Islamic quote on social media platforms, the "sound" button for listening to the quote using text-to-speech, and the "copy to clipboard" button for copying the quote to the clipboard.

The code also includes functions for sharing the quote on various social media platforms, including Instagram, Facebook, Twitter, Messenger, and email. These functions use the navigator.share() method to allow the user to share the quote text and a link to the page.


# API
-------------------------------------------------

The MongoDB API service is used to fetch a random quote from a MongoDB database hosted on AWS (Amazon Web Services). The database contains a collection of quotes, each with its own "name" and "author" fields. The API endpoint " https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquotes " is used to retrieve the data from the MongoDB database in JSON format.

To add new quote to the database, you would need to use the POST method and send a raw JSON object in the body of the request to the same URL " https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquote ". The JSON object should contain the "name" and "author" fields, which will be used to create a new quote document in the database.

You can add new quote and author of it using Postman, Jmeter or any other Api testing tool using POST method and raw json format like this

If you want to contribute add some quotes to the API below.

POST https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquote
{
    "name": "He, who wishes to enter paradise at the best gate, must please his father and mother.",
    "author": "Prophet Muhammad"
}

