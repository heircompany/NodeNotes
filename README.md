## WEB SERVER CHECKLIST
# Optimize code as reusable pieces
# Ways to deal with files
# Ways to deal with databases
# Communicate over the internet
# Accept requests and send responses
# Ways to deal with Work that takes a long time

## BINARY DATA
# Stored as 1s and 0s
# 1 BYTE = 8 Bits
# BASE 2 (Binary) instead of BASE 10 (regular math)
Length of bit string is multiplied by 2 to the X power
0101 in binary = 0 (2^3) + 1 (2^2) + 0 (2^1) + 1 (2^0)
0101 in binary = 5 in number form
Ends in 0 = even
Ends in 1 = odd
# Binary Data is EASY to represent physically!
Circuit Boards operate as Switches (0 ON 1 OFF)
Everything stored is actually NUMERIC
Other Data must be represented as a NUMBER
# Character Sets Represent Characters as Numbers
Unicode - popular because it works for most languages
Contains bigger sets of numbers, BUT needs more bits
# Character Encoding converts Characters to Binary
UTF8 - popular method to store character sets in binary
8 bits are available for each character
New data every 8 bits, regardless of what gets passed
# THIS CREATES A GIANT MAP BETWEEN BINARY & CHARACTERS
JavaScript isn't good at Binary
Node expands on JS as a language, providing methods for this

## OBJECTS
# A collection of Name: Value pairs in Memory
# Points at other objects, values and strings
# Functions are special types of objects
0x001 = Object
0x002 = Primitive "property"
0x003 = Object "property"
0x004 = Function "method"
# Object Literals
Surrounded by brackets {} and separated by commas
Functions can be attached

## INHERITANCE
# One Object gets access to the properties and methods of another Object
# Prototypal Inheritance
Prototypes can have properties and methods of their own, while accessing all properties and methods down the Prototype Chain of Objects
Managing Prototypes properly => Access the properties and methods you want
# Constructors are normal functions that construct Objects
Use the "new" keyword or "class" Objects
.prototype refers to any objects constructed from your unique Object, making its functions
available to other Objects created by the prototype Object
# Primitive Values represent Values:
Number
String
# JavaScript is based on Primitive Values
EXAMPLE:    Primitive Value: a --> stored in memory 0x001
                        Primitive Value: b --> stored in memory 0x002
                        b = a --> b is now a copy of a BY VALUE
                        b = a --> b is now a reference to the Object BY REFERENCE
# Scope is where code can be accessed by a variable within a function
Immediately Invoked Function Expressions have their own SCOPE
# Buffer - temporary holding spot for data
While being transmitted
Intentionally limited in size
Data is made Available to a STREAM (sequence of data made available over time) that combines it into a whole
Decisions are made and Events run during Stream process
# Buffer data stored in memory in V8 = HEAP
MUST BE CLEARED OFTEN FOR PEAK PERFORMANCE!
# Chunks are pieces of data sent through a stream
Sent down pipeline as chunks are completed
# Stream inherits from the Event Emitter
-- THIS IS FROM NODE'S PERSPECTIVE ONLY --
    Stream.Readable - can receive but not send
    Stream.Writable - can send but not receive
    Stream.Duplex - can send and receive
    Stream.Transform - can change data in stream
    Stream.PassThrough - does nothing but pass data through stream
# Abstract (BASE) Class - type of Constructor we never work directly with
Created custom objects inherit from the base class
Readable inherits from Stream & Event Emitter --> part of the same Prototype Chain
# Pipe connects a Readable Stream to a Writable Stream
Pipe chunks from stream to stream, chained endlessly as long as it starts readable & ends writable
Do different things with same chunk of data
# YOU CAN PIPE TO PIPE DESTINATION TO CHAIN PIPES
Use Method Chaining - returning an object so we can keep calling more methods

## MODULES & EXPORTS
# Require takes a path argument and returns a prototype of itself
_function require(path) {
    return self.require(path);
}_
Returned prototype has access to Module properties and methods
_Module.protoype.require = function(path) {
    assert(path, 'missing path');
    assert(util.isString(path), 'path must be a string');
    return Module._load(path, this);
}
var filename = Module._resolveFilename(request, parent);
var cachedModule = Module._cache[filename];
if (cachedModule) {
    return cachedModule.exports;
    }
    var module = new Module(filename, parent);_
