// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

const useForm = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setShowSuccessMessage(true);
  //   };

  return [values, handleChanges];
};

export default useForm;
