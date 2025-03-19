# Problem: Pagination Helper
	Difficulty: 5
	Date Completed: 2025/03/19

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/515bb423de843ea99400000a)

## 🛠Function(s) Usage:
	Function: new PaginationHelper(collection, itemsPerPage);

### Inputs:
	As a class, this defines an object with multiple inputs. The class
	constructor includes inputs for:
		-An array of items.
		-The number of items that should be shown on a page.

	This constructor also defines a number of functions	with varying input,
	including:
		helper.pageItemCount(n); //n = the page to inquire about the number of items shown [0 indexed]
		helper.pageIndex(n); //n = the item to inquire on which page it appears
	And two functions that expect no input.
		helper.pageCount();
		helper.itemCount();
	

### Returns or Examples:
	The list of expected interactivity for the final object is as follows, programmatically:
	
    var helper = new PaginationHelper(['a','b','c','d','e','f'], 4); //first, define the object
	helper.pageCount(); // should == 2 (the number of pages the items are paginated into)
	helper.itemCount(); // should == 6 (the number of items)
	helper.pageItemCount(0); // should == 4 (the items shown on page 0)
	helper.pageItemCount(1); // last page, should == 2 (the items shown on page 1)
	helper.pageItemCount(2); // should == -1 since the page is invalid (no items on the next page)

	// pageIndex takes an item index and returns the page that it belongs on
	helper.pageIndex(5); // should == 1 (zero based index, the sixth item is on the second page)
	helper.pageIndex(2); // should == 0 (the third item is on the first page)
	helper.pageIndex(20); // should == -1 (there aren't 20 items)
	helper.pageIndex(-10); // should == -1 (negative items aren't real)
