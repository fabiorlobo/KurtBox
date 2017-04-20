# What is this?

**KurtBox** is a very simple images presentation page: You just need to put your images on a folder and done, the presentation is ready.

It's like a... box... for images.

Who is Kurt? I don't know, I'm terrible with names.

Click for a demonstration: [**KurtBox**](https://www.fabiolobo.com.br/labs/kurtbox/)

## How it works?

Download `job_folder`.

Put your images on `presentation` folder. The `index.php` will automatically create a list with the images (the name of each image will be its title) and a menu with anchors (thanks to [anchorific.js](https://github.com/renettarenula/anchorific.js/)).

That's all. Just make sure to change the `<title>` on `index.php` for something related to your presentation.

## Advanced options

Need to optimize your images or customize the CSS? Using Gulp, edit the files on `dev_files` folder!

### Gulp tasks

	gulp
	
Generates CSS with Compass and JS with Uglify.

	gulp watch
	
Watch for CSS and JS changes.

	gulp images
	
Optimize GIF with gifsicle, PNG with optipng, SVG with svgo and JPG with guetzli. In that case, you need to put your images on `dev_files/optimize_images` folder.

See `gulpfile.js` for more options.

-

**KurtBox**

Created by Fabio Lobo  
contato@fabiolobo.com.br  
[www.fabiolobo.com.br](https://www.fabiolobo.com.br)  

![Fabio Lobo Logo](https://www.fabiolobo.com.br/wp-content/themes/fl5.0/images/logo.svg)