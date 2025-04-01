export type SectionType = "header" | "footer"

export interface OurCreationsImageProps {
    name: string,
    idx: number
}

type Display = 'hidden' | 'block'

export interface SeeAllButtonProps {
    mobileDisplay: Display,
    desktopDisplay: Display
}
