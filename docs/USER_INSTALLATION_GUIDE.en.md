# Installation and your first clips

[简体中文](USER_INSTALLATION_GUIDE.md) · [README](../README.md) · [Troubleshooting](FAQ.en.md)

## Choose how to run AutoClip

| Environment | Recommended option |
| --- | --- |
| macOS · Apple Silicon (M series) | [Desktop download](https://github.com/zhouxiaoka/autoclip/releases/latest): choose the `.dmg` containing `aarch64` |
| Windows 10 / 11 · x64 | [Desktop download](https://github.com/zhouxiaoka/autoclip/releases/latest): choose the installer containing `x64-setup.exe` |
| Intel Mac / Linux / self-hosted server | No desktop build yet. Use [Docker](DOCKER.en.md) or the [English CLI overview](../README.md#2-cli--mcp) |

Check the actual assets and requirements on the release page. `Source code` archives are not application installers. Desktop installers include Python and FFmpeg; local language models, speech recognition components, and model files need separate setup.

Large files and local models need additional memory and disk space. Allow space for source videos, speech models, temporary files, clips, and exports. Processing speed depends on your hardware, models, and input.

## Desktop app: step by step

This is the easiest method for a complete beginner. You do not need Python, Docker, FFmpeg, or a terminal.

Before you begin:

- Check that you are using an Apple Silicon Mac or Windows 10/11 x64.
- Free enough disk space for the app, source video, temporary files, subtitles, and exports.
- Use only videos and links that you own or are allowed to use.
- Do not delete or format the existing app data unless you mean to remove your projects.

### macOS

1. Open the [latest AutoClip Release](https://github.com/zhouxiaoka/autoclip/releases/latest).
2. Scroll to **Assets**.
3. Download the `.dmg` file whose name contains `aarch64`.
4. Open the downloaded `.dmg`.
5. Drag **AutoClip Desktop** into the **Applications** folder.
6. Open **Applications** and start **AutoClip Desktop**.
7. If macOS says the app cannot be opened:
   - macOS 15 or later: open **System Settings → Privacy & Security**, then choose **Open Anyway**.
   - Older macOS: right-click or Control-click the app, choose **Open**, then confirm.
8. Keep the app open. Continue with [Configure an AI service](#configure-an-ai-service).

Only download a `.dmg` from this repository’s Releases page. Do not disable macOS security features.

### Windows

1. Open the [latest AutoClip Release](https://github.com/zhouxiaoka/autoclip/releases/latest).
2. Scroll to **Assets**.
3. Download the installer whose name contains `x64-setup.exe`.
4. Double-click the downloaded file.
5. Follow the installer prompts and wait until it finishes.
6. Open AutoClip from the Windows Start menu.
7. If Microsoft Defender SmartScreen appears:
   - choose **More info**
   - confirm the file came from this repository’s Releases page
   - choose **Run anyway**
8. Continue with [Configure an AI service](#configure-an-ai-service).

This installer normally uses your user account and does not require an administrator password. If WebView2 is missing, the installer may need internet access to download it.

### Unsigned installers & SHA-256 verification

Desktop installers do not yet carry a Windows code-signing certificate or Apple notarization (tracked in [#119](https://github.com/zhouxiaoka/autoclip/issues/119)) and bundle portable Python + FFmpeg, so fresh releases can trigger Windows SmartScreen, antivirus false positives, or macOS Gatekeeper warnings. Every release installer is built publicly on GitHub Actions (`Desktop Build`) from the tagged source commit and ships with `build-provenance.json` listing the exact commit SHA and installer SHA-256 hashes:

- Windows PowerShell: `Get-FileHash AutoClip.Desktop_<version>_x64-setup.exe -Algorithm SHA256`
- macOS Terminal: `shasum -a 256 AutoClip.Desktop_<version>_aarch64.dmg`

If you prefer not to run unsigned binaries, you can run AutoClip via [Docker](DOCKER.en.md), CLI/MCP (`uvx autoclip-mcp`), or directly from source.

## Configure an AI service

You can either configure a cloud provider or try the built-in example first.

### Recommended for beginners: try the example

1. Leave **Settings** open only if you need to adjust it.
2. Return to **Home**.
3. When no projects exist, choose **Try the example project**.
4. Wait for the example to open.
5. This example needs no API key.
6. Use it to learn which fields, previews, and export controls to use before processing your own video.

### Configure your own provider

1. Open **Settings**.
2. Open **AI Models**.
3. Choose a provider such as Qwen, OpenAI, Gemini, or DeepSeek.
4. Paste your own API key into the provider field.
5. Choose or confirm the model name.
6. Choose **Test connection**.
7. Wait until the test succeeds.
8. Choose **Save**.

If the test fails, do not continue yet:

- Check that the key has no extra spaces.
- Check that the provider account has available credits or billing.
- Check that the selected model is available to your account.
- Check your internet connection.
- Return to **Settings** and test the saved configuration again.

For Ollama or LM Studio, start the local model server and load a model first. Then select the matching local provider in AutoClip.

## Create your first clip

1. Prepare a video that you own or are allowed to use.
2. Start with a 3–5 minute video and clear speech.
3. On **Home**, choose **Link** for a supported online video or **File** for a video on your computer.
4. Paste the link or select the video file.
5. If you already have accurate subtitles, add the `.srt` file.
6. Choose the target platform.
7. Confirm or change the production type.
8. Choose **Generate**.
9. Keep AutoClip open while the clip is processing.
10. Wait for the status to show completion.
11. Open the finished result in the preview.
12. Optional: In the Studio editor, open **Adjust shots**. Assign story roles such as **Opening hook**, **Gameplay**, **Payoff**, or **Call to action**, then use **Up** and **Down** to arrange the scenes. These are planning notes only; they do not add text to the video, and unassigned roles do not block export.
13. Check the start time, end time, framing, title, and subtitles.
14. Choose **Export** or **Download** and save the final file.
15. Open the saved file once and verify that the picture and sound are correct.

If your video has no subtitles:

1. Open **Settings → Speech to subtitles**.
2. Use Whisper only if it is installed and working on your computer.
3. Otherwise, use a cloud transcription provider if you have configured it.
4. Return to **Home** and generate again.

Do not publish or pay to promote a result until you have watched the complete exported file.

Subtitle analysis is the default and suits interviews, podcasts, and courses. As of **v1.4.0**, gameplay recordings can use optional visual analysis, which needs a multimodal model and an explicit enable of paid visual screening. One sample game does not stand for every game. Review the output yourself. There is no claim about ad performance. v1.4.0 does not include CTA motion, generative brand end cards, or karaoke / word-level subtitles.

## See the example, then use your own clip

After installing, when the home screen has no projects, click **Try the example project**. The example is inside the installer (`source.mp4` and `source.srt`) and needs no API key.

Then use a short video you are allowed to use:

- About 3–5 minutes, with clear speech.
- Prefer an accurately timed `.srt`. When there are no subtitles, or local Whisper will not install or is too slow, switch to Bailian cloud transcription as described above. The audio is uploaded to the cloud.
- Use a local file or Bilibili. Confirm that you have the right to use the media.

Common sticking points on a first run are in [Discussion #128](https://github.com/zhouxiaoka/autoclip/discussions/128).

## Cloud and local models

| Option | What you need |
| --- | --- |
| Cloud API | A provider account, working API key, access to the selected model, and network access; the provider bills API usage |
| Ollama | Start Ollama, run `ollama pull qwen2.5:7b`, and select Ollama in AutoClip; for long videos raise the context to 16384 or more (`OLLAMA_CONTEXT_LENGTH` or `num_ctx`) |
| LM Studio | Download and load a model, start Local Server, and select an available model in AutoClip; for long videos set Context Length to 16384 or more when loading the model |

Local presets do not require a cloud API key, but inference uses your hardware. Whisper converts speech to text. The subtitle route uses a language model on subtitles or copy. The visual route needs a multimodal model and sends sampled frames only after you explicitly enable it. Configure each one separately.

## Updates and backups

Finish or stop active jobs and exit the app. Back up your data directory, then download the new installer from [Releases](https://github.com/zhouxiaoka/autoclip/releases/latest). Users on v1.3.0 or earlier must install v1.3.1 manually. From v1.3.1 onward, use Settings → Application → Check for updates for future releases; installation and restart require your confirmation. Startup checks remind at most once a day for the same version and can be turned off in Settings or the reminder. Manual checks remain available.

Default desktop data directories:

| Platform | Directory |
| --- | --- |
| macOS | `~/Library/Application Support/AutoClip` |
| Windows | `%APPDATA%\AutoClip` |
| Linux / CLI | `~/.local/share/AutoClip` |

If you set `--data-dir` / `AUTOCLIP_DATA_DIR`, use that directory instead. Logs are usually in its `logs` subdirectory. Back up the project files, database, and settings together. Settings may contain API keys, so protect your backups. Do not uninstall, delete the database, or clear your data directory as a routine troubleshooting step. Do not assume an automatic backup exists. Uninstalling on Windows keeps the data directory by default; `%APPDATA%\AutoClip` is deleted only if you tick "Also delete my AutoClip data (projects, settings, API keys)" in the uninstaller, and upgrades never delete it.

## Help

Check the [FAQ](FAQ.en.md) and [known issues](https://github.com/zhouxiaoka/autoclip/issues/96) first. If the first clip is stuck (model, no subtitles, or OS warnings), continue in the [first-clip Q&A](https://github.com/zhouxiaoka/autoclip/discussions/128). See [welcome and categories](https://github.com/zhouxiaoka/autoclip/discussions/127). If the problem remains, email your OS, application version, model, failed stage, reproduction steps, and sanitized logs.

Maintained by an individual in their spare time. Response times vary; live support and one-to-one deployment assistance are not provided.

Email: [christine_zhouye@163.com](mailto:christine_zhouye@163.com)
