# Solution of part 0.4 

<pre>
title New Note

note over browser:
The user write something into the text field
The user Click the submit button
submit form event is called
send the user input to the server
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server:
The server access the note in the body of the request
add the note in the array of notes
redirect to Notes page
end note

server-->browser: 302 found

note over browser:
Reloads the Notes page
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server(with the new note)
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{content: "in the zone", date: "2021-02-02T22:28:10.962Z"}, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
</pre>