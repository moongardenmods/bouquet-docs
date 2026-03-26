---
outline: deep
---

# Installation

Note that this guide is for script developers. If you're a player that is having trouble installing Bouquet, please refer to Fabric's documentation, or your specific launcher's documentation.

## Methods

### Using Allium Example Script

By default, Bouquet is provided as a dependency in the `build.gradle.kts`, no action is needed. 

If for whatever reason you do not wish to use Bouquet, remove, or comment out the line matching the following:
```kts
implementation("dev.moongarden:bouquet:${project.properties["bouquet_version"]}")
```

### Standalone

If your script development workspace is in a production instance of the game, see the note for players: refer to documentation from Fabric, or the specific game launcher you are using. 

## Setup

After installing, ensure that Bouquet is present before requiring it, like so:
```lua
if not allium.isScriptPresent("bouquet") then
    error("Missing Dependency 'bouquet'.")
end

local bouquet = require("bouquet")
```
