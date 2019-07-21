---
layout: post
title:      "Jekyll with Require.js"
date:       2019-07-21 11:48:41 +0200
permalink:  jekyll_with_require
---


As i'm sure you know, Jekyll is an excellent static site generator with a prefect setup for blogging. This blog is built with Jekyll. It is writen in ruby, and the real star of the show is the liquid markup templating language.

## Installation

Jekyll is a Ruby gem. You can use RubyGems cli command, gem, to install Jekyll:

```bash
gem install --user-install bundler jekyll
```

## Basic Setup

Cool. Now Jekyll depends on a very strict file structure in order alot of it's compiling to work correctly. It looks like this:

```bash
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid front matter
```

You can create this entire file setup with a simple cli command. 

```bash
jekyll new myblog
```

that gives you exactly this:

```bash
[myblog]$ tree
.
├── 404.html
├── Gemfile
├── Gemfile.lock
├── _config.yml
├── _posts
│   └── 2019-07-21-welcome-to-jekyll.markdown
├── about.md
└── index.md
```
You will need to add other directories needed by hand. This post isn't really meant to be a full on Jekyll tutorial, so I will refer you [here](https://jekyllrb.com/docs/step-by-step/01-setup/) to get you up and running.

Now, what I loved about Jekyll was it's intelligent use of the file structure to make it easy to code every little bit of your app in it's own file. I did this in two ways with the HTML, creating layouts and creating includes. Just put a html file inside of the \_inlcudes folder and include it inside the layout like so:

```html
{% raw %}
{% include home.html %}
{% endraw %}
```
I created an index.html in the root directory and included all my sections like so:
```html
---
# front matter tells Jekyll to process Liquid
# hash marks are not processed, these are comments
title: Home
---

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>nic travis</title>
	</head>
	<body>
		<main>
		{% raw %}
			<section id="home">
				{% include home.html %}
			</section>
			{% include navigation.html %}
			<section id="about">
				{% include about.html %}
			</section>
			<section id="projects">
				{% include projects.html %}
			</section>
			<section id="blog">
				{% include blog.html %}
			</section>
			<section id="contact">
				{% include contact.html %}
			</section>
			{% endraw %}
		</main>
	</body>
</html>
```
## Front Matter

The three lines at the top of the file are what Jekyll describes as 'Front Matter'. It's a basic yml syntax that tell Jekyll, you need to process this file with all your Jekyll magic. You can define variables, and parameters you can then use inside your Liquid markup. This is very useful for blog posts. Here is an example of a Jekyll post file's front matter:

```html
---
layout: post
title:      "My Awesome Post"
date:       2019-05-29 12:44:11 +0000
permalink:  my_awesome_post
excerpt_separator: <!--more-->
---

This is the first paragraph of my post! I can tell Jekyll which part I want to use an the excerpt by using the excerpt_seperator I defined about like so: <!--more-->

Now, everything after this will be the body of the post but won't be included in the excerpt.
```
## Data

Jekyll is designed to be used without a database, obviously since it's a static site generator, but you can put data to iterate over inside of .yml files inside the \_data directory. Here is en example for my navigation links:

```yml
- name: Home
  link: /
- name: About
  link: /about.html
- name: Projects
  link: /blog.html
- name: Blog
  link: /blog.html
- name: Contact
  link: /contact.html
```

Now, in your html files you can iterate over these links like so:
```html
{% raw %}
<nav id="navbar">
	{% for item in site.data.navigation %}
	<a id="{{ item.name }}">
		{{ item.name | upcase }}
	</a>
	{% endfor %}
</nav>
{% endraw %}
```
I put this code above in \_includes/navigation.html. Now I can include it into my layout like so:
```html
{% raw %}
	<section id="home">
		{% include home.html %}
	</section>
	{% include navigation.html %}
	<section id="about">
		{% include about.html %}
		{% endraw %}
```

The liquid template language has tons of its own filters to apply to data inside these template tags. Here is an example where I used the index of the loop, with the forloop.index variable that comes free with liquid, to generate animation delay times for each element:
```html
{% raw %}
<div class="project-box hidden" style="animation-delay: {{ forloop.index | divided_by: 5.0 }}s">
{% endraw %}
```

Pretty cool, you can display the post date like so:

```html
{% raw %}
<span class="post-date">{{ post.date | date_to_string }}</span>
{% endraw %}
```

<!-- Which will compile to this:

```html

<span class="post-date">{{ date | date_to_string }}</span>

``` -->

I am just scratching the surface of Liquid here, definitely read more [here](https://shopify.github.io/liquid/)

## Require.js

Ok, so I loved how all my files, scss and html were neatly seperated and included in the index file. I wanted this for me Javascript as well. There are a few ways to do this, Webpack being an obvious other choice, but I decided to go with Require.js. Here is how it works:

Go over [here](https://requirejs.org/docs/start.html) to get the installation instructions. 

Basically, i just dowload the require.js file, put it inside my js folder, and create a config.js that looks like this:
```javascript
requirejs.config({
	baseUrl: '/assets/js',
	paths: {
		carousel: "carousel",
		jquerymodal: ["//cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min"],
		jqueryui: "lib/jqueryui.min",
		jquery: "lib/jquery",
		index: "index",
		main: "main",
		slick: 'lib/slick.min',
		scrollAnimations: 'custom/scrollAnimations'
	},
	shim: {
        /* Set dependencies */
        jquerymodal : ['jquery']
    }
});
```
As you can see, you can also load from a CDN this way, as I am doing with the jquerymodal library. This file knows what requirejs is because it is defined in the html layout like this:

```html
<script data-main="assets/js/config" src="assets/js/require.js"></script>
```

We are creating, in config.js, what require.js calls module IDs, so to easier define them when including them in other files. The baseUrl just lets require know where all of these files reside, my js directory tree looks like this:
```bash
assets/js
├── config.js
├── custom
│   └── scrollAnimations.js
├── index.js
├── lib
│   ├── carousel.js
│   ├── jquery.js
│   ├── jqueryui.min.js
│   └── slick.min.js
└── require.js
```
As you can see, I have all of my vendor librarys in lib, and all of my custom made scripts in custom. I load everything into index.js like so:

```javascript
(function(){
	define(["jquery", "jqueryui", "jquerymodal", 'scrollAnimations', 'slick'], function($, $ui, modal, scrollAnimations, slick){

		// all of my logical code will now go here

	}
})();
```

Now, as you can see, it told require.js which libraries I need to run the code inside this define block. I need almost everything, since this is the index, I only define what I actually would need for this block. 



Ok, getting close. Now, I was only actually able to get this code to execute in the browser by adding this line to the html layout:
```html
<script type="text/javascript">
	require(["config"], function() {
		require(['index'], function(){
			console.log('all js loaded')
		})
	});
</script>
```

That's what actually loads, and executes the code inside index. Now, all my js is conveniently seperated into different files to help keep my sanity when trouble shooting, which is the main reason I went down this road. But other benefits of require.js is it will optimize all your code, combine it into onw minified js file, for production. That process can be read about in more detail [here](https://requirejs.org/docs/optimization.html).

Thanks for reading everyone, hope this helps.