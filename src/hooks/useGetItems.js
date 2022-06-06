import axios from "axios";

const useGetItems = async (props) => {
  const fetching = async (props) => {
    const response = await axios.get(props.url);

    if (!response.ok) {
      throw new Error("Can't fetch contents");
    }

    const data = await response.json();

    return data;
  };
  try {
    const data = await fetching({ url: props.url });
    return data;
  } catch (err) {
    alert(err.message);
    return null;
  }
};

export default useGetItems;
