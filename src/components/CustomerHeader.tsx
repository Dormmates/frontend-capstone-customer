import React, { useState } from "react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import { ContentWrapper } from "./layout/Wrapper";
import cca_logo from "../assets/images/cca-logo.png";
import TextInput from "./ui/TextInput";
import InputLabel from "./ui/InputLabel";

const CustomerHeader = () => {
  const [openReservation, setOpenReservation] = useState<boolean>(false);
  const [reservationInput, setReservationInput] = useState<string>("");

  const openCloseModal = () => {
    setOpenReservation((prev) => !prev);
  };

  return (
    <header className="top-0 left-0 w-full h-[120px] border-b border-b-slate-300">
      <ContentWrapper className="flex flex-row justify-between items-center">
        <img className="w-full max-w-[150px] max-h-[100px]" src={cca_logo} alt="" />
        <Button className="h-full max-h-[50px]" onClick={openCloseModal}>
          Search Reservation
        </Button>
      </ContentWrapper>

      <Modal
        isOpen={openReservation}
        onClose={openCloseModal}
        title="Search Reservation"
        className="flex flex-col gap-5 w-full max-w-[800px]"
      >
        <div>
          <InputLabel label="Reservation ID" />
          <TextInput
            placeholder="Input Reservation ID"
            value={reservationInput}
            onChange={(e) => setReservationInput(e.target.value)}
          />
        </div>
        <Button className="self-end max-w-[200px]">Search</Button>
      </Modal>
    </header>
  );
};

export default CustomerHeader;
