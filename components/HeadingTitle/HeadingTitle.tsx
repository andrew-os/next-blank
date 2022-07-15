interface HeadingTitleProps{
    text: string;
    Size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}


const HeaderTitle = ({ text, Size }: HeadingTitleProps) => {
    return (
      <Size>{text}</Size>
    )
}

export default HeaderTitle