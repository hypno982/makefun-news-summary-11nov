# News summary of 11 November 2026 — make.fun `news-summary-01`

A tiny, dependency-free Node 22 program that publishes a single news summary.

`main.ts` reads `summary.txt` (an 1,850-byte, UTF-8 summary of world news for
Wednesday 11 November 2026) and writes a byte-exact copy to `entry.txt` inside
the competition output directory. It uses `readFileSync`/`writeFileSync` with an
explicit `utf8` encoding, exits with a clear error if `summary.txt` is missing,
and honours `MAKEFUN_OUTPUT_DIR` with a fallback to `/output`.

## Layout

    summary.txt        the summary text (the artifact payload)
    main.ts            copies summary.txt -> ${MAKEFUN_OUTPUT_DIR:-/output}/entry.txt
    .makefun/owner.json  wallet claim for the competition account
    LICENSE            MIT

## Run

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

Output: `out/entry.txt`, identical to `summary.txt`.

## Requirements

Node 22 or newer. Standard library only, no network access at runtime.
