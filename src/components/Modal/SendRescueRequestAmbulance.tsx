import {
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Icon,
  CloseIcon,
  ModalBody,
  ModalFooter,
  Button,
  Modal,
  Text,
} from '@gluestack-ui/themed';
import React, { useState, useRef } from 'react';
import { Toast, ALERT_TYPE } from 'react-native-alert-notification';
import Spinner from 'react-native-loading-spinner-overlay';

import { COLORS } from '~/src/constants/color';
import FetchUserData from '~/src/hooks/firebase/fetchUserData';
import SendRequest from '~/src/services/firebase/functions/sendRequest';
const SendRescueRequestAmbulance = () => {
  const [showModal, setShowModal] = useState(false);
  const [isloading, setLoading] = useState(false);
  const { value, loading } = FetchUserData();
  //   console.log(showModal);
  const ref = useRef(null);
  const firstName = value?.data()?.firstName;
  const lastName = value?.data()?.lastName;
  const userId = value?.data()?.userId;
  const address = value?.data()?.address;
  const contactNo = value?.data()?.contactNo;
  const fullName = firstName + ' ' + lastName;

  const handleSendRequest = async () => {
    setShowModal(false);
    setLoading(true);
    const { success, error } = await SendRequest({
      address,
      name: fullName,
      isWithAmbulance: true,
      contact: contactNo,
      userId,
      status: 'Not Yet Response',
    });

    if (!success) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Rescue Request',
        autoClose: true,
        textBody: error,
      });
      console.log(error);
    }

    setLoading(false);
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Rescue Request',
      autoClose: true,
      textBody: 'Rescue Resquest Sent Success',
    });
  };
  return (
    <>
      <Spinner visible={loading} color={COLORS.primary} />
      <Spinner visible={isloading} color={COLORS.primary} />
      <Button
        onPress={() => setShowModal(true)}
        ref={ref}
        bgColor="#CCCDCD"
        borderColor="black"
        borderRadius={20}
        h={170}>
        <ButtonText color="black" fontFamily="PoppinsBold" size="2xl" textAlign="center">
          Send A Rescue Request and Ambulance
        </ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="sm">Rescue Request and Ambulance</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>Are you sure you want to send a Rescue Resquest and Ambulance?</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}>
              <ButtonText>No</ButtonText>
            </Button>
            <Button size="sm" action="positive" borderWidth="$0" onPress={handleSendRequest}>
              <ButtonText>Yes</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SendRescueRequestAmbulance;
