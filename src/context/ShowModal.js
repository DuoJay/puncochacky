import { createContext, useState } from 'react';

const ShowModal = createContext();

export const ShowModalProvider = ({ children }) => {
  const [closedModal, setClosedModal] = useState(true);

  return (
    <ShowModal.Provider value={{ closedModal, setClosedModal }}>
      {children}
    </ShowModal.Provider>
  );
};

export default ShowModal;
