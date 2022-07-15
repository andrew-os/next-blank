interface ButtonProps{
    text: string;
}


export default function Button({text}: ButtonProps){
    return(
        <button className="px-8 py-3">{text}</button>
    )
}