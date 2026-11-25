<div align="center">

# AI Clipper

### A beginner-friendly community fork of AutoClip

AI Clipper is the repository name for this independent fork of
[AutoClip](https://github.com/zhouxiaoka/autoclip), an open-source app for
turning long videos and stream replays into short clips.

[Browse this fork's source](https://github.com/dex1988/Ai-clipper) ·
[Upstream AutoClip project](https://github.com/zhouxiaoka/autoclip) ·
[Upstream installation guide](docs/USER_INSTALLATION_GUIDE.en.md) ·
[Troubleshooting](docs/FAQ.en.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

</div>

---

> **This is a fork, not an official AutoClip release.** This repository does
> not currently publish its own installer packages. The upstream releases
> linked in the installation guide are built by the original project and do
> not include changes made only in this fork.

## What this fork adds

- Beginner-oriented English setup and first-run guidance.
- Studio editing that can add multiple selected shot candidates to a draft.
- Optional storyboard roles—**Opening hook**, **Gameplay**, **Payoff**, and
  **Call to action**—to help plan scene order. These are notes for editing;
  they do not add text to the exported video or block export when left blank.

The app is still based on AutoClip, and some in-app names or assets may retain
the original branding. This README describes this repository; it does not
rebrand the application itself.

## What the app does

- Finds candidate moments in interviews, podcasts, talks, courses, and
  recordings.
- Reframes clips for portrait or landscape platforms, and helps prepare
  subtitles, titles, covers, and exports.
- Works with local videos, supported links, and supported stream replays.
- Cuts and renders video on your computer.

AI analysis can use a cloud provider or compatible local models. Video editing
and rendering happen locally, but the data sent for AI processing depends on
your configuration. For details, read the [Privacy Policy](docs/PRIVACY.en.md).

## Getting started

### I want to try a prebuilt app

There are no installers published by this fork yet. You can download a
prebuilt app from the [upstream AutoClip Releases page](https://github.com/zhouxiaoka/autoclip/releases/latest),
but that app is an upstream build—not AI Clipper with this fork's changes.
The [step-by-step installation guide](docs/USER_INSTALLATION_GUIDE.en.md)
covers those upstream packages.

### I want to run this fork

Running fork-specific changes requires setting up and building the source
code. Start with the repository's [contributor guide](CONTRIBUTING.md) and
[desktop build guide](docs/BUILD_GUIDE.md). These are developer instructions,
not a one-click beginner installer; the build documentation is currently in
Chinese.

## Before processing your own video

- Try the built-in example first; it does not need an API key.
- Configure and test an AI provider before analyzing your own video.
- Cloud AI providers may charge for use. Check their pricing before sending
  requests.
- Cloud transcription sends audio to the provider; cloud analysis sends
  transcript text; visual analysis may send sampled video frames.
- Review the clip boundaries, framing, subtitles, and sound before sharing.
- Only process and publish media you have permission to use.

## Documentation

| I want to... | Read |
| --- | --- |
| Install an upstream prebuilt app | [Beginner installation guide](docs/USER_INSTALLATION_GUIDE.en.md) |
| Troubleshoot a problem | [FAQ](docs/FAQ.en.md) |
| Understand data handling | [Privacy Policy](docs/PRIVACY.en.md) |
| Build or contribute to this fork | [Contributor guide](CONTRIBUTING.md) |
| Learn about the original project | [Upstream AutoClip](https://github.com/zhouxiaoka/autoclip) |

## Original project and license

This fork is based on [AutoClip](https://github.com/zhouxiaoka/autoclip).
The original project's MIT license and notices are retained in
[LICENSE](LICENSE). This fork is independently maintained and is not affiliated
with or endorsed by the upstream maintainers.
