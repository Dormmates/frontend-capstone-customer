import { useState } from "react";
import { Link } from "react-router-dom";
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
    <header className="w-full border-b border-b-slate-300">
      <ContentWrapper className="flex flex-row justify-between items-center">
        <Link to={"/customer/menu"}>
          <img className="w-full max-w-[100px] md:max-w-[150px] md:max-h-[100px]" src={cca_logo} alt="" />
        </Link>
        <Button className="" onClick={openCloseModal}>
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
        <Button onClick={() => console.log(reservationInput)} className="self-end max-w-[200px]">
          Search
        </Button>
        <p>Here are the results</p>
      </Modal>
    </header>
  );
};

export default CustomerHeader;
