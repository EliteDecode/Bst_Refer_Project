import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AlertProfileUpdate = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/dashboard/profile/update-profile");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Attention"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>
          Please update your profile to continue using the app securely. Thank
          you.
        </p>
      </Modal>
    </>
  );
};
export default AlertProfileUpdate;
