import { Dialog, Portal, Text } from "react-native-paper";

export const ModalComponent = ({
  title,
  content,
  visible,
  setVisible,
  icon = "camera",
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <Dialog.Icon icon={icon} />
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{content}</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};
