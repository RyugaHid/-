import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createSearchQuery } from "~/shared/model/store/search/search.slice";
import { toggleSelectVisibility } from "../models/toggleSelect.slice";
import { configForUsers } from "~/shared/const/regExValidate";
import { ValidationErrorMessages } from "~/shared/const/ErrorText";

export const useHeaderInput = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!configForUsers.test(value)) {
      setErrorMessage(ValidationErrorMessages.InputGetUsers);
      return;
    }

    setErrorMessage(null); 
    dispatch(createSearchQuery(value));
  };

  const handleInputClear = () => {
    setErrorMessage(null); 
    dispatch(createSearchQuery(""));
  };

  const handleToggleSelectVisibility = () => {
    dispatch(toggleSelectVisibility());
  };

  return {
    handleInputChange,
    handleInputClear,
    handleToggleSelectVisibility,
    errorMessage,
  };
};
