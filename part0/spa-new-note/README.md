# Solution of part 0.6

<pre>
title SPA New Note

note over browser:
The user write something into the text field
The user click the submit button.
end note

note over browser:
The submit event handler is executed
Calls a method that prevents the default behavior of form submit
A new note is created
this note is added to the notes list
re renders the note list on the page
sends the new note to the server
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

note over server:
The server access the note in the body of the request
add the note in the array of notes
end note

server-->browser: 201 created

note over browser: 
The server does not ask for a redirect
The browser stays on the same page
end note
</pre>