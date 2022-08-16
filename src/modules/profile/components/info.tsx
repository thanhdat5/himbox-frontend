import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import HBCard from "../../../components/card";
import { getCurrentUserWallet } from "../../../services/appService";
import { toast } from 'react-toastify';

const HBProfileInfo = ({ userInfo }: any) => {
    const wallet = getCurrentUserWallet() || '';

    const handleCopy = () => {
        navigator.clipboard.writeText(wallet);
        toast.success('Copied successfully!', {
            position: 'bottom-center',
            autoClose: 1000,
        })
    }

    return <HBCard className="mb-md-4 mb-3">
        <FormGroup className="mb-3">
            <FormLabel>Your address</FormLabel>
            <div className="hb-form-control-wrap">
                <FormControl required readOnly value={wallet} />
                <span style={{ cursor: 'pointer' }} onClick={handleCopy}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" id="magicoon-Regular"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="copy-Regular">
                            <path id="copy-Regular-2" data-name="copy-Regular" fill="currentColor"
                                d="M21.237,6.177,17.823,2.763a1.736,1.736,0,0,0-1.237-.513H11A3.754,3.754,0,0,0,7.25,6v.25H6A3.754,3.754,0,0,0,2.25,10v8A3.754,3.754,0,0,0,6,21.75h7A3.754,3.754,0,0,0,16.75,18v-.25H18A3.754,3.754,0,0,0,21.75,14V7.414A1.736,1.736,0,0,0,21.237,6.177ZM17.75,4.811,19.189,6.25h-.377A1.064,1.064,0,0,1,17.75,5.188ZM15.25,18A2.252,2.252,0,0,1,13,20.25H6A2.252,2.252,0,0,1,3.75,18V10A2.252,2.252,0,0,1,6,7.75H7.25V14A3.754,3.754,0,0,0,11,17.75h4.25ZM18,16.25H11A2.252,2.252,0,0,1,8.75,14V6A2.252,2.252,0,0,1,11,3.75h5.25V5.188A2.565,2.565,0,0,0,18.812,7.75H20.25V14A2.252,2.252,0,0,1,18,16.25Z">
                            </path>
                        </g>
                    </svg>
                </span>
            </div>
        </FormGroup>

        <FormGroup>
            <FormLabel>Your email</FormLabel>
            <FormControl type="email" value={userInfo?.email} readOnly />
        </FormGroup>
    </HBCard>
}
export default HBProfileInfo