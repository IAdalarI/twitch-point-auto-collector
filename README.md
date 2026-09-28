# Twitch Point Collector

A lightweight browser extension (Manifest V3) that automatically claims Twitch Channel Points bonus chests when they appear in chat.

## Features

- **Automatic Claiming**: Uses a `MutationObserver` to instantly click the "Claim Bonus" button whenever it becomes available.
- **SPA Navigation Handling**: Listens for page URL changes across Twitch channel navigations to automatically re-initialize the observer.
- **Manifest V3 Compliant**: Built using standard modern Web Extension specifications.

## Installation & Setup

### Chrome / Chromium-based Browsers (Brave, Edge, Opera, etc.)
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select this directory.

### Firefox
1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select the [manifest.json](file:///Users/aidanwoolcott/WebstormProjects/twitch-point-auto-collector/manifest.json) file in this directory.

## File Structure

- [manifest.json](file:///Users/aidanwoolcott/WebstormProjects/twitch-point-auto-collector/manifest.json) - Extension metadata, permissions, and content script registration.
- [main.js](file:///Users/aidanwoolcott/WebstormProjects/twitch-point-auto-collector/main.js) - Content script containing DOM observers and auto-click logic.

## License

MIT
