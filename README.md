make your document by markdown(x) or javascript/typescript, print to pdf document!

## Fetures

- support [MDX](https://mdxjs.com/) markdown syntax
- code syntax highlight by [Prism](https://prismjs.com/)

## How to Write Doc?

create your document at `pages` directory, supporting `.md` `.mdx` `.jsx` `.tsx` (React) format.

modify `template.tsx` for all documents.

write your components in `components` directory to reuse, if you master `react jsx` tech.

do NOT EDIT `pages/_app.tsx`

## Notice

### Gutenberg style

Based on <https://github.com/BafS/Gutenberg>, there are

- `PageBreaker` `PageBreakAvoid` `NoReformat` refactored utils class in `src/components/page.tsx`.
- build-in `old` `book` `modern` themes
