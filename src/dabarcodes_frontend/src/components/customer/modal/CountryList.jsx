import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useModal } from "../../../context/ModalContext";
import { useAuthStore } from "../../../store/authStore";

const CountryList = () => {
  const { isCountryList, closeCountryList } = useModal();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const setCountry = useAuthStore((state) => state.setCountry);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const formattedCountries = data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        setLoading(false); // End loading
      }
    };

    if (isCountryList) {
      fetchCountries();
    }
  }, [isCountryList]);

  const handleCountryClick = (code, name, image) => {
    setCountry(code, name, image);
    closeCountryList();
  };

  return (
    <Modal
      isOpen={isCountryList}
      onClose={closeCountryList}
      className="mt-20 mx-2 md:mx-20"
      mainclass="flex justify-end items-start"
    >
      <div className="w-full hide-scrollbar h-[200px] overflow-y-auto">
        {loading ? (
          <div className="flex  justify-center items-center h-full">
            <div className="loaders"></div>
          </div>
        ) : (
          <ul className="space-y-2">
            {countries.map((country) => (
              <li
                title={country.name}
                key={country.code}
                onClick={() =>
                  handleCountryClick(country.code, country.name, country.image)
                }
                className="flex items-center gap-4 p-2 border-b border-gray-200 cursor-pointer"
              >
                <img
                  src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  className="w-8 h-6"
                />
                <span className="text-lg font-medium">{country.code}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Modal>
  );
};
export default CountryList;
