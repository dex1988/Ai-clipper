<div align="center">

# AI Clipper

### A beginner-friendly desktop app for making short clips

AI Clipper helps turn long videos and stream recordings into short clips you
can review, edit, and share.

[Installation guide](docs/USER_INSTALLATION_GUIDE.en.md) ·
[Troubleshooting](docs/FAQ.en.md)

</div>

---

> **No installer packages are published for this repository yet.** The
> prebuilt packages described in the installation guide are separate builds
> and do not include changes made only in this repository.

## What this project includes

- Beginner-oriented English setup and first-run guidance.
- Studio editing that can add multiple selected shot candidates to a draft.
- Optional storyboard roles—**Opening hook**, **Gameplay**, **Payoff**, and
  **Call to action**—to help plan scene order. These are notes for editing;
  they do not add text to the exported video or block export when left blank.

Some in-app names or assets may still use legacy branding; this README
describes the repository's current name, not a complete in-app rebrand.

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

There are no installers published for this repository yet. The
[step-by-step installation guide](docs/USER_INSTALLATION_GUIDE.en.md) explains
the available prebuilt installation option. Those packages are not built from
this repository and do not include repository-specific changes.

### I want to run this version

Running this version requires setting up and building the project. Start
with the repository's [contributor guide](CONTRIBUTING.md) and
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
| Install an available prebuilt app | [Beginner installation guide](docs/USER_INSTALLATION_GUIDE.en.md) |
| Troubleshoot a problem | [FAQ](docs/FAQ.en.md) |
| Understand data handling | [Privacy Policy](docs/PRIVACY.en.md) |
| Build or contribute to this project | [Contributor guide](CONTRIBUTING.md) |
