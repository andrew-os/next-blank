interface TextBodyProps{
    text: string;
}

export default function TextBody({text}: TextBodyProps){
    return(
        <p>{text}</p>
    )
}