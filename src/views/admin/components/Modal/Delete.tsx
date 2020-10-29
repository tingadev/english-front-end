import React from "react";
import { Button, Modal, ModalFooter } from "reactstrap";

interface ModalDeleteProps {
  isOpen: boolean;
  callback?: any;
  loading?: boolean;
  onClose?: (val: boolean) => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  isOpen,
  callback,
  loading,
  onClose,
}) => {
  return (
    <Modal
      className="modal-login"
      modalClassName="modal-brand"
      isOpen={isOpen}
      centered
      toggle={() => onClose && onClose(false)}
    >
      <div className="modal-header justify-content-center">
        <button
          aria-hidden={true}
          className="close"
          onClick={() => onClose && onClose(false)}
          type="button"
        >
          <i className="now-ui-icons ui-1_simple-remove"></i>
        </button>
        <div className="header header-info text-center">Are you sure?</div>
      </div>
      <div className="modal-body"></div>
      <ModalFooter className="text-center">
        <Button
          className="bg-primary btn-round w-100"
          color="info"
          onClick={() => {
            callback();
            onClose && onClose(false);
          }}
          type="button"
          size="lg"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDelete;
