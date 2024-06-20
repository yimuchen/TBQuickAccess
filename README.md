# Thunderbird quick access icon tabs

Main credit goes to this repository: https://github.com/tdmrhn/Thunderbird-Quick-Access-Buttons

I'm adapting this for my uses. As this only asks thunderbird to provide a
browser pass-through, no information will be stored for this plugin.

## Currently supporting

- [X] Messenger
- [X] WhatsApp
- [X] Mattermost (you must specify your Mattermost server URL)

## SVG graphics:

Generated from: https://www.svgrepo.com/

Plugin icon is adapted from: https://www.svgrepo.com/svg/467369/thunder

## Creating the XPI file:

```bash
zip TBQuickAccess.xpi manifest.json redirect.js *.svg
```
