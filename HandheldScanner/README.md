# Problem: Hand-held text scanner
	Difficulty: 6
	Date Completed: 2025/03/29

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/5831a1d3a31721767b000120)

## 🛠Function(s) Usage:
	Function: fullScan(parts);

### Inputs:
	A single array containing text string comprising overlapping
	parts of a larger string. If the parts contain line breaks,
	each subsequent line should be joined with other lines from
	the same row in each array element.

### Returns or Examples:
    ["trainin","ning in","in code","odewars"]
	=> "training in codewars"
	[`trainin | `ning in | `in code | `odewars | `wars
	 give me` |  me a n` |  nice s` | e solut` | olution`]
	=> `training in codewars
        give me a nice solution`