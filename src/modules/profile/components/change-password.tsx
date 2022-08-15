import { useState } from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import HBCard from "../../../components/card";
import PasswordControl from "../../../components/password-control";
import { changePasswordRequest } from "../../../redux/actions/userActions";
import { getUserLoadingSelector } from "../../../redux/selectors/userSelectors";

const HBProfileChangePassword = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getUserLoadingSelector);
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (oldPassword === newPassword) {
            const postData = { oldPassword, newPassword, confirmNewPassword };
            dispatch(changePasswordRequest(postData));
        } else {
            // show error message
        }
    }

    return <HBCard>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Current Password</FormLabel>
                <PasswordControl required value={oldPassword} onChange={(e: any) => setOldPassword(e.target.value)} />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>New Password</FormLabel>
                <PasswordControl required value={newPassword} onChange={(e: any) => setNewPassword(e.target.value)} />
            </FormGroup>

            <FormGroup className="mb-4">
                <FormLabel>Confirm Password</FormLabel>
                <PasswordControl required value={confirmNewPassword} onChange={(e: any) => setConfirmNewPassword(e.target.value)} />
            </FormGroup>

            <Button type="submit" disabled={loading}>
                <span>Change password</span>
            </Button>
        </Form>
    </HBCard>
}
export default HBProfileChangePassword