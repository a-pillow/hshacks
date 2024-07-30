  import { createContext, useContext, useState, useEffect } from 'react';

  const SharedDataContext = createContext();

  export const SharedDataProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState(null);

    useEffect(() => {
      const storedData = localStorage.getItem('sharedData');
      if (storedData) {
        setSharedData(storedData);
      }
    }, []);

    const setSharedDataAndPersist = (data) => {
      setSharedData(data);
      localStorage.setItem('sharedData', data);
    };

    return (
      <SharedDataContext.Provider value={{ sharedData, setSharedData: setSharedDataAndPersist }}>
        {children}
      </SharedDataContext.Provider>
    );
  };

  export const useSharedData = () => {
    return useContext(SharedDataContext);
  };
