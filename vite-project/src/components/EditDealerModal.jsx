import React from 'react'
import DealerForm from './DealerForm';
import Modal from './Modal';
const EditDealerModal = ({ dealer, onClose, onSave }) => (
  <Modal isOpen={!!dealer} title={`Edit ${dealer?.name}`} onClose={onClose} type="success">
    <DealerForm dealer={dealer} onSubmit={onSave} onCancel={onClose} />
  </Modal>
);

export default EditDealerModal;