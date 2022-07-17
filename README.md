# mergeDelimitedLists

```
/**
 * Merges and deduplicates delimited lists.
 *
 * @function mergeDelimitedLists
 * @param {string} delimiter - A string used as a delimiter.
 * @param {...string} lists - Any number of delimited lists.
 * @returns {string} The deduplicated merge of all input lists.
 */
```

## Collaborators

### `release-it` Configuration

This project includes [release-it](https://github.com/release-it/release-it)
support that requires these final configurations in your local repo:

1. Create a copy of `.env.development.local.template` and name it
   `.env.development.local`

1. Create a GitHub
   [personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it)
   and add it as the value of `GITHUB_TOKEN` in `.env.development.local`.

You can now build build project and publish a release to GitHub and NPM with
these commands:

```
npm run build
npm run release
```
