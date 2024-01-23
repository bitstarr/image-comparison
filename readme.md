# `<image-comparison>`

A web component to create an image comparison element. Based off of [this Codepen](https://codepen.io/stoumann/pen/VwKgJNv) from [Mads Stoumann](https://codepen.io/stoumann).

[Check out the Demo](https://bitstarr.github.io/image-comparison/demo.html)

## Usage

```html
<script type="module" src="image-comparison.js"></script>
<link rel="stylesheet" href="image-comparison.css">

<image-comparison class="imgcompare">
    <img class="before" src="https://picsum.photos/960/540?random=1" alt="A random image from Unsplash" />
    <img class="after" src="https://picsum.photos/960/540?random=2" alt="Another random image from Unsplash" />
</image-comparison>
```

### Change aspect ratio

```html
<image-comparison aspect-ratio="4/3">
    …
</image-comparison>
```
