interface TokenCardProps {
    image: string;
    altText?: string;
}
const TokenCard = ({ image, altText = '' }: TokenCardProps) => {
    return <div className="hb-token"><img data-aos="fade-up" src={image} alt={altText} />
    </div>
}
export default TokenCard