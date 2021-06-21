make your document by markdown(x) or javascript/typescript, print to pdf document!

_technologies Powered by chrominum frontend browser client and [next.js](https://nextjs.org/) backend server._

usage:

1. git clone the repo
2. open terminal at it
3. `npm i` or `yarn` (i like `pnpm i` fastest)
4. `npm start`
5. waiting then open `http://localhost:3000`

## Fetures

- support [MDX](https://mdxjs.com/) markdown syntax
- code syntax highlight by [Prism](https://prismjs.com/)
- math formula support by KaTeX

## How to Write Doc?

create your document at `pages` directory, supporting `.md` `.mdx` `.jsx` `.tsx` (React) format.

modify `template.tsx` for all documents.

write your components in `components` directory to reuse, if you master `react jsx` tech.

post image assets at `public` directory.

do NOT EDIT `pages/_app.tsx` and `internal`

## Notice

### Gutenberg style

Based on <https://github.com/BafS/Gutenberg>, there are

- `PageBreaker` `PageBreakAvoid` `NoReformat` refactored utils class in `src/components/page.tsx`.
- build-in `old` `book` `modern` themes

## Welcome Contribute

- browser headless render by puppeteer
- "pixel perfect" problems
