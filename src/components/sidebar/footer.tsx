import { get } from "lodash";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

interface TokenInfoProps {
    name: string;
    icon: string;
    price: string;
}
const HBSidebarFooter = () => {
    const prices = useSelector(state => get(state, 'package.price', {}))
    const TokenInfo = ({ name, price, icon }: TokenInfoProps) => {
        return <div className="hb-sidebar-footer-line">
            <Image className="icon-cent" src={icon} alt={name} />
            <p>{price}</p>
        </div>
    }
    return <div className="hb-sidebar-footer">
        <div className="mb-3 text-center">
            <Image src="/images/fimage.png" className="img-fluid" alt="HimBOX" />
        </div>
        <TokenInfo name="Cent" price={get(prices, 'him_price', 0)} icon="https://centbox.io/static/media/cent-icon.6bdeee83.png" />
        <TokenInfo name="Polkadot" price={get(prices, 'dot_price', 0)} icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUISURBVHgBtZlLSGtHGMe/2GCvihq6EcFHFFERIT7whUpNcaEgIorizov4wIVcrzsVvRFBcCEm4qJu1OJGRNoK4kboTUF8VTG6KErVpGCV4vuqVbE6d76TkyGHJOfMifoLH+fLZGbOn3l+M9GAnxBCiujDQA2fadR0oiGX1ByibVGzajQaK7w1VJSO2idqF0Q9dmrj1PTw2ojChsjrMf5qQmlFH4h/LaaEnVodvATyuq3miyE5DRofwnCw/wLOCSDL/f09LC0twfb2NlxcXAhpOp0OkpKSoLi4GAIDA4EDGzUjnUiXvAI3wTkzfXJycgIjIyMwNTUliPQGfSFUVVVBW1sbREdHgwI4040edYCnOGzyNpABRZlMJri7uwMeUGhPTw/U19crZTXTvB8lZUEq7j19jMvVMDg4CMPDw5K00NBQMBqNoNfrISAgAA4PD4VuPzo6kuRrbm6Gjo4OQbAMH+nvZo9UKk4vziyfWCwWEhMTwywjI4NMT0+Tp6cnr/kXFhZIYWGhpIzZbCYKXIhzwEPghFypg4MDyYvKysrI2dmZ0svI8/Mz6erqkpTd2NhQKjbkrfVkqampYS8oKCggNzc3RA0tLS2sfEVFBU8RHXfr7e3tSVoAW1MtV1dXJDU1ldWxvLysVMSE2gJEjd+DDDMzM8wvLy+HuLg4UEtYWBg0Njay73R8KhX5IAgkzqhEL5dzfX2d+bR7wV8qKyu91ukD3P+LsAWLlHLu7u4y32AwSH7r7e2F2NhY6O/vByWioqJAq9UK/v7+PnCQhgINSrlub2+ZHxERIUkfGxsT/NHRUeAhODhYeNJJxpNdaEG9Uq7w8HDm08HO/NXVVeYnJCQADy5hISEhPNkNXAITExOZv7i4yHybzcb8vLw8pWrAbrcDXRcFPzk5GTjQoUCdUq709HTmu4+dra0t5qekpChVA/Pz88zPzc0FDnQBPLlqa2shMjJS2EPz8/NZ+srKCvcLcWhMTk4KPp2dUF1dDTzglMIYTLYVcZbShRUeHh7g3bt3QprD4WBhVlBQEMTHx8tVAZ2dnXB8fCz4rsCCg8sAUaAi2Houccja2hrzc3JyZMvSvRjm5ubY976+PuDEgQJt4Ac7OztCVyFpad5jWwy5SkpKWNci3d3dQLc64ORv7OLfqVWASrAFXXEdhvUYxJ6ensLj46PwxAlxfn4u/O7K197eDg0NDaACm0bc6j6rKYVLhZr9GNfRgYEBKC0tBZUYtXjipyIVJ4o7m5ubXPkw0q6rq4OmpibJYs+JA7VpxS8Wap94S7rvIC5oKAXZ2dmCKBSTmZnpc2xyYmUecd4ccNPa2iqJD2dnZ8kboJfIpQmKhwUXdFFm4iYmJsgbwA5uGvdWpA87KIzF6+troTtd4NbnCqGArjqPX+5BG/at0slNDgc4D/H4ZBE1iKf6XqXS7gs0CnWJ+//LHRynWeBE1wf//PAjkCcCfmJyiZMIFEXiedQiVxqvOFxkZWUx/+7nP4Fs/wvYjN9YD+G/3/4CP7BQDT+5J3gECzQD3ipYfdWAdy50OAjmPks1+nA6XpyfZw2BwJjvQCU28d3KEOes3vQ1gmmgQOjY80i/mvyDnLX8Sq6mbeSZflTwmXg7rHMI5Z7ZL8AML4FW8J4oXIn4CV5x8HUph0i8eXjNBQ97Rn2XqhBqJ+rBFjOpFeb3akqcURAaHlv1orn/DYGGsaaV2pa/f0N8BYYSgXCCNgyDAAAAAElFTkSuQmCC" />
        <div className="text-center pt-2">
            <a className="btn btn-primary" href="https://himbox.io" target="_blank" rel="noreferrer">
                <span>Learn more</span>
            </a>
        </div>
    </div>
}
export default HBSidebarFooter