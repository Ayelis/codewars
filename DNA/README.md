# Problem:Translate DNA in 6 frames
	Difficulty:5
	Date Completed:2025/04/02

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/5708ef48fe2d018413000776)

## 🛠Function(s) Usage:
	Function:translateWithFrame(dna, frames=[1,2,3,-1,-2,-3]);

### Inputs:
	dna = a string literal representing a DNA/RNA strand
	frames = an array requesting different compositions of it

### Additional:
	codons = a Translation Hash which decodes codons into their
	representative codes for amino acids/etc
AAG:K, AAT:N, AGG:R, AGC:S, ATT:I, ATA:I, ACC:T, ACA:T
CCG:P, CCT:P, CAC:H, CGC:R, CGG:R, CTT:L, CTA:L
GGT:G, GTG:V, GAC:D, GCA:A, GCC:A, GCT:A, GCG:A, GGC:G, GTC:V
TTA:L, TTG:L, TAT:Y, TCA:S, TGT:C, TGC:C, TGA:*, TAG:*, TAA:*

### Returns or Examples:
	"AGGTGACACCGCAAGCCTTATATTAGC"
	=> [
		"R*HRKPYIS",
		"GDTASLIL",
		"VTPQALY*",
		"ANIRLAVSP",
		"LI*GLRCH",
		"*YKACGVT"
	]
