import { Modal } from ".";

import { PasswordForm } from "../PasswordForm";

const PasswordModal = ({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) => {
  return (
    <Modal close={() => {}} allowClose={false}>
      <PasswordForm onAuthenticated={onAuthenticated} />
    </Modal>
  );
};

export default PasswordModal;
