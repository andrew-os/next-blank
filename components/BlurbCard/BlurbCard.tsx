import Link from "next/link";
import HeaderTitle from "../HeadingTitle/HeadingTitle";
import TextBody from "../TextBody/TextBody";

interface BlurbCardProps{
    titleText: string;
    bodyText: string;
    linkText: string;
    linkURL: string;
}

export default function BlurbCard({titleText, bodyText, linkText, linkURL}: BlurbCardProps){
    return(
    <div className="mb-8">
        <HeaderTitle Size="h2" text={titleText} />
        <article className="my-8">
          <TextBody text={bodyText} />
        </article>
        <Link href={`/${linkURL}`}>
            <a className="border border-4 border-indigo-600 py-3 px-7">{linkText}</a>
        </Link>
    </div>
    )
}