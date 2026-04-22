import { PasswordForm } from "../Auth";
import { Modal } from ".";

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
