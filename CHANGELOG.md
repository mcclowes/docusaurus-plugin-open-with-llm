# Changelog

## Unreleased

- CommonJS builds resolve their packaged theme without evaluating an unavailable ESM URL (#3).
- The doc-page wrapper inherits the initial theme layout instead of rendering itself (#3).
- The demo isolates generated JavaScript from the library's ESM scope and uses its CommonJS entry.
- Package checks and the CommonJS example build run in CI; package checks also run before publishing.

## 0.1.0

- Add a docs-page menu for copying and viewing Markdown.
- Add configurable ChatGPT, Claude, and custom LLM provider links.
- Add automatic `DocItem/Layout` theme integration.
