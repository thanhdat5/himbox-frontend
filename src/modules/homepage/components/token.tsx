interface TokenCardProps {
    image: string;
    altText?: string;
    href?: string;
}
const TokenCard = ({ image, altText = '', href = '' }: TokenCardProps) => {
    return <a href={href} target="_blank" className="hb-token"><img data-aos="fade-up" src={image} alt={altText} />
    </a>
}
export default TokenCard