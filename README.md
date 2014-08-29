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
This sets the minimum browser width that the specified styles are applied to.


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

####Screenshot:
![small_grid](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot8.png)

##Day 20
Continuing with learning Foundation:

###Task:Combining grids in a single div
This allows one to specify in advanced the layout dimensions for various devices:tablets, mobile and desktop.

Example:

```sh
   <div class="row">
      <aside class="medium-3 small-9 columns">
        <p>Spanning 3 columns.</p>
      </aside>
      <section class="medium-9 small-3 columns">
        <p>Spanning a big space of 9  columns. No matter how big or small my screen browser gets, there will always be 2 columns
        </p>
      </section>
    </div>
```

In the above, I introduced two classes (medium and small) together:

```sh
<aside class="medium-3 small-9 columns">
```
Outcome:

- For the medium dimensions, the relevant content will occupy three columns.

- When the break point for the medium occurs, by default Foundation will result in the content being stacked on top of each other vertically. However, as I have specified a small class, the result is a switch to the specified small grid system.

##Day 21

###Task:
Applying offsets in the grid:
Used to introduce more space between columns.


##Day 22

###Task:
Centering columns

## What I learnt: 
Refers to the centering element to which the class is applied. It does not refer to text within the div. To center text you will need to add a custom style.

##Day 24

###Task:
Nested grid systems

##Day 25

###Task:
Block grids:    
This places a series of items into rows and grids.
The following sample below will result in a unordered list of bulleted images.

```sh
    <div class="row">
      <div class="large-9 columns">
          <ul>
            <li><img src="img/sfbook.jpg" alt="Browsing for books. "></li>
            <li><img src="img/sfdog.jpg" alt="Dogs in the park. "></li>
            <li><img src="img/sfbike.jpg" alt="Biking in San Francisco. "></li>
            <li><img src="img/sfcafe.jpg" alt="People in cafe. "></li>
            <li><img src="img/sfmarket.jpg" alt="Farmer's market. "></li>
            <li><img src="img/sfrocks.jpg" alt="Hot rock massage. "></li>
          </ul>
      </div>
    </div>    
```
In order to convert the markup of the unordered list to a block grid that contains three pieces of content placed across each row (medium size), add the following class to `<ul>`:


```sh
<ul class="medium-block-grid-3">
```

Note:   
In this example I only accommodated for medium resolution, to cater for small resolutions, we can add the following (I used 2 images for this example):

```sh
<ul class="medium-block-grid-3 small-block-grid-2">
```
##Day 26

###Task:
Typography

## What I learnt:

A good pratice for marking up quotes and citations in Foundation is using both the `<blockquote>` and `<cite>` tag. 

Example:
```sh
`<blockquote>`"On my recent visit to Paris, I decided to stay in the Landon Hotel while visiting a friend.  The hotel was quite lovely and the location made it very easy to meet up with my friend.  Also, the room was spacious and the bed was unusually comfortable. I would definitely stay here again!" <cite> Amy Xhou, Los Angeles</cite></blockquote>
```

###Screenshot:
![vacation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot9.png)

Unordered list by default are marked with a bullet point format. To remove the bullet point, add a class of no-bullet to `<ul>`:

Example:

```sh
<ul class="no-bullet">
          <li>Bernal Hill Park</li>
          <li>San Francisco Public Library</li>
        </ul>
```
##Day 27

###Task:
- Text alignment options
- Styling buttons
- Panels
- Thumbnails

## What I learnt:

You can hide an element by adding the class `.hide`. Note that a hidden element does not equate to faster load times. The element still runs behind the scenes each time your site is loaded; the only difference is that it does not get displayed on screen.


Text-alignment: 
- Adding a class of `.text_center` will align the element to the center, irrespective of the screen size.

- Adding a `size` to the front of the text align class will cause it to be applied on that screen size or larger.

In the example below, the text 'Ciao Mondo' will be centered for screen sizes medium and above:

```sh 
  <p class="medium-text-center"><Ciao Mondo></p>
```

- Adding both `size` and `only` will apply the text alignment just for that specific media query. Below the text 'Ciao Mondo' will align to the right only within the medium screen size dimensions.

```sh
  <p class="medium-only-text-right"><Ciao Mondo></p>
```

Button:
To style a button in Foundation is relatively straightforward. In the example below I included a class of `.button` inside of the `<a>` tag in order to create a 'Read More' button. 

```sh
<p><a href="#" class="button round">Read More</a></p>
```
Foundation colours:
By default Foundation has five colours:
- Blue  
- Gray    `.secondary`
- Red     `.alert`
- Green   `.success`
- Orange  `.warning`

The size of the buttons can be selected by adding the following classes:
- `.tiny`
- `.small`
- `.large`

