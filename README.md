The challenge: [E-commerce product page](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6)

WHAT I LEARNED

GOOGLE FONTS
import in _global.css_, then _@theme_, then can be used as a class

```
@theme {
--font-kumbh: "Kumbh Sans", "sans-serif"
}
```

SVG

- can be as Next Image
- can be inline, if I want to change the colour (for example, on hover), then in svg `stroke="currentColor"` (or `fill`) and put hover on an enclosing element.
  (made svgs separate components)

HALF-TRANSPARENT OVERLAY FOR MODALS:
`bg-black/50` (alpha) instead of opacity

MODAL
position: `fixed` or `absolute`

close modal on click outside:
closing function on an enclosing tag, `onClick={(evt) => evt.stopPropagation()}` on modal

Center gallery modal
Added h-full on the container, not on the whole modal.

UNDERLINE ON HOVER ON NAV ELEMENT
add a span inside of a nav li element, group class on this li and group-hover on span (span has position:absolute)

MIN HEIGHT FOR EMPTY CART
`max-w-sm min-w-sm max-h-56 min-h-56`

QUESTIONS:

1. Where to have useState for cart modal? In header? Then the whole component must be client.

2. Is it ok if I make a separate component for a mobile navigation (meaning I'm not reusing desktop navigation component)?

3. What's the best way to make components for the PhotoGallery and PhotoGalleryModal to make PhotoGallery reusable and not to repeat the code?
