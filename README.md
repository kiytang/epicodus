#Epicodus Tutorial

##Day 13
###Task:
Make a new webpage about a place you'd like to go on vacation. Use Bootstrap for your styles.

###Screenshot:
![Vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot1.png)

- Override some of Bootstrap's styles with your own. Use a second stylesheet; don't change Bootstrap's code!

###Screenshot:
![Vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot2.png)

- Search for Bootstrap themes, and pick out another theme built with Bootstrap. Replace Bootstrap's origin CSS with the theme's CSS.

###Screenshot:
![vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot3.png)


###Task:
Add columns and rows to your vacation page.
To complete this section I implemented Bootstrap "Example: Stacked-to-horizontal" code into my 'Vaction' web page. To furhter highlight the difference in rows and columns, I assigned specfic colors as folows:
```sh
 .col-md-1 {
    color: blue;
}
 .col-md-4 {
    color: white;
}

 .col-md-6 {
    color: yellow;
}
 .col-md-8 {
    color: green;
}
```
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

###Screenshot:
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

###Screenshot:
![vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot6.png)

##Day 16

Today I read more on Skeletons'offsets' feature. From my understanding,  one uses offset-by-(size... one, three, seven, fifteen.....) to create gutters/gaps in between blocks in one row.

##Day 17

###Task:
Make a page about your favorite sports team with Skeleton.

## What I learnt:
Incorporated buttons within my sports page. For this task I used two types:
- a standard size: 

```sh
<a href="http://en.wikipedia.org/wiki/José_Mar%C3%ADa_Olazábal" 
class="button">More Info.</a>

```

- full-width button.

```sh
<a href="#" class="full-width button">Email</a>
```

####Screenshot
![vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot7.png)

##Day 18

###Task:
Pick one of your pages that has images on it. Create a class for images that should not be shown on small screens. Add a media query that hides these images (using display: none) on smaller screen sizes.

To complete this task I created the following class for the image:

```
<img src="img/cat.gif" alt="A photo of cat with optical glasses" class="small_image">
```

In order for the image to not display on a typical small screen device, I used the following @media query:


```sh
@media (min-width: 0px) and (max-width:400px){
	.small_image {
		display: none;
	}
}
```

## What I learnt:
- min-width
This sets the minimum browser width that the specified styles are applied to. If the 


##Day 19

###Task:
Make a page about your best friend with Foundation.

## What I learnt:

Inside the CSS folder provided by Foundation, there consists of three separate files, two of which I had to research more to further understand:
- foundation.min.css
	This particular files is essentially the same as foundation.css, where it differs is that the .min files has had all its spaces and returns removed- The purpose is to reduce file size to minimize load times. 
- normailize.css 
	To demonstrate one of the many uses of this file, I will base my example by using unordered-list. Some browsers will use margin to push an unordered list off the edge the page, whilst others may use padding. For the purpose of consistency, Normalize will set everything up to use either margin or padding. 

- Foundation's small grid system:
Foundation consists of a default 12 grid system. The simplest way to set up a grid system is by creating a div tag with class of row. Each row consists of 12 columns, so we are able to create as many instances as possible so long as the total amounts to 12. 

Example:
```sh
 <div class="row">
      <div class="small-8 columns">
        <p>This is 8 small columns</p>
      </div>
      <div class="small-4 columns">
        <p>This is 4 small columns wide</p>  
      </div>
    </div>
```

Note:
```sh
<div class="small-8 columns">

```
In the above div, there are two classes
- class of 'columns'
- class of 'small-8'

As there are 12 columns in total, small-8 means that this div will account for 8 out of the 12 columns. In Foundation, 'small' ensures that the grid remains the same for all devices. This is in contrast to both 'medium' and 'large' grids where at specific break points the columns will stack ontop of each other. 

In the sceenshot below, I have reduced the screen size to its lowest width.As you can see the columns as per the small-grid feature, remains unstacked. 

####Screenshot
![small_grid](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot8.png)




