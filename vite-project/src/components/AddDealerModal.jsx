import React from 'react'
import DealerForm from './DealerForm';
import Modal from './Modal';

const AddDealerModal = ({ open, onClose, onSave }) => (
  <Modal isOpen={open} title="Add New Dealer" onClose={onClose} type="primary">
    <DealerForm dealer={null} onSubmit={onSave} onCancel={onClose} />
  </Modal>
);

export default AddDealerModal;