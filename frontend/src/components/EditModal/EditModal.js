import {Button, Modal} from "react-daisyui";
import Form from "../Form/Form";

const EditModal = ({ visible, toggleVisible }) => {
    return (
        <div className="font-sans">
            <Modal open={visible}>
                <Modal.Body>
                    <Form />
                </Modal.Body>

                <Modal.Actions>
                    <Button onClick={toggleVisible}>Yay!</Button>
                </Modal.Actions>

            </Modal>
        </div>
    )
}

export default EditModal;