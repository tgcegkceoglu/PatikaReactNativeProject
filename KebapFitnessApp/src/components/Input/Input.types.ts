export interface InputProps{
    label:string,
    placeholder:string
    onChangeText:((text: string) => void) | undefined
}