Panels:
Used to highlight certain areas of the web page. To apply, simply add the class `.panel` Note: In the example below, I have added a additional utlility class of `.radius` to give the panel corners a rounded appearence.

```sh
<p class="panel radius">Ciao Mondo</p>
```

Thumbnails:

To covert the images below (the four images are located within a block grid) to thumbnails, include  the class `.th` to the `<a>` tag.
As with previous examples, the added class of `.radius` is optional.

```sh
<ul class="small-block-grid-2 large-block-grid-4">
  <li><a href="#" class="th radius"><img src="img/sfmarket.jpg" alt="Farmer's market. "></a></li>
  <li><a href="#" class="th radius"><img src="img/sfrocks.jpg" alt="Hot rock massage. "></a></li>
  <li><a href="#" class="th radius"><img src="img/sfbike.jpg" alt="Biking in San Francisco. "></a></li>
  <li><a href="#" class="th radius"><img src="img/sfcafe.jpg" alt="Coffee at a cafe. "></a></li>
</ul>
```
##Day 28

###Task

- Overriding Foundation's core CSS

## What I learnt:
We need to add a custom stylesheet within the HTML document in order to allow the customization to take place.

Note: Although you can use add customtomization to the existing Foundation stylesheet, it is generally noted as bad practice as any future version upgrades will result in styles being lost.

How to add cutomisation:

- 1/ Add a additional link tag within the HTML document. In my example, I have named my stylesheet `stylesheet.css` and the resulting link tag is as follows:

```sh
<link rel="stylesheet" href="css/foundation.css" />
<link href="css/stylesheet.css" rel="stylesheet" type="text/css" media="all"/>
```

- 2/ Locate the CSS folder inside of Foundation and create a file named `stylesheet.css`

Within this newly created file `stylesheet.css`, you are able to customize all elements within the HTML document. 

Below, I have created a custom style whereby all my title headings are coloured purple  

```sh
h1, h2, h3, h4, h5, h6 {
  color: #5F2D8C;
}
```

##Day 29

###Task

- Visibility classes
- Adding Google Fonts
- Adding Navigation

Earlier (Day 27) I mentioned how we could use `.hide`. For added hide/show customization, Foundation offers a visibility classes.

A example I use below is how one could tailor a website so that:
- When viewed using a mobile device, the contact information will link directly create a call using the device's call application using `tel:+` 

- When viewed using a medium screened and above devices, the contact information links to the contact site address.

```sh
<p class="hide-for-medium-up"><a href="tel:+000123123">Call</a>today for reservations!</p>
<p class="show-for-medium-up"><a href="#">Make your reservation today!</a></p>
```

Adding Google Fonts:    
There are steps required in order to use the Google Fonts API to add fonts to your webpages:

- 1/ Add a stylesheet link in the HTML document you wish to add the font. Note: In my example I have chosen to use the font style named `Tangerine`

```sh
<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Herr+Von+Muellerhoff">
<link rel="stylesheet" href="css/foundation.css" />
<link rel="stylesheet" href="css/stylesheet.css" />
```

- 2/ Refer to the font in your CSS style sheet:
Below I have made use of the Google Font `Herr+Von+Muellerhoff`for all my heading tags. 

```sh
h1, h2, h3, h4, h5, h6 {
  color: #5F2D8C;
  font-family: 'Herr Von Muellerhoff', cursive;
}
```

Navigation:

The HTML required to create a top bar in Foundation is as shown below. 

```sh
<nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="name">
      <h1><a href="#">My Site</a></h1>
    </li>
     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
  </ul>
  <section class="top-bar-section">
    <ul class="right">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Accommodations</a></li>
      <li><a href="#">Reservations</a></li>
      <li><a href="#">Meetings &amp; Events</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <!-- Left Nav Section -->
    <ul class="left">
      <li><a href="#">Ciao Mondo</a></li>
    </ul>
  </section> 
</nav> 
```

Notes:
- To create a top-bar, add the class `.top-bar` to the `nav` class:     
`<nav class="top-bar" data-topbar role="navigation">`  
Notice a `data-topbar` is also added. Anytime we see `data-`, it indicates that we are working with JavaScript.

- `<li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>` will trigger the menu botton (often referred to as the Hamburger button) to appear at small  screen.

- `<section class="top-bar-section">` contains the main navigation for our webpage. I have added a class of `.right` to position my navigation on the right side of the screen.

- `<li class="active"><a href="#">Home</a></li>`  
A class of `.active` inside a `<li>` indicates the page you are currently on.  

###Screenshot:
####Non collapsed Screen:   
![navigation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot10.png)

####Small Screen:
![navigation](https://raw.githubusercontent.com/kiytang/epicodus/master/Screen_Shot11.png)


