/*
  Solution for "Pagination Helper"
  CodeWars Link: https://www.codewars.com/kata/515bb423de843ea99400000a

  Complexity Analysis:
  - Time Complexity: O(1) - For the constructor, O(1) for all functions
  - Space Complexity: O(1) - For the constructor, O(1) for allocating the
	instance variables
  
  Considerations:
  Originally I was storing the collection in the constructor as I needed it to
  pull the length, before realizing I could reduce the Space Complexity by
  tossing out the array and just storing the length in memory. O(1) FTW!
*/

class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// We take in an array of items and a integer indicating items/page
		// Assign the collection length and itemsPerPage to the instance
		this.collectionLength = collection.length;
		this.itemsPerPage = itemsPerPage;
		// Calculate the total number of pages
		this.pageTotal = Math.ceil(collectionLength / itemsPerPage);
	}
	itemCount() {
		// returns the number of items within the entire collection
		return this.collectionLength;
	}
	pageCount() {
		// returns the number of pages
		return this.pageTotal;
	}
	pageItemCount(pageIndex) { 
	// returns the number of items on the current page. page_index is 0-based
		// we should return -1 for pageIndex values that are out of range
    if (this.collectionLength === 0 || pageIndex < 0 || pageIndex >= this.pageTotal)
        return -1;

		// on the last page, divide up the items and return the remainder
		if(pageIndex===this.pageTotal-1)
        return this.collectionLength % this.itemsPerPage || this.itemsPerPage;
 		
		// when it's not the last page, we return the maximum item count
		return this.itemsPerPage;
	}
	pageIndex(itemIndex) { // determines the page for an item. 0-based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (this.collectionLength === 0 || itemIndex < 0 || itemIndex >= this.collectionLength) return -1;

    // Calculate the page index
    return Math.floor(itemIndex / this.itemsPerPage);
	}
}
