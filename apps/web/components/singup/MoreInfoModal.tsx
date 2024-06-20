import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
  Button,
} from "@nextui-org/react";
import { IconCamera } from "@tabler/icons-react";

import React from "react";

type MoreInfoModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const MoreInfoModal: React.FC<MoreInfoModalProps> = ({
  isOpen,
  onOpenChange,
}: MoreInfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add some More Information
            </ModalHeader>
            <ModalBody>
              <div className="w-full flex justify-center items-center mb-5">
                <div className="w-28 h-28 border-gray-200 border-3 rounded-full flex justify-center items-center">
                  <IconCamera size={48} color="white" />
                </div>
              </div>
              <Textarea
                label="Give your Bio"
                className="max-w-full"
                placeholder="Enter your Bio here"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="default" variant="flat" onPress={onClose}>
                Skip
              </Button>
              <Button color="primary" onPress={onClose}>
                Sign up
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default MoreInfoModal;
