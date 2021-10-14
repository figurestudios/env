# env
Example that downloads an .env file from Skynet incase you can't fit your variables as strings on places such as Akash.

# Installation

Build with

`docker build -t env-test .`

Run with (example .env included)

`docker run -e SKYLINK=AABdNhrCHm0FXol8jKbws2G1h7BqUBZBIT6JQ25n6emq4Q env-test`

You can also run it through Akash by setting an env variable in the manifest like SKYLINK=""
