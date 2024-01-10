# Islamic-quote.com - [https://islamic-quote.com/](https://islamic-quote.com/)

Showcasing a new Islamic quote every day
-----------------------------------------------

This repository contains JavaScript (Vanilla) code that powers a web page displaying and sharing Islamic quotes. The functionality includes generating a random quote, sharing it on social media platforms, listening to the quote using text-to-speech, and copying the quote to the clipboard.

## Features

- Display random Islamic quotes
- Share quotes on social media
- Listen to quotes using text-to-speech
- Copy quotes to the clipboard

## Code Overview

The code utilizes the `fetch()` method to retrieve data from an external API that provides a collection of Islamic quotes. It then selects a random quote from the API response and displays it on the web page.

Event listeners are implemented to trigger functions when users interact with buttons, such as the "share," "sound," and "copy to clipboard" buttons.

## Social Media Sharing

The code includes functions for sharing quotes on various social media platforms, including Instagram, Facebook, Twitter, Messenger, and email. The `navigator.share()` method is used to enable users to share the quote text and a link to the page.

## API Usage

### GET Method

The MongoDB API service fetches a random quote from a MongoDB database hosted on AWS. The database contains quotes with "name" and "author" fields. The API endpoint for fetching data is [https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquotes](https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquotes).

### POST Method

To add a new quote to the database, use the POST method and send a raw JSON object in the request body to [https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquote](https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquote). The JSON object should include "name" and "author" fields to create a new quote document in the database.

Example POST request using Postman, Jmeter, or any API testing tool:

```http
POST https://us-east-1.aws.data.mongodb-api.com/app/islamic-quote-api-kuwdp/endpoint/islamicquote
{
    "name": "He, who wishes to enter paradise at the best gate, must please his father and mother.",
    "author": "Prophet Muhammad"
}
