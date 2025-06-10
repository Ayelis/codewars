# Problem: Breadcrumb Generator
	Difficulty: 4
	Date Completed: 2025/06/09

## 📜Instructions
	Full problem description:
	[CodeWars Link](https://www.codewars.com/kata/563fbac924106b8bf7000046)

## 🛠Function(s) Usage:
	Function: generateBC(url, separator);

### Inputs:
	url -> A standard website uniform resource locator string, without protocol
	separator -> A string which should separate the breadcrumbs visually

### Returns or Examples:
	Parse the URL and generate breadcrumb links for the "current page" as follows:

    "mysite.com/pictures/holidays.html", " : "
    ->
    	'<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'

    "www.codewars.com/users/GiacomoSorbi", " / "
    ->
    	'<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'

    "www.microsoft.com/important/confidential/docs/index.htm#top", " * "
    ->
    	'<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>'

    "mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "
    ->
    	'<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'

    "www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "
    ->
    	'<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
