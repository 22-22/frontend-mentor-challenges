**NEXTJS PROJECT SETUP** (the most basic one)

Folders:

- APP (layout.tsx + page.tsx + ui folder)
- PUBLIC (pictures)

Files:

- next.config, tailwind,config, tsconfig, eslint config, etc.

**QUESTIONS:**

1. What's the best way to render components/elements conditionally? For example, See all button is in different places in a desktop and mobile version.

**WHAT I LEARNED:**

- practiced **NEXT/FONT**

// fonts.ts

`import { Josefin_Sans } from 'next/font/google'`

```
export const josefin_sans = Josefin_Sans({
weight: ['300'],
variable: '--font-josefin-sans'
})
```

// layout.tsx

```
<h2 className={`mb-6 ${josefin_sans.className} text-4xl md:text-5xl uppercase`}>the leader in interactive vr</h2>
```

(in the end I didn't update tailwind.config.css)

- practised **NEXT/IMAGE**:

layout="responsive" is outdated, used classes `"w-full h-full"`

```
<figure className="relative shadow-inset-black-desktop">
            <Image
                className="**w-full h-full** relative -z-10"
                src={`/desktop/${name}.jpg`}
                width={256} // real height
                height={450} // real width
                alt={name}
            />
            <figcaption className="absolute bottom-0 p-10 text-3xl text-white uppercase font-sans">{CAPTIONS[idx]}</figcaption>
    </figure>
/>
```

- **INSET BOX-SHADOW ON IMAGE:**

// globals.css:

```
@theme {
  --inset-shadow-black-desktop: inset 0 -5em 50px rgba(0, 0, 0, 0.5);
  --inset-shadow-black-mobile: inset 5em 0 50px rgba(0, 0, 0, 0.5);
}

class="inset-shadow-black-desktop"
```

// shadow on figure, `className="relative -z-10"` on Image.

- **HOVER TRANSITION EXAMPLE:**

`hover:scale-110 transition duration-200 ease-in`

ICONS:
ul > li > a > svg

practised GRID
`grid-cols-4`
