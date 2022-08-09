import { useState } from "react";
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import HBCard from "../../../components/card";
import PasswordControl from "../../../components/password-control";
import { changePasswordRequest } from "../../../redux/actions/userActions";
import { getCurrentUserId } from "../../../services/appService";

const HBProfileChangePassword = () => {
    const dispatch = useDispatch();
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (currentPassword === newPassword) {
            const userId = getCurrentUserId();
            const postData = { userId, currentPassword, newPassword };
            dispatch(changePasswordRequest(postData));
        } else {
            // show error message
        }
    }

    return <HBCard>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
                <FormLabel>Current Password</FormLabel>
                <PasswordControl required value={currentPassword} onChange={(e: any) => setCurrentPassword(e.target.value)} />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>New Password</FormLabel>
                <PasswordControl required value={newPassword} onChange={(e: any) => setNewPassword(e.target.value)} />
            </FormGroup>

            <FormGroup className="mb-4">
                <FormLabel>Confirm Password</FormLabel>
                <PasswordControl required value={confirmPassword} onChange={(e: any) => setConfirmPassword(e.target.value)} />
            </FormGroup>

            <Button type="submit">
                <span>Change password</span>
            </Button>
        </Form>
    </HBCard>
}
export default HBProfileChangePassword