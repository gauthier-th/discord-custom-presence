# Discord Custom Presence

Custom Rich Presence on Discord

## Utilisation

Copy `config.example.json` to `config.json` and fill the following fields:

- `clientID`: your application ID, created on the [Discord Developer Portal](https://discord.com/developers/applications/)
- `state`: the Rich Presence state text
- `details`: details text of the Rich Presence
- `largeImageKey`: name of the large image (created in the "Rich Presence" tab on your application)
- `largeImageText`: the text on the large image
- `smallImageKey`: name of the small image (created in the "Rich Presence" tab on your application)
- `smallImageText`: the text on the small image

Install the npm dependencies with `npm install`.

Start the Rich Presence with `npm start`.

## License

MIT License

Copyright (c) 2021 Gauthier THOMAS