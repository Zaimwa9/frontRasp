 # frontRasp

Basic React front (using [semantic](https://react.semantic-ui.com/)) that is part of a music instrument marketplace prototype powered by a fully voice-controlled (Snips) back-office.

This client communicates with [apiRasp](https://github.com/Zaimwa9) to get the website structure from a fake database data.json. Depending on the structure, (for the fun) it can display realtime temperature/pressure/humidity data and the list of available products.
The CRUD methods to control the database are done within a [Snips app](https://github.com/Zaimwa9/apiSnips).

Check out [Snips](https://snips.ai/) for more info.

# Prerequisites

The apiRasp must be running on a Raspberry accessible via local network.

You need to have a Snips account and an assistant with the Snips app linked to fully use the features.

# Getting Started

Clone the repository either on your personal device or on the raspberry, both should be able to communicate.

`git clone git@github.com:Zaimwa9/frontRasp.git`
`cd path/to/your/folder`
`sudo yarn install`
`yarn start`

If modified in apiRasp, select the right port in /src/app.js:

```javascript

    axios({
      url: 'http://raspberrypi.local:3000/',
      method: 'get'
    })
    .then(result => {
      this.setState({
        website: result.data.website
      })
    })
  }
```
