interface LinkButtonProps{
    text: string;
    url?: string;
    phoneNumber?: string;
    isPhone?: boolean
}

export default function LinkButton({text, url, phoneNumber, isPhone = false}: LinkButtonProps){
    return(
        <a href={isPhone ? `tel:${phoneNumber}` : url}>{text}</a>
    )
}