Creates an empty object Exports ready for use
Module loads file (don't need .js)
Module compiles file with stripBOM method from prototype - A FUNCTION
JavaScript content is wrapped for v8 engine
# Scripts are run through NativeModules, converted to Strings, then interpreted by v8
_NativeModule.wrap = function(script) {
    return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
};_
# Compiled & Wrapped code, when invoked, is then passed as arguments to a Function Expression
_NativeModule.wrapper = [
    '(function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];_
_fn(module.exports, require, module, filename, dirname);_
This returns module.exports to confirm require function validity
This creates scope for functions, modules and exports
All changes are made available immediately because the code is stored seperately in memory
-- this works because your code is actually wrapped in a function that is given these things as function parameters --
## JSON - JavaScript Object Notation
JavaScript based standard for structuring data that is inspired by JavaScript Object Literals
Most systems can receive JSON, but JS was built for it
Converting JS to JSON, and vice versa, is built in to v8/Node
# Using Folders & Node Functionality with Require
Node's Require functions looks for files with 'js' extension first
If not found, Require will look for a folder directory instead
If found, Require & Node will look and run files called index.js by default
# Require caches the values it contains
This includes modules.exports --> really returns cachedModule.exports
Future objects will be in reference to the original object in cached module

## EXPORTING VS MODULE.EXPORTS
# They refer to the same thing
All exports return a property from a module object
However, exports does not work for all patterns --> module.exports is always an object
# This is a JavaScript QUIRK
Object initially points to module.exports, which is also exports in memory
When a variable gets set equal to a value, JavaScript creates a new spot in memory
        TWO OBJECTS & TWO SPOTS IN MEMORY
# Require returns module.exports, NOT exports
Mutation occurs --> adding properties and methods to an object
This holds the reference value for exports
Just use module.exports....
# Native Modules are the NodeJS Core
Node asks if every module is native first
Node API includes global and scoped libraries
Access scoped libraries (like Utilities) with Require
# ES6 Modules should overtake Node Modules in some ways... but both rock
export function greet() {
    console.log('Hello');
}
import * as greeter from 'greet';
greeter.greet();

## EVENTS AND THE EVENT EMITTER
# Events are something has happened in an application that we can respond to
Events are in most software architectures
Node has two kinds of events and it's weird:
    SYSTEM EVENTS - C++ Core via libuv - internal operations - lower level
    CUSTOM EVENTS - JavaScript Core via Event Emitter - external operations - higher level
# JavaScript doesn't have Events
SYSTEM EVENTS give it this capability
Both/all are wrapped in the JS Core and interact with the Event Emitter
# Event Listeners respond to Events
Code runs when the Listener activates
Multiple Listeners can listen to one Event - ALL get invoked when Event occurs
# Magic Strings
Special meaning in our code that triggers something
This is bad --> bad string = function won't work, hard to debug
Don't rely on strings in code, as much as possible

## PROTOTYPES AND NODE
# Prototypes are perfect with the Event Emitter
All objects created with these constructors are handled and share properties and methods
# Constructors in Node are ctor, superCtor
superCtor is called during the creation of ctor Object
Node sets up a middleman prototype object
All objects then gain access to each other
# Object.create() --> Object listens & responds to Events
Point to new EventEmitter.prototype and add features
util.inherits to set up Prototype Chain for new Objects
New Object like Greeter becomes prototype next in chain
New variable / object Greeter1 has access to all functionality down the Chain
# Many Node Objects are already Event Emitters
# EventEmitter can be used as a function constructor
Add on custom properties and methods
Pass newly created object as a reference
Now we can add our own properties and methods
It's a super constructor
Gain access to all EventEmitter features, plus our own
All is part of same Prototype Chain

## ES6 & NODE
# ECMAScript 2015 (& 2016) adds what JS was missing!
The latest versions of v8 have some support for ES6
Some of the ES6 features make life easier on Server
ES6 NOT compatible with all browsers (Chrome)
# BabelJS.io --> converts ES6 to browser compatible JS
INCLUDE A jsconfig.json
# ES6 is Syntactic Sugar
A feature that only changes how you type something, but nothing changes under the hood
'use strict' --> make JS engine pickier, for production
# ES6 Typed Arrays can access ways to handle Binary Data
NOT NODE - NOT SUPPORTED YET BY ALL VERSIONS OF NODE
# TypeScript Transpiling
Convert one programming language into another
The language the programmer uses may never really run...!?

## ASYNCHRONOUS VS SYNCHRONOUS
# Event Driven, Non-Blocking I/O in V8 JavaScript
Node JS is Asynchronus - runs processes simultaneously
V8 & JavaScript are Synchronous - one process at a time
NON BLOCKING does Things Without Stopping the Rest of the Program from Running
# Node executes processes using Callbacks
Callbacks are functions passed to some other function to be invoked at some point
Main Function "calls back" after Main Code executes
# Node's libuv manages events coming to/from the OS
Closer to the machine itself
Code executes one at a time as called by v8 engine
libuv handles lower level events & execution management
# EVENT LOOP: libuv --> request queue --> OS
OS finishes tasks, marks events DONE in queue
libuv processes this and runs callbacks
This process is ASYNCHRONOUS
# Asynchronous is great but hard to manage
Node can execute Synchronous code Asynchronously
This removes concerns related to Asynchronous programming
Node handles the core architectural processes
This helps create its high performance
# ERROR FIRST CALLBACKS HAVE ERROR OBJECTS AS THEIR FIRST PARAMETER
Callback data is first in a BUFFER by default, encode/decode with desired parameter
Null if no error, otherwise will contain an object defining the error
This is a standard so we know in what order to place our parameters for our callbacks
# ASYNC OVER SYNC FOR USERS!

## PROTOCOLS: Set of Communication Rules
# BOTH client and server are programmed to understand and use a particular set of Rules
Similar to two people from two different countries agreeing on a language to speak in
Client/Server Model - ask/perform services - request/response in standard format
Each Machine has an IP Address (internet protocol)
# TCP/IP Socket Connection between machines --> send/receive data in Packets
HTTP - FTP - SMTP - AMQP - MQTT - RCS - WEAVE
Node treats these data packets as a STREAM
Web Sockets keep socket open using these underlying technologies
Ports control access and routes to programs underneath an IP Address
Domain names get mapped to IP Address & Port
# HTTP is the set of rules for data being transferred on the Web
HyperText Transfer Protocol
Defining data being transferred via TCP/IP
HTTP Request --> Response Format
    HEADERS     CONNECT: <IP:Port>
                            Host: <dns>
                            Connection: keep-alive
    STATUS         HTTP/1.1 200 OK
    BODY            Content-Length: x
                            Content-Type: text/html
Multipurpose Internet Mail Extensions
MIME type: specify the type of data being sent in a responses
# HTTP Parser is a C Program embedded in Node
HTTPS works too, both are used by _http_server.js   
_http_server_ can connect to the internet, send/receive requests and responses, and more
Works with Templates - text designed to be the basis for final content after processing

## APIs - Application Programming Interfaces
# Tools are a set of URLs using HTTP & TCP/IP
They accept and send data via their ENDPOINT
Application data is easily stored in JSON & Stringified
# Serializing Data & Deserializing Data
Translate an Object into a format that can be stored or transferred
Formats like JSON, CSV, XML
# Route Requests to Content
Map HTTP requests to files, pages, or data etc
Response is specific to URL requested
Fun to make your own but Express ftw
HTTP Verb or Method specifies the type of action the request wants to make
# Packages and Package Management Systems
Code libraries that work with other code
Automated installation and updates
Deals with dependencies for you
# Semantic Versioning (semver)
Specifying what version of code was used
Allow others to track if a new version comes out
Also breaking changes
Conveys meaning in data, by following simple rules
# major.minor.patch
patch - some minor bug fixes
minor - new features but backward compatible
major - big changes that could break code
^       minor and patches
~       patches only
# Dependencies are Required - Code Won't Run Without Them!
ALWAYS --save during npm install
NPM will track dependencies and can invoke their download
Works with external packages you include in your code
Developer Dependencies can also be broken out as separate requirements
# Global Installations & Environment Variables
NPM puts packages in a global directory when specified
Package has dependencies which have dependencies which have dependencies...
Environment Variables are global values specific to the unique server environment
We can access Environment Variables with Node
# Middleware Sits Between Two Layers of Software
Express allows this to take place between request and response
Deliver content that is STATIC: not processed by code (html, css, images, other docs)
# REST is an Architectural Style where HTTP and URLs Mean Something
Representational State Transfer
Typically handles HTTP requests and returns JSON

## DATABASES IN JAVASCRIPT
# Relational Databases and SQL
Table with fields and values in rows and columns. Each record has a unique ID.
MAKE MULTIPLE TABLES
    People
    id  firstname   lastname

    Address
    id  personid    address

    PersonAddresses
    personid    addressid

# Database Tables are a lot like JavaScript Objects
[
    {
        ID: 1
        Firstname: "Joe",
        Lastname: "Grotto",
        Address: "27W223 Churchill Rd"
    }, {
        ID: 2
        Firstname: "Rachel",
        Lastname: "Grotto",
        Address: "27W223 Churchill Rd"
    }
]

# NoSQL & Documents
NoSQL has a variety of technologies that are alternatives to tables and SQL.
Document Databases are 1 type - MongoDB, Firebase
Relational Databases were great for reducing hard drive space. This is a smaller concern
Bigger concern is changing our software... Adding a table or new structure can be hard
Documents (storing JSON basically) makes new data additions much easier

## MEAN STACK
# M = MongoDB = Document Store DB
# E = Express = JS Framework for Routing, APIs, and HTTP
# A = Angular = JS Framework for Client Side Code/UI/Automation
    NOTE: ANGULAR IS NOW TYPESCRIPT
# N = Node = JS Runtime on Server

# Stacks are the Combination of All Technologies Used to Build a Piece of Software
Database
Server Side Code
Client Side Code
Everything Else

EXAMPLE: LAMP - Linux Apache MySQL PHP

# Browsers are written in C++
Browsers also have JS engines embedded in them, giving access to extra features
Not just Chrome doing this... everyone is
# Document Object Model (DOM) is a Structure Browsers use to store and manage pages
Browsers give the JavaScript engine the ability to manipulate the DOM
DOM {
    html {
        head {
            script,
            meta,
        },
        body {
            h1,
            p,
            etc
        }
    },
    css,
    js
}
# Front End / Client Side Frameworks
THEY ARE STILL JUST JAVASCRIPT
USE ANY OR ALL OF THEM OR NONE OF THEM WHO CARES LOL
Run in Browser
Manipulates DOM Tree
Template Engine
NodeJS has C++ and JS, Angular and other Frameworks are JUST JS

# Full Stack Developer
Developer that knows all the pieces of a software stack, can build software by themselves
UI/UX, Database, Server Code, etc
