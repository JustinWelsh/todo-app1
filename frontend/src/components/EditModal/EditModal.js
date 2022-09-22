import {Button, Modal} from "react-daisyui";
import Form from "../Form/Form";

const EditModal = ({ visible, toggleVisible, selectedTask, getAllTasks }) => {
    return (
        <div className="font-sans">
            <Modal open={visible}>
                <Modal.Body>
                    <Form selectedTask={selectedTask} toggleVisible={toggleVisible} getAllTasks={getAllTasks}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EditModal;