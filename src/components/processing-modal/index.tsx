import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Modal } from 'react-bootstrap';


interface Props {
    visible: boolean,
    setVisible: (val: any) => void,
    onCancel?: () => void,
    loading: number,
    approving?: boolean,
    hash?: string,
    error?: string,
}

function ProcessingModal({
    visible,
    setVisible,
    onCancel,
    loading,
    approving,
    hash,
    error = '',
}: Props) {

    const handleDirect = () => {
        window.open(`https://testnet.snowtrace.io/tx/${hash}`);
    }

    return (
        <Modal
            centered={true}
            show={visible}
            onHide={onCancel}
            className='tq_modal'
            backdrop="static"
        >
            <Modal.Header closeButton={loading !== 0 ? true : false}></Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <h2 id="transition-modal-title">{loading === 0 ? approving ? 'Approving' : 'Depositing' : 'Done'}</h2>
                    <p id="transition-modal-description">{
                        loading === 0 ? 'Your request is being processed. Please wait...' :
                            loading === 1 ?
                                'Your request is submitted. View detail on BSCScan.'
                                :
                                'Your request is rejected. Please try again later.'
                    }</p>
                    {loading === 0 ?
                        <Spinner animation="border" variant="primary" />
                        :
                        loading === 1 ?
                            <div>
                                <div><i className="fas fa-check text-success" style={{ fontSize: '60px' }}></i></div>
                            </div>
                            :
                            <div>
                                <div><i className="fas fa-exclamation-triangle text-warning" style={{ fontSize: '60px' }}></i></div>
                            </div>
                    }
                    {loading === -1 && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
                    {loading === 1 &&
                        <div>
                            <div style={{ cursor: 'pointer' }} onClick={handleDirect}><u>View on MoonBeam Scan</u></div>
                            <button onClick={onCancel} className="tq_btn tq_btn_sm tq_btn_outline tq_btn_outline_primary px-4 mx-auto">Close</button>
                        </div>
                    }
                    {loading === -1 &&
                        <div className="mt-4">
                            <button onClick={onCancel} className="tq_btn tq_btn_sm tq_btn_outline tq_btn_outline_primary px-4 mx-auto">Close</button>
                        </div>
                    }

                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ProcessingModal;
