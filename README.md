# merge-delimited-lists

See
[tests](https://github.com/karmaniverous/merge-delimited-lists/blob/main/lib/mergeDelimitedLists/mergeDelimitedLists.test.js)
for examples of usage!

# API Documentation

```js
import { mergeDelimitedLists, PACKAGE_INFO } from '@karmaniverous/merge-delimited-lists`;
```

## Constants

<dl>
<dt><a href="#PACKAGE_INFO">PACKAGE_INFO</a> : <code><a href="#PackageInfo">PackageInfo</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#mergeDelimitedLists">mergeDelimitedLists(delimiter, ...lists)</a> ⇒ <code>string</code></dt>
<dd><p>Merges and deduplicates delimited lists.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PackageInfo">PackageInfo</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="PACKAGE_INFO"></a>

## PACKAGE\_INFO : [<code>PackageInfo</code>](#PackageInfo)
**Kind**: global constant  
<a name="mergeDelimitedLists"></a>

## mergeDelimitedLists(delimiter, ...lists) ⇒ <code>string</code>
Merges and deduplicates delimited lists.

**Kind**: global function  
**Returns**: <code>string</code> - The deduplicated merge of all input lists.  

| Param | Type | Description |
| --- | --- | --- |
| delimiter | <code>string</code> \| <code>Object</code> | A string or RegExp used as a delimiter. |
| ...lists | <code>string</code> | Any number of delimited lists. |

<a name="PackageInfo"></a>

## PackageInfo : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| version | <code>string</code> | package version |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
