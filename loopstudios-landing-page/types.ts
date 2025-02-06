export interface OurCreationsImageProps {
    name: string,
    idx: number
}

export type SectionType = "header" | "footer"

type Display = 'hidden' | 'block'

export interface SeeAllButtonProps {
    mobileDisplay: Display,
    desktopDisplay: Display
}
