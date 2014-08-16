#Epicodus Tutorial

##Day 13
###Task:
Make a new webpage about a place you'd like to go on vacation. Use Bootstrap for your styles.

###Screenshoot:
![Vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot1.png)

- Override some of Bootstrap's styles with your own. Use a second stylesheet; don't change Bootstrap's code!

###Screenshoot:
![Vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot2.png)

- Search for Bootstrap themes, and pick out another theme built with Bootstrap. Replace Bootstrap's origin CSS with the theme's CSS.

###Screenshoot:
![vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot3.png)


###Task:
Add columns and rows to your vacation page.
To complete this section I implemented Bootstrap "Example: Stacked-to-horizontal" code into my 'Vaction' web page. To furhter highlight the difference in rows and columns, I assigned specfic colors as folows:
- .col-md-1 {
    color: blue;
}
- .col-md-4 {
    color: white;
}

- .col-md-6 {
    color: yellow;
}
- .col-md-8 {
    color: green;
}

###Screenshoot:
![vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot4.png)

##Day 14
###Task:

Rework one of your existing pages to use Bootstrap's grid.
For theis task I made use of Bootstraps's ".col-md-4", to include three subject topics:
- How I construct my day
- Nutrtional Values
- What I am currently Reading

## What I learnt:
Rows must be placed within a .container (fixed-width) or .container-fluid (full-width) for proper alignment and padding.

###Screenshoot:
![vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot5.png)

##Day 15
###Task:
Make a page with [!Skeleton]("http://www.getskeleton.com/").

Skeleton contains a "one-third" class which allows one to split the width into three columns. In my example I made use of the "one-third" class to split my three subjects:
- Broadcasting
- Travel
- Nature

## What I learnt:
- In order for the images to resize accordingly to their given containers, max-width was set to '100%'' and height set to 'auto'.  
	
- Viewport declaration:
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
The viewpoint declaration makes sure that whatever the viewport size is, make the initial scale equal to 1 which is eqivalent to 100%, same applies to the maximum-scale. The aim is that a visitor who visits the site using a iOS device, they will be unable to pinch and zoom as this will defeat the purpose of responsive design.

###Screenshoot:
![vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot6.png)

##Day 15

Today I read more on Skeletons'offsets' feature. From my understanding,  one uses offset-by-(size... one, three, seven, fifteen.....) to create gutters/gaps in between blocks in one row.


