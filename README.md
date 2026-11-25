<div align="center">

<img src="src-tauri/icons/128x128.png" alt="AutoClip" width="72">

# AutoClip

### Turn a video or stream replay into clips you can review and share.

AutoClip is a free, open-source desktop app that finds moments in long videos, reframes them for social platforms, and helps you export finished clips.

[Download AutoClip](https://github.com/zhouxiaoka/autoclip/releases/latest) ·
[Watch examples](https://zhouxiaoka.github.io/autoclip_intro/cases/?lang=en) ·
[Installation help](docs/USER_INSTALLATION_GUIDE.en.md) ·
[Troubleshooting](docs/FAQ.en.md)

[![Latest release](https://img.shields.io/github/v/release/zhouxiaoka/autoclip?style=flat-square)](https://github.com/zhouxiaoka/autoclip/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

</div>

---

## New to AutoClip? Start here

The **desktop app** is the easiest way to get started. You do not need to install Python, FFmpeg, or Docker.

1. **Download the app** from [GitHub Releases](https://github.com/zhouxiaoka/autoclip/releases/latest).
   - Apple Silicon Mac: choose the `.dmg` file with `aarch64` in its name.
   - Windows 10/11, 64-bit: choose the installer with `x64-setup.exe` in its name.
2. **Install and open it.**
   - Mac: open the `.dmg`, drag AutoClip Desktop to **Applications**, then open it.
   - Windows: run the installer and follow the prompts.
   - If your operating system shows a security warning, see [first-launch help](docs/USER_INSTALLATION_GUIDE.en.md#desktop-app-step-by-step).
3. **Try the built-in example** from the Home screen before setting anything up. It needs no API key and lets you explore the app.
4. **Set up AI for your own videos.** Open **Settings → AI Models**, choose a provider, enter your API key, test the connection, and save. Your provider may charge for API use.
5. **Add a video.** Choose **File** for a video on your computer, **Link** for a supported video link, or **Live Replay** for a supported recording source.
6. **Create and check a clip.** Add an `.srt` subtitle file if you have one, choose the output platform, confirm the suggested production type, and start generation. Review the result before exporting or sharing it.

For screenshots, operating-system security prompts, and help with videos that have no subtitles, follow the **[step-by-step installation and first-clip guide](docs/USER_INSTALLATION_GUIDE.en.md)**.

> **Not sure about API keys?** Start with the built-in example. You only need to configure a model before processing your own video. Cloud model, transcription, or image-generation requests can incur charges from the provider you choose.

## What AutoClip does

- Finds candidate moments in interviews, podcasts, talks, courses, and stream recordings.
- Creates portrait or landscape versions for platforms such as TikTok, YouTube Shorts, Instagram Reels, Douyin, Xiaohongshu, and Bilibili.
- Helps with speaker framing, subtitles, titles, covers, and export.
- Imports local videos, supported links, and live-stream replays.
- Runs video cutting and rendering on your computer.

The interface is currently in English. Bring your own cloud API key, or configure local models with Ollama or LM Studio and local speech recognition for an offline workflow.

![AutoClip live replay walkthrough](docs/images/v1.6/autoclip-v1.6-demo.gif)

*Home screen, live replay sources, OBS setup, replay import, and a finished clip.*

See more real outputs in the **[AutoClip showcase](https://zhouxiaoka.github.io/autoclip_intro/cases/?lang=en)**. Media shown in examples belongs to its respective owners.

## Before you start processing your own video

- **A model is needed for AI analysis.** Configure one in Settings and test it before starting.
- **Subtitles help.** If your video has an accurately timed `.srt` file, import it with the video. Without subtitles, configure a speech-to-text option first; the initial local speech-model download can take time and disk space.
- **Cloud use may cost money.** AI providers set their own prices. Cloud transcription sends audio to that provider; cloud analysis sends transcript text; visual analysis sends selected frames. Read [Privacy](docs/PRIVACY.en.md) and review the provider settings before use.
- **Check the output yourself.** Review clip boundaries, framing, subtitles, and sound before publishing.
- **Use media you have permission to process and share.**

## Installation options

| Your computer or use case | Recommended option |
| --- | --- |
| Apple Silicon Mac | [Desktop app](https://github.com/zhouxiaoka/autoclip/releases/latest) |
| Windows 10/11, 64-bit | [Desktop app](https://github.com/zhouxiaoka/autoclip/releases/latest) |
| Linux, Intel Mac, or self-hosted web app | [Docker guide](docs/DOCKER.en.md) |
| Terminal, scripts, or AI-agent tools | [CLI and MCP guide](docs/CLI_AND_MCP.md) |

Desktop installers include Python and FFmpeg. They do not include cloud API credits or all optional speech-recognition models. Intel Mac and Linux users can run AutoClip using Docker or the CLI; desktop installers for these systems are not currently provided.

### First-launch security warnings

Current desktop installers are not yet signed/notarized, so macOS or Windows may show a warning. Make sure the installer came from the official [AutoClip Releases page](https://github.com/zhouxiaoka/autoclip/releases/latest); do not download installers from third-party sites. See the [complete install guide](docs/USER_INSTALLATION_GUIDE.en.md#desktop-app-step-by-step) for platform-specific steps.

## Privacy in brief

Video cutting and rendering happen locally. What leaves your computer depends on the services you enable:

- Cloud AI analysis receives transcript text.
- Cloud speech recognition receives audio.
- Visual analysis may send sampled video frames.
- Analytics and crash reporting can be disabled in Settings.

See the full [Privacy Policy](docs/PRIVACY.en.md) before choosing a cloud provider.

## Common questions

<details>
<summary>Is AutoClip free?</summary>

The app is free and open source under the MIT license. Cloud AI providers may charge for their services. Local models avoid provider API charges but use your computer's resources.

</details>

<details>
<summary>Do I need an API key to try it?</summary>

No. Use the built-in example project first. To analyze your own video with a cloud model, you need an API key from that provider. Local model setups are also available.

</details>

<details>
<summary>Does AutoClip upload my whole video?</summary>

Cutting and rendering are local. Cloud AI analysis sends transcript text, cloud transcription sends audio, and visual analysis can send sampled frames. Use local models and local speech recognition if you want to keep those steps on your computer. See the [Privacy Policy](docs/PRIVACY.en.md).

</details>

<details>
<summary>Why is my first video taking a long time?</summary>

The first run may need to download speech-recognition components or models. Cloud provider response time and your computer's hardware also affect processing time. Start with a short video that already has an `.srt` subtitle file to avoid waiting for speech recognition.

</details>

<details>
<summary>What should I do if generation fails?</summary>

Read the error shown in the app and check the failed stage: subtitles, model connection, video processing, or export. Then follow the [Troubleshooting Guide](docs/FAQ.en.md). If you report a bug, include your operating system, AutoClip version, the failed step, and sanitized logs. Never post API keys or private video.

</details>

## Documentation

| I want to... | Read |
| --- | --- |
| Install AutoClip and make a first clip | [Beginner installation guide](docs/USER_INSTALLATION_GUIDE.en.md) |
| Fix a problem | [Troubleshooting FAQ](docs/FAQ.en.md) |
| Run AutoClip with Docker | [Docker guide](docs/DOCKER.en.md) |
| Use the command line or MCP | [CLI and MCP guide (Chinese)](docs/CLI_AND_MCP.md) |
| Configure AI providers | [Provider setup (Chinese)](docs/MULTI_LLM_PROVIDER_GUIDE.md) |
| Understand privacy | [Privacy policy](docs/PRIVACY.en.md) |
| See the project roadmap | [Roadmap (Chinese)](docs/ROADMAP.md) |
| Browse example outputs | [Showcase](https://zhouxiaoka.github.io/autoclip_intro/cases/?lang=en) |

Some developer and project-planning documents are currently available only in Chinese.

## Community and contributions

- Ask a question or share an idea in [GitHub Discussions](https://github.com/zhouxiaoka/autoclip/discussions).
- See [known issues](https://github.com/zhouxiaoka/autoclip/issues/96).
- [Report a bug](https://github.com/zhouxiaoka/autoclip/issues/new/choose).
- Contributions and translations are welcome. Read [Contributing](CONTRIBUTING.md).

## License

AutoClip is released under the [MIT License](LICENSE).
