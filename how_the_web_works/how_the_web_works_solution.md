# How The Web Works Solutions

1. What is HTTP?

    Hyper Text Transfer Protocol is governs how clients get data from, or send data to, a server.

2. What is a URL?

    Short for Uniform Resource Locator, a URL is an address for some internet resource.

3. What is TCP?

    Short for Transmission Control Protocol, this is the protocol that governs how hosts connect to one another and exchange data.

4. What is IP?

    Short for Internet Protocol, this is the protocol that governs how data is sent across a network. 

5. What is DNS?

    Short for Domain Name System, this is a system that takes human-readable URLs and converts them into IP addresses.

6. What is idempotent?
    
    Idempotent operations are ones that produce the same result no matter how many times they are executed.

7. What is a query string?

    The query string allows you to pass key-value pairs into the URL, in the format `?key1=value1&key2=value2...`

8. What is a path or route?

    The path typically refers to a single file that lives on the server, or some resource that the server is able to dynamically create, read, update, or delete.

9. List four HTTP Verbs and their use cases.

    `GET` - get some data from the server
    `POST` - send some data to the server
    `PATCH` - update data
    `DELETE` - remove data 

10. What is a client?

    A client is a computer that initiates requests to a remote server.

11. What is a server?

    A server is a computer that can receive requests from multiple clients and issue responses.

12. What is an HTTP request?

    An HTTP request is a request from a client to a server which follows the HTTP protocol (e.g. a request for HTML from news.google.com)

13. What is an HTTP response?

    An HTTP response is a response from a server to a client which follows the HTTP protocol (e.g. an HTML file).

14. What is an HTTP header? Give a couple examples of request and response headers you have seen.

    Headers provide additional information about the request or the response. Here are some examples:

    Request headers: `Host`, `User-Agent`, `Accept`, `Cookie`, `Cache-Control`
    Response headers: `Content-Type`, `Last-Modified`, `Set-Cookie`, `Cache-Control`

15. What is REST?

    Short for REpresentational State Transfer, REST is a popular framework for building web services.

16. What is JSON?

    Short for JavaScript Object Notation, JSON provides a standard way to format data to transfer between clients and servers. The syntax allows for straightforward conversion to JavaScript.

17. What happens when you type in "Hello World" in google.com and press enter?

    For the most thorough answer imagineable, see [this](https://github.com/alex/what-happens-when).    

18. What does it mean when we say the web is "stateless"?

    This means that each HTTP request is an independent transaction, with no prior knowledge of previous requests.

19. What is curl?

    curl is a command-line tool used to send data to or receive data from a server. In particular, it can be used to make HTTP requests.

20. Make a GET request to http://omdbapi.com?t=titanic using curl (your answer should be the curl command required).

    `curl https://icanhazdadjoke.com/search\?term\=pirate`
