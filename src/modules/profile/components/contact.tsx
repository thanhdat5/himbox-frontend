import { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HBCard from "../../../components/card";
import { MESSAGES } from "../../../constants";
import { updateUserInfoRequest } from "../../../redux/actions/userActions";
import { getUserLoadingSelector } from "../../../redux/selectors/userSelectors";
import { validatePhone } from "../../../utils/helpers";

const HBProfileContact = ({ userInfo }: any) => {
    const dispatch = useDispatch();
    const loading = useSelector(getUserLoadingSelector);
    const [phone, setPhone] = useState(userInfo?.phone || '');
    const [twitter, setTwitter] = useState(userInfo?.twitter || '');
    const [telegram, setTelegram] = useState(userInfo?.telegram || '');
    const [instagram, setInstagram] = useState(userInfo?.instagram || '');
    const [errors, setErrors] = useState<any>(null);

    const handleUpdateProfile = async (e: any) => {
        e.preventDefault();
        setErrors(null);
        if (!validatePhone(phone)) {
            setErrors({ phone: MESSAGES.INVALID_PHONE });
            return;
        }
        dispatch(updateUserInfoRequest({ phone, telegram, instagram, twitter }));
    }

    return <HBCard className="d-flex flex-column align-items-start justify-content-between mb-md-4 mb-3 h-100-md-4-3">
        <div className="w-100">
            <FormGroup className="mb-3">
                <FormLabel>Phone</FormLabel>
                <FormControl type="text" placeholder="+14899999999" onChange={(e: any) => setPhone(e.target.value)} value={phone} />
                {errors?.phone && <Form.Text className="text-error">{errors?.phone}</Form.Text>}
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Telegram</FormLabel>
                <FormControl type="text" onChange={(e: any) => setTelegram(e.target.value)} value={telegram} />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Twitter</FormLabel>
                <FormControl type="text" onChange={(e: any) => setTwitter(e.target.value)} value={twitter} />
            </FormGroup>
            <FormGroup className="mb-4">
                <FormLabel>Instagram</FormLabel>
                <FormControl type="text" onChange={(e: any) => setInstagram(e.target.value)} value={instagram} />
            </FormGroup>
        </div>
        <Button type="submit" onClick={handleUpdateProfile} disabled={loading}>
            <span>Update</span>
        </Button>
    </HBCard>
}
export default HBProfileContact