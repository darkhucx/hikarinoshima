1) Copy _includes/ and assets/ into your repo (merge & overwrite).
2) In _layouts/default.html <head>, add:
   <link rel="stylesheet" href="{{ '/assets/css/site.css' | relative_url }}">
3) Each page uses Front Matter: hero_image, hero_alt, hero_variant.
   Example call in page body:
   {% include hero-media.html src=page.hero_image alt=page.hero_alt variant=page.hero_variant %}
